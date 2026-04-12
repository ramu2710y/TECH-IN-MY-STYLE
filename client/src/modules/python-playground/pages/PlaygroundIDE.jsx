import React, { useState, useRef, useCallback, useEffect } from 'react'
import Editor from '@monaco-editor/react'
import axios from 'axios'
import P5TopBar from '../components/MacTitleBar'
import FileExplorer from '../components/FileExplorer'
import OutputConsole from '../components/OutputConsole'
import AIAssistant from '../components/AIAssistant'
import { TEMPLATES } from '../data/templates'

const BACKEND = import.meta.env.VITE_PYTHON_STUDIO_URL || 'http://localhost:8000'

const DEFAULT_CODE = `# Tech in My Style - AI Python Studio
# Write your Python code here and click RUN

import sys
print(f"Python {sys.version.split()[0]} - Ready to code!")
print("AI Python Studio is running in Docker isolation.")
print("Try importing numpy, pandas, or scikit-learn!")
`

let tabCounter = 2

/* Persona 5 Monaco theme */
const P5_MONACO_THEME = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: '',           foreground: 'f0f0f0' },
    { token: 'comment',    foreground: '333333', fontStyle: 'italic' },
    { token: 'keyword',    foreground: 'e61e32', fontStyle: 'bold' },
    { token: 'string',     foreground: 'f5c400' },
    { token: 'number',     foreground: 'ff6b6b' },
    { token: 'type',       foreground: 'e61e32' },
    { token: 'function',   foreground: 'f0f0f0', fontStyle: 'bold' },
    { token: 'variable',   foreground: 'f0f0f0' },
    { token: 'operator',   foreground: 'e61e32' },
    { token: 'delimiter',  foreground: '555555' },
    { token: 'identifier', foreground: 'f0f0f0' },
    { token: 'constant',   foreground: 'f5c400' },
    { token: 'regexp',     foreground: 'f5c400' },
  ],
  colors: {
    'editor.background':                   '#0d0d0d',
    'editor.foreground':                   '#f0f0f0',
    'editor.lineHighlightBackground':      '#1a1a1a',
    'editor.lineHighlightBorder':          '#22222200',
    'editor.selectionBackground':          '#e61e3230',
    'editor.inactiveSelectionBackground':  '#e61e3215',
    'editorLineNumber.foreground':         '#2a2a2a',
    'editorLineNumber.activeForeground':   '#e61e32',
    'editorCursor.foreground':             '#e61e32',
    'editorWhitespace.foreground':         '#1a1a1a',
    'editorIndentGuide.background1':       '#1a1a1a',
    'editorIndentGuide.activeBackground1': '#e61e3250',
    'editor.findMatchBackground':          '#e61e3240',
    'editor.findMatchHighlightBackground': '#e61e3220',
    'editorBracketMatch.background':       '#e61e3230',
    'editorBracketMatch.border':           '#e61e32',
    'scrollbarSlider.background':          '#e61e3225',
    'scrollbarSlider.hoverBackground':     '#e61e3255',
    'scrollbarSlider.activeBackground':    '#e61e3280',
    'minimap.background':                  '#0a0a0a',
    'editorGutter.background':             '#0a0a0a',
    'editorWidget.background':             '#111111',
    'editorWidget.border':                 '#222222',
    'editorSuggestWidget.background':      '#111111',
    'editorSuggestWidget.border':          '#222222',
    'editorSuggestWidget.selectedBackground': '#e61e3220',
    'editorSuggestWidget.highlightForeground': '#e61e32',
    'input.background':                    '#0a0a0a',
    'input.border':                        '#333333',
    'focusBorder':                         '#e61e32',
    'list.activeSelectionBackground':      '#e61e3220',
    'list.hoverBackground':                '#1a1a1a',
  }
}

