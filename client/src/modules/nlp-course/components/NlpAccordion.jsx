import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NlpAccordion({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderRadius: 12,
            overflow: 'hidden',
            border: open === i ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.06)',
            background: open === i ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
            transition: 'border-color 0.25s, background 0.25s',
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px', textAlign: 'left',
              background: 'transparent', border: 'none', cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 600, color: '#f0ece4', lineHeight: 1.5 }}>
              <span style={{ color: '#c9a84c', marginRight: 10, fontFamily: 'Playfair Display, serif' }}>
                {String(i + 1).padStart(2, '0')}.
              </span>
              {item.q}
            </span>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: '#c9a84c', fontSize: 18, marginLeft: 16, flexShrink: 0, lineHeight: 1 }}
            >+</motion.span>
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div style={{
                  padding: '0 20px 18px 20px',
                  borderTop: '1px solid rgba(201,168,76,0.1)',
                }}>
                  <p style={{ fontSize: 13, color: '#8a9ab5', lineHeight: 1.75, paddingTop: 14 }}>
                    {item.a}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
