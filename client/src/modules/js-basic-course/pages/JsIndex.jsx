import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import JsNavbar, { useDarkMode } from "../components/JsNavbar";
import JsFooter from "../components/JsFooter";
import { jsData, getAllTopics } from "../data/jsData";

/* ─── Group tags by first letter ──────────────────────────────── */
function groupByLetter(tags) {
  const groups = {};
  tags.forEach((tag) => {
    const letter = tag.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(tag);
  });
  return groups;
}

/* ─── Category accent colours ─────────────────────────────────── */
const CAT_COLORS = [
  "#C9B800", "#F0B429", "#F7DF1E", "#C9B800",
  "#F0B429", "#F7DF1E", "#C9B800", "#F0B429",
  "#F7DF1E", "#C9B800", "#F0B429", "#F7DF1E",
];

export default function JsIndex() {
  const navigate = useNavigate();
  const { dark } = useDarkMode();

  const [searchTerm,  setSearchTerm]  = useState("");
  const [activeView,  setActiveView]  = useState("categories");
  const [showBackTop, setShowBackTop] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const searchRef = useRef(null);

  const allTopics = getAllTopics();
  const lower     = searchTerm.trim().toLowerCase();

  const filteredCategories = jsData.categories
    .map((cat) => ({
      ...cat,
      tags: cat.tags.filter((t) => t.name.toLowerCase().includes(lower)),
    }))
    .filter((cat) => cat.tags.length > 0);

  const filteredAlpha = allTopics.filter((t) =>
    t.name.toLowerCase().includes(lower)
  );
  const groupedAlpha = groupByLetter(filteredAlpha);
  const letters      = Object.keys(groupedAlpha).sort();

  const totalTopics = allTopics.length;
  const totalCats   = jsData.categories.length;

  const P  = "#C9B800";   // primary text colour (works on both themes)
  const PB = "#F7DF1E";   // bright yellow for backgrounds

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 350);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!lower) return;
    if (filteredCategories.length === 0 && filteredAlpha.length > 0)
      setActiveView("alpha");
  }, [lower]);

  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ── inline styles tokens ── */
  const bg     = "var(--color-bg)";
  const bgAlt  = "var(--color-bg-alt)";
  const card   = "var(--color-card)";
  const border = "var(--color-border)";
  const borderSoft = "var(--color-border-soft)";
  const text   = "var(--color-text)";
  const muted  = "var(--color-text-muted)";
  const faint  = "var(--color-text-faint)";

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        background: bg,
        color: text,
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      <JsNavbar />

      <main id="main-content">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section
          style={{
            position: "relative",
            background: bg,
            padding: "6.5rem 2rem 4.5rem",
            overflow: "hidden",
            borderBottom: `1px solid ${borderSoft}`,
            transition: "background 0.3s ease",
          }}
        >
          {/* blobs */}
          {[
            { w: 480, h: 480, top: -160, left: -120, c: "rgba(247,223,30,0.15)", dur: 11 },
            { w: 360, h: 360, bottom: -100, right: -80, c: "rgba(240,180,41,0.12)", dur: 14, rev: true },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: b.w, height: b.h,
                top: b.top, left: b.left, bottom: b.bottom, right: b.right,
                borderRadius: "50%",
                filter: "blur(70px)",
                background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
                animation: `jsIndexBlob ${b.dur}s ease-in-out infinite${b.rev ? " reverse" : ""}`,
                pointerEvents: "none",
                zIndex: 0,
              }}
              aria-hidden="true"
            />
          ))}

          <style>{`
            @keyframes jsIndexBlob {
              0%,100%{transform:translate(0,0) scale(1);}
              33%{transform:translate(18px,-18px) scale(1.04);}
              66%{transform:translate(-14px,14px) scale(0.97);}
            }
            @keyframes jsIndexCardIn {
              from{opacity:0;transform:translateY(18px) scale(0.97);}
              to{opacity:1;transform:translateY(0) scale(1);}
            }
          `}</style>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              maxWidth: "760px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.1rem",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: muted,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => navigate("/js-basic-course/")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: muted,
                  fontFamily: "inherit",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  padding: "0.15rem 0.3rem",
                  borderRadius: "5px",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = P)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                <i className="bi bi-house-door-fill" />
                Home
              </button>
              <i className="bi bi-chevron-right" style={{ fontSize: "0.65rem", opacity: 0.4 }} />
              <span style={{ color: P, fontWeight: 700 }}>JS Reference</span>
            </nav>

            {/* badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 1.1rem",
                background: "rgba(247,223,30,0.10)",
                border: `1px solid rgba(247,223,30,0.28)`,
                borderRadius: "9999px",
                color: P,
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: PB,
                  color: "#323330",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 900,
                  fontSize: "0.72rem",
                  padding: "0.16rem 0.5rem",
                  borderRadius: "5px",
                  letterSpacing: "0.04em",
                  boxShadow: "0 1px 6px rgba(247,223,30,0.35)",
                }}
              >
                JS
              </span>
              Complete Reference
            </div>

            {/* heading */}
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 900,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                color: text,
                margin: 0,
              }}
            >
              JavaScript{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C9B800, #F7DF1E)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Basic Explorer
              </span>
            </h1>

            {/* description */}
            <p
              style={{
                fontSize: "1.05rem",
                color: muted,
                lineHeight: 1.75,
                maxWidth: "600px",
                margin: 0,
              }}
            >
              Browse all{" "}
              <strong style={{ color: P }}>{totalTopics}</strong> JavaScript
              topics across{" "}
              <strong style={{ color: P }}>{totalCats}</strong> categories. Click
              any topic to see a live code example and editable preview.
            </p>

            {/* search */}
            <div style={{ position: "relative", width: "100%", maxWidth: "520px", marginTop: "0.5rem" }}>
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "1.1rem",
                  transform: "translateY(-50%)",
                  color: P,
                  fontSize: "1rem",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />
              <input
                ref={searchRef}
                type="search"
                placeholder="Search JS topics… e.g. arrow functions, map, closure"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search JavaScript topics"
                autoComplete="off"
                spellCheck="false"
                style={{
                  width: "100%",
                  padding: "0.9rem 3rem 0.9rem 3rem",
                  border: `2px solid rgba(247,223,30,0.25)`,
                  borderRadius: "9999px",
                  background: card,
                  color: text,
                  fontFamily: "inherit",
                  fontSize: "0.97rem",
                  outline: "none",
                  appearance: "none",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = PB;
                  e.target.style.boxShadow = "0 0 0 4px rgba(247,223,30,0.15), 0 6px 24px rgba(0,0,0,0.09)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(247,223,30,0.25)";
                  e.target.style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => { setSearchTerm(""); searchRef.current?.focus(); }}
                  aria-label="Clear search"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "1rem",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: faint,
                    fontSize: "0.85rem",
                    padding: "0.25rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = P)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  <i className="bi bi-x-lg" />
                </button>
              )}
            </div>

            {/* stats row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 0,
                marginTop: "0.25rem",
              }}
            >
              {[
                { icon: "bi bi-braces-asterisk", val: totalTopics, label: "Topics"     },
                { icon: "bi bi-grid-fill",        val: totalCats,   label: "Categories" },
                { icon: "bi bi-play-btn-fill",    val: "Live",       label: "Examples"  },
              ].map((s, i, arr) => (
                <span key={s.label} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: muted,
                      padding: "0 1rem",
                    }}
                  >
                    <i className={s.icon} style={{ color: P }} />
                    <strong style={{ color: text }}>{s.val}</strong> {s.label}
                  </span>
                  {i < arr.length - 1 && (
                    <span
                      style={{
                        width: 1,
                        height: 18,
                        background: "rgba(247,223,30,0.20)",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            INTRO CARDS
        ═══════════════════════════════════════ */}
        {!lower && (
          <section
            style={{
              padding: "3rem 2rem",
              background: bgAlt,
              borderBottom: `1px solid ${borderSoft}`,
              transition: "background 0.3s ease",
            }}
          >
            <div style={{ maxWidth: "1260px", margin: "0 auto" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {[
                  {
                    icon: "bi bi-grid-3x3-gap-fill",
                    title: "Browse by Category",
                    desc: "Topics grouped by purpose — Variables, Functions, Arrays, DOM, Events, and more.",
                    badge: `${totalCats} categories`,
                    action: () => { setActiveView("categories"); scrollToSection("categories"); },
                    highlight: false,
                  },
                  {
                    icon: "bi bi-sort-alpha-down",
                    title: "Browse A–Z",
                    desc: `All ${totalTopics} JavaScript Basic topics in alphabetical order for quick lookup.`,
                    badge: `${totalTopics} topics`,
                    action: () => { setActiveView("alpha"); scrollToSection("alphabetical"); },
                    highlight: false,
                  },
                  {
                    icon: "bi bi-play-circle-fill",
                    title: "Live Code Examples",
                    desc: "Every topic has a runnable code example with Monaco editor and live output preview.",
                    badge: "All topics",
                    action: () => navigate("/js-basic-course/js/function-declaration"),
                    highlight: true,
                  },
                ].map((card) => (
                  <button
                    key={card.title}
                    onClick={card.action}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1.4rem 1.5rem",
                      background: card.highlight
                        ? "linear-gradient(135deg, #323330, #4a4a3a)"
                        : card,
                      border: card.highlight ? "none" : `1px solid ${border}`,
                      borderRadius: "18px",
                      boxShadow: card.highlight
                        ? "0 8px 28px rgba(50,51,48,0.35)"
                        : "0 1px 4px rgba(0,0,0,0.06)",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "inherit",
                      transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease",
                      backgroundColor: card.highlight ? undefined : card,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = card.highlight
                        ? "0 16px 40px rgba(50,51,48,0.50)"
                        : "0 10px 30px rgba(247,223,30,0.20)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = card.highlight
                        ? "0 8px 28px rgba(50,51,48,0.35)"
                        : "0 1px 4px rgba(0,0,0,0.06)";
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "12px",
                        background: card.highlight ? "rgba(247,223,30,0.15)" : "rgba(247,223,30,0.10)",
                        border: card.highlight ? "1px solid rgba(247,223,30,0.25)" : `1px solid ${border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.35rem",
                        color: card.highlight ? PB : P,
                        flexShrink: 0,
                      }}
                    >
                      <i className={card.icon} />
                    </div>

                    {/* Text */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          margin: "0 0 0.2rem",
                          color: card.highlight ? PB : text,
                        }}
                      >
                        {card.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          margin: 0,
                          lineHeight: 1.5,
                          color: card.highlight ? "rgba(247,223,30,0.75)" : muted,
                        }}
                      >
                        {card.desc}
                      </p>
                      <span
                        style={{
                          display: "inline-block",
                          marginTop: "0.45rem",
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          padding: "0.18rem 0.55rem",
                          borderRadius: "5px",
                          background: card.highlight ? "rgba(247,223,30,0.15)" : "rgba(247,223,30,0.10)",
                          color: card.highlight ? PB : P,
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    {/* Arrow */}
                    <i
                      className="bi bi-arrow-right"
                      style={{
                        color: card.highlight ? "rgba(247,223,30,0.7)" : faint,
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            TOGGLE BAR
        ═══════════════════════════════════════ */}
        {!lower && (
          <div
            style={{
              padding: "1.25rem 2rem",
              background: bg,
              borderBottom: `1px solid ${borderSoft}`,
              position: "sticky",
              top: "68px",
              zIndex: 90,
              backdropFilter: "blur(10px)",
              transition: "background 0.3s ease",
            }}
          >
            <div style={{ maxWidth: "1260px", margin: "0 auto" }}>
              <div
                style={{
                  display: "inline-flex",
                  background: card,
                  border: `1px solid ${border}`,
                  borderRadius: "9999px",
                  padding: "4px",
                  gap: "4px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                }}
              >
                {[
                  { id: "categories", icon: "bi bi-grid-fill",       label: "Categories"  },
                  { id: "alpha",      icon: "bi bi-sort-alpha-down",  label: "Alphabetical"},
                ].map(({ id, icon, label }) => (
                  <button
                    key={id}
                    onClick={() => {
                      setActiveView(id);
                      scrollToSection(id === "categories" ? "categories" : "alphabetical");
                    }}
                    aria-selected={activeView === id}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.5rem 1.3rem",
                      borderRadius: "9999px",
                      border: "none",
                      fontFamily: "inherit",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      background: activeView === id
                        ? "linear-gradient(135deg, #323330, #4a4a3a)"
                        : "none",
                      color: activeView === id ? PB : muted,
                      boxShadow: activeView === id ? "0 3px 10px rgba(50,51,48,0.30)" : "none",
                      transition: "all 0.18s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (activeView !== id) {
                        e.currentTarget.style.color = P;
                        e.currentTarget.style.background = "rgba(247,223,30,0.08)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeView !== id) {
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.background = "";
                      }
                    }}
                  >
                    <i className={icon} style={{ fontSize: "0.9rem" }} />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search result summary */}
        {lower && (
          <div
            style={{
              padding: "0.9rem 2rem",
              background: bgAlt,
              borderBottom: `1px solid ${borderSoft}`,
            }}
          >
            <div
              style={{
                maxWidth: "1260px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  color: muted,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  margin: 0,
                }}
              >
                <i className="bi bi-search" style={{ color: P }} />
                Found{" "}
                <strong style={{ color: text }}>{filteredAlpha.length}</strong>{" "}
                topic{filteredAlpha.length !== 1 ? "s" : ""} matching{" "}
                <em style={{ color: P, fontStyle: "normal", fontWeight: 700 }}>
                  "{searchTerm}"
                </em>
              </p>
              <button
                onClick={() => setSearchTerm("")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  border: `1.5px solid rgba(247,223,30,0.22)`,
                  background: "none",
                  color: muted,
                  fontFamily: "inherit",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = P;
                  e.currentTarget.style.color = P;
                  e.currentTarget.style.background = "rgba(247,223,30,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.color = "";
                  e.currentTarget.style.background = "";
                }}
              >
                <i className="bi bi-x-circle-fill" />
                Clear search
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════
            CATEGORIES
        ═══════════════════════════════════════ */}
        {(activeView === "categories" || lower) && (
          <section
            style={{
              padding: "4rem 2rem 5rem",
              background: bg,
              transition: "background 0.3s ease",
            }}
            id="categories"
          >
            <div style={{ maxWidth: "1260px", margin: "0 auto" }}>

              {/* Section header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                      fontWeight: 800,
                      margin: "0 0 0.4rem",
                      color: text,
                      letterSpacing: "-0.025em",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <i className="bi bi-grid-3x3-gap-fill" style={{ color: P, fontSize: "1.1em" }} />
                    {lower ? `Categories matching "${searchTerm}"` : "JavaScript Topics by Category"}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: muted, margin: 0, lineHeight: 1.65 }}>
                    Topics grouped by their purpose in JavaScript development.
                  </p>
                </div>
                {!lower && (
                  <span
                    style={{
                      padding: "0.38rem 0.95rem",
                      background: "rgba(247,223,30,0.10)",
                      border: "1px solid rgba(247,223,30,0.22)",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: P,
                      letterSpacing: "0.03em",
                      whiteSpace: "nowrap",
                      alignSelf: "flex-start",
                    }}
                  >
                    {totalCats} categories
                  </span>
                )}
              </div>

              {filteredCategories.length === 0 ? (
                /* Empty state */
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "4rem 2rem",
                    textAlign: "center",
                    color: muted,
                  }}
                >
                  <i className="bi bi-search" style={{ fontSize: "3rem", color: "rgba(247,223,30,0.18)", display: "block" }} />
                  <p style={{ margin: 0 }}>
                    No categories match{" "}
                    <strong style={{ color: P }}>"{searchTerm}"</strong>
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.6rem 1.4rem",
                      borderRadius: "9999px",
                      border: "none",
                      background: "linear-gradient(135deg, #323330, #4a4a3a)",
                      color: PB,
                      fontFamily: "inherit",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(50,51,48,0.30)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                  >
                    <i className="bi bi-arrow-counterclockwise" />
                    Reset Search
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {filteredCategories.map((cat, idx) => {
                    const accent = CAT_COLORS[idx % CAT_COLORS.length];
                    return (
                      <article
                        key={cat.name}
                        style={{
                          background: card,
                          border: `1px solid ${border}`,
                          borderRadius: "18px",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                          transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease, border-color 0.25s ease",
                          animation: `jsIndexCardIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both ${idx * 0.05}s`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-6px)";
                          e.currentTarget.style.boxShadow = `0 14px 40px rgba(247,223,30,0.18)`;
                          e.currentTarget.style.borderColor = accent;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.borderColor = "";
                        }}
                      >
                        {/* Card head */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.85rem",
                            padding: "1.1rem 1.25rem",
                            borderBottom: `1px solid ${borderSoft}`,
                            background: "rgba(247,223,30,0.04)",
                            position: "relative",
                          }}
                        >
                          {/* Top accent line */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              height: 3,
                              background: `linear-gradient(90deg, ${accent}, ${accent}99)`,
                            }}
                          />

                          {/* Icon */}
                          <div
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "1.15rem",
                              color: accent,
                              background: `${accent}15`,
                              border: `1px solid ${accent}30`,
                              flexShrink: 0,
                            }}
                          >
                            <i className={cat.icon || "bi bi-braces-asterisk"} />
                          </div>

                          <div style={{ flex: 1, minWidth: 0 }}>
                            <h3
                              style={{
                                fontSize: "0.95rem",
                                fontWeight: 700,
                                color: text,
                                margin: "0 0 0.2rem",
                                lineHeight: 1.3,
                              }}
                            >
                              {cat.name}
                            </h3>
                            {cat.description && (
                              <p
                                style={{
                                  fontSize: "0.75rem",
                                  color: muted,
                                  margin: 0,
                                  lineHeight: 1.5,
                                }}
                              >
                                {cat.description}
                              </p>
                            )}
                          </div>

                          <span
                            style={{
                              flexShrink: 0,
                              fontSize: "0.72rem",
                              fontWeight: 800,
                              color: accent,
                              background: `${accent}15`,
                              padding: "0.22rem 0.6rem",
                              borderRadius: "9999px",
                              alignSelf: "flex-start",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {cat.tags.length}
                          </span>
                        </div>

                        {/* Tags */}
                        <div
                          style={{
                            padding: "1rem 1.25rem",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.45rem",
                            alignItems: "flex-start",
                          }}
                        >
                          {cat.tags.map((tag) => (
                            <Link
                              key={tag.name}
                              to={`/js-basic-course/js/${tag.name}`}
                              title={tag.description}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "0.28rem 0.65rem",
                                borderRadius: "7px",
                                background: bgAlt,
                                border: `1px solid ${borderSoft}`,
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.78rem",
                                fontWeight: 600,
                                color: muted,
                                textDecoration: "none",
                                transition: "all 0.15s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = accent;
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.borderColor = accent;
                                e.currentTarget.style.transform = "translateY(-2px)";
                                e.currentTarget.style.boxShadow = `0 4px 12px ${accent}45`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "";
                                e.currentTarget.style.color = "";
                                e.currentTarget.style.borderColor = "";
                                e.currentTarget.style.transform = "";
                                e.currentTarget.style.boxShadow = "";
                              }}
                            >
                              {tag.name}
                            </Link>
                          ))}
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            ALPHABETICAL
        ═══════════════════════════════════════ */}
        {(activeView === "alpha" || lower) && (
          <section
            style={{
              padding: "4rem 2rem 5rem",
              background: bgAlt,
              transition: "background 0.3s ease",
            }}
            id="alphabetical"
          >
            <div style={{ maxWidth: "1260px", margin: "0 auto" }}>

              {/* Section header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "clamp(1.4rem, 3vw, 1.8rem)",
                      fontWeight: 800,
                      margin: "0 0 0.4rem",
                      color: text,
                      letterSpacing: "-0.025em",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <i className="bi bi-sort-alpha-down" style={{ color: P, fontSize: "1.1em" }} />
                    {lower ? `Topics matching "${searchTerm}"` : "All JS Topics — A to Z"}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: muted, margin: 0 }}>
                    Complete alphabetical listing. Click any topic to open its reference.
                  </p>
                </div>
                {!lower && (
                  <span
                    style={{
                      padding: "0.38rem 0.95rem",
                      background: "rgba(247,223,30,0.10)",
                      border: "1px solid rgba(247,223,30,0.22)",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: P,
                      letterSpacing: "0.03em",
                      whiteSpace: "nowrap",
                      alignSelf: "flex-start",
                    }}
                  >
                    {totalTopics} topics
                  </span>
                )}
              </div>

              {filteredAlpha.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "4rem 2rem",
                    textAlign: "center",
                    color: muted,
                  }}
                >
                  <i className="bi bi-search" style={{ fontSize: "3rem", color: "rgba(247,223,30,0.15)" }} />
                  <p style={{ margin: 0 }}>
                    No topics match <strong style={{ color: P }}>"{searchTerm}"</strong>
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.6rem 1.4rem",
                      borderRadius: "9999px",
                      border: "none",
                      background: "linear-gradient(135deg, #323330, #4a4a3a)",
                      color: PB,
                      fontFamily: "inherit",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "")}
                  >
                    <i className="bi bi-arrow-counterclockwise" />
                    Reset Search
                  </button>
                </div>
              ) : lower ? (
                /* Flat grid when searching */
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {filteredAlpha.map((tag) => (
                    <li key={tag.name}>
                      <Link
                        to={`/js-basic-course/js/${tag.name}`}
                        title={tag.description}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "0.4rem 0.9rem",
                          borderRadius: "10px",
                          background: card,
                          border: `1.5px solid ${border}`,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: muted,
                          textDecoration: "none",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#323330";
                          e.currentTarget.style.color = PB;
                          e.currentTarget.style.borderColor = "#323330";
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 5px 14px rgba(50,51,48,0.30)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.color = "";
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.boxShadow = "";
                        }}
                      >
                        {tag.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                /* Letter-grouped layout */
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                  {/* Letter jump bar */}
                  <nav
                    aria-label="Jump to letter"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.35rem",
                      padding: "1rem 1.25rem",
                      background: card,
                      border: `1px solid ${border}`,
                      borderRadius: "16px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    }}
                  >
                    {letters.map((l) => (
                      <button
                        key={l}
                        onClick={() =>
                          document
                            .getElementById(`jsletter-${l}`)
                            ?.scrollIntoView({ behavior: "smooth", block: "start" })
                        }
                        aria-label={`Jump to letter ${l}`}
                        style={{
                          width: 36,
                          height: 36,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "7px",
                          border: `1px solid ${borderSoft}`,
                          background: bg,
                          fontFamily: "inherit",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: muted,
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#323330";
                          e.currentTarget.style.color = PB;
                          e.currentTarget.style.borderColor = "#323330";
                          e.currentTarget.style.transform = "scale(1.12)";
                          e.currentTarget.style.boxShadow = "0 3px 10px rgba(50,51,48,0.28)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.color = "";
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.transform = "";
                          e.currentTarget.style.boxShadow = "";
                        }}
                      >
                        {l}
                      </button>
                    ))}
                  </nav>

                  {/* Letter groups */}
                  {letters.map((letter) => (
                    <div
                      key={letter}
                      id={`jsletter-${letter}`}
                      style={{ scrollMarginTop: "140px" }}
                    >
                      <div
                        style={{
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: P,
                          marginBottom: "0.85rem",
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                          position: "relative",
                          paddingBottom: "0.4rem",
                        }}
                      >
                        {letter}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: 36,
                            height: 3,
                            background: "linear-gradient(90deg, #C9B800, #F7DF1E)",
                            borderRadius: 2,
                          }}
                        />
                      </div>

                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {groupedAlpha[letter].map((tag) => (
                          <li key={tag.name}>
                            <Link
                              to={`/js-basic-course/js/${tag.name}`}
                              title={tag.description}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "0.4rem 0.9rem",
                                borderRadius: "10px",
                                background: card,
                                border: `1.5px solid ${border}`,
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.82rem",
                                fontWeight: 600,
                                color: muted,
                                textDecoration: "none",
                                transition: "all 0.15s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#323330";
                                e.currentTarget.style.color = PB;
                                e.currentTarget.style.borderColor = "#323330";
                                e.currentTarget.style.transform = "translateY(-3px)";
                                e.currentTarget.style.boxShadow = "0 5px 14px rgba(50,51,48,0.30)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "";
                                e.currentTarget.style.color = "";
                                e.currentTarget.style.borderColor = "";
                                e.currentTarget.style.transform = "";
                                e.currentTarget.style.boxShadow = "";
                              }}
                            >
                              {tag.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════
            CTA STRIP
        ═══════════════════════════════════════ */}
        {!lower && (
          <section
            style={{
              padding: "3rem 2rem",
              background: bg,
              borderTop: `1px solid ${borderSoft}`,
              transition: "background 0.3s ease",
            }}
          >
            <div
              style={{
                maxWidth: "1260px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                gap: "1.75rem",
                padding: "2rem 2.5rem",
                background: card,
                border: `1px solid ${border}`,
                borderRadius: "26px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                position: "relative",
                overflow: "hidden",
                flexWrap: "wrap",
              }}
            >
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(247,223,30,0.04), transparent)",
                  pointerEvents: "none",
                }}
              />
              {/* Top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "linear-gradient(90deg, #323330, #C9B800, #F7DF1E)",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: 56,
                  height: 56,
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #323330, #4a4a3a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  color: PB,
                  flexShrink: 0,
                  boxShadow: "0 4px 14px rgba(50,51,48,0.35)",
                }}
              >
                <i className="bi bi-terminal-fill" />
              </div>

              {/* Text */}
              <div style={{ position: "relative", zIndex: 1, flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: text, margin: "0 0 0.3rem" }}>
                  Ready to practise JavaScript?
                </h3>
                <p style={{ fontSize: "0.88rem", color: muted, margin: 0, lineHeight: 1.6 }}>
                  Open the live playground and write HTML, CSS, and JavaScript with instant preview.
                </p>
              </div>

              {/* Buttons */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  gap: "0.75rem",
                  flexShrink: 0,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { to: "/js-basic-course/compiler", icon: "bi bi-terminal-fill", label: "Open Playground", primary: true },
                  { to: "/js-basic-course",         icon: "bi bi-house-door-fill", label: "Back to Home",   primary: false },
                ].map((btn) => (
                  <Link
                    key={btn.to}
                    to={btn.to}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.65rem 1.3rem",
                      borderRadius: "9999px",
                      background: btn.primary
                        ? "linear-gradient(135deg, #323330, #4a4a3a)"
                        : "none",
                      border: btn.primary ? "none" : `1.5px solid ${border}`,
                      color: btn.primary ? PB : muted,
                      fontFamily: "inherit",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      textDecoration: "none",
                      boxShadow: btn.primary ? "0 4px 14px rgba(50,51,48,0.30)" : "none",
                      transition: "all 0.15s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      if (btn.primary) {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 6px 18px rgba(50,51,48,0.45)";
                      } else {
                        e.currentTarget.style.borderColor = P;
                        e.currentTarget.style.color = P;
                        e.currentTarget.style.background = "rgba(247,223,30,0.06)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.boxShadow = btn.primary ? "0 4px 14px rgba(50,51,48,0.30)" : "none";
                      if (!btn.primary) {
                        e.currentTarget.style.borderColor = "";
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.background = "";
                      }
                    }}
                  >
                    <i className={btn.icon} />
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <JsFooter />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          width: 46,
          height: 46,
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(135deg, #323330, #4a4a3a)",
          color: PB,
          fontSize: "1.15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 900,
          boxShadow: "0 4px 16px rgba(50,51,48,0.35)",
          opacity: showBackTop ? 1 : 0,
          pointerEvents: showBackTop ? "auto" : "none",
          transform: showBackTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)",
          transition: "opacity 0.2s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.08)";
          e.currentTarget.style.boxShadow = "0 8px 22px rgba(50,51,48,0.50)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = showBackTop ? "translateY(0) scale(1)" : "translateY(12px) scale(0.85)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(50,51,48,0.35)";
        }}
      >
        <i className="bi bi-arrow-up" />
      </button>
    </div>
  );
}
