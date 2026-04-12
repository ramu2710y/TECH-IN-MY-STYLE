import { Link } from 'react-router-dom'
import '../styles/JsIntFooter.css'

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'JsIntHome',          to: '/js-int-course/',          icon: 'bi bi-chevron-right' },
  { label: 'JS Topics',     to: '/js-int-course/js-int',    icon: 'bi bi-chevron-right' },
  { label: 'JsIntResources',     to: '/js-int-course/resources', icon: 'bi bi-chevron-right' },
  { label: 'Playground',    to: '/js-int-course/compiler',  icon: 'bi bi-chevron-right' },
  { label: "Let's JsIntConnect", to: '/js-int-course/connect',   icon: 'bi bi-chevron-right' },
]

const TOPIC_LINKS = [
  { label: 'Array Methods',  to: '/js-int-course/js-int/map'           },
  { label: 'Closures',       to: '/js-int-course/js-int/closures'      },
  { label: 'Promises',       to: '/js-int-course/js-int/promises'      },
  { label: 'async/await',    to: '/js-int-course/js-int/async-await'   },
  { label: 'Fetch API',      to: '/js-int-course/js-int/fetch'         },
  { label: 'localStorage',   to: '/js-int-course/js-int/localStorage'  },
  { label: 'Destructuring',  to: '/js-int-course/js-int/destructuring' },
  { label: 'DOM Methods',    to: '/js-int-course/js-int/classlist'     },
]

const SOCIAL_LINKS = [
  {
    label:     'Telegram',
    href:      'https://t.me/Tech_in_my_style_bot',
    icon:      'bi bi-telegram',
    className: 'footer__social-link--telegram',
  },
  {
    label:     'WhatsApp',
    href:      'https://wa.me/message/techinmystyle',
    icon:      'bi bi-whatsapp',
    className: 'footer__social-link--whatsapp',
  },
  {
    label:     'Instagram',
    href:      'https://www.instagram.com/techinmystyle',
    icon:      'bi bi-instagram',
    className: 'footer__social-link--instagram',
  },
  {
    label:     'YouTube',
    href:      'https://www.youtube.com/@TECHINMYSTYLE',
    icon:      'bi bi-youtube',
    className: 'footer__social-link--youtube',
  },
]

