import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HtmlNavbar, { useDarkMode } from "../components/HtmlNavbar";
import HtmlFooter from "../components/HtmlFooter";

/* ─── Data ──────────────────────────────────────────────────────── */
const RESOURCE_SECTIONS = [
  {
    id: "notes",
    icon: "bi bi-journal-richtext",
    title: "Notes & PDFs",
    color: "#E34F26",
    description:
      "Download comprehensive HTML notes and reference guides crafted by our team.",
    items: [
      {
        title: "HTML Short Notes",
        description:
          "Quick-reference cheat sheet covering all essential HTML concepts, tags, and attributes in a concise format.",
        link: "https://drive.google.com/file/d/1VEWR7VmwrErEVGezaM5_UgWqVTVwSsW2/view?usp=drive_link",
        label: "Download PDF",
        icon: "bi bi-file-earmark-pdf-fill",
        badge: "PDF",
        badgeColor: "#E34F26",
        size: "~2 MB",
      },
      {
        title: "HTML Full Notes",
        description:
          "Complete in-depth HTML reference notes by TECH IN MY STYLE — covers everything from basics to advanced topics.",
        link: "https://drive.google.com/file/d/1VKuRYpMtii212oKUH2EoorQvPH04sFTR/view?usp=drive_link",
        label: "Download PDF",
        icon: "bi bi-file-earmark-pdf-fill",
        badge: "PDF",
        badgeColor: "#E34F26",
        size: "~8 MB",
      },
    ],
  },
  {
    id: "videos",
    icon: "bi bi-play-btn-fill",
    title: "Video Tutorials",
    color: "#F16529",
    description:
      "Handpicked YouTube tutorials from top instructors to accelerate your HTML learning.",
    items: [
      {
        title: "HTML Basics — Dave Gray",
        description:
          "Fundamental concepts of HTML for absolute beginners. Perfect starting point to understand web structure.",
        link: "https://youtu.be/mJgBOIoGihA?si=lo230dqlcXo5Czll",
        label: "Watch on YouTube",
        icon: "bi bi-youtube",
        badge: "YouTube",
        badgeColor: "#ff0000",
        size: "~4 hrs",
      },
      {
        title: "HTML Advanced — freeCodeCamp",
        description:
          "Advanced HTML techniques, semantic elements, accessibility, forms, and best practices from freeCodeCamp.",
        link: "https://youtu.be/zutb5Clb_0Y?si=W1m0bLUF5x25_yU1",
        label: "Watch on YouTube",
        icon: "bi bi-youtube",
        badge: "YouTube",
        badgeColor: "#ff0000",
        size: "~6 hrs",
      },
    ],
  },
];

const ROADMAPS = [
  {
    title: "Frontend Development",
    description:
      "Master HTML, CSS, JavaScript, React, and modern frontend frameworks step by step.",
    link: "https://roadmap.sh/frontend",
    icon: "bi bi-layout-wtf",
    color: "#E34F26",
    tag: "Recommended",
  },
  {
    title: "Backend Development",
    description:
      "Learn server-side programming, databases, APIs, and deployment strategies.",
    link: "https://roadmap.sh/backend",
    icon: "bi bi-server",
    color: "#F16529",
    tag: "Popular",
  },
  {
    title: "Full Stack Development",
    description:
      "Combine frontend and backend skills to build complete, production-ready web applications.",
    link: "https://roadmap.sh/full-stack",
    icon: "bi bi-stack",
    color: "#C73E1D",
    tag: "Advanced",
  },
];

const CERTIFICATIONS = [
  {
    title: "freeCodeCamp — Responsive Web Design",
    description:
      "Earn a recognized certification covering HTML, CSS, and responsive design fundamentals.",
    link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    icon: "bi bi-award-fill",
    provider: "freeCodeCamp",
    free: true,
  },
  {
    title: "W3Schools HTML Certificate",
    description:
      "Prove your HTML knowledge with a professional certificate from the world's largest web developer learning site.",
    link: "https://www.w3schools.com/cert/cert_html.asp",
    icon: "bi bi-patch-check-fill",
    provider: "W3Schools",
    free: false,
  },
  {
    title: "Coursera — HTML, CSS, and JavaScript",
    description:
      "University-level certification program from Johns Hopkins that covers HTML alongside CSS and JavaScript.",
    link: "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
    icon: "bi bi-mortarboard-fill",
    provider: "Coursera",
    free: false,
  },
];

