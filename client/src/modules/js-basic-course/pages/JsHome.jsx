import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import JsNavbar, { useDarkMode } from "../components/JsNavbar";
import JsFooter from "../components/JsFooter";
import "../styles/JsHome.css";

/* ─── Data ─────────────────────────────────────────────────────── */
const features = [
  {
    icon: "bi bi-house-door-fill",
    title: "HOME",
    description: "Your starting point — all the rules, guidelines and everything you need to begin your JavaScript journey.",
    link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course" : "/js-basic-course",
    color: "#F7DF1E",
  },
  {
    icon: "bi bi-braces-asterisk",
    title: "JS REFERENCE",
    description: "Complete JavaScript Basic reference organised by category and alphabetical order for easy lookup.",
    link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js" : "/js-basic-course/js",
    color: "#C9B800",
  },
  {
    icon: "bi bi-journal-code",
    title: "RESOURCES",
    description: "Access notes, cheat sheets, video tutorials, certifications, and developer roadmaps all in one place.",
    link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/resources" : "/js-basic-course/resources",
    color: "#F0B429",
  },
  {
    icon: "bi bi-terminal-fill",
    title: "PLAYGROUND",
    description: "Write and test HTML, CSS, and JavaScript live in our in-browser playground with instant preview.",
    link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/compiler" : "/js-basic-course/compiler",
    color: "#C9B800",
  },
  {
    icon: "bi bi-people-fill",
    title: "LET'S CONNECT",
    description: "Join our community, get updates, and connect with thousands of JS learners on social media.",
    link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/connect" : "/js-basic-course/connect",
    color: "#F7DF1E",
  },
];

