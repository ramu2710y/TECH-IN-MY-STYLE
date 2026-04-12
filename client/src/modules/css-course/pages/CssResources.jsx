import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CssNavbar, { useDarkMode } from "../components/CssNavbar";
import CssFooter from "../components/CssFooter";

/* ─── Data ──────────────────────────────────────────────────────── */
const RESOURCE_SECTIONS = [
  {
    id: "notes",
    icon: "bi bi-journal-richtext",
    title: "Notes & PDFs",
    color: "#264de4",
    description:
      "Download comprehensive CSS notes and reference guides crafted by our team.",
    items: [
      {
        title: "CSS Short Notes",
        description:
          "Quick-reference cheat sheet covering all essential CSS properties, selectors, and the box model in a concise format.",
        link: "https://drive.google.com/file/d/1VEWR7VmwrErEVGezaM5_UgWqVTVwSsW2/view?usp=drive_link",
        label: "Download PDF",
        icon: "bi bi-file-earmark-pdf-fill",
        badge: "PDF",
        badgeColor: "#264de4",
        size: "~2 MB",
      },
      {
        title: "CSS Full Notes",
        description:
          "Complete in-depth CSS reference notes by TECH IN MY STYLE — covers everything from basics to advanced animations and layouts.",
        link: "https://drive.google.com/file/d/1VKuRYpMtii212oKUH2EoorQvPH04sFTR/view?usp=drive_link",
        label: "Download PDF",
        icon: "bi bi-file-earmark-pdf-fill",
        badge: "PDF",
        badgeColor: "#264de4",
        size: "~8 MB",
      },
    ],
  },
  {
    id: "videos",
    icon: "bi bi-play-btn-fill",
    title: "Video Tutorials",
    color: "#2965f1",
    description:
      "Handpicked YouTube tutorials from top instructors to accelerate your CSS learning.",
    items: [
      {
        title: "CSS Basics — Dave Gray",
        description:
          "Fundamental concepts of CSS for absolute beginners — selectors, box model, colors, and responsive design.",
        link: "https://youtu.be/n4R2E7O-Ngo?si=XmkKqiBoQCYzp2dL",
        label: "Watch on YouTube",
        icon: "bi bi-youtube",
        badge: "YouTube",
        badgeColor: "#ff0000",
        size: "~5 hrs",
      },
      {
        title: "CSS Full Course — freeCodeCamp",
        description:
          "Comprehensive CSS course from freeCodeCamp covering Flexbox, Grid, animations, and modern CSS techniques.",
        link: "https://youtu.be/OXGznpKZ_sA?si=V1MkXq9SH2JOtAGP",
        label: "Watch on YouTube",
        icon: "bi bi-youtube",
        badge: "YouTube",
        badgeColor: "#ff0000",
        size: "~11 hrs",
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
    color: "#264de4",
    tag: "Recommended",
  },
  {
    title: "CSS Learning Path",
    description:
      "Deep dive into CSS — from fundamentals to advanced topics like Grid, animations, and design systems.",
    link: "https://roadmap.sh/frontend",
    icon: "bi bi-palette-fill",
    color: "#2965f1",
    tag: "Popular",
  },
  {
    title: "Full Stack Development",
    description:
      "Combine frontend and backend skills to build complete, production-ready web applications.",
    link: "https://roadmap.sh/full-stack",
    icon: "bi bi-stack",
    color: "#1b35b5",
    tag: "Advanced",
  },
];

const CERTIFICATIONS = [
  {
    title: "freeCodeCamp — Responsive Web Design",
    description:
      "Earn a recognized certification covering HTML, CSS, Flexbox, Grid, and responsive design fundamentals.",
    link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    icon: "bi bi-award-fill",
    provider: "freeCodeCamp",
    free: true,
  },
  {
    title: "W3Schools CSS Certificate",
    description:
      "Prove your CSS knowledge with a professional certificate from the world's largest web developer learning site.",
    link: "https://www.w3schools.com/cert/cert_css.asp",
    icon: "bi bi-patch-check-fill",
    provider: "W3Schools",
    free: false,
  },
  {
    title: "Coursera — HTML, CSS, and JavaScript",
    description:
      "University-level certification program from Johns Hopkins covering CSS alongside HTML and JavaScript.",
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
      "The most popular code editor with powerful CSS extensions, IntelliSense, and live server support.",
    link: "https://code.visualstudio.com/",
    icon: "bi bi-code-square",
    color: "#264de4",
  },
  {
    title: "CSS Tricks",
    description:
      "An essential CSS reference site with guides, snippets, almanac, and community articles.",
    link: "https://css-tricks.com/",
    icon: "bi bi-stars",
    color: "#2965f1",
  },
  {
    title: "MDN CSS Reference",
    description:
      "The definitive CSS reference by Mozilla. An essential bookmark for every web developer.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: "bi bi-book-fill",
    color: "#1b35b5",
  },
  {
    title: "Can I Use",
    description:
      "Check CSS property browser compatibility before using it in your projects.",
    link: "https://caniuse.com/",
    icon: "bi bi-browser-chrome",
    color: "#42a1d0",
  },
  {
    title: "CSS Gradient",
    description:
      "Visual tool for generating beautiful CSS gradients — linear, radial, and conic.",
    link: "https://cssgradient.io/",
    icon: "bi bi-palette2",
    color: "#264de4",
  },
  {
    title: "Flexbox Froggy",
    description:
      "An interactive game that teaches CSS Flexbox by guiding frogs to lily pads.",
    link: "https://flexboxfroggy.com/",
    icon: "bi bi-joystick",
    color: "#2965f1",
  },
  {
    title: "Grid Garden",
    description:
      "Learn CSS Grid through an interactive gardening game — plant vegetables using grid properties.",
    link: "https://cssgridgarden.com/",
    icon: "bi bi-grid-3x3-gap-fill",
    color: "#1b35b5",
  },
  {
    title: "CSS Validator",
    description:
      "Validate your CSS stylesheets for errors, warnings, and W3C standards compliance.",
    link: "https://jigsaw.w3.org/css-validator/",
    icon: "bi bi-shield-check-fill",
    color: "#42a1d0",
  },
];

const CHEATSHEETS = [
  {
    title: "CSS Selectors Cheat Sheet",
    description: "All CSS selectors with examples: type, class, ID, attribute, pseudo-class, and pseudo-element selectors.",
    link: "https://www.w3schools.com/cssref/css_selectors.php",
    icon: "bi bi-cursor-fill",
    color: "#264de4",
  },
  {
    title: "Flexbox Cheat Sheet",
    description: "Complete reference for all Flexbox properties — container and item properties with visual examples.",
    link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
    icon: "bi bi-layout-wtf",
    color: "#2965f1",
  },
  {
    title: "CSS Grid Cheat Sheet",
    description: "Comprehensive guide to CSS Grid — template columns, rows, areas, auto-placement, and alignment.",
    link: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    icon: "bi bi-grid-3x3-gap-fill",
    color: "#1b35b5",
  },
  {
    title: "CSS Animations Cheat Sheet",
    description: "All animation and transition properties with keyframe syntax, timing functions, and examples.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations",
    icon: "bi bi-play-circle-fill",
    color: "#42a1d0",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────── */
function SectionHeader({ icon, title, color, description }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", marginBottom: "2rem" }}>
      <div style={{
        width: 52, height: 52,
        borderRadius: "14px",
        background: `${color}15`,
        border: `1.5px solid ${color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.5rem", color, flexShrink: 0,
        boxShadow: `0 4px 14px ${color}20`,
        transition: "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        <i className={icon} />
      </div>
      <div>
        <h2 style={{
          fontSize: "clamp(1.3rem, 2.8vw, 1.7rem)",
          fontWeight: 800,
          color: "var(--color-text)",
          letterSpacing: "-0.025em",
          margin: "0 0 0.35rem",
        }}>
          {title}
        </h2>
        <p style={{ fontSize: "0.92rem", color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0 }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function ResourceCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="res-card"
      style={{
        position: "relative",
        background: "var(--color-card)",
        border: `1px solid ${hovered ? item.badgeColor : "var(--color-border)"}`,
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "var(--color-text)",
        boxShadow: hovered ? `0 12px 40px ${item.badgeColor}22` : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${item.title} — ${item.label}`}
    >
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: hovered ? "4px" : "3px",
        background: item.badgeColor,
        transition: "height 0.2s ease",
      }} />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.4rem 1.4rem 0", gap: "0.75rem" }}>
        <div style={{
          width: 46, height: 46,
          borderRadius: "12px",
          background: `${item.badgeColor}15`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.35rem", color: item.badgeColor, flexShrink: 0,
          transition: "background 0.3s ease, color 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hovered ? "scale(1.1) rotate(-6deg)" : "scale(1)",
          ...(hovered ? { background: item.badgeColor, color: "#fff" } : {}),
        }}>
          <i className={item.icon} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          <span style={{
            padding: "0.22rem 0.7rem",
            borderRadius: "9999px",
            fontSize: "0.7rem", fontWeight: 800,
            letterSpacing: "0.05em", textTransform: "uppercase",
            background: `${item.badgeColor}18`,
            color: item.badgeColor,
            border: `1px solid ${item.badgeColor}35`,
          }}>
            {item.badge}
          </span>
          {item.size && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.72rem", color: "var(--color-text-faint)", fontWeight: 500 }}>
              <i className="bi bi-clock" style={{ fontSize: "0.7rem" }} />
              {item.size}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "1rem 1.4rem", flex: 1 }}>
        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--color-text)", margin: "0 0 0.5rem", letterSpacing: "-0.01em" }}>
          {item.title}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0 }}>
          {item.description}
        </p>
      </div>

      {/* CTA */}
      <div style={{ padding: "1rem 1.4rem 1.4rem", borderTop: "1px solid var(--color-border-soft)", marginTop: "auto" }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: hovered ? "0.65rem" : "0.4rem",
          fontSize: "0.85rem", fontWeight: 700,
          color: item.badgeColor,
          transition: "gap 0.18s ease",
        }}>
          {item.label}
          <i className="bi bi-arrow-up-right" style={{ fontSize: "0.82rem" }} />
        </span>
      </div>
    </a>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function Resources() {
  const { dark, toggle } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showBackTop, setShowBackTop] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const searchRef = useRef(null);

  const lower = searchTerm.trim().toLowerCase();

  /* Scroll handler */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Filter logic */
  function matchSearch(text) {
    return text.toLowerCase().includes(lower);
  }

  const filteredSections = RESOURCE_SECTIONS.map((sec) => ({
    ...sec,
    items: sec.items.filter(
      (item) => matchSearch(item.title) || matchSearch(item.description)
    ),
  })).filter((sec) => sec.items.length > 0);

  const filteredRoadmaps = ROADMAPS.filter(
    (r) => matchSearch(r.title) || matchSearch(r.description)
  );
  const filteredCerts = CERTIFICATIONS.filter(
    (c) => matchSearch(c.title) || matchSearch(c.description)
  );
  const filteredTools = TOOLS.filter(
    (t) => matchSearch(t.title) || matchSearch(t.description)
  );
  const filteredCheatsheets = CHEATSHEETS.filter(
    (c) => matchSearch(c.title) || matchSearch(c.description)
  );

  const noResults =
    lower &&
    filteredSections.length === 0 &&
    filteredRoadmaps.length === 0 &&
    filteredCerts.length === 0 &&
    filteredTools.length === 0 &&
    filteredCheatsheets.length === 0;

  const tabs = [
    { id: "all", label: "All Resources", icon: "bi bi-grid-fill" },
    { id: "notes", label: "Notes & PDFs", icon: "bi bi-journal-richtext" },
    { id: "videos", label: "Videos", icon: "bi bi-play-btn-fill" },
    { id: "roadmaps", label: "Roadmaps", icon: "bi bi-signpost-2-fill" },
    { id: "certs", label: "Certifications", icon: "bi bi-award-fill" },
    { id: "cheatsheets", label: "Cheat Sheets", icon: "bi bi-file-text-fill" },
    { id: "tools", label: "Tools", icon: "bi bi-tools" },
  ];

  const showSection = (id) => activeTab === "all" || activeTab === id;

  const P = "#264de4";

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      background: "var(--color-bg)",
      color: "var(--color-text)",
      minHeight: "100vh",
      overflowX: "hidden",
      transition: "background 0.3s ease, color 0.3s ease",
    }}>


      <main id="main-content">
        {/* ══════════ HERO ══════════ */}
        <section style={{
          position: "relative",
          background: "var(--color-bg)",
          padding: "6.5rem 2rem 4.5rem",
          overflow: "hidden",
          borderBottom: "1px solid var(--color-border-soft)",
          transition: "background 0.3s ease",
        }}>
          {/* Decorative blobs */}
          {[
            { w: 450, h: 450, top: -150, left: -100, c: "rgba(38,77,228,0.15)", dur: 11 },
            { w: 360, h: 360, bottom: -100, right: -80, c: "rgba(41,101,241,0.12)", dur: 14, rev: true },
          ].map((b, i) => (
            <div key={i} style={{
              position: "absolute",
              width: b.w, height: b.h,
              top: b.top, left: b.left, bottom: b.bottom, right: b.right,
              borderRadius: "50%",
              filter: "blur(70px)",
              background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
              animation: `resBlob ${b.dur}s ease-in-out infinite${b.rev ? " reverse" : ""}`,
              pointerEvents: "none", zIndex: 0,
            }} />
          ))}

          <style>{`
            @keyframes resBlob {
              0%,100%{transform:translate(0,0) scale(1);}
              33%{transform:translate(18px,-18px) scale(1.04);}
              66%{transform:translate(-14px,14px) scale(0.97);}
            }
          `}</style>

          <div style={{
            position: "relative", zIndex: 1,
            maxWidth: "720px", margin: "0 auto",
            textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem",
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.4rem",
              padding: "0.35rem 1.1rem",
              background: "linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))",
              border: "1px solid rgba(38,77,228,0.15)",
              borderRadius: "9999px",
              color: P,
              fontSize: "0.78rem", fontWeight: 700,
              letterSpacing: "0.05em", textTransform: "uppercase",
            }}>
              <i className="bi bi-collection-fill" style={{ color: P, fontSize: "0.95rem" }} />
              Learning Hub
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
              color: "var(--color-text)",
              margin: 0,
            }}>
              CSS Learning{" "}
              <span style={{
                background: "linear-gradient(135deg, #264de4, #2965f1)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
                Resources
              </span>
            </h1>

            {/* Description */}
            <p style={{
              fontSize: "1.05rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.75,
              maxWidth: "600px",
              margin: 0,
            }}>
              Everything you need to master CSS — curated notes, video tutorials, learning roadmaps,
              certifications, cheat sheets, and essential tools, all in one place.
            </p>

            {/* Search */}
            <div style={{ position: "relative", width: "100%", maxWidth: "520px", marginTop: "0.5rem" }}>
              <i className="bi bi-search" style={{
                position: "absolute", top: "50%", left: "1.1rem",
                transform: "translateY(-50%)",
                color: P, fontSize: "1rem", pointerEvents: "none", zIndex: 1,
              }} />
              <input
                ref={searchRef}
                type="search"
                placeholder="Search resources, tools, videos…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search resources"
                autoComplete="off"
                style={{
                  width: "100%",
                  padding: "0.9rem 3rem 0.9rem 3rem",
                  border: "2px solid rgba(38,77,228,0.15)",
                  borderRadius: "9999px",
                  background: "var(--color-card)",
                  color: "var(--color-text)",
                  fontFamily: "inherit",
                  fontSize: "0.97rem",
                  outline: "none",
                  appearance: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = P;
                  e.target.style.boxShadow = "0 0 0 4px rgba(38,77,228,0.10), 0 6px 24px rgba(0,0,0,0.09)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(38,77,228,0.15)";
                  e.target.style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => { setSearchTerm(""); searchRef.current?.focus(); }}
                  aria-label="Clear search"
                  style={{
                    position: "absolute", top: "50%", right: "1rem",
                    transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--color-text-faint)", fontSize: "0.85rem",
                    padding: "0.25rem", borderRadius: "50%",
                    display: "flex", alignItems: "center",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = P)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  <i className="bi bi-x-lg" />
                </button>
              )}
            </div>

            {/* Stats */}
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center", gap: 0, marginTop: "0.2rem" }}>
              {[
                { icon: "bi bi-file-earmark-pdf-fill", label: "2 PDF Guides" },
                { icon: "bi bi-play-btn-fill", label: "2 Video Courses" },
                { icon: "bi bi-signpost-2-fill", label: "3 Roadmaps" },
                { icon: "bi bi-tools", label: "8 Tools" },
              ].map((s, i, arr) => (
                <span key={s.label} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.82rem", fontWeight: 600, color: "var(--color-text-muted)",
                    padding: "0 1rem",
                  }}>
                    <i className={s.icon} style={{ color: P }} />
                    {s.label}
                  </span>
                  {i < arr.length - 1 && (
                    <span style={{ width: 1, height: 18, background: "rgba(38,77,228,0.15)", display: "inline-block", flexShrink: 0 }} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ TABS ══════════ */}
        {!lower && (
          <div style={{
            padding: "1.25rem 2rem",
            background: "var(--color-bg-alt)",
            borderBottom: "1px solid var(--color-border-soft)",
            position: "sticky", top: "68px", zIndex: 90,
            backdropFilter: "blur(10px)",
            transition: "background 0.3s ease",
          }}>
            <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {tabs.map((tab) => (
                  <TabBtn
                    key={tab.id}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    icon={tab.icon}
                    label={tab.label}
                    primary={P}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search summary */}
        {lower && (
          <div style={{
            padding: "0.85rem 2rem",
            background: "var(--color-bg-alt)",
            borderBottom: "1px solid var(--color-border-soft)",
          }}>
            <div style={{
              maxWidth: "1240px", margin: "0 auto",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: "1rem", flexWrap: "wrap",
            }}>
              <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "0.45rem", margin: 0 }}>
                <i className="bi bi-search" style={{ color: P }} />
                Results for <em style={{ color: P, fontStyle: "normal", fontWeight: 700 }}>"{searchTerm}"</em>
              </p>
              <button
                onClick={() => setSearchTerm("")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  padding: "0.35rem 0.85rem", borderRadius: "9999px",
                  border: "1.5px solid rgba(38,77,228,0.15)", background: "none",
                  color: "var(--color-text-muted)", fontFamily: "inherit",
                  fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = P; e.currentTarget.style.color = P; e.currentTarget.style.background = "rgba(38,77,228,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.color = ""; e.currentTarget.style.background = ""; }}
              >
                <i className="bi bi-x-circle-fill" />
                Clear
              </button>
            </div>
          </div>
        )}

        {/* ══════════ CONTENT ══════════ */}
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 2rem 5rem" }}>

          {/* Notes & Videos */}
          {filteredSections.map((sec) => {
            if (!showSection(sec.id)) return null;
            return (
              <section
                key={sec.id}
                id={sec.id}
                style={{ paddingTop: "3.5rem", paddingBottom: "1rem", scrollMarginTop: "140px" }}
              >
                <SectionHeader
                  icon={sec.icon}
                  title={sec.title}
                  color={sec.color}
                  description={sec.description}
                />
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: "1.5rem",
                }}>
                  {sec.items.map((item, i) => (
                    <ResourceCard key={item.title} item={item} index={i} />
                  ))}
                </div>
              </section>
            );
          })}

          {/* Roadmaps */}
          {showSection("roadmaps") && filteredRoadmaps.length > 0 && (
            <section id="roadmaps" style={{ paddingTop: "3.5rem", paddingBottom: "1rem", scrollMarginTop: "140px" }}>
              <SectionHeader
                icon="bi bi-signpost-2-fill"
                title="Learning Roadmaps"
                color="#264de4"
                description="Structured learning paths to guide your journey from beginner to professional CSS developer."
              />
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.5rem",
              }}>
                {filteredRoadmaps.map((road, i) => (
                  <RoadmapCard key={road.title} road={road} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* Cheat Sheets */}
          {showSection("cheatsheets") && filteredCheatsheets.length > 0 && (
            <section id="cheatsheets" style={{ paddingTop: "3.5rem", paddingBottom: "1rem", scrollMarginTop: "140px" }}>
              <SectionHeader
                icon="bi bi-file-text-fill"
                title="CSS Cheat Sheets"
                color="#2965f1"
                description="Quick-reference guides for the most important CSS topics — save them as bookmarks!"
              />
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}>
                {filteredCheatsheets.map((sheet, i) => (
                  <CheatSheetCard key={sheet.title} sheet={sheet} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {showSection("certs") && filteredCerts.length > 0 && (
            <section id="certs" style={{ paddingTop: "3.5rem", paddingBottom: "1rem", scrollMarginTop: "140px" }}>
              <SectionHeader
                icon="bi bi-award-fill"
                title="Certifications"
                color="#1b35b5"
                description="Earn recognised credentials to showcase your CSS and web development skills."
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {filteredCerts.map((cert, i) => (
                  <CertCard key={cert.title} cert={cert} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* Tools */}
          {showSection("tools") && filteredTools.length > 0 && (
            <section id="tools" style={{ paddingTop: "3.5rem", paddingBottom: "1rem", scrollMarginTop: "140px" }}>
              <SectionHeader
                icon="bi bi-tools"
                title="Essential Tools"
                color="#42a1d0"
                description="Must-have tools and references that every CSS developer should have bookmarked."
              />
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "1.25rem",
              }}>
                {filteredTools.map((tool, i) => (
                  <ToolCard key={tool.title} tool={tool} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* No results */}
          {noResults && (
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "1rem", padding: "5rem 2rem", textAlign: "center",
              color: "var(--color-text-muted)",
            }}>
              <i className="bi bi-search" style={{ fontSize: "3.5rem", color: "rgba(38,77,228,0.12)", display: "block" }} />
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-text)", margin: 0 }}>No results found</h3>
              <p style={{ fontSize: "0.95rem", margin: 0, lineHeight: 1.65 }}>
                Nothing matched <strong style={{ color: P }}>"{searchTerm}"</strong>. Try a different keyword.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.65rem 1.5rem", background: "linear-gradient(135deg, #264de4, #2965f1)",
                  border: "none", borderRadius: "9999px", color: "#fff",
                  fontFamily: "inherit", fontSize: "0.875rem", fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(38,77,228,0.28)", transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(38,77,228,0.35)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 14px rgba(38,77,228,0.28)"; }}
              >
                <i className="bi bi-arrow-counterclockwise" />
                Reset Search
              </button>
            </div>
          )}

          {/* CTA Strip */}
          {!lower && (
            <section style={{ marginTop: "3rem" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "1.75rem",
                padding: "2rem 2.5rem",
                background: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "26px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                position: "relative", overflow: "hidden",
                flexWrap: "wrap",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(38,77,228,0.06), transparent)",
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg, #264de4, #2965f1, #42a1d0)",
                }} />

                <div style={{
                  position: "relative", zIndex: 1,
                  width: 56, height: 56, borderRadius: "14px",
                  background: "linear-gradient(135deg, #264de4, #2965f1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", color: "#fff", flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(38,77,228,0.3)",
                }}>
                  <i className="bi bi-terminal-fill" />
                </div>

                <div style={{ position: "relative", zIndex: 1, flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-text)", margin: "0 0 0.3rem" }}>
                    Ready to practise your CSS?
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
                    Open the live playground and write HTML, CSS, and JavaScript with instant preview.
                  </p>
                </div>

                <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "0.75rem", flexShrink: 0, flexWrap: "wrap" }}>
                  <Link
                    to="/compiler"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.45rem",
                      padding: "0.65rem 1.3rem", borderRadius: "9999px",
                      background: "linear-gradient(135deg, #264de4, #2965f1)",
                      color: "#fff", fontFamily: "inherit",
                      fontSize: "0.875rem", fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(38,77,228,0.3)",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(38,77,228,0.4)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 14px rgba(38,77,228,0.3)"; }}
                  >
                    <i className="bi bi-terminal-fill" />
                    Open Playground
                  </Link>
                  <Link
                    to="/css"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.45rem",
                      padding: "0.65rem 1.3rem", borderRadius: "9999px",
                      background: "none",
                      border: "1.5px solid var(--color-border)",
                      color: "var(--color-text-muted)", fontFamily: "inherit",
                      fontSize: "0.875rem", fontWeight: 700,
                      textDecoration: "none",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = P; e.currentTarget.style.color = P; e.currentTarget.style.background = "rgba(38,77,228,0.06)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = ""; e.currentTarget.style.color = ""; e.currentTarget.style.background = ""; }}
                  >
                    <i className="bi bi-braces-asterisk" />
                    CSS Reference
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>



      {/* Floating back-to-top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed", bottom: "1.5rem", right: "1.5rem",
          width: 46, height: 46, borderRadius: "50%", border: "none",
          background: "linear-gradient(135deg, #264de4, #2965f1)",
          color: "#fff", fontSize: "1.15rem",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", zIndex: 900,
          boxShadow: "0 4px 16px rgba(38,77,228,0.3)",
          opacity: showBackTop ? 1 : 0,
          pointerEvents: showBackTop ? "auto" : "none",
          transform: showBackTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
          transition: "opacity 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px) scale(1.08)"; e.currentTarget.style.boxShadow = "0 8px 22px rgba(38,77,228,0.4)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = showBackTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(38,77,228,0.3)"; }}
      >
        <i className="bi bi-arrow-up" />
      </button>
    </div>
  );
}

/* ─── Helper card components ─────────────────────────────────────── */

function TabBtn({ active, onClick, icon, label, primary }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-selected={active}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.45rem",
        padding: "0.5rem 1.1rem",
        borderRadius: "9999px",
        border: `1.5px solid ${active ? "transparent" : "var(--color-border)"}`,
        background: active ? "linear-gradient(135deg, #264de4, #2965f1)" : "var(--color-card)",
        color: active ? "#fff" : hov ? primary : "var(--color-text-muted)",
        fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 700,
        cursor: "pointer", whiteSpace: "nowrap",
        boxShadow: active ? "0 3px 12px rgba(38,77,228,0.3)" : "none",
        transition: "all 0.15s ease",
        ...(hov && !active ? { borderColor: primary, background: "rgba(38,77,228,0.06)" } : {}),
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <i className={icon} style={{ fontSize: "0.88rem" }} />
      {label}
    </button>
  );
}

function RoadmapCard({ road, index }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={road.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "var(--color-card)",
        border: `1px solid ${hov ? road.color : "var(--color-border)"}`,
        borderRadius: "20px",
        padding: "1.75rem",
        display: "flex", flexDirection: "column", gap: "0.75rem",
        textDecoration: "none", color: "var(--color-text)",
        boxShadow: hov ? `0 14px 40px ${road.color}20` : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: road.color,
        transform: hov ? "scaleX(1)" : "scaleX(0.5)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      }} />
      <div style={{
        width: 50, height: 50, borderRadius: "12px",
        background: `${road.color}15`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem", color: road.color,
        transition: "background 0.2s ease, color 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "rotate(-8deg) scale(1.1)" : "none",
        ...(hov ? { background: road.color, color: "#fff" } : {}),
      }}>
        <i className={road.icon} />
      </div>
      <span style={{
        display: "inline-flex", alignItems: "center",
        padding: "0.18rem 0.65rem", borderRadius: "9999px",
        background: `${road.color}12`, color: road.color,
        fontSize: "0.68rem", fontWeight: 800,
        letterSpacing: "0.05em", textTransform: "uppercase",
        alignSelf: "flex-start",
      }}>
        {road.tag}
      </span>
      <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-text)", margin: 0, letterSpacing: "-0.02em" }}>
        {road.title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, flex: 1 }}>
        {road.description}
      </p>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: hov ? "0.65rem" : "0.4rem",
        fontSize: "0.85rem", fontWeight: 700, color: road.color,
        marginTop: "auto", transition: "gap 0.15s ease",
      }}>
        View Roadmap <i className="bi bi-arrow-up-right" style={{ fontSize: "0.82rem" }} />
      </span>
    </a>
  );
}

function CheatSheetCard({ sheet, index }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={sheet.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "var(--color-card)",
        border: `1px solid ${hov ? sheet.color : "var(--color-border)"}`,
        borderRadius: "16px",
        padding: "1.5rem",
        display: "flex", flexDirection: "column", gap: "0.75rem",
        textDecoration: "none", color: "var(--color-text)",
        boxShadow: hov ? `0 10px 32px ${sheet.color}20` : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hov ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        width: 44, height: 44, borderRadius: "10px",
        background: `${sheet.color}15`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.3rem", color: sheet.color,
        transition: "background 0.2s ease, color 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "scale(1.1) rotate(-6deg)" : "none",
        ...(hov ? { background: sheet.color, color: "#fff" } : {}),
      }}>
        <i className={sheet.icon} />
      </div>
      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text)", margin: 0, letterSpacing: "-0.01em" }}>
        {sheet.title}
      </h3>
      <p style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, flex: 1 }}>
        {sheet.description}
      </p>
      <span style={{
        display: "inline-flex", alignItems: "center", gap: hov ? "0.6rem" : "0.35rem",
        fontSize: "0.82rem", fontWeight: 700, color: sheet.color,
        marginTop: "auto", transition: "gap 0.15s ease",
      }}>
        View <i className="bi bi-arrow-up-right" style={{ fontSize: "0.78rem" }} />
      </span>
    </a>
  );
}

function CertCard({ cert, index }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", gap: "1.25rem",
        background: "var(--color-card)",
        border: `1px solid ${hov ? "#264de4" : "var(--color-border)"}`,
        borderRadius: "18px", padding: "1.4rem 1.6rem",
        textDecoration: "none", color: "var(--color-text)",
        boxShadow: hov ? "0 10px 32px rgba(38,77,228,0.15)" : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hov ? "translateX(6px)" : "translateX(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        width: 50, height: 50, borderRadius: "12px",
        background: hov ? "linear-gradient(135deg, #264de4, #2965f1)" : "rgba(38,77,228,0.08)",
        border: hov ? "none" : "1.5px solid rgba(38,77,228,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem", color: hov ? "#fff" : "#264de4",
        flexShrink: 0,
        transition: "all 0.2s ease",
      }}>
        <i className={cert.icon} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.35rem" }}>
          <h3 style={{ fontSize: "0.97rem", fontWeight: 700, color: "var(--color-text)", margin: 0, letterSpacing: "-0.01em" }}>
            {cert.title}
          </h3>
          <span style={{
            padding: "0.18rem 0.6rem", borderRadius: "9999px",
            background: "rgba(0,0,0,0.06)", color: "var(--color-text-muted)",
            fontSize: "0.7rem", fontWeight: 700,
          }}>
            {cert.provider}
          </span>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.3rem",
            padding: "0.18rem 0.6rem", borderRadius: "9999px",
            fontSize: "0.7rem", fontWeight: 700,
            background: cert.free ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.10)",
            color: cert.free ? "#22c55e" : "#ef4444",
          }}>
            <i className={cert.free ? "bi bi-gift-fill" : "bi bi-credit-card"} style={{ fontSize: "0.7rem" }} />
            {cert.free ? "Free" : "Paid"}
          </span>
        </div>
        <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
          {cert.description}
        </p>
      </div>
      <i className="bi bi-arrow-up-right" style={{
        color: hov ? "#264de4" : "var(--color-text-faint)",
        fontSize: "1.1rem", flexShrink: 0,
        transform: hov ? "translate(3px,-3px)" : "none",
        transition: "all 0.15s ease",
      }} />
    </a>
  );
}

