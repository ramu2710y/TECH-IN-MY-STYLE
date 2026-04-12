import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useDarkMode } from "../components/JsNavbar";

/* ─── Default JS playground code ───────────────────────────────── */
const DEFAULT = {
  html: `<!-- ✏️ Write your HTML here -->
<div class="card">
  <div class="js-badge">JS</div>
  <h1>JavaScript Playground</h1>
  <p>Edit any tab and click <strong>Run</strong> to see your code in action!</p>
  <div class="button-row">
    <button onclick="showAlert()">Click Me!</button>
    <button onclick="changeColor()">Change Color</button>
    <button onclick="addItem()">Add Item</button>
  </div>
  <ul id="list"></ul>
  <p id="output" class="output"></p>
</div>`,

  css: `/* 🎨 Write your CSS here */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #FFFDE7, #FFF9C4);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2.5rem 3rem;
  text-align: center;
  box-shadow:
    0 2px 4px rgba(247,223,30,0.08),
    0 8px 32px rgba(247,223,30,0.18),
    0 24px 64px rgba(50,51,48,0.08);
  border: 1.5px solid rgba(247,223,30,0.35);
  max-width: 480px;
  width: 100%;
}

.js-badge {
  display: inline-block;
  background: #F7DF1E;
  color: #323330;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 900;
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  border-radius: 9999px;
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
  box-shadow: 0 2px 10px rgba(247,223,30,0.40);
}

h1 {
  font-size: 2rem;
  font-weight: 900;
  color: #323330;
  margin-bottom: 0.85rem;
  letter-spacing: -0.03em;
}

p {
  color: #5a5a2a;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

p strong { color: #C9B800; }

.button-row {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

button {
  padding: 0.7rem 1.5rem;
  background: #F7DF1E;
  color: #323330;
  border: none;
  border-radius: 9999px;
  font-weight: 800;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s ease;
  box-shadow: 0 3px 12px rgba(247,223,30,0.35);
}

button:hover {
  background: #FFE566;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(247,223,30,0.50);
}

#list {
  list-style: none;
  text-align: left;
  margin-bottom: 1rem;
}

#list li {
  background: rgba(247,223,30,0.12);
  border: 1px solid rgba(247,223,30,0.30);
  border-radius: 8px;
  padding: 0.5rem 0.85rem;
  margin-bottom: 0.4rem;
  font-weight: 600;
  color: #5a4a00;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.output {
  background: #323330;
  color: #F7DF1E;
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.88rem;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 0;
}`,

  js: `// 🚀 Write your JavaScript here

const messages = [
  "JavaScript is awesome! ✨",
  "Keep coding! 💪",
  "You're doing great! 🎉",
  "Functions are your friends! 🤝",
  "Arrays are powerful! 📦"
];

let msgIndex = 0;
let colorIndex = 0;
let itemCount = 0;
const colors = ["#F7DF1E", "#FFB300", "#FF8F00", "#F9A825", "#FDD835"];

function showAlert() {
  const msg = messages[msgIndex % messages.length];
  msgIndex++;
  document.getElementById("output").textContent = msg;
  console.log("Output:", msg);
}

function changeColor() {
  const color = colors[colorIndex % colors.length];
  colorIndex++;
  document.querySelector(".js-badge").style.background = color;
  document.querySelector(".output").style.color = color;
  console.log("Color changed to:", color);
}

function addItem() {
  itemCount++;
  const list = document.getElementById("list");
  const li = document.createElement("li");
  li.innerHTML = \`⚡ Item \${itemCount} — added at \${new Date().toLocaleTimeString()}\`;
  list.appendChild(li);
  console.log("Added item:", itemCount);
}

// Auto-run on load
console.log("🎉 JS Playground ready!");
console.log("📝 Edit the code tabs and click Run.");
console.log("🟡 Powered by JavaScript Basic in My Style");`,
};

/* ─── Tab definitions ───────────────────────────────────────────── */
const TABS = [
  { id: "html", label: "HTML",       icon: "bi bi-filetype-html", color: "#e34f26", monaco: "html"       },
  { id: "css",  label: "CSS",        icon: "bi bi-filetype-css",  color: "#264de4", monaco: "css"        },
  { id: "js",   label: "JavaScript", icon: "bi bi-filetype-js",   color: "#F7DF1E", monaco: "javascript" },
];

