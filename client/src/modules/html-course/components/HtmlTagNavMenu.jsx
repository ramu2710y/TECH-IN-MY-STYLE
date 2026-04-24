import { useParams, Link } from "react-router-dom";

const tagSeries = [
  {
    letter: "A",
    tags: ["a", "abbr", "address", "article", "aside", "audio"],
  },
  {
    letter: "B",
    tags: ["b", "base", "bdi", "bdo", "blockquote", "button"],
  },
  {
    letter: "C",
    tags: ["canvas", "caption", "cite", "code", "col"],
  },
  {
    letter: "D",
    tags: ["data", "datalist", "del", "details", "dfn", "dialog", "div"],
  },
  {
    letter: "E",
    tags: ["em", "embed"],
  },
  {
    letter: "F",
    tags: ["fieldset", "figcaption", "figure", "footer", "form"],
  },
  {
    letter: "H",
    tags: ["h1-h6", "header", "hgroup"],
  },
  {
    letter: "I",
    tags: ["i", "iframe", "img", "input", "ins"],
  },
  {
    letter: "K",
    tags: ["kbd"],
  },
  {
    letter: "L",
    tags: ["label", "legend", "li", "link"],
  },
  {
    letter: "M",
    tags: ["main", "mark", "meta", "meter"],
  },
  {
    letter: "N",
    tags: ["nav"],
  },
  {
    letter: "O",
    tags: ["object", "ol", "optgroup", "option", "output"],
  },
  {
    letter: "P",
    tags: ["p", "param", "picture", "pre", "progress"],
  },
  {
    letter: "Q",
    tags: ["q"],
  },
  {
    letter: "S",
    tags: [
      "s",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "svg",
    ],
  },
  {
    letter: "T",
    tags: [
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
    ],
  },
  {
    letter: "U",
    tags: ["u", "ul"],
  },
  {
    letter: "V",
    tags: ["var", "video"],
  },
  {
    letter: "W",
    tags: ["wbr"],
  },
];

export default function HtmlTagNavMenu({ isOpen, onClose }) {
  const { tag: activeTag } = useParams();

  return (
    <>
      {/* Dark overlay behind the drawer */}
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sliding drawer */}
      <div
        className={`nav-menu ${isOpen ? "open" : ""}`}
        role="navigation"
        aria-label="HTML Tags Navigation"
      >
        {/* ── Drawer header ── */}
        <div className="nav-menu-header">
          <h2>⟨/⟩ &nbsp;A – Z HTML Tags</h2>
          <button
            className="nav-close-btn"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* ── Scrollable tag list ── */}
        <div className="nav-menu-body">
          {tagSeries.map((series) => (
            <div key={series.letter} className="nav-series-group">
              {/* Letter header, e.g.  ── A ────────── */}
              <div className="nav-series-label">{series.letter}</div>

              {/* One tag per line */}
              {series.tags.map((tag) => {
                const isActive =
                  activeTag && activeTag.toLowerCase() === tag.toLowerCase();
                return (
                  <Link
                    key={tag}
                    to={`/html-course/tag/${tag}`}
                    onClick={onClose}
                    className={`nav-tag-link${isActive ? " active-tag" : ""}`}
                  >
                    <span className="nav-tag-bracket">&lt;</span>
                    {tag}
                    <span className="nav-tag-bracket">&gt;</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
