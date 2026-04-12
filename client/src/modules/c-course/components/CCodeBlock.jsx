import { useEffect, useRef, useState } from 'react';
import './CCodeBlock.css';

export default function CCodeBlock({ filename, code, language = 'c' }) {
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.Prism && codeRef.current) {
      window.Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="c-code-example c-glass-code">
      <div className="c-code-header">
        <div className="c-code-title">
          <i className="fas fa-file-code"></i>
          {filename}
        </div>
        <button className="c-copy-btn" onClick={handleCopy}>
          <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre>
        <code ref={codeRef} className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
