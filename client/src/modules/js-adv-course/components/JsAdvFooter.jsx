import { Link } from 'react-router-dom'
import '../styles/JsAdvFooter.css'

/* ─────────────────────────────────────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────────────────────────────────────── */
const LEARN_LINKS = [
  { label: 'JsAdvTopics',    to: '/js-adv-course/topics',    icon: 'bi bi-code-square'    },
  { label: 'JsAdvCompiler',  to: '/js-adv-course/compiler',  icon: 'bi bi-terminal-fill'  },
  { label: 'JsAdvDashboard', to: '/js-adv-course/dashboard', icon: 'bi bi-graph-up-arrow' },
  { label: 'JsAdvProjects',  to: '/js-adv-course/projects',  icon: 'bi bi-layers-fill'    },
]

const RESOURCE_LINKS = [
  { label: 'JsAdvResources',     to: '/js-adv-course/resources', icon: 'bi bi-journal-code'     },
  { label: "Let's JsAdvConnect", to: '/js-adv-course/connect',   icon: 'bi bi-person-lines-fill' },
]

const SOCIAL_LINKS = [
  {
    label:     'Instagram',
    href:      'https://www.instagram.com/techinmystyle',
    icon:      'bi bi-instagram',
    className: 'footer__social-link--instagram',
    ariaLabel: 'Follow on Instagram',
  },
  {
    label:     'YouTube',
    href:      'https://www.youtube.com/@TECHINMYSTYLE',
    icon:      'bi bi-youtube',
    className: 'footer__social-link--youtube',
    ariaLabel: 'Subscribe on YouTube',
  },
  {
    label:     'GitHub',
    href:      'https://github.com/techinmystyle',
    icon:      'bi bi-github',
    className: 'footer__social-link--github',
    ariaLabel: 'View on GitHub',
  },
  {
    label:     'Telegram',
    href:      'https://t.me/Tech_in_my_style_bot',
    icon:      'bi bi-telegram',
    className: 'footer__social-link--telegram',
    ariaLabel: 'Join on Telegram',
  },
]

const COMMUNITY_ITEMS = [
  {
    icon:      'bi bi-telegram',
    label:     'Telegram Bot',
    value:     'Tech_in_my_style_bot',
    href:      'https://t.me/Tech_in_my_style_bot',
    hint:      'Get daily JS tips',
    className: 'footer__community-item--telegram',
  },
  {
    icon:      'bi bi-youtube',
    label:     'YouTube Channel',
    value:     '@TECHINMYSTYLE',
    href:      'https://www.youtube.com/@TECHINMYSTYLE',
    hint:      'Watch tutorials',
    className: 'footer__community-item--youtube',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   Helper
───────────────────────────────────────────────────────────────────────────── */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/* ─────────────────────────────────────────────────────────────────────────────
   JsAdvFooter component  (default export)
───────────────────────────────────────────────────────────────────────────── */
export default function JsAdvFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">

      {/* ── Top accent gradient bar ── */}
      <div className="footer__accent-bar" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════════
          BODY  —  4-column grid
      ════════════════════════════════════════════════════════════════ */}
      <div className="footer__body">

        {/* ── Column 1 : About ──────────────────────────────────────── */}
        <div className="footer__col footer__col--about">

          {/* Logo */}
          <Link to="/js-adv-course/" className="footer__logo" aria-label="JavaScript Advanced In My Style — JsAdvHome">
            <span className="footer__logo-tag" aria-hidden="true">&lt;/&gt;</span>
            <span className="footer__logo-brand">JS.ADV</span>
          </Link>

          {/* Tagline */}
          <p className="footer__tagline">
            Master JavaScript. Build the Web.
          </p>

          {/* Description */}
          <p className="footer__description">
            Your ultimate resource for mastering advanced JavaScript — closures,
            prototypes, design patterns, async deep dives, Proxy & Reflect, generators,
            and cutting-edge ES2022+ features.
          </p>

          {/* Social icons */}
          <div
            className="footer__social"
            role="list"
            aria-label="Social media links"
          >
            {SOCIAL_LINKS.map(({ label, href, icon, className, ariaLabel }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer__social-link ${className}`}
                aria-label={ariaLabel}
                role="listitem"
                title={label}
              >
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>

        </div>

        {/* ── Column 2 : Learn ──────────────────────────────────────── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">
            <i className="bi bi-mortarboard-fill" aria-hidden="true" />
            Learn
          </h3>
          <ul className="footer__link-list" role="list">
            {LEARN_LINKS.map(({ label, to, icon }) => (
              <li key={to} role="listitem">
                <Link to={to} className="footer__link">
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mini badge */}
          <div className="footer__badge-chip" aria-hidden="true">
            <i className="bi bi-lightning-charge-fill" />
            <span>New topics weekly</span>
          </div>
        </div>

        {/* ── Column 3 : JsAdvResources ──────────────────────────────────── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">
            <i className="bi bi-bookmarks-fill" aria-hidden="true" />
            JsAdvResources
          </h3>
          <ul className="footer__link-list" role="list">
            {RESOURCE_LINKS.map(({ label, to, icon }) => (
              <li key={to} role="listitem">
                <Link to={to} className="footer__link">
                  <i className={icon} aria-hidden="true" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Topic count highlight */}
          <div className="footer__stats-block">
            <div className="footer__stat">
              <span className="footer__stat-number">56+</span>
              <span className="footer__stat-label">JsAdvTopics</span>
            </div>
            <div className="footer__stat">
              <span className="footer__stat-number">12</span>
              <span className="footer__stat-label">Categories</span>
            </div>
            <div className="footer__stat">
              <span className="footer__stat-number">Free</span>
              <span className="footer__stat-label">Always</span>
            </div>
          </div>
        </div>

        {/* ── Column 4 : Community ──────────────────────────────────── */}
        <div className="footer__col">
          <h3 className="footer__col-heading">
            <i className="bi bi-people-fill" aria-hidden="true" />
            Community
          </h3>
          <p className="footer__community-intro">
            Join our developer community and stay up to date with the latest
            JavaScript tutorials and tips.
          </p>

          <ul className="footer__community-list" role="list">
            {COMMUNITY_ITEMS.map(({ icon, label, value, href, hint, className }) => (
              <li
                key={label}
                className={`footer__community-item ${className}`}
                role="listitem"
              >
                <span className="footer__community-icon-bubble" aria-hidden="true">
                  <i className={icon} />
                </span>
                <div className="footer__community-text">
                  <span className="footer__community-label">{label}</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__community-value"
                    aria-label={`${label}: ${value}`}
                  >
                    {value}
                  </a>
                  <span className="footer__community-hint">{hint}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ════════════════════════════════════════════════════════════════
          BOTTOM BAR
      ════════════════════════════════════════════════════════════════ */}
      <div className="footer__bottom" role="contentinfo">

        <p className="footer__copyright">
          &copy; 2025&nbsp;
          <span className="footer__copyright-brand">
            JavaScript Advanced In My Style
          </span>.&nbsp;
          Built with&nbsp;
          <i className="bi bi-heart-fill footer__heart-icon" aria-hidden="true" />&nbsp;
          for developers.
        </p>

        <button
          className="footer__back-top"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          title="Back to top"
          type="button"
        >
          <i className="bi bi-arrow-up-short" aria-hidden="true" />
          Back to Top
        </button>

      </div>

    </footer>
  )
}
