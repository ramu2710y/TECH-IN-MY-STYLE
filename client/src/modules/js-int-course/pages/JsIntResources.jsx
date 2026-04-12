import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import JsIntNavbar, { useDarkMode } from "../components/JsIntNavbar";
import JsIntFooter from "../components/JsIntFooter";

/* ─── Data ──────────────────────────────────────────────────────── */
const RESOURCE_SECTIONS = [
  {
    id: "docs",
    icon: "bi bi-book-fill",
    title: "Official Documentation",
    color: "#8b5cf6",
    description:
      "The most authoritative references — straight from the source.",
    items: [
      {
        title: "MDN Web Docs — Promises",
        description:
          "The definitive async reference. Covers the Promise API, states, chaining, and error handling in depth.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        label: "Open MDN",
        icon: "bi bi-box-arrow-up-right",
        badge: "Free",
        badgeColor: "#22C55E",
      },
      {
        title: "MDN Fetch API",
        description:
          "Complete HTTP request guide. Everything about fetch(), Request, Response, Headers, and more.",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        label: "Open MDN",
        icon: "bi bi-box-arrow-up-right",
        badge: "Free",
        badgeColor: "#22C55E",
      },
      {
        title: "MDN Array Methods",
        description:
          "Every array method documented — map, filter, reduce, find, some, every, flat, and many more.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        label: "Open MDN",
        icon: "bi bi-box-arrow-up-right",
        badge: "Free",
        badgeColor: "#22C55E",
      },
      {
        title: "ECMAScript Specification",
        description:
          "The official JS language specification maintained by TC39. The ultimate source of truth.",
        link: "https://tc39.es/ecma262/",
        label: "Read Spec",
        icon: "bi bi-file-earmark-code-fill",
        badge: "Advanced",
        badgeColor: "#ec4899",
      },
    ],
  },
  {
    id: "videos",
    icon: "bi bi-play-btn-fill",
    title: "Video Tutorials",
    color: "#6d28d9",
    description:
      "Learn by watching — curated YouTube channels and playlists for intermediate JavaScript.",
    items: [
      {
        title: "Traversy Media — JS Crash Course",
        description:
          "Best JS beginner → intermediate jump. Brad Traversy explains core JS concepts with practical projects.",
        link: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
        label: "Watch Now",
        icon: "bi bi-youtube",
        badge: "Free",
        badgeColor: "#ff0000",
      },
      {
        title: "The Net Ninja — Async JS Series",
        description:
          "Complete async mastery. A structured playlist covering callbacks, promises, and async/await.",
        link: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jx2TTZk3IGWKoon2SDFZgz",
        label: "Watch Playlist",
        icon: "bi bi-collection-play-fill",
        badge: "Free",
        badgeColor: "#22C55E",
      },
      {
        title: "Fireship — Promises in 10 Minutes",
        description:
          "Fast, fun async concepts. Fireship breaks down JavaScript Promises in a concise, visual way.",
        link: "https://www.youtube.com/watch?v=DHvZLI7Db8E",
        label: "Watch Now",
        icon: "bi bi-lightning-fill",
        badge: "Free",
        badgeColor: "#22C55E",
      },
      {
        title: "TECH IN MY STYLE",
        description:
          "Our very own YouTube channel — packed with JS tutorials, tips, project walkthroughs, and study guides.",
        link: "https://www.youtube.com/@TECHINMYSTYLE",
        label: "Subscribe",
        icon: "bi bi-star-fill",
        badge: "Official",
        badgeColor: "#8b5cf6",
      },
    ],
  },
  {
    id: "practice",
    icon: "bi bi-code-slash",
    title: "Practice Platforms",
    color: "#ec4899",
    description:
      "Sharpen your skills by writing real code — challenges, projects, and interactive lessons.",
    items: [
      {
        title: "JavaScript.info",
        description:
          "The most complete JS tutorial site. Modern JavaScript from the basics through advanced concepts.",
        link: "https://javascript.info",
        label: "Start Learning",
        icon: "bi bi-journal-richtext",
        badge: "Free",
        badgeColor: "#22C55E",
      },
      {
        title: "Exercism — JS Track",
        description:
          "Hands-on challenges with mentoring. Practice real exercises and get code reviews from mentors.",
        link: "https://exercism.org/tracks/javascript",
        label: "Start Track",
        icon: "bi bi-award-fill",
        badge: "Free",
        badgeColor: "#22C55E",
      },
      {
        title: "LeetCode",
        description:
          "Algorithm practice with JS. Solve DSA problems and prepare for technical coding interviews.",
        link: "https://leetcode.com",
        label: "Start Coding",
        icon: "bi bi-terminal-fill",
        badge: "Freemium",
        badgeColor: "#ec4899",
      },
      {
        title: "freeCodeCamp",
        description:
          "Free structured JS curriculum. Thousands of hours of guided content with certifications.",
        link: "https://www.freecodecamp.org",
        label: "Start Curriculum",
        icon: "bi bi-fire",
        badge: "Free",
        badgeColor: "#22C55E",
      },
    ],
  },
];

const ROADMAPS = [
  {
    title: "Frontend Developer Roadmap",
    description:
      "A comprehensive visual guide to becoming a skilled frontend developer — HTML, CSS, JS and beyond.",
    link: "https://roadmap.sh/frontend",
    icon: "bi bi-map",
    color: "#8b5cf6",
    tag: "Recommended",
  },
  {
    title: "JavaScript Roadmap",
    description:
      "Everything you need to learn about JavaScript — from basics to advanced patterns, frameworks, and tooling.",
    link: "https://roadmap.sh/javascript",
    icon: "bi bi-signpost-2-fill",
    color: "#6d28d9",
    tag: "Core",
  },
  {
    title: "Full Stack Roadmap",
    description:
      "Go beyond the frontend — cover backend, databases, APIs, DevOps, and full-stack architecture.",
    link: "https://roadmap.sh/full-stack",
    icon: "bi bi-layers-fill",
    color: "#ec4899",
    tag: "Advanced",
  },
];

