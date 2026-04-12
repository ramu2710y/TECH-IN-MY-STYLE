import { useState, useEffect, useRef } from 'react'
import JsAdvNavbar, { useDarkMode } from '../components/JsAdvNavbar'
import JsAdvFooter from '../components/JsAdvFooter'
import '../styles/JsAdvConnect.css'

/* ─────────────────────────────────────────────────────────────────────────────
   STATIC DATA
───────────────────────────────────────────────────────────────────────────── */

const SOCIALS = [
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@techinmystyle',
    description: 'Follow for daily JS tips, code snippets, and development insights.',
    href: 'https://www.instagram.com/techinmystyle',
    icon: 'bi bi-instagram',
    color: '#e1306c',
    bg: 'rgba(225,48,108,0.08)',
    border: 'rgba(225,48,108,0.2)',
    cta: 'Follow on Instagram',
    badge: '5K+ Followers',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    handle: '@TECHINMYSTYLE',
    description: 'Watch in-depth JavaScript tutorials, project builds, and coding sessions.',
    href: 'https://www.youtube.com/@TECHINMYSTYLE',
    icon: 'bi bi-youtube',
    color: '#ff0000',
    bg: 'rgba(255,0,0,0.08)',
    border: 'rgba(255,0,0,0.2)',
    cta: 'Subscribe on YouTube',
    badge: '10K+ Subscribers',
  },
  {
    key: 'telegram',
    label: 'Telegram',
    handle: '@Tech_in_my_style_bot',
    description: 'Join our Telegram community for instant updates, Q&A, and exclusive content.',
    href: 'https://t.me/Tech_in_my_style_bot',
    icon: 'bi bi-telegram',
    color: '#0088cc',
    bg: 'rgba(0,136,204,0.08)',
    border: 'rgba(0,136,204,0.2)',
    cta: 'Join on Telegram',
    badge: '2K+ Members',
  },
  {
    key: 'github',
    label: 'GitHub',
    handle: 'techinmystyle',
    description: 'Explore all project source codes, contribute, and star the repositories.',
    href: 'https://github.com',
    icon: 'bi bi-github',
    color: '#6e40c9',
    bg: 'rgba(110,64,201,0.08)',
    border: 'rgba(110,64,201,0.2)',
    cta: 'View on GitHub',
    badge: '500+ Stars',
  },
]

const STATS = [
  { icon: 'bi bi-people-fill',   value: 17,   suffix: 'K+',  label: 'Community Members' },
  { icon: 'bi bi-play-circle-fill', value: 100, suffix: '+',  label: 'Video Tutorials'   },
  { icon: 'bi bi-code-square',   value: 54,   suffix: '',    label: 'JsAdvTopics Covered'    },
  { icon: 'bi bi-star-fill',     value: 500,  suffix: '+',   label: 'GitHub Stars'      },
]

const FAQS = [
  {
    id: 'faq-1',
    question: 'Is this platform completely free?',
    answer:
      'Yes — 100% free, forever. All topics, projects, the compiler, and resources are available at no cost. We believe quality JavaScript education should be accessible to everyone.',
  },
  {
    id: 'faq-2',
    question: 'Do I need prior JavaScript knowledge to get started?',
    answer:
      'A basic understanding of JavaScript fundamentals is recommended (variables, functions, arrays). This platform focuses on advanced concepts, so some prior experience will help you get the most out of each topic.',
  },
  {
    id: 'faq-3',
    question: 'How often is the content updated?',
    answer:
      'Content is updated regularly — new topics and projects are added as the JavaScript ecosystem evolves. Follow us on Instagram or subscribe to our YouTube channel to stay notified of fresh content.',
  },
  {
    id: 'faq-4',
    question: 'Can I contribute to the platform?',
    answer:
      'Absolutely! You can contribute via GitHub — whether it\'s fixing typos, adding examples, suggesting new topics, or submitting entire topic write-ups. Every contribution is welcome and appreciated.',
  },
]

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────────────────────── */
function AnimatedCounter({ end, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame
    const totalFrames = 60
    let currentFrame = 0

    const tick = () => {
      currentFrame++
      const progress = currentFrame / totalFrames
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (currentFrame < totalFrames) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, end])

  return <>{count}{suffix}</>
}

