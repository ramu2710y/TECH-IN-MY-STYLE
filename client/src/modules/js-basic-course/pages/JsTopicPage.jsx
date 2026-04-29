import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import JsNavMenu from "../components/JsNavMenu";
import JsPageFooter from "../components/JsPageFooter";
import { getTopicExample } from "../data/jsTopicExamples.jsx";
import { getTopicDetails } from "../data/jsData";
import "../styles/JsTopicPage.css";

/* ─── Initial preview placeholder ──────────────────────────────── */
const INITIAL_PREVIEW_HTML = `
  <div style="display:flex;height:100%;align-items:center;justify-content:center;
              color:#5a5a2a;font-family:'Inter',system-ui,sans-serif;text-align:center;padding:20px;
              background:#FFFDE7;">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"
           fill="none" stroke="#F7DF1E" stroke-width="1.5"
           stroke-linecap="round" stroke-linejoin="round"
           style="margin:0 auto 14px;display:block;filter:drop-shadow(0 2px 8px rgba(247,223,30,0.4))">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      <p style="font-size:0.95rem;font-weight:700;color:#323330;margin:0 0 6px;">
        Click <span style="color:#C9B800;font-weight:800;">Run</span> to see the output
      </p>
      <p style="font-size:0.78rem;color:#8a7a40;margin:0;">
        Edit the code and press Run
      </p>
    </div>
  </div>
`;

/* ─── Default fallback code ─────────────────────────────────────── */
function buildDefaultHtml(topic) {
  return `<div class="card">
  <div class="badge">JS</div>
  <h1>${topic}</h1>
  <p>
    This page demonstrates <code>${topic}</code> in JavaScript.
    Edit the code and click <strong>Run</strong> to see the output.
  </p>
  <button id="demoBtn">Click Me!</button>
</div>`;
}

function buildDefaultCss(topic) {
  return `* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: #FFFDE7;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}
.card {
  background: #ffffff;
  border-radius: 18px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(247, 223, 30, 0.25);
  border: 1.5px solid rgba(247, 223, 30, 0.35);
  max-width: 480px;
  width: 100%;
}
.badge {
  display: inline-block;
  background: #F7DF1E;
  color: #323330;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 900;
  font-size: 0.85rem;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  margin-bottom: 1.25rem;
  letter-spacing: 0.05em;
}
h1 {
  font-size: 1.8rem;
  font-weight: 900;
  color: #323330;
  margin-bottom: 0.75rem;
  letter-spacing: -0.03em;
}
p {
  color: #5a5a2a;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}
code {
  background: rgba(247, 223, 30, 0.2);
  color: #7a6000;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.9em;
  border: 1px solid rgba(247, 223, 30, 0.35);
}
button {
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background: #F7DF1E;
  color: #323330;
  border: none;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.25s;
  box-shadow: 0 4px 14px rgba(247, 223, 30, 0.35);
}
button:hover {
  background: #FFE566;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(247, 223, 30, 0.45);
}`;
}

