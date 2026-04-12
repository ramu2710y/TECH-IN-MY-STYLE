import { useState, useEffect, useRef } from 'react'
import JsIntNavbar, { useDarkMode } from '../components/JsIntNavbar'
import JsIntFooter from '../components/JsIntFooter'
import '../styles/JsIntConnect.css'

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const SOCIALS = [
  {
    key:         'youtube',
    label:       'YouTube',
    handle:      '@TECHINMYSTYLE',
    description: 'Subscribe for JS tutorials, tips, and project walkthroughs. New videos every week covering intermediate JavaScript concepts.',
    href:        'https://www.youtube.com/@TECHINMYSTYLE',
    icon:        'bi bi-youtube',
    color:       '#FF0000',
    bg:          'rgba(255, 0, 0, 0.08)',
    border:      'rgba(255, 0, 0, 0.25)',
    cta:         'Subscribe Now',
    badge:       'Video Tutorials',
    stats:       '1K+ Subscribers',
  },
  {
    key:         'instagram',
    label:       'Instagram',
    handle:      '@techinmystyle',
    description: 'Daily tips, code snippets, and community updates. Follow for quick JS lessons, infographics, and coding motivation.',
    href:        'https://www.instagram.com/techinmystyle',
    icon:        'bi bi-instagram',
    color:       '#E1306C',
    bg:          'rgba(225, 48, 108, 0.08)',
    border:      'rgba(225, 48, 108, 0.25)',
    cta:         'Follow Us',
    badge:       'Daily Updates',
    stats:       '500+ Followers',
  },
  {
    key:         'telegram',
    label:       'Telegram',
    handle:      'Tech_in_my_style_bot',
    description: 'Get instant access to notes, resources, and course updates. Join the channel to never miss a new lesson or resource drop.',
    href:        'https://t.me/Tech_in_my_style_bot',
    icon:        'bi bi-telegram',
    color:       '#0088CC',
    bg:          'rgba(0, 136, 204, 0.08)',
    border:      'rgba(0, 136, 204, 0.25)',
    cta:         'Join Channel',
    badge:       'Notes & JsIntResources',
    stats:       'Active Community',
  },
  {
    key:         'whatsapp',
    label:       'WhatsApp',
    handle:      'TECHINMYSTYLE',
    description: 'JsIntConnect with fellow learners and get support. Ask questions, share your projects, and grow together as a community.',
    href:        'https://wa.me/message/TECHINMYSTYLE',
    icon:        'bi bi-whatsapp',
    color:       '#25D366',
    bg:          'rgba(37, 211, 102, 0.08)',
    border:      'rgba(37, 211, 102, 0.25)',
    cta:         'Message Us',
    badge:       'Community Support',
    stats:       'Quick Responses',
  },
]

const STATS = [
  { icon: 'bi bi-people-fill',         value: '1K+',  label: 'Subscribers',       color: '#FF0000' },
  { icon: 'bi bi-chat-dots-fill',      value: '500+', label: 'Community Members',  color: '#25D366' },
  { icon: 'bi bi-play-circle-fill',    value: '50+',  label: 'Video Tutorials',    color: '#0088CC' },
  { icon: 'bi bi-check-circle-fill',   value: '100%', label: 'Free Content',       color: '#8b5cf6' },
]

const PLATFORM_PILLS = [
  { icon: 'bi bi-youtube',   label: 'YouTube',   color: '#FF0000' },
  { icon: 'bi bi-instagram', label: 'Instagram', color: '#E1306C' },
  { icon: 'bi bi-telegram',  label: 'Telegram',  color: '#0088CC' },
  { icon: 'bi bi-whatsapp',  label: 'WhatsApp',  color: '#25D366' },
]

