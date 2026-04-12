import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CssNavbar, { useDarkMode } from '../components/CssNavbar'
import CssFooter from '../components/CssFooter'
import '../styles/CssHome.css'

/* ─── Data ─────────────────────────────────────────────────────── */
const courses = [
  {
    title: "HTML IN MY STYLE",
    description:
      "Learn semantic HTML5, document structure, forms, and accessibility with our comprehensive course.",
    image: "/img/HTML.png",
    link: "/html-course/reference",
    internal: true,
    badge: "Available Now",
    color: "#E34F26",
  },
  {
    title: "CSS IN MY STYLE",
    description:
      "Master modern CSS techniques, layouts, animations, and responsive design principles.",
    image: "/img/CSS.png",
    link: "/css-course/reference",
    internal: true,
    badge: "Available Now",
    color: "#264de4",
  },
  {
    title: "JAVASCRIPT BASICS",
    description:
      "Start your JavaScript journey by mastering variables, functions, conditionals, loops, and basic DOM manipulation.",
    image: "/img/JS-BEGINNERS.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#f7df1e",
  },
  {
    title: "JAVASCRIPT INTERMEDIATE",
    description:
      "Level up your JavaScript skills with ES6 features, asynchronous programming, APIs, closures, and advanced DOM techniques.",
    image: "/img/JS-INTERMEDIATE.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#f7df1e",
  },
  {
    title: "JAVA IN MY STYLE",
    description:
      "Comprehensive Java programming from basics to advanced concepts and application development.",
    image: "/img/JAVA.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#ed1d25",
  },
  {
    title: "PYTHON IN MY STYLE",
    description:
      "Learn Python programming for web development, data science, and automation.",
    image: "/img/PYTHON.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#3776ab",
  },
  {
    title: "DEEP LEARNING",
    description:
      "Dive into deep learning with neural networks, backpropagation, CNNs, RNNs, and hands-on projects.",
    image: "/img/DL.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#ffc107",
  },
  {
    title: "MACHINE LEARNING",
    description:
      "Explore machine learning fundamentals including supervised and unsupervised learning and real-world ML projects.",
    image: "/img/ML.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#4caf50",
  },
  {
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Explore the fundamentals of AI, including intelligent agents, search algorithms, and decision-making models.",
    image: "/img/AI.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#00bcd4",
  },
  {
    title: "DATA SCIENCE",
    description:
      "Master Data Science with statistics, data wrangling, visualization, and real-world analytics projects using Python.",
    image: "/img/DSC.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#673ab7",
  },
  {
    title: "C IN MY STYLE",
    description:
      "Learn C programming from scratch with hands-on coding, memory management, pointers, and data structures.",
    image: "/img/C.png",
    link: "#",
    internal: true,
    badge: "Coming Soon",
    color: "#a8b9cc",
  },
];

const features = [
  {
    icon: 'bi bi-house-door-fill',
    title: 'HOME',
    description: 'Your starting point — rules, guidelines, and everything you need to begin your CSS mastery journey.',
    link: '/css-course',
    color: '#264de4',
  },
  {
    icon: 'bi bi-braces-asterisk',
    title: 'CSS REFERENCE',
    description: 'Complete CSS property reference organised by category and alphabetical order for easy lookup.',
    link: '/css-course/reference',
    color: '#2965f1',
  },
  {
    icon: 'bi bi-journal-code',
    title: 'RESOURCES',
    description: 'Access cheat sheets, notes, video links, certifications, and developer roadmaps all in one place.',
    link: '/css-course/resources',
    color: '#1b35b5',
  },
  {
    icon: 'bi bi-terminal-fill',
    title: 'PLAYGROUND',
    description: 'Write and test HTML, CSS, and JavaScript live in our in-browser playground with instant preview.',
    link: '/css-course/compiler',
    color: '#42a1d0',
  },
  {
    icon: 'bi bi-people-fill',
    title: "LET'S CONNECT",
    description: 'Join our community, get updates, and connect with thousands of CSS learners on social media.',
    link: '/css-course/connect',
    color: '#264de4',
  },
]

const stats = [
  { icon: 'bi bi-braces', value: '100+', label: 'CSS Properties' },
  { icon: 'bi bi-grid-fill', value: '12+', label: 'Categories' },
  { icon: 'bi bi-play-btn-fill', value: '3', label: 'Live Demos' },
  { icon: 'bi bi-gift-fill', value: '100%', label: 'Free Forever' },
]

