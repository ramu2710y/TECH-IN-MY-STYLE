import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/CssNavbar.css'

/* ============================================================
   useDarkMode — custom hook
   Reads/writes localStorage, syncs <html class="dark">
   Exported so any page can consume theme state directly.
   ============================================================ */
export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('css-theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('css-theme', dark ? 'dark' : 'light')
    } catch { /* noop */ }
    // Clean up html.dark when the css-course unmounts so it doesn't bleed to main pages
    return () => {
      root.classList.remove('dark')
    }
  }, [dark])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      const saved = localStorage.getItem('css-theme')
      if (!saved) setDark(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const toggle = useCallback(() => setDark((d) => !d), [])
  return { dark, toggle, setDark }
}

/* ============================================================
   Nav link definitions
   ============================================================ */
const NAV_LINKS = [
  { label: 'Home', to: '/css-course', icon: 'bi bi-house-door-fill', pageKey: 'home' },
  { label: 'CSS', to: '/css-course/reference', icon: 'bi bi-braces-asterisk', pageKey: 'css' },
  { label: 'Resources', to: '/css-course/resources', icon: 'bi bi-journal-code', pageKey: 'resources' },
  { label: 'Playground', to: '/css-course/compiler', icon: 'bi bi-terminal-fill', pageKey: 'compiler' },
  { label: "Let's Connect", to: '/css-course/connect', icon: 'bi bi-person-lines-fill', pageKey: 'connect' },
]

const BACK_LINK = { label: '← Back to Courses', to: '/courses', icon: 'bi bi-arrow-left-circle-fill', pageKey: 'back' }

function getActiveKey(pathname) {
  if (pathname === '/css-course') return 'home'
  if (pathname.startsWith('/css-course/reference')) return 'css'
  if (pathname.startsWith('/css-course/resources')) return 'resources'
  if (pathname.startsWith('/css-course/compiler')) return 'compiler'
  if (pathname.startsWith('/css-course/connect')) return 'connect'
  return ''
}

/* ============================================================
   Navbar component
   ============================================================ */
export default function Navbar({ activePage }) {
  const location = useLocation()
  const { dark, toggle } = useDarkMode()

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  const mobileMenuRef = useRef(null)
  const hamburgerRef = useRef(null)

  const activeKey = activePage ?? getActiveKey(location.pathname)

  /* ── Scroll listener ── */
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        setScrolled(scrollY > 10)
        const doc = document.documentElement
        const scrollable = doc.scrollHeight - doc.clientHeight
        setProgress(scrollable > 0 ? (scrollY / scrollable) * 100 : 0)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Close menu on route change ── */
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        mobileMenuRef.current?.querySelector('a, button')?.focus()
      }, 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  /* ── Escape closes menu ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="css-navbar__skip">
        Skip to content
      </a>

      {/* ── Navbar shell ── */}
      <header className={`css-navbar${scrolled ? ' css-navbar--scrolled' : ''}`} role="banner">
        {/* Scroll progress bar */}
        <div
          className="css-navbar__progress"
          role="progressbar"
          aria-hidden="true"
          style={{ width: `${progress}%` }}
        />

        <div className="css-navbar__inner">

          {/* ── Logo ── */}
          <Link
            to="/css-course"
            className="css-navbar__logo"
            aria-label="CSS in My Style — Home"
            onClick={closeMenu}
          >
            <span className="css-navbar__logo-tag">{'{ }'}</span>
            <span className="css-navbar__logo-css">CSS</span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav aria-label="Main navigation">
            <ul className="css-navbar__nav" role="list">
              {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
                <li key={pageKey} className="css-navbar__nav-item">
                  <Link
                    to={to}
                    className={`css-navbar__nav-link${activeKey === pageKey ? ' active' : ''}`}
                    aria-current={activeKey === pageKey ? 'page' : undefined}
                  >
                    <i className={icon} aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
              <li className="css-navbar__nav-item">
                <Link
                  to={BACK_LINK.to}
                  className="css-navbar__nav-link css-navbar__back-link"
                  title="Back to All Courses"
                >
                  <i className={BACK_LINK.icon} aria-hidden="true" />
                  {BACK_LINK.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* ── Right actions ── */}
          <div className="css-navbar__actions">
            {/* Theme toggle */}
            <button
              className="css-navbar__theme-btn"
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              <i className="bi bi-sun-fill  icon-sun" aria-hidden="true" />
              <i className="bi bi-moon-stars-fill icon-moon" aria-hidden="true" />
            </button>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              className="css-navbar__hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="css-mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              {menuOpen
                ? <i className="bi bi-x-lg" aria-hidden="true" />
                : <i className="bi bi-list" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={`css-navbar__overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* ── Mobile drawer ── */}
      <nav
        id="css-mobile-menu"
        ref={mobileMenuRef}
        className={`css-navbar__mobile${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="css-navbar__mobile-head">
          <Link to="/css-course" className="css-navbar__mobile-logo" onClick={closeMenu}>
            <span className="css-navbar__logo-tag" style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700 }}>{'{ }'}</span>
            <span className="css-navbar__logo-css" style={{ fontSize: '1.35rem' }}>CSS</span>
          </Link>
          <button
            className="css-navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
            type="button"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="css-navbar__mobile-nav" role="list">
          {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
            <li key={pageKey} className="css-navbar__mobile-item">
              <Link
                to={to}
                className={`css-navbar__mobile-link${activeKey === pageKey ? ' active' : ''}`}
                onClick={closeMenu}
                aria-current={activeKey === pageKey ? 'page' : undefined}
                tabIndex={menuOpen ? 0 : -1}
              >
                <i className={icon} aria-hidden="true" />
                {label}
              </Link>
            </li>
          ))}
          <li className="css-navbar__mobile-item">
            <Link
              to={BACK_LINK.to}
              className="css-navbar__mobile-link css-navbar__mobile-back"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <i className={BACK_LINK.icon} aria-hidden="true" />
              {BACK_LINK.label}
            </Link>
          </li>
        </ul>

        {/* Drawer footer */}
        <div className="css-navbar__mobile-foot">
          <div className="css-navbar__mobile-theme-row">
            <span className="css-navbar__mobile-theme-label">
              {dark
                ? <><i className="bi bi-moon-stars-fill" aria-hidden="true" /> Dark Mode</>
                : <><i className="bi bi-sun-fill" aria-hidden="true" /> Light Mode</>
              }
            </span>
            <label className="css-navbar__toggle-switch" aria-label="Toggle dark mode">
              <input type="checkbox" checked={dark} onChange={toggle} tabIndex={menuOpen ? 0 : -1} />
              <span className="css-navbar__toggle-track" aria-hidden="true" />
            </label>
          </div>

          {/* Quick socials */}
          <div style={{ display: 'flex', gap: '0.6rem', padding: '0.1rem 0.25rem' }}>
            {[
              { href: 'https://www.instagram.com/techinmystyle', icon: 'bi bi-instagram', label: 'Instagram' },
              { href: 'https://www.youtube.com/@TECHINMYSTYLE', icon: 'bi bi-youtube', label: 'YouTube' },
              { href: 'https://t.me/Tech_in_my_style_bot', icon: 'bi bi-telegram', label: 'Telegram' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                tabIndex={menuOpen ? 0 : -1}
                className="css-navbar__social-icon"
              >
                <i className={s.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