const FAQS = [
  {
    q: 'Is this course really free?',
    a: 'Yes! All content on JS Intermediate In My Style is completely free. No hidden fees, no paywalls — just pure JavaScript learning for everyone.',
  },
  {
    q: 'How long will it take to complete?',
    a: 'Most learners finish the course in 3–6 weeks at around 1 hour per day. The pace is entirely up to you — all content is available on-demand.',
  },
  {
    q: 'Do I need to know JavaScript basics first?',
    a: 'Yes, basic JavaScript knowledge is recommended before starting intermediate topics. You should be comfortable with variables, functions, arrays, and objects.',
  },
  {
    q: 'Where can I get help if I\'m stuck?',
    a: 'Join our Telegram channel or follow us on Instagram for community support. You can also reach out via WhatsApp or leave a comment on any YouTube video.',
  },
  {
    q: 'Are there exercises or projects to practice?',
    a: 'Each topic includes code examples you can run in the built-in playground. We also recommend platforms like Exercism, LeetCode, and CodePen for additional practice.',
  },
  {
    q: 'Will new topics be added?',
    a: 'Absolutely! We continuously add new topics, examples, and improvements. Follow us on social media or join Telegram to stay updated on new content drops.',
  },
]

/* ═══════════════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */

/* ── Social Card ──────────────────────────────────────────────────────────── */
function SocialCard({ social, index }) {
  const [hov, setHov] = useState(false)

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`connect-card${hov ? ' connect-card--hovered' : ''}`}
      style={{
        '--card-color':  social.color,
        '--card-bg':     social.bg,
        '--card-border': social.border,
        animationDelay:  `${index * 0.10}s`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={`JsIntConnect on ${social.label}`}
    >
      {/* Left colored accent bar */}
      <span
        className="connect-card__accent"
        style={{ background: social.color }}
        aria-hidden="true"
      />

      {/* Glow on hover */}
      <span
        className="connect-card__glow"
        style={{ background: `radial-gradient(ellipse at top left, ${social.color}22 0%, transparent 65%)` }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="connect-card__head">
        {/* Platform icon */}
        <span
          className="connect-card-icon"
          style={{
            background: hov ? social.color : social.bg,
            border:     `1.5px solid ${hov ? social.color : social.border}`,
            color:      hov ? '#fff' : social.color,
          }}
          aria-hidden="true"
        >
          <i className={social.icon} />
        </span>

        {/* Badge */}
        <span
          className="connect-card__badge"
          style={{
            background:  social.bg,
            color:       social.color,
            borderColor: social.border,
          }}
        >
          {social.badge}
        </span>
      </div>

      {/* Body */}
      <div className="connect-card__body">
        <h3 className="connect-card__platform">{social.label}</h3>
        <p
          className="connect-card-handle"
          style={{ color: social.color }}
        >
          {social.handle}
        </p>
        <p className="connect-card-desc">{social.description}</p>
        <p
          className="connect-card__stat"
          style={{ color: social.color }}
        >
          <i className="bi bi-graph-up-arrow" aria-hidden="true" />
          {social.stats}
        </p>
      </div>

      {/* JsIntFooter CTA */}
      <div className="connect-card__footer">
        <span
          className="connect-cta-btn"
          style={{
            background:  hov ? social.color : social.bg,
            color:       hov ? '#fff' : social.color,
            borderColor: social.border,
          }}
        >
          <i className={social.icon} aria-hidden="true" />
          {social.cta}
          <i
            className="bi bi-arrow-right connect-cta-btn__arrow"
            aria-hidden="true"
          />
        </span>
      </div>
    </a>
  )
}

/* ── Stat Counter Card ────────────────────────────────────────────────────── */
function StatCard({ stat, visible }) {
  return (
    <div
      className={`connect-stat${visible ? ' connect-stat--visible' : ''}`}
    >
      <span
        className="connect-stat__icon"
        style={{
          background:  `${stat.color}18`,
          color:       stat.color,
          borderColor: `${stat.color}30`,
        }}
        aria-hidden="true"
      >
        <i className={stat.icon} />
      </span>
      <span
        className="connect-stat__value"
        style={{ color: stat.color }}
      >
        {stat.value}
      </span>
      <span className="connect-stat__label">{stat.label}</span>
    </div>
  )
}

/* ── FAQ Item ─────────────────────────────────────────────────────────────── */
function FAQItem({ faq, index, openIndex, setOpenIndex }) {
  const isOpen      = openIndex === index
  const contentRef  = useRef(null)

  const toggle = () => setOpenIndex(isOpen ? -1 : index)

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className={`connect-faq-item${isOpen ? ' connect-faq-item--open' : ''}`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      {/* Question button */}
      <button
        className="connect-faq-question"
        onClick={toggle}
        onKeyDown={onKeyDown}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-btn-${index}`}
      >
        <span className="connect-faq-question__text">{faq.q}</span>
        <span
          className="connect-faq-question__toggle"
          aria-hidden="true"
        >
          <i className={isOpen ? 'bi bi-dash-lg' : 'bi bi-plus-lg'} />
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className="connect-faq-answer"
        ref={contentRef}
        style={{
          maxHeight:  isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : '0',
          overflow:   'hidden',
          transition: 'max-height 0.34s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p className="connect-faq-answer__text">{faq.a}</p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════════════ */

export default function JsIntConnect() {
  const { dark } = useDarkMode()

  const [heroIn,      setHeroIn]      = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [openFAQ,     setOpenFAQ]     = useState(-1)

  const statsRef = useRef(null)

  /* ── Hero entrance ── */
  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 60)
    return () => clearTimeout(t)
  }, [])

  /* ── Back-to-top + scroll ── */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Stats section intersection observer ── */
  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.25 }
    )
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  /* ── Render ── */
  return (
    <div className={`connect-page${dark ? ' dark' : ''}`} id="main-content">
      <JsIntNavbar />

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="connect-hero" aria-label="JsIntConnect hero section">
        {/* Decorative orbs */}
        <span className="connect-hero__orb connect-hero__orb--1" aria-hidden="true" />
        <span className="connect-hero__orb connect-hero__orb--2" aria-hidden="true" />
        <span className="connect-hero__orb connect-hero__orb--3" aria-hidden="true" />

        {/* Grid pattern overlay */}
        <span className="connect-hero__grid" aria-hidden="true" />

        <div
          className={`connect-hero__content${heroIn ? ' connect-hero__content--in' : ''}`}
        >
          {/* Badge */}
          <span className="connect-hero__badge">
            <i className="bi bi-people-fill" aria-hidden="true" />
            Community &amp; Social
          </span>

          {/* Heading */}
          <h1 className="connect-hero-title">
            Let&apos;s{' '}
            <span className="connect-hero-title__accent">JsIntConnect!</span>
          </h1>

          {/* Subtitle */}
          <p className="connect-hero__subtitle">
            Join our community of JavaScript developers.
            Follow, watch, and learn together.
          </p>

          {/* Platform pills row */}
          <div
            className="connect-platform-pills"
            role="list"
            aria-label="Available platforms"
          >
            {PLATFORM_PILLS.map(({ icon, label, color }) => (
              <span
                key={label}
                className="connect-platform-pill"
                style={{
                  background:  `${color}14`,
                  color,
                  borderColor: `${color}30`,
                }}
                role="listitem"
              >
                <i className={icon} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>

          {/* Hero CTA buttons */}
          <div className="connect-hero__actions">
            <a
              href="https://www.youtube.com/@TECHINMYSTYLE"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-hero__btn connect-hero__btn--primary"
              aria-label="Subscribe on YouTube"
            >
              <i className="bi bi-youtube" aria-hidden="true" />
              Subscribe on YouTube
            </a>
            <a
              href="https://t.me/Tech_in_my_style_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="connect-hero__btn connect-hero__btn--outline"
              aria-label="Join Telegram channel"
            >
              <i className="bi bi-telegram" aria-hidden="true" />
              Join Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SOCIAL CARDS GRID
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="connect-cards-section"
        aria-label="Social media platforms"
      >
        <div className="connect-cards-section__inner">
          {/* Section label */}
          <div className="connect-section-label">
            <span className="connect-section-label__dot" aria-hidden="true" />
            <span>Find Us Online</span>
          </div>

          <div className="connect-cards-grid">
            {SOCIALS.map((social, i) => (
              <SocialCard key={social.key} social={social} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          STATS ROW
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="connect-stats-section"
        aria-label="Community statistics"
        ref={statsRef}
      >
        <div className="connect-stats-section__inner">
          <div className="connect-section-label">
            <span className="connect-section-label__dot" aria-hidden="true" />
            <span>By the Numbers</span>
          </div>

          <div className="connect-stats">
            {STATS.map((stat) => (
              <StatCard
                key={stat.label}
                stat={stat}
                visible={statsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="connect-faq-section"
        aria-label="Frequently asked questions"
      >
        <div className="connect-faq-section__inner">
          {/* Heading */}
          <div className="connect-section-label">
            <span className="connect-section-label__dot" aria-hidden="true" />
            <span>Frequently Asked</span>
          </div>

          <h2 className="connect-faq-section__heading">
            Common Questions
          </h2>
          <p className="connect-faq-section__subtitle">
            Everything you need to know about JS Intermediate In My Style.
          </p>

          {/* Accordion */}
          <div
            className="connect-faq"
            role="list"
            aria-label="Frequently asked questions"
          >
            {FAQS.map((faq, i) => (
              <div key={i} role="listitem">
                <FAQItem
                  faq={faq}
                  index={i}
                  openIndex={openFAQ}
                  setOpenIndex={setOpenFAQ}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CONTACT BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section
        className="connect-contact-banner"
        aria-label="Contact information"
      >
        {/* Decorative background blobs */}
        <span className="connect-contact-banner__orb connect-contact-banner__orb--1" aria-hidden="true" />
        <span className="connect-contact-banner__orb connect-contact-banner__orb--2" aria-hidden="true" />

        <div className="connect-contact-banner__inner">
          {/* Icon */}
          <span className="connect-contact-banner__icon" aria-hidden="true">
            <i className="bi bi-envelope-paper-fill" />
          </span>

          {/* Text */}
          <div className="connect-contact-banner__text">
            <h2 className="connect-contact-banner__heading">
              Have a question?
            </h2>
            <p className="connect-contact-banner__subtitle">
              We&apos;d love to hear from you. Reach out via email or any
              of our social channels.
            </p>
          </div>

          {/* Contact links */}
          <div className="connect-contact-banner__links">
            {/* Email */}
            <a
              href="mailto:techinmystyle@gmail.com"
              className="connect-contact-link connect-contact-link--email"
              aria-label="Email: techinmystyle@gmail.com"
            >
              <i className="bi bi-envelope-fill" aria-hidden="true" />
              techinmystyle@gmail.com
            </a>

            {/* Social quick-links */}
            <div
              className="connect-contact-socials"
              role="list"
              aria-label="Quick social links"
            >
              {[
                { href: 'https://www.youtube.com/@TECHINMYSTYLE',  icon: 'bi bi-youtube',   label: 'YouTube',   color: '#FF0000' },
                { href: 'https://www.instagram.com/techinmystyle',  icon: 'bi bi-instagram', label: 'Instagram', color: '#E1306C' },
                { href: 'https://t.me/Tech_in_my_style_bot',        icon: 'bi bi-telegram',  label: 'Telegram',  color: '#0088CC' },
                { href: 'https://wa.me/message/TECHINMYSTYLE',      icon: 'bi bi-whatsapp',  label: 'WhatsApp',  color: '#25D366' },
              ].map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-contact-social-btn"
                  style={{ '--btn-color': color }}
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
      </section>

      {/* ════════════════════════════════════════════════════════════════
          BACK TO TOP
      ════════════════════════════════════════════════════════════════ */}
      <button
        className={`back-to-top${showBackTop ? ' back-to-top--visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top of page"
        title="Back to top"
      >
        <i className="bi bi-arrow-up" aria-hidden="true" />
      </button>

      <JsIntFooter />
    </div>
  )
}