/* ─── Helper button components ──────────────────────────────────── */
function ActionBtn({ children, onClick, title, active, danger, icon, primary }) {
  const [hov, setHov] = useState(false);

  let bg = "var(--color-card)";
  let color = "var(--color-text-muted)";
  let border = "1px solid var(--color-border)";
  let shadow = "none";

  if (primary) {
    bg = "linear-gradient(135deg, #323330, #4a4a3a)";
    color = "#F7DF1E";
    border = "none";
    shadow = "0 3px 12px rgba(50,51,48,0.30)";
  }
  if (active) {
    bg = "rgba(247,223,30,0.15)";
    color = "#C9B800";
    border = "1px solid rgba(247,223,30,0.30)";
  }

  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        padding: "0.4rem 0.85rem",
        borderRadius: "7px",
        border,
        background: hov
          ? danger
            ? "rgba(239,68,68,0.10)"
            : primary
            ? "linear-gradient(135deg, #1a1a10, #323330)"
            : "rgba(247,223,30,0.10)"
          : bg,
        color: hov
          ? danger
            ? "#f87171"
            : primary
            ? "#F7DF1E"
            : "#C9B800"
          : color,
        borderColor: hov && danger ? "#ef4444" : undefined,
        fontFamily: "inherit",
        fontSize: "0.8rem",
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.15s ease",
        boxShadow: shadow,
        whiteSpace: "nowrap",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  );
}

function LayoutBtn({ active, onClick, title, icon }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 28,
        borderRadius: "9999px",
        border: "none",
        background: active
          ? "linear-gradient(135deg, #323330, #4a4a3a)"
          : hov
          ? "rgba(247,223,30,0.10)"
          : "none",
        color: active ? "#F7DF1E" : hov ? "#C9B800" : "var(--color-text-muted)",
        cursor: "pointer",
        boxShadow: active ? "0 2px 8px rgba(50,51,48,0.28)" : "none",
        transition: "all 0.15s ease",
        fontSize: "0.95rem",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <i className={icon} />
    </button>
  );
}

function ConsoleBtn({ children, onClick, disabled, title }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        padding: "0.2rem 0.55rem",
        borderRadius: "6px",
        border: "1px solid rgba(247,223,30,0.12)",
        background: "none",
        color: disabled ? "#374151" : "#6b7280",
        fontFamily: "inherit",
        fontSize: "0.72rem",
        fontWeight: 700,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "all 0.12s ease",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = "#F7DF1E";
          e.currentTarget.style.borderColor = "rgba(247,223,30,0.28)";
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.color = "";
          e.currentTarget.style.borderColor = "";
        }
      }}
    >
      {children}
    </button>
  );
}

