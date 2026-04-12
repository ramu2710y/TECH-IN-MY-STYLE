import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
const GiRobberMask = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', display: 'inline-block', ...style }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm1 14h-2v-1h2v1zm1.07-7.75l-.9.92C12.45 9.9 12 10.5 12 12h-2c0-1.5.45-2.1 1.17-2.83l.9-.92c.36-.36.59-.86.59-1.41C12.66 5.8 11.86 5 10.92 5c-.93 0-1.74.8-1.74 1.74H7.44C7.44 4.68 9.03 3 10.92 3c1.89 0 3.48 1.68 3.48 3.74 0 .82-.34 1.57-.83 2.09l-.5.42z"/>
  </svg>
);

export default function DsaInterviewAccordion({ questions }) {
  const [open, setOpen] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {questions.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setOpen(isOpen ? null : i)}
              style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textAlign: 'left' }}>
                <div style={{ width: 20, height: 20, background: isOpen ? '#e8001c' : 'rgba(232,0,28,0.15)', border: '1px solid rgba(232,0,28,0.3)', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                  <GiRobberMask style={{ color: isOpen ? '#fff' : '#e8001c', fontSize: '0.55rem' }} />
                </div>
                <span style={{ color: isOpen ? '#ede5d8' : '#a09080', fontSize: '0.875rem', lineHeight: 1.5 }}>{item.q}</span>
              </div>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
                <IoChevronDown style={{ color: isOpen ? '#e8001c' : '#6a6070', fontSize: '0.85rem' }} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
                  <div style={{ padding: '0 1.25rem 1rem 3.25rem', borderTop: '1px solid rgba(232,0,28,0.08)' }}>
                    <p style={{ color: '#a09080', fontSize: '0.875rem', lineHeight: 1.8, paddingTop: '0.75rem' }}>{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