const CERTIFICATIONS = [
  {
    title: "freeCodeCamp JS Algorithms & Data Structures",
    description:
      "A rigorous, project-based certification covering core JavaScript algorithms and data structures. Completely free.",
    link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures",
    icon: "bi bi-patch-check-fill",
    provider: "freeCodeCamp",
    free: true,
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    description:
      "Industry-recognized certification from Meta covering React, JavaScript, and modern front-end development.",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    icon: "bi bi-mortarboard-fill",
    provider: "Coursera / Meta",
    free: false,
  },
  {
    title: "Udemy — Advanced JavaScript Concepts",
    description:
      "A deep-dive into closures, prototypes, the event loop, async patterns, and performance optimization.",
    link: "https://www.udemy.com",
    icon: "bi bi-award",
    provider: "Udemy",
    free: false,
  },
];

const TOOLS = [
  {
    title: "VS Code",
    description:
      "The go-to editor for JS development. Powerful extensions, Git integration, and IntelliSense built in.",
    link: "https://code.visualstudio.com",
    icon: "bi bi-code-square",
    color: "#007ACC",
  },
  {
    title: "Node.js",
    description:
      "Run JavaScript outside the browser. Execute scripts, build CLI tools, and power server-side apps.",
    link: "https://nodejs.org",
    icon: "bi bi-server",
    color: "#339933",
  },
  {
    title: "Chrome DevTools",
    description:
      "Debug JS right in your browser. Inspect, profile, set breakpoints, and analyze network requests.",
    link: "https://developer.chrome.com/docs/devtools",
    icon: "bi bi-bug-fill",
    color: "#4285F4",
  },
  {
    title: "ESLint",
    description:
      "Catch JS errors before runtime. Enforce code style and find potential bugs automatically.",
    link: "https://eslint.org",
    icon: "bi bi-shield-check",
    color: "#4B32C3",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────── */
function SectionHeader({ icon, title, color, description }) {
  return (
    <div className="res-section-header">
      <div className="res-section-icon" style={{ "--sec-color": color }}>
        <i className={icon} aria-hidden="true" />
      </div>
      <div>
        <h2 className="res-section-title">{title}</h2>
        <p className="res-section-desc">{description}</p>
      </div>
    </div>
  );
}

function ResourceCard({ item, index }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="res-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      aria-label={`${item.title} — ${item.label}`}
    >
      {/* Top accent bar */}
      <div
        className="res-card__accent"
        style={{ background: item.badgeColor }}
      />

      {/* Header */}
      <div className="res-card__head">
        <div
          className="res-card__icon-wrap"
          style={{ "--ic-color": item.badgeColor }}
        >
          <i className={item.icon} aria-hidden="true" />
        </div>
        <div className="res-card__meta">
          <span
            className="res-card__badge"
            style={{
              background: item.badgeColor + "22",
              color: item.badgeColor,
              border: `1px solid ${item.badgeColor}44`,
            }}
          >
            {item.badge}
          </span>
          {item.size && (
            <span className="res-card__size">
              <i className="bi bi-clock" aria-hidden="true" />
              {item.size}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="res-card__body">
        <h3 className="res-card__title">{item.title}</h3>
        <p className="res-card__desc">{item.description}</p>
      </div>

      {/* CTA */}
      <div className="res-card__cta">
        <span
          className="res-card__cta-btn"
          style={{ "--cta-color": item.badgeColor }}
        >
          {item.label}
          <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function JsIntResources() {
  const { dark, toggle } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showBackTop, setShowBackTop] = useState(false);
  const searchRef = useRef(null);

  const lower = searchTerm.trim().toLowerCase();

  /* Scroll handler */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Filter resources */
  function matchSearch(text) {
    return text.toLowerCase().includes(lower);
  }

  const filteredSections = RESOURCE_SECTIONS.map((sec) => ({
    ...sec,
    items: sec.items.filter(
      (item) => matchSearch(item.title) || matchSearch(item.description),
    ),
  })).filter((sec) => sec.items.length > 0);

  const filteredRoadmaps = ROADMAPS.filter(
    (r) => matchSearch(r.title) || matchSearch(r.description),
  );

  const filteredCerts = CERTIFICATIONS.filter(
    (c) => matchSearch(c.title) || matchSearch(c.description),
  );

  const filteredTools = TOOLS.filter(
    (t) => matchSearch(t.title) || matchSearch(t.description),
  );

  const tabs = [
    { id: "all", label: "All Resources", icon: "bi bi-grid-fill" },
    { id: "docs", label: "Official Docs", icon: "bi bi-book-fill" },
    { id: "videos", label: "Videos", icon: "bi bi-play-btn-fill" },
    { id: "practice", label: "Practice", icon: "bi bi-code-slash" },
    { id: "roadmaps", label: "Roadmaps", icon: "bi bi-signpost-2-fill" },
    { id: "certs", label: "Certifications", icon: "bi bi-award-fill" },
    { id: "tools", label: "Tools", icon: "bi bi-tools" },
  ];

  const showSection = (id) => activeTab === "all" || activeTab === id;

  return (
    <div className={`res-page${dark ? " res-page--dark" : ""}`}>
      <JsIntNavbar />
      <main id="main-content">
        {/* ══════════ HERO ══════════ */}
        <section className="res-hero" aria-label="Resources page header">
          <div
            className="res-hero__blob res-hero__blob--a"
            aria-hidden="true"
          />
          <div
            className="res-hero__blob res-hero__blob--b"
            aria-hidden="true"
          />

          <div className="res-hero__inner">
            <div className="res-hero__badge">
              <i className="bi bi-collection-fill" />
              <span>Learning Hub</span>
            </div>
            <h1 className="res-hero__title">
              JS Intermediate{" "}
              <span className="res-hero__title-accent">Resources</span>
            </h1>
            <p className="res-hero__desc">
              Everything you need to master JavaScript — curated documentation, video
              tutorials, practice platforms, learning roadmaps, certifications, and developer tools,
              all in one place.
            </p>

            {/* Search */}
            <div
              className="res-search"
              role="search"
              aria-label="Search resources"
            >
              <i className="bi bi-search res-search__icon" aria-hidden="true" />
              <input
                ref={searchRef}
                type="search"
                className="res-search__input"
                placeholder="Search resources, tools, videos…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search resources"
                autoComplete="off"
              />
              {searchTerm && (
                <button
                  className="res-search__clear"
                  onClick={() => {
                    setSearchTerm("");
                    searchRef.current?.focus();
                  }}
                  aria-label="Clear search"
                >
                  <i className="bi bi-x-lg" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Quick stats */}
            <div className="res-hero__stats">
              <span className="res-hero__stat">
                <i className="bi bi-code-slash" />4 Practice Sites
              </span>
              <span className="res-hero__stat-sep" aria-hidden="true" />
              <span className="res-hero__stat">
                <i className="bi bi-play-btn-fill" />4 Video Playlists
              </span>
              <span className="res-hero__stat-sep" aria-hidden="true" />
              <span className="res-hero__stat">
                <i className="bi bi-signpost-2-fill" />3 Roadmaps
              </span>
              <span className="res-hero__stat-sep" aria-hidden="true" />
              <span className="res-hero__stat">
                <i className="bi bi-award-fill" />3 Certifications
              </span>
            </div>
          </div>
        </section>

        {/* ══════════ TAB NAV ══════════ */}
        {!lower && (
          <div className="res-tabs-bar">
            <div className="res-container">
              <div
                className="res-tabs"
                role="tablist"
                aria-label="Resource categories"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    className={`res-tab${activeTab === tab.id ? " res-tab--active" : ""}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={tab.icon} aria-hidden="true" />
                    <span className="res-tab__label">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search result summary */}
        {lower && (
          <div className="res-search-info" aria-live="polite">
            <div className="res-container">
              <p>
                <i className="bi bi-search" />
                Results for <em>"{searchTerm}"</em>
              </p>
              <button
                className="res-search-info__clear"
                onClick={() => setSearchTerm("")}
              >
                <i className="bi bi-x-circle-fill" />
                Clear
              </button>
            </div>
          </div>
        )}

        <div className="res-container res-content">
          {/* ══════════ SECTIONS ══════════ */}
          {filteredSections.map((sec) => {
            if (!showSection(sec.id)) return null;
            return (
              <section
                key={sec.id}
                className="res-section"
                id={sec.id}
                aria-labelledby={`${sec.id}-heading`}
              >
                <SectionHeader
                  icon={sec.icon}
                  title={sec.title}
                  color={sec.color}
                  description={sec.description}
                />
                <div className="res-grid res-grid--2">
                  {sec.items.map((item, i) => (
                    <ResourceCard key={item.title} item={item} index={i} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* ══════════ ROADMAPS ══════════ */}
          {showSection("roadmaps") && filteredRoadmaps.length > 0 && (
            <section
              className="res-section"
              id="roadmaps"
              aria-labelledby="roadmaps-heading"
            >
              <SectionHeader
                icon="bi bi-signpost-2-fill"
                title="Learning Roadmaps"
                color="#8b5cf6"
                description="Structured learning paths to guide your journey from beginner to professional developer."
              />
              <div className="res-grid res-grid--3">
                {filteredRoadmaps.map((road, i) => (
                  <a
                    key={road.title}
                    href={road.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="res-roadmap-card"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      "--rm-color": road.color,
                    }}
                    aria-label={road.title}
                  >
                    <div className="res-roadmap-card__icon">
                      <i className={road.icon} aria-hidden="true" />
                    </div>
                    <div className="res-roadmap-card__tag">{road.tag}</div>
                    <h3 className="res-roadmap-card__title">{road.title}</h3>
                    <p className="res-roadmap-card__desc">{road.description}</p>
                    <span className="res-roadmap-card__link">
                      View Roadmap
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ══════════ CERTIFICATIONS ══════════ */}
          {showSection("certs") && filteredCerts.length > 0 && (
            <section
              className="res-section"
              id="certs"
              aria-labelledby="certs-heading"
            >
              <SectionHeader
                icon="bi bi-award-fill"
                title="Certifications"
                color="#ec4899"
                description="Earn recognised credentials to showcase your JavaScript and web development skills."
              />
              <div className="res-cert-list">
                {filteredCerts.map((cert, i) => (
                  <a
                    key={cert.title}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="res-cert-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    aria-label={cert.title}
                  >
                    <div className="res-cert-card__icon">
                      <i className={cert.icon} aria-hidden="true" />
                    </div>
                    <div className="res-cert-card__body">
                      <div className="res-cert-card__head">
                        <h3 className="res-cert-card__title">{cert.title}</h3>
                        <div className="res-cert-card__tags">
                          <span className="res-cert-card__provider">
                            {cert.provider}
                          </span>
                          <span
                            className={`res-cert-card__free${cert.free ? " res-cert-card__free--yes" : ""}`}
                          >
                            {cert.free ? (
                              <>
                                <i className="bi bi-gift-fill" /> Free
                              </>
                            ) : (
                              <>
                                <i className="bi bi-credit-card" /> Paid
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                      <p className="res-cert-card__desc">{cert.description}</p>
                    </div>
                    <div className="res-cert-card__arrow">
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* ══════════ TOOLS ══════════ */}
          {showSection("tools") && filteredTools.length > 0 && (
            <section
              className="res-section"
              id="tools"
              aria-labelledby="tools-heading"
            >
              <SectionHeader
                icon="bi bi-tools"
                title="Essential Tools"
                color="#8b5cf6"
                description="Must-have tools and references that every JS developer should have bookmarked."
              />
              <div className="res-grid res-grid--4">
                {filteredTools.map((tool, i) => (
                  <a
                    key={tool.title}
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="res-tool-card"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      "--tool-color": tool.color,
                    }}
                    aria-label={tool.title}
                  >
                    <div className="res-tool-card__icon">
                      <i className={tool.icon} aria-hidden="true" />
                    </div>
                    <h3 className="res-tool-card__title">{tool.title}</h3>
                    <p className="res-tool-card__desc">{tool.description}</p>
                    <span className="res-tool-card__link">
                      Visit{" "}
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* No results */}
          {lower &&
            filteredSections.length === 0 &&
            filteredRoadmaps.length === 0 &&
            filteredCerts.length === 0 &&
            filteredTools.length === 0 && (
              <div className="res-empty">
                <i
                  className="bi bi-search res-empty__icon"
                  aria-hidden="true"
                />
                <h3>No results found</h3>
                <p>
                  Nothing matched <strong>"{searchTerm}"</strong>. Try a
                  different keyword.
                </p>
                <button
                  className="res-empty__btn"
                  onClick={() => setSearchTerm("")}
                >
                  <i className="bi bi-arrow-counterclockwise" />
                  Reset Search
                </button>
              </div>
            )}

          {/* ══════════ CTA STRIP ══════════ */}
          {!lower && (
            <section className="res-cta" aria-label="Try the playground">
              <div className="res-cta__inner">
                <div className="res-cta__icon" aria-hidden="true">
                  <i className="bi bi-braces-asterisk" />
                </div>
                <div className="res-cta__text">
                  <h3>Ready to practise?</h3>
                  <p>
                    Open our live JS playground and put your knowledge
                    to the test instantly.
                  </p>
                </div>
                <div className="res-cta__actions">
                  <Link
                    to="/js-int-course/compiler"
                    className="res-cta__btn res-cta__btn--primary"
                  >
                    <i className="bi bi-terminal-fill" />
                    Open Playground
                  </Link>
                  <Link to="/js-int-course/js-int" className="res-cta__btn res-cta__btn--ghost">
                    <i className="bi bi-book" />
                    JS Topics Reference
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Floating back-to-top */}
      <button
        className={`res-back-top${showBackTop ? " res-back-top--visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        type="button"
      >
        <i className="bi bi-arrow-up" aria-hidden="true" />
      </button>

      {/* Inline CSS (Violet/Indigo Theme) */}
      <style>{`
        /* ── Tokens ── */
        .res-page {
          --rp: #8b5cf6;
          --rp-dk: #6d28d9;
          --rp-sc: #ec4899;
          --rp-bg: #f5f3ff;
          --rp-bg-alt: #ffffff;
          --rp-card: #ffffff;
          --rp-border: rgba(139,92,246,0.18);
          --rp-border-soft: rgba(0,0,0,0.07);
          --rp-text: #1c192b;
          --rp-text-muted: #5b5270;
          --rp-text-faint: #8b839e;
          --rp-grad: linear-gradient(135deg,#8b5cf6,#ec4899);
          --rp-grad-dk: linear-gradient(135deg,#6d28d9,#8b5cf6);
          --rp-grad-soft: linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.05));
          --rp-shadow-xs: 0 1px 4px rgba(0,0,0,0.06);
          --rp-shadow-sm: 0 2px 10px rgba(0,0,0,0.08);
          --rp-shadow-md: 0 6px 24px rgba(0,0,0,0.1);
          --rp-shadow-brand: 0 8px 28px rgba(139,92,246,0.18);
          --rp-r-sm: 8px;
          --rp-r-md: 14px;
          --rp-r-lg: 20px;
          --rp-r-xl: 28px;
          --rp-r-full: 9999px;
          --rp-ease: cubic-bezier(0.4,0,0.2,1);
          --rp-bounce: cubic-bezier(0.34,1.56,0.64,1);
          --rp-fast: 180ms;
          --rp-mid: 320ms;
          font-family:'Inter',system-ui,-apple-system,sans-serif;
          background:var(--rp-bg);
          color:var(--rp-text);
          min-height:100vh;
          overflow-x:hidden;
          transition:background var(--rp-mid) var(--rp-ease), color var(--rp-mid) var(--rp-ease);
        }
        /* Dark */
        .res-page--dark {
          --rp-bg:#0b0914;
          --rp-bg-alt:#131022;
          --rp-card:#1c172d;
          --rp-border:rgba(139,92,246,0.18);
          --rp-border-soft:rgba(255,255,255,0.07);
          --rp-text:#f3f0fa;
          --rp-text-muted:#a79ebd;
          --rp-text-faint:#6f6587;
          --rp-shadow-xs:0 1px 4px rgba(0,0,0,0.28);
          --rp-shadow-sm:0 2px 10px rgba(0,0,0,0.35);
          --rp-shadow-md:0 6px 24px rgba(0,0,0,0.48);
          --rp-shadow-brand:0 8px 28px rgba(139,92,246,0.22);
          --rp-grad-soft:linear-gradient(135deg,rgba(139,92,246,0.15),rgba(236,72,153,0.08));
        }

        /* ── Container ── */
        .res-container {
          width:100%;
          max-width:1240px;
          margin:0 auto;
          padding:0 2rem;
        }
        .res-content {
          padding-bottom:5rem;
        }

        /* ══════ HERO ══════ */
        .res-hero {
          position:relative;
          background:var(--rp-bg);
          padding:6.5rem 2rem 4.5rem;
          overflow:hidden;
          border-bottom:1px solid var(--rp-border-soft);
          transition:background var(--rp-mid) var(--rp-ease);
        }
        .res-hero__blob {
          position:absolute;
          border-radius:50%;
          filter:blur(70px);
          pointer-events:none;
          z-index:0;
        }
        .res-hero__blob--a {
          width:450px;height:450px;top:-150px;left:-100px;
          background:radial-gradient(circle,rgba(139,92,246,0.2) 0%,transparent 70%);
          animation:resBlob 11s ease-in-out infinite;
        }
        .res-hero__blob--b {
          width:360px;height:360px;bottom:-100px;right:-80px;
          background:radial-gradient(circle,rgba(236,72,153,0.15) 0%,transparent 70%);
          animation:resBlob 14s ease-in-out infinite reverse;
        }
        @keyframes resBlob {
          0%,100%{transform:translate(0,0) scale(1);}
          33%{transform:translate(18px,-18px) scale(1.04);}
          66%{transform:translate(-14px,14px) scale(0.97);}
        }
        .res-hero__inner {
          position:relative;z-index:1;
          max-width:720px;margin:0 auto;
          text-align:center;
          display:flex;flex-direction:column;align-items:center;gap:1.2rem;
        }
        .res-hero__badge {
          display:inline-flex;align-items:center;gap:0.4rem;
          padding:0.35rem 1.1rem;
          background:var(--rp-grad-soft);
          border:1px solid var(--rp-border);
          border-radius:var(--rp-r-full);
          color:var(--rp);
          font-size:0.78rem;font-weight:700;
          letter-spacing:0.05em;text-transform:uppercase;
        }
        .res-hero__badge i { color:var(--rp); font-size:0.95rem; }
        .res-hero__title {
          font-size:clamp(2rem,5vw,3.2rem);
          font-weight:900;letter-spacing:-0.035em;line-height:1.15;
          color:var(--rp-text);margin:0;
        }
        .res-hero__title-accent {
          background:var(--rp-grad);
          -webkit-background-clip:text;background-clip:text;color:transparent;
        }
        .res-hero__desc {
          font-size:1.05rem;color:var(--rp-text-muted);
          line-height:1.75;max-width:600px;margin:0;
        }

        /* Search */
        .res-search {
          position:relative;width:100%;max-width:520px;margin-top:0.5rem;
        }
        .res-search__icon {
          position:absolute;top:50%;left:1.1rem;transform:translateY(-50%);
          color:var(--rp-text-faint);font-size:1.1rem;pointer-events:none;
        }
        .res-search__input {
          width:100%;
          padding:0.9rem 2.8rem 0.9rem 2.8rem;
          border-radius:var(--rp-r-full);
          border:2px solid var(--rp-border-soft);
          background:var(--rp-bg-alt);
          color:var(--rp-text);
          font-family:inherit;font-size:1rem;
          box-shadow:var(--rp-shadow-xs);
          transition:all 0.2s;
        }
        .res-search__input::placeholder { color:var(--rp-text-faint); }
        .res-search__input:focus {
          outline:none;border-color:var(--rp);
          box-shadow:0 0 0 3px rgba(139,92,246,0.15), var(--rp-shadow-md);
        }
        .res-search__clear {
          position:absolute;top:50%;right:0.7rem;transform:translateY(-50%);
          width:28px;height:28px;border-radius:50%;
          background:var(--rp-bg);border:none;color:var(--rp-text-muted);
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;font-size:0.9rem;transition:all 0.2s;
        }
        .res-search__clear:hover {
          background:var(--rp);color:#fff;
        }

        /* Stats */
        .res-hero__stats {
          display:flex;flex-wrap:wrap;align-items:center;justify-content:center;
          gap:0.7rem 1.2rem;margin-top:0.8rem;
        }
        .res-hero__stat {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.85rem;font-weight:600;color:var(--rp-text-muted);
        }
        .res-hero__stat i { color:var(--rp); font-size:1.05rem; }
        .res-hero__stat-sep {
          width:4px;height:4px;border-radius:50%;background:var(--rp-border);
        }

        /* ══════ TABS BAR ══════ */
        .res-tabs-bar {
          position:sticky;top:68px;z-index:90;
          background:var(--rp-bg);
          border-bottom:1px solid var(--rp-border-soft);
          padding:0.8rem 0;
          transition:background 0.3s;
        }
        /* subtle shadow on scroll */
        .res-tabs-bar::after {
          content:'';position:absolute;bottom:-8px;left:0;right:0;height:8px;
          background:linear-gradient(to bottom, rgba(0,0,0,0.04), transparent);
          pointer-events:none;opacity:0;transition:opacity 0.3s;
        }
        .res-tabs {
          display:flex;align-items:center;gap:0.6rem;
          overflow-x:auto;scrollbar-width:none;
        }
        .res-tabs::-webkit-scrollbar { display:none; }
        .res-tab {
          display:inline-flex;align-items:center;gap:0.5rem;
          padding:0.5rem 1.25rem;
          background:var(--rp-card);
          border:1px solid var(--rp-border-soft);
          border-radius:var(--rp-r-full);
          color:var(--rp-text-muted);
          font-family:inherit;font-size:0.85rem;font-weight:600;
          white-space:nowrap;cursor:pointer;
          box-shadow:var(--rp-shadow-xs);
          transition:all var(--rp-fast) var(--rp-ease);
        }
        .res-tab i { font-size:0.95rem; }
        .res-tab:hover {
          color:var(--rp-text);border-color:var(--rp-border);
          transform:translateY(-1px);box-shadow:var(--rp-shadow-sm);
        }
        .res-tab--active {
          background:var(--rp);color:#fff;
          border-color:var(--rp);box-shadow:var(--rp-shadow-brand);
        }
        .res-tab--active:hover { color:#fff; }

        /* Summary bar for search */
        .res-search-info {
          background:var(--rp-card);
          border-bottom:1px solid var(--rp-border-soft);
          padding:0.75rem 0;
        }
        .res-search-info .res-container {
          display:flex;align-items:center;justify-content:space-between;
        }
        .res-search-info p {
          margin:0;font-size:0.9rem;color:var(--rp-text-muted);
          display:flex;align-items:center;gap:0.5rem;
        }
        .res-search-info p i { color:var(--rp); }
        .res-search-info__clear {
          background:none;border:none;color:var(--rp-text-muted);
          font-size:0.85rem;font-weight:600;display:flex;align-items:center;gap:0.3rem;
          cursor:pointer;transition:color 0.2s;
        }
        .res-search-info__clear:hover { color:var(--rp); }

        /* ══════ SECTION HEADER ══════ */
        .res-section { margin-top:4rem; scroll-margin-top:140px; }
        .res-section-header {
          display:flex;align-items:flex-start;gap:1.25rem;margin-bottom:2rem;
        }
        .res-section-icon {
          width:52px;height:52px;border-radius:var(--rp-r-md);
          display:flex;align-items:center;justify-content:center;
          font-size:1.5rem;flex-shrink:0;
          background:var(--rp-grad-soft);color:var(--sec-color, var(--rp));
          box-shadow:var(--rp-shadow-xs);
        }
        .res-section-title {
          font-size:1.75rem;font-weight:800;color:var(--rp-text);
          margin:0 0 0.4rem;letter-spacing:-0.02em;
        }
        .res-section-desc {
          font-size:1rem;color:var(--rp-text-muted);
          margin:0;line-height:1.5;max-width:700px;
        }

        /* ══════ GRID ══════ */
        .res-grid {
          display:grid;gap:1.5rem;
        }
        .res-grid--2 { grid-template-columns:repeat(auto-fill, minmax(340px, 1fr)); }
        .res-grid--3 { grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); }
        .res-grid--4 { grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); }

        /* ══════ RESOURCE CARD ══════ */
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(16px);}
          to{opacity:1;transform:translateY(0);}
        }
        .res-card {
          display:flex;flex-direction:column;
          background:var(--rp-card);
          border:1px solid var(--rp-border-soft);
          border-radius:var(--rp-r-lg);
          text-decoration:none;position:relative;overflow:hidden;
          box-shadow:var(--rp-shadow-xs);
          animation:fadeUp 0.4s var(--rp-ease) both;
          transition:transform var(--rp-bounce) 0.3s, box-shadow var(--rp-ease) 0.3s, border-color 0.3s;
        }
        .res-card:hover {
          transform:translateY(-4px);
          box-shadow:var(--rp-shadow-md);
          border-color:var(--rp-border);
        }
        .res-card__accent {
          position:absolute;top:0;left:0;right:0;height:4px;
          opacity:0.8;transition:opacity 0.3s;
        }
        .res-card:hover .res-card__accent { opacity:1; }
        .res-card__head {
          display:flex;align-items:flex-start;justify-content:space-between;
          padding:1.5rem 1.5rem 0;
        }
        .res-card__icon-wrap {
          width:44px;height:44px;border-radius:var(--rp-r-md);
          display:flex;align-items:center;justify-content:center;
          font-size:1.3rem;
          background:color-mix(in srgb, var(--ic-color) 12%, transparent);
          color:var(--ic-color);
        }
        .res-card__meta { display:flex;flex-direction:column;align-items:flex-end;gap:0.4rem; }
        .res-card__badge {
          padding:0.2rem 0.6rem;border-radius:var(--rp-r-full);
          font-size:0.65rem;font-weight:800;text-transform:uppercase;letter-spacing:0.04em;
        }
        .res-card__size {
          font-size:0.8rem;color:var(--rp-text-faint);font-weight:600;
          display:flex;align-items:center;gap:0.3rem;
        }
        .res-card__body {
          padding:1.2rem 1.5rem 1.5rem;flex:1;display:flex;flex-direction:column;gap:0.6rem;
        }
        .res-card__title {
          font-size:1.15rem;font-weight:700;color:var(--rp-text);
          margin:0;line-height:1.3;letter-spacing:-0.01em;
        }
        .res-card__desc {
          font-size:0.9rem;color:var(--rp-text-muted);
          margin:0;line-height:1.6;
        }
        .res-card__cta {
          padding:1.2rem 1.5rem;border-top:1px solid var(--rp-border-soft);
          background:color-mix(in srgb, var(--rp-text-faint) 2%, transparent);
        }
        .res-card__cta-btn {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.9rem;font-weight:700;color:var(--cta-color);
        }
        .res-card__cta-btn i { transition:transform 0.3s var(--rp-bounce); }
        .res-card:hover .res-card__cta-btn i { transform:translateX(4px); }

        /* ══════ ROADMAP CARD ══════ */
        .res-roadmap-card {
          display:flex;flex-direction:column;gap:1.2rem;
          background:var(--rp-card);
          border:1px solid var(--rp-border-soft);
          border-left:4px solid var(--rm-color);
          border-radius:var(--rp-r-lg);
          padding:1.5rem;
          text-decoration:none;
          box-shadow:var(--rp-shadow-xs);
          animation:fadeUp 0.4s var(--rp-ease) both;
          transition:transform var(--rp-bounce) 0.3s, box-shadow var(--rp-ease) 0.3s, border-color 0.3s;
        }
        .res-roadmap-card:hover {
          transform:translateY(-4px);
          box-shadow:var(--rp-shadow-md);
          border-color:var(--rp-border);
        }
        .res-roadmap-card__icon {
          width:48px;height:48px;border-radius:var(--rp-r-md);
          display:flex;align-items:center;justify-content:center;
          font-size:1.4rem;
          background:color-mix(in srgb, var(--rm-color) 12%, transparent);
          color:var(--rm-color);
        }
        .res-roadmap-card__tag {
          font-size:0.7rem;font-weight:800;color:var(--rm-color);
          text-transform:uppercase;letter-spacing:0.05em;margin-top:0.4rem;
        }
        .res-roadmap-card__title {
          font-size:1.2rem;font-weight:800;color:var(--rp-text);
          margin:0.2rem 0 0.5rem;letter-spacing:-0.01em;
        }
        .res-roadmap-card__desc {
          font-size:0.95rem;color:var(--rp-text-muted);
          margin:0 0 1rem;line-height:1.5;flex:1;
        }
        .res-roadmap-card__link {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.9rem;font-weight:700;color:var(--rm-color);
        }
        .res-roadmap-card__link i { transition:transform 0.3s var(--rp-bounce); }
        .res-roadmap-card:hover .res-roadmap-card__link i { transform:translateX(4px); }

        /* ══════ CERTIFICATIONS LIST ══════ */
        .res-cert-list {
          display:flex;flex-direction:column;gap:1rem;
        }
        .res-cert-card {
          display:flex;align-items:center;gap:1.5rem;
          background:var(--rp-card);
          border:1px solid var(--rp-border-soft);
          border-radius:var(--rp-r-lg);
          padding:1.5rem;
          text-decoration:none;
          box-shadow:var(--rp-shadow-xs);
          animation:fadeUp 0.4s var(--rp-ease) both;
          transition:transform var(--rp-bounce) 0.3s, box-shadow var(--rp-ease) 0.3s, border-color 0.3s;
        }
        .res-cert-card:hover {
          transform:translateX(6px);
          box-shadow:var(--rp-shadow-md);
          border-color:var(--rp-border);
        }
        .res-cert-card__icon {
          width:56px;height:56px;border-radius:var(--rp-r-full);
          display:flex;align-items:center;justify-content:center;
          font-size:1.75rem;
          background:var(--rp-grad-soft);
          color:var(--rp);
          flex-shrink:0;
        }
        .res-cert-card__body { flex:1; min-width:0; }
        .res-cert-card__head {
          display:flex;align-items:center;justify-content:space-between;gap:1rem;
          margin-bottom:0.4rem;
        }
        .res-cert-card__title {
          font-size:1.15rem;font-weight:700;color:var(--rp-text);
          margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
        }
        .res-cert-card__tags {
          display:flex;align-items:center;gap:0.75rem;
        }
        .res-cert-card__provider {
          font-size:0.85rem;font-weight:600;color:var(--rp-text-faint);
        }
        .res-cert-card__free {
          display:inline-flex;align-items:center;gap:0.3rem;
          padding:0.2rem 0.6rem;border-radius:var(--rp-r-full);
          font-size:0.7rem;font-weight:800;text-transform:uppercase;
          background:rgba(236,72,153,0.1);color:#ec4899;
        }
        .res-cert-card__free--yes {
          background:rgba(34,197,94,0.1);color:#22C55E;
        }
        .res-cert-card__desc {
          font-size:0.95rem;color:var(--rp-text-muted);
          margin:0;line-height:1.5;
        }
        .res-cert-card__arrow {
          width:40px;height:40px;border-radius:50%;
          background:var(--rp-bg-alt);border:1px solid var(--rp-border);
          display:flex;align-items:center;justify-content:center;
          color:var(--rp);font-size:1.1rem;flex-shrink:0;
          transition:background 0.3s, color 0.3s;
        }
        .res-cert-card:hover .res-cert-card__arrow {
          background:var(--rp);color:#fff;
        }

        /* ══════ TOOLS ══════ */
        .res-tool-card {
          display:flex;flex-direction:column;align-items:center;text-align:center;
          background:var(--rp-card);
          border:1px solid var(--rp-border-soft);
          border-radius:var(--rp-r-lg);
          padding:2rem 1.5rem;
          text-decoration:none;
          box-shadow:var(--rp-shadow-xs);
          animation:fadeUp 0.4s var(--rp-ease) both;
          transition:transform var(--rp-bounce) 0.3s, box-shadow var(--rp-ease) 0.3s, border-color 0.3s;
        }
        .res-tool-card:hover {
          transform:translateY(-4px);
          box-shadow:var(--rp-shadow-md);
          border-color:var(--rp-border);
        }
        .res-tool-card__icon {
          width:64px;height:64px;border-radius:var(--rp-r-md);
          display:flex;align-items:center;justify-content:center;
          font-size:2rem;margin-bottom:1.25rem;
          background:color-mix(in srgb, var(--tool-color) 10%, transparent);
          color:var(--tool-color);
          transition:transform 0.3s var(--rp-bounce);
        }
        .res-tool-card:hover .res-tool-card__icon { transform:scale(1.1) rotate(5deg); }
        .res-tool-card__title {
          font-size:1.2rem;font-weight:800;color:var(--rp-text);
          margin:0 0 0.5rem;
        }
        .res-tool-card__desc {
          font-size:0.9rem;color:var(--rp-text-muted);
          margin:0 0 1.25rem;line-height:1.5;flex:1;
        }
        .res-tool-card__link {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.95rem;font-weight:700;color:var(--tool-color);
        }

        /* ══════ EMPTY SEARCH ══════ */
        .res-empty {
          text-align:center;padding:5rem 2rem;
          background:var(--rp-card);border:1px dashed var(--rp-border);
          border-radius:var(--rp-r-lg);margin-top:2rem;
        }
        .res-empty__icon {
          font-size:3rem;color:var(--rp-text-faint);display:block;margin-bottom:1rem;
        }
        .res-empty h3 { font-size:1.5rem;color:var(--rp-text);margin:0 0 0.5rem; }
        .res-empty p { font-size:1rem;color:var(--rp-text-muted);margin:0 0 1.5rem; }
        .res-empty__btn {
          display:inline-flex;align-items:center;gap:0.5rem;
          padding:0.6rem 1.25rem;border-radius:var(--rp-r-full);
          background:var(--rp-grad-soft);border:1px solid var(--rp-border);
          color:var(--rp);font-weight:700;cursor:pointer;
          transition:all 0.2s;
        }
        .res-empty__btn:hover { background:var(--rp);color:#fff; }

        /* ══════ CTA STRIP ══════ */
        .res-cta {
          margin-top:5rem;position:relative;
        }
        .res-cta__inner {
          background:var(--rp-card);
          border:1px solid var(--rp-border);
          border-radius:var(--rp-r-xl);
          padding:3rem;
          display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:2rem;
          box-shadow:var(--rp-shadow-md);
          overflow:hidden;position:relative;
        }
        .res-cta__inner::before {
          content:'';position:absolute;top:0;right:0;width:300px;height:300px;
          background:radial-gradient(circle,rgba(236,72,153,0.1),transparent 70%);
          transform:translate(30%, -30%);pointer-events:none;
        }
        .res-cta__icon {
          width:70px;height:70px;border-radius:var(--rp-r-full);
          background:var(--rp-grad);color:#fff;
          display:flex;align-items:center;justify-content:center;
          font-size:2rem;flex-shrink:0;
        }
        .res-cta__text { flex:1; min-width:280px; }
        .res-cta__text h3 {
          font-size:1.8rem;font-weight:800;color:var(--rp-text);margin:0 0 0.4rem;
        }
        .res-cta__text p {
          font-size:1.05rem;color:var(--rp-text-muted);margin:0;line-height:1.5;
        }
        .res-cta__actions { display:flex;gap:1rem;flex-wrap:wrap; }
        .res-cta__btn {
          display:inline-flex;align-items:center;gap:0.5rem;
          padding:0.75rem 1.5rem;border-radius:var(--rp-r-full);
          font-weight:700;text-decoration:none;
          transition:all 0.2s;
        }
        .res-cta__btn--primary {
          background:var(--rp);color:#fff;box-shadow:var(--rp-shadow-sm);
        }
        .res-cta__btn--primary:hover {
          background:var(--rp-dk);transform:translateY(-2px);box-shadow:var(--rp-shadow-md);
        }
        .res-cta__btn--ghost {
          background:transparent;color:var(--rp);border:1px solid var(--rp-border);
        }
        .res-cta__btn--ghost:hover {
          background:var(--rp-grad-soft);border-color:var(--rp);color:var(--rp-dk);
        }

        /* ══════ BACK TO TOP ══════ */
        .res-back-top {
          position:fixed;bottom:2rem;right:2rem;z-index:99;
          width:48px;height:48px;border-radius:50%;
          background:var(--rp);color:#fff;border:none;
          display:flex;align-items:center;justify-content:center;font-size:1.2rem;
          cursor:pointer;box-shadow:var(--rp-shadow-md);
          opacity:0;visibility:hidden;transform:translateY(20px);
          transition:all 0.3s var(--rp-bounce);
        }
        .res-back-top--visible { opacity:1;visibility:visible;transform:translateY(0); }
        .res-back-top:hover {
          background:var(--rp-dk);transform:translateY(-5px);box-shadow:0 10px 24px rgba(139,92,246,0.3);
        }

        /* Media Queries */
        @media (max-width:768px) {
          .res-hero { padding:4rem 1.5rem 3rem; }
          .res-hero__blob--a { width:300px;height:300px;top:-100px;left:-50px; }
          .res-hero__blob--b { width:200px;height:200px;bottom:-50px;right:-30px; }
          .res-cta__inner { flex-direction:column;text-align:center;padding:2rem; }
          .res-cta__actions { width:100%;flex-direction:column; }
          .res-cta__btn { justify-content:center; }
          .res-section-header { flex-direction:column;gap:0.8rem;text-align:center;align-items:center; }
          .res-cert-card { flex-direction:column;text-align:center;gap:1rem; }
          .res-cert-card__head { flex-direction:column;gap:0.5rem; }
          .res-cert-card__arrow { display:none; }
          .res-search__input { font-size:16px; } /* prevent iOS zoom */
        }
      `}</style>
      <JsIntFooter />
    </div>
  );
}