export default function PlaygroundIDE() {
  const [tabs, setTabs] = useState([
    { id: 1, name: 'main.py', code: localStorage.getItem('studio_code') || DEFAULT_CODE }
  ])
  const [activeTab, setActiveTab] = useState(1)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [executionTime, setExecutionTime] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const editorRef = useRef(null)

  useEffect(() => {
    const savedName = localStorage.getItem('studio_tab_name')
    if (savedName) {
      setTabs(prev => prev.map(t => t.id === 1 ? { ...t, name: savedName } : t))
      localStorage.removeItem('studio_tab_name')
    }
  }, [])

  const activeTabData = tabs.find(t => t.id === activeTab)

  const handleEditorMount = (editor, monacoInstance) => {
    editorRef.current = editor
    monacoInstance.editor.defineTheme('persona5', P5_MONACO_THEME)
    monacoInstance.editor.setTheme('persona5')
    editor.addCommand(monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.Enter, handleRun)
    editor.addCommand(monacoInstance.KeyMod.CtrlCmd | monacoInstance.KeyCode.KeyS, handleSave)
  }

  const handleCodeChange = (value) => {
    setTabs(prev => prev.map(t => t.id === activeTab ? { ...t, code: value } : t))
  }

  const handleRun = useCallback(async () => {
    const code = editorRef.current?.getValue() || activeTabData?.code || ''
    if (!code.trim()) return
    setIsRunning(true)
    setOutput('')
    setExecutionTime(null)
    const start = Date.now()
    try {
      const res = await axios.post(`${BACKEND}/run`, { code }, { timeout: 120000 })
      setOutput(res.data.output || res.data.error || 'No output')
      setExecutionTime(Date.now() - start)
    } catch (err) {
      if (err.code === 'ECONNABORTED') setOutput('Error: Execution timed out.')
      else if (err.response?.data?.detail) setOutput(`Error: ${err.response.data.detail}`)
      else setOutput('Error: Could not connect to backend. Make sure the server is running.')
    }
    setIsRunning(false)
  }, [activeTabData])

  const handleSave = () => {
    const code = editorRef.current?.getValue() || activeTabData?.code || ''
    localStorage.setItem(`studio_file_${activeTab}`, code)
  }

  const handleNewTab = () => {
    const id = tabCounter++
    setTabs(prev => [...prev, { id, name: `untitled_${id}.py`, code: DEFAULT_CODE }])
    setActiveTab(id)
  }

  const handleCloseTab = (id) => {
    if (tabs.length === 1) return
    const remaining = tabs.filter(t => t.id !== id)
    setTabs(remaining)
    if (activeTab === id) setActiveTab(remaining[remaining.length - 1].id)
  }

  const handleFileSelect = (file) => {
    const template = TEMPLATES.find(t =>
      t.id === file.templateId ||
      t.id === file.name.replace('.py', '')
    )
    if (template) {
      setTabs(prev => prev.map(t =>
        t.id === activeTab ? { ...t, name: file.name, code: template.code } : t
      ))
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', background: '#0a0a0a' }}>
      <P5TopBar
        onRun={handleRun}
        onSave={handleSave}
        isRunning={isRunning}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onNewTab={handleNewTab}
        onCloseTab={handleCloseTab}
      />

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* Sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(o => !o)}
          style={{
            position: 'absolute', zIndex: 10,
            top: '50%', transform: 'translateY(-50%)',
            left: sidebarOpen ? 207 : 0,
            width: 14, height: 40,
            background: '#111',
            border: '1px solid #222',
            borderLeft: 'none',
            borderRight: '2px solid #e61e32',
            color: '#e61e32',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'left 0.2s',
          }}
        >
          <i className={`fa-solid fa-chevron-${sidebarOpen ? 'left' : 'right'}`} style={{ fontSize: '0.7rem' }} />
        </button>

        {/* File Explorer */}
        {sidebarOpen && (
          <div style={{ width: 208, flexShrink: 0, borderRight: '1px solid #1a1a1a', overflow: 'hidden' }}>
            <FileExplorer onSelect={handleFileSelect} />
          </div>
        )}

        {/* Editor */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <Editor
            height="100%"
            defaultLanguage="python"
            value={activeTabData?.code || ''}
            onChange={handleCodeChange}
            onMount={handleEditorMount}
            theme="vs-dark"
            options={{
              fontSize: 14,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontLigatures: true,
              minimap: { enabled: true, scale: 0.8 },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
              cursorBlinking: 'phase',
              cursorSmoothCaretAnimation: 'on',
              renderLineHighlight: 'all',
              lineNumbers: 'on',
              glyphMargin: true,
              folding: true,
              bracketPairColorization: { enabled: true },
              suggest: { showKeywords: true },
              quickSuggestions: true,
              tabSize: 4,
              wordWrap: 'on',
              padding: { top: 16, bottom: 16 },
            }}
          />
        </div>

        {/* Output */}
        <div style={{ width: 380, flexShrink: 0, borderLeft: '1px solid #1a1a1a', overflow: 'hidden' }}>
          <OutputConsole
            output={output}
            isRunning={isRunning}
            executionTime={executionTime}
            onClear={() => { setOutput(''); setExecutionTime(null) }}
          />
        </div>
      </div>

      {/* Status bar */}
      <div style={{
        height: 24, display: 'flex', alignItems: 'center', gap: 24, padding: '0 16px',
        background: '#e61e32',
        fontFamily: "'Oswald',sans-serif", fontWeight: 600,
        fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)',
      }}>
        <span><i className="fa-brands fa-python" style={{ color: '#f5c400', marginRight: 4 }} />PYTHON 3.10</span>
        <span><i className="fa-brands fa-docker" style={{ marginRight: 4 }} />DOCKER ISOLATED</span>
        <span><i className="fa-solid fa-shield-halved" style={{ marginRight: 4 }} />SECURE</span>
        <span style={{ marginLeft: 'auto' }}>
          <i className="fa-solid fa-mask" style={{ marginRight: 4 }} />
          TECH IN MY STYLE – AI PYTHON STUDIO
        </span>
      </div>

      <AIAssistant code={activeTabData?.code} />
    </div>
  )
}