/* ─── Main Compiler Component ───────────────────────────────────── */
export default function JsCompiler() {
  const navigate = useNavigate();
  const { dark, toggle } = useDarkMode();

  const [activeTab,     setActiveTab]     = useState("js");
  const [code,          setCode]          = useState({ ...DEFAULT });
  const [logs,          setLogs]          = useState([]);
  const [consoleOpen,   setConsoleOpen]   = useState(true);
  const [layout,        setLayout]        = useState("split");
  const [expandPreview, setExpandPreview] = useState(false);
  const [copyFeedback,  setCopyFeedback]  = useState(false);

  const editorRef     = useRef(null);
  const previewRef    = useRef(null);
  const consoleEndRef = useRef(null);

  /* ── Listen for postMessages from iframe ── */
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data && typeof e.data === "object" && e.data.type && e.data.content) {
        setLogs((prev) => [
          ...prev,
          { type: e.data.type, content: e.data.content },
        ]);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  /* ── Auto-scroll console ── */
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  /* ── Initial preview ── */
  useEffect(() => {
    runPreview(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Re-layout editor on layout change ── */
  useEffect(() => {
    setTimeout(() => editorRef.current?.layout(), 120);
  }, [layout, expandPreview]);

  /* ─── Build & inject preview ─── */
  function runPreview(codeObj) {
    if (!previewRef.current) return;
    const safeJS = `
try {
  const _log  = console.log;
  const _err  = console.error;
  const _warn = console.warn;
  console.log  = (...a) => { window.parent.postMessage({ type: 'log',   content: a.join(' ') }, '*'); _log(...a);  };
  console.error= (...a) => { window.parent.postMessage({ type: 'error', content: a.join(' ') }, '*'); _err(...a);  };
  console.warn = (...a) => { window.parent.postMessage({ type: 'warn',  content: a.join(' ') }, '*'); _warn(...a); };
  ${codeObj.js}
} catch(e) {
  window.parent.postMessage({ type: 'error', content: 'JS Error: ' + e.message }, '*');
}`;

    previewRef.current.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>${codeObj.css}</style>
</head>
<body>
  ${codeObj.html}
  <script>${safeJS}<\/script>
</body>
</html>`;
  }

  /* ─── Editor events ─── */
  function onEditorMount(editor) {
    editorRef.current = editor;
  }

  function onEditorChange(val) {
    const updated = { ...code, [activeTab]: val ?? "" };
    setCode(updated);
    runPreview(updated);
  }

  function switchTab(id) {
    if (id === activeTab) return;
    if (editorRef.current) {
      setCode((prev) => ({ ...prev, [activeTab]: editorRef.current.getValue() }));
    }
    setActiveTab(id);
  }

  /* ─── Actions ─── */
  function handleRefresh() {
    const updated = editorRef.current
      ? { ...code, [activeTab]: editorRef.current.getValue() }
      : code;
    setCode(updated);
    runPreview(updated);
  }

  function handleReset() {
    if (!window.confirm("Reset all code to default? This cannot be undone.")) return;
    setCode({ ...DEFAULT });
    setLogs([]);
    setTimeout(() => runPreview(DEFAULT), 50);
  }

  function handleCopyCode() {
    const current = editorRef.current?.getValue() ?? code[activeTab];
    navigator.clipboard.writeText(current).then(() => {
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    });
  }

  function handleDownload() {
    const full = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>My JS Project — JavaScript Basic in My Style</title>
  <style>
${code.css}
  </style>
</head>
<body>
${code.html}
  <script>
${code.js}
  <\/script>
</body>
</html>`;
    const blob = new Blob([full], { type: "text/html" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "my-js-project.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  const monacoTheme    = dark ? "vs-dark" : "light";
  const currentTabMeta = TABS.find((t) => t.id === activeTab);

  /* ── Style tokens ── */
  const ideBg      = "#0d1117";
  const ideBar     = "#161b22";
  const ideBorder  = "rgba(255,255,255,0.06)";
  const ideTabBg   = "#1c2128";
  const JS_YELLOW  = "#F7DF1E";
  const JS_DARK    = "#323330";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* ══════════════════════ HEADER ══════════════════════ */}
      <header
        style={{
          flexShrink: 0,
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          padding: "0 1rem",
          background: "var(--color-card)",
          borderBottom: "1px solid var(--color-border)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
          position: "relative",
          zIndex: 200,
          transition: "background 0.3s ease",
        }}
      >
        {/* Left cluster */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            title="Go back"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              borderRadius: "8px",
              border: "1px solid var(--color-border)",
              background: "var(--color-bg)",
              color: "var(--color-text-muted)",
              fontSize: "1.3rem",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C9B800";
              e.currentTarget.style.color = "#C9B800";
              e.currentTarget.style.background = "rgba(247,223,30,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.color = "";
              e.currentTarget.style.background = "";
            }}
          >
            <i className="bi bi-arrow-left-short" />
          </button>

          {/* Brand logo */}
          <Link
            to="/js-basic-course/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "0.95rem",
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: JS_YELLOW,
                color: JS_DARK,
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 900,
                fontSize: "0.78rem",
                padding: "0.18rem 0.5rem",
                borderRadius: "6px",
                letterSpacing: "0.04em",
                boxShadow: "0 1px 6px rgba(247,223,30,0.35)",
              }}
            >
              JS
            </span>
            <span
              style={{
                color: "var(--color-text)",
                fontWeight: 800,
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                display: "none",
              }}
              className="brand-label"
            >
              BASIC
            </span>
          </Link>

          {/* Separator + page label */}
          <div
            style={{
              width: 1,
              height: 22,
              background: "var(--color-border)",
              flexShrink: 0,
              margin: "0 0.1rem",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "var(--color-text-muted)",
            }}
          >
            <i className="bi bi-terminal-fill" style={{ color: "#C9B800", fontSize: "0.9rem" }} />
            <span>Playground</span>
          </div>
        </div>

        {/* Center: layout switcher */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "9999px",
              padding: "3px",
              gap: "3px",
            }}
          >
            {[
              { id: "editor",  icon: "bi bi-code-square",  label: "Editor only"  },
              { id: "split",   icon: "bi bi-layout-split", label: "Split view"   },
              { id: "preview", icon: "bi bi-display",      label: "Preview only" },
            ].map(({ id, icon, label }) => (
              <LayoutBtn
                key={id}
                active={layout === id}
                onClick={() => setLayout(id)}
                title={label}
                icon={icon}
              />
            ))}
          </div>
        </div>

        {/* Right: actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexShrink: 0 }}>
          {/* Copy */}
          <ActionBtn
            onClick={handleCopyCode}
            title="Copy current tab's code"
            active={copyFeedback}
          >
            <i className={copyFeedback ? "bi bi-check2" : "bi bi-clipboard"} style={{ fontSize: "0.9rem" }} />
            <span style={{ fontSize: "0.78rem" }}>{copyFeedback ? "Copied!" : "Copy"}</span>
          </ActionBtn>

          {/* Download */}
          <ActionBtn onClick={handleDownload} title="Download as HTML file">
            <i className="bi bi-download" style={{ fontSize: "0.9rem" }} />
          </ActionBtn>

          {/* Run */}
          <ActionBtn onClick={handleRefresh} title="Run / refresh preview" primary>
            <i className="bi bi-play-fill" style={{ fontSize: "0.9rem" }} />
            <span style={{ fontSize: "0.78rem" }}>Run</span>
          </ActionBtn>

          {/* Reset */}
          <ActionBtn onClick={handleReset} title="Reset code to default" danger>
            <i className="bi bi-trash3" style={{ fontSize: "0.9rem", color: "#f87171" }} />
          </ActionBtn>

          {/* Theme toggle */}
          <ActionBtn onClick={toggle} title={dark ? "Light mode" : "Dark mode"}>
            {dark ? (
              <i className="bi bi-sun-fill" style={{ fontSize: "0.9rem", color: "#f59e0b" }} />
            ) : (
              <i className="bi bi-moon-stars-fill" style={{ fontSize: "0.9rem", color: "#C9B800" }} />
            )}
          </ActionBtn>
        </div>
      </header>

      {/* ══════════════════════ MAIN ══════════════════════ */}
      <main
        style={{
          flex: 1,
          minHeight: 0,
          display: "grid",
          gridTemplateColumns:
            layout === "split"   ? "1fr 1fr" :
            layout === "editor"  ? "1fr"      :
            "0fr 1fr",
          overflow: "hidden",
        }}
      >
        {/* ── EDITOR PANEL ── */}
        {layout !== "preview" && (
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              overflow: "hidden",
              background: ideBg,
              borderRight: layout === "split" ? `1px solid ${ideBorder}` : "none",
            }}
          >
            {/* Tab bar */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "stretch",
                background: ideTabBg,
                borderBottom: `1px solid ${ideBorder}`,
                minHeight: "42px",
                overflowX: "auto",
              }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0 1.2rem",
                    height: "42px",
                    border: "none",
                    background: activeTab === tab.id ? ideBg : "none",
                    color: activeTab === tab.id ? "#e5e7eb" : "#6b7280",
                    fontFamily: "inherit",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    borderRight: `1px solid ${ideBorder}`,
                    borderBottom: activeTab === tab.id
                      ? `2px solid ${tab.color}`
                      : "2px solid transparent",
                    transition: "color 0.15s ease, background 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.color = "#d1d5db";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.background = "none";
                      e.currentTarget.style.color = "#6b7280";
                    }
                  }}
                >
                  <i
                    className={tab.icon}
                    style={{
                      fontSize: "1rem",
                      color: activeTab === tab.id ? tab.color : "inherit",
                    }}
                  />
                  {tab.label}
                  {activeTab === tab.id && (
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: tab.color,
                        flexShrink: 0,
                        boxShadow: `0 0 5px ${tab.color}`,
                      }}
                    />
                  )}
                </button>
              ))}

              {/* Spacer + lang badge */}
              <div style={{ flex: 1 }} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0 0.85rem",
                  borderLeft: `1px solid ${ideBorder}`,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.18rem 0.6rem",
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "inherit",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: currentTabMeta?.color,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  <i className={currentTabMeta?.icon} style={{ fontSize: "0.85rem" }} />
                  {currentTabMeta?.label}
                </span>
              </div>
            </div>

            {/* Monaco editor */}
            <div style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
              <Editor
                height="100%"
                language={currentTabMeta?.monaco ?? "javascript"}
                value={code[activeTab]}
                theme={monacoTheme}
                onMount={onEditorMount}
                onChange={onEditorChange}
                options={{
                  minimap:                   { enabled: false },
                  fontSize:                  14,
                  fontFamily:                '"JetBrains Mono", "Fira Code", monospace',
                  fontLigatures:             true,
                  padding:                   { top: 16, bottom: 16 },
                  smoothScrolling:           true,
                  cursorSmoothCaretAnimation:"on",
                  formatOnPaste:             true,
                  formatOnType:              true,
                  autoClosingBrackets:       "always",
                  autoClosingQuotes:         "always",
                  autoIndent:                "full",
                  scrollBeyondLastLine:      false,
                  wordWrap:                  "on",
                  automaticLayout:           true,
                  lineHeight:                22,
                  renderLineHighlight:       "all",
                  bracketPairColorization:   { enabled: true },
                  tabSize:                   2,
                  suggest:                   { showIcons: true },
                  quickSuggestions:          true,
                }}
              />
            </div>

            {/* Console panel */}
            <div
              style={{
                flexShrink: 0,
                background: ideBg,
                borderTop: `1px solid ${ideBorder}`,
                maxHeight: consoleOpen ? "200px" : "40px",
                minHeight: "40px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Console header */}
              <div
                style={{
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 0.85rem",
                  height: "40px",
                  borderBottom: consoleOpen ? `1px solid ${ideBorder}` : "none",
                  userSelect: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#9ca3af",
                  }}
                >
                  <i className="bi bi-terminal" style={{ color: "#C9B800", fontSize: "0.9rem" }} />
                  Console
                  {logs.length > 0 && (
                    <span
                      style={{
                        minWidth: 18,
                        height: 18,
                        padding: "0 4px",
                        borderRadius: "9999px",
                        background: JS_YELLOW,
                        color: JS_DARK,
                        fontSize: "0.65rem",
                        fontWeight: 900,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {logs.length}
                    </span>
                  )}
                </div>
                <div style={{ display: "flex", gap: "0.35rem" }}>
                  <ConsoleBtn
                    onClick={() => setLogs([])}
                    disabled={logs.length === 0}
                    title="Clear console"
                  >
                    <i className="bi bi-trash" />
                    Clear
                  </ConsoleBtn>
                  <ConsoleBtn
                    onClick={() => setConsoleOpen((o) => !o)}
                    title={consoleOpen ? "Collapse" : "Expand"}
                  >
                    <i className={`bi bi-chevron-${consoleOpen ? "down" : "up"}`} />
                  </ConsoleBtn>
                </div>
              </div>

              {/* Console output */}
              {consoleOpen && (
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    overflowX: "hidden",
                    padding: "0.4rem 0.85rem",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                    color: "#d4d4d4",
                    scrollbarWidth: "thin",
                    scrollbarColor: "rgba(247,223,30,0.15) transparent",
                  }}
                >
                  {logs.length === 0 ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "#6b7280",
                        fontStyle: "italic",
                        fontSize: "0.78rem",
                      }}
                    >
                      <i className="bi bi-terminal-dash" />
                      <span>Console output will appear here after Run…</span>
                    </div>
                  ) : (
                    logs.map((entry, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "0.5rem",
                          padding:
                            entry.type === "error"
                              ? "0.18rem 0.85rem"
                              : "0.18rem 0",
                          margin:
                            entry.type !== "log"
                              ? "0 -0.85rem"
                              : 0,
                          paddingLeft:
                            entry.type !== "log" ? "0.85rem" : 0,
                          borderBottom: "1px solid rgba(255,255,255,0.03)",
                          color:
                            entry.type === "error" ? "#f87171" :
                            entry.type === "warn"  ? "#fbbf24" :
                            "#86efac",
                          background:
                            entry.type === "error"
                              ? "rgba(248,113,113,0.06)"
                              : entry.type === "warn"
                              ? "rgba(251,191,36,0.06)"
                              : "transparent",
                          borderLeft:
                            entry.type !== "log"
                              ? `3px solid ${entry.type === "error" ? "#f87171" : "#fbbf24"}`
                              : "none",
                        }}
                      >
                        <span style={{ fontSize: "0.75rem", opacity: 0.7, flexShrink: 0 }}>
                          {entry.type === "error" ? (
                            <i className="bi bi-x-circle-fill" />
                          ) : entry.type === "warn" ? (
                            <i className="bi bi-exclamation-triangle-fill" />
                          ) : (
                            <i className="bi bi-chevron-right" />
                          )}
                        </span>
                        <span
                          style={{
                            fontSize: "0.65rem",
                            fontWeight: 900,
                            letterSpacing: "0.05em",
                            opacity: 0.65,
                            minWidth: "38px",
                            flexShrink: 0,
                            textTransform: "uppercase",
                          }}
                        >
                          {entry.type}
                        </span>
                        <span
                          style={{
                            flex: 1,
                            wordBreak: "break-all",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {entry.content}
                        </span>
                      </div>
                    ))
                  )}
                  <div ref={consoleEndRef} aria-hidden="true" />
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── PREVIEW PANEL ── */}
        {layout !== "editor" && (
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
              overflow: "hidden",
              background: "#ffffff",
              borderLeft:
                layout === "split"
                  ? "1px solid rgba(0,0,0,0.07)"
                  : "none",
              ...(expandPreview
                ? {
                    position: "fixed",
                    inset: "56px 0 0 0",
                    zIndex: 500,
                  }
                : {}),
            }}
          >
            {/* Browser chrome bar */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0 0.85rem",
                height: "42px",
                background: dark ? "#1f2937" : "#f8f9fa",
                borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)"}`,
                transition: "background 0.3s ease",
              }}
            >
              {/* Traffic lights */}
              <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
                {["#ff5f57", "#ffbd2e", "#28ca41"].map((c) => (
                  <span
                    key={c}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: c,
                      display: "inline-block",
                    }}
                  />
                ))}
              </div>

              {/* URL bar */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.28rem 0.75rem",
                  background: dark ? "#111827" : "#fff",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                  borderRadius: "6px",
                  fontSize: "0.72rem",
                  color: dark ? "#9ca3af" : "#6b7280",
                  fontFamily: "'JetBrains Mono', monospace",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                <i
                  className="bi bi-lock-fill"
                  style={{ color: "#22c55e", fontSize: "0.7rem", flexShrink: 0 }}
                />
                <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                  preview — js-basic-in-my-style.app
                </span>
              </div>

              {/* Preview actions */}
              <div style={{ display: "flex", gap: "0.3rem", flexShrink: 0 }}>
                {[
                  { icon: "bi bi-arrow-clockwise", title: "Reload preview", action: handleRefresh },
                  {
                    icon: expandPreview ? "bi bi-fullscreen-exit" : "bi bi-fullscreen",
                    title: expandPreview ? "Restore" : "Fullscreen",
                    action: () => setExpandPreview((e) => !e),
                  },
                ].map(({ icon, title, action }) => (
                  <button
                    key={icon}
                    onClick={action}
                    title={title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 30,
                      height: 30,
                      borderRadius: "7px",
                      border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                      background: dark ? "#111827" : "#fff",
                      color: dark ? "#9ca3af" : "#6b7280",
                      fontSize: "0.88rem",
                      cursor: "pointer",
                      transition: "all 0.12s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C9B800";
                      e.currentTarget.style.borderColor = "#C9B800";
                      e.currentTarget.style.background = "rgba(247,223,30,0.08)";
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.borderColor = "";
                      e.currentTarget.style.background = "";
                      e.currentTarget.style.transform = "";
                    }}
                  >
                    <i className={icon} />
                  </button>
                ))}
              </div>
            </div>

            {/* iframe */}
            <iframe
              ref={previewRef}
              title="JavaScript Live Preview"
              sandbox="allow-scripts allow-same-origin allow-modals"
              style={{
                flex: 1,
                width: "100%",
                border: "none",
                background: "#ffffff",
                display: "block",
                minHeight: 0,
              }}
            />
          </section>
        )}
      </main>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .brand-label { display: none !important; }
        }
        @media (max-width: 600px) {
          .cmp-layout-switch { display: none; }
        }
      `}</style>
    </div>
  );
}
