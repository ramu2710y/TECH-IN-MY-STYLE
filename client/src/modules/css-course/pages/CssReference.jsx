import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CssNavbar, { useDarkMode } from '../components/CssNavbar'
import CssFooter from '../components/CssFooter'
import { cssData, getAllTags } from '../data/cssData'

/* ─── Group tags by first letter ──────────────────────────────── */
function groupByLetter(tags) {
  const groups = {}
  tags.forEach((tag) => {
    const letter = tag.name[0].toUpperCase()
    if (!groups[letter]) groups[letter] = []
    groups[letter].push(tag)
  })
  return groups
}

/* ─── Category accent colours ─────────────────────────────────── */
const CAT_COLORS = [
  '#264de4', '#2965f1', '#1b35b5', '#42a1d0',
  '#264de4', '#2965f1', '#1b35b5', '#42a1d0',
  '#264de4', '#2965f1', '#1b35b5', '#42a1d0',
]

export default function CssIndex() {
  const navigate = useNavigate()
  const { dark } = useDarkMode()

  const [searchTerm, setSearchTerm] = useState('')
  const [activeView, setActiveView] = useState('categories') // 'categories' | 'alpha'
  const [showBackTop, setShowBackTop] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const searchRef = useRef(null)

  const allTags = getAllTags()
  const lower = searchTerm.trim().toLowerCase()

  const filteredCategories = cssData.categories
    .map((cat) => ({
      ...cat,
      tags: cat.tags.filter((t) => t.name.toLowerCase().includes(lower)),
    }))
    .filter((cat) => cat.tags.length > 0)

  const filteredAlpha = allTags.filter((t) => t.name.toLowerCase().includes(lower))
  const groupedAlpha = groupByLetter(filteredAlpha)
  const letters = Object.keys(groupedAlpha).sort()
  const totalTags = allTags.length
  const totalCats = cssData.categories.length
  const workableCount = allTags.filter((t) => t.workable).length

  /* Back-to-top */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 350)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* Auto-switch view when searching */
  useEffect(() => {
    if (!lower) return
    if (filteredCategories.length === 0 && filteredAlpha.length > 0) setActiveView('alpha')
  }, [lower])

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* ── tokens ── */
  const P = '#264de4'

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      background: 'var(--color-bg)',
      color: 'var(--color-text)',
      minHeight: '100vh',
      overflowX: 'hidden',
      transition: 'background 0.3s ease, color 0.3s ease',
    }}>


      <main id="main-content">

        {/* ═══════════════════════ HERO ═══════════════════════ */}
        <section style={{
          position: 'relative',
          background: 'var(--color-bg)',
          padding: '6.5rem 2rem 4.5rem',
          overflow: 'hidden',
          borderBottom: '1px solid var(--color-border-soft)',
          transition: 'background 0.3s ease',
        }}>
          {/* Blobs */}
          {[
            { w: 480, h: 480, top: -160, left: -120, c: 'rgba(38,77,228,0.15)', dur: 11 },
            { w: 360, h: 360, bottom: -100, right: -80, c: 'rgba(41,101,241,0.12)', dur: 14, rev: true },
            { w: 260, h: 260, top: '55%', left: '55%', c: 'rgba(66,161,208,0.07)', dur: 9, delay: 2.5 },
          ].map((b, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: b.w, height: b.h,
              top: b.top, left: b.left,
              bottom: b.bottom, right: b.right,
              borderRadius: '50%',
              filter: 'blur(70px)',
              background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
              animation: `blobFloat ${b.dur}s ease-in-out infinite${b.rev ? ' reverse' : ''}${b.delay ? ` ${b.delay}s` : ''}`,
              pointerEvents: 'none',
              zIndex: 0,
            }} />
          ))}

          <style>{`
            @keyframes blobFloat {
              0%,100% { transform: translate(0,0) scale(1); }
              33% { transform: translate(18px,-18px) scale(1.04); }
              66% { transform: translate(-14px,14px) scale(0.97); }
            }
            @keyframes cxSlideIn {
              from { opacity:0; transform:translateY(24px); }
              to   { opacity:1; transform:translateY(0); }
            }
          `}</style>

          <div style={{
            position: 'relative', zIndex: 1,
            maxWidth: '760px', margin: '0 auto',
            textAlign: 'center',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.1rem',
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.8rem', fontWeight: 500, color: 'var(--color-text-muted)',
              flexWrap: 'wrap', justifyContent: 'center',
            }}>
              <button onClick={() => navigate('/')} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--color-text-muted)', fontFamily: 'inherit',
                fontSize: '0.8rem', fontWeight: 500, padding: '0.15rem 0.3rem',
                borderRadius: '5px', transition: 'color 0.15s ease, background 0.15s ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = P; e.currentTarget.style.background = 'rgba(38,77,228,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
              >
                <i className="bi bi-house-door-fill" />
                Home
              </button>
              <i className="bi bi-chevron-right" style={{ fontSize: '0.65rem', opacity: 0.4 }} />
              <span style={{ color: P, fontWeight: 700 }}>CSS Reference</span>
            </nav>

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.35rem 1.1rem',
              background: 'linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))',
              border: '1px solid rgba(38,77,228,0.15)',
              borderRadius: '9999px',
              color: P,
              fontSize: '0.78rem', fontWeight: 700,
              letterSpacing: '0.05em', textTransform: 'uppercase',
            }}>
              <i className="bi bi-braces-asterisk" style={{ fontSize: '0.9rem' }} />
              Complete Reference
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              color: 'var(--color-text)',
              margin: 0,
            }}>
              CSS Property{' '}
              <span style={{
                background: 'linear-gradient(135deg, #264de4, #2965f1)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}>
                Explorer
              </span>
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              lineHeight: 1.75,
              maxWidth: '600px',
              margin: 0,
            }}>
              Browse all <strong style={{ color: P }}>{totalTags}</strong> CSS properties across{' '}
              <strong style={{ color: P }}>{totalCats}</strong> categories. Click any property to
              see documentation and a live editable example.{' '}
              <strong style={{ color: P }}>{workableCount} properties</strong> have fully interactive demos.
            </p>

            {/* Search */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px', marginTop: '0.5rem' }}>
              <i className="bi bi-search" style={{
                position: 'absolute', top: '50%', left: '1.1rem',
                transform: 'translateY(-50%)',
                color: P, fontSize: '1rem', pointerEvents: 'none', zIndex: 1,
              }} />
              <input
                ref={searchRef}
                type="search"
                placeholder="Search CSS properties… e.g. flex, grid, animation"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search CSS properties"
                autoComplete="off"
                spellCheck="false"
                style={{
                  width: '100%',
                  padding: '0.9rem 3rem 0.9rem 3rem',
                  border: '2px solid rgba(38,77,228,0.15)',
                  borderRadius: '9999px',
                  background: 'var(--color-card)',
                  color: 'var(--color-text)',
                  fontFamily: 'inherit',
                  fontSize: '0.97rem',
                  outline: 'none',
                  appearance: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = P
                  e.target.style.boxShadow = '0 0 0 4px rgba(38,77,228,0.10), 0 6px 24px rgba(0,0,0,0.09)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(38,77,228,0.15)'
                  e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => { setSearchTerm(''); searchRef.current?.focus() }}
                  aria-label="Clear search"
                  style={{
                    position: 'absolute', top: '50%', right: '1rem',
                    transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--color-text-faint)', fontSize: '0.85rem',
                    padding: '0.25rem', borderRadius: '50%',
                    display: 'flex', alignItems: 'center',
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = P)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  <i className="bi bi-x-lg" />
                </button>
              )}
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex', alignItems: 'center',
              flexWrap: 'wrap', justifyContent: 'center', gap: 0,
              marginTop: '0.25rem',
            }}>
              {[
                { icon: 'bi bi-braces', val: totalTags, label: 'Properties' },
                { icon: 'bi bi-grid-fill', val: totalCats, label: 'Categories' },
                { icon: 'bi bi-play-circle-fill', val: workableCount, label: 'Live Demos' },
              ].map((s, i, arr) => (
                <span key={s.label} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)',
                    padding: '0 1rem',
                  }}>
                    <i className={s.icon} style={{ color: P }} />
                    <strong style={{ color: 'var(--color-text)' }}>{s.val}</strong>{' '}
                    {s.label}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{
                      width: 1, height: 18,
                      background: 'rgba(38,77,228,0.15)',
                      display: 'inline-block', flexShrink: 0,
                    }} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ INTRO CARDS ═══════════════════ */}
        {!lower && (
          <section style={{
            padding: '3rem 2rem',
            background: 'var(--color-bg-alt)',
            borderBottom: '1px solid var(--color-border-soft)',
            transition: 'background 0.3s ease',
          }}>
            <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.25rem',
              }}>
                {[
                  {
                    icon: 'bi bi-grid-3x3-gap-fill',
                    title: 'Browse by Category',
                    desc: 'Tags grouped by purpose — Box Model, Flexbox, Grid, Typography, Animations, and more.',
                    action: () => { setActiveView('categories'); scrollToSection('categories') },
                    badge: `${totalCats} categories`,
                  },
                  {
                    icon: 'bi bi-sort-alpha-down',
                    title: 'Browse A–Z',
                    desc: `All ${totalTags} CSS properties in alphabetical order with letter-jump navigation.`,
                    action: () => { setActiveView('alpha'); scrollToSection('alphabetical') },
                    badge: `${totalTags} properties`,
                  },
                  {
                    icon: 'bi bi-play-circle-fill',
                    title: '3 Interactive Demos',
                    desc: 'Flexbox, CSS Grid, and Animation have fully interactive playgrounds with live preview.',
                    action: () => navigate('/css-course/property/flexbox'),
                    badge: `${workableCount} live demos`,
                    highlight: true,
                  },
                ].map((card) => (
                  <button
                    key={card.title}
                    onClick={card.action}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '1.4rem 1.5rem',
                      background: card.highlight ? 'linear-gradient(135deg, #264de4, #2965f1)' : 'var(--color-card)',
                      border: card.highlight ? 'none' : '1px solid var(--color-border)',
                      borderRadius: '18px',
                      boxShadow: card.highlight ? '0 8px 28px rgba(38,77,228,0.28)' : '0 1px 4px rgba(0,0,0,0.06)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'inherit',
                      transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)'
                      e.currentTarget.style.boxShadow = card.highlight
                        ? '0 16px 40px rgba(38,77,228,0.38)'
                        : '0 10px 30px rgba(38,77,228,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.boxShadow = card.highlight
                        ? '0 8px 28px rgba(38,77,228,0.28)'
                        : '0 1px 4px rgba(0,0,0,0.06)'
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: 50, height: 50, borderRadius: '12px',
                      background: card.highlight ? 'rgba(255,255,255,0.22)' : 'rgba(38,77,228,0.08)',
                      border: card.highlight ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(38,77,228,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.35rem',
                      color: card.highlight ? '#fff' : P,
                      flexShrink: 0,
                    }}>
                      <i className={card.icon} />
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{
                        fontSize: '0.95rem', fontWeight: 700, margin: '0 0 0.2rem',
                        color: card.highlight ? '#fff' : 'var(--color-text)',
                      }}>{card.title}</p>
                      <p style={{
                        fontSize: '0.8rem', margin: 0, lineHeight: 1.5,
                        color: card.highlight ? 'rgba(255,255,255,0.78)' : 'var(--color-text-muted)',
                      }}>{card.desc}</p>
                      <span style={{
                        display: 'inline-block',
                        marginTop: '0.45rem',
                        fontSize: '0.68rem', fontWeight: 800,
                        letterSpacing: '0.05em', textTransform: 'uppercase',
                        padding: '0.18rem 0.55rem',
                        borderRadius: '5px',
                        background: card.highlight ? 'rgba(255,255,255,0.18)' : 'rgba(38,77,228,0.08)',
                        color: card.highlight ? '#fff' : P,
                      }}>{card.badge}</span>
                    </div>

                    {/* Arrow */}
                    <i className="bi bi-arrow-right" style={{
                      color: card.highlight ? 'rgba(255,255,255,0.7)' : 'var(--color-text-faint)',
                      fontSize: '1rem', flexShrink: 0,
                    }} />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════ TOGGLE BAR ═══════════════════ */}
        {!lower && (
          <div style={{
            padding: '1.25rem 2rem',
            background: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border-soft)',
            position: 'sticky', top: '68px', zIndex: 90,
            backdropFilter: 'blur(10px)',
            transition: 'background 0.3s ease',
          }}>
            <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
              <div style={{
                display: 'inline-flex',
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '9999px',
                padding: '4px', gap: '4px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}>
                {[
                  { id: 'categories', icon: 'bi bi-grid-fill', label: 'Categories' },
                  { id: 'alpha', icon: 'bi bi-sort-alpha-down', label: 'Alphabetical' },
                ].map(({ id, icon, label }) => (
                  <button
                    key={id}
                    onClick={() => { setActiveView(id); scrollToSection(id === 'categories' ? 'categories' : 'alphabetical') }}
                    aria-selected={activeView === id}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                      padding: '0.5rem 1.3rem',
                      borderRadius: '9999px',
                      border: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.875rem', fontWeight: 700,
                      cursor: 'pointer',
                      background: activeView === id ? 'linear-gradient(135deg, #264de4, #2965f1)' : 'none',
                      color: activeView === id ? '#fff' : 'var(--color-text-muted)',
                      boxShadow: activeView === id ? '0 3px 10px rgba(38,77,228,0.28)' : 'none',
                      transition: 'all 0.18s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (activeView !== id) {
                        e.currentTarget.style.color = P
                        e.currentTarget.style.background = 'rgba(38,77,228,0.07)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeView !== id) {
                        e.currentTarget.style.color = ''
                        e.currentTarget.style.background = ''
                      }
                    }}
                  >
                    <i className={icon} style={{ fontSize: '0.9rem' }} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search result summary */}
        {lower && (
          <div style={{
            padding: '0.9rem 2rem',
            background: 'var(--color-bg-alt)',
            borderBottom: '1px solid var(--color-border-soft)',
          }}>
            <div style={{
              maxWidth: '1260px', margin: '0 auto',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap',
            }}>
              <p style={{
                fontSize: '0.875rem', color: 'var(--color-text-muted)',
                display: 'flex', alignItems: 'center', gap: '0.45rem', margin: 0,
              }}>
                <i className="bi bi-search" style={{ color: P }} />
                Found <strong style={{ color: 'var(--color-text)' }}>{filteredAlpha.length}</strong>{' '}
                propert{filteredAlpha.length !== 1 ? 'ies' : 'y'} matching{' '}
                <em style={{ color: P, fontStyle: 'normal', fontWeight: 700 }}>"{searchTerm}"</em>
              </p>
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  border: '1.5px solid rgba(38,77,228,0.15)',
                  background: 'none',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'inherit', fontSize: '0.78rem', fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = P; e.currentTarget.style.color = P; e.currentTarget.style.background = 'rgba(38,77,228,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }}
              >
                <i className="bi bi-x-circle-fill" />
                Clear search
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════ WORKABLE DEMOS STRIP ═══════════════════ */}
        {!lower && (
          <div style={{
            background: 'linear-gradient(135deg, #264de4, #2965f1)',
            padding: '1.25rem 2rem',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              pointerEvents: 'none',
            }} />
            <div style={{
              maxWidth: '1260px', margin: '0 auto',
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap',
              position: 'relative', zIndex: 1,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.3rem 0.85rem',
                  background: 'rgba(255,255,255,0.18)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '9999px',
                  fontSize: '0.72rem', fontWeight: 800,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: '#fff',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#28ca41', display: 'inline-block', animation: 'pulseGreen 1.5s ease-in-out infinite' }} />
                  Live Demos
                </div>
                <style>{`@keyframes pulseGreen { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.5;transform:scale(0.75);} }`}</style>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.875rem', fontWeight: 600, margin: 0 }}>
                  3 interactive CSS demos — try them live!
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {[
                  { to: '/css-course/property/flexbox', label: 'Flexbox', icon: 'bi bi-layout-wtf' },
                  { to: '/css-course/property/grid', label: 'CSS Grid', icon: 'bi bi-grid-3x3-gap-fill' },
                  { to: '/css-course/property/animation', label: 'Animation', icon: 'bi bi-play-circle-fill' },
                ].map((demo) => (
                  <Link
                    key={demo.to}
                    to={demo.to}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.16)',
                      border: '1px solid rgba(255,255,255,0.25)',
                      color: '#fff',
                      fontSize: '0.82rem', fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.28)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.transform = ''; }}
                  >
                    <i className={demo.icon} />
                    {demo.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════ CATEGORIES ═══════════════════ */}
        {(activeView === 'categories' || lower) && (
          <section style={{
            padding: '4rem 2rem 5rem',
            background: 'var(--color-bg)',
            transition: 'background 0.3s ease',
          }} id="categories">
            <div style={{ maxWidth: '1260px', margin: '0 auto' }}>

              {/* Section header */}
              <div style={{
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between', gap: '1.5rem',
                marginBottom: '2.5rem', flexWrap: 'wrap',
              }}>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                    fontWeight: 800, margin: '0 0 0.4rem',
                    color: 'var(--color-text)',
                    letterSpacing: '-0.025em',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                  }}>
                    <i className="bi bi-grid-3x3-gap-fill" style={{ color: P, fontSize: '1.1em' }} />
                    {lower ? `Categories matching "${searchTerm}"` : 'CSS Properties by Category'}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.65 }}>
                    Properties grouped by their purpose in CSS.
                  </p>
                </div>
                {!lower && (
                  <span style={{
                    padding: '0.38rem 0.95rem',
                    background: 'rgba(38,77,228,0.08)',
                    border: '1px solid rgba(38,77,228,0.15)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem', fontWeight: 700, color: P,
                    letterSpacing: '0.03em', whiteSpace: 'nowrap',
                    alignSelf: 'flex-start',
                  }}>
                    {totalCats} categories
                  </span>
                )}
              </div>

              {filteredCategories.length === 0 ? (
                /* Empty state */
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '1rem', padding: '4rem 2rem', textAlign: 'center',
                  color: 'var(--color-text-muted)',
                }}>
                  <i className="bi bi-search" style={{ fontSize: '3rem', color: 'rgba(38,77,228,0.12)', display: 'block' }} />
                  <p style={{ fontSize: '1rem', margin: 0 }}>
                    No categories match <strong style={{ color: P }}>"{searchTerm}"</strong>
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                      padding: '0.6rem 1.4rem',
                      borderRadius: '9999px', border: 'none',
                      background: 'linear-gradient(135deg, #264de4, #2965f1)',
                      color: '#fff', fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 700,
                      cursor: 'pointer', boxShadow: '0 4px 14px rgba(38,77,228,0.28)',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
                  >
                    <i className="bi bi-arrow-counterclockwise" />
                    Reset Search
                  </button>
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
                  gap: '1.5rem',
                }}>
                  {filteredCategories.map((cat, idx) => {
                    const accent = CAT_COLORS[idx % CAT_COLORS.length]
                    return (
                      <article
                        key={cat.name}
                        style={{
                          background: 'var(--color-card)',
                          border: '1px solid var(--color-border)',
                          borderRadius: '18px',
                          overflow: 'hidden',
                          display: 'flex', flexDirection: 'column',
                          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                          transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.25s ease',
                          animation: `cxSlideIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both ${idx * 0.05}s`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-6px)'
                          e.currentTarget.style.boxShadow = `0 14px 40px rgba(38,77,228,0.15)`
                          e.currentTarget.style.borderColor = accent
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = ''
                          e.currentTarget.style.boxShadow = ''
                          e.currentTarget.style.borderColor = ''
                        }}
                      >
                        {/* Card head */}
                        <div style={{
                          display: 'flex', alignItems: 'flex-start', gap: '0.85rem',
                          padding: '1.1rem 1.25rem',
                          borderBottom: '1px solid var(--color-border-soft)',
                          background: 'linear-gradient(135deg, rgba(38,77,228,0.05), rgba(41,101,241,0.02))',
                          position: 'relative',
                        }}>
                          {/* Top accent line */}
                          <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                            background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
                          }} />

                          {/* Icon */}
                          <div style={{
                            width: 38, height: 38,
                            borderRadius: '8px',
                            background: `${accent}15`,
                            border: `1px solid ${accent}30`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '1.1rem', color: accent, flexShrink: 0,
                            transition: 'background 0.2s ease, color 0.2s ease, transform 0.2s ease',
                          }}>
                            <i className={cat.icon || 'bi bi-code-slash'} />
                          </div>

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <h3 style={{
                              fontSize: '0.95rem', fontWeight: 700,
                              color: 'var(--color-text)', margin: '0 0 0.2rem',
                              lineHeight: 1.3,
                            }}>{cat.name}</h3>
                            {cat.description && (
                              <p style={{
                                fontSize: '0.75rem',
                                color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5,
                              }}>{cat.description}</p>
                            )}
                          </div>

                          <span style={{
                            flexShrink: 0,
                            fontSize: '0.72rem', fontWeight: 800,
                            color: accent,
                            background: `${accent}15`,
                            padding: '0.22rem 0.6rem',
                            borderRadius: '9999px',
                            alignSelf: 'flex-start',
                            whiteSpace: 'nowrap',
                          }}>
                            {cat.tags.length}
                          </span>
                        </div>

                        {/* Tags */}
                        <div style={{
                          padding: '1rem 1.25rem',
                          display: 'flex', flexWrap: 'wrap', gap: '0.45rem',
                          alignItems: 'flex-start',
                        }}>
                          {cat.tags.map((tag) => (
                            <Link
                              key={tag.name}
                              to={`/css-course/property/${tag.name}`}
                              title={tag.description}
                              style={{
                                display: 'inline-flex', alignItems: 'center',
                                padding: '0.28rem 0.65rem',
                                borderRadius: '7px',
                                background: 'var(--color-bg)',
                                border: '1px solid var(--color-border-soft)',
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.78rem', fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                textDecoration: 'none',
                                transition: 'all 0.15s ease',
                                position: 'relative',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = accent
                                e.currentTarget.style.color = '#fff'
                                e.currentTarget.style.borderColor = accent
                                e.currentTarget.style.transform = 'translateY(-2px)'
                                e.currentTarget.style.boxShadow = `0 4px 12px ${accent}45`
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = ''
                                e.currentTarget.style.color = ''
                                e.currentTarget.style.borderColor = ''
                                e.currentTarget.style.transform = ''
                                e.currentTarget.style.boxShadow = ''
                              }}
                            >
                              <span style={{ opacity: 0.5 }}>&lt;</span>
                              {tag.name}
                              <span style={{ opacity: 0.5 }}>&gt;</span>
                              {tag.workable && (
                                <span style={{
                                  width: 6, height: 6,
                                  borderRadius: '50%',
                                  background: accent,
                                  marginLeft: '0.25rem',
                                  flexShrink: 0,
                                  boxShadow: `0 0 5px ${accent}`,
                                }} />
                              )}
                            </Link>
                          ))}
                        </div>
                      </article>
                    )
                  })}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════════════ ALPHABETICAL ═══════════════════ */}
        {(activeView === 'alpha' || lower) && (
          <section style={{
            padding: '4rem 2rem 5rem',
            background: 'var(--color-bg-alt)',
            transition: 'background 0.3s ease',
          }} id="alphabetical">
            <div style={{ maxWidth: '1260px', margin: '0 auto' }}>

              {/* Section header */}
              <div style={{
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between', gap: '1.5rem',
                marginBottom: '2.5rem', flexWrap: 'wrap',
              }}>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                    fontWeight: 800, margin: '0 0 0.4rem',
                    color: 'var(--color-text)',
                    letterSpacing: '-0.025em',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                  }}>
                    <i className="bi bi-sort-alpha-down" style={{ color: P, fontSize: '1.1em' }} />
                    {lower ? `Properties matching "${searchTerm}"` : 'All CSS Properties — A to Z'}
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Complete alphabetical listing. Click any property to open its reference.
                  </p>
                </div>
                {!lower && (
                  <span style={{
                    padding: '0.38rem 0.95rem',
                    background: 'rgba(38,77,228,0.08)',
                    border: '1px solid rgba(38,77,228,0.15)',
                    borderRadius: '9999px',
                    fontSize: '0.75rem', fontWeight: 700, color: P,
                    letterSpacing: '0.03em', whiteSpace: 'nowrap',
                    alignSelf: 'flex-start',
                  }}>
                    {totalTags} properties
                  </span>
                )}
              </div>

              {filteredAlpha.length === 0 ? (
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '1rem', padding: '4rem 2rem', textAlign: 'center',
                  color: 'var(--color-text-muted)',
                }}>
                  <i className="bi bi-search" style={{ fontSize: '3rem', color: 'rgba(38,77,228,0.12)' }} />
                  <p style={{ margin: 0 }}>
                    No properties match <strong style={{ color: P }}>"{searchTerm}"</strong>
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                      padding: '0.6rem 1.4rem', borderRadius: '9999px', border: 'none',
                      background: 'linear-gradient(135deg, #264de4, #2965f1)',
                      color: '#fff', fontFamily: 'inherit', fontSize: '0.875rem', fontWeight: 700,
                      cursor: 'pointer', boxShadow: '0 4px 14px rgba(38,77,228,0.28)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
                  >
                    <i className="bi bi-arrow-counterclockwise" />
                    Reset Search
                  </button>
                </div>
              ) : lower ? (
                /* Flat grid for search */
                <ul style={{
                  listStyle: 'none', padding: 0, margin: 0,
                  display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                }}>
                  {filteredAlpha.map((tag) => (
                    <li key={tag.name}>
                      <Link
                        to={`/css-course/property/${tag.name}`}
                        title={tag.description}
                        style={{
                          display: 'inline-flex', alignItems: 'center',
                          padding: '0.4rem 0.9rem',
                          borderRadius: '10px',
                          background: 'var(--color-card)',
                          border: '1.5px solid rgba(38,77,228,0.13)',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.82rem', fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          textDecoration: 'none',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = P
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.borderColor = P
                          e.currentTarget.style.transform = 'translateY(-3px)'
                          e.currentTarget.style.boxShadow = '0 5px 14px rgba(38,77,228,0.30)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = ''
                          e.currentTarget.style.color = ''
                          e.currentTarget.style.borderColor = ''
                          e.currentTarget.style.transform = ''
                          e.currentTarget.style.boxShadow = ''
                        }}
                      >
                        <span style={{ opacity: 0.45, marginRight: 1 }}>&lt;</span>
                        {tag.name}
                        <span style={{ opacity: 0.45, marginLeft: 1 }}>&gt;</span>
                        {tag.workable && (
                          <span style={{
                            width: 6, height: 6,
                            borderRadius: '50%', background: P,
                            marginLeft: '0.3rem', flexShrink: 0,
                          }} />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                /* Letter-grouped layout */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                  {/* Letter jump bar */}
                  <nav aria-label="Jump to letter" style={{
                    display: 'flex', flexWrap: 'wrap', gap: '0.35rem',
                    padding: '1rem 1.25rem',
                    background: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '16px',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  }}>
                    {letters.map((l) => (
                      <button
                        key={l}
                        onClick={() => document.getElementById(`letter-${l}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                        aria-label={`Jump to letter ${l}`}
                        style={{
                          width: 36, height: 36,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          borderRadius: '7px',
                          border: '1px solid var(--color-border-soft)',
                          background: 'var(--color-bg)',
                          fontFamily: 'inherit',
                          fontSize: '0.82rem', fontWeight: 700,
                          color: 'var(--color-text-muted)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = P
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.borderColor = P
                          e.currentTarget.style.transform = 'scale(1.12)'
                          e.currentTarget.style.boxShadow = '0 3px 10px rgba(38,77,228,0.28)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = ''
                          e.currentTarget.style.color = ''
                          e.currentTarget.style.borderColor = ''
                          e.currentTarget.style.transform = ''
                          e.currentTarget.style.boxShadow = ''
                        }}
                      >
                        {l}
                      </button>
                    ))}
                  </nav>

                  {/* Letter groups */}
                  {letters.map((letter) => (
                    <div
                      key={letter}
                      id={`letter-${letter}`}
                      style={{ scrollMarginTop: '140px' }}
                    >
                      <div style={{
                        fontSize: '1.6rem', fontWeight: 900,
                        color: P, marginBottom: '0.85rem',
                        letterSpacing: '-0.03em', lineHeight: 1,
                        position: 'relative', paddingBottom: '0.4rem',
                      }}>
                        {letter}
                        <div style={{
                          position: 'absolute', bottom: 0, left: 0,
                          width: 36, height: 3,
                          background: 'linear-gradient(90deg, #264de4, #2965f1)',
                          borderRadius: 2,
                        }} />
                      </div>
                      <ul style={{
                        listStyle: 'none', padding: 0, margin: 0,
                        display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                      }}>
                        {groupedAlpha[letter].map((tag) => (
                          <li key={tag.name}>
                            <Link
                              to={`/css-course/property/${tag.name}`}
                              title={tag.description}
                              style={{
                                display: 'inline-flex', alignItems: 'center',
                                padding: '0.4rem 0.9rem',
                                borderRadius: '10px',
                                background: 'var(--color-card)',
                                border: '1.5px solid var(--color-border)',
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.82rem', fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                textDecoration: 'none',
                                transition: 'all 0.15s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = P
                                e.currentTarget.style.color = '#fff'
                                e.currentTarget.style.borderColor = P
                                e.currentTarget.style.transform = 'translateY(-3px)'
                                e.currentTarget.style.boxShadow = '0 5px 14px rgba(38,77,228,0.30)'
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = ''
                                e.currentTarget.style.color = ''
                                e.currentTarget.style.borderColor = ''
                                e.currentTarget.style.transform = ''
                                e.currentTarget.style.boxShadow = ''
                              }}
                            >
                              <span style={{ opacity: 0.45, marginRight: 1 }}>&lt;</span>
                              {tag.name}
                              <span style={{ opacity: 0.45, marginLeft: 1 }}>&gt;</span>
                              {tag.workable && (
                                <span style={{
                                  width: 6, height: 6,
                                  borderRadius: '50%', background: P,
                                  marginLeft: '0.3rem', flexShrink: 0,
                                  boxShadow: `0 0 5px ${P}80`,
                                }} />
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════════════ CTA STRIP ═══════════════════ */}
        {!lower && (
          <section style={{
            padding: '3rem 2rem',
            background: 'var(--color-bg)',
            borderTop: '1px solid var(--color-border-soft)',
            transition: 'background 0.3s ease',
          }}>
            <div style={{
              maxWidth: '1260px', margin: '0 auto',
              display: 'flex', alignItems: 'center', gap: '1.75rem',
              padding: '2rem 2.5rem',
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              borderRadius: '26px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden',
              flexWrap: 'wrap',
            }}>
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(38,77,228,0.06), transparent)',
                pointerEvents: 'none',
              }} />
              {/* Top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'linear-gradient(90deg, #264de4, #2965f1, #42a1d0)',
              }} />

              {/* Icon */}
              <div style={{
                position: 'relative', zIndex: 1,
                width: 56, height: 56, borderRadius: '14px',
                background: 'linear-gradient(135deg, #264de4, #2965f1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', color: '#fff', flexShrink: 0,
                boxShadow: '0 4px 14px rgba(38,77,228,0.30)',
              }}>
                <i className="bi bi-terminal-fill" />
              </div>

              {/* Text */}
              <div style={{ position: 'relative', zIndex: 1, flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text)', margin: '0 0 0.3rem' }}>
                  Ready to practise your CSS?
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.6 }}>
                  Open the live playground and write HTML, CSS, and JavaScript with instant preview.
                </p>
              </div>

              {/* Buttons */}
              <div style={{
                position: 'relative', zIndex: 1,
                display: 'flex', gap: '0.75rem', flexShrink: 0, flexWrap: 'wrap',
              }}>
                {[
                  { to: '/compiler', icon: 'bi bi-terminal-fill', label: 'Open Playground', primary: true },
                  { to: '/', icon: 'bi bi-house-door-fill', label: 'Back to Home', primary: false },
                ].map((btn) => (
                  <Link
                    key={btn.to}
                    to={btn.to}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
                      padding: '0.65rem 1.3rem',
                      borderRadius: '9999px',
                      background: btn.primary ? 'linear-gradient(135deg, #264de4, #2965f1)' : 'none',
                      border: btn.primary ? 'none' : '1.5px solid var(--color-border)',
                      color: btn.primary ? '#fff' : 'var(--color-text-muted)',
                      fontSize: '0.875rem', fontWeight: 700,
                      textDecoration: 'none',
                      boxShadow: btn.primary ? '0 4px 14px rgba(38,77,228,0.30)' : 'none',
                      transition: 'all 0.15s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (btn.primary) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(38,77,228,0.40)'; }
                      else { e.currentTarget.style.borderColor = P; e.currentTarget.style.color = P; e.currentTarget.style.background = 'rgba(38,77,228,0.06)'; }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.boxShadow = btn.primary ? '0 4px 14px rgba(38,77,228,0.30)' : 'none'
                      if (!btn.primary) { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; }
                    }}
                  >
                    <i className={btn.icon} />
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>



      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem',
          width: 46, height: 46, borderRadius: '50%', border: 'none',
          background: 'linear-gradient(135deg, #264de4, #2965f1)',
          color: '#fff', fontSize: '1.15rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', zIndex: 900,
          boxShadow: '0 4px 16px rgba(38,77,228,0.30)',
          opacity: showBackTop ? 1 : 0,
          pointerEvents: showBackTop ? 'auto' : 'none',
          transform: showBackTop ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
          transition: 'opacity 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(38,77,228,0.40)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 16px rgba(38,77,228,0.30)'; }}
      >
        <i className="bi bi-arrow-up" />
      </button>
    </div>
  )
}
