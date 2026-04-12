import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const QUICK_LINKS = [
  { label: 'Home',               to: '/js-basic-course'          },
  { label: 'JS Reference',       to: '/js-basic-course/js'       },
  { label: 'Resources',          to: '/js-basic-course/resources' },
  { label: 'Playground',         to: '/js-basic-course/compiler'  },
  { label: "Let's Connect",      to: '/js-basic-course/connect'   },
]

const TOPIC_LINKS = [
  { label: 'Variables & Types',  to: '/js-basic-course/js/let'               },
  { label: 'Functions',          to: '/js-basic-course/js/function-declaration' },
  { label: 'Arrays',             to: '/js-basic-course/js/create-arrays'     },
  { label: 'Objects',            to: '/js-basic-course/js/create-objects'    },
  { label: 'DOM Basics',         to: '/js-basic-course/js/querySelector'     },
  { label: 'Events',             to: '/js-basic-course/js/addEventListener'  },
  { label: 'Loops',              to: '/js-basic-course/js/for-loop'          },
  { label: 'Error Handling',     to: '/js-basic-course/js/try-catch'         },
]

const SOCIAL_LINKS = [
  {
    key: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/Tech_in_my_style_bot',
    icon: 'bi bi-telegram',
    hoverColor: '#0088cc',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://whatsapp.com/channel/0029VbAZrCD5fM5aOU10Av0d',
    icon: 'bi bi-whatsapp',
    hoverColor: '#25d366',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/techinmystyle/?igsh=YXIxdWl2NGFmdXZk',
    icon: 'bi bi-instagram',
    hoverColor: '#e1306c',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@TECHINMYSTYLE',
    icon: 'bi bi-youtube',
    hoverColor: '#ff0000',
  },
]

const CONTACT_ITEMS = [
  {
    key: 'email',
    icon: 'bi bi-envelope-fill',
    label: 'Email',
    value: 'techinmystyle@gmail.com',
    href: 'mailto:techinmystyle@gmail.com',
  },
  {
    key: 'youtube',
    icon: 'bi bi-youtube',
    label: 'YouTube',
    value: '@TECHINMYSTYLE',
    href: 'https://www.youtube.com/@TECHINMYSTYLE',
  },
  {
    key: 'telegram',
    icon: 'bi bi-telegram',
    label: 'Telegram',
    value: 'Tech_in_my_style_bot',
    href: 'https://t.me/Tech_in_my_style_bot',
  },
]

/* ── Helper: FooterLink ─────────────────────────────────────────── */
function FooterLink({ to, label }) {
  const [hov, setHov] = useState(false)
  return (
    <Link
      to={to}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.875rem',
        color: hov ? '#F7DF1E' : '#7a7a4a',
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'color 0.15s ease, padding-left 0.15s ease',
        paddingLeft: hov ? '6px' : '0',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <i className="bi bi-chevron-right" style={{ fontSize: '0.65rem', opacity: hov ? 1 : 0.4 }} />
      {label}
    </Link>
  )
}

/* ── Helper: SocialIcon ─────────────────────────────────────────── */
function SocialIcon({ href, icon, label, hoverColor }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: hov ? hoverColor : 'rgba(247,223,30,0.10)',
        border: `1px solid ${hov ? hoverColor : 'rgba(247,223,30,0.18)'}`,
        color: hov ? '#fff' : '#7a7a4a',
        fontSize: '1rem',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hov ? `0 6px 16px ${hoverColor}55` : 'none',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <i className={icon} />
    </a>
  )
}

