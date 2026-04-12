import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import JsIntTopicNavMenu from "../components/JsIntTopicNavMenu";
import JsIntTopicPageFooter from "../components/JsIntTopicPageFooter";
import { jsIntTopicExamples } from "../data/jsIntTopicExamples";
import "../styles/JsIntTopicPage.css";

export default function JsIntTopicPage() {
  const { topic } = useParams();
  const navigate = useNavigate();

  /* ── State ─────────────────────────────────────────────────── */
  const [navOpen, setNavOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [consoleOutput, setConsoleOutput] = useState([]);

  const editorRef = useRef(null);

  /* ── Locate topic data ─────────────────────────────────────── */
  const topicData = jsIntTopicExamples.find(
    (t) => t.topic.toLowerCase() === (topic || "").toLowerCase(),
  );

  const defaultCode =
    topicData?.code ?? `// ${topic}\nconsole.log("Hello from ${topic}!")`;

  const rawDescription =
    topicData?.description ?? `This topic covers ${topic} in JavaScript.`;

  /* Strip leading "The <topic> concept / tag " so the banner template
     doesn't accidentally duplicate it */
  const description = useMemo(() => {
    return rawDescription
      .replace(new RegExp(`^The\\s+${topic}\\s+`, "i"), "")
      .replace(/^The\s+/i, "");
  }, [rawDescription, topic]);

  /* ── Loading animation ─────────────────────────────────────── */
  useEffect(() => {
    setIsLoading(true);
    setFadeOut(false);
    setConsoleOutput([]);

    const fadeTimer = setTimeout(() => setFadeOut(true), 950);
    const removeTimer = setTimeout(() => setIsLoading(false), 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [topic]);

  /* ── Editor mount ──────────────────────────────────────────── */
  function handleEditorMount(editor) {
    editorRef.current = editor;
  }

  /* ── Run code, capture console output ─────────────────────── */
  function runCode() {
    const code = editorRef.current?.getValue() ?? defaultCode;
    const outputs = [];

    const serialize = (args) =>
      args
        .map((a) => {
          if (a === null) return "null";
          if (a === undefined) return "undefined";
          if (typeof a === "object") {
            try {
              return JSON.stringify(a, null, 2);
            } catch {
              return String(a);
            }
          }
          return String(a);
        })
        .join(" ");

    const origLog = console.log;
    const origErr = console.error;
    const origWarn = console.warn;

    console.log = (...args) =>
      outputs.push({ type: "log", text: serialize(args) });
    console.error = (...args) =>
      outputs.push({ type: "error", text: serialize(args) });
    console.warn = (...args) =>
      outputs.push({ type: "warn", text: serialize(args) });

    try {
      // eslint-disable-next-line no-new-func
      const fn = new Function(code);
      fn();
    } catch (err) {
      outputs.push({ type: "error", text: err.message });
    } finally {
      console.log = origLog;
      console.error = origErr;
      console.warn = origWarn;
    }

    setConsoleOutput(outputs);
  }

  /* ── Copy to clipboard ─────────────────────────────────────── */
  const handleCopy = useCallback(async () => {
    const code = editorRef.current?.getValue() ?? defaultCode;
    try {
      await navigator.clipboard.writeText(code);
      setCopyLabel("Copied!");
      setTimeout(() => setCopyLabel("Copy"), 2000);
    } catch {
      /* fallback for older browsers */
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
      } catch (e) {
        console.error("Copy failed", e);
      }
      document.body.removeChild(ta);
    }
  }, [defaultCode]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  /* ─────────────────────────────────────────────────────────── */
  /*  RENDER                                                      */
  /* ─────────────────────────────────────────────────────────── */
  return (
    <div className="topic-page">
      {/* ══════════════════════════════════════════════════════════
          LOADING OVERLAY
      ══════════════════════════════════════════════════════════ */}
      {isLoading && (
        <div
          className={`topic-loading-overlay${fadeOut ? " fade-out" : ""}`}
          role="status"
          aria-live="polite"
          aria-label="Loading topic"
        >
          {/* Spinning ring + JS logo */}
          <div className="loading-logo-wrap">
            <div className="loading-spinner-ring" aria-hidden="true" />
            <span className="loading-js-text" aria-hidden="true">
              &#123;JS&#125;
            </span>
          </div>

          {/* Topic slug pill */}
          <div className="loading-tag-name" aria-hidden="true">
            {topic}
          </div>

          {/* Bouncing dots */}
          <div className="loading-dots" aria-hidden="true">
            <div className="loading-dot" />
            <div className="loading-dot" />
            <div className="loading-dot" />
          </div>

          <p className="loading-caption">Loading topic…</p>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          FIXED HEADER
      ══════════════════════════════════════════════════════════ */}
      <header className="topic-page-header" role="banner">
        <div className="topic-header-inner">
          {/* Left — Back button */}
          <button
            className="topic-back-btn"
            onClick={() => navigate(-1)}
            aria-label="Go back to previous page"
            type="button"
          >
            <i className="bi bi-chevron-left" aria-hidden="true" />
            Back
          </button>

          {/* Center — Brand title */}
          <h1 className="topic-header-title animate-fade-in">
            <span className="topic-header-js">JS</span> INTERMEDIATE IN MY STYLE
          </h1>

          {/* Right — Hamburger menu trigger */}
          <button
            className="topic-menu-trigger"
            onClick={() => setNavOpen(true)}
            aria-label="Open topic navigation menu"
            aria-expanded={navOpen}
            aria-controls="topic-nav-drawer"
            title="Browse all topics"
            type="button"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          TOPIC NAVIGATION DRAWER
      ══════════════════════════════════════════════════════════ */}
      <JsIntTopicNavMenu isOpen={navOpen} onClose={() => setNavOpen(false)} />

      {/* ══════════════════════════════════════════════════════════
          INFO BANNER
      ══════════════════════════════════════════════════════════ */}
      <div className="topic-info-banner" role="note">
        <div className="topic-info-inner">
          <i
            className="bi bi-info-circle-fill topic-info-icon"
            aria-hidden="true"
          />
          <span className="topic-info-text">
            The <code>{topic}</code> concept — {description}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MAIN PANELS
      ══════════════════════════════════════════════════════════ */}
      <main className="topic-main" id="main-content">
        <div className="topic-panels-grid">
          {/* ────────────────────────────────────────────────────
              LEFT PANEL — Monaco Editor
          ──────────────────────────────────────────────────── */}
          <section className="editor-panel" aria-label="Code editor">
            {/* Panel header bar */}
            <div className="editor-panel-header">
              <div className="editor-panel-header-left">
                <span className="editor-lang-badge">JS</span>
                <span className="editor-label-text">Editable Code</span>
              </div>
              <div className="editor-dots" aria-hidden="true">
                <div className="editor-dot red" />
                <div className="editor-dot yellow" />
                <div className="editor-dot green" />
              </div>
            </div>

            {/* Monaco Editor */}
            <div className="editor-monaco-wrap">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                defaultValue={defaultCode}
                theme="vs-dark"
                onMount={handleEditorMount}
                options={{
                  minimap: { enabled: !isMobile },
                  fontSize: isMobile ? 12 : 14,
                  fontFamily:
                    '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
                  fontLigatures: true,
                  scrollBeyondLastLine: false,
                  wordWrap: "on",
                  folding: !isMobile,
                  lineNumbers: "on",
                  automaticLayout: true,
                  padding: { top: 12, bottom: 12 },
                  smoothScrolling: true,
                  cursorSmoothCaretAnimation: "on",
                  formatOnPaste: true,
                  autoClosingBrackets: "always",
                  autoClosingQuotes: "always",
                  bracketPairColorization: { enabled: true },
                  renderLineHighlight: "all",
                  lineHeight: 22,
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
              <button
                className="action-btn run"
                onClick={runCode}
                type="button"
                aria-label="Run code and show console output"
                title="Run code (Ctrl+Enter)"
              >
                <i className="bi bi-play-fill" aria-hidden="true" />
                Run
              </button>

              {/* Open full JsIntCompiler */}
              <button
                className="action-btn compiler"
                onClick={() => navigate("/js-int-course/compiler")}
                type="button"
                aria-label="Open full compiler playground"
                title="Open in JsIntCompiler"
              >
                <i className="bi bi-terminal-fill" aria-hidden="true" />
                JsIntCompiler
              </button>

              {/* Copy code */}
              <button
                className="action-btn copy"
                onClick={handleCopy}
                type="button"
                aria-label="Copy code to clipboard"
                title="Copy code"
              >
                <i
                  className={`bi ${copyLabel === "Copied!" ? "bi-check2" : "bi-clipboard"}`}
                  aria-hidden="true"
                />
                {copyLabel}
              </button>
            </div>
          </section>

          {/* ────────────────────────────────────────────────────
              RIGHT PANEL — Console Output
          ──────────────────────────────────────────────────── */}
          <section className="console-panel" aria-label="Console output">
            {/* Panel header */}
            <div className="console-panel-header">
              <h2 className="console-panel-title">
                <i className="bi bi-terminal-fill" aria-hidden="true" />
                Console Output
              </h2>
              <span className="console-live-badge">Live Result</span>
            </div>

            {/* Output area */}
            <div
              className="console-output"
              role="log"
              aria-live="polite"
              aria-label="JavaScript console output"
            >
              {consoleOutput.length === 0 ? (
                /* Empty state */
                <div className="console-empty-state">
                  <i
                    className="bi bi-terminal-dash console-empty-icon"
                    aria-hidden="true"
                  />
                  <p className="console-empty-title">No output yet</p>
                  <p className="console-empty-hint">
                    Output from <code>console.log()</code> appears here when you
                    click <strong>Run</strong>
                  </p>
                </div>
              ) : (
                /* Log entries */
                consoleOutput.map((entry, i) => (
                  <div
                    key={i}
                    className={`console-entry console-entry--${entry.type}`}
                  >
                    {/* Type icon */}
                    <span className="console-entry-icon" aria-hidden="true">
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

                    {/* Type label */}
                    <span className="console-entry-type">
                      {entry.type.toUpperCase()}
                    </span>

                    {/* Output text */}
                    <span className="console-entry-text">{entry.text}</span>
                  </div>
                ))
              )}
            </div>

            {/* Bottom bar — clear + count */}
            <div className="console-actions-bar">
              <button
                className="console-clear-btn"
                onClick={() => setConsoleOutput([])}
                disabled={consoleOutput.length === 0}
                type="button"
                aria-label="Clear console output"
              >
                <i className="bi bi-trash" aria-hidden="true" />
                Clear
              </button>

              {consoleOutput.length > 0 && (
                <span
                  className="console-count-badge"
                  aria-label={`${consoleOutput.length} output lines`}
                >
                  {consoleOutput.length}{" "}
                  {consoleOutput.length === 1 ? "line" : "lines"}
                </span>
              )}

              <span className="console-hint-text">
                <i className="bi bi-info-circle" aria-hidden="true" />
                console.log() output appears here on Run
              </span>
            </div>
          </section>
        </div>
      </main>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <JsIntTopicPageFooter />
    </div>
  );
}
