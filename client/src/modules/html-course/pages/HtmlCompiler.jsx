import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { useDarkMode } from "../components/HtmlNavbar";
import "../styles/HtmlCompiler.css";

/* ─── Default code snippets ─────────────────────────────────────── */
const DEFAULT = {
  html: `<!-- ✏️ Write your HTML here -->
<div class="card">
  <div class="card-icon">🌐</div>
  <h1>Hello, World!</h1>
  <p>Welcome to the <strong>HTML IN MY STYLE</strong> Playground.</p>
  <p>Edit the HTML, CSS, and JavaScript tabs to see live results!</p>
  <button onclick="greet()">Click Me!</button>
</div>`,

  css: `/* 🎨 Write your CSS here */
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #fff8f5, #fff);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.card {
  background: #fff;
  border-radius: 20px;
  padding: 2.5rem 3rem;
  text-align: center;
  box-shadow: 0 20px 60px rgba(227, 79, 38, 0.12);
  border: 1px solid rgba(227, 79, 38, 0.15);
  max-width: 420px;
  width: 100%;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, #e34f26, #f16529);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

p {
  color: #5a5a72;
  line-height: 1.7;
  margin-bottom: 0.6rem;
}

strong { color: #e34f26; }

button {
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #e34f26, #f16529);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(227, 79, 38, 0.3);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(227, 79, 38, 0.4);
}`,

  js: `// 🚀 Write your JavaScript here
function greet() {
  const messages = [
    "Great to see you here! 👋",
    "Keep coding! 💪",
    "HTML is awesome! 🌟",
    "You're doing great! 🎉",
    "Keep building! 🏗️"
  ];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  alert(msg);
}

// Auto-run on load
console.log("🎉 Playground loaded successfully!");
console.log("📝 Edit the code panels to see live changes.");
console.log("🌐 Powered by HTML IN MY STYLE");`,
};

