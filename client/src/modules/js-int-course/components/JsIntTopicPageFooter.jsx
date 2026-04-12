import { Link, useParams, useNavigate } from 'react-router-dom'
import { getAllTopics } from '../data/jsIntData'
import '../styles/JsIntTopicPageFooter.css'

export default function JsIntTopicPageFooter() {
  const { topic } = useParams()
  const navigate = useNavigate()
  const allTopics = getAllTopics()

  const idx = allTopics.findIndex((t) => t.name === topic)
  const prev = idx > 0 ? allTopics[idx - 1] : null
  const next = idx < allTopics.length - 1 ? allTopics[idx + 1] : null

  return (
    <footer className="topic-page-footer">

      {/* ── Prev / Next navigation ─────────────────────────────── */}
      <nav className="topic-footer-nav" aria-label="Topic page navigation">

        {/* Previous button */}
        {prev ? (
          <button
            className="topic-footer-btn topic-footer-prev"
            onClick={() => navigate(`/js-int-course/js-int/${prev.name}`)}
            aria-label={`Previous topic: ${prev.name}`}
          >
            <i className="bi bi-arrow-left topic-footer-btn-icon" aria-hidden="true" />
            <span className="topic-footer-btn-content">
              <span className="topic-footer-btn-label">Previous</span>
              <span className="topic-footer-btn-name">{prev.name}</span>
              <span className="topic-footer-btn-category">{prev.category}</span>
            </span>
          </button>
        ) : (
          /* Empty placeholder keeps layout balanced */
          <div className="topic-footer-btn-placeholder" aria-hidden="true" />
        )}

        {/* Next button */}
        {next ? (
          <button
            className="topic-footer-btn topic-footer-next"
            onClick={() => navigate(`/js-int-course/js-int/${next.name}`)}
            aria-label={`Next topic: ${next.name}`}
          >
            <span className="topic-footer-btn-content topic-footer-btn-content--right">
              <span className="topic-footer-btn-label">Next</span>
              <span className="topic-footer-btn-name">{next.name}</span>
              <span className="topic-footer-btn-category">{next.category}</span>
            </span>
            <i className="bi bi-arrow-right topic-footer-btn-icon" aria-hidden="true" />
          </button>
        ) : (
          <div className="topic-footer-btn-placeholder" aria-hidden="true" />
        )}

      </nav>

      {/* ── Progress indicator ─────────────────────────────────── */}
      {idx !== -1 && (
        <div className="topic-footer-progress-wrap" aria-label="Course progress">
          <div className="topic-footer-progress-bar">
            <div
              className="topic-footer-progress-fill"
              style={{
                width: `${Math.round(((idx + 1) / allTopics.length) * 100)}%`,
              }}
            />
          </div>
          <span className="topic-footer-progress-text">
            <i className="bi bi-check2-circle" aria-hidden="true" />
            Topic {idx + 1} of {allTopics.length}
          </span>
        </div>
      )}

      {/* ── Back to all topics ─────────────────────────────────── */}
      <div className="topic-footer-back-wrap">
        <Link to="/js-int-course/js-int" className="topic-footer-back">
          <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
          <span>Back to All Topics</span>
        </Link>
      </div>

      {/* ── Divider ────────────────────────────────────────────── */}
      <div className="topic-footer-divider" role="separator" />

      {/* ── Social links ───────────────────────────────────────── */}
      <div className="topic-footer-social" role="list" aria-label="Follow us">

        <a
          href="https://t.me/techInMyStyle"
          target="_blank"
          rel="noopener noreferrer"
          className="topic-footer-social-link"
          aria-label="Follow on Telegram"
          role="listitem"
        >
          <i className="bi bi-telegram" aria-hidden="true" />
        </a>

        <a
          href="https://instagram.com/techInMyStyle"
          target="_blank"
          rel="noopener noreferrer"
          className="topic-footer-social-link"
          aria-label="Follow on Instagram"
          role="listitem"
        >
          <i className="bi bi-instagram" aria-hidden="true" />
        </a>

        <a
          href="https://youtube.com/@techInMyStyle"
          target="_blank"
          rel="noopener noreferrer"
          className="topic-footer-social-link"
          aria-label="Subscribe on YouTube"
          role="listitem"
        >
          <i className="bi bi-youtube" aria-hidden="true" />
        </a>

      </div>

      {/* ── Copyright ──────────────────────────────────────────── */}
      <p className="topic-footer-copy">
        <i className="bi bi-c-circle" aria-hidden="true" />
        {new Date().getFullYear()} Tech In My Style. All rights reserved.
      </p>

    </footer>
  )
}