function ToolCard({ tool, index }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "var(--color-card)",
        border: `1px solid ${hov ? tool.color : "var(--color-border)"}`,
        borderRadius: "16px", padding: "1.6rem",
        display: "flex", flexDirection: "column", gap: "0.85rem",
        textDecoration: "none", color: "var(--color-text)",
        boxShadow: hov ? `0 10px 32px ${tool.color}22` : "0 1px 4px rgba(0,0,0,0.06)",
        transform: hov ? "translateY(-7px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        position: "relative", overflow: "hidden",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${tool.color}08, transparent)`,
        opacity: hov ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "relative", zIndex: 1,
        width: 48, height: 48, borderRadius: "12px",
        background: `${tool.color}15`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem", color: tool.color,
        transition: "background 0.2s ease, color 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "scale(1.1) rotate(-6deg)" : "none",
        ...(hov ? { background: tool.color, color: "#fff" } : {}),
      }}>
        <i className={tool.icon} />
      </div>
      <h3 style={{ position: "relative", zIndex: 1, fontSize: "1rem", fontWeight: 800, color: "var(--color-text)", margin: 0 }}>
        {tool.title}
      </h3>
      <p style={{ position: "relative", zIndex: 1, fontSize: "0.855rem", color: "var(--color-text-muted)", lineHeight: 1.65, margin: 0, flex: 1 }}>
        {tool.description}
      </p>
      <span style={{
        position: "relative", zIndex: 1,
        display: "inline-flex", alignItems: "center", gap: hov ? "0.65rem" : "0.4rem",
        fontSize: "0.82rem", fontWeight: 700, color: tool.color,
        marginTop: "auto", transition: "gap 0.15s ease",
      }}>
        Visit <i className="bi bi-arrow-up-right" style={{ fontSize: "0.8rem" }} />
      </span>
    </a>
  );
}