const TOOLS = [
  {
    title: "VS Code",
    description:
      "The most popular code editor with powerful HTML extensions and live server support.",
    link: "https://code.visualstudio.com/",
    icon: "bi bi-code-square",
    color: "#007ACC",
  },
  {
    title: "CodePen",
    description:
      "Online HTML/CSS/JS editor — great for experimenting and sharing snippets.",
    link: "https://codepen.io/",
    icon: "bi bi-pen-fill",
    color: "#E34F26",
  },
  {
    title: "MDN Web Docs",
    description:
      "The definitive HTML reference by Mozilla. An essential bookmark for every web developer.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: "bi bi-book-fill",
    color: "#F16529",
  },
  {
    title: "W3C Validator",
    description:
      "Validate your HTML markup for errors, warnings, and standards compliance.",
    link: "https://validator.w3.org/",
    icon: "bi bi-shield-check-fill",
    color: "#C73E1D",
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
export default function HtmlResources() {
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
    { id: "notes", label: "Notes & PDFs", icon: "bi bi-journal-richtext" },
    { id: "videos", label: "Videos", icon: "bi bi-play-btn-fill" },
    { id: "roadmaps", label: "Roadmaps", icon: "bi bi-signpost-2-fill" },
    { id: "certs", label: "Certifications", icon: "bi bi-award-fill" },
    { id: "tools", label: "Tools", icon: "bi bi-tools" },
  ];

  const showSection = (id) => activeTab === "all" || activeTab === id;

  return (
    <div className={`res-page${dark ? " res-page--dark" : ""}`}>

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
              HTML Learning{" "}
              <span className="res-hero__title-accent">Resources</span>
            </h1>
            <p className="res-hero__desc">
              Everything you need to master HTML — curated notes, video
              tutorials, learning roadmaps, certifications, and developer tools,
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
                <i className="bi bi-file-earmark-pdf-fill" />2 PDF Guides
              </span>
              <span className="res-hero__stat-sep" aria-hidden="true" />
              <span className="res-hero__stat">
                <i className="bi bi-play-btn-fill" />2 Video Courses
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
          {/* ══════════ NOTES & VIDEOS ══════════ */}
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
                color="#E34F26"
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
                color="#F16529"
                description="Earn recognised credentials to showcase your HTML and web development skills."
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
                color="#C73E1D"
                description="Must-have tools and references that every HTML developer should have bookmarked."
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
                  <i className="bi bi-terminal-fill" />
                </div>
                <div className="res-cta__text">
                  <h3>Ready to practise?</h3>
                  <p>
                    Open our live HTML/CSS/JS playground and put your knowledge
                    to the test instantly.
                  </p>
                </div>
                <div className="res-cta__actions">
                  <Link
                    to="/html-course/compiler"
                    className="res-cta__btn res-cta__btn--primary"
                  >
                    <i className="bi bi-terminal-fill" />
                    Open Playground
                  </Link>
                  <Link to="/html-course/reference" className="res-cta__btn res-cta__btn--ghost">
                    <i className="bi bi-code-slash" />
                    HTML Reference
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

      {/* Inline CSS */}
      <style>{`
        /* ── Tokens ── */
        .res-page {
          --rp: #e34f26;
          --rp-dk: #c73e1d;
          --rp-sc: #f16529;
          --rp-bg: #fff8f5;
          --rp-bg-alt: #ffffff;
          --rp-card: #ffffff;
          --rp-border: rgba(227,79,38,0.12);
          --rp-border-soft: rgba(0,0,0,0.07);
          --rp-text: #1a1a2e;
          --rp-text-muted: #5a5a72;
          --rp-text-faint: #9898b0;
          --rp-grad: linear-gradient(135deg,#e34f26,#f16529);
          --rp-grad-dk: linear-gradient(135deg,#c73e1d,#e34f26);
          --rp-grad-soft: linear-gradient(135deg,rgba(227,79,38,0.08),rgba(241,101,41,0.04));
          --rp-shadow-xs: 0 1px 4px rgba(0,0,0,0.06);
          --rp-shadow-sm: 0 2px 10px rgba(0,0,0,0.08);
          --rp-shadow-md: 0 6px 24px rgba(0,0,0,0.1);
          --rp-shadow-brand: 0 8px 28px rgba(227,79,38,0.18);
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
          --rp-bg:#0d0d0d;
          --rp-bg-alt:#111111;
          --rp-card:#1a1a1a;
          --rp-border:rgba(227,79,38,0.18);
          --rp-border-soft:rgba(255,255,255,0.07);
          --rp-text:#f0f0f0;
          --rp-text-muted:#a0a0b8;
          --rp-text-faint:#606072;
          --rp-shadow-xs:0 1px 4px rgba(0,0,0,0.28);
          --rp-shadow-sm:0 2px 10px rgba(0,0,0,0.35);
          --rp-shadow-md:0 6px 24px rgba(0,0,0,0.48);
          --rp-shadow-brand:0 8px 28px rgba(227,79,38,0.22);
          --rp-grad-soft:linear-gradient(135deg,rgba(227,79,38,0.13),rgba(241,101,41,0.06));
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
          background:radial-gradient(circle,rgba(227,79,38,0.15) 0%,transparent 70%);
          animation:resBlob 11s ease-in-out infinite;
        }
        .res-hero__blob--b {
          width:360px;height:360px;bottom:-100px;right:-80px;
          background:radial-gradient(circle,rgba(241,101,41,0.12) 0%,transparent 70%);
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
          color:var(--rp);font-size:1rem;pointer-events:none;z-index:1;
        }
        .res-search__input {
          width:100%;padding:0.9rem 3rem 0.9rem 3rem;
          border:2px solid var(--rp-border);border-radius:var(--rp-r-full);
          background:var(--rp-card);color:var(--rp-text);
          font-family:inherit;font-size:0.97rem;
          box-shadow:var(--rp-shadow-sm);outline:none;appearance:none;
          transition:border-color var(--rp-fast) var(--rp-ease), box-shadow var(--rp-fast) var(--rp-ease), background var(--rp-mid) var(--rp-ease);
        }
        .res-search__input:focus {
          border-color:var(--rp);
          box-shadow:0 0 0 4px rgba(227,79,38,0.12), var(--rp-shadow-md);
        }
        .res-search__input::placeholder { color:var(--rp-text-faint); }
        .res-search__input::-webkit-search-cancel-button { display:none; }
        .res-search__clear {
          position:absolute;top:50%;right:1rem;transform:translateY(-50%);
          background:none;border:none;cursor:pointer;color:var(--rp-text-faint);
          font-size:0.85rem;padding:0.25rem;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          transition:color var(--rp-fast) var(--rp-ease), background var(--rp-fast) var(--rp-ease);
        }
        .res-search__clear:hover { color:var(--rp); background:var(--rp-grad-soft); }

        /* Hero stats */
        .res-hero__stats {
          display:flex;align-items:center;flex-wrap:wrap;justify-content:center;gap:0;margin-top:0.2rem;
        }
        .res-hero__stat {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.82rem;font-weight:600;color:var(--rp-text-muted);padding:0 1.1rem;
        }
        .res-hero__stat i { color:var(--rp); }
        .res-hero__stat-sep { width:1px;height:18px;background:var(--rp-border);flex-shrink:0; }

        /* ══════ TABS ══════ */
        .res-tabs-bar {
          padding:1.25rem 2rem;
          background:var(--rp-bg-alt);
          border-bottom:1px solid var(--rp-border-soft);
          position:sticky;top:68px;z-index:90;
          backdrop-filter:blur(10px);
          transition:background var(--rp-mid) var(--rp-ease);
        }
        .res-page--dark .res-tabs-bar { background:rgba(13,13,13,0.92); }
        .res-tabs {
          display:flex;flex-wrap:wrap;gap:0.5rem;
        }
        .res-tab {
          display:inline-flex;align-items:center;gap:0.45rem;
          padding:0.5rem 1.1rem;
          border-radius:var(--rp-r-full);
          border:1.5px solid var(--rp-border);
          background:var(--rp-card);
          color:var(--rp-text-muted);
          font-family:inherit;font-size:0.82rem;font-weight:600;
          cursor:pointer;white-space:nowrap;
          transition:all var(--rp-fast) var(--rp-ease);
        }
        .res-tab i { font-size:0.88rem; }
        .res-tab:hover { color:var(--rp);border-color:var(--rp);background:var(--rp-grad-soft); }
        .res-tab--active {
          background:var(--rp-grad);border-color:transparent;color:#fff;
          box-shadow:0 3px 12px rgba(227,79,38,0.3);
        }
        .res-tab--active:hover { background:var(--rp-grad-dk);color:#fff; }

        /* Search summary */
        .res-search-info {
          padding:0.85rem 2rem;
          background:var(--rp-bg-alt);
          border-bottom:1px solid var(--rp-border-soft);
        }
        .res-search-info .res-container {
          display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;
        }
        .res-search-info p {
          font-size:0.88rem;color:var(--rp-text-muted);
          display:flex;align-items:center;gap:0.45rem;margin:0;
        }
        .res-search-info p i { color:var(--rp); }
        .res-search-info p em { color:var(--rp);font-style:normal;font-weight:600; }
        .res-search-info__clear {
          display:inline-flex;align-items:center;gap:0.4rem;
          padding:0.35rem 0.85rem;border-radius:var(--rp-r-full);
          border:1.5px solid var(--rp-border);background:none;
          color:var(--rp-text-muted);font-family:inherit;font-size:0.78rem;font-weight:600;cursor:pointer;
          transition:all var(--rp-fast) var(--rp-ease);
        }
        .res-search-info__clear:hover { border-color:var(--rp);color:var(--rp);background:var(--rp-grad-soft); }

        /* ══════ SECTION ══════ */
        .res-section {
          padding:3.5rem 0 1rem;
          scroll-margin-top:140px;
        }
        .res-section-header {
          display:flex;align-items:flex-start;gap:1.25rem;margin-bottom:2rem;
        }
        .res-section-icon {
          width:52px;height:52px;border-radius:var(--rp-r-md);
          background:var(--rp-grad-soft);
          border:1.5px solid var(--rp-border);
          display:flex;align-items:center;justify-content:center;
          font-size:1.5rem;color:var(--sec-color, var(--rp));flex-shrink:0;
          box-shadow:0 4px 14px rgba(227,79,38,0.12);
          transition:transform var(--rp-mid) var(--rp-bounce);
        }
        .res-section-header:hover .res-section-icon { transform:scale(1.08) rotate(-5deg); }
        .res-section-title {
          font-size:clamp(1.3rem,2.8vw,1.7rem);font-weight:800;
          color:var(--rp-text);letter-spacing:-0.025em;margin:0 0 0.35rem;
        }
        .res-section-desc {
          font-size:0.92rem;color:var(--rp-text-muted);line-height:1.65;margin:0;
        }

        /* ══════ GRIDS ══════ */
        .res-grid { display:grid;gap:1.5rem; }
        .res-grid--2 { grid-template-columns:repeat(auto-fill,minmax(340px,1fr)); }
        .res-grid--3 { grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); }
        .res-grid--4 { grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); }

        /* ══════ RESOURCE CARD ══════ */
        .res-card {
          position:relative;
          background:var(--rp-card);
          border:1px solid var(--rp-border);
          border-radius:var(--rp-r-lg);
          overflow:hidden;
          display:flex;flex-direction:column;
          text-decoration:none;color:var(--rp-text);
          box-shadow:var(--rp-shadow-xs);
          animation:resCardIn 0.5s var(--rp-bounce) both;
          transition:transform var(--rp-mid) var(--rp-bounce), box-shadow var(--rp-mid) var(--rp-ease), border-color var(--rp-mid) var(--rp-ease);
        }
        @keyframes resCardIn {
          from{opacity:0;transform:translateY(16px) scale(0.97);}
          to{opacity:1;transform:translateY(0) scale(1);}
        }
        .res-card:hover { transform:translateY(-8px);box-shadow:var(--rp-shadow-brand);border-color:var(--rp); }
        .res-card__accent {
          position:absolute;top:0;left:0;right:0;height:3px;
          transition:height var(--rp-fast) var(--rp-ease);
        }
        .res-card:hover .res-card__accent { height:4px; }
        .res-card__head {
          display:flex;align-items:center;justify-content:space-between;
          padding:1.4rem 1.4rem 0;gap:0.75rem;
        }
        .res-card__icon-wrap {
          width:46px;height:46px;border-radius:var(--rp-r-md);
          background:rgba(227,79,38,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:1.35rem;color:var(--ic-color,#e34f26);flex-shrink:0;
          transition:background var(--rp-mid) var(--rp-ease), color var(--rp-mid) var(--rp-ease), transform var(--rp-mid) var(--rp-bounce);
        }
        .res-card:hover .res-card__icon-wrap { background:var(--ic-color,#e34f26);color:#fff;transform:scale(1.1) rotate(-6deg); }
        .res-card__meta { display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap; }
        .res-card__badge {
          display:inline-flex;align-items:center;
          padding:0.22rem 0.7rem;border-radius:var(--rp-r-full);
          font-size:0.7rem;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;
        }
        .res-card__size {
          display:inline-flex;align-items:center;gap:0.3rem;
          font-size:0.72rem;color:var(--rp-text-faint);font-weight:500;
        }
        .res-card__size i { font-size:0.72rem; }
        .res-card__body { padding:1rem 1.4rem;flex:1; }
        .res-card__title {
          font-size:1.05rem;font-weight:700;color:var(--rp-text);
          margin:0 0 0.5rem;line-height:1.35;letter-spacing:-0.01em;
        }
        .res-card__desc {
          font-size:0.875rem;color:var(--rp-text-muted);line-height:1.65;margin:0;
        }
        .res-card__cta {
          padding:1rem 1.4rem 1.4rem;
          border-top:1px solid var(--rp-border-soft);
          margin-top:auto;
        }
        .res-card__cta-btn {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.85rem;font-weight:700;color:var(--cta-color,#e34f26);
          transition:gap var(--rp-fast) var(--rp-ease);
        }
        .res-card:hover .res-card__cta-btn { gap:0.65rem; }
        .res-card__cta-btn i { font-size:0.82rem; }

        /* ══════ ROADMAP CARDS ══════ */
        .res-roadmap-card {
          background:var(--rp-card);border:1px solid var(--rp-border);
          border-radius:var(--rp-r-lg);padding:1.75rem;
          display:flex;flex-direction:column;gap:0.75rem;
          text-decoration:none;color:var(--rp-text);
          box-shadow:var(--rp-shadow-xs);
          position:relative;overflow:hidden;
          animation:resCardIn 0.5s var(--rp-bounce) both;
          transition:transform var(--rp-mid) var(--rp-bounce), box-shadow var(--rp-mid) var(--rp-ease), border-color var(--rp-mid) var(--rp-ease);
        }
        .res-roadmap-card::before {
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:var(--rm-color,var(--rp));
          transform:scaleX(0);transform-origin:left;
          transition:transform var(--rp-mid) var(--rp-ease);
        }
        .res-roadmap-card:hover { transform:translateY(-8px);box-shadow:var(--rp-shadow-brand);border-color:var(--rm-color,var(--rp)); }
        .res-roadmap-card:hover::before { transform:scaleX(1); }
        .res-roadmap-card__icon {
          width:50px;height:50px;border-radius:var(--rp-r-md);
          background:rgba(227,79,38,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:1.4rem;color:var(--rm-color,var(--rp));
          transition:background var(--rp-mid) var(--rp-ease), color var(--rp-mid) var(--rp-ease), transform var(--rp-mid) var(--rp-bounce);
        }
        .res-roadmap-card:hover .res-roadmap-card__icon { background:var(--rm-color,var(--rp));color:#fff;transform:rotate(-8deg) scale(1.1); }
        .res-roadmap-card__tag {
          display:inline-flex;align-items:center;
          padding:0.2rem 0.65rem;border-radius:var(--rp-r-full);
          background:rgba(227,79,38,0.1);color:var(--rm-color,var(--rp));
          font-size:0.7rem;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;
          align-self:flex-start;
        }
        .res-roadmap-card__title { font-size:1.1rem;font-weight:800;color:var(--rp-text);margin:0;letter-spacing:-0.02em; }
        .res-roadmap-card__desc { font-size:0.875rem;color:var(--rp-text-muted);line-height:1.65;margin:0;flex:1; }
        .res-roadmap-card__link {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.85rem;font-weight:700;color:var(--rm-color,var(--rp));margin-top:auto;
          transition:gap var(--rp-fast) var(--rp-ease);
        }
        .res-roadmap-card:hover .res-roadmap-card__link { gap:0.65rem; }
        .res-roadmap-card__link i { font-size:0.82rem; }

        /* ══════ CERT CARDS ══════ */
        .res-cert-list { display:flex;flex-direction:column;gap:1rem; }
        .res-cert-card {
          display:flex;align-items:center;gap:1.25rem;
          background:var(--rp-card);border:1px solid var(--rp-border);
          border-radius:var(--rp-r-lg);padding:1.4rem 1.6rem;
          text-decoration:none;color:var(--rp-text);
          box-shadow:var(--rp-shadow-xs);
          animation:resCardIn 0.5s var(--rp-bounce) both;
          transition:transform var(--rp-mid) var(--rp-bounce), box-shadow var(--rp-mid) var(--rp-ease), border-color var(--rp-mid) var(--rp-ease);
        }
        .res-cert-card:hover { transform:translateX(6px);box-shadow:var(--rp-shadow-brand);border-color:var(--rp); }
        .res-cert-card__icon {
          width:50px;height:50px;border-radius:var(--rp-r-md);
          background:var(--rp-grad-soft);border:1.5px solid var(--rp-border);
          display:flex;align-items:center;justify-content:center;
          font-size:1.4rem;color:var(--rp);flex-shrink:0;
          transition:background var(--rp-mid) var(--rp-ease), color var(--rp-mid) var(--rp-ease);
        }
        .res-cert-card:hover .res-cert-card__icon { background:var(--rp-grad);color:#fff;border-color:transparent; }
        .res-cert-card__body { flex:1;min-width:0; }
        .res-cert-card__head { display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.35rem; }
        .res-cert-card__title { font-size:0.97rem;font-weight:700;color:var(--rp-text);margin:0;letter-spacing:-0.01em; }
        .res-cert-card__tags { display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;flex-shrink:0; }
        .res-cert-card__provider {
          display:inline-flex;align-items:center;
          padding:0.18rem 0.6rem;border-radius:var(--rp-r-full);
          background:rgba(0,0,0,0.06);color:var(--rp-text-muted);
          font-size:0.7rem;font-weight:700;
        }
        .res-page--dark .res-cert-card__provider { background:rgba(255,255,255,0.08); }
        .res-cert-card__free {
          display:inline-flex;align-items:center;gap:0.3rem;
          padding:0.18rem 0.6rem;border-radius:var(--rp-r-full);
          background:rgba(239,68,68,0.1);color:#ef4444;
          font-size:0.7rem;font-weight:700;
        }
        .res-cert-card__free--yes { background:rgba(34,197,94,0.12);color:#22c55e; }
        .res-cert-card__free i { font-size:0.72rem; }
        .res-cert-card__desc { font-size:0.85rem;color:var(--rp-text-muted);line-height:1.6;margin:0; }
        .res-cert-card__arrow {
          color:var(--rp-text-faint);font-size:1.1rem;flex-shrink:0;
          transition:color var(--rp-fast) var(--rp-ease), transform var(--rp-fast) var(--rp-ease);
        }
        .res-cert-card:hover .res-cert-card__arrow { color:var(--rp);transform:translate(3px,-3px); }

        /* ══════ TOOL CARDS ══════ */
        .res-tool-card {
          background:var(--rp-card);border:1px solid var(--rp-border);
          border-radius:var(--rp-r-lg);padding:1.6rem;
          display:flex;flex-direction:column;gap:0.85rem;
          text-decoration:none;color:var(--rp-text);
          box-shadow:var(--rp-shadow-xs);
          animation:resCardIn 0.5s var(--rp-bounce) both;
          transition:transform var(--rp-mid) var(--rp-bounce), box-shadow var(--rp-mid) var(--rp-ease), border-color var(--rp-mid) var(--rp-ease);
          position:relative;overflow:hidden;
        }
        .res-tool-card::after {
          content:'';position:absolute;inset:0;
          background:linear-gradient(135deg,rgba(227,79,38,0.06),transparent);
          opacity:0;transition:opacity var(--rp-mid) var(--rp-ease);pointer-events:none;
        }
        .res-tool-card:hover { transform:translateY(-7px);box-shadow:var(--rp-shadow-brand);border-color:var(--tool-color,var(--rp)); }
        .res-tool-card:hover::after { opacity:1; }
        .res-tool-card__icon {
          width:48px;height:48px;border-radius:var(--rp-r-md);
          background:rgba(227,79,38,0.08);
          display:flex;align-items:center;justify-content:center;
          font-size:1.4rem;color:var(--tool-color,var(--rp));
          transition:background var(--rp-mid) var(--rp-ease), color var(--rp-mid) var(--rp-ease), transform var(--rp-mid) var(--rp-bounce);
          position:relative;z-index:1;
        }
        .res-tool-card:hover .res-tool-card__icon { background:var(--tool-color,var(--rp));color:#fff;transform:scale(1.1) rotate(-6deg); }
        .res-tool-card__title { font-size:1rem;font-weight:800;color:var(--rp-text);margin:0;position:relative;z-index:1; }
        .res-tool-card__desc { font-size:0.855rem;color:var(--rp-text-muted);line-height:1.65;margin:0;flex:1;position:relative;z-index:1; }
        .res-tool-card__link {
          display:inline-flex;align-items:center;gap:0.4rem;
          font-size:0.82rem;font-weight:700;color:var(--tool-color,var(--rp));
          position:relative;z-index:1;margin-top:auto;
          transition:gap var(--rp-fast) var(--rp-ease);
        }
        .res-tool-card:hover .res-tool-card__link { gap:0.65rem; }
        .res-tool-card__link i { font-size:0.8rem; }

        /* ══════ EMPTY STATE ══════ */
        .res-empty {
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          gap:1rem;padding:5rem 2rem;text-align:center;color:var(--rp-text-muted);
        }
        .res-empty__icon { font-size:3.5rem;color:var(--rp-border);display:block; }
        .res-empty h3 { font-size:1.3rem;font-weight:800;color:var(--rp-text);margin:0; }
        .res-empty p { font-size:0.95rem;margin:0;line-height:1.65; }
        .res-empty p strong { color:var(--rp); }
        .res-empty__btn {
          display:inline-flex;align-items:center;gap:0.5rem;
          padding:0.65rem 1.5rem;background:var(--rp-grad);border:none;
          border-radius:var(--rp-r-full);color:#fff;
          font-family:inherit;font-size:0.875rem;font-weight:700;cursor:pointer;
          box-shadow:0 4px 14px rgba(227,79,38,0.28);
          transition:all var(--rp-fast) var(--rp-ease);
        }
        .res-empty__btn:hover { background:var(--rp-grad-dk);transform:translateY(-2px);box-shadow:0 6px 18px rgba(227,79,38,0.35); }

        /* ══════ CTA ══════ */
        .res-cta {
          margin-top:3rem;
        }
        .res-cta__inner {
          display:flex;align-items:center;gap:1.75rem;
          padding:2rem 2.5rem;
          background:var(--rp-card);border:1px solid var(--rp-border);
          border-radius:var(--rp-r-xl);box-shadow:var(--rp-shadow-sm);
          position:relative;overflow:hidden;
        }
        .res-cta__inner::before {
          content:'';position:absolute;inset:0;
          background:var(--rp-grad-soft);pointer-events:none;
        }
        .res-cta__inner::after {
          content:'';position:absolute;top:0;left:0;right:0;height:3px;
          background:var(--rp-grad);
        }
        .res-cta__icon {
          position:relative;z-index:1;
          width:56px;height:56px;border-radius:var(--rp-r-md);
          background:var(--rp-grad);
          display:flex;align-items:center;justify-content:center;
          font-size:1.5rem;color:#fff;flex-shrink:0;
          box-shadow:0 4px 14px rgba(227,79,38,0.3);
        }
        .res-cta__text { position:relative;z-index:1;flex:1;min-width:0; }
        .res-cta__text h3 { font-size:1.1rem;font-weight:800;color:var(--rp-text);margin:0 0 0.3rem; }
        .res-cta__text p { font-size:0.88rem;color:var(--rp-text-muted);margin:0;line-height:1.6; }
        .res-cta__actions { position:relative;z-index:1;display:flex;gap:0.75rem;flex-shrink:0; }
        .res-cta__btn {
          display:inline-flex;align-items:center;gap:0.45rem;
          padding:0.65rem 1.3rem;border-radius:var(--rp-r-full);
          font-family:inherit;font-size:0.875rem;font-weight:700;cursor:pointer;
          text-decoration:none;border:none;white-space:nowrap;
          transition:all var(--rp-fast) var(--rp-ease);
        }
        .res-cta__btn i { font-size:0.9rem; }
        .res-cta__btn--primary { background:var(--rp-grad);color:#fff;box-shadow:0 4px 14px rgba(227,79,38,0.3); }
        .res-cta__btn--primary:hover { background:var(--rp-grad-dk);transform:translateY(-2px);box-shadow:0 6px 18px rgba(227,79,38,0.38); }
        .res-cta__btn--ghost { background:none;border:1.5px solid var(--rp-border);color:var(--rp-text-muted); }
        .res-cta__btn--ghost:hover { border-color:var(--rp);color:var(--rp);background:var(--rp-grad-soft);transform:translateY(-2px); }

        /* ══════ BACK TO TOP ══════ */
        .res-back-top {
          position:fixed;bottom:1.5rem;right:1.5rem;
          width:46px;height:46px;border-radius:50%;border:none;
          background:var(--rp-grad);color:#fff;font-size:1.15rem;
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;z-index:900;
          box-shadow:0 4px 16px rgba(227,79,38,0.3);
          opacity:0;pointer-events:none;transform:translateY(12px) scale(0.85);
          transition:opacity var(--rp-fast) var(--rp-ease), transform var(--rp-mid) var(--rp-bounce), box-shadow var(--rp-fast) var(--rp-ease);
        }
        .res-back-top--visible { opacity:1;pointer-events:auto;transform:translateY(0) scale(1); }
        .res-back-top:hover { background:var(--rp-grad-dk);transform:translateY(-4px) scale(1.08);box-shadow:0 8px 22px rgba(227,79,38,0.4); }

        /* ══════ RESPONSIVE ══════ */
        @media (max-width:900px) {
          .res-grid--2 { grid-template-columns:1fr; }
          .res-grid--3 { grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); }
          .res-grid--4 { grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); }
          .res-cta__inner { flex-direction:column;padding:1.75rem;text-align:center; }
          .res-cta__actions { flex-direction:column;width:100%; }
          .res-cta__btn { width:100%;justify-content:center; }
        }
        @media (max-width:640px) {
          .res-hero { padding:5rem 1.25rem 3.5rem; }
          .res-container { padding:0 1.25rem; }
          .res-tabs-bar { padding:1rem 1.25rem;top:60px; }
          .res-tabs { gap:0.35rem; }
          .res-tab { padding:0.4rem 0.85rem;font-size:0.78rem; }
          .res-tab__label { display:none; }
          .res-section { padding:2.5rem 0 0.5rem; }
          .res-section-header { flex-direction:column;gap:0.85rem; }
          .res-grid--3, .res-grid--4 { grid-template-columns:1fr; }
          .res-cert-card { flex-direction:column; }
          .res-cert-card__arrow { display:none; }
          .res-hero__stats { gap:0.1rem; }
          .res-hero__stat { font-size:0.76rem;padding:0 0.6rem; }
          .res-hero__stat-sep { height:16px; }
        }
        @media (prefers-reduced-motion:reduce) {
          *, *::before, *::after { animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important; }
        }
      `}</style>
    </div>
  );
}
