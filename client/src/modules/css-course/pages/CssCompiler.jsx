import { useState, useRef, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import CssNavbar, { useDarkMode } from '../components/CssNavbar'
import CssFooter from '../components/CssFooter'

/* ─── Default code snippets ─────────────────────────────────────── */
const DEFAULT = {
  html: `<!-- ✏️ Write your HTML here -->
<div class="card">
  <div class="card-badge">CSS IN MY STYLE</div>
  <h1>CSS Playground</h1>
  <p>Edit the <strong>CSS</strong> tab to style this card live!</p>
  <div class="flex-demo">
    <div class="box">Flex 1</div>
    <div class="box">Flex 2</div>
    <div class="box">Flex 3</div>
  </div>
  <button onclick="handleClick()">Try Interaction!</button>
</div>`,

  css: `/* 🎨 Write your CSS here */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #eef2ff, #e8ecff);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.card {
  background: #ffffff;
  border-radius: 24px;
  padding: 2.5rem 3rem;
  text-align: center;
  box-shadow:
    0 2px 4px rgba(38,77,228,0.04),
    0 8px 32px rgba(38,77,228,0.10),
    0 24px 64px rgba(38,77,228,0.08);
  border: 1px solid rgba(38,77,228,0.10);
  max-width: 480px;
  width: 100%;
}

.card-badge {
  display: inline-block;
  padding: 0.3rem 1rem;
  background: linear-gradient(135deg, rgba(38,77,228,0.10), rgba(41,101,241,0.06));
  border: 1px solid rgba(38,77,228,0.20);
  border-radius: 9999px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #264de4;
  margin-bottom: 1.25rem;
}

h1 {
  font-size: 2.2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #264de4, #2965f1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.85rem;
  letter-spacing: -0.03em;
}

p {
  color: #4a5580;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

p strong { color: #264de4; }

.flex-demo {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.box {
  flex: 1;
  padding: 0.75rem;
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.875rem;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.25s ease;
}

.box:hover {
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 8px 24px rgba(38, 77, 228, 0.35);
}

button {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #264de4, #2965f1);
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(38, 77, 228, 0.30);
  font-family: inherit;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(38, 77, 228, 0.42);
}`,

  js: `// 🚀 Write your JavaScript here
const messages = [
  "CSS is awesome! 🎨",
  "You're styling like a pro! 💪",
  "Flexbox makes layouts easy! 📐",
  "CSS Grid is powerful! 🗂️",
  "Keep building! 🏗️"
];

let msgIndex = 0;

function handleClick() {
  const msg = messages[msgIndex % messages.length];
  msgIndex++;
  alert(msg);
}

// Animate boxes on load
document.querySelectorAll('.box').forEach((box, i) => {
  box.style.opacity = '0';
  box.style.transform = 'translateY(20px)';
  box.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  setTimeout(() => {
    box.style.opacity = '1';
    box.style.transform = 'translateY(0)';
  }, 100 + i * 100);
});

console.log("🎉 CSS Playground loaded!");
console.log("✨ Edit CSS tab to style the card.");
console.log("🔵 Powered by CSS IN MY STYLE");`,
}

/* ─── Tab definitions ───────────────────────────────────────────── */
const TABS = [
  { id: 'html', label: 'HTML', icon: 'bi bi-filetype-html', color: '#e34f26', monaco: 'html' },
  { id: 'css', label: 'CSS', icon: 'bi bi-filetype-css', color: '#264de4', monaco: 'css' },
  { id: 'js', label: 'JavaScript', icon: 'bi bi-filetype-js', color: '#f0db4f', monaco: 'javascript' },
]

/* ─── Component ─────────────────────────────────────────────────── */
export default function Compiler() {
  const navigate = useNavigate()
  const { dark, toggle } = useDarkMode()

  const [activeTab, setActiveTab] = useState('css')
  const [code, setCode] = useState({ ...DEFAULT })
  const [logs, setLogs] = useState([])
  const [consoleOpen, setConsoleOpen] = useState(true)
  const [layout, setLayout] = useState('split')
  const [expandPreview, setExpandPreview] = useState(false)
  const [copyFeedback, setCopyFeedback] = useState(false)

  const editorRef = useRef(null)
  const previewRef = useRef(null)
  const consoleEndRef = useRef(null)

  /* ── iframe messages ── */
  useEffect(() => {
    const onMsg = (e) => {
      if (e.data && typeof e.data === 'object' && e.data.type && e.data.content) {
        setLogs((prev) => [...prev, { type: e.data.type, content: e.data.content }])
      }
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  /* ── Auto-scroll console ── */
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  /* ── Initial preview ── */
  useEffect(() => {
    runPreview(code)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── Re-layout editor on layout change ── */
  useEffect(() => {
    setTimeout(() => editorRef.current?.layout(), 120)
  }, [layout, expandPreview])

  /* ─── Build & inject preview ─── */
  function runPreview(codeObj) {
    if (!previewRef.current) return
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
}`

    previewRef.current.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>${codeObj.css}</style>
</head>
<body>
  ${codeObj.html}
  <script>${safeJS}<\/script>
</body>
</html>`
  }

  /* ─── Editor events ─── */
  function onEditorMount(editor) {
    editorRef.current = editor
  }

  function onEditorChange(val) {
    const updated = { ...code, [activeTab]: val ?? '' }
    setCode(updated)
    runPreview(updated)
  }

  function switchTab(id) {
    if (id === activeTab) return
    if (editorRef.current) {
      setCode((prev) => ({ ...prev, [activeTab]: editorRef.current.getValue() }))
    }
    setActiveTab(id)
  }

  /* ─── Actions ─── */
  function handleRefresh() {
    const updated = editorRef.current
      ? { ...code, [activeTab]: editorRef.current.getValue() }
      : code
    setCode(updated)
    runPreview(updated)
  }

  function handleReset() {
    if (!window.confirm('Reset all code to default? This cannot be undone.')) return
    setCode({ ...DEFAULT })
    setLogs([])
    setTimeout(() => runPreview(DEFAULT), 50)
  }

  function handleCopyCode() {
    const current = editorRef.current?.getValue() ?? code[activeTab]
    navigator.clipboard.writeText(current).then(() => {
      setCopyFeedback(true)
      setTimeout(() => setCopyFeedback(false), 2000)
    })
  }

  function handleDownload() {
    const full = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>My Project — CSS IN MY STYLE</title>
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
</html>`
    const blob = new Blob([full], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-css-project.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  const monacoTheme = dark ? 'vs-dark' : 'light'
  const currentTabMeta = TABS.find((t) => t.id === activeTab)
  const isEditorVisible = layout !== 'preview'
  const isPreviewVisible = layout !== 'editor'

  /* ── CSS tokens for inline styles ── */
  const S = {
    primary: '#264de4',
    primaryDk: '#1b35b5',
    secondary: '#2965f1',
    bg: 'var(--color-bg)',
    surface: 'var(--color-card)',
    surface2: dark ? '#1a1f35' : '#f0f4ff',
    border: 'var(--color-border)',
    borderSoft: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)',
    text: 'var(--color-text)',
    textMuted: 'var(--color-text-muted)',
    textFaint: 'var(--color-text-faint)',
    ideBg: '#0d1117',
    ideBar: '#161b22',
    ideBorder: 'rgba(255,255,255,0.06)',
    ideTabBg: '#1c2128',
    grad: 'linear-gradient(135deg, #264de4, #2965f1)',
    gradDk: 'linear-gradient(135deg, #1b35b5, #264de4)',
    gradSoft: 'linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))',
    shadow: '0 4px 16px rgba(38,77,228,0.22)',
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
      background: S.bg,
      color: S.text,
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      transition: 'background 0.3s ease, color 0.3s ease',
    }}>

      {/* ══════════════════════ HEADER ══════════════════════ */}
      <header style={{
        flexShrink: 0,
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
        padding: '0 1rem',
        background: S.surface,
        borderBottom: `1px solid ${S.border}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.07)',
        position: 'relative',
        zIndex: 200,
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}>

        {/* Left cluster */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>

          {/* Back */}
          <HeaderBtn
            onClick={() => navigate(-1)}
            title="Go back"
            style={{ background: S.surface2, border: `1px solid ${S.border}` }}
            hoverBorder={S.primary}
            hoverBg="rgba(38,77,228,0.08)"
          >
            <i className="bi bi-arrow-left-short" style={{ fontSize: '1.3rem', color: S.textMuted }} />
          </HeaderBtn>

          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
              textDecoration: 'none', fontWeight: 800, fontSize: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700, fontSize: '0.9rem',
              color: 'rgba(38,77,228,0.55)',
            }}>
              {'</>'}
            </span>
            <span style={{ color: S.primary, fontWeight: 900 }}>CSS</span>
          </Link>

          {/* Separator */}
          <div style={{
            width: 1, height: 22,
            background: S.borderSoft,
            flexShrink: 0,
            display: 'none',
          }} id="sep1" />

          {/* Page label */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            fontSize: '0.78rem', fontWeight: 600,
            color: S.textMuted,
          }}>
            <i className="bi bi-terminal-fill" style={{ color: S.primary, fontSize: '0.9rem' }} />
            <span>Playground</span>
          </div>
        </div>

        {/* Center: layout switcher */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <div style={{
            display: 'inline-flex',
            background: S.surface2,
            border: `1px solid ${S.border}`,
            borderRadius: '9999px',
            padding: '3px', gap: '3px',
          }}>
            {[
              { id: 'editor', icon: 'bi bi-code-square', label: 'Editor only' },
              { id: 'split', icon: 'bi bi-layout-split', label: 'Split view' },
              { id: 'preview', icon: 'bi bi-display', label: 'Preview only' },
            ].map(({ id, icon, label }) => (
              <LayoutBtn
                key={id}
                active={layout === id}
                onClick={() => setLayout(id)}
                title={label}
                primary={S.primary}
                grad={S.grad}
              >
                <i className={icon} style={{ fontSize: '0.95rem' }} />
              </LayoutBtn>
            ))}
          </div>
        </div>

        {/* Right: actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>

          {/* Copy */}
          <ActionBtn
            onClick={handleCopyCode}
            title="Copy current tab's code"
            primary={S.primary}
            active={copyFeedback}
          >
            <i className={copyFeedback ? 'bi bi-check2' : 'bi bi-clipboard'} style={{ fontSize: '0.9rem' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, display: 'none' }} id="copyLabel">
              {copyFeedback ? 'Copied!' : 'Copy'}
            </span>
          </ActionBtn>

          {/* Download */}
          <ActionBtn onClick={handleDownload} title="Download as HTML file" primary={S.primary}>
            <i className="bi bi-download" style={{ fontSize: '0.9rem' }} />
          </ActionBtn>

          {/* Run (primary) */}
          <button
            onClick={handleRefresh}
            title="Run / refresh preview"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 0.95rem',
              borderRadius: '7px', border: 'none',
              background: S.grad,
              color: '#fff',
              fontFamily: 'inherit',
              fontSize: '0.82rem', fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 3px 12px rgba(38,77,228,0.28)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = S.gradDk; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 5px 16px rgba(38,77,228,0.38)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = S.grad; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 3px 12px rgba(38,77,228,0.28)'; }}
          >
            <i className="bi bi-arrow-clockwise" />
            <span>Run</span>
          </button>

          {/* Reset */}
          <ActionBtn onClick={handleReset} title="Reset code to default" primary="#ef4444" danger>
            <i className="bi bi-trash3" style={{ fontSize: '0.9rem' }} />
          </ActionBtn>

          {/* Theme toggle */}
          <ActionBtn onClick={toggle} title={dark ? 'Light mode' : 'Dark mode'} primary={S.primary}>
            {dark
              ? <i className="bi bi-sun-fill" style={{ fontSize: '0.9rem', color: '#f59e0b' }} />
              : <i className="bi bi-moon-stars-fill" style={{ fontSize: '0.9rem', color: S.primary }} />
            }
          </ActionBtn>
        </div>
      </header>

      {/* ══════════════════════ MAIN ══════════════════════ */}
      <main style={{
        flex: 1,
        minHeight: 0,
        display: 'grid',
        gridTemplateColumns:
          layout === 'split' ? '1fr 1fr' :
            layout === 'editor' ? '1fr' :
              '1fr',
        overflow: 'hidden',
      }}>

        {/* ── EDITOR PANEL ── */}
        {isEditorVisible && (
          <section style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            overflow: 'hidden',
            background: S.ideBg,
            borderRight: layout === 'split' ? `1px solid ${S.ideBorder}` : 'none',
          }}>

            {/* Tab bar */}
            <div style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'stretch',
              background: S.ideTabBg,
              borderBottom: `1px solid ${S.ideBorder}`,
              minHeight: '42px',
              overflowX: 'auto',
            }}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                    padding: '0 1.2rem', height: '42px',
                    border: 'none',
                    background: activeTab === tab.id ? S.ideBg : 'none',
                    color: activeTab === tab.id ? '#e5e7eb' : '#6b7280',
                    fontFamily: 'inherit',
                    fontSize: '0.82rem', fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    borderRight: `1px solid ${S.ideBorder}`,
                    borderBottom: activeTab === tab.id ? `2px solid ${tab.color}` : '2px solid transparent',
                    transition: 'color 0.15s ease, background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                      e.currentTarget.style.color = '#d1d5db'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeTab !== tab.id) {
                      e.currentTarget.style.background = 'none'
                      e.currentTarget.style.color = '#6b7280'
                    }
                  }}
                >
                  <i className={tab.icon} style={{ fontSize: '1rem', color: activeTab === tab.id ? tab.color : 'inherit' }} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <span style={{
                      width: 5, height: 5, borderRadius: '50%',
                      background: tab.color, flexShrink: 0,
                      boxShadow: `0 0 5px ${tab.color}`,
                    }} />
                  )}
                </button>
              ))}

              {/* Spacer + lang badge */}
              <div style={{ flex: 1 }} />
              <div style={{
                display: 'flex', alignItems: 'center',
                padding: '0 0.85rem',
                borderLeft: `1px solid ${S.ideBorder}`,
                flexShrink: 0,
              }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.18rem 0.6rem',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontFamily: 'inherit',
                  fontSize: '0.7rem', fontWeight: 800,
                  color: currentTabMeta?.color,
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>
                  <i className={currentTabMeta?.icon} style={{ fontSize: '0.85rem' }} />
                  {currentTabMeta?.label}
                </span>
              </div>
            </div>

            {/* Monaco editor */}
            <div style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
              <Editor
                height="100%"
                language={currentTabMeta?.monaco ?? 'css'}
                value={code[activeTab]}
                theme={monacoTheme}
                onMount={onEditorMount}
                onChange={onEditorChange}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                  fontLigatures: true,
                  padding: { top: 16, bottom: 16 },
                  smoothScrolling: true,
                  cursorSmoothCaretAnimation: 'on',
                  formatOnPaste: true,
                  formatOnType: true,
                  autoClosingBrackets: 'always',
                  autoClosingQuotes: 'always',
                  autoIndent: 'full',
                  scrollBeyondLastLine: false,
                  wordWrap: 'on',
                  automaticLayout: true,
                  lineHeight: 22,
                  renderLineHighlight: 'all',
                  bracketPairColorization: { enabled: true },
                  tabSize: 2,
                  suggest: { showIcons: true },
                  quickSuggestions: true,
                }}
              />
            </div>

            {/* Console */}
            <div style={{
              flexShrink: 0,
              background: S.ideBg,
              borderTop: `1px solid ${S.ideBorder}`,
              maxHeight: consoleOpen ? '200px' : '40px',
              minHeight: '40px',
              overflow: 'hidden',
              transition: 'max-height 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Console header */}
              <div style={{
                flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 0.85rem', height: '40px',
                borderBottom: consoleOpen ? `1px solid ${S.ideBorder}` : 'none',
                userSelect: 'none',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  fontSize: '0.78rem', fontWeight: 600, color: '#9ca3af',
                }}>
                  <i className="bi bi-terminal" style={{ color: S.primary, fontSize: '0.9rem' }} />
                  Console
                  {logs.length > 0 && (
                    <span style={{
                      minWidth: 18, height: 18,
                      padding: '0 4px',
                      borderRadius: '9999px',
                      background: S.primary,
                      color: '#fff',
                      fontSize: '0.65rem', fontWeight: 900,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {logs.length}
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
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
                    title={consoleOpen ? 'Collapse' : 'Expand'}
                  >
                    <i className={`bi bi-chevron-${consoleOpen ? 'down' : 'up'}`} />
                  </ConsoleBtn>
                </div>
              </div>

              {/* Console output */}
              {consoleOpen && (
                <div style={{
                  flex: 1,
                  overflowY: 'auto', overflowX: 'hidden',
                  padding: '0.4rem 0.85rem',
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  fontSize: '0.78rem', lineHeight: 1.6,
                  color: '#d4d4d4',
                  scrollbarWidth: 'thin',
                  scrollbarColor: 'rgba(255,255,255,0.1) transparent',
                }}>
                  {logs.length === 0 ? (
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      color: '#6b7280', fontSize: '0.78rem', fontStyle: 'italic',
                    }}>
                      <i className="bi bi-terminal-dash" />
                      Console output will appear here…
                    </div>
                  ) : (
                    logs.map((entry, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex', alignItems: 'baseline', gap: '0.5rem',
                          padding: entry.type === 'error' ? '0.18rem 0.85rem' : '0.18rem 0',
                          margin: entry.type !== 'log' ? '0 -0.85rem' : 0,
                          paddingLeft: entry.type !== 'log' ? '0.85rem' : 0,
                          borderBottom: '1px solid rgba(255,255,255,0.03)',
                          color:
                            entry.type === 'error' ? '#f87171' :
                              entry.type === 'warn' ? '#fbbf24' :
                                '#86efac',
                          background:
                            entry.type === 'error' ? 'rgba(248,113,113,0.06)' :
                              entry.type === 'warn' ? 'rgba(251,191,36,0.06)' :
                                'transparent',
                          borderLeft: entry.type !== 'log'
                            ? `3px solid ${entry.type === 'error' ? '#f87171' : '#fbbf24'}`
                            : 'none',
                        }}
                      >
                        <span style={{ fontSize: '0.75rem', opacity: 0.7, flexShrink: 0 }}>
                          {entry.type === 'error' ? <i className="bi bi-x-circle-fill" />
                            : entry.type === 'warn' ? <i className="bi bi-exclamation-triangle-fill" />
                              : <i className="bi bi-chevron-right" />}
                        </span>
                        <span style={{
                          fontSize: '0.65rem', fontWeight: 900,
                          letterSpacing: '0.05em', opacity: 0.65,
                          minWidth: '38px', flexShrink: 0,
                          textTransform: 'uppercase',
                        }}>
                          {entry.type}
                        </span>
                        <span style={{ flex: 1, wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}>
                          {entry.content}
                        </span>
                      </div>
                    ))
                  )}
                  <div ref={consoleEndRef} />
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── PREVIEW PANEL ── */}
        {isPreviewVisible && (
          <section
            style={{
              display: 'flex', flexDirection: 'column',
              minHeight: 0, overflow: 'hidden',
              background: '#ffffff',
              borderLeft: layout === 'split' ? `1px solid ${S.borderSoft}` : 'none',
              ...(expandPreview ? {
                position: 'fixed',
                inset: '56px 0 0 0',
                zIndex: 500,
              } : {}),
            }}
          >
            {/* Browser chrome bar */}
            <div style={{
              flexShrink: 0,
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0 0.85rem', height: '42px',
              background: dark ? '#1f2937' : '#f8f9fa',
              borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`,
              transition: 'background 0.3s ease, border-color 0.3s ease',
            }}>
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28ca41', display: 'inline-block' }} />
              </div>

              {/* URL bar */}
              <div style={{
                flex: 1,
                display: 'flex', alignItems: 'center', gap: '0.45rem',
                padding: '0.28rem 0.75rem',
                background: dark ? '#111827' : '#fff',
                border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                borderRadius: '6px',
                fontSize: '0.72rem',
                color: dark ? '#9ca3af' : '#6b7280',
                fontFamily: "'JetBrains Mono', monospace",
                overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
              }}>
                <i className="bi bi-lock-fill" style={{ color: '#22c55e', fontSize: '0.7rem', flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  preview — css-in-my-style.app
                </span>
              </div>

              {/* Preview actions */}
              <div style={{ display: 'flex', gap: '0.3rem', flexShrink: 0 }}>
                <PreviewBtn onClick={handleRefresh} title="Reload preview" dark={dark} primary={S.primary}>
                  <i className="bi bi-arrow-clockwise" style={{ fontSize: '0.88rem' }} />
                </PreviewBtn>
                <PreviewBtn
                  onClick={() => setExpandPreview((e) => !e)}
                  title={expandPreview ? 'Restore' : 'Fullscreen'}
                  dark={dark}
                  primary={S.primary}
                >
                  <i className={`bi bi-${expandPreview ? 'fullscreen-exit' : 'fullscreen'}`} style={{ fontSize: '0.88rem' }} />
                </PreviewBtn>
              </div>
            </div>

            {/* iframe */}
            <iframe
              ref={previewRef}
              title="CSS Live Preview"
              sandbox="allow-scripts allow-same-origin allow-modals"
              style={{
                flex: 1, width: '100%',
                border: 'none',
                background: '#ffffff',
                display: 'block',
                minHeight: 0,
              }}
            />
          </section>
        )}
      </main>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 768px) {
          #sep1 { display: none !important; }
          #copyLabel { display: none !important; }
        }
        @media (max-width: 600px) {
          .cmp-layout-switch { display: none; }
        }
        .cmp-action-btn:hover {
          border-color: #264de4 !important;
          color: #264de4 !important;
          background: rgba(38,77,228,0.07) !important;
        }
        .cmp-action-btn--danger:hover {
          border-color: #ef4444 !important;
          color: #ef4444 !important;
          background: rgba(239,68,68,0.07) !important;
        }
      `}</style>
    </div>
  )
}

/* ─── Small helper button components ───────────────────────────── */

function HeaderBtn({ children, onClick, title, style = {}, hoverBorder, hoverBg }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 34, height: 34,
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        ...style,
        ...(hov && hoverBorder ? { borderColor: hoverBorder, background: hoverBg || style.background } : {}),
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  )
}

function ActionBtn({ children, onClick, title, primary, danger, active }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      title={title}
      className={`cmp-action-btn${danger ? ' cmp-action-btn--danger' : ''}`}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.35rem',
        padding: '0.38rem 0.7rem',
        borderRadius: '7px',
        border: `1px solid ${active ? primary : 'var(--color-border)'}`,
        background: active ? `rgba(38,77,228,0.12)` : 'var(--color-card)',
        color: active ? primary : 'var(--color-text-muted)',
        fontFamily: 'inherit',
        fontSize: '0.78rem', fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={(e) => setHov(true)}
      onMouseLeave={(e) => setHov(false)}
    >
      {children}
    </button>
  )
}

function LayoutBtn({ children, active, onClick, title, primary, grad }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 32, height: 28,
        borderRadius: '9999px',
        border: 'none',
        background: active ? grad : 'none',
        color: active ? '#fff' : 'var(--color-text-muted)',
        cursor: 'pointer',
        boxShadow: active ? '0 2px 8px rgba(38,77,228,0.30)' : 'none',
        transition: 'all 0.15s ease',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.color = primary
          e.currentTarget.style.background = 'rgba(38,77,228,0.08)'
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.color = ''
          e.currentTarget.style.background = ''
        }
      }}
    >
      {children}
    </button>
  )
}

function ConsoleBtn({ children, onClick, disabled, title }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
        padding: '0.18rem 0.55rem',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'none',
        color: disabled ? '#374151' : '#6b7280',
        fontFamily: 'inherit',
        fontSize: '0.7rem', fontWeight: 700,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        transition: 'all 0.12s ease',
      }}
      onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.color = '#d1d5db'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}
      onMouseLeave={(e) => { if (!disabled) { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; } }}
    >
      {children}
    </button>
  )
}

function PreviewBtn({ children, onClick, title, dark, primary }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 30, height: 30,
        borderRadius: '7px',
        border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        background: dark ? '#111827' : '#fff',
        color: dark ? '#9ca3af' : '#6b7280',
        cursor: 'pointer',
        transition: 'all 0.12s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = primary
        e.currentTarget.style.borderColor = primary
        e.currentTarget.style.background = 'rgba(38,77,228,0.08)'
        e.currentTarget.style.transform = 'scale(1.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = ''
        e.currentTarget.style.borderColor = ''
        e.currentTarget.style.background = ''
        e.currentTarget.style.transform = ''
      }}
    >
      {children}
    </button>
  )
}