/* ── Main Footer ─────────────────────────────────────────────────── */
export default function JsFooter() {
  const [year] = useState(() => new Date().getFullYear())
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #0e0e0a 0%, #1a1a10 60%, #141410 100%)',
        color: '#c9c9a0',
        paddingTop: '4rem',
        fontFamily: "'Inter', system-ui, sans-serif",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #323330, #F7DF1E, #F0B429, #F7DF1E, #323330)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Decorative blobs */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          top: '-150px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(247,223,30,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          bottom: '-80px',
          left: '-60px',
          background: 'radial-gradient(circle, rgba(240,180,41,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(247,223,30,0.10)',
          }}
        >
          {/* ── Brand Column ── */}
          <div>
            {/* Logo */}
            <Link
              to="/js-basic-course/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#F7DF1E',
                  color: '#323330',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 900,
                  fontSize: '0.85rem',
                  padding: '0.22rem 0.6rem',
                  borderRadius: '6px',
                  letterSpacing: '0.04em',
                  boxShadow: '0 2px 8px rgba(247,223,30,0.35)',
                }}
              >
                JS
              </span>
              <span
                style={{
                  color: '#f5f5e8',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                BASIC IN MY STYLE
              </span>
            </Link>

            {/* Divider pill */}
            <div
              style={{
                width: '48px',
                height: '3px',
                background: 'linear-gradient(90deg, #F7DF1E, #F0B429)',
                borderRadius: '9999px',
                marginBottom: '1rem',
              }}
            />

            <p
              style={{
                fontSize: '0.875rem',
                color: '#7a7a4a',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
                maxWidth: '260px',
              }}
            >
              Learn JavaScript from the basics — variables, functions, arrays,
              DOM, events and more. Free forever. Powered by{' '}
              <strong style={{ color: '#F7DF1E' }}>TECH IN MY STYLE</strong>.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {SOCIAL_LINKS.map(({ key, label, href, icon, hoverColor }) => (
                <SocialIcon
                  key={key}
                  href={href}
                  icon={icon}
                  label={label}
                  hoverColor={hoverColor}
                />
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#f5f5e8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <i className="bi bi-link-45deg" style={{ color: '#F7DF1E', fontSize: '1rem' }} />
              Quick Links
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <FooterLink to={to} label={label} />
                </li>
              ))}
            </ul>
          </div>

          {/* ── JS Topics ── */}
          <div>
            <h3
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#f5f5e8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <i className="bi bi-braces-asterisk" style={{ color: '#F0B429', fontSize: '1rem' }} />
              JS Topics
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {TOPIC_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <FooterLink to={to} label={label} />
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3
              style={{
                fontSize: '0.82rem',
                fontWeight: 800,
                color: '#f5f5e8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <i className="bi bi-envelope-fill" style={{ color: '#C9B800', fontSize: '1rem' }} />
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {CONTACT_ITEMS.map(({ key, icon, label, value, href }) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: 'rgba(247,223,30,0.10)',
                      border: '1px solid rgba(247,223,30,0.18)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F7DF1E',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                    }}
                  >
                    <i className={icon} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: '#5a5a3a',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {label}
                    </div>
                    <a
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      style={{
                        fontSize: '0.82rem',
                        color: '#F7DF1E',
                        textDecoration: 'none',
                        fontWeight: 600,
                        transition: 'opacity 0.15s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.72')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.5rem 0',
          }}
        >
          <p
            style={{
              fontSize: '0.82rem',
              color: '#5a5a3a',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <i className="bi bi-c-circle" />
            {year}{' '}
            <strong style={{ color: '#7a7a4a' }}>JAVASCRIPT BASIC IN MY STYLE</strong>
            &nbsp;· All rights reserved&nbsp;
            <i className="bi bi-heart-fill" style={{ color: '#F7DF1E', fontSize: '0.75rem' }} />
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '0.78rem', color: '#5a5a3a' }}>
              <i
                className="bi bi-lightning-charge-fill"
                style={{ color: '#F7DF1E', marginRight: '0.35rem' }}
              />
              Powered by TECH IN MY STYLE
            </span>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.95rem',
                background: showBackTop
                  ? 'linear-gradient(135deg, #323330, #F7DF1E)'
                  : 'rgba(247,223,30,0.10)',
                border: '1px solid rgba(247,223,30,0.22)',
                borderRadius: '9999px',
                color: showBackTop ? '#323330' : '#F7DF1E',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.25s ease',
                opacity: showBackTop ? 1 : 0.6,
              }}
              aria-label="Back to top"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #323330, #F7DF1E)'
                e.currentTarget.style.color = '#323330'
                e.currentTarget.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = showBackTop
                  ? 'linear-gradient(135deg, #323330, #F7DF1E)'
                  : 'rgba(247,223,30,0.10)'
                e.currentTarget.style.color = showBackTop ? '#323330' : '#F7DF1E'
                e.currentTarget.style.opacity = showBackTop ? '1' : '0.6'
              }}
            >
              <i className="bi bi-arrow-up" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
