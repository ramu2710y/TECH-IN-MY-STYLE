import { useParams, Link } from "react-router-dom";

const propertySeries = [
  {
    letter: "A",
    properties: [
      "align-content",
      "align-items",
      "align-self",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "appearance",
      "aspect-ratio",
      "attribute-selectors",
    ],
  },
  {
    letter: "B",
    properties: [
      "backdrop-filter",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-bottom",
      "border-collapse",
      "border-color",
      "border-left",
      "border-radius",
      "border-right",
      "border-spacing",
      "border-style",
      "border-top",
      "border-width",
      "box-shadow",
      "box-sizing",
    ],
  },
  {
    letter: "C",
    properties: [
      "calc()",
      "caption-side",
      "clamp()",
      "clip-path",
      "color",
      "column-gap",
      "combinators",
      "contain",
      "content",
      "counter-increment",
      "counter-reset",
      "cursor",
      "custom-properties",
    ],
  },
  {
    letter: "D",
    properties: [
      "direction",
      "display",
    ],
  },
  {
    letter: "E",
    properties: [
      "empty-cells",
      "env()",
    ],
  },
  {
    letter: "F",
    properties: [
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "flexbox",
      "float",
      "font",
      "font-family",
      "font-size",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
    ],
  },
  {
    letter: "G",
    properties: [
      "gap",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-gap",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-gap",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
    ],
  },
  {
    letter: "H",
    properties: [
      "height",
    ],
  },
  {
    letter: "I",
    properties: [
      "inset",
      "isolation",
    ],
  },
  {
    letter: "J",
    properties: [
      "justify-content",
      "justify-items",
      "justify-self",
    ],
  },
  {
    letter: "L",
    properties: [
      "left",
      "letter-spacing",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
    ],
  },
  {
    letter: "M",
    properties: [
      "margin",
      "margin-bottom",
      "margin-left",
      "margin-right",
      "margin-top",
      "mask",
      "mask-image",
      "max-height",
      "max-width",
      "media-queries",
      "min-height",
      "min-width",
      "min()",
      "max()",
      "mix-blend-mode",
    ],
  },
  {
    letter: "O",
    properties: [
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-x",
      "overflow-y",
    ],
  },
  {
    letter: "P",
    properties: [
      "padding",
      "padding-bottom",
      "padding-left",
      "padding-right",
      "padding-top",
      "perspective",
      "perspective-origin",
      "place-content",
      "place-items",
      "place-self",
      "pointer-events",
      "position",
      "print-color-adjust",
      "pseudo-classes",
      "pseudo-elements",
    ],
  },
  {
    letter: "R",
    properties: [
      "resize",
      "rotate",
      "row-gap",
    ],
  },
  {
    letter: "S",
    properties: [
      "scale",
      "scroll-behavior",
      "scroll-snap-align",
      "scroll-snap-type",
    ],
  },
  {
    letter: "T",
    properties: [
      "table-layout",
      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-shadow",
      "text-transform",
      "top",
      "transform",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "translate",
    ],
  },
  {
    letter: "U",
    properties: [
      "user-select",
    ],
  },
  {
    letter: "V",
    properties: [
      "var()",
      "vertical-align",
      "visibility",
    ],
  },
  {
    letter: "W",
    properties: [
      "white-space",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
    ],
  },
  {
    letter: "Z",
    properties: [
      "z-index",
    ],
  },
];

