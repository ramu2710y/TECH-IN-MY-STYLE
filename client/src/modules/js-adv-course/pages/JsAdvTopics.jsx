import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import JsAdvNavbar, { useDarkMode } from '../components/JsAdvNavbar'
import JsAdvFooter from '../components/JsAdvFooter'
import JsAdvTopicsData from '../data/JsAdvTopicsData'
import '../styles/JsAdvTopics.css'

/* ─────────────────────────────────────────────────────────────────────────────
   HELPER — difficulty → CSS class
───────────────────────────────────────────────────────────────────────────── */
function getDiffClass(difficulty) {
  switch ((difficulty || '').toLowerCase()) {
    case 'beginner':     return 'diff--beginner'
    case 'advanced':     return 'diff--advanced'
    case 'expert':       return 'diff--expert'
    default:             return 'diff--intermediate'
  }
}

/* ─────────────────────────────────────────────────────────────────────────────
   TOPIC CARD (category view)
───────────────────────────────────────────────────────────────────────────── */
function TopicCard({ topic, catColor }) {
  return (
    <Link
      to={`/js-adv-course/topics/${topic.id}`}
      className="jsadv-topic-card"
      style={{ '--cat-glow': catColor }}
    >
      <div className="jsadv-topic-card__body">
        <h3 className="jsadv-topic-card__title">{topic.title}</h3>
        {topic.description && (
          <p className="jsadv-topic-card__desc">{topic.description}</p>
        )}
      </div>
      <div className="jsadv-topic-card__footer">
        <div className="jsadv-topic-card__meta">
          <span className={`jsadv-difficulty-badge ${getDiffClass(topic.difficulty)}`}>
            {topic.difficulty || 'Intermediate'}
          </span>
          {topic.time && (
            <span className="jsadv-time-badge">
              <i className="bi bi-clock" />
              {topic.time}
            </span>
          )}
        </div>
        <span className="jsadv-topic-card__arrow">→</span>
      </div>
    </Link>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   ALL-TOPIC CARD (flat view)
───────────────────────────────────────────────────────────────────────────── */
function AllTopicCard({ topic }) {
  return (
    <Link
      to={`/js-adv-course/topics/${topic.id}`}
      className="all-jsadv-topic-card"
      style={{ '--cat-glow': topic.moduleColor }}
    >
      <span
        className="jsadv-cat-chip"
        style={{
          background:   `${topic.moduleColor}1a`,
          color:        topic.moduleColor,
          borderColor:  `${topic.moduleColor}44`,
        }}
      >
        <i className={topic.moduleIcon} />
        {topic.moduleTitle}
      </span>
      <h3 className="jsadv-topic-card__title">{topic.title}</h3>
      {topic.description && (
        <p className="jsadv-topic-card__desc">{topic.description}</p>
      )}
      <div className="jsadv-topic-card__footer">
        <div className="jsadv-topic-card__meta">
          <span className={`jsadv-difficulty-badge ${getDiffClass(topic.difficulty)}`}>
            {topic.difficulty || 'Intermediate'}
          </span>
          {topic.time && (
            <span className="jsadv-time-badge">
              <i className="bi bi-clock" />
              {topic.time}
            </span>
          )}
        </div>
        <span className="jsadv-topic-card__arrow">→</span>
      </div>
    </Link>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function JsAdvTopics() {
  const { dark }                            = useDarkMode()
  const [searchTerm,   setSearchTerm]       = useState('')
  const [activeView,   setActiveView]       = useState('category')
  const [showBackTop,  setShowBackTop]      = useState(false)
  const [heroVisible,  setHeroVisible]      = useState(false)

  const categoryRefs = useRef({})
  const searchRef    = useRef(null)

  const modules = JsAdvTopicsData.modules || []

  /* ── Totals ── */
  const totalTopics = modules.reduce((sum, m) => sum + m.topics.length, 0)

  /* ── Hero entrance ── */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  /* ── Back-to-top listener ── */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Filtered modules (category view) ── */
  const filteredModules = modules
    .map(mod => ({
      ...mod,
      topics: mod.topics.filter(t => {
        if (!searchTerm) return true
        const q = searchTerm.toLowerCase()
        return (
          t.title.toLowerCase().includes(q) ||
          (t.description || '').toLowerCase().includes(q)
        )
      }),
    }))
    .filter(mod => !searchTerm || mod.topics.length > 0)

  /* ── Flat list (all topics view) ── */
  const allTopics = modules
    .flatMap(mod =>
      mod.topics.map(t => ({
        ...t,
        moduleId:    mod.id,
        moduleTitle: mod.title,
        moduleColor: mod.color,
        moduleIcon:  mod.icon,
      }))
    )
    .filter(t => {
      if (!searchTerm) return true
      const q = searchTerm.toLowerCase()
      return (
        t.title.toLowerCase().includes(q) ||
        (t.description || '').toLowerCase().includes(q)
      )
    })

  /* ── Scroll to category section ── */
  const scrollToCategory = (id) => {
    const el = categoryRefs.current[id]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  /* ─────────────────────────────────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────────────────────────────────── */
  return (
    <div className={`jsadv-topics-page${dark ? ' jsadv-topics-page--dark' : ''}`}>
      <JsAdvNavbar />

      {/* ════════════════════════════════════════════════════════════
          HERO BANNER
      ════════════════════════════════════════════════════════════ */}
      <section
        className={`jsadv-topics-hero${heroVisible ? ' jsadv-topics-hero--visible' : ''}`}
        aria-labelledby="topics-heading"
      >
        <div className="jsadv-topics-hero__inner">

          <span className="jsadv-topics-hero__badge">
            <i className="bi bi-lightning-charge-fill" /> Learning Path
          </span>

          <h1 className="jsadv-topics-hero__title" id="topics-heading">
            Advanced JavaScript JsAdvTopics
          </h1>

          <p className="jsadv-topics-hero__subtitle">
            Explore {totalTopics} carefully crafted topics across&nbsp;
            {modules.length} categories — from closures and prototypes to
            design patterns and performance
          </p>

          {/* Search */}
          <div className="jsadv-topics-search">
            <span className="jsadv-topics-search__icon">
              <i className="bi bi-search" />
            </span>
            <input
              ref={searchRef}
              className="jsadv-topics-search__input"
              type="text"
              placeholder="Search topics…"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              aria-label="Search topics"
            />
            {searchTerm && (
              <button
                className="jsadv-topics-search__clear"
                onClick={() => { setSearchTerm(''); searchRef.current?.focus() }}
                aria-label="Clear search"
              >
                <i className="bi bi-x-circle-fill" />
              </button>
            )}
          </div>

        </div>

        {/* Decorative blobs */}
        <div className="jsadv-topics-hero__blob jsadv-topics-hero__blob--1" aria-hidden="true" />
        <div className="jsadv-topics-hero__blob jsadv-topics-hero__blob--2" aria-hidden="true" />
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════════════════════════ */}
      <div className="jsadv-topics-stats-bar" role="status" aria-live="polite">
        <div className="topics-stat">
          <i className="bi bi-journal-code" />
          <strong>{totalTopics}</strong>
          <span>JsAdvTopics</span>
        </div>
        <span className="topics-stat-sep" aria-hidden="true">•</span>
        <div className="topics-stat">
          <i className="bi bi-grid-fill" />
          <strong>{modules.length}</strong>
          <span>Categories</span>
        </div>
        <span className="topics-stat-sep" aria-hidden="true">•</span>
        <div className="topics-stat">
          <i className="bi bi-heart-fill" />
          <strong>Free</strong>
          <span>Forever</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          CONTROLS (view toggle + category pills)
      ════════════════════════════════════════════════════════════ */}
      <div className="jsadv-topics-controls">

        {/* View toggle */}
        <div className="view-toggle" role="group" aria-label="View mode">
          <button
            className={`view-btn${activeView === 'category' ? ' view-btn--active' : ''}`}
            onClick={() => setActiveView('category')}
          >
            <i className="bi bi-grid-3x3-gap-fill" /> By Category
          </button>
          <button
            className={`view-btn${activeView === 'all' ? ' view-btn--active' : ''}`}
            onClick={() => setActiveView('all')}
          >
            <i className="bi bi-list-ul" /> All JsAdvTopics
          </button>
        </div>

        {/* Category filter pills — only visible in category view */}
        {activeView === 'category' && (
          <div className="jsadv-category-pills" role="list" aria-label="Jump to category">
            {modules.map(mod => (
              <button
                key={mod.id}
                className="cat-pill"
                role="listitem"
                onClick={() => scrollToCategory(mod.id)}
                style={{ '--pill-color': mod.color }}
              >
                <span
                  className="cat-pill__dot"
                  style={{ background: mod.color }}
                  aria-hidden="true"
                />
                {mod.title}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* ════════════════════════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════════════════════════ */}
      <main className="categories-container" id="main-content">

        {/* ── CATEGORY VIEW ───────────────────────────────────────── */}
        {activeView === 'category' && (
          <>
            {filteredModules.length === 0 ? (
              <div className="jsadv-topics-empty">
                <i className="bi bi-search" aria-hidden="true" />
                <p>
                  No topics found for&nbsp;
                  <strong>"{searchTerm}"</strong>
                </p>
                <button
                  className="jsadv-topics-empty__reset"
                  onClick={() => setSearchTerm('')}
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredModules.map(mod => (
                <section
                  key={mod.id}
                  id={`cat-${mod.id}`}
                  className="jsadv-category-section"
                  ref={el => { categoryRefs.current[mod.id] = el }}
                  aria-labelledby={`cat-title-${mod.id}`}
                >
                  {/* Section header */}
                  <div
                    className="cat-section-header"
                    style={{ '--cat-color': mod.color }}
                  >
                    <span
                      className="cat-section-icon"
                      style={{ color: mod.color, background: `${mod.color}1a` }}
                    >
                      <i className={mod.icon} aria-hidden="true" />
                    </span>
                    <h2
                      className="cat-section-title"
                      id={`cat-title-${mod.id}`}
                      style={{ color: mod.color }}
                    >
                      {mod.title}
                    </h2>
                    <span
                      className="cat-topic-count"
                      style={{
                        borderColor: mod.color,
                        color:       mod.color,
                        background:  `${mod.color}12`,
                      }}
                    >
                      {mod.topics.length} topic{mod.topics.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {mod.description && (
                    <p className="cat-section-desc">{mod.description}</p>
                  )}

                  {/* Topic grid */}
                  <div className="cat-topic-grid">
                    {mod.topics.map(topic => (
                      <TopicCard
                        key={topic.id}
                        topic={topic}
                        catColor={mod.color}
                      />
                    ))}
                  </div>
                </section>
              ))
            )}
          </>
        )}

        {/* ── ALL TOPICS VIEW ─────────────────────────────────────── */}
        {activeView === 'all' && (
          <>
            {allTopics.length === 0 ? (
              <div className="jsadv-topics-empty">
                <i className="bi bi-search" aria-hidden="true" />
                <p>
                  No topics found for&nbsp;
                  <strong>"{searchTerm}"</strong>
                </p>
                <button
                  className="jsadv-topics-empty__reset"
                  onClick={() => setSearchTerm('')}
                >
                  Clear search
                </button>
              </div>
            ) : (
              <>
                <p className="jsadv-all-topics-count">
                  Showing <strong>{allTopics.length}</strong> topic
                  {allTopics.length !== 1 ? 's' : ''}
                  {searchTerm && <> matching <em>"{searchTerm}"</em></>}
                </p>
                <div className="jsadv-all-topics-grid">
                  {allTopics.map(topic => (
                    <AllTopicCard
                      key={`${topic.moduleId}-${topic.id}`}
                      topic={topic}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}

      </main>

      {/* ════════════════════════════════════════════════════════════
          BACK TO TOP
      ════════════════════════════════════════════════════════════ */}
      {showBackTop && (
        <button
          className="jsadv-back-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <i className="bi bi-arrow-up" />
        </button>
      )}

      <JsAdvFooter />
    </div>
  )
}
