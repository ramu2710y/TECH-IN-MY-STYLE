import { useState } from 'react';
import { motion } from 'framer-motion';

export default function NlpMCQSection({ mcqs }) {
  const [selected, setSelected] = useState({});

  const choose = (qi, oi) => {
    if (selected[qi] !== undefined) return;
    setSelected(prev => ({ ...prev, [qi]: oi }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {mcqs.map((mcq, qi) => (
        <div key={qi} style={{
          borderRadius: 14, padding: '24px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#f0ece4', marginBottom: 16, lineHeight: 1.6 }}>
            <span style={{
              fontFamily: 'Playfair Display, serif',
              color: '#c9a84c', marginRight: 10, fontSize: 16,
            }}>Q{qi + 1}.</span>
            {mcq.q}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 10 }}>
            {mcq.options.map((opt, oi) => {
              const picked = selected[qi];
              const isCorrect = oi === mcq.answer;
              const isPicked = picked === oi;
              let bg = 'rgba(255,255,255,0.03)';
              let border = 'rgba(255,255,255,0.08)';
              let color = '#8a9ab5';
              if (picked !== undefined) {
                if (isCorrect) { bg = 'rgba(201,168,76,0.1)'; border = 'rgba(201,168,76,0.5)'; color = '#c9a84c'; }
                else if (isPicked) { bg = 'rgba(239,68,68,0.08)'; border = 'rgba(239,68,68,0.4)'; color = '#f87171'; }
              }
              return (
                <motion.button
                  key={oi}
                  whileHover={picked === undefined ? { scale: 1.02 } : {}}
                  whileTap={picked === undefined ? { scale: 0.98 } : {}}
                  onClick={() => choose(qi, oi)}
                  style={{
                    textAlign: 'left', padding: '12px 16px', borderRadius: 10,
                    background: bg, border: `1px solid ${border}`, color,
                    fontSize: 13, fontWeight: 500, cursor: picked === undefined ? 'pointer' : 'default',
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ color: '#c9a84c', marginRight: 8, fontWeight: 700 }}>
                    {String.fromCharCode(65 + oi)}.
                  </span>
                  {opt}
                </motion.button>
              );
            })}
          </div>

          {selected[qi] !== undefined && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                marginTop: 12, fontSize: 12, fontWeight: 600,
                color: selected[qi] === mcq.answer ? '#c9a84c' : '#f87171',
                letterSpacing: '0.03em',
              }}
            >
              {selected[qi] === mcq.answer
                ? '✦ Correct — well done'
                : `✦ Incorrect — correct answer: ${mcq.options[mcq.answer]}`}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
}