/* ─────────────────────────────────────────────────────────────────────────────
   FAQ ITEM  (manages its own open/closed state)
───────────────────────────────────────────────────────────────────────────── */
function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)
  const answerRef = useRef(null)

  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button
        className="faq-question"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={`ans-${faq.id}`}
      >
        <span className="faq-question__text">{faq.question}</span>
        <span className="faq-question__chevron" aria-hidden="true">
          <i className={`bi bi-chevron-down`} />
        </span>
      </button>
      <div
        id={`ans-${faq.id}`}
        className="faq-answer"
        ref={answerRef}
        style={{
          maxHeight: open ? (answerRef.current ? answerRef.current.scrollHeight + 'px' : '300px') : '0px',
        }}
      >
        <p className="faq-answer__text">{faq.answer}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function JsAdvConnect() {
  const { dark } = useDarkMode()

  /* hero entrance */
  const [heroVisible, setHeroVisible]     = useState(false)
  /* stats counter trigger */
  const [statsVisible, setStatsVisible]   = useState(false)
  const statsRef                          = useRef(null)
  /* contact form */
  const [formData, setFormData]           = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted]         = useState(false)
  const [sending, setSending]             = useState(false)
  const [formErrors, setFormErrors]       = useState({})

  /* ── hero entrance ── */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* ── stats IntersectionObserver ── */
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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* ── form handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (formErrors[name]) setFormErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim())    errs.name    = 'Name is required.'
    if (!formData.email.trim())   errs.email   = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
                                  errs.email   = 'Enter a valid email.'
    if (!formData.message.trim()) errs.message = 'Message cannot be empty.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setFormErrors(errs); return }
    setSending(true)
    /* simulate async send */
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }, 1200)
  }

  /* ─────────────────────────────────────────────────────────────────────────
     RENDER
  ───────────────────────────────────────────────────────────────────────── */
  return (
    <div className="connect-page">
      <JsAdvNavbar />

      {/* ════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════ */}
      <section className={`connect-hero${heroVisible ? ' connect-hero--visible' : ''}`} aria-labelledby="connect-heading">
        {/* decorative blobs */}
        <span className="connect-hero__blob connect-hero__blob--1" aria-hidden="true" />
        <span className="connect-hero__blob connect-hero__blob--2" aria-hidden="true" />
        <span className="connect-hero__blob connect-hero__blob--3" aria-hidden="true" />

        <div className="connect-hero__inner">
          <span className="connect-hero__badge">
            <i className="bi bi-lightning-charge-fill" /> Community
          </span>

          <h1 id="connect-heading" className="connect-hero__title">
            Let's&nbsp;JsAdvConnect &amp;&nbsp;Build&nbsp;Together
          </h1>

          <p className="connect-hero__subtitle">
            Join thousands of developers learning advanced JavaScript. Follow along, ask
            questions, share your progress — and never code alone.
          </p>

          {/* ── Stats row ── */}
          <div className="connect-hero__stats" ref={statsRef}>
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="connect-stat"
                style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
              >
                <span className="connect-stat__icon"><i className={s.icon} /></span>
                <strong className="connect-stat__value">
                  <AnimatedCounter end={s.value} suffix={s.suffix} active={statsVisible} />
                </strong>
                <span className="connect-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SOCIAL CARDS
      ════════════════════════════════════════════════════════ */}
      <section className="socials-section" aria-labelledby="socials-heading">
        <div className="connect-container">
          <div className="section-header">
            <h2 id="socials-heading" className="section-header__title">
              Find Us Everywhere
            </h2>
            <p className="section-header__sub">
              Choose your favourite platform and join the conversation
            </p>
          </div>

          <div className="socials-grid">
            {SOCIALS.map((s, i) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{
                  '--sc-color':  s.color,
                  '--sc-bg':     s.bg,
                  '--sc-border': s.border,
                  animationDelay: `${i * 0.1}s`,
                }}
                aria-label={`${s.cta} — opens in new tab`}
              >
                {/* icon */}
                <div className="social-card__icon-wrap">
                  <i className={s.icon} aria-hidden="true" />
                </div>

                {/* text */}
                <div className="social-card__body">
                  <div className="social-card__top">
                    <span className="social-card__label">{s.label}</span>
                    <span className="social-card__badge">{s.badge}</span>
                  </div>
                  <span className="social-card__handle">{s.handle}</span>
                  <p className="social-card__desc">{s.description}</p>
                </div>

                {/* CTA */}
                <div className="social-card__footer">
                  <span className="social-card__cta">
                    {s.cta} <i className="bi bi-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FAQ ACCORDION
      ════════════════════════════════════════════════════════ */}
      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="connect-container connect-container--narrow">
          <div className="section-header">
            <h2 id="faq-heading" className="section-header__title">
              Frequently Asked Questions
            </h2>
            <p className="section-header__sub">
              Quick answers to common questions about the platform
            </p>
          </div>

          <div className="faq-list" role="list">
            {FAQS.map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CONTACT FORM
      ════════════════════════════════════════════════════════ */}
      <section className="contact-section" aria-labelledby="contact-heading">
        <div className="connect-container connect-container--narrow">
          <div className="section-header">
            <h2 id="contact-heading" className="section-header__title">
              Send a Message
            </h2>
            <p className="section-header__sub">
              Have a suggestion, question, or just want to say hi? We'd love to hear from you.
            </p>
          </div>

          {submitted ? (
            <div className="success-message" role="status" aria-live="polite">
              <span className="success-message__icon"><i className="bi bi-check-circle-fill" /></span>
              <div>
                <strong>Message sent! ✓</strong>
                <p>Thanks for reaching out — we'll get back to you as soon as possible.</p>
              </div>
              <button
                className="success-message__reset"
                onClick={() => setSubmitted(false)}
              >
                Send another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              {/* Name */}
              <div className={`form-group${formErrors.name ? ' form-group--error' : ''}`}>
                <label className="form-label" htmlFor="contact-name">
                  <i className="bi bi-person" aria-hidden="true" /> Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-describedby={formErrors.name ? 'err-name' : undefined}
                />
                {formErrors.name && (
                  <span id="err-name" className="form-error" role="alert">
                    <i className="bi bi-exclamation-circle" /> {formErrors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className={`form-group${formErrors.email ? ' form-group--error' : ''}`}>
                <label className="form-label" htmlFor="contact-email">
                  <i className="bi bi-envelope" aria-hidden="true" /> Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-describedby={formErrors.email ? 'err-email' : undefined}
                />
                {formErrors.email && (
                  <span id="err-email" className="form-error" role="alert">
                    <i className="bi bi-exclamation-circle" /> {formErrors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className={`form-group${formErrors.message ? ' form-group--error' : ''}`}>
                <label className="form-label" htmlFor="contact-message">
                  <i className="bi bi-chat-text" aria-hidden="true" /> Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us what's on your mind…"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  aria-describedby={formErrors.message ? 'err-message' : undefined}
                />
                {formErrors.message && (
                  <span id="err-message" className="form-error" role="alert">
                    <i className="bi bi-exclamation-circle" /> {formErrors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={`submit-btn${sending ? ' submit-btn--sending' : ''}`}
                disabled={sending}
              >
                {sending ? (
                  <>
                    <span className="submit-btn__spinner" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <i className="bi bi-send-fill" aria-hidden="true" /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <JsAdvFooter />
    </div>
  )
}