const CONTACT_ITEMS = [
  {
    icon:      'bi bi-envelope-fill',
    label:     'Email',
    value:     'techinmystyle@gmail.com',
    href:      'mailto:techinmystyle@gmail.com',
    className: 'footer__contact-item--email',
  },
  {
    icon:      'bi bi-youtube',
    label:     'YouTube',
    value:     '@TECHINMYSTYLE',
    href:      'https://www.youtube.com/@TECHINMYSTYLE',
    className: 'footer__contact-item--youtube',
  },
  {
    icon:      'bi bi-instagram',
    label:     'Instagram',
    value:     '@techinmystyle',
    href:      'https://www.instagram.com/techinmystyle',
    className: 'footer__contact-item--instagram',
  },
  {
    icon:      'bi bi-telegram',
    label:     'Telegram',
    value:     'Tech_in_my_style_bot',
    href:      'https://t.me/Tech_in_my_style_bot',
    className: 'footer__contact-item--telegram',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   Helper
───────────────────────────────────────────────────────────────────────────── */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/* ─────────────────────────────────────────────────────────────────────────────
   JsIntFooter component  (default export)
───────────────────────────────────────────────────────────────────────────── */
export default function JsIntFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" aria-label="Site footer">

      {/* ── Top gradient accent bar ── */}
      <div className="footer__accent-bar" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════════
          BODY  —  4-column grid
      ════════════════════════════════════════════════════════════════ */}
      <div className="footer__body">

        {/* ── Column 1 : Brand ──────────────────────────────────────── */}
        <div className="footer__col footer__col--brand">

          {/* Logo */}
          <div className="footer__logo" aria-label="JS Intermediate In My Style">
            <span className="footer__logo-badge" aria-hidden="true">
              <span className="footer__logo-js">&lt;JS&#8209;INT/&gt;</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="footer__tagline">
            Your go-to resource for mastering intermediate JavaScript — closures,
            promises, async/await, ES6+ patterns, Fetch API, and much more.
          </p>

          {/* Social icons */}
          <div
            className="footer__social"
            role="list"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS.map(({ label, href, icon, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer__social-link ${className}`}
                aria-label={label}
                role="listitem"
                title={label}
              >
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Mini newsletter / CTA chip */}
          <div className="footer__cta-chip">
            <i className="bi bi-lightning-charge-fill" aria-hidden="true" />
            <span>New topics added every week</span>
          </div>

        </div>

        {/* ── Column 2 : Quick Links ───────────────────────────────── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">
            <i className="bi bi-link-45deg" aria-hidden="true" />
            Quick Links
          </h3>
          <ul className="footer__link-list" role="list">
            {QUICK_LINKS.map(({ label, to, icon }) => (
              <li key={to} role="listitem">
                <Link to={to} className="footer__link">
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3 : JS Topics ─────────────────────────────────── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">
            <i className="bi bi-braces-asterisk" aria-hidden="true" />
            JS Topics
          </h3>
          <ul className="footer__link-list" role="list">
            {TOPIC_LINKS.map(({ label, to }) => (
              <li key={to} role="listitem">
                <Link to={to} className="footer__link">
                  <i className="bi bi-chevron-right" aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 4 : Contact ───────────────────────────────────── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">
            <i className="bi bi-send-fill" aria-hidden="true" />
            Get In Touch
          </h3>
          <ul className="footer__contact-list" role="list">
            {CONTACT_ITEMS.map(({ icon, label, value, href, className }) => (
              <li
                key={label}
                className={`footer__contact-item ${className}`}
                role="listitem"
              >
                <span
                  className="footer__contact-icon-bubble"
                  aria-hidden="true"
                >
                  <i className={icon} />
                </span>
                <div className="footer__contact-text">
                  <span className="footer__contact-label">{label}</span>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="footer__contact-value"
                    aria-label={`${label}: ${value}`}
                  >
                    {value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ════════════════════════════════════════════════════════════════
          POWERED BY row
      ════════════════════════════════════════════════════════════════ */}
      <div className="footer__powered">
        <p>
          Powered by&nbsp;
          <a
            href="https://www.youtube.com/@TECHINMYSTYLE"
            target="_blank"
            rel="noopener noreferrer"
          >
            TECH IN MY STYLE
          </a>
          &nbsp;&middot;&nbsp;Built with&nbsp;
          <i
            className="bi bi-heart-fill footer__heart-icon"
            aria-hidden="true"
          />
          &nbsp;&amp;&nbsp;JavaScript
        </p>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          BOTTOM BAR  —  copyright · legal links · back to top
      ════════════════════════════════════════════════════════════════ */}
      <div className="footer__bottom" role="contentinfo">

        <p className="footer__copyright">
          &copy; {year}&nbsp;
          <span className="footer__copyright-brand">TECH IN MY STYLE</span>.
          &nbsp;All rights reserved.
        </p>

        <nav
          className="footer__legal-links"
          aria-label="Legal navigation"
        >
          <Link to="/js-int-course/privacy-policy" className="footer__legal-link">
            Privacy Policy
          </Link>
          <span className="footer__legal-sep" aria-hidden="true">&middot;</span>
          <Link to="/js-int-course/terms" className="footer__legal-link">
            Terms of Use
          </Link>
          <span className="footer__legal-sep" aria-hidden="true">&middot;</span>
          <Link to="/js-int-course/sitemap" className="footer__legal-link">
            Sitemap
          </Link>
        </nav>

        <button
          className="footer__back-top"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          title="Back to top"
        >
          <i className="bi bi-arrow-up-short" aria-hidden="true" />
          Back to Top
        </button>

      </div>

    </footer>
  )
}
