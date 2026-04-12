import { useParams, Link } from "react-router-dom";
import jsData from "../data/jsData";

const CATEGORY_ICONS = {
  "Getting Started": "bi bi-play-circle-fill",
  "Variables and Data Types": "bi bi-database-fill",
  "Variables & Data Types": "bi bi-database-fill",
  "Operators": "bi bi-calculator-fill",
  "Control Flow": "bi bi-diagram-3-fill",
  "Loops": "bi bi-arrow-repeat",
  "Functions": "bi bi-lightning-fill",
  "Arrays": "bi bi-collection-fill",
  "Objects": "bi bi-braces-asterisk",
  "Strings": "bi bi-fonts",
  "DOM Manipulation": "bi bi-layout-text-sidebar",
  "DOM Basics": "bi bi-window-stack",
  "Events": "bi bi-cursor-fill",
  "Error Handling": "bi bi-shield-exclamation",
};

export default function JsNavMenu({ isOpen, onClose }) {
  const { topic: activeTopic } = useParams();

  return (
    <>
      {/* ── Dark overlay ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1100,
          background: "rgba(14,14,10,0.60)",
          backdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Sliding drawer ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 1200,
          width: "min(320px, 90vw)",
          background: "var(--color-card)",
          borderLeft: "1px solid var(--color-border)",
          boxShadow: "-8px 0 40px rgba(247,223,30,0.15)",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
          overflowX: "hidden",
        }}
        role="navigation"
        aria-label="JavaScript Topics Navigation"
        aria-hidden={!isOpen}
      >
        {/* ── Drawer header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.5rem",
            borderBottom: "1px solid var(--color-border)",
            background: "rgba(247,223,30,0.07)",
            flexShrink: 0,
            position: "sticky",
            top: 0,
            zIndex: 10,
            backdropFilter: "blur(10px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            {/* JS logo badge */}
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "8px",
                background: "#F7DF1E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(247,223,30,0.40)",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 900,
                  fontSize: "0.78rem",
                  color: "#323330",
                  letterSpacing: "0.02em",
                }}
              >
                JS
              </span>
            </div>
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  fontWeight: 800,
                  color: "var(--color-text)",
                  letterSpacing: "-0.01em",
                }}
              >
                JS Basic Topics
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 500,
                }}
              >
                {jsData.categories.reduce((acc, c) => acc + c.tags.length, 0)}+ topics
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close navigation"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 34,
              borderRadius: "8px",
              border: "1px solid var(--color-border)",
              background: "none",
              color: "var(--color-text-muted)",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.15s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F7DF1E";
              e.currentTarget.style.color = "#323330";
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "none";
              e.currentTarget.style.color = "";
              e.currentTarget.style.borderColor = "";
            }}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>

        {/* ── Search / Browse All hint ── */}
        <div
          style={{
            padding: "0.75rem 1.25rem",
            borderBottom: "1px solid var(--color-border)",
            flexShrink: 0,
          }}
        >
          <Link
            to="/js-basic-course/js"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.55rem 0.9rem",
              borderRadius: "8px",
              background: "rgba(247,223,30,0.10)",
              border: "1px solid rgba(247,223,30,0.25)",
              color: "#C9B800",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 700,
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#F7DF1E";
              e.currentTarget.style.color = "#323330";
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(247,223,30,0.10)";
              e.currentTarget.style.color = "#C9B800";
              e.currentTarget.style.borderColor = "rgba(247,223,30,0.25)";
            }}
          >
            <i className="bi bi-search" style={{ fontSize: "0.85rem" }} />
            Browse all topics…
          </Link>
        </div>

        {/* ── Scrollable topic list ── */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "0.5rem 0",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(247,223,30,0.25) transparent",
          }}
        >
          {jsData.categories.map((cat, catIdx) => (
            <div key={cat.name} style={{ marginBottom: "0.2rem" }}>
              {/* Category header */}
              <div
                style={{
                  padding: "0.6rem 1.25rem 0.3rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  position: "sticky",
                  top: 0,
                  background: "var(--color-card)",
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 24,
                    height: 24,
                    borderRadius: "6px",
                    background: "rgba(247,223,30,0.15)",
                    color: "#C9B800",
                    fontSize: "0.8rem",
                    flexShrink: 0,
                  }}
                >
                  <i className={CATEGORY_ICONS[cat.name] || "bi bi-code-slash"} />
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    color: "#C9B800",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {cat.name}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(247,223,30,0.15)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "var(--color-text-faint)",
                    background: "rgba(247,223,30,0.08)",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "9999px",
                    flexShrink: 0,
                  }}
                >
                  {cat.tags.length}
                </span>
              </div>

              {/* Topic links */}
              {cat.tags.map((tag) => {
                const isActive =
                  activeTopic &&
                  activeTopic.toLowerCase() === tag.name.toLowerCase();

                return (
                  <Link
                    key={tag.name}
                    to={`/js-basic-course/js/${tag.name}`}
                    onClick={onClose}
                    title={tag.description}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.44rem 1.25rem 0.44rem 1.5rem",
                      textDecoration: "none",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#323330" : "var(--color-text-muted)",
                      background: isActive
                        ? "#F7DF1E"
                        : "transparent",
                      borderRadius: isActive ? "0 8px 8px 0" : "0",
                      marginRight: "0.75rem",
                      borderLeft: isActive
                        ? "3px solid #C9B800"
                        : "3px solid transparent",
                      transition: "all 0.14s ease",
                      boxShadow: isActive
                        ? "0 2px 10px rgba(247,223,30,0.30)"
                        : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#C9B800";
                        e.currentTarget.style.background = "rgba(247,223,30,0.08)";
                        e.currentTarget.style.borderLeftColor = "rgba(247,223,30,0.35)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.background = "";
                        e.currentTarget.style.borderLeftColor = "";
                      }
                    }}
                  >
                    <span
                      style={{
                        opacity: isActive ? 0.6 : 0.35,
                        fontSize: "0.72rem",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {"{"}
                    </span>
                    <span style={{ flex: 1 }}>{tag.name}</span>
                    <span
                      style={{
                        opacity: isActive ? 0.6 : 0.35,
                        fontSize: "0.72rem",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {"}"}
                    </span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* ── Drawer footer ── */}
        <div
          style={{
            flexShrink: 0,
            borderTop: "1px solid var(--color-border)",
            padding: "1rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {/* Quick nav links */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { to: "/js-basic-course/compiler", icon: "bi bi-terminal-fill", label: "Playground" },
              { to: "/js-basic-course/resources", icon: "bi bi-journal-code", label: "Resources" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "7px",
                  background: "rgba(247,223,30,0.08)",
                  border: "1px solid rgba(247,223,30,0.20)",
                  color: "#C9B800",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F7DF1E";
                  e.currentTarget.style.color = "#323330";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(247,223,30,0.08)";
                  e.currentTarget.style.color = "#C9B800";
                  e.currentTarget.style.borderColor = "rgba(247,223,30,0.20)";
                }}
              >
                <i className={item.icon} style={{ fontSize: "0.82rem" }} />
                {item.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              margin: 0,
              fontSize: "0.68rem",
              color: "var(--color-text-faint)",
              lineHeight: 1.5,
            }}
          >
            © {new Date().getFullYear()} JS BASIC IN MY STYLE
            <br />
            Powered by TECH IN MY STYLE
          </p>
        </div>
      </nav>
    </>
  );
}