/* ─── Tab definitions ───────────────────────────────────────────── */
const TABS = [
  {
    id: "html",
    label: "HTML",
    icon: "bi bi-filetype-html",
    color: "#e34f26",
    monaco: "html",
  },
  {
    id: "css",
    label: "CSS",
    icon: "bi bi-filetype-css",
    color: "#264de4",
    monaco: "css",
  },
  {
    id: "js",
    label: "JavaScript",
    icon: "bi bi-filetype-js",
    color: "#f0db4f",
    monaco: "javascript",
  },
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function HtmlCompiler() {
  const navigate = useNavigate();
  const { dark, toggle } = useDarkMode();

  const [activeTab, setActiveTab] = useState("html");
  const [code, setCode] = useState({ ...DEFAULT });
  const [logs, setLogs] = useState([]);
  const [expandPreview, setExpandPreview] = useState(false);
  const [consoleOpen, setConsoleOpen] = useState(true);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [layout, setLayout] = useState("split"); // 'split' | 'editor' | 'preview'

  const editorRef = useRef(null);
  const previewRef = useRef(null);
  const consoleEndRef = useRef(null);

  /* ── Listen for postMessages from iframe ── */
  useEffect(() => {
    const onMsg = (e) => {
      if (
        e.data &&
        typeof e.data === "object" &&
        e.data.type &&
        e.data.content
      ) {
        setLogs((prev) => [
          ...prev,
          { type: e.data.type, content: e.data.content, ts: Date.now() },
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

  /* ── Re-run on tab layout change ── */
  useEffect(() => {
    setTimeout(() => editorRef.current?.layout(), 120);
  }, [layout, expandPreview]);

  /* ─── Build & inject preview ─── */
  function runPreview(codeObj) {
    if (!previewRef.current) return;
    const safeJS = `
try {
  const _log = console.log;
  const _err = console.error;
  const _warn = console.warn;
  console.log = (...a) => {
    window.parent.postMessage({ type: 'log', content: a.join(' ') }, '*');
    _log(...a);
  };
  console.error = (...a) => {
    window.parent.postMessage({ type: 'error', content: a.join(' ') }, '*');
    _err(...a);
  };
  console.warn = (...a) => {
    window.parent.postMessage({ type: 'warn', content: a.join(' ') }, '*');
    _warn(...a);
  };
  ${codeObj.js}
} catch(e) {
  window.parent.postMessage({ type: 'error', content: 'JS Error: ' + e.message }, '*');
}`;

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
      setCode((prev) => ({
        ...prev,
        [activeTab]: editorRef.current.getValue(),
      }));
    }
    setActiveTab(id);
  }

  /* ─── Actions ─── */
  function handleRefresh() {
    if (editorRef.current) {
      const updated = { ...code, [activeTab]: editorRef.current.getValue() };
      setCode(updated);
      runPreview(updated);
    } else {
      runPreview(code);
    }
  }

  function handleReset() {
    if (!window.confirm("Reset all code to default? This cannot be undone."))
      return;
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

  function handleClearConsole() {
    setLogs([]);
  }

  function handleDownload() {
    const full = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>My Project — HTML IN MY STYLE</title>
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
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-project.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  /* ─── Monaco theme ─── */
  const monacoTheme = dark ? "vs-dark" : "light";
  const currentTabMeta = TABS.find((t) => t.id === activeTab);

  /* ─── Layout classes ─── */
  const gridClass = `cmp-grid cmp-grid--${layout}${expandPreview ? " cmp-grid--preview-full" : ""}`;

  return (
    <div className={`cmp${dark ? " cmp--dark" : ""}`}>
      {/* ══════════ HEADER ══════════ */}
      <header className="cmp-header">
        <div className="cmp-header__left">
          {/* Back button */}
          <button
            className="cmp-header__back"
            onClick={() => navigate(-1)}
            aria-label="Go back"
            title="Go back"
          >
            <i className="bi bi-arrow-left-short" />
          </button>

          {/* Logo / brand */}
          <Link to="/html-course" className="cmp-header__brand" aria-label="Home">
            <span className="cmp-header__brand-tag">&lt;/&gt;</span>
            <span className="cmp-header__brand-html">HTML</span>
            <span className="cmp-header__brand-rest">IN MY STYLE</span>
          </Link>

          {/* Separator + page label */}
          <div className="cmp-header__sep" aria-hidden="true" />
          <div className="cmp-header__page-label">
            <i className="bi bi-terminal-fill" aria-hidden="true" />
            <span>Playground</span>
          </div>
        </div>

        {/* ── Center: layout switcher ── */}
        <div className="cmp-header__center">
          <div className="cmp-layout-switch" role="group" aria-label="Layout">
            {[
              { id: "editor", icon: "bi bi-code-square", label: "Editor only" },
              { id: "split", icon: "bi bi-layout-split", label: "Split view" },
              { id: "preview", icon: "bi bi-display", label: "Preview only" },
            ].map(({ id, icon, label }) => (
              <button
                key={id}
                className={`cmp-layout-btn${layout === id ? " cmp-layout-btn--active" : ""}`}
                onClick={() => setLayout(id)}
                aria-label={label}
                title={label}
              >
                <i className={icon} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Right: action buttons ── */}
        <div className="cmp-header__right">
          {/* Copy */}
          <button
            className="cmp-action-btn"
            onClick={handleCopyCode}
            aria-label="Copy current code"
            title="Copy current code"
          >
            {copyFeedback ? (
              <>
                <i className="bi bi-check2" />
                <span className="cmp-btn-label">Copied!</span>
              </>
            ) : (
              <>
                <i className="bi bi-clipboard" />
                <span className="cmp-btn-label">Copy</span>
              </>
            )}
          </button>

          {/* Download */}
          <button
            className="cmp-action-btn"
            onClick={handleDownload}
            aria-label="Download project as HTML file"
            title="Download as HTML file"
          >
            <i className="bi bi-download" />
            <span className="cmp-btn-label">Download</span>
          </button>

          {/* Refresh */}
          <button
            className="cmp-action-btn cmp-action-btn--primary"
            onClick={handleRefresh}
            aria-label="Refresh preview"
            title="Refresh preview"
          >
            <i className="bi bi-arrow-clockwise" />
            <span className="cmp-btn-label">Run</span>
          </button>

          {/* Reset */}
          <button
            className="cmp-action-btn cmp-action-btn--danger"
            onClick={handleReset}
            aria-label="Reset code to default"
            title="Reset to default"
          >
            <i className="bi bi-trash3" />
          </button>

          {/* Theme toggle */}
          <button
            className="cmp-action-btn cmp-action-btn--icon"
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
          >
            {dark ? (
              <i className="bi bi-sun-fill" />
            ) : (
              <i className="bi bi-moon-stars-fill" />
            )}
          </button>
        </div>
      </header>

      {/* ══════════ MAIN ══════════ */}
      <main className="cmp-main">
        <div className={gridClass}>
          {/* ── EDITOR PANEL ── */}
          {layout !== "preview" && (
            <section className="cmp-editor-panel" aria-label="Code editor">
              {/* Tab bar */}
              <div
                className="cmp-tabs"
                role="tablist"
                aria-label="Language tabs"
              >
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`cmp-tab${activeTab === tab.id ? " cmp-tab--active" : ""}`}
                    onClick={() => switchTab(tab.id)}
                    style={{ "--tab-color": tab.color }}
                    title={`Edit ${tab.label}`}
                  >
                    <i className={tab.icon} aria-hidden="true" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <span
                        className="cmp-tab__active-dot"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                ))}

                {/* Right-side tab actions */}
                <div className="cmp-tabs__spacer" />
                <div className="cmp-tabs__actions">
                  <span
                    className="cmp-tabs__lang-badge"
                    style={{ "--tab-color": currentTabMeta?.color }}
                  >
                    <i className={currentTabMeta?.icon} />
                    {currentTabMeta?.label}
                  </span>
                </div>
              </div>

              {/* Monaco editor */}
              <div className="cmp-editor-wrap">
                <Editor
                  height="100%"
                  language={currentTabMeta?.monaco ?? "html"}
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
                    cursorSmoothCaretAnimation: "on",
                    formatOnPaste: true,
                    formatOnType: true,
                    autoClosingBrackets: "always",
                    autoClosingQuotes: "always",
                    autoIndent: "full",
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    automaticLayout: true,
                    lineHeight: 22,
                    renderLineHighlight: "all",
                    bracketPairColorization: { enabled: true },
                    suggest: { showIcons: true },
                    quickSuggestions: true,
                    tabSize: 2,
                  }}
                />
              </div>

              {/* Console */}
              <div
                className={`cmp-console${consoleOpen ? " cmp-console--open" : ""}`}
              >
                <div className="cmp-console__header">
                  <div className="cmp-console__title">
                    <i className="bi bi-terminal" aria-hidden="true" />
                    Console
                    {logs.length > 0 && (
                      <span
                        className="cmp-console__count"
                        aria-label={`${logs.length} messages`}
                      >
                        {logs.length}
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
                    >
                      <i className="bi bi-trash" />
                      Clear
                    </button>
                    <button
                      className="cmp-console__btn cmp-console__btn--toggle"
                      onClick={() => setConsoleOpen((o) => !o)}
                      aria-expanded={consoleOpen}
                      aria-label={
                        consoleOpen ? "Collapse console" : "Expand console"
                      }
                      title={consoleOpen ? "Collapse" : "Expand"}
                    >
                      <i
                        className={`bi bi-chevron-${consoleOpen ? "down" : "up"}`}
                      />
                    </button>
                  </div>
                </div>

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
                        <span>Console output will appear here…</span>
                      </div>
                    ) : (
                      logs.map((entry, i) => (
                        <div
                          key={i}
                          className={`cmp-log cmp-log--${entry.type}`}
                        >
                          <span className="cmp-log__icon" aria-hidden="true">
                            {entry.type === "error" && (
                              <i className="bi bi-x-circle-fill" />
                            )}
                            {entry.type === "warn" && (
                              <i className="bi bi-exclamation-triangle-fill" />
                            )}
                            {entry.type === "log" && (
                              <i className="bi bi-chevron-right" />
                            )}
                          </span>
                          <span className="cmp-log__type">
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
          {layout !== "editor" && (
            <section className="cmp-preview-panel" aria-label="Live preview">
              {/* Browser chrome bar */}
              <div className="cmp-preview-bar">
                <div className="cmp-preview-dots" aria-hidden="true">
                  <span className="cmp-preview-dot cmp-preview-dot--red" />
                  <span className="cmp-preview-dot cmp-preview-dot--yellow" />
                  <span className="cmp-preview-dot cmp-preview-dot--green" />
                </div>
                <div className="cmp-preview-url" aria-label="Preview URL">
                  <i className="bi bi-lock-fill" aria-hidden="true" />
                  <span>preview — html-in-my-style.app</span>
                </div>
                <div className="cmp-preview-bar__actions">
                  <button
                    className="cmp-preview-action"
                    onClick={handleRefresh}
                    aria-label="Reload preview"
                    title="Reload preview"
                  >
                    <i className="bi bi-arrow-clockwise" />
                  </button>
                  <button
                    className="cmp-preview-action"
                    onClick={() => setExpandPreview((e) => !e)}
                    aria-label={
                      expandPreview ? "Restore preview" : "Fullscreen preview"
                    }
                    title={expandPreview ? "Restore" : "Fullscreen"}
                  >
                    <i
                      className={`bi bi-${expandPreview ? "fullscreen-exit" : "fullscreen"}`}
                    />
                  </button>
                </div>
              </div>

              {/* iframe */}
              <iframe
                ref={previewRef}
                className="cmp-preview-frame"
                title="Live preview"
                sandbox="allow-scripts allow-same-origin allow-modals"
                aria-label="Live preview of your code"
              />
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