export default function CssNavMenu({ isOpen, onClose }) {
  const { property: activeProperty } = useParams();

  return (
    <>
      {/* ── Dark overlay ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1100,
          background: "rgba(8,12,26,0.55)",
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
          width: "min(320px, 88vw)",
          background: "var(--color-card)",
          borderLeft: "1px solid var(--color-border)",
          boxShadow: "-8px 0 40px rgba(38,77,228,0.18)",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
          overflowX: "hidden",
        }}
        role="navigation"
        aria-label="CSS Properties Navigation"
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
            background:
              "linear-gradient(135deg, rgba(38,77,228,0.08), rgba(41,101,241,0.04))",
            flexShrink: 0,
            position: "sticky",
            top: 0,
            zIndex: 10,
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            {/* CSS icon */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                background: "linear-gradient(135deg, #264de4, #2965f1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 900,
                  fontSize: "0.72rem",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                CSS
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
                CSS Properties
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.72rem",
                  color: "var(--color-text-muted)",
                  fontWeight: 500,
                }}
              >
                A – Z Reference
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
              e.currentTarget.style.background =
                "linear-gradient(135deg,#264de4,#2965f1)";
              e.currentTarget.style.color = "#fff";
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

        {/* ── Search hint ── */}
        <div
          style={{
            padding: "0.75rem 1.25rem",
            borderBottom: "1px solid var(--color-border)",
            flexShrink: 0,
          }}
        >
          <Link
            to="/css-course/reference"
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.55rem 0.9rem",
              borderRadius: "8px",
              background: "rgba(38,77,228,0.07)",
              border: "1px solid rgba(38,77,228,0.15)",
              color: "#264de4",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 700,
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#264de4";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "transparent";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(38,77,228,0.07)";
              e.currentTarget.style.color = "#264de4";
              e.currentTarget.style.borderColor = "rgba(38,77,228,0.15)";
            }}
          >
            <i className="bi bi-search" style={{ fontSize: "0.85rem" }} />
            Search all properties…
          </Link>
        </div>

        {/* ── Scrollable property list ── */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "0.75rem 0",
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(38,77,228,0.2) transparent",
          }}
        >
          {propertySeries.map((series) => (
            <div key={series.letter} style={{ marginBottom: "0.25rem" }}>
              {/* Letter header */}
              <div
                style={{
                  padding: "0.5rem 1.25rem 0.3rem",
                  fontSize: "0.7rem",
                  fontWeight: 900,
                  color: "#264de4",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
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
                    width: 22,
                    height: 22,
                    borderRadius: "6px",
                    background: "rgba(38,77,228,0.12)",
                    fontSize: "0.72rem",
                    fontWeight: 900,
                  }}
                >
                  {series.letter}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background: "rgba(38,77,228,0.12)",
                  }}
                />
              </div>

              {/* Property links */}
              {series.properties.map((prop) => {
                const isActive =
                  activeProperty &&
                  activeProperty.toLowerCase() === prop.toLowerCase();

                return (
                  <Link
                    key={prop}
                    to={`/css-course/property/${prop}`}
                    onClick={onClose}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.48rem 1.25rem 0.48rem 1.5rem",
                      textDecoration: "none",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.8rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#fff" : "var(--color-text-muted)",
                      background: isActive
                        ? "linear-gradient(135deg,#264de4,#2965f1)"
                        : "transparent",
                      borderRadius: isActive ? "0 8px 8px 0" : "0",
                      marginRight: "0.75rem",
                      borderLeft: isActive
                        ? "3px solid #42a1d0"
                        : "3px solid transparent",
                      transition: "all 0.14s ease",
                      boxShadow: isActive
                        ? "0 3px 10px rgba(38,77,228,0.25)"
                        : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#264de4";
                        e.currentTarget.style.background =
                          "rgba(38,77,228,0.07)";
                        e.currentTarget.style.borderLeftColor =
                          "rgba(38,77,228,0.3)";
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
                    {/* Bracket decorators */}
                    <span
                      style={{
                        opacity: isActive ? 0.7 : 0.4,
                        fontSize: "0.75rem",
                      }}
                    >
                      {"{"}
                    </span>
                    <span style={{ flex: 1 }}>{prop}</span>
                    <span
                      style={{
                        opacity: isActive ? 0.7 : 0.4,
                        fontSize: "0.75rem",
                      }}
                    >
                      {"}"}
                    </span>
                    {/* Live demo indicator */}
                    {(prop === "flexbox" ||
                      prop === "grid" ||
                      prop === "animation") && (
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: isActive ? "#fff" : "#264de4",
                          flexShrink: 0,
                          boxShadow: isActive
                            ? "0 0 6px rgba(255,255,255,0.8)"
                            : "0 0 5px rgba(38,77,228,0.6)",
                        }}
                        title="Live interactive demo"
                      />
                    )}
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
          {/* Live demo links */}
          <p
            style={{
              margin: 0,
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "var(--color-text-faint)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Interactive demos
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { to: "/css-course/property/flexbox", label: "Flexbox", icon: "bi bi-layout-wtf" },
              { to: "/css-course/property/grid", label: "Grid", icon: "bi bi-grid-3x3-gap-fill" },
              {
                to: "/css-course/property/animation",
                label: "Animation",
                icon: "bi bi-play-circle-fill",
              },
            ].map((demo) => (
              <Link
                key={demo.to}
                to={demo.to}
                onClick={onClose}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.75rem",
                  borderRadius: "7px",
                  background: "rgba(38,77,228,0.08)",
                  border: "1px solid rgba(38,77,228,0.18)",
                  color: "#264de4",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#264de4";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(38,77,228,0.08)";
                  e.currentTarget.style.color = "#264de4";
                  e.currentTarget.style.borderColor = "rgba(38,77,228,0.18)";
                }}
              >
                <i className={demo.icon} style={{ fontSize: "0.82rem" }} />
                {demo.label}
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
            © {new Date().getFullYear()} CSS IN MY STYLE
            <br />
            Powered by TECH IN MY STYLE
          </p>
        </div>
      </nav>
    </>
  );
}
