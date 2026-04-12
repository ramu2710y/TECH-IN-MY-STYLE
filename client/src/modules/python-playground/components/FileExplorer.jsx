import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const defaultFiles = [
  { id: 1, name: 'main.py',           type: 'file', templateId: 'hello' },
  { id: 2, name: 'ai_playground',     type: 'folder', children: [
    { id: 3, name: 'chatbot.py',       type: 'file', templateId: 'chatbot' },
    { id: 4, name: 'classifier.py',    type: 'file', templateId: 'spam_classifier' },
  ]},
  { id: 5, name: 'templates',         type: 'folder', children: [
    { id: 6, name: 'spam_filter.py',   type: 'file', templateId: 'spam_classifier' },
    { id: 7, name: 'file_processor.py',type: 'file', templateId: 'file_processor' },
    { id: 8, name: 'numpy_demo.py',    type: 'file', templateId: 'numpy_demo' },
    { id: 9, name: 'pandas_demo.py',   type: 'file', templateId: 'pandas_demo' },
    { id: 10,name: 'automation.py',    type: 'file', templateId: 'system_automation' },
  ]},
]

const P5_FONT = { fontFamily: "'Oswald',sans-serif", fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }

function FileItem({ item, depth = 0, onSelect }) {
  const [open, setOpen] = useState(false)
  const pl = 10 + depth * 14

  if (item.type === 'folder') {
    return (
      <div>
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 0', paddingLeft: pl, cursor: 'pointer',
            ...P5_FONT, fontSize: '0.72rem',
            color: open ? '#e61e32' : '#555',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(230,30,50,0.06)'; e.currentTarget.style.color = '#e61e32' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = open ? '#e61e32' : '#555' }}
          onClick={() => setOpen(!open)}
        >
          <i className={`fa-solid fa-chevron-right`}
            style={{ fontSize: '0.7rem', color: '#e61e32', transition: 'transform 0.15s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }} />
          <i className={`fa-solid fa-folder${open ? '-open' : ''}`}
            style={{ fontSize: '0.7rem', color: '#f5c400' }} />
          <span>{item.name}</span>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.12 }}
              style={{ overflow: 'hidden' }}
            >
              {item.children?.map(c => <FileItem key={c.id} item={c} depth={depth + 1} onSelect={onSelect} />)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '6px 0', paddingLeft: pl + 18, cursor: 'pointer',
        ...P5_FONT, fontSize: '0.72rem', color: '#444',
        transition: 'all 0.15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(230,30,50,0.06)'; e.currentTarget.style.color = '#f0f0f0'; e.currentTarget.style.borderLeft = '2px solid #e61e32' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#444'; e.currentTarget.style.borderLeft = 'none' }}
      onClick={() => onSelect?.(item)}
    >
      <i className="fa-brands fa-python" style={{ fontSize: '0.7rem', color: '#f5c400' }} />
      <span>{item.name}</span>
    </div>
  )
}

export default function FileExplorer({ onSelect }) {
  const [search, setSearch] = useState('')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0d0d0d' }}>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '10px 12px',
        borderBottom: '2px solid #e61e32', background: '#111',
      }}>
        <div style={{ width: 3, height: 16, background: '#e61e32', transform: 'skewX(-10deg)' }} />
        <i className="fa-solid fa-folder-tree" style={{ fontSize: '0.7rem', color: '#e61e32' }} />
        <span style={{ ...P5_FONT, fontSize: '0.7rem', color: '#f0f0f0' }}>EXPLORER</span>
      </div>

      {/* Search */}
      <div style={{ padding: 8, borderBottom: '1px solid #1a1a1a' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 8px',
          background: '#0a0a0a', borderLeft: '2px solid #e61e32',
        }}>
          <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '0.7rem', color: '#e61e32' }} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="SEARCH FILES..."
            style={{
              background: 'transparent', border: 'none', outline: 'none', width: '100%',
              fontFamily: "'Oswald',sans-serif", fontSize: '0.7rem', letterSpacing: '0.1em', color: '#f0f0f0',
            }}
          />
        </div>
      </div>

      {/* Files */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 0' }}>
        {defaultFiles.map(f => <FileItem key={f.id} item={f} onSelect={onSelect} />)}
      </div>

      {/* New file */}
      <div style={{ borderTop: '1px solid #1a1a1a', padding: 8 }}>
        <button
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 8px',
            ...P5_FONT, fontSize: '0.68rem', color: '#333',
            background: 'none', border: 'none', cursor: 'pointer',
            transition: 'all 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#e61e32'; e.currentTarget.style.background = 'rgba(230,30,50,0.06)' }}
          onMouseLeave={e => { e.currentTarget.style.color = '#333'; e.currentTarget.style.background = 'transparent' }}
        >
          <i className="fa-solid fa-plus" style={{ fontSize: '0.7rem', color: '#e61e32' }} /> NEW FILE
        </button>
      </div>
    </div>
  )
}
