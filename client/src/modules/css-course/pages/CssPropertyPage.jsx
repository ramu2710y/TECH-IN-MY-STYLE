import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import CssNavMenu from "../components/CssNavMenu";
import CssPageFooter from "../components/CssPageFooter";
import { getPropertyExample } from "../data/cssPropertyExamples";
import { getPropertyDetails } from "../data/cssData";
import "../styles/CssPropertyPage.css";

/* ─── Initial preview placeholder ──────────────────────────────── */
const INITIAL_PREVIEW_HTML = `
  <div style="display:flex;height:100%;align-items:center;justify-content:center;
              color:#9ca3af;font-family:system-ui,sans-serif;text-align:center;padding:20px;
              background:#eef2ff;">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"
           fill="none" stroke="#264de4" stroke-width="1.5"
           stroke-linecap="round" stroke-linejoin="round"
           style="margin:0 auto 14px;display:block;">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      <p style="font-size:0.95rem;font-weight:700;color:#264de4;margin:0 0 6px;">
        Click <span style="color:#22c55e;font-weight:800;">Run</span> to see the output
      </p>
      <p style="font-size:0.78rem;color:#7b8db5;margin:0;">
        Edit the code and press Run
      </p>
    </div>
  </div>
`;

/* ─── Default fallback code ─────────────────────────────────────── */
function buildDefaultCode(property) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${property} — CSS IN MY STYLE</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: #eef2ff;
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
    box-shadow: 0 8px 32px rgba(38, 77, 228, 0.15);
    border: 1px solid rgba(38, 77, 228, 0.12);
    max-width: 480px;
    width: 100%;
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 900;
    background: linear-gradient(135deg, #264de4, #2965f1);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.75rem;
    letter-spacing: -0.03em;
  }
  p {
    color: #4a5580;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }
  code {
    background: rgba(38, 77, 228, 0.08);
    color: #264de4;
    padding: 0.2rem 0.55rem;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    font-size: 0.9em;
    border: 1px solid rgba(38, 77, 228, 0.18);
  }

  /* ── Try editing properties below ── */
  .demo-box {
    background: linear-gradient(135deg, #264de4, #2965f1);
    color: white;
    padding: 1.25rem 2rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    display: inline-block;
    /* Add your ${property} CSS here */
  }
</style>
</head>
<body>
  <div class="card">
    <h1>${property}</h1>
    <p>
      This page demonstrates the <code>${property}</code> CSS property.
      Edit the CSS above and click <strong>Run</strong> to see changes.
    </p>
    <div class="demo-box">
      ✨ ${property}
    </div>
  </div>
</body>
</html>`;
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function PropertyPage() {
  const { property } = useParams();
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [activeTab, setActiveTab] = useState("html"); // Add tab state

  const iframeRef = useRef(null);
  const editorRef = useRef(null);

  /* ── Fetch example data ── */
  const example = getPropertyExample(property);
  const details = getPropertyDetails(property);

  const defaultCode = useMemo(() => {
    if (example?.htmlCode && example?.cssCode) {
      // Combine HTML and CSS into a complete document
      const htmlWithoutClosingTag = example.htmlCode.replace('</body>', '');
      return `${htmlWithoutClosingTag}
<style>
${example.cssCode}
</style>
</body>`;
    }
    if (example?.code) return example.code;
    return buildDefaultCode(property || "");
  }, [example, property]);

  const htmlCode = useMemo(() => {
    return example?.htmlCode || buildDefaultCode(property || "");
  }, [example, property]);

  const cssCode = useMemo(() => {
    return example?.cssCode || "";
  }, [example]);

  const rawDescription = useMemo(() => {
    if (example?.description) return example.description;
    if (details?.description) return details.description;
    return `is a CSS property used for styling elements.`;
  }, [example, details]);

  /* Strip leading redundant phrase so banner reads cleanly */
  const description = useMemo(() => {
    return rawDescription
      .replace(new RegExp(`^The\\s+${property}\\s+property\\s+`, "i"), "")
      .replace(new RegExp(`^${property}\\s+`, "i"), "")
      .replace(/^The\s+/i, "");
  }, [rawDescription, property]);

  /* ── Loading animation on property change ── */
  useEffect(() => {
    setIsLoading(true);
    setFadeOut(false);

    const fadeTimer = setTimeout(() => setFadeOut(true), 950);
    const removeTimer = setTimeout(() => setIsLoading(false), 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [property]);

  /* ── Editor mount ── */
  function handleEditorMount(editor) {
    editorRef.current = editor;
  }

  /* ── Run code → inject into iframe ── */
  function runCode() {
    // Always get the current HTML and CSS values from editor
    let currentHtmlCode = htmlCode;
    let currentCssCode = cssCode;

    // If editor is active, get the edited value
    if (editorRef.current) {
      if (activeTab === "html") {
        currentHtmlCode = editorRef.current.getValue();
      } else if (activeTab === "css") {
        currentCssCode = editorRef.current.getValue();
      }
    }

    // Always combine HTML and CSS for output
    const htmlWithoutClosingTag = currentHtmlCode.replace('</body>', '');
    const finalCode = `${htmlWithoutClosingTag}
<style>
${currentCssCode}
</style>
</body>`;

    if (!iframeRef.current) return;

    try {
      const doc = iframeRef.current.contentWindow.document;
      doc.open();
      doc.write(finalCode);
      doc.close();
    } catch {
      /* cross-origin fallback — use srcdoc */
      iframeRef.current.srcdoc = finalCode;
    }
  }

  /* ── Copy code ── */
  const handleCopy = useCallback(async () => {
    const code = editorRef.current ? editorRef.current.getValue() : (activeTab === "html" ? htmlCode : cssCode);

    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel("Copied!");
      setTimeout(() => setCopyLabel("Copy"), 2000);
    } catch {
      /* Fallback */
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
  }, [htmlCode, cssCode, activeTab]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  /* ─── Render ─────────────────────────────────────────────────── */
  return (
    <div className="css-prop-page">
      {/* ══ Loading Overlay ════════════════════════════════════════ */}
      {isLoading && (
        <div className={`css-loading-overlay${fadeOut ? " fade-out" : ""}`}>
          {/* Spinner + CSS logo */}
          <div className="css-loading-logo-wrap">
            <div className="css-loading-spinner-ring" />
            <span className="css-loading-logo-text">CSS</span>
          </div>

          {/* Property name pill */}
          <div className="css-loading-prop-name">{property}</div>

          {/* Bouncing dots */}
          <div className="css-loading-dots">
            <div className="css-loading-dot" />
            <div className="css-loading-dot" />
            <div className="css-loading-dot" />
          </div>

          <p className="css-loading-caption">Loading property info…</p>
        </div>
      )}

      {/* ══ Header ═════════════════════════════════════════════════ */}
      <header className="css-prop-header">
        <div className="css-prop-header-inner">
          {/* Left – Back button */}
          <button
            className="css-prop-back-btn"
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
          <h1 className="css-prop-header-title css-animate-fade-in">
            CSS IN MY STYLE
          </h1>

          {/* Right – Hamburger menu trigger */}
          <button
            className="css-prop-menu-trigger"
            onClick={() => setNavOpen(true)}
            aria-label="Open properties navigation"
            title="Browse all CSS properties"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ══ Sliding Navigation Drawer ══════════════════════════════ */}
      <CssNavMenu isOpen={navOpen} onClose={() => setNavOpen(false)} />

      {/* ══ Info Banner ════════════════════════════════════════════ */}
      <div className="css-prop-info-banner">
        <div className="css-prop-info-inner">
          {/* Info icon */}
          <svg
            className="css-prop-info-icon"
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

          <span className="css-prop-info-text">
            The <code>{property}</code>{" "}
            {description.endsWith(".") ? description : `${description}.`}
          </span>
        </div>
      </div>

      {/* ══ Main Content (Editor + Preview) ════════════════════════ */}
      <main
        className="css-prop-main"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <div className="css-prop-panels-grid" style={{ flex: 1 }}>
          {/* ── Editor Panel ─────────────────────────────────────── */}
          <div className="css-editor-panel hover-scale">
            {/* Panel header bar */}
            <div className="css-editor-panel-header">
              <div className="css-editor-panel-header-left">
                {/* HTML and CSS Tab Buttons */}
                <button
                  className={`css-editor-lang-badge ${activeTab === "html" ? "active" : ""}`}
                  onClick={() => setActiveTab("html")}
                  style={{
                    background: activeTab === "html" ? "#264de4" : "transparent",
                    color: activeTab === "html" ? "white" : "#9ca3af",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "600",
                    marginRight: "0.5rem",
                    transition: "all 0.2s",
                  }}
                >
                  HTML
                </button>
                <button
                  className={`css-editor-lang-badge ${activeTab === "css" ? "active" : ""}`}
                  onClick={() => setActiveTab("css")}
                  style={{
                    background: activeTab === "css" ? "#264de4" : "transparent",
                    color: activeTab === "css" ? "white" : "#9ca3af",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.2s",
                  }}
                >
                  CSS
                </button>
                <span className="css-editor-label-text">Editable Code</span>
              </div>
              <div className="css-editor-dots">
                <div className="css-editor-dot red" />
                <div className="css-editor-dot yellow" />
                <div className="css-editor-dot green" />
              </div>
            </div>

            {/* Monaco Editor */}
            <div
              className="css-editor-monaco-wrap"
              style={{ flex: 1, minHeight: 0 }}
            >
              <Editor
                height="100%"
                defaultLanguage={activeTab === "html" ? "html" : "css"}
                defaultValue={activeTab === "html" ? htmlCode : cssCode}
                key={activeTab}
                theme="vs-dark"
                onMount={handleEditorMount}
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
            </div>

            {/* Action buttons */}
            <div className="css-editor-actions-bar">
              {/* Run */}
              <button className="css-action-btn run" onClick={runCode}>
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
                className="css-action-btn compiler"
                onClick={() => navigate("/css-course/compiler")}
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
              <button className="css-action-btn copy" onClick={handleCopy}>
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
          </div>

          {/* ── Preview Panel ─────────────────────────────────────── */}
          <div className="css-preview-panel">
            {/* Panel header */}
            <div className="css-preview-panel-header">
              <h2 className="css-preview-panel-title">
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
                <div className="css-preview-dots-row">
                  <div className="css-preview-wdot red" />
                  <div className="css-preview-wdot yellow" />
                  <div className="css-preview-wdot green" />
                </div>

                {/* Live badge */}
                <span className="css-preview-live-badge">
                  <span className="css-preview-live-badge-dot" />
                  Live Result
                </span>
              </div>
            </div>

            {/* Iframe output */}
            <iframe
              ref={iframeRef}
              className="css-preview-iframe"
              title="CSS Output Preview"
              sandbox="allow-same-origin allow-scripts"
              srcDoc={INITIAL_PREVIEW_HTML}
              style={{ flex: 1, minHeight: 0 }}
            />

            {/* Hint note */}
            <div className="css-preview-note">
              <div className="css-preview-note-row">
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
                  Edit the code, then click <strong>Run</strong> to render the
                  output. Open <strong>Compiler</strong> for a full HTML/CSS/JS
                  playground.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ══ Footer ═════════════════════════════════════════════════ */}
      <CssPageFooter />
    </div>
  );
}
