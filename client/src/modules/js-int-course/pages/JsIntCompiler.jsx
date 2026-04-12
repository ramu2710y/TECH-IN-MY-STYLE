import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { useDarkMode } from '../components/JsIntNavbar'
import '../styles/JsIntCompiler.css'

/* ─── Default code snippets ──────────────────────────────────────── */
const DEFAULT = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Intermediate Playground</title>
</head>
<body>
  <div id="app">
    <h1>🟨 JS Intermediate Playground</h1>
    <p>Write JavaScript in the JS tab and click <strong>Run</strong>!</p>
    <div id="output"></div>
    <div id="extra"></div>
  </div>
</body>
</html>`,

  css: `* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: #1a1a1a;
  color: #f0f0f0;
  padding: 24px;
  min-height: 100vh;
}

h1 {
  color: #8b5cf6;
  margin-bottom: 16px;
  font-size: 1.5rem;
  font-weight: 800;
}

p {
  color: #aaa;
  margin-bottom: 20px;
  line-height: 1.6;
}

strong { color: #8b5cf6; }

#output {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: #22c55e;
  padding: 16px;
  background: #0a0a0a;
  border-radius: 8px;
  border: 1px solid #2a2a2a;
  font-size: 0.9rem;
  line-height: 1.7;
  min-height: 48px;
  margin-bottom: 12px;
  white-space: pre-wrap;
}

#extra {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  color: #93c5fd;
  font-size: 0.82rem;
  padding: 10px 14px;
  background: rgba(59, 130, 246, 0.06);
  border-radius: 6px;
  border-left: 3px solid #3b82f6;
  line-height: 1.6;
}`,

  js: `// ── JS Intermediate Playground ──────────────────────────────
// Write your JavaScript here and click Run!

// 1. Arrow functions + template literals
const greet = (name) => \`Hello, \${name}! 🎉\`;
document.getElementById('output').textContent = greet('Developer');

// 2. Array methods chain
const scores  = [42, 85, 91, 67, 73, 55, 88];
const passing = scores
  .filter(s => s >= 60)
  .map(s => s.toFixed(0) + '%')
  .join(', ');

document.getElementById('extra').textContent =
  'Passing scores: ' + passing;

// 3. Console — shows in the Console panel below
console.log('Playground ready ✅');
console.log('Filtered scores:', scores.filter(s => s >= 60));
console.warn('Tip: open the Console panel to see all logs!');
`
}

/* ─── Tab definitions ────────────────────────────────────────────── */
const TABS = [
  { id: 'html', label: 'HTML',       icon: 'bi bi-filetype-html', color: '#e34f26', monaco: 'html'       },
  { id: 'css',  label: 'CSS',        icon: 'bi bi-filetype-css',  color: '#264de4', monaco: 'css'        },
  { id: 'js',   label: 'JavaScript', icon: 'bi bi-filetype-js',   color: '#8b5cf6', monaco: 'javascript' },
]

