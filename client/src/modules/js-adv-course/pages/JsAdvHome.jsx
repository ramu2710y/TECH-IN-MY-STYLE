import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import JsAdvNavbar, { useDarkMode } from '../components/JsAdvNavbar'
import JsAdvFooter from '../components/JsAdvFooter'
import JsAdvTopicsData from '../data/JsAdvTopicsData'
import '../styles/JsAdvHome.css'

/* ─────────────────────────────────────────────────────────────────────────────
   HERO CODE WINDOW — tokenised lines for syntax-coloured display
   CSS classes: hl-keyword (yellow), hl-string (green), hl-comment (gray italic),
                hl-number (cyan), hl-fn (blue), hl-punct (white/muted)
───────────────────────────────────────────────────────────────────────────── */
const CODE_LINES = [
  {
    indent: 0,
    parts: [{ cls: 'hl-comment', t: '// Advanced JavaScript Patterns' }],
  },
  {
    indent: 0,
    parts: [
      { cls: 'hl-keyword', t: 'const ' },
      { cls: 'hl-fn',      t: 'createCounter' },
      { cls: 'hl-punct',   t: ' = (' },
      { cls: 'hl-punct',   t: 'start' },
      { cls: 'hl-punct',   t: ' = ' },
      { cls: 'hl-number',  t: '0' },
      { cls: 'hl-punct',   t: ') => {' },
    ],
  },
  {
    indent: 1,
    parts: [
      { cls: 'hl-keyword', t: 'let ' },
      { cls: 'hl-punct',   t: 'count = start;' },
    ],
  },
  {
    indent: 1,
    parts: [
      { cls: 'hl-keyword', t: 'return ' },
      { cls: 'hl-punct',   t: '{' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'hl-fn',    t: 'increment' },
      { cls: 'hl-punct', t: ': () => ++count,' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'hl-fn',    t: 'decrement' },
      { cls: 'hl-punct', t: ': () => --count,' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'hl-fn',    t: 'getCount' },
      { cls: 'hl-punct', t: ': () => count,' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'hl-fn',    t: 'reset' },
      { cls: 'hl-punct', t: ': () => { count = start; }' },
    ],
  },
  {
    indent: 1,
    parts: [{ cls: 'hl-punct', t: '};' }],
  },
  {
    indent: 0,
    parts: [{ cls: 'hl-punct', t: '};' }],
  },
  {
    indent: 0,
    parts: [
      { cls: 'hl-keyword', t: 'const ' },
      { cls: 'hl-punct',   t: 'counter = ' },
      { cls: 'hl-fn',      t: 'createCounter' },
      { cls: 'hl-punct',   t: '(' },
      { cls: 'hl-number',  t: '10' },
      { cls: 'hl-punct',   t: ');' },
    ],
  },
  {
    indent: 0,
    parts: [
      { cls: 'hl-punct',   t: 'console.' },
      { cls: 'hl-fn',      t: 'log' },
      { cls: 'hl-punct',   t: '(counter.' },
      { cls: 'hl-fn',      t: 'increment' },
      { cls: 'hl-punct',   t: '()); ' },
      { cls: 'hl-comment', t: '// 11' },
    ],
  },
  {
    indent: 0,
    parts: [{ cls: 'hl-comment', t: '// Async/Await Pattern' }],
  },
  {
    indent: 0,
    parts: [
      { cls: 'hl-keyword', t: 'const ' },
      { cls: 'hl-fn',      t: 'fetchData' },
      { cls: 'hl-punct',   t: ' = ' },
      { cls: 'hl-keyword', t: 'async ' },
      { cls: 'hl-punct',   t: '(url) => {' },
    ],
  },
  {
    indent: 1,
    parts: [
      { cls: 'hl-keyword', t: 'try ' },
      { cls: 'hl-punct',   t: '{' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'hl-keyword', t: 'const ' },
      { cls: 'hl-punct',   t: 'res = ' },
      { cls: 'hl-keyword', t: 'await ' },
      { cls: 'hl-fn',      t: 'fetch' },
      { cls: 'hl-punct',   t: '(url);' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'hl-keyword', t: 'return ' },
      { cls: 'hl-keyword', t: 'await ' },
      { cls: 'hl-punct',   t: 'res.' },
      { cls: 'hl-fn',      t: 'json' },
      { cls: 'hl-punct',   t: '();' },
    ],
  },
  {
    indent: 1,
    parts: [
      { cls: 'hl-punct',   t: '} ' },
      { cls: 'hl-keyword', t: 'catch ' },
      { cls: 'hl-punct',   t: '(err) {' },
    ],
  },
  {
    indent: 2,
    parts: [
      { cls: 'hl-keyword', t: 'throw ' },
      { cls: 'hl-keyword', t: 'new ' },
      { cls: 'hl-fn',      t: 'Error' },
      { cls: 'hl-punct',   t: '(err.' },
      { cls: 'hl-fn',      t: 'message' },
      { cls: 'hl-punct',   t: ');' },
    ],
  },
  {
    indent: 1,
    parts: [{ cls: 'hl-punct', t: '}' }],
  },
  {
    indent: 0,
    parts: [{ cls: 'hl-punct', t: '};' }],
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   STATS — animated counters
───────────────────────────────────────────────────────────────────────────── */
const STATS = [
  { icon: 'bi bi-book-fill',             end: 54,  suffix: '+',  label: 'JsAdvTopics'   },
  { icon: 'bi bi-grid-3x3-gap-fill',     end: 13,  suffix: '',   label: 'Modules'  },
  { icon: 'bi bi-layers-fill',           end: 5,   suffix: '',   label: 'JsAdvProjects' },
  { icon: 'bi bi-people-fill',           end: 10,  suffix: 'K+', label: 'Learners' },
]

/* ─────────────────────────────────────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    icon:  'bi bi-terminal-fill',
    title: 'Live Code Editor',
    desc:  'Write, run, and test JavaScript directly in your browser — no setup needed.',
    link:  '/js-adv-course/compiler',
    color: 'cyan',
  },
  {
    icon:  'bi bi-graph-up-arrow',
    title: 'Progress Tracking',
    desc:  'Monitor your learning journey and see how far you have come.',
    link:  '/js-adv-course/dashboard',
    color: 'purple',
  },
  {
    icon:  'bi bi-layers-fill',
    title: 'Real JsAdvProjects',
    desc:  'Build production-grade JavaScript applications that solidify every concept.',
    link:  '/js-adv-course/projects',
    color: 'orange',
  },
  {
    icon:  'bi bi-journal-code',
    title: 'All JsAdvResources',
    desc:  'Curated books, official docs, cheat-sheets and reference tools.',
    link:  '/js-adv-course/resources',
    color: 'green',
  },
  {
    icon:  'bi bi-people-fill',
    title: 'Community',
    desc:  'JsAdvConnect, share, and grow alongside thousands of fellow JS developers.',
    link:  '/js-adv-course/connect',
    color: 'pink',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    quote:  'The closures and prototype sections completely transformed how I think about JavaScript. Incredibly clear and practical.',
    author: 'Priya M.',
    role:   'Frontend Developer',
  },
  {
    quote:  'Finally understood the event loop and async/await deeply after years of confusion. The code examples here are perfection.',
    author: 'Rahul K.',
    role:   'Full-Stack Engineer',
  },
  {
    quote:  'Design patterns section is pure gold. I apply what I learned here every single day at work. Absolutely 10 out of 10.',
    author: 'Sarah L.',
    role:   'Software Architect',
  },
  {
    quote:  'The live compiler is a game changer — I can practice advanced concepts right in the browser without any environment setup.',
    author: 'Ahmed R.',
    role:   'JavaScript Enthusiast',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED COUNTER  (IntersectionObserver-driven)
───────────────────────────────────────────────────────────────────────────── */
function AnimatedCounter({ end, suffix, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let frame = 0
    const totalFrames = 80
    const timer = setInterval(() => {
      frame += 1
      const progress = frame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)      // ease-out cubic
      setCount(Math.floor(eased * end))
      if (frame >= totalFrames) {
        setCount(end)
        clearInterval(timer)
      }
    }, 20)
    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}

/* ═════════════════════════════════════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════════════════════════════════════= */
export default function JsAdvHome() {
  const { dark }                              = useDarkMode()
  const [heroVisible,  setHeroVisible]        = useState(false)
  const [showBackTop,  setShowBackTop]        = useState(false)
  const [statsVisible, setStatsVisible]       = useState(false)
  const statsRef                              = useRef(null)

  const modules = JsAdvTopicsData.modules || []

  /* ── Hero entrance animation ── */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* ── Back-to-top visibility ── */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Stats counter IntersectionObserver ── */
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  /* ── Render ── */
  return (
    <div className="home">
      <JsAdvNavbar />

      <main id="main-content">

        {/* ══════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════ */}
        <section
          className={`jsadv-hero${heroVisible ? ' jsadv-hero--visible' : ''}`}
          aria-labelledby="jsadv-hero-heading"
        >
          {/* Decorative animated blobs */}
          <div className="jsadv-hero__blob jsadv-hero__blob--1" aria-hidden="true" />
          <div className="jsadv-hero__blob jsadv-hero__blob--2" aria-hidden="true" />
          <div className="jsadv-hero__blob jsadv-hero__blob--3" aria-hidden="true" />

          <div className="container">
            <div className="jsadv-hero__inner">

              {/* ── Left : text content ── */}
              <div className="jsadv-hero__content">

                <div className="jsadv-hero__badge">
                  <i className="bi bi-lightning-fill" aria-hidden="true" />
                  <span>⚡ Advanced JavaScript</span>
                </div>

                <h1 className="jsadv-hero__title" id="jsadv-hero-heading">
                  Welcome to{' '}
                  <span className="jsadv-hero__title-brand">JS.ADV</span>
                  <br />
                  IN MY STYLE
                </h1>

                <p className="jsadv-hero__subtitle">
                  Master Enterprise-Level JavaScript
                </p>

                <p className="jsadv-hero__desc">
                  Go beyond the basics. Deep dive into closures, prototypes,
                  design patterns, async mastery, functional programming, and
                  the architecture patterns used in real production JavaScript.
                </p>

                <div className="jsadv-hero__actions">
                  <Link to="/js-adv-course/topics" className="jsadv-btn jsadv-btn--primary">
                    Start Learning
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                  <a href="#topics-section" className="jsadv-btn jsadv-btn--ghost">
                    Explore JsAdvTopics
                    <i className="bi bi-chevron-down" aria-hidden="true" />
                  </a>
                </div>

                <div className="jsadv-hero__trust">
                  <span className="jsadv-hero__trust-item">
                    <i className="bi bi-check-circle-fill" aria-hidden="true" />
                    Free forever
                  </span>
                  <span className="jsadv-hero__trust-item">
                    <i className="bi bi-check-circle-fill" aria-hidden="true" />
                    No signup
                  </span>
                  <span className="jsadv-hero__trust-item">
                    <i className="bi bi-check-circle-fill" aria-hidden="true" />
                    Learn at your pace
                  </span>
                </div>

              </div>

              {/* ── Right : animated code window ── */}
              <div className="jsadv-hero__code-wrap">
                <div className="jsadv-hero__code-window">

                  {/* Traffic-light bar */}
                  <div className="jsadv-hero__code-bar">
                    <span className="jsadv-hero__dot jsadv-hero__dot--red"    aria-hidden="true" />
                    <span className="jsadv-hero__dot jsadv-hero__dot--yellow" aria-hidden="true" />
                    <span className="jsadv-hero__dot jsadv-hero__dot--green"  aria-hidden="true" />
                    <span className="jsadv-hero__code-filename">
                      <i className="bi bi-filetype-js" aria-hidden="true" />
                      advanced-patterns.js
                    </span>
                  </div>

                  {/* Code lines */}
                  <div
                    className="jsadv-hero__code-body"
                    role="img"
                    aria-label="JavaScript closures and async/await code example"
                  >
                    {CODE_LINES.map((line, i) => (
                      <div
                        key={i}
                        className="jsadv-hero__code-line"
                        style={{ animationDelay: `${0.3 + i * 0.055}s` }}
                      >
                        <span className="jsadv-hero__line-num" aria-hidden="true">
                          {i + 1}
                        </span>
                        <span
                          className="jsadv-hero__line-content"
                          style={{ paddingLeft: `${line.indent * 1.4}rem` }}
                        >
                          {line.parts.map((p, j) => (
                            <span key={j} className={p.cls}>
                              {p.t}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="jsadv-hero__float-badge" aria-hidden="true">
                  <i className="bi bi-stars" />
                  <span>Enterprise Patterns</span>
                </div>
              </div>

            </div>
          </div>

          {/* Scroll hint */}
          <div className="jsadv-hero__scroll-hint" aria-hidden="true">
            <span>Scroll to explore</span>
            <i className="bi bi-chevron-double-down" />
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            STATS — animated counters on scroll
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="jsadv-stats-section"
          ref={statsRef}
          aria-label="Course statistics"
        >
          <div className="container">
            <div className="jsadv-stats-grid">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`jsadv-stat-card${statsVisible ? ' jsadv-stat-card--in' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="jsadv-stat-card__icon" aria-hidden="true">
                    <i className={s.icon} />
                  </div>
                  <div
                    className="jsadv-stat-card__value"
                    aria-label={`${s.end}${s.suffix} ${s.label}`}
                  >
                    <AnimatedCounter
                      end={s.end}
                      suffix={s.suffix}
                      isVisible={statsVisible}
                    />
                  </div>
                  <div className="jsadv-stat-card__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            COURSES / MODULES GRID
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="jsadv-courses-section"
          id="topics-section"
          aria-labelledby="courses-heading"
        >
          <div className="container">

            <div className="jsadv-courses-section__header">
              <div className="jsadv-courses-section__pill">
                <i className="bi bi-collection-fill" aria-hidden="true" />
                13 Modules
              </div>
              <h2 className="jsadv-courses-section__title" id="courses-heading">
                What You Will Master
              </h2>
              <p className="jsadv-courses-section__desc">
                From closures and prototypes to design patterns, async mastery,
                and real-world JavaScript architecture — every advanced concept
                you need to write production-quality code.
              </p>
            </div>

            <div className="jsadv-courses-grid">
              {modules.slice(0, 12).map((mod, i) => (
                <Link
                  key={mod.id}
                  to="/js-adv-course/topics"
                  className="jsadv-course-card"
                  style={{
                    '--accent': mod.color,
                    animationDelay: `${i * 0.06}s`,
                  }}
                  aria-label={`${mod.title} — ${mod.topics.length} topics`}
                >
                  <div
                    className="jsadv-course-card__icon"
                    style={{ color: mod.color }}
                    aria-hidden="true"
                  >
                    <i className={mod.icon} />
                  </div>

                  <div className="jsadv-course-card__meta">
                    <span className="jsadv-course-card__count">
                      {mod.topics.length}
                      {' '}
                      {mod.topics.length === 1 ? 'topic' : 'topics'}
                    </span>
                  </div>

                  <h3 className="jsadv-course-card__title">{mod.title}</h3>
                  <p className="jsadv-course-card__desc">{mod.description}</p>

                  <span className="jsadv-course-card__cta" aria-hidden="true">
                    Explore
                    <i className="bi bi-arrow-right-short" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="jsadv-courses-section__footer">
              <Link to="/js-adv-course/topics" className="jsadv-btn jsadv-btn--primary">
                View All JsAdvTopics
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            FEATURES
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="jsadv-features-section"
          aria-labelledby="features-heading"
        >
          <div className="container">

            <div className="jsadv-features-section__header">
              <div className="jsadv-features-section__pill">
                <i className="bi bi-compass-fill" aria-hidden="true" />
                Explore the Platform
              </div>
              <h2 className="jsadv-features-section__title" id="features-heading">
                Everything You Need
              </h2>
              <p className="jsadv-features-section__desc">
                All the tools, resources, and community support you need to
                accelerate your JavaScript journey from intermediate to expert.
              </p>
            </div>

            <div className="features-grid">
              {FEATURES.map((f, i) => (
                <Link
                  key={f.title}
                  to={f.link}
                  className={`jsadv-feature-card jsadv-feature-card--${f.color}`}
                  style={{ animationDelay: `${i * 0.09}s` }}
                  aria-label={f.title}
                >
                  <div className="jsadv-feature-card__icon" aria-hidden="true">
                    <i className={f.icon} />
                  </div>
                  <h3 className="jsadv-feature-card__title">{f.title}</h3>
                  <p className="jsadv-feature-card__desc">{f.desc}</p>
                  <span className="jsadv-feature-card__arrow" aria-hidden="true">
                    Open
                    <i className="bi bi-arrow-right-short" />
                  </span>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            TESTIMONIALS
        ══════════════════════════════════════════════════════════════ */}
        <section
          className="jsadv-testimonials-section"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">

            <div className="jsadv-testimonials-section__header">
              <div className="jsadv-testimonials-section__pill">
                <i className="bi bi-star-fill" aria-hidden="true" />
                Learner Reviews
              </div>
              <h2
                className="jsadv-testimonials-section__title"
                id="testimonials-heading"
              >
                What Our Learners Say
              </h2>
            </div>

            <div className="testimonials-grid">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.author}
                  className="jsadv-testimonial-card"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className="jsadv-testimonial-card__stars"
                    aria-label="5 stars rating"
                  >
                    {[...Array(5)].map((_, s) => (
                      <i
                        key={s}
                        className="bi bi-star-fill"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="jsadv-testimonial-card__quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="jsadv-testimonial-card__author">
                    <div
                      className="jsadv-testimonial-card__avatar"
                      aria-hidden="true"
                    >
                      <i className="bi bi-person-fill" />
                    </div>
                    <div className="jsadv-testimonial-card__info">
                      <span className="jsadv-testimonial-card__name">{t.author}</span>
                      <span className="jsadv-testimonial-card__role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <JsAdvFooter />

      {/* ── Floating back-to-top ── */}
      {showBackTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
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
