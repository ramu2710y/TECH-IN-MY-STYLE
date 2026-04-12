import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

// Syntax token colours — Dracula-inspired, works on dark bg
const SQL_TOKENS = [
  { re: /\b(SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|AS|DISTINCT|UNION|ALL|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DROP|ALTER|ADD|INDEX|PRIMARY|KEY|FOREIGN|REFERENCES|NOT|NULL|DEFAULT|UNIQUE|CHECK|AND|OR|IN|LIKE|BETWEEN|IS|EXISTS|CASE|WHEN|THEN|ELSE|END|WITH|RECURSIVE|PARTITION|OVER|ROWS|UNBOUNDED|PRECEDING|FOLLOWING|CURRENT ROW|BEGIN|COMMIT|ROLLBACK|SAVEPOINT|TRANSACTION|GRANT|REVOKE|TRUNCATE|ANALYZE|EXPLAIN)\b/gi, color: '#ff79c6' },
  { re: /\b(COUNT|SUM|AVG|MAX|MIN|COALESCE|NULLIF|CAST|CONVERT|ROUND|FLOOR|CEIL|ABS|LENGTH|UPPER|LOWER|TRIM|SUBSTR|REPLACE|CONCAT|NOW|DATE|YEAR|MONTH|DAY|RANK|DENSE_RANK|ROW_NUMBER|LAG|LEAD|FIRST_VALUE|LAST_VALUE|NTILE)\b/gi, color: '#50fa7b' },
  { re: /('(?:[^'\\]|\\.)*')/g, color: '#f1fa8c' },
  { re: /\b(\d+(?:\.\d+)?)\b/g, color: '#bd93f9' },
  { re: /(--[^\n]*)/g, color: '#6272a4' },
  { re: /\b([a-z_][a-z0-9_]*)\s*(?=\()/gi, color: '#8be9fd' },
];

const MONGO_TOKENS = [
  { re: /\b(db|find|findOne|insertOne|insertMany|updateOne|updateMany|deleteOne|deleteMany|aggregate|countDocuments|distinct|createIndex|dropIndex|getIndexes|explain|watch)\b/g, color: '#50fa7b' },
  { re: /(\$match|\$group|\$sort|\$project|\$lookup|\$unwind|\$limit|\$skip|\$addFields|\$count|\$set|\$inc|\$push|\$pull|\$unset|\$mul|\$addToSet|\$gt|\$gte|\$lt|\$lte|\$ne|\$in|\$nin|\$exists|\$regex|\$and|\$or|\$nor|\$not|\$sum|\$avg|\$max|\$min|\$first|\$last|\$push|\$setWindowFields|\$rank)/g, color: '#ff79c6' },
  { re: /("(?:[^"\\]|\\.)*")/g, color: '#f1fa8c' },
  { re: /('(?:[^'\\]|\\.)*')/g, color: '#f1fa8c' },
  { re: /\b(\d+(?:\.\d+)?)\b/g, color: '#bd93f9' },
  { re: /(\/\/[^\n]*)/g, color: '#6272a4' },
  { re: /\b(true|false|null|undefined)\b/g, color: '#bd93f9' },
  { re: /\b(const|let|var|function|return|try|catch|new|this|class)\b/g, color: '#ff79c6' },
];

function tokenize(code, tokens) {
  // Build a list of [start, end, color] spans
  const spans = [];
  for (const { re, color } of tokens) {
    const regex = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g');
    let m;
    while ((m = regex.exec(code)) !== null) {
      spans.push({ start: m.index, end: m.index + m[0].length, color, text: m[0] });
    }
  }
  // Sort by start, remove overlaps (first match wins)
  spans.sort((a, b) => a.start - b.start);
  const merged = [];
  let cursor = 0;
  for (const span of spans) {
    if (span.start < cursor) continue; // overlapping — skip
    if (span.start > cursor) merged.push({ start: cursor, end: span.start, color: null });
    merged.push(span);
    cursor = span.end;
  }
  if (cursor < code.length) merged.push({ start: cursor, end: code.length, color: null });
  return merged;
}

function HighlightedCode({ code, lang }) {
  const tokens = lang === 'sql' ? SQL_TOKENS : MONGO_TOKENS;
  const spans = tokenize(code, tokens);
  return (
    <code>
      {spans.map((s, i) => (
        s.color
          ? <span key={i} style={{ color: s.color }}>{code.slice(s.start, s.end)}</span>
          : <span key={i} style={{ color: '#cdd6f4' }}>{code.slice(s.start, s.end)}</span>
      ))}
    </code>
  );
}

// Traffic light dot
function Dot({ color, glow }) {
  return (
    <div style={{
      width: 12, height: 12, borderRadius: '50%',
      background: color,
      boxShadow: glow ? `0 0 6px ${color}` : 'none',
      flexShrink: 0,
    }} />
  );
}

export default function DbMacCodeBlock({ code, lang = 'sql', title, showLineNumbers = true }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');
  const langLabel = lang === 'sql' ? 'SQL' : lang === 'mongo' ? 'MongoDB' : lang.toUpperCase();
  const langColor = lang === 'sql' ? '#00d4ff' : lang === 'mongo' ? '#76b900' : '#888';

  return (
    <div style={{
      borderRadius: 12,
      overflow: 'hidden',
      background: '#1e1e2e',
      boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
      fontFamily: "'Fira Code', 'Share Tech Mono', monospace",
    }}>
      {/* macOS titlebar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        padding: '10px 14px',
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(8px)',
      }}>
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <Dot color="#ff5f57" glow />
          <Dot color="#febc2e" />
          <Dot color="#28c840" glow />
        </div>

        {/* Title */}
        <div style={{ flex: 1, textAlign: 'center', fontSize: '0.72rem', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
          {title || langLabel}
        </div>

        {/* Lang badge + copy */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontSize: '0.62rem', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: langColor, background: `${langColor}18`,
            border: `1px solid ${langColor}30`,
            padding: '1px 7px', borderRadius: 4,
          }}>
            {langLabel}
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={handleCopy}
            style={{
              background: copied ? 'rgba(40,200,64,0.15)' : 'rgba(255,255,255,0.06)',
              border: `1px solid ${copied ? 'rgba(40,200,64,0.4)' : 'rgba(255,255,255,0.12)'}`,
              borderRadius: 6, color: copied ? '#28c840' : 'rgba(255,255,255,0.5)',
              fontSize: '0.65rem', padding: '3px 9px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              transition: 'all 0.15s',
            }}>
            <FontAwesomeIcon icon={copied ? faCheck : faCopy} style={{ fontSize: '0.6rem' }} />
            {copied ? 'Copied' : 'Copy'}
          </motion.button>
        </div>
      </div>

      {/* Code area */}
      <div style={{ overflowX: 'auto', overflowY: 'hidden' }}>
        <pre style={{
          margin: 0, padding: '1rem 0',
          fontSize: '0.8rem', lineHeight: 1.7,
          background: 'transparent',
          minWidth: '100%',
          textAlign: 'left',
        }}>
          {showLineNumbers ? (
            <table style={{ borderCollapse: 'collapse', minWidth: '100%', tableLayout: 'auto' }}>
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i} style={{ transition: 'background 0.1s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    {/* Line number */}
                    <td style={{
                      padding: '0 16px 0 16px', textAlign: 'right', userSelect: 'none',
                      color: 'rgba(255,255,255,0.18)', fontSize: '0.72rem',
                      borderRight: '1px solid rgba(255,255,255,0.06)',
                      width: '40px', verticalAlign: 'top', whiteSpace: 'nowrap',
                    }}>
                      {i + 1}
                    </td>
                    {/* Code line */}
                    <td style={{ padding: '0 1.25rem', verticalAlign: 'top', whiteSpace: 'pre', textAlign: 'left' }}>
                      <HighlightedCode code={line} lang={lang} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{ padding: '0 1.25rem', textAlign: 'left' }}>
              <HighlightedCode code={code} lang={lang} />
            </div>
          )}
        </pre>
      </div>
    </div>
  );
}

