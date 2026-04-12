import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NlpCodeBlock({ code, label }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      borderRadius: 14,
      overflow: 'hidden',
      border: '1px solid rgba(201,168,76,0.15)',
      background: '#060810',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px',
        background: 'rgba(201,168,76,0.05)',
        borderBottom: '1px solid rgba(201,168,76,0.1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#ff5f57','#febc2e','#28c840'].map(c => (
              <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
            ))}
          </div>
          <span style={{ fontSize: 12, color: '#8a9ab5', marginLeft: 4, fontFamily: 'monospace' }}>
            {label || 'python'}
          </span>
        </div>
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={copy}
          style={{
            fontSize: 11, padding: '4px 12px', borderRadius: 5, fontWeight: 600,
            background: copied ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.05)',
            color: copied ? '#c9a84c' : '#8a9ab5',
            border: `1px solid ${copied ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.08)'}`,
            cursor: 'pointer', letterSpacing: '0.04em',
          }}
        >
          {copied ? '✓ Copied' : 'Copy'}
        </motion.button>
      </div>

      <pre style={{
        margin: 0, padding: '20px 20px',
        fontSize: 13, lineHeight: 1.75,
        color: '#d4c9a8',
        overflowX: 'auto',
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