const testimonials = [
  {
    text: 'CSS is not just styling — it is visual storytelling. Every line of CSS is a decision that shapes the user\'s experience and emotion.',
    author: 'UI Designer',
    icon: 'bi bi-palette-fill',
  },
  {
    text: 'We teach CSS as a language of creativity. From selectors to Grid, our goal is to give every learner the confidence to style anything.',
    author: 'Lead Instructor',
    icon: 'bi bi-mortarboard-fill',
  },
  {
    text: 'Mastering CSS means understanding the cascade, specificity, and the box model. Get these right and the rest becomes intuitive.',
    author: 'Senior Frontend Dev',
    icon: 'bi bi-laptop-fill',
  },
  {
    text: 'CSS Grid and Flexbox changed everything. Two layout systems so powerful that we barely need anything else for modern web design.',
    author: 'Full-Stack Engineer',
    icon: 'bi bi-layers-fill',
  },
]

const CODE_LINES = [
  { indent: 0, parts: [{ cls: 'css-comment', t: '/* CSS IN MY STYLE */' }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ cls: 'css-selector', t: '.hero' }, { cls: 'css-brace', t: ' {' }] },
  { indent: 1, parts: [{ cls: 'css-prop', t: 'display' }, { cls: 'css-colon', t: ': ' }, { cls: 'css-val', t: 'flex' }, { cls: 'css-semi', t: ';' }] },
  { indent: 1, parts: [{ cls: 'css-prop', t: 'align-items' }, { cls: 'css-colon', t: ': ' }, { cls: 'css-val', t: 'center' }, { cls: 'css-semi', t: ';' }] },
  { indent: 1, parts: [{ cls: 'css-prop', t: 'background' }, { cls: 'css-colon', t: ': ' }, { cls: 'css-fn', t: 'linear-gradient' }, { cls: '', t: '(' }, { cls: 'css-num', t: '135deg' }, { cls: '', t: ',' }, { cls: 'css-str', t: ' #264de4' }, { cls: '', t: ',' }, { cls: 'css-str', t: ' #2965f1' }, { cls: 'css-brace', t: ')' }, { cls: 'css-semi', t: ';' }] },
  { indent: 1, parts: [{ cls: 'css-prop', t: 'border-radius' }, { cls: 'css-colon', t: ': ' }, { cls: 'css-num', t: '20px' }, { cls: 'css-semi', t: ';' }] },
  { indent: 1, parts: [{ cls: 'css-prop', t: 'gap' }, { cls: 'css-colon', t: ': ' }, { cls: 'css-num', t: '2rem' }, { cls: 'css-semi', t: ';' }] },
  { indent: 0, parts: [{ cls: 'css-brace', t: '}' }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ cls: 'css-selector', t: '.card' }, { cls: 'css-brace', t: ' {' }] },
  { indent: 1, parts: [{ cls: 'css-prop', t: 'transform' }, { cls: 'css-colon', t: ': ' }, { cls: 'css-fn', t: 'translateY' }, { cls: '', t: '(' }, { cls: 'css-num', t: '-8px' }, { cls: 'css-brace', t: ')' }, { cls: 'css-semi', t: ';' }] },
  { indent: 1, parts: [{ cls: 'css-prop', t: 'transition' }, { cls: 'css-colon', t: ': ' }, { cls: 'css-val', t: 'all' }, { cls: '', t: ' ' }, { cls: 'css-num', t: '0.3s' }, { cls: '', t: ' ' }, { cls: 'css-val', t: 'ease' }, { cls: 'css-semi', t: ';' }] },
  { indent: 0, parts: [{ cls: 'css-brace', t: '}' }] },
]

