import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/HtmlNavbar.css'

/* ============================================================
   useDarkMode â€” custom hook
   Reads/writes to localStorage, syncs <html class="dark">
   Exported so any page can consume theme state directly.
   ============================================================ */
export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  /* Keep <html> class in sync */
  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      /* storage might be blocked in incognito */
    }
    // Remove html.dark on unmount so it doesn't bleed to main app pages
    return () => {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  /* Listen for OS-level preference changes */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => {
      /* Only update if user has not made a manual choice */
      const saved = localStorage.getItem('theme')
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
  {
    label: 'Home',
    to: '/html-course',
    icon: 'bi bi-house-door-fill',
    pageKey: 'home',
  },
  {
    label: 'HTML',
    to: '/html-course/reference',
    icon: 'bi bi-code-slash',
    pageKey: 'html',
  },
  {
    label: 'Resources',
    to: '/html-course/resources',
    icon: 'bi bi-journal-code',
    pageKey: 'resources',
  },
  {
    label: 'Playground',
    to: '/html-course/compiler',
    icon: 'bi bi-terminal-fill',
    pageKey: 'compiler',
  },
  {
    label: "Let's Connect",
    to: '/html-course/connect',
    icon: 'bi bi-person-lines-fill',
    pageKey: 'connect',
  },
]

const BACK_LINK = { label: '← Back to Courses', to: '/courses', icon: 'bi bi-arrow-left-circle-fill', pageKey: 'back' }

/* ============================================================
   Helper â€” derive active page key from current pathname
   ============================================================ */
function getActiveKey(pathname) {
  if (pathname === '/html-course') return 'home'
  if (pathname.startsWith('/html-course/reference')) return 'html'
  if (pathname.startsWith('/html-course/resources')) return 'resources'
  if (pathname.startsWith('/html-course/compiler')) return 'compiler'
  if (pathname.startsWith('/html-course/connect')) return 'connect'
  return ''
}

/* ============================================================
   Navbar component
   Props:
     activePage  â€” optional override (string pageKey). Falls back
                   to auto-detection from useLocation().
   ============================================================ */
export default function HtmlNavbar({ activePage }) {
  const location = useLocation()
  const { dark, toggle } = useDarkMode()

  /* Mobile menu open/close */
  const [menuOpen, setMenuOpen] = useState(false)

  /* Scroll shadow */
  const [scrolled, setScrolled] = useState(false)

  /* Scroll progress bar width (0â€“100) */
  const [progress, setProgress] = useState(0)

  /* Ref for mobile menu (focus trap) */
  const mobileMenuRef = useRef(null)
  const hamburgerRef = useRef(null)

  /* Active page key */
  const activeKey = activePage ?? getActiveKey(location.pathname)

  /* â”€â”€ Scroll listener â”€â”€ */
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        setScrolled(scrollY > 10)

        /* Progress bar */
        const doc = document.documentElement
        const scrollable = doc.scrollHeight - doc.clientHeight
        setProgress(scrollable > 0 ? (scrollY / scrollable) * 100 : 0)

        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* â”€â”€ Close menu on route change â”€â”€ */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  /* â”€â”€ Lock body scroll when menu is open â”€â”€ */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      /* Focus first link in mobile menu for a11y */
      setTimeout(() => {
        mobileMenuRef.current?.querySelector('a, button')?.focus()
      }, 50)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  /* â”€â”€ Keyboard: close menu on Escape â”€â”€ */
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
  const openMenu = () => setMenuOpen(true)

  /* ============================================================
     RENDER
     ============================================================ */
  return (
    <>
      {/* â”€â”€ Skip to content (accessibility) â”€â”€ */}
      <a href="#main-content" className="navbar__skip-link">
        Skip to content
      </a>

      {/* â”€â”€ Navbar shell â”€â”€ */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        {/* Scroll progress bar */}
        <div
          className="navbar__progress"
          role="progressbar"
          aria-hidden="true"
          style={{ width: `${progress}%` }}
        />

        <div className="navbar__inner">
          {/* â”€â”€ Logo â”€â”€ */}
          <Link
            to="/html-course"
            className="navbar__logo"
            aria-label="HTML in My Style â€” Home"
            onClick={closeMenu}
          >
            <span className="navbar__logo-tag">&lt;/&gt;</span>
            <span className="navbar__logo-html">HTML</span>
          </Link>

          {/* â”€â”€ Desktop navigation â”€â”€ */}
          <nav aria-label="Main navigation">
            <ul className="navbar__nav" role="list">
              {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
                <li key={pageKey} className="navbar__nav-item">
                  <Link
                    to={to}
                    className={`navbar__nav-link${activeKey === pageKey ? ' active' : ''}`}
                    aria-current={activeKey === pageKey ? 'page' : undefined}
                  >
                    <i className={icon} aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
              <li className="navbar__nav-item">
                <Link to={BACK_LINK.to} className="navbar__nav-link navbar__back-link">
                  <i className={BACK_LINK.icon} aria-hidden="true" />
                  {BACK_LINK.label}
                </Link>
              </li>
            </ul>
          </nav>

          {/* â”€â”€ Right-side actions â”€â”€ */}
          <div className="navbar__actions">
            {/* Dark / Light toggle â€” desktop */}
            <button
              className="navbar__theme-btn"
              onClick={toggle}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              type="button"
            >
              {/* Sun shown in light mode; Moon shown in dark mode */}
              <i className="bi bi-sun-fill icon-sun" aria-hidden="true" />
              <i className="bi bi-moon-stars-fill icon-moon" aria-hidden="true" />
            </button>

            {/* Hamburger â€” mobile only */}
            <button
              ref={hamburgerRef}
              className="navbar__hamburger"
              onClick={menuOpen ? closeMenu : openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              type="button"
            >
              {menuOpen ? (
                <i className="bi bi-x-lg" aria-hidden="true" />
              ) : (
                <i className="bi bi-list" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* â”€â”€ Mobile overlay (backdrop) â”€â”€ */}
      <div
        className={`navbar__overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* â”€â”€ Mobile drawer menu â”€â”€ */}
      <nav
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div className="navbar__mobile-header">
          <Link
            to="/html-course"
            className="navbar__mobile-logo"
            onClick={closeMenu}
            aria-label="HTML in My Style â€” Home"
          >
            <span
              style={{
                fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-primary)',
              }}
            >
              &lt;/&gt;
            </span>
            <span
              style={{
                color: '#e34f26',
                fontWeight: 900,
                fontSize: '1.35rem',
                marginLeft: '0.1rem',
              }}
            >
              HTML
            </span>
          </Link>

          <button
            className="navbar__mobile-close"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            type="button"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <ul className="navbar__mobile-nav" role="list">
          {NAV_LINKS.map(({ label, to, icon, pageKey }) => (
            <li key={pageKey} className="navbar__mobile-item">
              <Link
                to={to}
                className={`navbar__mobile-link${activeKey === pageKey ? ' active' : ''}`}
                onClick={closeMenu}
                aria-current={activeKey === pageKey ? 'page' : undefined}
                tabIndex={menuOpen ? 0 : -1}
              >
                <i className={icon} aria-hidden="true" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Drawer footer â€” theme toggle row */}
        <div className="navbar__mobile-footer">
          <div className="navbar__mobile-theme-row">
            <span className="navbar__mobile-theme-label">
              {dark ? (
                <>
                  <i className="bi bi-moon-stars-fill" aria-hidden="true" />
                  Dark Mode
                </>
              ) : (
                <>
                  <i className="bi bi-sun-fill" aria-hidden="true" />
                  Light Mode
                </>
              )}
            </span>

            {/* Toggle switch */}
            <label className="navbar__toggle-switch" aria-label="Toggle dark mode">
              <input
                type="checkbox"
                checked={dark}
                onChange={toggle}
                tabIndex={menuOpen ? 0 : -1}
              />
              <span className="navbar__toggle-track" aria-hidden="true" />
            </label>
          </div>

          {/* Quick social row inside drawer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.1rem 0.25rem',
            }}
          >
            <a
              href="https://www.instagram.com/techinmystyle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              tabIndex={menuOpen ? 0 : -1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-muted, #718096)',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease, background 0.2s ease',
              }}
            >
              <i className="bi bi-instagram" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@TECHINMYSTYLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              tabIndex={menuOpen ? 0 : -1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-muted, #718096)',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease, background 0.2s ease',
              }}
            >
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>
            <a
              href="https://t.me/Tech_in_my_style_bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              tabIndex={menuOpen ? 0 : -1}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--text-muted, #718096)',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'color 0.2s ease, background 0.2s ease',
              }}
            >
              <i className="bi bi-telegram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