const topics = [
  { name: "Variables & Types", icon: "bi bi-database-fill", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/let" : "/js-basic-course/js/let", desc: "var, let, const, string, number, boolean, null, undefined", available: true },
  { name: "Operators", icon: "bi bi-calculator-fill", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/arithmetic-operators" : "/js-basic-course/js/arithmetic-operators", desc: "Arithmetic, comparison, logical, ternary operators", available: true },
  { name: "Control Flow", icon: "bi bi-diagram-3-fill", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/if-else" : "/js-basic-course/js/if-else", desc: "if/else, switch, short-circuit, optional chaining", available: true },
  { name: "Loops", icon: "bi bi-arrow-repeat", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/for-loop" : "/js-basic-course/js/for-loop", desc: "for, while, do-while, for-of, for-in, break, continue", available: true },
  { name: "Functions", icon: "bi bi-lightning-fill", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/function-declaration" : "/js-basic-course/js/function-declaration", desc: "Declarations, expressions, arrow functions, closures", available: true },
  { name: "Arrays", icon: "bi bi-collection-fill", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/create-arrays" : "/js-basic-course/js/create-arrays", desc: "Create, access, map, filter, reduce, spread, destructure", available: true },
  { name: "Objects", icon: "bi bi-box-fill", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/create-objects" : "/js-basic-course/js/create-objects", desc: "Literals, methods, this, destructuring, JSON", available: true },
  { name: "Strings", icon: "bi bi-fonts", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/string-basics" : "/js-basic-course/js/string-basics", desc: "Template literals, methods, search, slice, split", available: true },
  { name: "DOM Basics", icon: "bi bi-window-stack", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/querySelector" : "/js-basic-course/js/querySelector", desc: "Select, modify, create and remove HTML elements", available: true },
  { name: "Events", icon: "bi bi-cursor-fill", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/addEventListener" : "/js-basic-course/js/addEventListener", desc: "Click, keyboard, mouse, input and form events", available: true },
  { name: "Error Handling", icon: "bi bi-shield-exclamation", link: window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js/try-catch" : "/js-basic-course/js/try-catch", desc: "try/catch, throw, finally, custom errors", available: true },
  { name: "ES6+ Features", icon: "bi bi-stars", link: "#", desc: "Modern JS: modules, promises, async/await", available: false },
];

const stats = [
  { icon: "bi bi-braces",         value: "100+", label: "JS Topics"       },
  { icon: "bi bi-grid-fill",      value: "12",   label: "Categories"      },
  { icon: "bi bi-play-btn-fill",  value: "Live",  label: "Code Examples"  },
  { icon: "bi bi-gift-fill",      value: "100%", label: "Free Forever"    },
];

const testimonials = [
  {
    text: "JavaScript is the language that breathes life into the web. Every interaction, animation, and dynamic feature you see starts with a few lines of JS.",
    author: "Frontend Developer",
    icon: "bi bi-laptop-fill",
  },
  {
    text: "We teach JavaScript as a tool for thinking — not just for building. Master the fundamentals and the frameworks will make sense on their own.",
    author: "Lead Instructor",
    icon: "bi bi-mortarboard-fill",
  },
  {
    text: "Understanding closures, scope, and the event loop changed how I write code. These basics are worth spending real time on.",
    author: "Senior Engineer",
    icon: "bi bi-layers-fill",
  },
  {
    text: "JavaScript is everywhere — browsers, servers, mobile apps. Learning the basics is the best investment any developer can make.",
    author: "Full-Stack Engineer",
    icon: "bi bi-globe2",
  },
];

/* ─── Code lines shown in hero code window ─────────────────────── */
const CODE_LINES = [
  { indent: 0, parts: [{ cls: "js-cmt", t: "// JavaScript Basic in My Style" }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ cls: "js-kw", t: "const" }, { cls: "", t: " " }, { cls: "js-var", t: "greet" }, { cls: "", t: " = " }, { cls: "js-var", t: "name" }, { cls: "js-arr", t: " =>" }, { cls: "", t: " {" }] },
  { indent: 1, parts: [{ cls: "js-kw", t: "return" }, { cls: "", t: " " }, { cls: "js-str", t: "`Hello, ${" }, { cls: "js-var", t: "name" }, { cls: "js-str", t: "}! 👋`" }, { cls: "", t: ";" }] },
  { indent: 0, parts: [{ cls: "", t: "};" }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ cls: "js-kw", t: "const" }, { cls: "", t: " " }, { cls: "js-var", t: "skills" }, { cls: "", t: " = [" }, { cls: "js-str", t: "'HTML'" }, { cls: "", t: ", " }, { cls: "js-str", t: "'CSS'" }, { cls: "", t: ", " }, { cls: "js-str", t: "'JS'" }, { cls: "", t: "];" }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ cls: "js-var", t: "skills" }, { cls: "", t: "." }, { cls: "js-fn", t: "forEach" }, { cls: "", t: "(" }, { cls: "js-var", t: "s" }, { cls: "js-arr", t: " =>" }, { cls: "", t: " {" }] },
  { indent: 1, parts: [{ cls: "js-fn", t: "console" }, { cls: "", t: "." }, { cls: "js-fn", t: "log" }, { cls: "", t: "(" }, { cls: "js-fn", t: "greet" }, { cls: "", t: "(" }, { cls: "js-var", t: "s" }, { cls: "", t: "));" }] },
  { indent: 0, parts: [{ cls: "", t: "});" }] },
  { indent: 0, parts: [] },
  { indent: 0, parts: [{ cls: "js-cmt", t: "// Output:" }] },
  { indent: 0, parts: [{ cls: "js-cmt", t: "// Hello, HTML! 👋" }] },
];

/* ─── Counter hook ──────────────────────────────────────────────── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const numeric = parseInt(String(target).replace(/[^0-9]/g, ""), 10);
    if (isNaN(numeric)) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ icon, value, label, animate }) {
  const isPercent = String(value).includes("%");
  const isPlus    = String(value).includes("+");
  const isText    = isNaN(parseInt(String(value).replace(/[^0-9]/g, ""), 10));
  const numeric   = isText ? 0 : parseInt(String(value).replace(/[^0-9]/g, ""), 10);
  const count     = useCounter(numeric, 1800, animate);
  const display   = isText
    ? value
    : `${count}${isPlus ? "+" : ""}${isPercent ? "%" : ""}`;

  return (
    <div className="jsh-stat-card">
      <div className="jsh-stat-icon"><i className={icon} /></div>
      <div className="jsh-stat-value">{display}</div>
      <div className="jsh-stat-label">{label}</div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function JsHome() {
  const { dark, toggle } = useDarkMode();
  const [showTop, setShowTop]           = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [heroVisible, setHeroVisible]   = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`jsh${dark ? " jsh--dark" : ""}`}>
      <JsNavbar />

      <main id="main-content">

        {/* ══════════ HERO ══════════ */}
        <section
          className={`jsh-hero${heroVisible ? " jsh-hero--in" : ""}`}
          aria-labelledby="hero-heading"
        >
          <div className="jsh-hero__blob jsh-hero__blob--1" aria-hidden="true" />
          <div className="jsh-hero__blob jsh-hero__blob--2" aria-hidden="true" />

          <div className="jsh-hero__inner">

            {/* Left */}
            <div className="jsh-hero__content">
              <div className="jsh-hero__badge">
                <span className="jsh-hero__badge-js">JS</span>
                <span>Basic Course</span>
              </div>

              <h1 className="jsh-hero__title" id="hero-heading">
                Welcome to<br />
                <span className="jsh-hero__title-brand">
                  JAVASCRIPT<br />BASIC
                </span>
              </h1>

              <p className="jsh-hero__subtitle">
                <span className="jsh-hero__subtitle-bar" aria-hidden="true" />
                Your Gateway to Mastering JavaScript
              </p>

              <p className="jsh-hero__desc">
                Master the fundamentals of JavaScript — from variables and
                functions to DOM manipulation and events. Build interactive
                web apps with clear explanations and hands-on code examples.
              </p>

              <div className="jsh-hero__actions">
                <Link to={window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js" : "/js-basic-course/js"} className="jsh-btn jsh-btn--primary jsh-btn--lg">
                  <i className="bi bi-play-circle-fill" />
                  Start Learning
                </Link>
                <a href="#topics" className="jsh-btn jsh-btn--ghost jsh-btn--lg">
                  <i className="bi bi-grid-fill" />
                  Browse Topics
                </a>
              </div>

              <div className="jsh-hero__trust">
                <span className="jsh-hero__trust-item">
                  <i className="bi bi-check-circle-fill" />Free forever
                </span>
                <span className="jsh-hero__trust-item">
                  <i className="bi bi-check-circle-fill" />No signup needed
                </span>
                <span className="jsh-hero__trust-item">
                  <i className="bi bi-check-circle-fill" />Live code examples
                </span>
              </div>
            </div>

            {/* Right – code window */}
            <div className="jsh-hero__code-wrap">
              <div className="jsh-hero__code-window">
                <div className="jsh-hero__code-bar">
                  <span className="jsh-hero__dot jsh-hero__dot--red"   />
                  <span className="jsh-hero__dot jsh-hero__dot--yellow"/>
                  <span className="jsh-hero__dot jsh-hero__dot--green" />
                  <span className="jsh-hero__code-filename">
                    <i className="bi bi-filetype-js" />
                    basics.js
                  </span>
                </div>
                <div className="jsh-hero__code-body">
                  {CODE_LINES.map((line, i) => (
                    <div
                      key={i}
                      className="jsh-hero__code-line"
                      style={{ animationDelay: `${0.35 + i * 0.07}s` }}
                    >
                      <span className="jsh-hero__line-num">{i + 1}</span>
                      <span
                        className="jsh-hero__line-content"
                        style={{ paddingLeft: `${line.indent * 1.4}rem` }}
                      >
                        {line.parts.map((p, j) => (
                          <span key={j} className={p.cls}>{p.t}</span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <div className="jsh-hero__float-badge jsh-hero__float-badge--1">
                <i className="bi bi-lightning-charge-fill" />
                <span>Live Preview</span>
              </div>
              <div className="jsh-hero__float-badge jsh-hero__float-badge--2">
                <i className="bi bi-check-circle-fill" />
                <span>Beginner Friendly</span>
              </div>
            </div>
          </div>

          <a href="#stats" className="jsh-hero__scroll" aria-label="Scroll down">
            <i className="bi bi-chevron-double-down" />
          </a>
        </section>

        {/* ══════════ STATS ══════════ */}
        <section
          className="jsh-stats-section"
          id="stats"
          ref={statsRef}
          aria-label="Platform statistics"
        >
          <div className="jsh-container">
            <div className="jsh-stats-grid">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} animate={statsVisible} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FEATURES ══════════ */}
        <section className="jsh-features-section" aria-labelledby="features-heading">
          <div className="jsh-container">
            <div className="jsh-section-header">
              <div className="jsh-section-pill">
                <i className="bi bi-stars" />
                Why Choose Us
              </div>
              <h2 className="jsh-section-title" id="features-heading">
                What Makes Us Different
              </h2>
              <p className="jsh-section-desc">
                Our platform has everything for JavaScript beginners — a complete
                topic reference, live code examples, curated resources, and a
                full playground, all in one place.
              </p>
            </div>

            <div className="jsh-features-grid">
              {features.map((f, i) => (
                <Link
                  key={f.title}
                  to={f.link}
                  className="jsh-feature-card"
                  style={{ "--f-color": f.color, animationDelay: `${i * 0.1}s` }}
                >
                  <div className="jsh-feature-card__icon-wrap">
                    <i className={f.icon} aria-hidden="true" />
                  </div>
                  <h3 className="jsh-feature-card__title">{f.title}</h3>
                  <p className="jsh-feature-card__desc">{f.description}</p>
                  <span className="jsh-feature-card__cta">
                    Explore <i className="bi bi-arrow-right" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ TOPICS GRID ══════════ */}
        <section className="jsh-topics-section" id="topics" aria-labelledby="topics-heading">
          <div className="jsh-container">
            <div className="jsh-section-header">
              <div className="jsh-section-pill">
                <i className="bi bi-collection-fill" />
                All Topics
              </div>
              <h2 className="jsh-section-title" id="topics-heading">
                JavaScript Basics — Topic by Topic
              </h2>
              <p className="jsh-section-desc">
                Every topic has a dedicated page with a full code example, live
                preview, and a Monaco editor so you can experiment in real time.
              </p>
            </div>

            <div className="jsh-topics-grid">
              {topics.map((t, i) => (
                <div
                  key={t.name}
                  className={`jsh-topic-card${t.available ? " jsh-topic-card--active" : ""}`}
                  style={{ animationDelay: `${i * 0.06}s` }}
                  onClick={() => t.available && (window.location.href = t.link)}
                  role={t.available ? "button" : undefined}
                  tabIndex={t.available ? 0 : undefined}
                  onKeyDown={(e) =>
                    e.key === "Enter" && t.available && (window.location.href = t.link)
                  }
                >
                  <div className="jsh-topic-card__icon">
                    <i className={t.icon} aria-hidden="true" />
                  </div>
                  <div className="jsh-topic-card__body">
                    <h3 className="jsh-topic-card__title">{t.name}</h3>
                    <p className="jsh-topic-card__desc">{t.desc}</p>
                  </div>
                  {t.available ? (
                    <Link
                      to={t.link}
                      className="jsh-btn jsh-btn--sm jsh-btn--primary"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <i className="bi bi-play-fill" />
                      Explore
                    </Link>
                  ) : (
                    <span className="jsh-btn jsh-btn--sm jsh-btn--disabled">
                      <i className="bi bi-hourglass-split" />
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="jsh-topics-cta">
              <Link to={window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js" : "/js-basic-course/js"} className="jsh-btn jsh-btn--primary jsh-btn--lg">
                <i className="bi bi-grid-fill" />
                View All Topics A–Z
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════ TESTIMONIALS ══════════ */}
        <section className="jsh-testimonials-section" aria-labelledby="testimonials-heading">
          <div className="jsh-container">
            <div className="jsh-section-header">
              <div className="jsh-section-pill">
                <i className="bi bi-chat-quote-fill" />
                Our Philosophy
              </div>
              <h2 className="jsh-section-title" id="testimonials-heading">
                What We Say
              </h2>
              <p className="jsh-section-desc">
                Our thoughts and philosophy behind this JavaScript learning platform.
              </p>
            </div>

            <div className="jsh-testimonials-grid">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="jsh-testimonial-card"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="jsh-testimonial-card__icon">
                    <i className={t.icon} aria-hidden="true" />
                  </div>
                  <i className="bi bi-quote jsh-testimonial-card__quote" aria-hidden="true" />
                  <p className="jsh-testimonial-card__text">{t.text}</p>
                  <div className="jsh-testimonial-card__author">
                    <div className="jsh-testimonial-card__author-line" />
                    <span>{t.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="jsh-cta-section" aria-labelledby="cta-heading">
          <div className="jsh-cta-section__blob jsh-cta-section__blob--1" aria-hidden="true" />
          <div className="jsh-cta-section__blob jsh-cta-section__blob--2" aria-hidden="true" />

          <div className="jsh-container jsh-cta-section__inner">
            <div className="jsh-cta-section__icon" aria-hidden="true">
              <i className="bi bi-code-slash" />
            </div>
            <h2 className="jsh-cta-section__title" id="cta-heading">
              Start Your JavaScript Journey Today
            </h2>
            <p className="jsh-cta-section__desc">
              Join thousands of learners who have successfully mastered JavaScript
              basics with our free, comprehensive platform. No account required.
              No credit card needed.
            </p>
            <div className="jsh-cta-section__actions">
              <Link to={window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/js" : "/js-basic-course/js"} className="jsh-btn jsh-btn--dark jsh-btn--lg">
                <i className="bi bi-braces-asterisk" />
                Explore JS Reference
              </Link>
              <Link to={window.location.pathname.includes('javascript-basic-course') ? "/javascript-basic-course/compiler" : "/js-basic-course/compiler"} className="jsh-btn jsh-btn--dark-outline jsh-btn--lg">
                <i className="bi bi-terminal-fill" />
                Try Playground
              </Link>
            </div>
          </div>
        </section>

      </main>

      <JsFooter />

      {/* Floating buttons */}
      <button
        className="jsh-float-theme"
        onClick={toggle}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <i className="bi bi-sun-fill" /> : <i className="bi bi-moon-stars-fill" />}
      </button>

      <button
        className={`jsh-float-top${showTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up" />
      </button>
    </div>
  );
}
