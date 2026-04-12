import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import JsIntNavbar, { useDarkMode } from '../components/JsIntNavbar'
import JsIntFooter from '../components/JsIntFooter'
import { jsIntData, getAllTopics } from '../data/jsIntData'
import '../styles/JsIntIndex.css'

/* ─────────────────────────────────────────────────────────────────────────────
   groupByLetter
   Groups an array of topic objects by the uppercased first character of name.
───────────────────────────────────────────────────────────────────────────── */
function groupByLetter(tags) {
  const groups = {}
  tags.forEach((tag) => {
    const letter = tag.name[0].toUpperCase()
    if (!groups[letter]) groups[letter] = []
    groups[letter].push(tag)
  })
  return groups
}

/* ─────────────────────────────────────────────────────────────────────────────
   Category accent colours — cycle through for visual variety
───────────────────────────────────────────────────────────────────────────── */
const CAT_COLORS = [
  '#8b5cf6',
  '#6d28d9',
  '#ec4899',
  '#8b5cf6',
  '#6d28d9',
  '#ec4899',
  '#8b5cf6',
  '#6d28d9',
  '#ec4899',
  '#8b5cf6',
  '#6d28d9',
]

/* ─────────────────────────────────────────────────────────────────────────────
   JsIntIndex component
───────────────────────────────────────────────────────────────────────────── */
export default function JsIntIndex() {
  const { dark }                          = useDarkMode()
  const navigate                          = useNavigate()

  const [searchTerm,  setSearchTerm]      = useState('')
  const [activeView,  setActiveView]      = useState('categories') // 'categories' | 'alpha'
  const [showBackTop, setShowBackTop]     = useState(false)
  const [heroVisible, setHeroVisible]     = useState(false)

  const searchRef = useRef(null)

  /* ── Derived data ── */
  const allTopics   = getAllTopics()
  const lower       = searchTerm.trim().toLowerCase()

  /* Filter categories: keep only tags matching search (by name OR description) */
  const filteredCategories = jsIntData.categories
    .map((cat) => ({
      ...cat,
      tags: cat.tags.filter(
        (t) =>
          t.name.toLowerCase().includes(lower) ||
          t.description.toLowerCase().includes(lower),
      ),
    }))
    .filter((cat) => cat.tags.length > 0)

  /* Filter topics for alpha view */
  const filteredAlpha = allTopics.filter(
    (t) =>
      t.name.toLowerCase().includes(lower) ||
      t.description.toLowerCase().includes(lower),
  )

  const groupedAlpha = groupByLetter(filteredAlpha)
  const letters      = Object.keys(groupedAlpha).sort()

  const totalTopics = allTopics.length
  const totalCats   = jsIntData.categories.length

  /* ── Back-to-top scroll listener ── */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 350)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Hero entrance animation ── */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* ── Auto-switch to alpha view when search yields no category results ── */
  useEffect(() => {
    if (!lower) return
    if (filteredCategories.length === 0 && filteredAlpha.length > 0) {
      setActiveView('alpha')
    }
  }, [lower]) // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Helpers ── */
  const clearSearch = () => {
    setSearchTerm('')
    searchRef.current?.focus()
  }

  const catId = (name) => `cat-${name.replace(/\s+/g, '-').toLowerCase()}`

  /* ─────────────────────────────────────────────────────────────── */
  return (
    <div className="js-int-index">
      <JsIntNavbar />

      <main id="main-content">

        {/* ══════════════════════════════════════════════════════════════
            HERO  —  compact, accent-gradient background
        ══════════════════════════════════════════════════════════════ */}
        <section
          className={`jsi-hero${heroVisible ? ' jsi-hero--in' : ''}`}
          aria-labelledby="jsi-hero-heading"
        >
          <div className="jsi-hero__glow jsi-hero__glow--1" aria-hidden="true" />
          <div className="jsi-hero__glow jsi-hero__glow--2" aria-hidden="true" />

          <div className="jsi-hero-inner">

            {/* Badge */}
            <div className="jsi-hero-badge">
              <i className="bi bi-braces-asterisk" aria-hidden="true" />
              JS Reference
            </div>

            {/* Heading */}
            <h1 className="jsi-hero-title" id="jsi-hero-heading">
              JS Intermediate
              <span className="jsi-hero-title-accent"> Reference</span>
            </h1>

            <p className="jsi-hero-subtitle">
              Browse all {totalTopics}+ intermediate JavaScript topics — search, filter by
              category, or browse A&ndash;Z.
            </p>

            {/* ── Search bar ── */}
            <div className="jsi-search-bar" role="search">
              <i
                className="bi bi-search jsi-search-icon"
                aria-hidden="true"
              />
              <input
                ref={searchRef}
                type="search"
                className="jsi-search-input"
                placeholder="Search topics or descriptions…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search JavaScript topics"
                autoComplete="off"
                spellCheck="false"
              />
              {searchTerm && (
                <button
                  className="jsi-search-clear"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  type="button"
                >
                  <i className="bi bi-x-lg" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* ── Stats row ── */}
            <div className="jsi-stats" aria-label="Reference statistics">
              <div className="jsi-stat-pill">
                <i className="bi bi-collection-fill" aria-hidden="true" />
                <span className="jsi-stat-val">{totalCats}</span>
                <span className="jsi-stat-label">Categories</span>
              </div>
              <div className="jsi-stat-pill">
                <i className="bi bi-book-fill" aria-hidden="true" />
                <span className="jsi-stat-val">{totalTopics}+</span>
                <span className="jsi-stat-label">Topics</span>
              </div>
              <div className="jsi-stat-pill">
                <i className="bi bi-lightning-fill" aria-hidden="true" />
                <span className="jsi-stat-val">Live</span>
                <span className="jsi-stat-label">Examples</span>
              </div>
              <div className="jsi-stat-pill">
                <i className="bi bi-gift-fill" aria-hidden="true" />
                <span className="jsi-stat-val">100%</span>
                <span className="jsi-stat-label">Free</span>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            CONTROLS  —  view-toggle + live result count
        ══════════════════════════════════════════════════════════════ */}
        <div className="jsi-controls">

          <div
            className="jsi-view-toggle"
            role="group"
            aria-label="Select view mode"
          >
            <button
              className={`jsi-toggle-btn${activeView === 'categories' ? ' active' : ''}`}
              onClick={() => setActiveView('categories')}
              aria-pressed={activeView === 'categories'}
              type="button"
            >
              <i className="bi bi-grid-fill" aria-hidden="true" />
              By Category
            </button>
            <button
              className={`jsi-toggle-btn${activeView === 'alpha' ? ' active' : ''}`}
              onClick={() => setActiveView('alpha')}
              aria-pressed={activeView === 'alpha'}
              type="button"
            >
              <i className="bi bi-sort-alpha-down" aria-hidden="true" />
              A&ndash;Z
            </button>
          </div>

          {searchTerm && (
            <p
              className="jsi-result-count"
              aria-live="polite"
              aria-atomic="true"
            >
              {filteredAlpha.length === 0
                ? 'No topics found'
                : `${filteredAlpha.length} topic${filteredAlpha.length !== 1 ? 's' : ''} found`}
            </p>
          )}

        </div>

        {/* ══════════════════════════════════════════════════════════════
            CONTENT  —  category view OR alpha view
        ══════════════════════════════════════════════════════════════ */}
        <div className="jsi-content">

          {/* ───────────────── CATEGORY VIEW ───────────────── */}
          {activeView === 'categories' && (
            <>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, i) => {
                  const accentColor = CAT_COLORS[i % CAT_COLORS.length]
                  return (
                    <section
                      key={cat.name}
                      className="jsi-cat-section"
                      style={{ '--cat-color': accentColor }}
                      aria-labelledby={catId(cat.name)}
                    >
                      {/* Category header */}
                      <div className="jsi-cat-header">

                        <div
                          className="jsi-cat-icon"
                          aria-hidden="true"
                          style={{ background: accentColor }}
                        >
                          <i className={cat.icon} />
                        </div>

                        <div className="jsi-cat-info">
                          <h2
                            className="jsi-cat-name"
                            id={catId(cat.name)}
                          >
                            {cat.name}
                          </h2>
                          <p className="jsi-cat-desc">{cat.description}</p>
                        </div>

                        <div
                          className="jsi-cat-badge"
                          aria-label={`${cat.tags.length} ${cat.tags.length === 1 ? 'topic' : 'topics'}`}
                        >
                          {cat.tags.length}
                          <span className="jsi-cat-badge-label">
                            {' '}{cat.tags.length === 1 ? 'topic' : 'topics'}
                          </span>
                        </div>

                      </div>

                      {/* Topics grid */}
                      <div className="jsi-tags-grid">
                        {cat.tags.map((tag) => (
                          <Link
                            key={tag.name}
                            to={`/js-int-course/js-int/${tag.name}`}
                            className="jsi-tag-card"
                          >
                            <span className="jsi-tag-name">{tag.name}</span>
                            <span className="jsi-tag-desc">{tag.description}</span>
                            <span
                              className="jsi-tag-arrow"
                              aria-hidden="true"
                            >
                              <i className="bi bi-arrow-right-short" />
                            </span>
                          </Link>
                        ))}
                      </div>

                    </section>
                  )
                })
              ) : (
                /* Empty state */
                <div className="jsi-empty" role="alert">
                  <i
                    className="bi bi-search jsi-empty-icon"
                    aria-hidden="true"
                  />
                  <p className="jsi-empty-text">
                    No topics match{' '}
                    <strong>&ldquo;{searchTerm}&rdquo;</strong>
                  </p>
                  <p className="jsi-empty-hint">
                    Try a different keyword or browse by category below.
                  </p>
                  <button
                    className="jsi-empty-clear"
                    onClick={clearSearch}
                    type="button"
                  >
                    <i className="bi bi-x-circle" aria-hidden="true" />
                    Clear search
                  </button>
                </div>
              )}
            </>
          )}

          {/* ───────────────── ALPHA VIEW ───────────────── */}
          {activeView === 'alpha' && (
            <>
              {filteredAlpha.length > 0 ? (
                letters.map((letter) => (
                  <div key={letter} className="jsi-alpha-section">

                    <div
                      className="jsi-alpha-letter"
                      aria-label={`Topics starting with ${letter}`}
                    >
                      {letter}
                    </div>

                    <div className="jsi-alpha-tags">
                      {groupedAlpha[letter].map((tag) => (
                        <Link
                          key={tag.name}
                          to={`/js-int-course/js-int/${tag.name}`}
                          className="jsi-alpha-tag"
                          title={tag.description}
                        >
                          <i
                            className="bi bi-code-slash"
                            aria-hidden="true"
                          />
                          {tag.name}
                        </Link>
                      ))}
                    </div>

                  </div>
                ))
              ) : (
                /* Empty state */
                <div className="jsi-empty" role="alert">
                  <i
                    className="bi bi-search jsi-empty-icon"
                    aria-hidden="true"
                  />
                  <p className="jsi-empty-text">
                    No topics match{' '}
                    <strong>&ldquo;{searchTerm}&rdquo;</strong>
                  </p>
                  <p className="jsi-empty-hint">
                    Try a different keyword or switch to the category view.
                  </p>
                  <button
                    className="jsi-empty-clear"
                    onClick={clearSearch}
                    type="button"
                  >
                    <i className="bi bi-x-circle" aria-hidden="true" />
                    Clear search
                  </button>
                </div>
              )}
            </>
          )}

        </div>
        {/* /jsi-content */}

      </main>

      <JsIntFooter />

      {/* ── Floating back-to-top button ── */}
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
