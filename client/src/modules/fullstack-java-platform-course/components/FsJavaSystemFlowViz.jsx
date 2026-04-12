import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NODES = [
  { id: 'client',     label: 'Client',      icon: '💻', color: '#5382a1' },
  { id: 'controller', label: 'Controller',  icon: '🎮', color: '#f89820' },
  { id: 'service',    label: 'Service',     icon: '⚙️', color: '#5382a1' },
  { id: 'repository', label: 'Repository',  icon: '📦', color: '#f89820' },
  { id: 'database',   label: 'Database',    icon: '🗄️', color: '#6db33f' },
  { id: 'response',   label: 'Response',    icon: '✅', color: '#3ddc84' },
]

const LOG_MSGS = [
  'HTTP request received → routing to controller layer',
  'Controller validates input → delegating to service',
  'Service executes business logic → calling repository',
  'Repository builds query → executing on database',
  'Database returns result → mapping to entity',
  'Response serialized to JSON → returned to client',
]

export default function SystemFlowViz({ isRunning, status }) {
  const [activeNode, setActiveNode] = useState(-1)
  const [logs, setLogs] = useState([])

  useEffect(() => {
    if (!isRunning) { setActiveNode(-1); setLogs([]); return }
    setLogs([])
    setActiveNode(0)
    let step = 0
    const iv = setInterval(() => {
      step++
      if (step < NODES.length) {
        setActiveNode(step)
        setLogs(prev => [...prev, { msg: LOG_MSGS[step - 1], time: new Date().toLocaleTimeString() }])
      } else {
        clearInterval(iv)
        setLogs(prev => [...prev, { msg: LOG_MSGS[NODES.length - 1], time: new Date().toLocaleTimeString() }])
      }
    }, 600)
    return () => clearInterval(iv)
  }, [isRunning])

  return (
    <div className="card" style={{ padding: '1.75rem', marginTop: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: isRunning ? 'var(--green)' : 'var(--muted)', boxShadow: isRunning ? '0 0 8px var(--green)' : 'none', transition: 'all 0.3s' }} />
        <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>System Flow Visualization</span>
        <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.72rem', color: 'var(--muted)', marginLeft: 'auto' }}>
          {isRunning ? 'EXECUTING...' : 'IDLE'}
        </span>
      </div>

      {/* Flow nodes */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexWrap: 'wrap', marginBottom: '1.5rem', justifyContent: 'space-between' }}>
        {NODES.map((node, i) => (
          <div key={node.id} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flex: 1, minWidth: 80 }}>
            <motion.div
              animate={{
                background: activeNode === i ? `${node.color}20` : activeNode > i ? `${node.color}0d` : 'rgba(22,27,34,0.8)',
                borderColor: activeNode >= i ? `${node.color}60` : 'rgba(48,54,61,0.6)',
                boxShadow: activeNode === i ? `0 0 20px ${node.color}44` : 'none',
              }}
              transition={{ duration: 0.3 }}
              style={{ border: '1px solid rgba(48,54,61,0.6)', borderRadius: 10, padding: '0.75rem 0.5rem', textAlign: 'center', flex: 1 }}
            >
              <div style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{node.icon}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.62rem', color: activeNode >= i ? node.color : 'var(--muted)', letterSpacing: 0.5 }}>{node.label}</div>
            </motion.div>
            {i < NODES.length - 1 && (
              <div style={{ position: 'relative', width: 16, height: 2, flexShrink: 0 }}>
                <motion.div
                  animate={{ opacity: activeNode > i ? 0 : 1 }}
                  style={{ 
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(48,54,61,0.6)',
                    borderRadius: 1
                  }}
                />
                <motion.div
                  animate={{ opacity: activeNode > i ? 1 : 0 }}
                  style={{ 
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(90deg, ${node.color}, ${NODES[i+1].color})`,
                    borderRadius: 1
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Log output */}
      <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '1rem', minHeight: 90, maxHeight: 160, overflowY: 'auto' }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.68rem', color: 'var(--muted)', marginBottom: '0.5rem', letterSpacing: 2 }}>EXECUTION LOG</div>
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', gap: '0.75rem', fontFamily: 'JetBrains Mono', fontSize: '0.78rem', marginBottom: '0.3rem' }}>
              <span style={{ color: 'var(--muted)', flexShrink: 0 }}>{log.time}</span>
              <span style={{ color: 'var(--green)' }}>›</span>
              <span style={{ color: '#c9d1d9' }}>{log.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {!isRunning && logs.length === 0 && (
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: 'var(--muted)' }}>// Send a request to see the flow...</div>
        )}
        {status && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ fontFamily: 'JetBrains Mono', fontSize: '0.78rem', color: status >= 200 && status < 300 ? 'var(--green)' : 'var(--orange)', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
            {status >= 200 && status < 300 ? '✓' : '✗'} Request complete — HTTP {status}
          </motion.div>
        )}
      </div>
    </div>
  )
}
