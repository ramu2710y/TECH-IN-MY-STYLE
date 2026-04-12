import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import jsIntData from '../data/jsIntData'
import '../styles/JsIntTopicNavMenu.css'

export default function JsIntTopicNavMenu({ isOpen, onClose }) {
  const [search, setSearch] = useState('')
  const { topic: activeTopic } = useParams()
  const searchInputRef = useRef(null)
  const drawerRef = useRef(null)

  /* ── Lock body scroll when drawer is open ─────────────────────── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Auto-focus search after transition starts
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 250)
      return () => clearTimeout(timer)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  /* ── Close on Escape key ──────────────────────────────────────── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  /* ── Trap focus inside drawer when open ──────────────────────── */
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const focusable = drawerRef.current.querySelectorAll(
      'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const handleTab = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }
    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  /* ── Filter categories + topics by search query ───────────────── */
  const searchTrimmed = search.trim().toLowerCase()
  const filteredCategories = jsIntData.categories
    .map((cat) => {
      const catNameMatch = cat.name.toLowerCase().includes(searchTrimmed)
      return {
        ...cat,
        tags: cat.tags.filter(
          (tag) =>
            catNameMatch ||
            tag.name.toLowerCase().includes(searchTrimmed) ||
            tag.description.toLowerCase().includes(searchTrimmed)
        ),
      }
    })
    .filter((cat) => cat.tags.length > 0)

  /* ── Count total visible topics ───────────────────────────────── */
  const totalVisible = filteredCategories.reduce(
    (sum, cat) => sum + cat.tags.length,
    0
  )

  /* ── Handle link click (close drawer) ────────────────────────── */
  const handleLinkClick = () => {
    setSearch('')
    onClose()
  }

  return (
    <>
      {/* ── Overlay backdrop ───────────────────────────────────── */}
      <div
        className={`topic-nav-overlay${isOpen ? ' topic-nav-overlay--open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Slide-in drawer ────────────────────────────────────── */}
      <aside
        ref={drawerRef}
        className={`topic-nav-drawer${isOpen ? ' topic-nav-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="All Topics Navigation"
        aria-hidden={!isOpen}
      >
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="topic-nav-header">
          <div className="topic-nav-brand">
            <span className="topic-nav-logo">&lt;JS-INT/&gt;</span>
            <span className="topic-nav-subtitle">All Topics</span>
          </div>

          <button
            className="topic-nav-close"
            onClick={onClose}
            aria-label="Close navigation menu"
            tabIndex={isOpen ? 0 : -1}
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* ── Search bar ─────────────────────────────────────── */}
        <div className="topic-nav-search-wrap">
          <div className="topic-nav-search-inner">
            <i className="bi bi-search topic-nav-search-icon" aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="text"
              className="topic-nav-search"
              placeholder="Search topics…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search topics"
              tabIndex={isOpen ? 0 : -1}
              autoComplete="off"
              spellCheck="false"
            />
            {search && (
              <button
                className="topic-nav-search-clear"
                onClick={() => {
                  setSearch('')
                  searchInputRef.current?.focus()
                }}
                aria-label="Clear search"
                tabIndex={isOpen ? 0 : -1}
              >
                <i className="bi bi-x" />
              </button>
            )}
          </div>

          {/* Result count pill */}
          {searchTrimmed && (
            <p className="topic-nav-search-count">
              {totalVisible === 0
                ? 'No results'
                : `${totalVisible} topic${totalVisible !== 1 ? 's' : ''} found`}
            </p>
          )}
        </div>

        {/* ── Scrollable topic list ───────────────────────────── */}
        <nav className="topic-nav-body" aria-label="Topics list">
          {filteredCategories.length === 0 ? (
            /* Empty state */
            <div className="topic-nav-empty">
              <i className="bi bi-search topic-nav-empty-icon" aria-hidden="true" />
              <p className="topic-nav-empty-title">No topics found</p>
              <p className="topic-nav-empty-hint">
                Try searching for something like{' '}
                <code className="topic-nav-empty-code">closures</code> or{' '}
                <code className="topic-nav-empty-code">fetch</code>
              </p>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div key={cat.name} className="topic-nav-category">
                {/* Category heading */}
                <div className="topic-nav-cat-title">
                  <i
                    className={`${cat.icon} topic-nav-cat-icon`}
                    style={{ color: cat.color }}
                    aria-hidden="true"
                  />
                  <span className="topic-nav-cat-name">{cat.name}</span>
                  <span className="topic-nav-cat-count">{cat.tags.length}</span>
                </div>

                {/* Topic links */}
                <ul className="topic-nav-list" role="list">
                  {cat.tags.map((tag) => {
                    const isActive = tag.name === activeTopic
                    return (
                      <li key={tag.name} role="listitem">
                        <Link
                          to={`/js-int/${tag.name}`}
                          className={`topic-nav-link${
                            isActive ? ' topic-nav-link--active' : ''
                          }`}
                          onClick={handleLinkClick}
                          title={tag.description}
                          aria-current={isActive ? 'page' : undefined}
                          tabIndex={isOpen ? 0 : -1}
                        >
                          {/* Active indicator dot */}
                          <span
                            className={`topic-nav-dot${
                              isActive ? ' topic-nav-dot--active' : ''
                            }`}
                            aria-hidden="true"
                          />

                          {/* Topic slug */}
                          <span className="topic-nav-tag-name">{tag.name}</span>

                          {/* Active chevron */}
                          {isActive && (
                            <i
                              className="bi bi-chevron-right topic-nav-active-chevron"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))
          )}
        </nav>

        {/* ── JsIntFooter strip ───────────────────────────────────── */}
        <div className="topic-nav-footer">
          <span className="topic-nav-footer-text">
            <i className="bi bi-collection" aria-hidden="true" />
            {jsIntData.categories.length} categories &middot;{' '}
            {jsIntData.categories.reduce(
              (sum, cat) => sum + cat.tags.length,
              0
            )}{' '}
            topics
          </span>
        </div>
      </aside>
    </>
  )
}
