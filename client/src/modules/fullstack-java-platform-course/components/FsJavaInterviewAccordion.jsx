import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function InterviewAccordion({ questions }) {
  const [open, setOpen] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {questions.map((item, i) => (
        <div
          key={i}
          className="hud-panel"
          style={{ overflow: 'hidden', cursor: 'pointer', borderColor: open === i ? 'rgba(248,152,32,0.3)' : undefined }}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div style={{ padding: '1rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{
                fontFamily: 'Orbitron', fontSize: '0.58rem', color: '#f89820',
                background: 'rgba(248,152,32,0.08)', border: '1px solid rgba(248,152,32,0.22)',
                borderRadius: 4, padding: '0.18rem 0.45rem', flexShrink: 0, marginTop: 2,
              }}>Q{i + 1}</span>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.8rem', color: '#d0dce8', lineHeight: 1.6 }}>{item.q}</span>
            </div>
            <motion.div
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: open === i ? '#f89820' : '#2a3a4a', fontSize: '1.2rem', flexShrink: 0, lineHeight: 1 }}
            >+</motion.div>
          </div>

          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ padding: '0 1.25rem 1.1rem', borderTop: '1px solid rgba(83,130,161,0.15)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{
                      fontFamily: 'Orbitron', fontSize: '0.58rem', color: '#3ddc84',
                      background: 'rgba(61,220,132,0.08)', border: '1px solid rgba(61,220,132,0.22)',
                      borderRadius: 4, padding: '0.18rem 0.45rem', flexShrink: 0, marginTop: 2,
                    }}>A</span>
                    <p style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: '#8aa8be', lineHeight: 1.8 }}>{item.a}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
