import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const langMeta = {
  javascript: { label: "JavaScript", icon: "fab fa-js",         color: "#c4a064" },
  js:         { label: "JavaScript", icon: "fab fa-js",         color: "#c4a064" },
  python:     { label: "Python",     icon: "fab fa-python",     color: "#9ab0c8" },
  bash:       { label: "Shell",      icon: "fas fa-terminal",   color: "#7aad8a" },
  json:       { label: "JSON",       icon: "fas fa-code",       color: "#c8ad7a" },
};

function highlight(code) {
  return code
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="code-string">$1$2$1</span>')
    .replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/|#[^\n]*)/g, '<span class="code-comment">$1</span>')
    .replace(/\b(const|let|var|function|async|await|return|import|export|from|default|if|else|for|while|class|new|this|typeof|instanceof|true|false|null|undefined|try|catch|throw|of|in|def|print|with|as|pass|lambda|yield|and|or|not|is)\b/g, '<span class="code-keyword">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span class="code-number">$1</span>')
    .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g, '<span class="code-function">$1</span>');
}

export default function CodeBlock({ code, language = "javascript", title }) {
  const [copied, setCopied] = useState(false);
  const meta = langMeta[language] || langMeta.javascript;

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: "#060606", border: "1px solid rgba(196,160,100,0.12)" }}>
      <div className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: "1px solid rgba(196,160,100,0.08)", background: "rgba(196,160,100,0.03)" }}>
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            {[0.2, 0.15, 0.1].map((o, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: `rgba(196,160,100,${o})` }} />
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase" style={{ color: meta.color, opacity: 0.7 }}>
            <i className={meta.icon} />
            <span>{title || meta.label}</span>
          </div>
        </div>
        <button onClick={copy}
          className="flex items-center gap-2 text-xs tracking-wider uppercase transition-colors duration-200"
          style={{ color: "rgba(196,160,100,0.4)" }}
          onMouseEnter={e => e.currentTarget.style.color = "#c4a064"}
          onMouseLeave={e => e.currentTarget.style.color = "rgba(196,160,100,0.4)"}
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-rr-gold">
                <i className="fas fa-check" /> Copied
              </motion.span>
            ) : (
              <motion.span key="cp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex items-center gap-1.5">
                <i className="fas fa-copy" /> Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-6 text-sm font-mono leading-relaxed" style={{ color: "#8a9080" }}>
          <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
      </div>
    </div>
  );
}
