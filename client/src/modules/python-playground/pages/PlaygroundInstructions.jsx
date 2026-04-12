import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const P5_TITLE = { fontFamily: "'Oswald',Impact,sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }
const P5_LABEL = { fontFamily: "'Oswald',sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }
const P5_BODY  = { fontFamily: "'Barlow',sans-serif", fontWeight: 500 }

const sections = [
  { id: 'supported', icon: 'fa-circle-check', color: '#66cc66', title: 'SUPPORTED FEATURES',
    items: [
      { icon: 'fa-python', brand: true, label: 'Full Python 3.10 execution' },
      { icon: 'fa-file', label: 'File handling (open, read, write)' },
      { icon: 'fa-terminal', label: 'System modules: os, sys, shutil, socket' },
      { icon: 'fa-gears', label: 'subprocess — run shell commands' },
      { icon: 'fa-brain', label: 'AI/ML: numpy, pandas, scikit-learn' },
      { icon: 'fa-code', label: 'eval() and exec() — dynamic code' },
      { icon: 'fa-layer-group', label: 'math, random, json, re, datetime' },
      { icon: 'fa-shield-halved', label: 'All safely isolated in Docker' },
    ]
  },
  { id: 'limits', icon: 'fa-gauge-high', color: '#f5c400', title: 'RESOURCE LIMITS',
    items: [
      { icon: 'fa-clock', label: 'Max execution time: 5–10 minutes' },
      { icon: 'fa-microchip', label: 'CPU: Limited per container' },
      { icon: 'fa-memory', label: 'RAM: 256MB per execution' },
      { icon: 'fa-network-wired', label: 'Network: Disabled by default' },
      { icon: 'fa-hard-drive', label: 'Disk: Temp files only (cleaned after run)' },
    ]
  },
  { id: 'not-allowed', icon: 'fa-ban', color: '#e61e32', title: 'NOT ALLOWED',
    items: [
      { icon: 'fa-infinity', label: 'Long-running infinite loops (timeout enforced)' },
      { icon: 'fa-database', label: 'Persistent storage outside container' },
      { icon: 'fa-globe', label: 'External network requests (disabled)' },
      { icon: 'fa-user-shield', label: 'Privilege escalation attempts' },
      { icon: 'fa-server', label: 'Starting persistent servers' },
    ]
  },
  { id: 'why-safe', icon: 'fa-shield-halved', color: '#f0f0f0', title: "WHY IT'S SAFE",
    items: [
      { icon: 'fa-docker', brand: true, label: 'Every run spins up a fresh Docker container' },
      { icon: 'fa-trash', label: 'Container destroyed immediately after execution' },
      { icon: 'fa-user-lock', label: 'Non-root user inside container' },
      { icon: 'fa-box', label: 'Filesystem isolation — no host access' },
      { icon: 'fa-stopwatch', label: 'Hard timeout kills runaway processes' },
    ]
  }
]

const codeExamples = [
  { title: 'FILE HANDLING', icon: 'fa-file-code', color: '#e61e32',
    code: `import os, tempfile\n\nwith tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as f:\n    f.write("Hello from Docker!\\n")\n    path = f.name\n\nwith open(path, 'r') as f:\n    print(f.read())\n\nos.unlink(path)\nprint("File cleaned up.")` },
  { title: 'SUBPROCESS', icon: 'fa-terminal', color: '#f5c400',
    code: `import subprocess, sys\n\nresult = subprocess.run(\n    [sys.executable, '-c', 'print("subprocess works!")'],\n    capture_output=True, text=True, timeout=10\n)\nprint(result.stdout)` },
  { title: 'AI / ML', icon: 'fa-brain', color: '#f0f0f0',
    code: `import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\nX = np.array([[1],[2],[3],[4],[5]])\ny = np.array([2, 4, 6, 8, 10])\n\nmodel = LinearRegression().fit(X, y)\nprint(f"Prediction for 6: {model.predict([[6]])[0]}")` },
]

const libraries = [
  { name: 'NumPy',        icon: 'fa-chart-line',           color: '#e61e32', desc: 'Numerical computing' },
  { name: 'Pandas',       icon: 'fa-table',                color: '#f5c400', desc: 'Data analysis' },
  { name: 'scikit-learn', icon: 'fa-brain',                color: '#f0f0f0', desc: 'Machine learning' },
  { name: 'math',         icon: 'fa-square-root-variable', color: '#e61e32', desc: 'Math functions' },
  { name: 'random',       icon: 'fa-dice',                 color: '#f5c400', desc: 'Random generation' },
  { name: 'os / sys',     icon: 'fa-terminal',             color: '#f0f0f0', desc: 'System access' },
  { name: 'subprocess',   icon: 'fa-gears',                color: '#e61e32', desc: 'Process control' },
  { name: 'json / re',    icon: 'fa-code',                 color: '#f5c400', desc: 'Data & regex' },
]

export default function PlaygroundInstructions() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('supported')

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f0f0f0' }}>

      {/* Nav */}
      <nav style={{
        background: '#0a0a0a', borderBottom: '3px solid #e61e32',
        boxShadow: '0 3px 0 #f5c400',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: 56, position: 'sticky', top: 0, zIndex: 40,
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: -10, width: 80, background: '#e61e32', transform: 'skewX(-15deg)', opacity: 0.08, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => navigate('/python-course/playground')} className="p5-btn-ghost" style={{ padding: '5px 12px' }}>
            <i className="fa-solid fa-arrow-left" />
          </button>
          <div style={{ width: 1, height: 24, background: '#222' }} />
          <div style={{ width: 28, height: 28, background: '#e61e32', clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fa-solid fa-mask" style={{ color: '#fff', fontSize: '0.6rem' }} />
          </div>
          <span style={{ ...P5_TITLE, fontSize: '1rem', color: '#f0f0f0' }}>DOCS & CAPABILITIES</span>
        </div>
        <button onClick={() => navigate('/python-course/playground/ide')} className="p5-btn">
          <i className="fa-solid fa-play" /> OPEN IDE
        </button>
      </nav>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 48 }}>
          <div className="p5-badge" style={{ display: 'inline-block', marginBottom: 16 }}>PLATFORM DOCS</div>
          <h1 style={{ ...P5_TITLE, fontSize: '3rem', color: '#f0f0f0', marginBottom: 4 }}>
            PLATFORM <span style={{ color: '#e61e32' }}>CAPABILITIES</span>
          </h1>
          <div className="p5-divider" style={{ width: 200, marginBottom: 16 }} />
          <p style={{ ...P5_BODY, fontSize: '0.95rem', color: '#555', maxWidth: 500 }}>
            Everything you need to know about the AI Python Studio execution environment.
          </p>
        </motion.div>

        {/* Section tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setActiveSection(s.id)}
              style={{
                ...P5_LABEL, fontSize: '0.68rem',
                padding: '8px 16px', cursor: 'pointer',
                clipPath: 'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)',
                background: activeSection === s.id ? `${s.color}15` : 'transparent',
                border: `1px solid ${activeSection === s.id ? s.color : '#222'}`,
                color: activeSection === s.id ? s.color : '#333',
                boxShadow: activeSection === s.id ? `3px 3px 0 ${s.color}` : 'none',
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'all 0.15s',
              }}>
              <i className={`fa-solid ${s.icon}`} style={{ fontSize: '0.7rem' }} />
              {s.title}
            </button>
          ))}
        </div>

        {/* Section content */}
        {sections.map(s => s.id === activeSection && (
          <motion.div key={s.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
            style={{
              background: '#111', border: '1px solid #222',
              borderLeft: `3px solid ${s.color}`,
              padding: 24, marginBottom: 40,
              clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ width: 4, height: 28, background: s.color, transform: 'skewX(-8deg)' }} />
              <i className={`fa-solid ${s.icon}`} style={{ fontSize: '1.2rem', color: s.color }} />
              <span style={{ ...P5_TITLE, fontSize: '1.2rem', color: '#f0f0f0' }}>{s.title}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
              {s.items.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, ...P5_BODY, fontSize: '0.85rem', color: '#888' }}>
                  <i className={`${item.brand ? 'fa-brands' : 'fa-solid'} ${item.icon}`} style={{ color: s.color, width: 16, textAlign: 'center' }} />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Code examples */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 4, height: 22, background: '#e61e32', transform: 'skewX(-8deg)' }} />
            <div style={{ width: 2, height: 22, background: '#f5c400', transform: 'skewX(-8deg)', marginLeft: -2 }} />
            <span style={{ ...P5_TITLE, fontSize: '1.2rem', color: '#f0f0f0' }}>EXAMPLE CODE</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {codeExamples.map((ex, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                style={{
                  background: '#111', border: '1px solid #222', borderTop: `3px solid ${ex.color}`,
                  clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                  overflow: 'hidden',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid #1a1a1a' }}>
                  <i className={`fa-solid ${ex.icon}`} style={{ fontSize: '0.85rem', color: ex.color }} />
                  <span style={{ ...P5_TITLE, fontSize: '0.85rem', color: '#f0f0f0' }}>{ex.title}</span>
                </div>
                <pre style={{ padding: '12px 14px', fontSize: '0.68rem', fontFamily: "'JetBrains Mono',monospace", color: '#555', overflowX: 'auto', lineHeight: 1.7 }}>
                  <code>{ex.code}</code>
                </pre>
                <div style={{ padding: '0 14px 12px' }}>
                  <button onClick={() => { localStorage.setItem('studio_code', ex.code); navigate('/python-course/playground/ide') }}
                    style={{ ...P5_LABEL, fontSize: '0.62rem', color: ex.color, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f5c400'}
                    onMouseLeave={e => e.currentTarget.style.color = ex.color}>
                    <i className="fa-solid fa-play" style={{ fontSize: '0.7rem' }} /> TRY IN IDE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Libraries */}
        <div style={{ background: '#111', border: '1px solid #222', borderLeft: '3px solid #e61e32', padding: 24, clipPath: 'polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ width: 4, height: 22, background: '#e61e32', transform: 'skewX(-8deg)' }} />
            <span style={{ ...P5_TITLE, fontSize: '1.2rem', color: '#f0f0f0' }}>SUPPORTED LIBRARIES</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
            {libraries.map(lib => (
              <div key={lib.name}
                style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderLeft: `2px solid ${lib.color}`, padding: 12, transition: 'all 0.15s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; e.currentTarget.style.boxShadow = `2px 2px 0 ${lib.color}` }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}>
                <i className={`fa-solid ${lib.icon}`} style={{ fontSize: '0.85rem', color: lib.color, display: 'block', marginBottom: 6 }} />
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: '0.78rem', color: '#f0f0f0', marginBottom: 2 }}>{lib.name}</div>
                <div style={{ ...P5_BODY, fontSize: '0.68rem', color: '#333' }}>{lib.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
