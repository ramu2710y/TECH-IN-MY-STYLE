import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import HtmlTagNavMenu from "../components/HtmlTagNavMenu";
import HtmlTagPageFooter from "../components/HtmlTagPageFooter";
import htmlTagPagesData from "../data/htmlTagPagesData";
import "../styles/HtmlTagPage.css";

const INITIAL_PREVIEW_HTML = `
  <div style="display:flex;height:100%;align-items:center;justify-content:center;
              color:#9ca3af;font-family:system-ui,sans-serif;text-align:center;padding:20px;">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"
           fill="none" stroke="#e34c26" stroke-width="1.5"
           stroke-linecap="round" stroke-linejoin="round"
           style="margin:0 auto 12px;display:block;">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      <p style="font-size:0.95rem;font-weight:600;color:#374151;">
        Click <span style="color:#22c55e;font-weight:700;">Run</span> to see the output
      </p>
    </div>
  </div>
`;

export default function HtmlTagPage() {
  const { tag } = useParams();
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const iframeRef = useRef(null);
  const editorRef = useRef(null);

  // ── Find tag data ──────────────────────────────────────────────
  const tagData = htmlTagPagesData.find(
    (t) => t.tag.toLowerCase() === (tag || "").toLowerCase(),
  );

  const defaultCode = tagData
    ? tagData.code
    : `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${(tag || "").toUpperCase()} Tag Example</title>
</head>
<body>
  <h2>&lt;${tag}&gt; Tag Example</h2>
  <p>This is an example of the &lt;${tag}&gt; tag.</p>
</body>
</html>`;

  const rawDescription = tagData
    ? tagData.description
    : `The <${tag}> tag is an HTML element used in web development.`;

  // Strip leading "The <tagname> tag " so the banner template doesn't duplicate it
  const description = useMemo(() => {
    return rawDescription
      .replace(new RegExp(`^The\\s+<${tag}>\\s+tag\\s+`, "i"), "")
      .replace(/^The\s+/i, "");
  }, [rawDescription, tag]);

  // ── Loading animation: show loader, then fade it out ──────────
  useEffect(() => {
    setIsLoading(true);
    setFadeOut(false);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 950);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [tag]);

  // ── Reset editor and preview when tag changes ──────────────────
  useEffect(() => {
    // Reset editor content
    if (editorRef.current) {
      editorRef.current.setValue(defaultCode);
    }
    
    // Reset preview
    if (iframeRef.current) {
      iframeRef.current.srcdoc = INITIAL_PREVIEW_HTML;
    }
  }, [tag, defaultCode]);

  // ── Editor callbacks ───────────────────────────────────────────
  function handleEditorMount(editor) {
    editorRef.current = editor;
  }

  function runCode() {
    const code = editorRef.current ? editorRef.current.getValue() : defaultCode;
    if (!iframeRef.current) return;
    const doc = iframeRef.current.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  }

  const handleCopy = useCallback(async () => {
    const code = editorRef.current ? editorRef.current.getValue() : defaultCode;
    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel("Copied!");
      setTimeout(() => setCopyLabel("Copy"), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = code;
      textarea.style.cssText = "position:fixed;opacity:0;pointer-events:none;";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand("copy");
        setCopyLabel("Copied!");
        setTimeout(() => setCopyLabel("Copy"), 2000);
      } catch (err) {
        console.error("Copy failed", err);
      }
      document.body.removeChild(textarea);
    }
  }, [defaultCode]);

  const isMobile = window.innerWidth < 768;
  const editorHeight = isMobile ? "280px" : "100%";

  // ── Render ─────────────────────────────────────────────────────
  return (
    <div className="tag-page">
      {/* ══ Loading Overlay ══════════════════════════════════════ */}
      {isLoading && (
        <div className={`tag-loading-overlay${fadeOut ? " fade-out" : ""}`}>
          {/* Spinning ring + HTML logo */}
          <div className="loading-logo-wrap">
            <div className="loading-spinner-ring" />
            <span className="loading-html-text">&lt;/&gt;</span>
          </div>

          {/* Tag name pill */}
          <div className="loading-tag-name">&lt;{tag}&gt;</div>

          {/* Bouncing dots */}
          <div className="loading-dots">
            <div className="loading-dot" />
            <div className="loading-dot" />
            <div className="loading-dot" />
          </div>

          <p className="loading-caption">Loading tag info…</p>
        </div>
      )}

      {/* ══ Header ═══════════════════════════════════════════════ */}
      <header className="tag-page-header">
        <div className="tag-header-inner">
          {/* Left – Back button */}
          <button
            className="tag-back-btn"
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

          {/* Center – Title */}
          <h1 className="tag-header-title animate-fade-in">HTML IN MY STYLE</h1>

          {/* Right – Hamburger menu trigger (three lines) */}
          <button
            className="tag-menu-trigger"
            onClick={() => setNavOpen(true)}
            aria-label="Open tag navigation"
            title="Browse all tags"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* ══ Sliding Navigation Drawer ════════════════════════════ */}
      <HtmlTagNavMenu isOpen={navOpen} onClose={() => setNavOpen(false)} />

      {/* ══ Info Banner ══════════════════════════════════════════ */}
      <div className="tag-info-banner">
        <div className="tag-info-inner">
          <svg
            className="tag-info-icon"
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
          <span className="tag-info-text">
            The <code>&lt;{tag}&gt;</code> tag {description}
          </span>
        </div>
      </div>

      {/* ══ Main Panels ══════════════════════════════════════════ */}
      <main
        className="tag-main"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <div className="tag-panels-grid" style={{ flex: 1 }}>
          {/* ── Editor Panel ──────────────────────────────────── */}
          <div className="editor-panel hover-scale">
            {/* Panel header bar */}
            <div className="editor-panel-header">
              <div className="editor-panel-header-left">
                <span className="editor-lang-badge">HTML</span>
                <span className="editor-label-text">Editable Code</span>
              </div>
              <div className="editor-dots">
                <div className="editor-dot red" />
                <div className="editor-dot yellow" />
                <div className="editor-dot green" />
              </div>
            </div>

            {/* Monaco Editor */}
            <div
              className="editor-monaco-wrap"
              style={{ flex: 1, minHeight: 0 }}
            >
              <Editor
                height="100%"
                defaultLanguage="html"
                defaultValue={defaultCode}
                theme="vs-dark"
                onMount={handleEditorMount}
                options={{
                  minimap: { enabled: !isMobile },
                  fontSize: isMobile ? 12 : 14,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                  folding: !isMobile,
                  lineNumbers: "on",
                  automaticLayout: true,
                  padding: { top: 10 },
                  scrollbar: {
                    vertical: "visible",
                    horizontal: "visible",
                    verticalScrollbarSize: isMobile ? 6 : 10,
                    horizontalScrollbarSize: isMobile ? 6 : 10,
                  },
                }}
              />
            </div>

            {/* Action buttons bar */}
            <div className="editor-actions-bar">
              {/* Run */}
              <button className="action-btn run" onClick={runCode}>
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
                className="action-btn compiler"
                onClick={() => navigate("/html-course/compiler")}
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
              <button className="action-btn copy" onClick={handleCopy}>
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

          {/* ── Preview Panel ─────────────────────────────────── */}
          <div className="preview-panel">
            {/* Panel header */}
            <div className="preview-panel-header">
              <h2 className="preview-panel-title">Output Preview</h2>
              <span className="preview-live-badge">Live Result</span>
            </div>

            {/* iframe */}
            <iframe
              ref={iframeRef}
              className="preview-iframe"
              title="output"
              sandbox="allow-same-origin allow-scripts"
              srcDoc={INITIAL_PREVIEW_HTML}
              style={{ flex: 1, minHeight: 0 }}
            />

            {/* Note */}
            <div className="preview-note">
              <div className="preview-note-row">
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
                  If the preview doesn't render correctly, click{" "}
                  <strong>Compiler</strong> to open the full playground and run
                  the code there.
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ══ Footer ═══════════════════════════════════════════════ */}
      <HtmlTagPageFooter />
    </div>
  );
}
