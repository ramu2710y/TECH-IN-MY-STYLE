import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import tagData from "../data/tagData";
import HtmlNavbar, { useDarkMode } from "../components/HtmlNavbar";
import HtmlFooter from "../components/HtmlFooter";
import "../styles/HtmlReference.css";

/* ─── Helpers ──────────────────────────────────────────────────── */
function buildAllTags(categories) {
  const map = new Map();
  categories.forEach((cat) => {
    cat.tags.forEach((tag) => {
      if (!map.has(tag.name)) {
        map.set(tag.name, { ...tag, categories: [cat.name] });
      } else {
        map.get(tag.name).categories.push(cat.name);
      }
    });
  });
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}

/* Group alphabetical tags by first letter */
function groupByLetter(tags) {
  const groups = {};
  tags.forEach((tag) => {
    const letter = tag.name[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(tag);
  });
  return groups;
}

/* Category accent colours — cycles through brand palette */
const CAT_COLORS = [
  "#E34F26",
  "#F16529",
  "#C73E1D",
  "#FF7043",
  "#E34F26",
  "#F16529",
  "#C73E1D",
  "#FF7043",
  "#E34F26",
  "#F16529",
  "#C73E1D",
  "#FF7043",
];

/* ─── Component ─────────────────────────────────────────────────── */
export default function HtmlReference() {
  const navigate = useNavigate();
  const { dark } = useDarkMode();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState("categories"); // 'categories' | 'alpha'
  const [showBackTop, setShowBackTop] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const searchRef = useRef(null);

  const allTags = buildAllTags(tagData.categories);
  const lower = searchTerm.trim().toLowerCase();

  const filteredCategories = tagData.categories
    .map((cat) => ({
      ...cat,
      tags: cat.tags.filter((t) => t.name.toLowerCase().includes(lower)),
    }))
    .filter((cat) => cat.tags.length > 0);

  const filteredAlpha = allTags.filter((t) =>
    t.name.toLowerCase().includes(lower),
  );
  const groupedAlpha = groupByLetter(filteredAlpha);
  const letters = Object.keys(groupedAlpha).sort();

  /* Back-to-top */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 350);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* When searching, auto-switch to whichever view has results */
  useEffect(() => {
    if (!lower) return;
    if (filteredCategories.length === 0 && filteredAlpha.length > 0) {
      setActiveView("alpha");
    }
  }, [lower]);

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const totalTags = allTags.length;
  const totalCategories = tagData.categories.length;

  return (
    <div className={`hx${dark ? " hx--dark" : ""}`}>

      <main id="main-content">
        {/* ══════════ HERO ══════════ */}
        <section
          className={`hx-hero${heroVisible ? " hx-hero--in" : ""}`}
          aria-label="HTML Tag Explorer header"
        >
          {/* Decorative background blobs */}
          <span className="hx-hero__blob hx-hero__blob--a" aria-hidden="true" />
          <span className="hx-hero__blob hx-hero__blob--b" aria-hidden="true" />
          <span className="hx-hero__blob hx-hero__blob--c" aria-hidden="true" />

          <div className="hx-hero__inner">
            {/* Breadcrumb */}
            <nav className="hx-breadcrumb" aria-label="Breadcrumb">
              <button
                className="hx-breadcrumb__btn"
                onClick={() => navigate("/html-course")}
                aria-label="Go to Home"
              >
                <i className="bi bi-house-door-fill" aria-hidden="true" />
                Home
              </button>
              <i
                className="bi bi-chevron-right hx-breadcrumb__sep"
                aria-hidden="true"
              />
              <span className="hx-breadcrumb__current">HTML5 Reference</span>
            </nav>

            {/* Heading */}
            <div className="hx-hero__badge">
              <i className="bi bi-code-slash" />
              <span>Complete Reference</span>
            </div>
            <h1 className="hx-hero__title">
              HTML5 Tag <span className="hx-hero__title-accent">Explorer</span>
            </h1>
            <p className="hx-hero__desc">
              Browse all <strong>{totalTags}</strong> HTML5 tags across{" "}
              <strong>{totalCategories}</strong> categories. Click any tag to
              see an interactive code example and live preview.
            </p>

            {/* Search */}
            <div
              className="hx-search"
              role="search"
              aria-label="Search HTML tags"
            >
              <i className="bi bi-search hx-search__icon" aria-hidden="true" />
              <input
                ref={searchRef}
                type="search"
                className="hx-search__input"
                placeholder="Search HTML tags… e.g. div, form, table"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search HTML tags"
                autoComplete="off"
                spellCheck="false"
              />
              {searchTerm && (
                <button
                  className="hx-search__clear"
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

            {/* Quick stats row */}
            <div className="hx-hero__stats" aria-label="Explorer statistics">
              <div className="hx-hero__stat">
                <i className="bi bi-tags-fill" />
                <strong>{totalTags}</strong> Tags
              </div>
              <div className="hx-hero__stat-sep" aria-hidden="true" />
              <div className="hx-hero__stat">
                <i className="bi bi-grid-fill" />
                <strong>{totalCategories}</strong> Categories
              </div>
              <div className="hx-hero__stat-sep" aria-hidden="true" />
              <div className="hx-hero__stat">
                <i className="bi bi-eye-fill" />
                Live Preview
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ INTRO CARDS (only when not searching) ══════════ */}
        {!lower && (
          <section className="hx-intro" aria-label="Quick navigation">
            <div className="hx-container">
              <div className="hx-intro__grid">
                <div
                  className="hx-intro__card"
                  onClick={() => {
                    setActiveView("categories");
                    scrollToSection("categories");
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && scrollToSection("categories")
                  }
                >
                  <div className="hx-intro__card-icon">
                    <i className="bi bi-grid-3x3-gap-fill" />
                  </div>
                  <div className="hx-intro__card-body">
                    <h3>Browse by Category</h3>
                    <p>
                      Tags grouped by their purpose — structure, forms, media,
                      metadata, and more.
                    </p>
                  </div>
                  <i
                    className="bi bi-arrow-right hx-intro__card-arrow"
                    aria-hidden="true"
                  />
                </div>

                <div
                  className="hx-intro__card"
                  onClick={() => {
                    setActiveView("alpha");
                    scrollToSection("alphabetical");
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && scrollToSection("alphabetical")
                  }
                >
                  <div className="hx-intro__card-icon">
                    <i className="bi bi-sort-alpha-down" />
                  </div>
                  <div className="hx-intro__card-body">
                    <h3>Browse A–Z</h3>
                    <p>
                      Complete alphabetical listing of all {totalTags} HTML5
                      tags for quick lookup.
                    </p>
                  </div>
                  <i
                    className="bi bi-arrow-right hx-intro__card-arrow"
                    aria-hidden="true"
                  />
                </div>

                <Link className="hx-intro__card" to="/html-course/compiler">
                  <div className="hx-intro__card-icon">
                    <i className="bi bi-terminal-fill" />
                  </div>
                  <div className="hx-intro__card-body">
                    <h3>Try Playground</h3>
                    <p>
                      Write and test HTML, CSS, and JavaScript live in our
                      in-browser editor.
                    </p>
                  </div>
                  <i
                    className="bi bi-arrow-right hx-intro__card-arrow"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ══════════ VIEW TOGGLE ══════════ */}
        {!lower && (
          <div className="hx-toggle-bar">
            <div className="hx-container">
              <div
                className="hx-toggle"
                role="tablist"
                aria-label="View switcher"
              >
                <button
                  className={`hx-toggle__btn${activeView === "categories" ? " hx-toggle__btn--active" : ""}`}
                  role="tab"
                  aria-selected={activeView === "categories"}
                  onClick={() => {
                    setActiveView("categories");
                    scrollToSection("categories");
                  }}
                >
                  <i className="bi bi-grid-fill" aria-hidden="true" />
                  Categories
                </button>
                <button
                  className={`hx-toggle__btn${activeView === "alpha" ? " hx-toggle__btn--active" : ""}`}
                  role="tab"
                  aria-selected={activeView === "alpha"}
                  onClick={() => {
                    setActiveView("alpha");
                    scrollToSection("alphabetical");
                  }}
                >
                  <i className="bi bi-sort-alpha-down" aria-hidden="true" />
                  Alphabetical
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ══════════ SEARCH RESULT SUMMARY ══════════ */}
        {lower && (
          <div className="hx-search-summary" aria-live="polite" role="status">
            <div className="hx-container">
              <p>
                <i className="bi bi-search" aria-hidden="true" />
                Found <strong>{filteredAlpha.length}</strong> tag
                {filteredAlpha.length !== 1 ? "s" : ""} matching{" "}
                <em>"{searchTerm}"</em>
                {filteredAlpha.length === 0 && <> — try a different keyword</>}
              </p>
              <button
                className="hx-search-summary__clear"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <i className="bi bi-x-circle-fill" />
                Clear search
              </button>
            </div>
          </div>
        )}

        {/* ══════════ CATEGORIES ══════════ */}
        {(activeView === "categories" || lower) && (
          <section
            className="hx-section"
            id="categories"
            aria-labelledby="cat-heading"
          >
            <div className="hx-container">
              <div className="hx-section__header">
                <div className="hx-section__header-left">
                  <h2 className="hx-section__title" id="cat-heading">
                    <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
                    {lower
                      ? `Categories matching "${searchTerm}"`
                      : "HTML5 Tags by Category"}
                  </h2>
                  <p className="hx-section__desc">
                    Tags are grouped by their primary function and purpose in
                    HTML documents.
                  </p>
                </div>
                {!lower && (
                  <span className="hx-section__count">
                    {totalCategories} categories
                  </span>
                )}
              </div>

              {filteredCategories.length === 0 ? (
                <div className="hx-empty">
                  <i
                    className="bi bi-search hx-empty__icon"
                    aria-hidden="true"
                  />
                  <p>
                    No categories match <strong>"{searchTerm}"</strong>
                  </p>
                  <button
                    className="hx-empty__btn"
                    onClick={() => setSearchTerm("")}
                  >
                    <i className="bi bi-arrow-counterclockwise" />
                    Reset search
                  </button>
                </div>
              ) : (
                <div className="hx-cat-grid">
                  {filteredCategories.map((cat, idx) => (
                    <article
                      key={cat.name}
                      className="hx-cat-card"
                      style={{
                        "--cat-color": CAT_COLORS[idx % CAT_COLORS.length],
                        animationDelay: `${idx * 0.06}s`,
                      }}
                    >
                      <div className="hx-cat-card__head">
                        <div
                          className="hx-cat-card__icon-wrap"
                          aria-hidden="true"
                        >
                          <i className="bi bi-folder2-open" />
                        </div>
                        <div>
                          <h3 className="hx-cat-card__name">{cat.name}</h3>
                          {cat.description && (
                            <p className="hx-cat-card__desc">
                              {cat.description}
                            </p>
                          )}
                        </div>
                        <span className="hx-cat-card__count">
                          {cat.tags.length}
                        </span>
                      </div>
                      <ul className="hx-cat-card__tags" role="list">
                        {cat.tags.map((tag) => (
                          <li key={tag.name}>
                            <Link
                              to={`/html-course/tag/${tag.name}`}
                              className="hx-tag-chip"
                              title={tag.description}
                              aria-label={`<${tag.name}> — ${tag.description || ""}`}
                            >
                              <span className="hx-tag-chip__angle">&lt;</span>
                              {tag.name}
                              <span className="hx-tag-chip__angle">&gt;</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ══════════ ALPHABETICAL ══════════ */}
        {(activeView === "alpha" || lower) && (
          <section
            className="hx-section hx-section--alt"
            id="alphabetical"
            aria-labelledby="alpha-heading"
          >
            <div className="hx-container">
              <div className="hx-section__header">
                <div className="hx-section__header-left">
                  <h2 className="hx-section__title" id="alpha-heading">
                    <i className="bi bi-sort-alpha-down" aria-hidden="true" />
                    {lower
                      ? `Tags matching "${searchTerm}"`
                      : "All HTML5 Tags — A to Z"}
                  </h2>
                  <p className="hx-section__desc">
                    Complete list of all HTML5 tags arranged alphabetically.
                    Click any tag to open its reference.
                  </p>
                </div>
                {!lower && (
                  <span className="hx-section__count">
                    {totalTags} tags total
                  </span>
                )}
              </div>

              {filteredAlpha.length === 0 ? (
                <div className="hx-empty">
                  <i
                    className="bi bi-search hx-empty__icon"
                    aria-hidden="true"
                  />
                  <p>
                    No tags match <strong>"{searchTerm}"</strong>
                  </p>
                  <button
                    className="hx-empty__btn"
                    onClick={() => setSearchTerm("")}
                  >
                    <i className="bi bi-arrow-counterclockwise" />
                    Reset search
                  </button>
                </div>
              ) : lower ? (
                /* Flat grid when searching */
                <ul className="hx-alpha-flat" role="list">
                  {filteredAlpha.map((tag) => (
                    <li key={tag.name}>
                      <Link
                        to={`/html-course/tag/${tag.name}`}
                        className="hx-alpha-chip"
                        title={tag.description}
                      >
                        <span className="hx-alpha-chip__bracket">&lt;</span>
                        {tag.name}
                        <span className="hx-alpha-chip__bracket">&gt;</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                /* Letter-grouped layout */
                <div className="hx-alpha-groups">
                  {/* Letter jump bar */}
                  <nav className="hx-letter-nav" aria-label="Jump to letter">
                    {letters.map((l) => (
                      <button
                        key={l}
                        className="hx-letter-nav__btn"
                        onClick={() => scrollToSection(`letter-${l}`)}
                        aria-label={`Jump to letter ${l}`}
                      >
                        {l}
                      </button>
                    ))}
                  </nav>

                  {letters.map((letter) => (
                    <div
                      key={letter}
                      className="hx-alpha-group"
                      id={`letter-${letter}`}
                    >
                      <div
                        className="hx-alpha-group__letter"
                        aria-hidden="true"
                      >
                        {letter}
                      </div>
                      <ul className="hx-alpha-flat" role="list">
                        {groupedAlpha[letter].map((tag) => (
                          <li key={tag.name}>
                            <Link
                              to={`/html-course/tag/${tag.name}`}
                              className="hx-alpha-chip"
                              title={tag.description}
                            >
                              <span className="hx-alpha-chip__bracket">
                                &lt;
                              </span>
                              {tag.name}
                              <span className="hx-alpha-chip__bracket">
                                &gt;
                              </span>
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

        {/* ══════════ CTA STRIP ══════════ */}
        {!lower && (
          <section className="hx-cta" aria-label="Get started">
            <div className="hx-container">
              <div className="hx-cta__inner">
                <div className="hx-cta__icon" aria-hidden="true">
                  <i className="bi bi-lightning-charge-fill" />
                </div>
                <div className="hx-cta__text">
                  <h3>Ready to start coding?</h3>
                  <p>
                    Open the playground and experiment with any HTML tag right
                    in your browser.
                  </p>
                </div>
                <div className="hx-cta__actions">
                  <Link
                    to="/html-course/compiler"
                    className="hx-cta__btn hx-cta__btn--primary"
                  >
                    <i className="bi bi-terminal-fill" />
                    Open Playground
                  </Link>
                  <Link to="/html-course" className="hx-cta__btn hx-cta__btn--ghost">
                    <i className="bi bi-house-door-fill" />
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Back to top */}
      <button
        className={`hx-back-top${showBackTop ? " hx-back-top--visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        type="button"
      >
        <i className="bi bi-arrow-up" aria-hidden="true" />
      </button>
    </div>
  );
}
