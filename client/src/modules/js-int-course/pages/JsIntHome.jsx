import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import JsIntNavbar, { useDarkMode } from '../components/JsIntNavbar'
import JsIntFooter from '../components/JsIntFooter'
import { jsIntData, getAllTopics } from '../data/jsIntData'
import '../styles/JsIntHome.css'

/* ─────────────────────────────────────────────────────────────────────────────
   CODE WINDOW  — tokenised lines for syntax-coloured display
   cls prefixes: code-cm=comment, code-kw=keyword, code-fn=function,
                 code-id=identifier, code-str=string, code-pn=punctuation,
                 code-op=operator
───────────────────────────────────────────────────────────────────────────── */
const CODE_LINES = [
  {
    indent: 0,
    parts: [{ cls: 'code-cm', t: '// JS Intermediate in My Style' }],
  },
  {
    indent: 0,
    parts: [
      { cls: 'code-kw', t: 'const ' },
      { cls: 'code-fn', t: 'fetchData' },
      { cls: 'code-pn', t: ' = ' },
      { cls: 'code-kw', t: 'async ' },
      { cls: 'code-pn', t: '(' },
      { cls: 'code-id', t: 'url' },
      { cls: 'code-pn', t: ') => {' },
    ],
  },
  {
    indent: 1,
    parts: [
      { cls: 'code-kw', t: 'try' },
      { cls: 'code-pn', t: ' {' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'code-kw', t: 'const ' },
      { cls: 'code-id', t: 'res' },
      { cls: 'code-pn', t: ' = ' },
      { cls: 'code-kw', t: 'await ' },
      { cls: 'code-fn', t: 'fetch' },
      { cls: 'code-pn', t: '(' },
      { cls: 'code-id', t: 'url' },
      { cls: 'code-pn', t: ');' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'code-kw', t: 'const ' },
      { cls: 'code-id', t: 'data' },
      { cls: 'code-pn', t: ' = ' },
      { cls: 'code-kw', t: 'await ' },
      { cls: 'code-id', t: 'res' },
      { cls: 'code-pn', t: '.' },
      { cls: 'code-fn', t: 'json' },
      { cls: 'code-pn', t: '();' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'code-kw', t: 'return ' },
      { cls: 'code-id', t: 'data' },
      { cls: 'code-pn', t: '.' },
      { cls: 'code-fn', t: 'map' },
      { cls: 'code-pn', t: '(' },
      { cls: 'code-id', t: 'item' },
      { cls: 'code-pn', t: ' => ({' },
    ],
  },
  {
    indent: 3,
    parts: [
      { cls: 'code-op', t: '...' },
      { cls: 'code-id', t: 'item' },
      { cls: 'code-pn', t: ',' },
    ],
  },
  {
    indent: 3,
    parts: [
      { cls: 'code-id', t: 'processed' },
      { cls: 'code-pn', t: ': ' },
      { cls: 'code-kw', t: 'true' },
    ],
  },
  {
    indent: 2,
    parts: [{ cls: 'code-pn', t: '}));' }],
  },
  {
    indent: 1,
    parts: [
      { cls: 'code-kw', t: '} catch ' },
      { cls: 'code-pn', t: '(' },
      { cls: 'code-id', t: 'err' },
      { cls: 'code-pn', t: ') {' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'code-id', t: 'console' },
      { cls: 'code-pn', t: '.' },
      { cls: 'code-fn', t: 'error' },
      { cls: 'code-pn', t: '(' },
      { cls: 'code-str', t: "'Fetch error:'" },
      { cls: 'code-pn', t: ', ' },
      { cls: 'code-id', t: 'err' },
      { cls: 'code-pn', t: ');' },
    ],
  },
  {
    indent: 1,
    parts: [{ cls: 'code-pn', t: '}' }],
  },
  {
    indent: 0,
    parts: [{ cls: 'code-pn', t: '};' }],
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   STATS
───────────────────────────────────────────────────────────────────────────── */
const STATS = [
  { icon: 'bi bi-grid-3x3-gap-fill',    value: '11',   label: 'Categories' },
  { icon: 'bi bi-book-fill',             value: '44+',  label: 'Topics'     },
  { icon: 'bi bi-lightning-charge-fill', value: 'Live', label: 'Examples'   },
  { icon: 'bi bi-gift-fill',             value: '100%', label: 'Free'       },
]

/* ─────────────────────────────────────────────────────────────────────────────
   NAVIGATION FEATURE CARDS
───────────────────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon:  'bi bi-house-door-fill',
    title: 'JsIntHome',
    desc:  'Start here — get an overview of the course and what you will master.',
    link:  '/js-int-course/',
  },
  {
    icon:  'bi bi-braces',
    title: 'JS Reference',
    desc:  'Browse all 44+ intermediate JavaScript topics, organized by category.',
    link:  '/js-int-course/js-int',
  },
  {
    icon:  'bi bi-journal-code',
    title: 'JsIntResources',
    desc:  'Curated books, official docs, cheat-sheets and tools for deeper learning.',
    link:  '/js-int-course/resources',
  },
  {
    icon:  'bi bi-terminal-fill',
    title: 'Playground',
    desc:  'Live JS editor with instant in-browser execution — test any idea fast.',
    link:  '/js-int-course/compiler',
  },
  {
    icon:  'bi bi-people-fill',
    title: "Let's JsIntConnect",
    desc:  'Join the community on YouTube, Instagram, Telegram and more.',
    link:  '/js-int-course/connect',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   WHY JS INTERMEDIATE
───────────────────────────────────────────────────────────────────────────── */
const WHY_FEATURES = [
  {
    icon:  'bi bi-patch-check-fill',
    title: 'Real-World Patterns',
    desc:  'Every topic is taught through practical, production-ready code patterns you will actually use on the job.',
  },
  {
    icon:  'bi bi-stars',
    title: 'Modern ES6+',
    desc:  'Stay current with destructuring, spread, arrow functions, modules, and all of modern JavaScript syntax.',
  },
  {
    icon:  'bi bi-clock-fill',
    title: 'Async Mastery',
    desc:  'From setTimeout to Promises to async/await — understand asynchronous JavaScript from top to bottom.',
  },
  {
    icon:  'bi bi-globe2',
    title: 'DOM & APIs',
    desc:  'Build dynamic UIs with DOM manipulation, event delegation, the Fetch API, and browser storage APIs.',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   HOME COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function JsIntHome() {
  const { dark }                        = useDarkMode()
  const navigate                        = useNavigate()
  const [heroVisible,  setHeroVisible]  = useState(false)
  const [showBackTop,  setShowBackTop]  = useState(false)

  const categories = jsIntData.categories

  /* ── hero fade-in on mount ── */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* ── back-to-top visibility ── */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 450)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="jsint-home-page">
      <JsIntNavbar />

      <main id="main-content">

        {/* ══════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════ */}
        <section
          className={`home-hero${heroVisible ? ' home-hero--in' : ''}`}
          aria-labelledby="home-hero-heading"
        >
          {/* decorative glows */}
          <div className="home-hero__glow home-hero__glow--1" aria-hidden="true" />
          <div className="home-hero__glow home-hero__glow--2" aria-hidden="true" />
          <div className="home-hero__glow home-hero__glow--3" aria-hidden="true" />

          <div className="home-hero__inner">

            {/* ── Left: text content ── */}
            <div className="home-hero-content">

              <div className="home-hero-badge">
                <i className="bi bi-stars" aria-hidden="true" />
                <span>JavaScript Intermediate Course</span>
              </div>

              <h1 className="home-hero-title" id="home-hero-heading">
                Master<br />
                <span className="home-hero-yellow">JavaScript</span>
              </h1>

              <p className="home-hero-level">INTERMEDIATE</p>

              <p className="home-hero-desc">
                Level up with ES6+, Async JS, DOM APIs, Closures, Fetch,
                and more — built for real development.
              </p>

              <div className="home-hero-actions">
                <Link to="/js-int-course/js-int" className="home-cta-btn">
                  Start Learning
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
                <Link to="/js-int-course/compiler" className="home-cta-btn outline">
                  <i className="bi bi-terminal-fill" aria-hidden="true" />
                  Try Playground
                </Link>
              </div>

              <div className="home-hero-trust">
                <span className="home-hero-trust-item">
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  No signup needed
                </span>
                <span className="home-hero-trust-item">
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  100% free forever
                </span>
                <span className="home-hero-trust-item">
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  Live code examples
                </span>
              </div>
            </div>

            {/* ── Right: animated code window ── */}
            <div className="home-code-window-wrap">
              <div className="home-code-window">

                {/* traffic-light bar */}
                <div className="home-code-bar">
                  <span className="home-code-dot dot-red"    aria-hidden="true" />
                  <span className="home-code-dot dot-yellow" aria-hidden="true" />
                  <span className="home-code-dot dot-green"  aria-hidden="true" />
                  <span className="home-code-filename">
                    <i className="bi bi-filetype-js" aria-hidden="true" />
                    fetchData.js
                  </span>
                </div>

                {/* code lines */}
                <div
                  className="home-code-body"
                  aria-label="JavaScript async/await code example"
                  role="img"
                >
                  {CODE_LINES.map((line, i) => (
                    <div
                      key={i}
                      className="home-code-line"
                      style={{ animationDelay: `${0.28 + i * 0.055}s` }}
                    >
                      <span className="home-line-num" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span
                        className="home-line-content"
                        style={{ paddingLeft: `${line.indent * 1.5}rem` }}
                      >
                        {line.parts.map((p, j) => (
                          <span key={j} className={p.cls}>{p.t}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* floating async badge */}
              <div className="home-code-float" aria-hidden="true">
                <i className="bi bi-lightning-charge-fill" />
                <span>async / await</span>
              </div>
            </div>
          </div>

          {/* ── Stats row ── */}
          <div className="home-stats" aria-label="Course statistics">
            {STATS.map((s) => (
              <div key={s.label} className="home-stat-pill">
                <i className={s.icon} aria-hidden="true" />
                <span className="home-stat-value">{s.value}</span>
                <span className="home-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FEATURES STRIP
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="home-features-section"
          aria-labelledby="home-features-heading"
        >
          <div className="home-section-inner">

            <h2 className="home-section-title" id="home-features-heading">
              <i className="bi bi-compass-fill" aria-hidden="true" />
              Explore the Course
            </h2>

            <div className="home-features" role="list">
              {FEATURES.map((f, i) => (
                <Link
                  key={f.title}
                  to={f.link}
                  className="home-feature-card"
                  role="listitem"
                  style={{ animationDelay: `${i * 0.08}s` }}
                  aria-label={f.title}
                >
                  <div className="home-feature-icon" aria-hidden="true">
                    <i className={f.icon} />
                  </div>
                  <h3 className="home-feature-title">{f.title}</h3>
                  <p className="home-feature-desc">{f.desc}</p>
                  <span className="home-feature-cta" aria-hidden="true">
                    Open <i className="bi bi-arrow-right-short" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            TOPICS OVERVIEW GRID
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="home-topics-section"
          id="topics"
          aria-labelledby="home-topics-heading"
        >
          <div className="home-section-inner">

            <div className="home-section-header">
              <div className="home-section-pill">
                <i className="bi bi-collection-fill" aria-hidden="true" />
                11 Categories
              </div>
              <h2
                className="home-section-title--centered"
                id="home-topics-heading"
              >
                Explore All Topic Categories
              </h2>
              <p className="home-section-desc">
                From advanced data types to the Fetch API — every intermediate
                JavaScript concept, organized and instantly accessible.
              </p>
            </div>

            <div className="home-topics-grid">
              {categories.map((cat, i) => (
                <Link
                  key={cat.name}
                  to={`/js-int/${cat.tags[0].name}`}
                  className="home-topic-card"
                  style={{ animationDelay: `${i * 0.06}s` }}
                  aria-label={`${cat.name} — ${cat.tags.length} topics`}
                >
                  <div className="home-topic-icon" aria-hidden="true">
                    <i className={cat.icon} />
                  </div>
                  <div className="home-topic-meta">
                    <span className="home-topic-count">
                      {cat.tags.length}
                      {' '}
                      {cat.tags.length === 1 ? 'topic' : 'topics'}
                    </span>
                  </div>
                  <h3 className="home-topic-name">{cat.name}</h3>
                  <p className="home-topic-desc">{cat.description}</p>
                  <span className="home-topic-cta" aria-hidden="true">
                    Explore <i className="bi bi-arrow-right-short" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            WHY JS INTERMEDIATE?
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="home-why-section"
          aria-labelledby="home-why-heading"
        >
          <div className="home-section-inner">

            <div className="home-section-header">
              <div className="home-section-pill">
                <i className="bi bi-award-fill" aria-hidden="true" />
                Why This Course
              </div>
              <h2
                className="home-section-title--centered"
                id="home-why-heading"
              >
                Why JS Intermediate?
              </h2>
              <p className="home-section-desc">
                This is not just a reference — it is a structured path from
                JavaScript basics to production-ready, modern development.
              </p>
            </div>

            <div className="home-why-grid">
              {WHY_FEATURES.map((w, i) => (
                <div
                  key={w.title}
                  className="home-why-card"
                  style={{ animationDelay: `${i * 0.10}s` }}
                >
                  <div className="home-why-icon" aria-hidden="true">
                    <i className={w.icon} />
                  </div>
                  <h3 className="home-why-title">{w.title}</h3>
                  <p className="home-why-desc">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CTA BANNER
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="home-cta-banner"
          aria-labelledby="home-cta-heading"
        >
          <div className="home-cta-banner-inner">
            <div className="home-cta-banner-icon" aria-hidden="true">
              <i className="bi bi-lightning-charge-fill" />
            </div>
            <h2
              className="home-cta-banner-title"
              id="home-cta-heading"
            >
              Ready to level up?
            </h2>
            <p className="home-cta-banner-desc">
              Dive into 44+ intermediate JavaScript topics with live code
              examples, clear explanations, and a built-in playground.
            </p>
            <Link to="/js-int-course/js-int" className="home-cta-banner-btn">
              Browse All Topics
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </section>

      </main>

      <JsIntFooter />

      {/* ── floating back-to-top ── */}
      {showBackTop && (
        <button
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top of page"
          title="Back to top"
          type="button"
        >
          <i className="bi bi-chevron-up" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
