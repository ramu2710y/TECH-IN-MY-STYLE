import ast
import os
import subprocess
import tempfile
import time
import uuid
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Tech in My Style – AI Python Studio", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

EXECUTION_TIMEOUT = int(os.getenv("EXECUTION_TIMEOUT", "300"))  # 5 minutes
DOCKER_IMAGE = os.getenv("DOCKER_IMAGE", "python-studio-runner")
USE_DOCKER = os.getenv("USE_DOCKER", "true").lower() == "true"

# Risky patterns — warn only, never block (Docker handles isolation)
RISKY_PATTERNS = [
    "rm -rf", "format", "mkfs", ":(){:|:&};:",
    "dd if=", "chmod 777", "/etc/passwd",
]


class CodeRequest(BaseModel):
    code: str


class AIRequest(BaseModel):
    mode: str  # explain | debug | generate
    code: str
    prompt: str


def validate_syntax(code: str) -> tuple[bool, str]:
    """Check Python syntax using ast.parse."""
    try:
        ast.parse(code)
        return True, ""
    except SyntaxError as e:
        return False, f"SyntaxError at line {e.lineno}: {e.msg}"


def get_warnings(code: str) -> list[str]:
    """Return non-blocking warnings for risky patterns."""
    warnings = []
    for pattern in RISKY_PATTERNS:
        if pattern in code:
            warnings.append(f"Warning: Detected potentially risky pattern: '{pattern}'")
    return warnings


def run_in_docker(code: str, tmp_path: str) -> dict:
    """Execute code inside an isolated Docker container."""
    container_name = f"studio-run-{uuid.uuid4().hex[:8]}"
    cmd = [
        "docker", "run",
        "--rm",
        "--name", container_name,
        "--network", "none",          # No network access
        "--memory", "256m",           # 256MB RAM limit
        "--cpus", "0.5",              # 0.5 CPU limit
        "--pids-limit", "64",         # Limit processes
        "--read-only",                # Read-only root filesystem
        "--tmpfs", "/tmp:size=64m",   # Writable /tmp only
        "-v", f"{tmp_path}:/code/main.py:ro",  # Mount code read-only
        "--user", "nobody",           # Non-root user
        DOCKER_IMAGE,
        "python", "/code/main.py"
    ]
    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=EXECUTION_TIMEOUT,
        )
        output = result.stdout
        if result.stderr:
            output += ("\n" if output else "") + result.stderr
        return {"output": output or "(no output)", "exit_code": result.returncode}
    except subprocess.TimeoutExpired:
        # Kill container if still running
        subprocess.run(["docker", "kill", container_name], capture_output=True)
        return {"output": f"Error: Execution timed out after {EXECUTION_TIMEOUT} seconds.", "exit_code": 1}
    except FileNotFoundError:
        return None  # Docker not available, fall back


def run_direct(code: str, tmp_path: str) -> dict:
    """Fallback: run code directly with Python (dev/testing only)."""
    try:
        result = subprocess.run(
            ["python", "-X", "utf8", tmp_path],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=EXECUTION_TIMEOUT,
            env={**os.environ, "PYTHONIOENCODING": "utf-8", "PYTHONUTF8": "1"},
        )
        output = result.stdout
        if result.stderr:
            output += ("\n" if output else "") + result.stderr
        return {"output": output or "(no output)", "exit_code": result.returncode}
    except subprocess.TimeoutExpired:
        return {"output": f"Error: Execution timed out after {EXECUTION_TIMEOUT} seconds.", "exit_code": 1}


@app.get("/")
def root():
    return {
        "name": "Tech in My Style – AI Python Studio",
        "version": "1.0.0",
        "status": "running",
        "docker": USE_DOCKER,
    }


@app.get("/health")
def health():
    return {"status": "ok", "timestamp": time.time()}