function buildDefaultJs(topic) {
  return `const btn = document.getElementById('demoBtn');

btn.addEventListener('click', () => {
  btn.textContent = 'JavaScript is awesome! 🎉';
  console.log('${topic} demo clicked!');
});

console.log('${topic} demo loaded!');`;
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function JsTopicPage() {
  const { topic } = useParams();
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [consoleOpen, setConsoleOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("html");

  const iframeRef = useRef(null);
  const htmlEditorRef = useRef(null);
  const cssEditorRef = useRef(null);
  const jsEditorRef = useRef(null);
  const consoleEndRef = useRef(null);

  /* ── Fetch example data ── */
  const example = getTopicExample(topic);
  const details = getTopicDetails(topic);

  const defaultHtml = useMemo(() => {
    if (example?.html) return example.html;
    return buildDefaultHtml(topic || "");
  }, [example, topic]);

  const defaultCss = useMemo(() => {
    if (example?.css) return example.css;
    return buildDefaultCss(topic || "");
  }, [example, topic]);

  const defaultJs = useMemo(() => {
    if (example?.js) return example.js;
    return buildDefaultJs(topic || "");
  }, [example, topic]);

  const rawDescription = useMemo(() => {
    if (example?.description) return example.description;
    if (details?.description) return details.description;
    return `is a JavaScript concept used in web development.`;
  }, [example, details]);

  /* Strip leading duplicated phrases so banner reads cleanly */
  const description = useMemo(() => {
    return rawDescription
      .replace(
        new RegExp(
          `^The\\s+${topic}\\s+(keyword|operator|method|statement|function)?\\s*`,
          "i",
        ),
        "",
      )
      .replace(/^The\s+/i, "");
  }, [rawDescription, topic]);

  /* ── Loading animation on topic change ── */
  useEffect(() => {
    setIsLoading(true);
    setFadeOut(false);
    setConsoleLogs([]);

    const fadeTimer = setTimeout(() => setFadeOut(true), 950);
    const removeTimer = setTimeout(() => setIsLoading(false), 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [topic]);

  /* ── Listen for console messages from iframe ── */
  useEffect(() => {
    const onMsg = (e) => {
      if (
        e.data &&
        typeof e.data === "object" &&
        e.data.type &&
        e.data.content
      ) {
        setConsoleLogs((prev) => [
          ...prev,
          { type: e.data.type, content: e.data.content },
        ]);
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  /* ── Auto scroll console ── */
  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [consoleLogs]);

  /* ── Editor mount ── */
  function handleHtmlEditorMount(editor) {
    htmlEditorRef.current = editor;
  }

  function handleCssEditorMount(editor) {
    cssEditorRef.current = editor;
  }

  function handleJsEditorMount(editor) {
    jsEditorRef.current = editor;
  }

  /* ── Run code → inject into iframe ── */
  function runCode() {
    const htmlCode = htmlEditorRef.current
      ? htmlEditorRef.current.getValue()
      : defaultHtml;
    const cssCode = cssEditorRef.current
      ? cssEditorRef.current.getValue()
      : defaultCss;
    const jsCode = jsEditorRef.current
      ? jsEditorRef.current.getValue()
      : defaultJs;

    // Combine into full HTML document
    const fullCode = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${topic} — JS Basic</title>
<style>
${cssCode}
</style>
</head>
<body>
${htmlCode}
<script>
(function(){
  const _log=console.log,_err=console.error,_warn=console.warn;
  console.log=(...a)=>{window.parent.postMessage({type:'log',content:a.join(' ')},'*');_log(...a);};
  console.error=(...a)=>{window.parent.postMessage({type:'error',content:a.join(' ')},'*');_err(...a);};
  console.warn=(...a)=>{window.parent.postMessage({type:'warn',content:a.join(' ')},'*');_warn(...a);};
  window.addEventListener('error',e=>{window.parent.postMessage({type:'error',content:e.message},'*');});
})();
${jsCode}
<\/script>
</body>
</html>`;

    if (!iframeRef.current) return;

    try {
      const doc = iframeRef.current.contentWindow.document;
      doc.open();
      doc.write(fullCode);
      doc.close();
    } catch {
      iframeRef.current.srcdoc = fullCode;
    }
  }

  /* ── Copy code ── */
  const handleCopy = useCallback(async () => {
    let code = "";
    if (activeTab === "html") {
      code = htmlEditorRef.current ? htmlEditorRef.current.getValue() : defaultHtml;
    } else if (activeTab === "css") {
      code = cssEditorRef.current ? cssEditorRef.current.getValue() : defaultCss;
    } else {
      code = jsEditorRef.current ? jsEditorRef.current.getValue() : defaultJs;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel("Copied!");
      setTimeout(() => setCopyLabel("Copy"), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.cssText = "position:fixed;opacity:0;pointer-events:none;";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand("copy");
        setCopyLabel("Copied!");
        setTimeout(() => setCopyLabel("Copy"), 2000);
      } catch (err) {
        console.error("Copy failed", err);
      }
      document.body.removeChild(ta);
    }
  }, [activeTab, defaultHtml, defaultCss, defaultJs]);

  function clearConsole() {
    setConsoleLogs([]);
  }

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  /* ─── Render ─────────────────────────────────────────────────── */
  return (
    <div className="js-topic-page">
      {/* ══ Loading Overlay ════════════════════════════════════════ */}
      {isLoading && (
        <div className={`js-loading-overlay${fadeOut ? " fade-out" : ""}`}>
          {/* Spinner + JS logo */}
          <div className="js-loading-logo-wrap">
            <div className="js-loading-spinner-ring" />
            <span className="js-loading-logo-text">JS</span>
          </div>

          {/* Topic name pill */}
          <div className="js-loading-topic-name">{topic}</div>

          {/* Bouncing dots */}
          <div className="js-loading-dots">
            <div className="js-loading-dot" />
            <div className="js-loading-dot" />
            <div className="js-loading-dot" />
          </div>

          <p className="js-loading-caption">Loading topic info…</p>
        </div>
      )}

      {/* ══ Header ═════════════════════════════════════════════════ */}
      <header className="js-topic-header">
        <div className="js-topic-header-inner">
          {/* Left – Back button */}
          <button
            className="js-topic-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>

          {/* Center – Brand title */}
          <h1 className="js-topic-header-title js-animate-fade-in">
            JAVASCRIPT BASIC IN MY STYLE
          </h1>

          {/* Right – Hamburger menu trigger */}
          <button
            className="js-topic-menu-trigger"
            onClick={() => setNavOpen(true)}
            aria-label="Open topics navigation"
            title="Browse all JS topics"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ══ Sliding Navigation Drawer ══════════════════════════════ */}
      <JsNavMenu isOpen={navOpen} onClose={() => setNavOpen(false)} />

      {/* ══ Info Banner ════════════════════════════════════════════ */}
      <div className="js-topic-info-banner">
        <div className="js-topic-info-inner">
          {/* Info icon */}
          <svg
            className="js-topic-info-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span className="js-topic-info-text">
            The <code>{topic}</code>{" "}
            {description.endsWith(".") ? description : `${description}.`}
          </span>
        </div>
      </div>

      {/* ══ Main Content (Editor + Preview) ════════════════════════ */}
      <main
        className="js-topic-main"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <div className="js-topic-panels-grid" style={{ flex: 1 }}>
          {/* ── Editor Panel ─────────────────────────────────────── */}
          <div className="js-editor-panel hover-scale">
            {/* Panel header bar with tabs */}
            <div className="js-editor-panel-header">
              <div className="js-editor-panel-header-left">
                <button
                  className={`js-editor-tab ${activeTab === "html" ? "active" : ""}`}
                  onClick={() => setActiveTab("html")}
                >
                  <span className="js-editor-lang-badge">HTML</span>
                </button>
                <button
                  className={`js-editor-tab ${activeTab === "css" ? "active" : ""}`}
                  onClick={() => setActiveTab("css")}
                >
                  <span className="js-editor-lang-badge">CSS</span>
                </button>
                <button
                  className={`js-editor-tab ${activeTab === "js" ? "active" : ""}`}
                  onClick={() => setActiveTab("js")}
                >
                  <span className="js-editor-lang-badge">JS</span>
                </button>
              </div>
              <div className="js-editor-dots">
                <div className="js-editor-dot red" />
                <div className="js-editor-dot yellow" />
                <div className="js-editor-dot green" />
              </div>
            </div>

            {/* Monaco Editors - show based on active tab */}
            <div
              className="js-editor-monaco-wrap"
              style={{ flex: 1, minHeight: 0 }}
            >
              {activeTab === "html" && (
                <Editor
                  height="100%"
                  defaultLanguage="html"
                  defaultValue={defaultHtml}
                  theme="vs-dark"
                  onMount={handleHtmlEditorMount}
                  options={{
                    minimap: { enabled: !isMobile },
                    fontSize: isMobile ? 12 : 14,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontLigatures: true,
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    folding: !isMobile,
                    lineNumbers: "on",
                    automaticLayout: true,
                    padding: { top: 12, bottom: 12 },
                    smoothScrolling: true,
                    cursorSmoothCaretAnimation: "on",
                    bracketPairColorization: { enabled: true },
                    renderLineHighlight: "all",
                    scrollbar: {
                      vertical: "visible",
                      horizontal: "visible",
                      verticalScrollbarSize: isMobile ? 6 : 8,
                      horizontalScrollbarSize: isMobile ? 6 : 8,
                    },
                  }}
                />
              )}
              {activeTab === "css" && (
                <Editor
                  height="100%"
                  defaultLanguage="css"
                  defaultValue={defaultCss}
                  theme="vs-dark"
                  onMount={handleCssEditorMount}
                  options={{
                    minimap: { enabled: !isMobile },
                    fontSize: isMobile ? 12 : 14,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontLigatures: true,
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    folding: !isMobile,
                    lineNumbers: "on",
                    automaticLayout: true,
                    padding: { top: 12, bottom: 12 },
                    smoothScrolling: true,
                    cursorSmoothCaretAnimation: "on",
                    bracketPairColorization: { enabled: true },
                    renderLineHighlight: "all",
                    scrollbar: {
                      vertical: "visible",
                      horizontal: "visible",
                      verticalScrollbarSize: isMobile ? 6 : 8,
                      horizontalScrollbarSize: isMobile ? 6 : 8,
                    },
                  }}
                />
              )}
              {activeTab === "js" && (
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  defaultValue={defaultJs}
                  theme="vs-dark"
                  onMount={handleJsEditorMount}
                  options={{
                    minimap: { enabled: !isMobile },
                    fontSize: isMobile ? 12 : 14,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontLigatures: true,
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    folding: !isMobile,
                    lineNumbers: "on",
                    automaticLayout: true,
                    padding: { top: 12, bottom: 12 },
                    smoothScrolling: true,
                    cursorSmoothCaretAnimation: "on",
                    bracketPairColorization: { enabled: true },
                    renderLineHighlight: "all",
                    scrollbar: {
                      vertical: "visible",
                      horizontal: "visible",
                      verticalScrollbarSize: isMobile ? 6 : 8,
                      horizontalScrollbarSize: isMobile ? 6 : 8,
                    },
                  }}
                />
              )}
            </div>

            {/* Action buttons */}
            <div className="js-editor-actions-bar">
              {/* Run */}
              <button className="js-action-btn run" onClick={runCode}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Run
              </button>

              {/* Open in Compiler */}
              <button
                className="js-action-btn compiler"
                onClick={() => navigate("/js-basic-course/compiler")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Compiler
              </button>

              {/* Copy */}
              <button className="js-action-btn copy" onClick={handleCopy}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                {copyLabel}
              </button>
            </div>

            {/* Console Panel */}
            <div
              className="js-console-panel"
              style={{
                maxHeight: consoleOpen ? "200px" : "40px",
                minHeight: "40px",
              }}
            >
              {/* Console header */}
              <div className="js-console-header">
                <div className="js-console-title">
                  <i className="bi bi-terminal" />
                  Console
                  {consoleLogs.length > 0 && (
                    <span className="js-console-count">
                      {consoleLogs.length}
                    </span>
                  )}
                </div>
                <div className="js-console-actions">
                  <button
                    className="js-console-btn"
                    onClick={clearConsole}
                    disabled={consoleLogs.length === 0}
                    title="Clear console"
                  >
                    <i className="bi bi-trash" />
                    Clear
                  </button>
                  <button
                    className="js-console-btn"
                    onClick={() => setConsoleOpen((o) => !o)}
                    title={consoleOpen ? "Collapse" : "Expand"}
                  >
                    <i
                      className={`bi bi-chevron-${consoleOpen ? "down" : "up"}`}
                    />
                  </button>
                </div>
              </div>

              {/* Console output */}
              {consoleOpen && (
                <div className="js-console-output">
                  {consoleLogs.length === 0 ? (
                    <div className="js-console-empty">
                      <i className="bi bi-terminal-dash" />
                      <span>Console output will appear here after Run…</span>
                    </div>
                  ) : (
                    consoleLogs.map((entry, i) => (
                      <div
                        key={i}
                        className={`js-log-entry js-log-${entry.type}`}
                      >
                        <span className="js-log-icon">
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
                        <span className="js-log-type">{entry.type}</span>
                        <span className="js-log-msg">{entry.content}</span>
                      </div>
                    ))
                  )}
                  <div ref={consoleEndRef} aria-hidden="true" />
                </div>
              )}
            </div>
          </div>

          {/* ── Preview Panel ─────────────────────────────────────── */}
          <div className="js-preview-panel">
            {/* Panel header */}
            <div className="js-preview-panel-header">
              <h2 className="js-preview-panel-title">
                <i className="bi bi-display" aria-hidden="true" />
                Output Preview
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                {/* Window dots */}
                <div className="js-preview-dots-row">
                  <div className="js-preview-wdot red" />
                  <div className="js-preview-wdot yellow" />
                  <div className="js-preview-wdot green" />
                </div>

                {/* Live badge */}
                <span className="js-preview-live-badge">
                  <span className="js-preview-live-badge-dot" />
                  Live Result
                </span>
              </div>
            </div>

            {/* Iframe output */}
            <iframe
              ref={iframeRef}
              className="js-preview-iframe"
              title="JavaScript Output Preview"
              sandbox="allow-same-origin allow-scripts allow-modals"
              srcDoc={INITIAL_PREVIEW_HTML}
              style={{ flex: 1, minHeight: 0 }}
            />

            {/* Hint note */}
            <div className="js-preview-note">
              <div className="js-preview-note-row">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>
                  Edit the code, then click <strong>Run</strong> to render
                  output. Use <strong>Compiler</strong> for a full HTML/CSS/JS
                  playground.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ══ Footer ═════════════════════════════════════════════════ */}
      <JsPageFooter />
    </div>
  );
}