/* ─── Counter hook ──────────────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const numeric = parseInt(String(target).replace(/[^0-9]/g, ''), 10)
    if (isNaN(numeric)) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numeric))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ icon, value, label, animate }) {
  const isPercent = String(value).includes('%')
  const isPlus = String(value).includes('+')
  const numeric = parseInt(String(value).replace(/[^0-9]/g, ''), 10)
  const count = useCounter(numeric, 1800, animate)
  const display = isNaN(numeric)
    ? value
    : `${count}${isPlus ? '+' : ''}${isPercent ? '%' : ''}`
  return (
    <div className="css-stat-card">
      <div className="css-stat-icon"><i className={icon} /></div>
      <div className="css-stat-value">{display}</div>
      <div className="css-stat-label">{label}</div>
    </div>
  )
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function Home() {
  const { dark, toggle } = useDarkMode()
  const [showTop, setShowTop] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`css-home${dark ? ' css-home--dark' : ''}`}>


      <main id="main-content">

        {/* ══════════════════ HERO ══════════════════ */}
        <section className={`css-hero${heroVisible ? ' css-hero--in' : ''}`} aria-labelledby="hero-heading">

          {/* Decorative blobs */}
          <div className="css-hero__blob css-hero__blob--1" aria-hidden="true" />
          <div className="css-hero__blob css-hero__blob--2" aria-hidden="true" />
          <div className="css-hero__blob css-hero__blob--3" aria-hidden="true" />

          {/* Floating property chips */}
          <div className="css-hero__chip css-hero__chip--1" aria-hidden="true">display: flex</div>
          <div className="css-hero__chip css-hero__chip--2" aria-hidden="true">border-radius: 20px</div>
          <div className="css-hero__chip css-hero__chip--3" aria-hidden="true">animation: fadeIn</div>
          <div className="css-hero__chip css-hero__chip--4" aria-hidden="true">grid: 1fr 1fr</div>

          <div className="css-hero__inner">

            {/* Left — content */}
            <div className="css-hero__content">
              <div className="css-hero__badge">
                <i className="bi bi-stars" aria-hidden="true" />
                <span>Learn Modern CSS</span>
              </div>

              <h1 className="css-hero__title" id="hero-heading">
                Welcome to<br />
                <span className="css-hero__title-brand">CSS IN MY STYLE</span>
              </h1>

              <p className="css-hero__subtitle">
                <span className="css-hero__subtitle-bar" aria-hidden="true" />
                Your Gateway to Mastering Web Styling
              </p>

              <p className="css-hero__desc">
                Master modern CSS3 with our comprehensive platform. From box model basics
                to advanced Grid layouts, animations, and design systems — learn everything
                you need to style beautiful, responsive websites.
              </p>

              <div className="css-hero__actions">
                <Link to="/css-course/reference" className="css-btn css-btn--primary css-btn--lg">
                  <i className="bi bi-play-circle-fill" />
                  Start Learning
                </Link>
                <a href="#courses" className="css-btn css-btn--ghost css-btn--lg">
                  <i className="bi bi-grid-fill" />
                  Explore Courses
                </a>
              </div>

              <div className="css-hero__trust">
                <span className="css-hero__trust-item">
                  <i className="bi bi-check-circle-fill" />Free forever
                </span>
                <span className="css-hero__trust-item">
                  <i className="bi bi-check-circle-fill" />No signup needed
                </span>
                <span className="css-hero__trust-item">
                  <i className="bi bi-check-circle-fill" />Live interactive demos
                </span>
              </div>
            </div>

            {/* Right — code window */}
            <div className="css-hero__code-wrap">
              <div className="css-hero__code-window">
                <div className="css-hero__code-bar">
                  <span className="css-hero__dot css-hero__dot--red" />
                  <span className="css-hero__dot css-hero__dot--yellow" />
                  <span className="css-hero__dot css-hero__dot--green" />
                  <span className="css-hero__code-filename">
                    <i className="bi bi-filetype-css" />
                    styles.css
                  </span>
                </div>
                <div className="css-hero__code-body">
                  {CODE_LINES.map((line, i) => (
                    <div
                      key={i}
                      className="css-hero__code-line"
                      style={{ animationDelay: `${0.4 + i * 0.07}s` }}
                    >
                      <span className="css-hero__line-num">{i + 1}</span>
                      <span className="css-hero__line-content" style={{ paddingLeft: `${line.indent * 1.4}rem` }}>
                        {line.parts.map((p, j) => (
                          <span key={j} className={p.cls}>{p.t}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="css-hero__float-badge css-hero__float-badge--1">
                <i className="bi bi-lightning-charge-fill" />
                <span>Live Preview</span>
              </div>
              <div className="css-hero__float-badge css-hero__float-badge--2">
                <i className="bi bi-shield-check-fill" />
                <span>Modern CSS3</span>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <a href="#stats" className="css-hero__scroll" aria-label="Scroll down">
            <i className="bi bi-chevron-double-down" />
          </a>
        </section>

        {/* ══════════════════ STATS ══════════════════ */}
        <section className="css-stats-section" id="stats" ref={statsRef} aria-label="Platform statistics">
          <div className="css-container">
            <div className="css-stats-grid">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} animate={statsVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ FEATURES ══════════════════ */}
        <section className="css-features-section" aria-labelledby="features-heading">
          <div className="css-container">
            <div className="css-section-header">
              <div className="css-section-pill">
                <i className="bi bi-stars" />
                Why Choose Us
              </div>
              <h2 className="css-section-title" id="features-heading">
                What Makes Us Different
              </h2>
              <p className="css-section-desc">
                Our platform has everything for CSS learners — a complete reference, interactive demos,
                curated resources, and a live code playground, all in one place.
              </p>
            </div>

            <div className="css-features-grid">
              {features.map((f, i) => (
                <Link
                  key={f.title}
                  to={f.link}
                  className="css-feature-card"
                  style={{ '--f-color': f.color, animationDelay: `${i * 0.1}s` }}
                >
                  <div className="css-feature-card__icon-wrap">
                    <i className={f.icon} aria-hidden="true" />
                  </div>
                  <h3 className="css-feature-card__title">{f.title}</h3>
                  <p className="css-feature-card__desc">{f.description}</p>
                  <span className="css-feature-card__cta">
                    Explore <i className="bi bi-arrow-right" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ LIVE DEMOS STRIP ══════════════════ */}
        <section className="css-demos-section" aria-labelledby="demos-heading">
          <div className="css-container">
            <div className="css-section-header">
              <div className="css-section-pill">
                <i className="bi bi-play-circle-fill" />
                Interactive
              </div>
              <h2 className="css-section-title" id="demos-heading">
                3 Fully Interactive CSS Demos
              </h2>
              <p className="css-section-desc">
                Click any demo card to open an interactive playground where you can tweak properties
                and see the live result in real-time — no coding required.
              </p>
            </div>

            <div className="css-demos-grid">
              {[
                {
                  to: '/css-course/property/flexbox',
                  icon: 'bi bi-layout-wtf',
                  title: 'Flexbox',
                  desc: 'Toggle flex-direction, justify-content, align-items, flex-wrap, and gap with live visual feedback.',
                  color: '#264de4',
                  demo: 'flex',
                  badge: 'LIVE DEMO',
                },
                {
                  to: '/css-course/property/grid',
                  icon: 'bi bi-grid-3x3-gap-fill',
                  title: 'CSS Grid',
                  desc: 'Control grid-template-columns, rows, gap, and placement with an interactive grid builder.',
                  color: '#2965f1',
                  demo: 'grid',
                  badge: 'LIVE DEMO',
                },
                {
                  to: '/css-course/property/animation',
                  icon: 'bi bi-play-circle-fill',
                  title: 'CSS Animation',
                  desc: 'Pick from preset animations and tweak duration, timing, delay, and iteration count live.',
                  color: '#1b35b5',
                  demo: 'animation',
                  badge: 'LIVE DEMO',
                },
              ].map((demo, i) => (
                <Link
                  key={demo.title}
                  to={demo.to}
                  className="css-demo-card"
                  style={{ '--d-color': demo.color, animationDelay: `${i * 0.15}s` }}
                  aria-label={`Open ${demo.title} live demo`}
                >
                  {/* Live badge */}
                  <div className="css-demo-card__badge">
                    <span className="css-demo-card__dot" aria-hidden="true" />
                    {demo.badge}
                  </div>

                  {/* Icon */}
                  <div className="css-demo-card__icon">
                    <i className={demo.icon} aria-hidden="true" />
                  </div>

                  {/* Mini visual preview */}
                  <div className="css-demo-card__preview" aria-hidden="true">
                    {demo.demo === 'flex' && (
                      <div className="css-mini-flex">
                        {[1, 2, 3].map(n => <div key={n} className="css-mini-flex__item">{n}</div>)}
                      </div>
                    )}
                    {demo.demo === 'grid' && (
                      <div className="css-mini-grid">
                        {[1, 2, 3, 4, 5, 6].map(n => <div key={n} className="css-mini-grid__item" />)}
                      </div>
                    )}
                    {demo.demo === 'animation' && (
                      <div className="css-mini-anim">
                        <div className="css-mini-anim__ball" />
                      </div>
                    )}
                  </div>

                  <h3 className="css-demo-card__title">{demo.title}</h3>
                  <p className="css-demo-card__desc">{demo.desc}</p>

                  <span className="css-demo-card__cta">
                    Open Demo <i className="bi bi-arrow-right" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ COURSES ══════════════════ */}
        <section className="css-courses-section" id="courses" aria-labelledby="courses-heading">
          <div className="css-container">
            <div className="css-section-header">
              <div className="css-section-pill">
                <i className="bi bi-collection-fill" />
                Our Courses
              </div>
              <h2 className="css-section-title" id="courses-heading">
                Popular Courses
              </h2>
              <p className="css-section-desc">
                Explore our hand-crafted CSS courses designed to take you from absolute beginner
                to a confident, modern CSS developer.
              </p>
            </div>

            <div className="css-courses-grid">
              {courses.map((c, i) => (
                <div
                  key={c.title}
                  className={`css-course-card${c.internal ? " css-course-card--active" : ""}`}
                  style={{ "--c-color": c.color, animationDelay: `${i * 0.07}s` }}
                  onClick={() => c.internal && (window.location.href = c.link)}
                  role={c.internal ? "button" : undefined}
                  tabIndex={c.internal ? 0 : undefined}
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    c.internal &&
                    (window.location.href = c.link)
                  }
                >
                  <div className="css-course-card__img-wrap">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="css-course-card__img"
                      loading="lazy"
                    />
                    <span
                      className={`css-course-card__badge${c.internal ? " css-course-card__badge--live" : ""}`}
                    >
                      {c.internal ? (
                        <>
                          <i className="bi bi-check-circle-fill" />
                          {c.badge}
                        </>
                      ) : (
                        <>
                          <i className="bi bi-clock-fill" />
                          {c.badge}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="css-course-card__body">
                    <h3 className="css-course-card__title">{c.title}</h3>
                    <p className="css-course-card__desc">{c.description}</p>
                    <Link
                      to={c.link}
                      className="css-btn css-btn--primary css-btn--sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="bi bi-play-fill" />
                      Visit Course
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ TESTIMONIALS ══════════════════ */}
        <section className="css-testimonials-section" aria-labelledby="testimonials-heading">
          <div className="css-container">
            <div className="css-section-header">
              <div className="css-section-pill">
                <i className="bi bi-chat-quote-fill" />
                Our Philosophy
              </div>
              <h2 className="css-section-title" id="testimonials-heading">
                What We Say
              </h2>
              <p className="css-section-desc">
                Our thoughts and philosophy behind creating this CSS learning platform.
              </p>
            </div>

            <div className="css-testimonials-grid">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="css-testimonial-card"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="css-testimonial-card__icon">
                    <i className={t.icon} aria-hidden="true" />
                  </div>
                  <i className="bi bi-quote css-testimonial-card__quote" aria-hidden="true" />
                  <p className="css-testimonial-card__text">{t.text}</p>
                  <div className="css-testimonial-card__author">
                    <div className="css-testimonial-card__author-line" />
                    <span>{t.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════ CTA ══════════════════ */}
        <section className="css-cta-section" aria-labelledby="cta-heading">
          <div className="css-cta-section__blob css-cta-section__blob--1" aria-hidden="true" />
          <div className="css-cta-section__blob css-cta-section__blob--2" aria-hidden="true" />

          <div className="css-container css-cta-section__inner">
            <div className="css-cta-section__icon" aria-hidden="true">
              <i className="bi bi-mortarboard-fill" />
            </div>
            <h2 className="css-cta-section__title" id="cta-heading">
              Start Your CSS Journey Today
            </h2>
            <p className="css-cta-section__desc">
              Join thousands of learners who have successfully mastered modern CSS with our
              free, comprehensive platform. No account required. No credit card needed.
            </p>
            <div className="css-cta-section__actions">
              <Link to="/css-course/reference" className="css-btn css-btn--white css-btn--lg">
                <i className="bi bi-braces-asterisk" />
                Explore CSS Reference
              </Link>
              <Link to="/css-course/compiler" className="css-btn css-btn--white-outline css-btn--lg">
                <i className="bi bi-terminal-fill" />
                Try Playground
              </Link>
            </div>
          </div>
        </section>

      </main>


      {/* ── Floating buttons ── */}
      <button
        className="css-float-theme"
        onClick={toggle}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {dark
          ? <i className="bi bi-sun-fill" />
          : <i className="bi bi-moon-stars-fill" />
        }
      </button>

      <button
        className={`css-float-top${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up" />
      </button>
    </div>
  )
}