@app.post("/run")
def run_code(req: CodeRequest):
    code = req.code.strip()
    if not code:
        raise HTTPException(status_code=400, detail="No code provided.")

    # Layer 1: Syntax validation
    valid, syntax_error = validate_syntax(code)
    if not valid:
        return {"output": syntax_error, "warnings": [], "exit_code": 1}

    # Layer 2: Collect warnings (non-blocking)
    warnings = get_warnings(code)

    # Write code to temp file (UTF-8 explicit for Windows compatibility)
    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".py", delete=False, prefix="studio_", encoding="utf-8"
    ) as f:
        f.write(code)
        tmp_path = f.name

    try:
        result = None
        if USE_DOCKER:
            result = run_in_docker(code, tmp_path)

        if result is None:
            # Docker unavailable — fallback to direct execution
            result = run_direct(code, tmp_path)
            result["note"] = "Running in direct mode (Docker unavailable)"

        return {
            "output": result["output"],
            "exit_code": result.get("exit_code", 0),
            "warnings": warnings,
            "note": result.get("note", ""),
        }
    finally:
        try:
            os.unlink(tmp_path)
        except Exception:
            pass


@app.post("/ai-assist")
def ai_assist(req: AIRequest):
    """
    Simple rule-based AI assistant.
    In production, replace with OpenAI / Bedrock / local LLM call.
    """
    mode = req.mode
    code = req.code[:3000]  # Limit context size
    prompt = req.prompt

    if mode == "explain":
        lines = code.strip().split("\n")
        imports = [l for l in lines if l.startswith("import") or l.startswith("from")]
        functions = [l for l in lines if l.startswith("def ")]
        classes = [l for l in lines if l.startswith("class ")]

        response = f"Code Analysis:\n\n"
        response += f"• Total lines: {len(lines)}\n"
        if imports:
            response += f"• Imports: {', '.join(i.split()[-1] for i in imports[:5])}\n"
        if functions:
            response += f"• Functions: {', '.join(f.split('(')[0].replace('def ', '') for f in functions)}\n"
        if classes:
            response += f"• Classes: {', '.join(c.split('(')[0].replace('class ', '') for c in classes)}\n"
        response += f"\nThis code appears to be a Python script"
        if any("sklearn" in l or "numpy" in l or "pandas" in l for l in imports):
            response += " using AI/ML libraries"
        response += ".\n\nTip: Use the Run button to execute and see the output in the console."

    elif mode == "debug":
        valid, err = validate_syntax(code)
        if not valid:
            response = f"Syntax Error Found:\n{err}\n\nFix: Check the line number and ensure proper indentation and syntax."
        else:
            response = f"No syntax errors detected.\n\nDebug Tips:\n• Add print() statements to trace values\n• Check variable types with type()\n• Use try/except to catch runtime errors\n• Verify imports are available in the environment"
            if prompt and prompt != "Find bugs in this code":
                response += f"\n\nRegarding '{prompt}':\nCheck that all variables are defined before use and that function arguments match the expected types."

    elif mode == "generate":
        response = f"Code Generation:\n\nFor '{prompt}', here's a starting template:\n\n"
        if "sort" in prompt.lower():
            response += "# Sorting example\ndata = [3, 1, 4, 1, 5, 9, 2, 6]\ndata.sort()\nprint(data)"
        elif "file" in prompt.lower():
            response += "# File handling\nwith open('output.txt', 'w') as f:\n    f.write('Hello!')\nprint('File written.')"
        elif "class" in prompt.lower():
            response += "# Class template\nclass MyClass:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        return f'Hello, {self.name}!'"
        else:
            response += f"# Template for: {prompt}\n# Add your implementation here\nprint('Generated code placeholder')"
    else:
        response = "Unknown mode. Use: explain, debug, or generate."

    return {"response": response}


@app.get("/templates")
def get_templates():
    """Return available code templates."""
    return {
        "templates": [
            {"id": "hello", "name": "Hello World", "category": "Basics"},
            {"id": "numpy", "name": "NumPy Demo", "category": "AI/ML"},
            {"id": "pandas", "name": "Pandas DataFrame", "category": "Data Science"},
            {"id": "chatbot", "name": "Simple Chatbot", "category": "AI Playground"},
            {"id": "spam", "name": "Spam Classifier", "category": "ML"},
        ]
    }
