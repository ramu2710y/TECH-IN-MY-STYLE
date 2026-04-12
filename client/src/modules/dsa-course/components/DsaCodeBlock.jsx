import { useState } from 'react';
import { IoCopy, IoCheckmark } from 'react-icons/io5';

const TABS = ['python', 'java', 'c'];
const TAB_LABELS = { python: 'PYTHON', java: 'JAVA', c: 'C' };
const TAB_COLORS = { python: '#3a8aff', java: '#ff6b2b', c: '#c9a96e' };

export default function DsaCodeBlock({ codes }) {
  const [active, setActive] = useState('python');
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(codes[active] || '');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: '#060408', border: '1px solid rgba(232,0,28,0.12)', borderLeft: '3px solid #e8001c', borderRadius: '0 8px 8px 0', overflow: 'hidden' }}>
      {/* Tab bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem', background: 'rgba(232,0,28,0.04)', borderBottom: '1px solid rgba(232,0,28,0.08)' }}>
        <div style={{ display: 'flex' }}>
          {TABS.filter(t => codes[t]).map(tab => (
            <button key={tab} onClick={() => setActive(tab)}
              style={{
                background: 'none', border: 'none', padding: '0.7rem 1rem', cursor: 'pointer',
                color: active === tab ? TAB_COLORS[tab] : '#6a6070',
                fontSize: '0.72rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.12em',
                borderBottom: active === tab ? `2px solid ${TAB_COLORS[tab]}` : '2px solid transparent',
                transition: 'all 0.2s',
              }}>
              {TAB_LABELS[tab]}
            </button>
          ))}
        </div>
        <button onClick={copy}
          style={{ background: copied ? 'rgba(58,255,138,0.08)' : 'rgba(232,0,28,0.06)', border: `1px solid ${copied ? 'rgba(58,255,138,0.3)' : 'rgba(232,0,28,0.2)'}`, borderRadius: 3, padding: '0.25rem 0.7rem', color: copied ? '#3aff8a' : '#e8001c', cursor: 'pointer', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', transition: 'all 0.2s' }}>
          {copied ? <IoCheckmark style={{ fontSize: '0.85rem' }} /> : <IoCopy style={{ fontSize: '0.85rem' }} />}
          {copied ? 'COPIED' : 'COPY'}
        </button>
      </div>

      {/* Code */}
      <pre style={{ margin: 0, padding: '1.25rem 1.5rem', overflowX: 'auto', fontSize: '0.82rem', lineHeight: 1.85, color: '#c8c0b0', fontFamily: "'Fira Code', 'Courier New', monospace" }}>
        <code>{codes[active]}</code>
      </pre>
    </div>
  );
}
