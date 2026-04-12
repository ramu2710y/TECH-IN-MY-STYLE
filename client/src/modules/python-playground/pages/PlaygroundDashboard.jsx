import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TEMPLATES, CONTINUE_CODING } from '../data/templates'

const P5_TITLE = { fontFamily: "'Oswald',Impact,sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1 }
const P5_LABEL = { fontFamily: "'Oswald',sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em' }
const P5_BODY  = { fontFamily: "'Barlow',sans-serif", fontWeight: 500 }

/* ── Nav ── */
function Nav() {
  const navigate = useNavigate()
  return (
    <nav style={{
      background: '#0a0a0a', borderBottom: '3px solid #e61e32',
      boxShadow: '0 3px 0 #f5c400',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 24px', height: 56, position: 'sticky', top: 0, zIndex: 40,
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: -10, width: 80, background: '#e61e32', transform: 'skewX(-15deg)', opacity: 0.08, pointerEvents: 'none' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 36, height: 36, background: '#e61e32', clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fa-solid fa-mask" style={{ color: '#fff', fontSize: '0.85rem' }} />
        </div>
        <div>
          <div style={{ ...P5_TITLE, fontSize: '1.1rem', color: '#f0f0f0' }}>TECH IN MY STYLE</div>
          <div style={{ ...P5_LABEL, fontSize: '0.5rem', color: '#e61e32' }}>AI PYTHON STUDIO</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button onClick={() => navigate('/python-course/playground/instructions')} className="p5-btn-ghost">
          <i className="fa-solid fa-book" /> DOCS
        </button>
        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          onClick={() => navigate('/python-course/playground/ide')} className="p5-btn">
          <i className="fa-solid fa-play" /> OPEN IDE
        </motion.button>
      </div>
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  const navigate = useNavigate()
  return (
    <div className="p5-slash-bg" style={{
      background: '#0a0a0a',
      borderBottom: '3px solid #e61e32',
      padding: '80px 48px',
      position: 'relative', overflow: 'hidden',
      minHeight: 440,
      display: 'flex', alignItems: 'center',
    }}>
      <div style={{
        position: 'absolute', top: -40, right: -60,
        width: 320, height: '140%',
        background: '#e61e32',
        transform: 'skewX(-12deg)',
        opacity: 0.06,
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: -40, right: 60,
        width: 80, height: '140%',
        background: '#f5c400',
        transform: 'skewX(-12deg)',
        opacity: 0.04,
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <div className="p5-divider" />
      </div>

      <div style={{ maxWidth: 640, position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}
        >
          <div style={{ width: 3, height: 18, background: '#e61e32', transform: 'skewX(-10deg)' }} />
          <span style={{ ...P5_LABEL, fontSize: '0.65rem', color: '#e61e32' }}>
            DOCKER-ISOLATED EXECUTION ENGINE
          </span>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#f5c400', display: 'inline-block' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ ...P5_TITLE, fontSize: 'clamp(3rem,7vw,5.5rem)', color: '#f0f0f0', marginBottom: 8 }}
          className="p5-glitch"
        >
          AI PYTHON
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
          style={{ ...P5_TITLE, fontSize: 'clamp(3rem,7vw,5.5rem)', color: '#e61e32', marginBottom: 24 }}
        >
          STUDIO
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.4 }}
          style={{ height: 3, width: 120, background: '#f5c400', marginBottom: 24, transformOrigin: 'left' }}
        />

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          style={{ ...P5_BODY, fontSize: '1rem', color: '#888', maxWidth: 480, marginBottom: 36, lineHeight: 1.6 }}
        >
          Secure, container-based development environment for AI, ML, Deep Learning & NLP.
          Not just a compiler — a full phantom studio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          style={{ display: 'flex', alignItems: 'center', gap: 16 }}
        >
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/python-course/playground/ide')} className="p5-btn"
            style={{ fontSize: '0.95rem', padding: '10px 32px' }}>
            <i className="fa-solid fa-play" /> START CODING
          </motion.button>
          <button onClick={() => navigate('/python-course/playground/instructions')} className="p5-btn-ghost"
            style={{ fontSize: '0.9rem', padding: '9px 28px' }}>
            <i className="fa-solid fa-book" /> LEARN MORE
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
          style={{ display: 'flex', alignItems: 'center', gap: 32, marginTop: 40, ...P5_LABEL, fontSize: '0.62rem', color: '#333' }}
        >
          {[
            { icon: 'fa-docker', label: 'Docker Isolated', brand: true },
            { icon: 'fa-shield-halved', label: 'Secure' },
            { icon: 'fa-brain', label: 'AI/ML Ready' },
            { icon: 'fa-bolt', label: 'Fast Runtime' },
          ].map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className={`${s.brand ? 'fa-brands' : 'fa-solid'} ${s.icon}`} style={{ color: '#e61e32' }} />
              {s.label}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

/* ── Section header ── */
function SectionHead({ icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 24px', marginBottom: 20 }}>
      <div style={{ width: 4, height: 24, background: '#e61e32', transform: 'skewX(-8deg)' }} />
      <div style={{ width: 2, height: 24, background: '#f5c400', transform: 'skewX(-8deg)', marginLeft: -2 }} />
      <i className={`fa-solid ${icon}`} style={{ fontSize: '0.85rem', color: '#e61e32' }} />
      <span style={{ fontFamily: "'Oswald',Impact,sans-serif", fontWeight: 700, fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f0f0f0' }}>
        {title}
      </span>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,#222,transparent)' }} />
    </div>
  )
}

/* ── Template card ── */
function TemplateCard({ t, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(t)}
      className="p5-card"
      style={{ width: 196, flexShrink: 0, cursor: 'pointer' }}
    >
      <div style={{ height: 3, background: `linear-gradient(90deg,${t.color},transparent)` }} />
      <div style={{ padding: '14px 14px 12px' }}>
        <div style={{
          width: 36, height: 36, marginBottom: 10,
          background: `${t.color}15`, border: `1px solid ${t.color}40`,
          clipPath: 'polygon(8px 0%,100% 0%,100% calc(100% - 8px),calc(100% - 8px) 100%,0% 100%,0% 8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <i className={`fa-solid ${t.icon}`} style={{ fontSize: '0.85rem', color: t.color }} />
        </div>
        <div style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 600, fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#333', marginBottom: 3 }}>
          {t.category}
        </div>
        <div style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.04em', textTransform: 'uppercase', color: '#f0f0f0', marginBottom: 4 }}>
          {t.name}
        </div>
        <div style={{ fontFamily: "'Barlow',sans-serif", fontSize: '0.75rem', color: '#555', lineHeight: 1.4 }}>
          {t.description}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Continue card ── */
function ContinueCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onClick(item)}
      className="p5-card"
      style={{ width: 196, flexShrink: 0, cursor: 'pointer' }}
    >
      <div style={{ height: 3, background: 'linear-gradient(90deg,#e61e32,transparent)' }} />
      <div style={{ padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <i className={`fa-solid ${item.icon}`} style={{ fontSize: '0.85rem', color: '#e61e32' }} />
          <span style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase', color: '#f0f0f0' }}>
            {item.name}
          </span>
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono',monospace", fontSize: '0.68rem', color: '#555',
          background: '#0a0a0a', borderLeft: '2px solid #e61e32', padding: '4px 8px',
          marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>
          {item.preview}
        </div>
        <div style={{ fontFamily: "'Oswald',sans-serif", fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#333' }}>
          <i className="fa-solid fa-clock" style={{ color: '#e61e32', marginRight: 4 }} />{item.lastEdited}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Dashboard ── */
export default function PlaygroundDashboard() {
  const navigate = useNavigate()

  const openTemplate = (t) => {
    localStorage.setItem('studio_code', t.code)
    localStorage.setItem('studio_tab_name', t.name + '.py')
    navigate('/python-course/playground/ide')
  }

  const aiPlaygrounds = TEMPLATES.filter(t => ['AI Playground','ML','AI/ML'].includes(t.category))

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <Hero />

      <div style={{ background: '#0a0a0a', paddingBottom: 80 }}>

        <div style={{ paddingTop: 48, marginBottom: 40 }}>
          <SectionHead icon="fa-history" title="CONTINUE CODING" />
          <div className="p5-scroll-row" style={{ padding: '0 24px' }}>
            {CONTINUE_CODING.map(item => (
              <ContinueCard key={item.id} item={item} onClick={() => navigate('/python-course/playground/ide')} />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <SectionHead icon="fa-robot" title="AI PLAYGROUNDS" />
          <div className="p5-scroll-row" style={{ padding: '0 24px' }}>
            {aiPlaygrounds.map(t => <TemplateCard key={t.id} t={t} onClick={openTemplate} />)}
          </div>
        </div>

        <div style={{ marginBottom: 40 }}>
          <SectionHead icon="fa-layer-group" title="ALL TEMPLATES" />
          <div className="p5-scroll-row" style={{ padding: '0 24px' }}>
            {TEMPLATES.map(t => <TemplateCard key={t.id} t={t} onClick={openTemplate} />)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '2px solid #e61e32', padding: '12px 24px',
        background: '#0a0a0a', textAlign: 'center',
        fontFamily: "'Oswald',sans-serif", fontWeight: 600,
        fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#222',
      }}>
        <i className="fa-solid fa-mask" style={{ color: '#e61e32', marginRight: 8 }} />
        TECH IN MY STYLE – AI PYTHON STUDIO &nbsp;·&nbsp; DOCKER-ISOLATED &nbsp;·&nbsp; SECURE &nbsp;·&nbsp; PRODUCTION-READY
      </div>
    </div>
  )
}
