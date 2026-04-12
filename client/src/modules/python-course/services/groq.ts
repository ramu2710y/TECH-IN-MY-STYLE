// Get API key from environment variable
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || ''
const GROQ_API_URL = import.meta.env.VITE_GROQ_API_URL || 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile'

export interface RunResult {
  output: string
  error: string | null
  passed: boolean
  feedback: string
}

async function groqChat(systemPrompt: string, userMessage: string): Promise<string> {
  const res = await fetch(GROQ_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.1,
      max_tokens: 1024,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Groq API error ${res.status}: ${err}`)
  }

  const data = await res.json()
  return data.choices?.[0]?.message?.content ?? ''
}

/**
 * Execute Python code via Groq LLM and return simulated output.
 */
export async function executePython(code: string): Promise<{ output: string; error: string | null }> {
  const system = `You are a Python interpreter. When given Python code, execute it mentally and return ONLY the exact output that would appear in the terminal — nothing else. No explanations, no markdown, no code blocks. If there is a runtime error, return only the error message exactly as Python would print it (e.g. "NameError: name 'x' is not defined"). If the code uses input(), treat it as if the user typed "test_value". If there is no output, return an empty string.`

  const reply = await groqChat(system, `Execute this Python code:\n\`\`\`python\n${code}\n\`\`\``)

  // Detect if it's an error output
  const errorPatterns = [
    'Error:', 'Traceback', 'SyntaxError', 'NameError', 'TypeError',
    'ValueError', 'IndexError', 'KeyError', 'AttributeError', 'IndentationError',
  ]
  const isError = errorPatterns.some(p => reply.includes(p))

  return {
    output: isError ? '' : reply.trim(),
    error: isError ? reply.trim() : null,
  }
}

/**
 * Validate Python code against a task description using Groq.
 */
export async function validateTask(
  taskTitle: string,
  taskInstructions: string,
  code: string,
  executionOutput: string,
  executionError: string | null
): Promise<RunResult> {
  const system = `You are a strict Python code validator for a learning platform. Evaluate whether the student's code correctly solves the given task. 

Respond with ONLY valid JSON in this exact format (no markdown, no extra text):
{
  "passed": true or false,
  "feedback": "one concise sentence explaining the result"
}

Rules:
- passed = true only if the code correctly and completely solves the task
- Be strict but fair — the logic must be correct
- If there's a syntax/runtime error, passed = false
- feedback must be encouraging and specific (max 120 chars)`

  const userMsg = `Task: ${taskTitle}
Instructions: ${taskInstructions}
Student code:
\`\`\`python
${code}
\`\`\`
Execution output: ${executionOutput || '(no output)'}
Execution error: ${executionError || 'none'}`

  const reply = await groqChat(system, userMsg)

  try {
    // Extract JSON from response (handle any extra text)
    const jsonMatch = reply.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('No JSON found')
    const parsed = JSON.parse(jsonMatch[0])
    return {
      output: executionOutput,
      error: executionError,
      passed: Boolean(parsed.passed),
      feedback: String(parsed.feedback || ''),
    }
  } catch {
    // Fallback: check for obvious pass/fail keywords
    const lower = reply.toLowerCase()
    const passed = lower.includes('correct') || lower.includes('passed') || lower.includes('true')
    return {
      output: executionOutput,
      error: executionError,
      passed,
      feedback: reply.slice(0, 120),
    }
  }
}
