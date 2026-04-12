import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const P5_FONT = { fontFamily: "'Oswald',sans-serif", fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }

export default function OutputConsole({ output, isRunning, executionTime, onClear }) {
  const bottomRef = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  const handleCopy = () => {
    navigator.clipboard.writeText(output || '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = (output || '').split('\n')
  const hasError = output?.toLowerCase().includes('error') || output?.toLowerCase().includes('traceback')
  const isSuccess = output && !hasError

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d' }}>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 12px', flexShrink: 0,
        borderBottom: '2px solid #e61e32', background: '#111',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: -10, width: 40, background: '#e61e32', transform: 'skewX(-15deg)', opacity: 0.08, pointerEvents: 'none' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 3, height: 18, background: '#e61e32', transform: 'skewX(-10deg)' }} />
          <i className="fa-solid fa-terminal" style={{ fontSize: '0.85rem', color: '#e61e32' }} />
          <span style={{ ...P5_FONT, fontSize: '0.85rem', color: '#f0f0f0' }}>OUTPUT</span>
          {isRunning && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, ...P5_FONT, fontSize: '0.6rem', color: '#f5c400' }}>
              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '0.7rem' }} /> EXECUTING
            </span>
          )}
          {executionTime && !isRunning && (
            <span style={{ fontFamily: "'Oswald',sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', color: '#333' }}>
              {executionTime}ms
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <button onClick={handleCopy} title="Copy"
            style={{ ...P5_FONT, fontSize: '0.65rem', color: copied ? '#f5c400' : '#333', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e61e32'}
            onMouseLeave={e => e.currentTarget.style.color = copied ? '#f5c400' : '#333'}>
            <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
          </button>
          <button onClick={onClear} title="Clear"
            style={{ ...P5_FONT, fontSize: '0.65rem', color: '#333', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px' }}
            onMouseEnter={e => e.currentTarget.style.color = '#e61e32'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            <i className="fa-solid fa-trash" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p5-slash-bg" style={{ flex: 1, overflowY: 'auto', padding: 12, fontFamily: 'monospace', fontSize: '0.75rem', lineHeight: 1.8 }}>

        {/* Empty state */}
        {!output && !isRunning && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: 16 }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 60, height: 60,
                background: '#1a1a1a',
                border: '2px solid #222',
                clipPath: 'polygon(10px 0%,100% 0%,100% calc(100% - 10px),calc(100% - 10px) 100%,0% 100%,0% 10px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className="fa-solid fa-mask p5-flash" style={{ fontSize: '1.5rem', color: '#e61e32', opacity: 0.4 }} />
              </div>
            </div>
            <div style={{ ...P5_FONT, fontSize: '0.7rem', color: '#333' }}>
              RUN YOUR CODE TO SEE OUTPUT
            </div>
            <div className="p5-badge">PRESS RUN OR CTRL+ENTER</div>
          </div>
        )}

        {/* Running */}
        {isRunning && !output && (
          <div className="p5-slide-in" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, ...P5_FONT, fontSize: '0.75rem', color: '#f5c400' }}>
              <i className="fa-solid fa-spinner fa-spin" style={{ color: '#e61e32' }} />
              SPINNING UP EXECUTION ENVIRONMENT...
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, ...P5_FONT, fontSize: '0.6rem', color: '#333' }}>
              <i className="fa-brands fa-docker" style={{ color: '#e61e32' }} />
              ISOLATED CONTAINER · SECURE EXECUTION
            </div>
          </div>
        )}

        {/* Output */}
        <AnimatePresence>
          {output && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {lines.map((line, i) => {
                const isErr  = line.toLowerCase().includes('error') || line.toLowerCase().includes('traceback') || line.startsWith('  File ')
                const isWarn = line.toLowerCase().includes('warning')
                const isOk   = line.toLowerCase().includes('success') || line.toLowerCase().includes('accuracy')
                return (
                  <div key={i} style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: '0.78rem',
                    lineHeight: 1.7,
                    color: isErr ? '#e61e32' : isWarn ? '#f5c400' : isOk ? '#66cc66' : '#f0f0f0',
                    borderLeft: isErr ? '2px solid #e61e32' : 'none',
                    paddingLeft: isErr ? 8 : 0,
                  }}>
                    {line || '\u00A0'}
                  </div>
                )
              })}
              <div ref={bottomRef} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Status bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16,
        padding: '6px 12px', flexShrink: 0,
        borderTop: '1px solid #1a1a1a', background: '#111',
        ...P5_FONT, fontSize: '0.6rem', color: '#333',
      }}>
        <span style={{ color: hasError ? '#e61e32' : isSuccess ? '#66cc66' : '#333' }}>
          <i className="fa-solid fa-circle" style={{ fontSize: '0.45rem', marginRight: 4 }} />
          {hasError ? 'ERROR' : isSuccess ? 'SUCCESS' : 'READY'}
        </span>
        <span><i className="fa-brands fa-docker" style={{ color: '#e61e32', marginRight: 4 }} />ISOLATED</span>
        <span>PY 3.10</span>
      </div>
    </div>
  )
}
