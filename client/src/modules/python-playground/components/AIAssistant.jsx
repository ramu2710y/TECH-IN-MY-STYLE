import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

const BACKEND = import.meta.env.VITE_PYTHON_STUDIO_URL || 'http://localhost:8000'
const P5_FONT = { fontFamily: "'Oswald',sans-serif", fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }

export default function AIAssistant({ code }) {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState('explain')
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const modes = [
    { id: 'explain',  label: 'EXPLAIN',  icon: 'fa-lightbulb',          color: '#f5c400' },
    { id: 'debug',    label: 'DEBUG',    icon: 'fa-bug',                 color: '#e61e32' },
    { id: 'generate', label: 'GENERATE', icon: 'fa-wand-magic-sparkles', color: '#f0f0f0' },
  ]

  const handleAsk = async () => {
    setLoading(true)
    setResponse('')
    try {
      const res = await axios.post(`${BACKEND}/ai-assist`, {
        mode, code: code || '',
        prompt: prompt || (mode === 'explain' ? 'Explain this code' : 'Find bugs'),
      })
      setResponse(res.data.response)
    } catch {
      setResponse('AI assistant unavailable. Make sure the backend is running.')
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating P5 button */}
      <motion.button
        whileHover={{ scale: 1.08, rotate: 5 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(true)}
        className="p5-pulse"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 50,
          width: 52, height: 52,
          background: '#e61e32',
          border: '2px solid #f5c400',
          clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}
        title="AI Assistant"
      >
        <i className="fa-solid fa-robot" style={{ color: '#fff', fontSize: '1.1rem' }} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 30, skewX: -5 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed', bottom: 88, right: 24, zIndex: 50,
              width: 380,
              background: '#111',
              border: '1px solid #222',
              borderLeft: '3px solid #e61e32',
              boxShadow: '4px 4px 0 #e61e32',
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
            }}
          >
            {/* Top red bar */}
            <div style={{ height: 3, background: 'linear-gradient(90deg,#e61e32,#f5c400,#e61e32)' }} />

            {/* Header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid #1a1a1a', background: '#0d0d0d',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: -8, width: 30, background: '#e61e32', transform: 'skewX(-15deg)', opacity: 0.08 }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 20, height: 20, background: '#e61e32', clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="fa-solid fa-robot" style={{ color: '#fff', fontSize: '0.5rem' }} />
                </div>
                <span style={{ ...P5_FONT, fontSize: '0.9rem', color: '#f0f0f0' }}>AI ASSISTANT</span>
                <span className="p5-badge">BETA</span>
              </div>
              <button onClick={() => setOpen(false)}
                style={{ ...P5_FONT, fontSize: '0.8rem', color: '#333', background: 'none', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e61e32'}
                onMouseLeave={e => e.currentTarget.style.color = '#333'}>
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            {/* Mode tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #1a1a1a' }}>
              {modes.map(m => (
                <button key={m.id} onClick={() => setMode(m.id)}
                  style={{
                    flex: 1, ...P5_FONT, fontSize: '0.65rem',
                    padding: '10px 4px',
                    color: mode === m.id ? m.color : '#333',
                    background: mode === m.id ? 'rgba(230,30,50,0.08)' : 'transparent',
                    borderBottom: mode === m.id ? `2px solid ${m.color}` : '2px solid transparent',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                    transition: 'all 0.15s',
                  }}>
                  <i className={`fa-solid ${m.icon}`} style={{ fontSize: '0.75rem' }} />
                  {m.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding: 12 }}>
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder={
                  mode === 'explain'  ? 'Ask about the code...' :
                  mode === 'debug'    ? 'Describe the issue...' :
                                        'Describe what to generate...'
                }
                rows={3}
                className="p5-input"
                style={{ resize: 'none', fontSize: '0.78rem' }}
              />
              <button onClick={handleAsk} disabled={loading} className="p5-btn"
                style={{ width: '100%', marginTop: 8, justifyContent: 'center' }}>
                {loading
                  ? <><i className="fa-solid fa-spinner fa-spin" /> THINKING...</>
                  : <><i className="fa-solid fa-paper-plane" /> ASK AI</>
                }
              </button>
            </div>

            {/* Response */}
            <AnimatePresence>
              {response && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden', padding: '0 12px 12px' }}
                >
                  <div style={{
                    background: '#0a0a0a', borderLeft: '3px solid #e61e32',
                    padding: '10px 12px', fontSize: '0.75rem', lineHeight: 1.7,
                    color: '#f0f0f0', fontFamily: "'JetBrains Mono',monospace",
                    maxHeight: 180, overflowY: 'auto', whiteSpace: 'pre-wrap',
                  }}>
                    {response}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom yellow line */}
            <div style={{ height: 2, background: 'linear-gradient(90deg,#e61e32,#f5c400,transparent)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