/* ─── Component ──────────────────────────────────────────────────── */
export default function JsIntCompiler() {
  const navigate         = useNavigate()
  const { dark, toggle } = useDarkMode()

  /* ── State ── */
  const [activeTab,     setActiveTab]     = useState('js')
  const [code,          setCode]          = useState({ ...DEFAULT })
  const [logs,          setLogs]          = useState([])
  const [consoleOpen,   setConsoleOpen]   = useState(true)
  const [expandPreview, setExpandPreview] = useState(false)
  const [copyFeedback,  setCopyFeedback]  = useState(false)
  const [layout,        setLayout]        = useState('split') // 'split' | 'editor' | 'preview'
  const [hasRun,        setHasRun]        = useState(false)

  /* ── Refs ── */
  const editorRef    = useRef(null)
  const previewRef   = useRef(null)
  const consoleEndRef = useRef(null)

  /* ── Receive postMessages from iframe console ── */
  useEffect(() => {
    const onMsg = (e) => {
      if (
        e.data &&
        typeof e.data === 'object' &&
        e.data.__jsint_log === true
      ) {
        const { type, content } = e.data
        setLogs((prev) => [
          ...prev,
          { type: type || 'log', content: String(content), ts: Date.now() },
        ])
      }
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  /* ── Auto-scroll console to bottom ── */
  useEffect(() => {
    if (consoleOpen) {
      consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [logs, consoleOpen])

  /* ── Trigger initial preview on mount ── */
  useEffect(() => {
    runPreview(code)
    setHasRun(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* ── Re-layout editor after panel switches ── */
  useEffect(() => {
    const t = setTimeout(() => editorRef.current?.layout(), 120)
    return () => clearTimeout(t)
  }, [layout, expandPreview])

  /* ─── Build iframe srcDoc and inject ─── */
  function runPreview(codeObj) {
    if (!previewRef.current) return

    const safeJS = `(function() {
  'use strict';
  var _origLog  = console.log;
  var _origErr  = console.error;
  var _origWarn = console.warn;
  var _origInfo = console.info;

  function _post(type, args) {
    var text = Array.prototype.map.call(args, function(a) {
      if (a === null)      return 'null';
      if (a === undefined) return 'undefined';
      if (typeof a === 'object') {
        try { return JSON.stringify(a, null, 2); } catch(e) { return String(a); }
      }
      return String(a);
    }).join(' ');
    try {
      window.parent.postMessage({ __jsint_log: true, type: type, content: text }, '*');
    } catch(e) {}
  }

  console.log  = function() { _post('log',  arguments); _origLog.apply(console,  arguments); };
  console.error= function() { _post('error',arguments); _origErr.apply(console,  arguments); };
  console.warn = function() { _post('warn', arguments); _origWarn.apply(console, arguments); };
  console.info = function() { _post('info', arguments); _origInfo.apply(console, arguments); };

  window.addEventListener('error', function(e) {
    _post('error', ['Uncaught ' + e.message + (e.filename ? ' (' + e.filename + ':' + e.lineno + ')' : '')]);
  });

  try {
    ${codeObj.js}
  } catch(e) {
    _post('error', ['JS Error: ' + e.message]);
  }
})();`

    previewRef.current.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
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
  }

  function switchTab(id) {
    if (id === activeTab) return
    if (editorRef.current) {
      setCode((prev) => ({ ...prev, [activeTab]: editorRef.current.getValue() }))
    }
    setActiveTab(id)
  }

  /* ─── Action handlers ─── */
  function handleRun() {
    if (editorRef.current) {
      const updated = { ...code, [activeTab]: editorRef.current.getValue() }
      setCode(updated)
      runPreview(updated)
    } else {
      runPreview(code)
    }
    setHasRun(true)
  }

  function handleRefresh() {
    handleRun()
  }

  function handleReset() {
    if (!window.confirm('Reset all code to default? This cannot be undone.')) return
    setCode({ ...DEFAULT })
    setLogs([])
    setTimeout(() => runPreview(DEFAULT), 50)
    setHasRun(true)
  }

  const handleCopyCode = useCallback(() => {
    const current = editorRef.current?.getValue() ?? code[activeTab]
    navigator.clipboard
      .writeText(current)
      .then(() => {
        setCopyFeedback(true)
        setTimeout(() => setCopyFeedback(false), 2000)
      })
      .catch(() => {
        /* fallback */
        const ta = document.createElement('textarea')
        ta.value = current
        ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none;'
        document.body.appendChild(ta)
        ta.focus(); ta.select()
        try { document.execCommand('copy') } catch {}
        document.body.removeChild(ta)
        setCopyFeedback(true)
        setTimeout(() => setCopyFeedback(false), 2000)
      })
  }, [code, activeTab])

  function handleClearConsole() {
    setLogs([])
  }

  function handleDownload() {
    const latest = editorRef.current
      ? { ...code, [activeTab]: editorRef.current.getValue() }
      : code

    const full = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>My JS Project — JS Intermediate In My Style</title>
  <style>
${latest.css}
  </style>
</head>
<body>
${latest.html}
  <script>
${latest.js}
  <\/script>
</body>
</html>`

    const blob = new Blob([full], { type: 'text/html' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = 'my-js-project.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  /* ─── Derived values ─── */
  const monacoTheme    = 'vs-dark'
  const currentTabMeta = TABS.find((t) => t.id === activeTab)
  const errorCount     = logs.filter((l) => l.type === 'error').length
  const warnCount      = logs.filter((l) => l.type === 'warn').length

  const gridClass = [
    'cmp-grid',
    `cmp-grid--${layout}`,
    expandPreview ? 'cmp-grid--preview-full' : '',
  ]
    .filter(Boolean)
    .join(' ')

  /* ─────────────────────────────────────────────────────────────── */
  /*  RENDER                                                          */
  /* ─────────────────────────────────────────────────────────────── */
  return (
    <div className={`cmp${dark ? ' cmp--dark' : ''}`}>

      {/* ══════════════════════════════════════════════════════════
          TOP BAR
      ══════════════════════════════════════════════════════════ */}
      <header className="cmp-header" role="banner">

        {/* Left — back + brand */}
        <div className="cmp-header__left">
          <button
            className="cmp-header__back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            title="Go back"
            type="button"
          >
            <i className="bi bi-arrow-left-short" aria-hidden="true" />
          </button>

          <Link to="/js-int-course/" className="cmp-header__brand" aria-label="JsIntHome">
            <span className="cmp-header__brand-js" aria-hidden="true">&lt;JS/&gt;</span>
            <span className="cmp-header__brand-int">INT</span>
            <span className="cmp-header__brand-rest">IN MY STYLE</span>
          </Link>

          <div className="cmp-header__sep" aria-hidden="true" />

          <div className="cmp-header__page-label">
            <i className="bi bi-terminal-fill" aria-hidden="true" />
            <span>Playground</span>
          </div>
        </div>

        {/* Center — layout switcher */}
        <div className="cmp-header__center">
          <div className="cmp-layout-switch" role="group" aria-label="Layout options">
            {[
              { id: 'editor',  icon: 'bi bi-code-square',   label: 'Editor only'  },
              { id: 'split',   icon: 'bi bi-layout-split',  label: 'Split view'   },
              { id: 'preview', icon: 'bi bi-display',       label: 'Preview only' },
            ].map(({ id, icon, label }) => (
              <button
                key={id}
                className={`cmp-layout-btn${layout === id ? ' cmp-layout-btn--active' : ''}`}
                onClick={() => setLayout(id)}
                aria-label={label}
                aria-pressed={layout === id}
                title={label}
                type="button"
              >
                <i className={icon} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        {/* Right — actions */}
        <div className="cmp-header__right">

          {/* Run */}
          <button
            className="cmp-action-btn cmp-action-btn--run"
            onClick={handleRun}
            aria-label="Run code"
            title="Run code"
            type="button"
          >
            <i className="bi bi-play-fill" aria-hidden="true" />
            <span className="cmp-btn-label">Run</span>
          </button>

          {/* Copy */}
          <button
            className="cmp-action-btn"
            onClick={handleCopyCode}
            aria-label="Copy current tab code"
            title="Copy current code"
            type="button"
          >
            {copyFeedback ? (
              <>
                <i className="bi bi-check2" aria-hidden="true" />
                <span className="cmp-btn-label">Copied!</span>
              </>
            ) : (
              <>
                <i className="bi bi-clipboard" aria-hidden="true" />
                <span className="cmp-btn-label">Copy</span>
              </>
            )}
          </button>

          {/* Download */}
          <button
            className="cmp-action-btn"
            onClick={handleDownload}
            aria-label="Download as HTML file"
            title="Download project"
            type="button"
          >
            <i className="bi bi-download" aria-hidden="true" />
            <span className="cmp-btn-label">Download</span>
          </button>

          {/* Refresh */}
          <button
            className="cmp-action-btn"
            onClick={handleRefresh}
            aria-label="Refresh preview"
            title="Refresh preview"
            type="button"
          >
            <i className="bi bi-arrow-clockwise" aria-hidden="true" />
            <span className="cmp-btn-label">Refresh</span>
          </button>

          {/* Reset */}
          <button
            className="cmp-action-btn cmp-action-btn--danger"
            onClick={handleReset}
            aria-label="Reset code to default"
            title="Reset to default"
            type="button"
          >
            <i className="bi bi-trash3" aria-hidden="true" />
          </button>

          {/* Theme toggle */}
          <button
            className="cmp-action-btn cmp-action-btn--icon"
            onClick={toggle}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
            type="button"
          >
            <i
              className={dark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'}
              aria-hidden="true"
            />
          </button>

        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          MAIN WORKSPACE
      ══════════════════════════════════════════════════════════ */}
      <main className="cmp-main" id="main-content">
        <div className={gridClass}>

          {/* ── EDITOR PANEL ── */}
          {layout !== 'preview' && (
            <section className="cmp-editor-panel" aria-label="Code editor">

              {/* Tab bar */}
              <div
                className="cmp-tabs"
                role="tablist"
                aria-label="Language tabs"
              >
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`panel-${tab.id}`}
                      id={`tab-${tab.id}`}
                      className={`cmp-tab${isActive ? ' cmp-tab--active' : ''}`}
                      onClick={() => switchTab(tab.id)}
                      style={{ '--tab-color': tab.color }}
                      title={`Edit ${tab.label}`}
                      type="button"
                    >
                      <i className={tab.icon} aria-hidden="true" />
                      <span>{tab.label}</span>
                      {isActive && (
                        <span
                          className="cmp-tab__indicator"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  )
                })}

                {/* Right-side badge showing active language */}
                <div className="cmp-tabs__spacer" />
                <div className="cmp-tabs__meta">
                  <span
                    className="cmp-tabs__lang-badge"
                    style={{ '--tab-color': currentTabMeta?.color }}
                    aria-label={`Editing ${currentTabMeta?.label}`}
                  >
                    <i className={currentTabMeta?.icon} aria-hidden="true" />
                    {currentTabMeta?.label}
                  </span>
                </div>
              </div>

              {/* Monaco editor */}
              <div
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                className="cmp-editor-wrap"
              >
                <Editor
                  height="100%"
                  language={currentTabMeta?.monaco ?? 'javascript'}
                  value={code[activeTab]}
                  theme={monacoTheme}
                  onMount={onEditorMount}
                  onChange={onEditorChange}
                  options={{
                    minimap:                    { enabled: false },
                    fontSize:                   14,
                    fontFamily:                 '"JetBrains Mono", "Fira Code", monospace',
                    fontLigatures:              true,
                    padding:                    { top: 16, bottom: 16 },
                    smoothScrolling:            true,
                    cursorSmoothCaretAnimation: 'on',
                    formatOnPaste:              true,
                    formatOnType:               true,
                    autoClosingBrackets:        'always',
                    autoClosingQuotes:          'always',
                    autoIndent:                 'full',
                    scrollBeyondLastLine:       false,
                    wordWrap:                   'on',
                    automaticLayout:            true,
                    lineHeight:                 22,
                    renderLineHighlight:        'all',
                    bracketPairColorization:    { enabled: true },
                    suggest:                    { showIcons: true },
                    quickSuggestions:           true,
                    tabSize:                    2,
                  }}
                />
              </div>

              {/* Console panel */}
              <div
                className={`cmp-console${consoleOpen ? ' cmp-console--open' : ''}`}
                aria-label="Console"
              >
                {/* Console header */}
                <div className="cmp-console__header">
                  <div className="cmp-console__title">
                    <i className="bi bi-terminal" aria-hidden="true" />
                    Console
                    {logs.length > 0 && (
                      <span
                        className={`cmp-console__count${errorCount > 0 ? ' cmp-console__count--error' : ''}`}
                        aria-label={`${logs.length} messages`}
                      >
                        {logs.length}
                      </span>
                    )}
                    {errorCount > 0 && (
                      <span className="cmp-console__err-pill" aria-label={`${errorCount} errors`}>
                        <i className="bi bi-x-circle-fill" aria-hidden="true" />
                        {errorCount}
                      </span>
                    )}
                    {warnCount > 0 && (
                      <span className="cmp-console__warn-pill" aria-label={`${warnCount} warnings`}>
                        <i className="bi bi-exclamation-triangle-fill" aria-hidden="true" />
                        {warnCount}
                      </span>
                    )}
                  </div>

                  <div className="cmp-console__actions">
                    <button
                      className="cmp-console__btn"
                      onClick={handleClearConsole}
                      disabled={logs.length === 0}
                      aria-label="Clear console"
                      title="Clear console"
                      type="button"
                    >
                      <i className="bi bi-trash" aria-hidden="true" />
                      <span>Clear</span>
                    </button>
                    <button
                      className="cmp-console__btn cmp-console__btn--toggle"
                      onClick={() => setConsoleOpen((o) => !o)}
                      aria-expanded={consoleOpen}
                      aria-label={consoleOpen ? 'Collapse console' : 'Expand console'}
                      title={consoleOpen ? 'Collapse' : 'Expand'}
                      type="button"
                    >
                      <i
                        className={`bi bi-chevron-${consoleOpen ? 'down' : 'up'}`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>

                {/* Console output */}
                {consoleOpen && (
                  <div
                    className="cmp-console__output"
                    role="log"
                    aria-live="polite"
                    aria-label="Console output"
                  >
                    {logs.length === 0 ? (
                      <div className="cmp-console__empty">
                        <i className="bi bi-terminal-dash" aria-hidden="true" />
                        <span>
                          {hasRun
                            ? 'No console output — try adding console.log() to your JS'
                            : 'Console output will appear here after you click Run…'}
                        </span>
                      </div>
                    ) : (
                      logs.map((entry, i) => (
                        <div
                          key={i}
                          className={`cmp-log cmp-log--${entry.type}`}
                        >
                          <span className="cmp-log__icon" aria-hidden="true">
                            {entry.type === 'error' && <i className="bi bi-x-circle-fill" />}
                            {entry.type === 'warn'  && <i className="bi bi-exclamation-triangle-fill" />}
                            {entry.type === 'info'  && <i className="bi bi-info-circle-fill" />}
                            {entry.type === 'log'   && <i className="bi bi-chevron-right" />}
                          </span>
                          <span className="cmp-log__type" aria-hidden="true">
                            {entry.type.toUpperCase()}
                          </span>
                          <span className="cmp-log__msg">{entry.content}</span>
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
          {layout !== 'editor' && (
            <section
              className={`cmp-preview-panel${expandPreview ? ' cmp-preview-panel--expanded' : ''}`}
              aria-label="Live preview"
            >
              {/* Browser chrome bar */}
              <div className="cmp-preview-bar">
                <div className="cmp-preview-dots" aria-hidden="true">
                  <span className="cmp-preview-dot cmp-preview-dot--red"    />
                  <span className="cmp-preview-dot cmp-preview-dot--yellow" />
                  <span className="cmp-preview-dot cmp-preview-dot--green"  />
                </div>

                <div className="cmp-preview-url" aria-label="Preview sandbox URL">
                  <i className="bi bi-lock-fill" aria-hidden="true" />
                  <span>js-intermediate-playground.app</span>
                </div>

                <div className="cmp-preview-bar__actions">
                  <button
                    className="cmp-preview-action"
                    onClick={handleRun}
                    aria-label="Run and reload preview"
                    title="Run & Reload"
                    type="button"
                  >
                    <i className="bi bi-play-fill" aria-hidden="true" />
                  </button>
                  <button
                    className="cmp-preview-action"
                    onClick={handleRefresh}
                    aria-label="Reload preview"
                    title="Reload preview"
                    type="button"
                  >
                    <i className="bi bi-arrow-clockwise" aria-hidden="true" />
                  </button>
                  <button
                    className="cmp-preview-action"
                    onClick={() => setExpandPreview((e) => !e)}
                    aria-label={expandPreview ? 'Restore preview size' : 'Fullscreen preview'}
                    title={expandPreview ? 'Restore' : 'Fullscreen'}
                    type="button"
                  >
                    <i
                      className={`bi bi-${expandPreview ? 'fullscreen-exit' : 'fullscreen'}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>

              {/* Sandboxed preview iframe */}
              <iframe
                ref={previewRef}
                className="cmp-preview-frame"
                title="Live preview of your code"
                sandbox="allow-scripts allow-same-origin allow-modals allow-forms"
                aria-label="Live code preview"
              />
            </section>
          )}

        </div>
      </main>
    </div>
  )
}
