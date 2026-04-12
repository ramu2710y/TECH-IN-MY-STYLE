import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/HtmlFooter.css'

/* ── Quick links ── */
const QUICK_LINKS = [
  { label: 'Home', to: '/html-course', icon: 'bi bi-chevron-right' },
  { label: 'HTML Reference', to: '/html-course/reference', icon: 'bi bi-chevron-right' },
  { label: 'Resources', to: '/html-course/resources', icon: 'bi bi-chevron-right' },
  { label: 'Playground', to: '/html-course/compiler', icon: 'bi bi-chevron-right' },
  { label: "Let's Connect", to: '/html-course/connect', icon: 'bi bi-chevron-right' },
]

/* ── Courses ── */
const COURSE_LINKS = [
  { label: 'HTML Basics', to: '/html-course/reference', icon: 'bi bi-chevron-right' },
  { label: 'HTML5 Tags A–Z', to: '/html-course/reference', icon: 'bi bi-chevron-right' },
  { label: 'HTML Forms', to: '/html-course/reference', icon: 'bi bi-chevron-right' },
  { label: 'Semantic HTML', to: '/html-course/reference', icon: 'bi bi-chevron-right' },
  { label: 'HTML Tables', to: '/html-course/reference', icon: 'bi bi-chevron-right' },
  { label: 'HTML Media', to: '/html-course/reference', icon: 'bi bi-chevron-right' },
]

/* ── Social platforms ── */
const SOCIAL_LINKS = [
  {
    key: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/Tech_in_my_style_bot',
    icon: 'bi bi-telegram',
    modifier: 'footer__social-link--telegram',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/message/TECHINMYSTYLE',
    icon: 'bi bi-whatsapp',
    modifier: 'footer__social-link--whatsapp',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/techinmystyle?igsh=YXIxdWl2NGFmdXZk',
    icon: 'bi bi-instagram',
    modifier: 'footer__social-link--instagram',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@TECHINMYSTYLE',
    icon: 'bi bi-youtube',
    modifier: 'footer__social-link--youtube',
  },
]

/* ── Contact entries ── */
const CONTACT_ITEMS = [
  {
    key: 'email',
    icon: 'bi bi-envelope-fill',
    label: 'Email us',
    value: 'techinmystyle@gmail.com',
    href: 'mailto:techinmystyle@gmail.com',
  },
  {
    key: 'youtube',
    icon: 'bi bi-youtube',
    label: 'YouTube channel',
    value: '@TECHINMYSTYLE',
    href: 'https://www.youtube.com/@TECHINMYSTYLE',
  },
  {
    key: 'instagram',
    icon: 'bi bi-instagram',
    label: 'Instagram',
    value: '@techinmystyle',
    href: 'https://www.instagram.com/techinmystyle',
  },
  {
    key: 'telegram',
    icon: 'bi bi-telegram',
    label: 'Telegram bot',
    value: 'Tech_in_my_style_bot',
    href: 'https://t.me/Tech_in_my_style_bot',
  },
]

/* ── Bottom bar links ── */
const BOTTOM_LINKS = [
  { label: 'Privacy Policy', to: '/html-course' },
  { label: 'Terms of Use', to: '/html-course' },
  { label: 'Sitemap', to: '/html-course' },
]

export default function HtmlFooter() {
  const [year] = useState(() => new Date().getFullYear())
  const [showBackTop, setShowBackTop] = useState(false)

  /* Show back-to-top pill only after scrolling 300px */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer" role="contentinfo">

      {/* ════════════════════════════════════════
          MAIN BODY — 4-column grid
          ════════════════════════════════════════ */}
      <div className="footer__body">

        {/* ── Brand column ── */}
        <div className="footer__brand">
          <div className="footer__brand-info">
            {/* Logo */}
            <Link
              to="/html-course"
              className="footer__logo"
              aria-label="HTML in My Style — Home"
            >
              <span className="footer__logo-tag">&lt;/&gt;</span>
              <span className="footer__logo-html">HTML</span>
              <span className="footer__logo-rest">IN MY STYLE</span>
            </Link>

            {/* Brand accent divider */}
            <div className="footer__brand-divider" aria-hidden="true" />

            {/* Tagline */}
            <p className="footer__tagline">
              Learn HTML and web development the right way — with clear
              explanations, interactive examples, and hands-on practice.
              Powered by <strong style={{ color: '#e34f26' }}>TECH IN MY STYLE</strong>.
            </p>

            {/* Social icons */}
            <div className="footer__social" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ key, label, href, icon, modifier }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__social-link ${modifier}`}
                  aria-label={label}
                  title={label}
                  role="listitem"
                >
                  <i className={icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Quick Links column ── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">Quick Links</h3>
          <ul className="footer__links" role="list">
            {QUICK_LINKS.map(({ label, to, icon }) => (
              <li key={label}>
                <Link to={to} className="footer__link">
                  <i className={icon} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Courses column ── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">Courses</h3>
          <ul className="footer__links" role="list">
            {COURSE_LINKS.map(({ label, to, icon }) => (
              <li key={label}>
                <Link to={to} className="footer__link">
                  <i className={icon} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact column ── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">Contact</h3>
          <ul className="footer__contact-list" role="list">
            {CONTACT_ITEMS.map(({ key, icon, label, value, href }) => (
              <li key={key} className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <i className={icon} />
                </span>
                <div className="footer__contact-text">
                  <span className="footer__contact-label">{label}</span>
                  <a
                    href={href}
                    className="footer__contact-link footer__contact-value"
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  >
                    {value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>{/* /footer__body */}

      {/* ════════════════════════════════════════
          BOTTOM BAR
          ════════════════════════════════════════ */}
      <div className="footer__bottom">

        {/* Copyright */}
        <p className="footer__bottom-left">
          <i className="bi bi-c-circle" aria-hidden="true" />
          {year}&nbsp;
          <strong>HTML IN MY STYLE</strong>
          &nbsp;·&nbsp;All rights reserved
          &nbsp;
          <i className="bi bi-heart-fill" aria-hidden="true" style={{ color: '#e34f26', fontSize: '0.8rem' }} />
        </p>

        {/* Bottom nav + back-to-top */}
        <div className="footer__bottom-right">
          {BOTTOM_LINKS.map(({ label, to }, idx) => (
            <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem' }}>
              <Link to={to} className="footer__bottom-link">
                {label}
              </Link>
              {idx < BOTTOM_LINKS.length - 1 && (
                <span className="footer__bottom-sep" aria-hidden="true">●</span>
              )}
            </span>
          ))}

          {/* Back to top pill */}
          <button
            className="footer__back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            type="button"
            style={{
              opacity: showBackTop ? 1 : 0.45,
              pointerEvents: showBackTop ? 'auto' : 'none',
              transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.25s ease, box-shadow 0.25s ease',
            }}
          >
            <i className="bi bi-arrow-up" aria-hidden="true" />
            Back to top
          </button>

        </div>

      </div>{/* /footer__bottom */}

      {/* ════════════════════════════════════════
          POWERED BY ROW
          ════════════════════════════════════════ */}
      <div className="footer__powered">
        <i className="bi bi-lightning-charge-fill" aria-hidden="true" />
        Powered by&nbsp;
        <a
          href="https://www.youtube.com/@TECHINMYSTYLE"
          target="_blank"
          rel="noopener noreferrer"
        >
          TECH IN MY STYLE
        </a>
        &nbsp;·&nbsp;Made with&nbsp;
        <i className="bi bi-heart-fill" aria-hidden="true" />
        &nbsp;for web learners everywhere
      </div>

    </footer>
  )
}
