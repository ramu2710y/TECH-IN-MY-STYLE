import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function P5TopBar({ onRun, onSave, isRunning, tabs, activeTab, onTabChange, onNewTab, onCloseTab }) {
  const navigate = useNavigate()

  return (
    <div className="p5-header" style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', zIndex: 50 }}>

      {/* Main bar */}
      <div style={{ display: 'flex', alignItems: 'center', height: 48, padding: '0 16px', gap: 12 }}>

        {/* Logo */}
        <button onClick={() => navigate('/python-course/playground')}
          style={{
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
            borderRight: '1px solid #222', paddingRight: 14, marginRight: 4,
            background: 'none', border: 'none', cursor: 'pointer',
          }}>
          <div style={{
            width: 30, height: 30,
            background: '#e61e32',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <i className="fa-solid fa-mask" style={{ color: '#fff', fontSize: '0.7rem' }} />
          </div>
          <div style={{ lineHeight: 1 }}>
            <div style={{ fontFamily: "'Oswald',Impact,sans-serif", fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', color: '#f0f0f0', textTransform: 'uppercase' }}>
              PYTHON
            </div>
            <div style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 400, fontSize: '0.5rem', letterSpacing: '0.25em', color: '#e61e32', textTransform: 'uppercase' }}>
              STUDIO
            </div>
          </div>
        </button>

        {/* Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, overflowX: 'auto', height: '100%', scrollbarWidth: 'none', gap: 1 }}>
          {tabs && tabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={activeTab === tab.id ? 'p5-tab-active' : ''}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px', height: '100%',
                fontSize: '0.75rem', cursor: 'pointer', flexShrink: 0,
                fontFamily: "'Oswald',sans-serif", fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: activeTab === tab.id ? '#e61e32' : '#555',
                borderRight: '1px solid #1a1a1a',
                clipPath: activeTab === tab.id ? 'polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%)' : 'none',
                transition: 'all 0.15s',
              }}
            >
              <i className="fa-brands fa-python"
                style={{ fontSize: '0.7rem', color: activeTab === tab.id ? '#f5c400' : '#333' }} />
              <span>{tab.name}</span>
              <span
                onClick={e => { e.stopPropagation(); onCloseTab(tab.id) }}
                style={{ color: '#555', marginLeft: 4, opacity: 0, cursor: 'pointer', transition: 'opacity 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#e61e32'; e.currentTarget.style.opacity = 1 }}
                onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.opacity = 0 }}
              >×</span>
            </div>
          ))}
          <button onClick={onNewTab}
            style={{
              padding: '0 12px', height: '100%', color: '#333',
              fontFamily: "'Oswald',sans-serif", fontSize: '1rem',
              background: 'none', border: 'none', cursor: 'pointer',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#e61e32'}
            onMouseLeave={e => e.currentTarget.style.color = '#333'}>
            +
          </button>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onRun}
            disabled={isRunning}
            className="p5-btn"
          >
            {isRunning
              ? <><i className="fa-solid fa-spinner fa-spin" /> RUNNING...</>
              : <><i className="fa-solid fa-play" /> RUN</>
            }
          </motion.button>

          <button onClick={onSave} className="p5-btn-ghost" title="Save Ctrl+S">
            <i className="fa-solid fa-floppy-disk" />
          </button>
          <button onClick={() => navigate('/python-course/playground/instructions')} className="p5-btn-ghost" title="Docs">
            <i className="fa-solid fa-circle-info" />
          </button>
          <button className="p5-btn-ghost" title="Settings">
            <i className="fa-solid fa-gear" />
          </button>
        </div>
      </div>

      {/* Yellow accent line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg,#e61e32 0%,#f5c400 40%,transparent 100%)' }} />
    </div>
  )
}
