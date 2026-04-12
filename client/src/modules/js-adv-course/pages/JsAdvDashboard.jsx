import { useState, useEffect, useCallback, useRef } from 'react'
import JsAdvNavbar, { useDarkMode } from '../components/JsAdvNavbar'
import JsAdvFooter from '../components/JsAdvFooter'
import { Link } from 'react-router-dom'
import JsAdvTopicsData from '../data/JsAdvTopicsData'
import '../styles/JsAdvDashboard.css'

// ─── Constants ────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'js-adv-progress'
const STREAK_KEY  = 'js-adv-streak'

const QUOTES = [
  {
    text: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "JavaScript is the duct tape of the internet.",
    author: "Charlie Campbell",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
]

const ACHIEVEMENTS = [
  {
    id:          'first-steps',
    icon:        '🚀',
    title:       'First Steps',
    description: 'Complete your first topic',
    threshold:   1,
    color:       '#06b6d4',
  },
  {
    id:          'getting-started',
    icon:        '🔥',
    title:       'Getting Started',
    description: 'Complete 5 topics',
    threshold:   5,
    color:       '#f97316',
  },
  {
    id:          'halfway',
    icon:        '⚡',
    title:       'Halfway There',
    description: 'Complete 27 topics',
    threshold:   27,
    color:       '#06b6d4',
  },
  {
    id:          'almost-there',
    icon:        '💎',
    title:       'Almost There',
    description: 'Complete 45 topics',
    threshold:   45,
    color:       '#8b5cf6',
  },
  {
    id:          'js-master',
    icon:        '👑',
    title:       'JavaScript Master',
    description: 'Complete all 54 topics',
    threshold:   54,
    color:       '#10b981',
  },
]

const DIFF_COLOR = {
  Beginner:     '#10b981',
  Intermediate: '#06b6d4',
  Advanced:     '#f97316',
  Expert:       '#8b5cf6',
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

function saveProgress(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

function loadStreak() {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"streak":7,"lastDate":null}')
  } catch {
    return { streak: 7, lastDate: null }
  }
}

// Flatten all topics from JsAdvTopicsData
function getAllTopics() {
  return JsAdvTopicsData.flatMap((cat) =>
    cat.topics.map((t) => ({ ...t, categoryId: cat.id, categoryTitle: cat.title, categoryColor: cat.color }))
  )
}

// ─── SVG Progress Ring ────────────────────────────────────────────────────────

function ProgressRing({ percent, size = 160, stroke = 12, color = '#06b6d4' }) {
  const radius = (size - stroke) / 2
  const circ   = 2 * Math.PI * radius
  const offset = circ - (percent / 100) * circ

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="progress-ring"
      aria-label={`${percent}% complete`}
      role="img"
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth={stroke}
      />
      {/* Progress arc */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
      {/* Glow filter */}
      <defs>
        <filter id="ring-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Center text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize={size * 0.18}
        fontWeight="800"
        fontFamily="'Inter', sans-serif"
      >
        {percent}%
      </text>
    </svg>
  )
}

// ─── Category Progress Bar ────────────────────────────────────────────────────

function CategoryBar({ category, completed }) {
  const total       = category.topics.length
  const doneCount   = category.topics.filter((t) => completed.includes(t.id)).length
  const pct         = total > 0 ? Math.round((doneCount / total) * 100) : 0

  return (
    <div className="dash-cat-bar">
      <div className="dash-cat-bar__header">
        <div className="dash-cat-bar__left">
          <i className={category.icon} style={{ color: category.color }} />
          <span className="dash-cat-bar__title">{category.title}</span>
        </div>
        <span className="dash-cat-bar__count">
          {doneCount}/{total}
        </span>
      </div>
      <div className="dash-cat-bar__track">
        <div
          className="dash-cat-bar__fill"
          style={{ width: `${pct}%`, background: category.color }}
        />
      </div>
      <span className="dash-cat-bar__pct">{pct}%</span>
    </div>
  )
}

// ─── Achievement Badge ────────────────────────────────────────────────────────

function AchievementBadge({ achievement, completedCount }) {
  const unlocked = completedCount >= achievement.threshold
  return (
    <div
      className={`dash-achievement${unlocked ? ' dash-achievement--unlocked' : ' dash-achievement--locked'}`}
      style={unlocked ? { '--ach-color': achievement.color } : {}}
      title={unlocked ? `Unlocked! ${achievement.description}` : `${achievement.description} (${completedCount}/${achievement.threshold})`}
    >
      <div className="dash-achievement__icon">
        {unlocked ? achievement.icon : '🔒'}
      </div>
      <div className="dash-achievement__body">
        <span className="dash-achievement__title">{achievement.title}</span>
        <span className="dash-achievement__desc">{achievement.description}</span>
      </div>
      {unlocked && (
        <div className="dash-achievement__shine" />
      )}
    </div>
  )
}

// ─── Main JsAdvDashboard ───────────────────────────────────────────────────────────

export default function JsAdvDashboard() {
  const { isDark } = useDarkMode()

  // ── State ──────────────────────────────────────────────────────────────────
  const [completed,     setCompleted]     = useState(loadProgress)
  const [quoteIndex,    setQuoteIndex]    = useState(0)
  const [showReset,     setShowReset]     = useState(false)
  const [resetDone,     setResetDone]     = useState(false)
  const [expandedCats,  setExpandedCats]  = useState({})
  const [filterDiff,    setFilterDiff]    = useState('All')
  const [filterStatus,  setFilterStatus]  = useState('All')
  const streakData = loadStreak()

  const allTopics   = getAllTopics()
  const totalTopics = allTopics.length

  // ── Persist on change ──────────────────────────────────────────────────────
  useEffect(() => {
    saveProgress(completed)
  }, [completed])

  // ── Quote rotation ─────────────────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % QUOTES.length)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  // ── Toggle topic ───────────────────────────────────────────────────────────
  const toggleTopic = useCallback((topicId) => {
    setCompleted((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    )
  }, [])

  // ── Reset progress ─────────────────────────────────────────────────────────
  const handleReset = () => {
    setCompleted([])
    setShowReset(false)
    setResetDone(true)
    setTimeout(() => setResetDone(false), 3000)
  }

  // ── Toggle category expand ─────────────────────────────────────────────────
  const toggleCat = (catId) => {
    setExpandedCats((prev) => ({ ...prev, [catId]: !prev[catId] }))
  }

  // ── Stats ──────────────────────────────────────────────────────────────────
  const completedCount = completed.length
  const overallPct     = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0
  const inProgress     = Math.max(0, completedCount > 0 ? Math.min(completedCount, 3) : 0)

  // ── Filter topics per category ─────────────────────────────────────────────
  const getFilteredTopics = (topics) =>
    topics.filter((t) => {
      const diffOk =
        filterDiff === 'All' || t.difficulty === filterDiff
      const statusOk =
        filterStatus === 'All' ||
        (filterStatus === 'Completed' && completed.includes(t.id)) ||
        (filterStatus === 'Incomplete' && !completed.includes(t.id))
      return diffOk && statusOk
    })

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className={`dash-page${isDark ? ' dark' : ''}`}>
      <JsAdvNavbar />

      {/* ── Hero / Stats Bar ──────────────────────────────────────────────── */}
      <section className="dash-hero">
        <div className="dash-hero__glow" />
        <div className="dash-hero__content">
          <div className="dash-hero__badge">
            <i className="bi bi-speedometer2" />
            <span>Learning JsAdvDashboard</span>
          </div>
          <h1 className="dash-hero__title">
            Your <span className="dash-hero__highlight">Progress</span>
          </h1>
          <p className="dash-hero__sub">
            Track every topic, celebrate milestones, and stay consistent on
            your Advanced JavaScript journey.
          </p>
        </div>

        {/* Stats cards */}
        <div className="dash-stats">
          <StatCard
            icon="bi bi-collection-fill"
            label="Total JsAdvTopics"
            value={totalTopics}
            color="#06b6d4"
          />
          <StatCard
            icon="bi bi-check-circle-fill"
            label="Completed"
            value={completedCount}
            color="#10b981"
          />
          <StatCard
            icon="bi bi-arrow-repeat"
            label="In Progress"
            value={inProgress}
            color="#06b6d4"
          />
          <StatCard
            icon="bi bi-fire"
            label="Day Streak"
            value={`${streakData.streak} 🔥`}
            color="#f97316"
          />
        </div>
      </section>

      {/* ── Overview: Ring + Category Bars ───────────────────────────────── */}
      <section className="dash-overview">
        <div className="dash-overview__ring-section">
          <h2 className="dash-section-title">
            <i className="bi bi-pie-chart-fill" /> Overall Progress
          </h2>
          <div className="dash-ring-wrapper">
            <ProgressRing
              percent={overallPct}
              size={180}
              stroke={14}
              color="#06b6d4"
            />
            <div className="dash-ring-meta">
              <span className="dash-ring-meta__done">
                {completedCount} of {totalTopics} topics
              </span>
              {completedCount === 0 && (
                <span className="dash-ring-meta__hint">Start learning to see progress!</span>
              )}
              {completedCount > 0 && completedCount < totalTopics && (
                <span className="dash-ring-meta__hint">Keep going, you're doing great! 💪</span>
              )}
              {completedCount === totalTopics && (
                <span className="dash-ring-meta__hint">🎉 You've mastered everything!</span>
              )}
            </div>
          </div>
        </div>

        <div className="dash-overview__cats-section">
          <h2 className="dash-section-title">
            <i className="bi bi-bar-chart-fill" /> By Category
          </h2>
          <div className="dash-cat-bars">
            {JsAdvTopicsData.map((cat) => (
              <CategoryBar key={cat.id} category={cat} completed={completed} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Topic Checklist ───────────────────────────────────────────────── */}
      <section className="dash-checklist-section">
        <div className="dash-checklist-header">
          <h2 className="dash-section-title" style={{ marginBottom: 0 }}>
            <i className="bi bi-list-check" /> Topic Checklist
          </h2>
          <div className="dash-checklist-filters">
            <select
              value={filterDiff}
              onChange={(e) => setFilterDiff(e.target.value)}
              className="dash-filter-select"
            >
              <option value="All">All Levels</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="dash-filter-select"
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Incomplete">Incomplete</option>
            </select>
          </div>
        </div>

        <div className="dash-checklist">
          {JsAdvTopicsData.map((cat) => {
            const visibleTopics = getFilteredTopics(cat.topics)
            if (visibleTopics.length === 0) return null

            const catDone  = cat.topics.filter((t) => completed.includes(t.id)).length
            const isExpanded = expandedCats[cat.id] !== false // default open

            return (
              <div key={cat.id} className="dash-cat-group">
                {/* Category header */}
                <button
                  className="dash-cat-group__header"
                  onClick={() => toggleCat(cat.id)}
                  style={{ '--cat-color': cat.color }}
                  aria-expanded={isExpanded}
                >
                  <div className="dash-cat-group__left">
                    <i className={cat.icon} style={{ color: cat.color }} />
                    <span className="dash-cat-group__title">{cat.title}</span>
                    <span
                      className="dash-cat-group__progress-badge"
                      style={{ background: cat.color + '22', color: cat.color, border: `1px solid ${cat.color}44` }}
                    >
                      {catDone}/{cat.topics.length}
                    </span>
                  </div>
                  <i
                    className={`bi bi-chevron-${isExpanded ? 'up' : 'down'} dash-cat-group__chevron`}
                  />
                </button>

                {/* JsAdvTopics */}
                {isExpanded && (
                  <div className="dash-cat-group__topics">
                    {visibleTopics.map((topic) => {
                      const isDone = completed.includes(topic.id)
                      return (
                        <div
                          key={topic.id}
                          className={`dash-topic-row${isDone ? ' dash-topic-row--done' : ''}`}
                          onClick={() => toggleTopic(topic.id)}
                          role="checkbox"
                          aria-checked={isDone}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleTopic(topic.id)
                            }
                          }}
                        >
                          {/* Checkbox */}
                          <div
                            className={`dash-topic-check${isDone ? ' dash-topic-check--done' : ''}`}
                            style={isDone ? { background: cat.color, borderColor: cat.color } : {}}
                          >
                            {isDone && <i className="bi bi-check2" />}
                          </div>

                          {/* Info */}
                          <div className="dash-topic-info">
                            <span className="dash-topic-title">{topic.title}</span>
                            <div className="dash-topic-meta">
                              <span
                                className="dash-topic-diff"
                                style={{
                                  background: (DIFF_COLOR[topic.difficulty] || '#999') + '22',
                                  color:       DIFF_COLOR[topic.difficulty] || '#999',
                                  border:     `1px solid ${(DIFF_COLOR[topic.difficulty] || '#999')}44`,
                                }}
                              >
                                {topic.difficulty}
                              </span>
                              <span className="dash-topic-time">
                                <i className="bi bi-clock" /> {topic.time}
                              </span>
                            </div>
                          </div>

                          {/* Link */}
                          <Link
                            to={`/topics/${topic.id}`}
                            className="dash-topic-link"
                            onClick={(e) => e.stopPropagation()}
                            title={`Go to ${topic.title}`}
                          >
                            <i className="bi bi-arrow-right-circle-fill" />
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Achievements ─────────────────────────────────────────────────── */}
      <section className="dash-achievements-section">
        <h2 className="dash-section-title">
          <i className="bi bi-trophy-fill" style={{ color: '#06b6d4' }} /> Achievements
        </h2>
        <p className="dash-section-sub">
          Unlock badges as you progress through your JavaScript mastery journey.
        </p>
        <div className="dash-achievements-grid">
          {ACHIEVEMENTS.map((ach) => (
            <AchievementBadge
              key={ach.id}
              achievement={ach}
              completedCount={completedCount}
            />
          ))}
        </div>
      </section>

      {/* ── Motivational Quote ───────────────────────────────────────────── */}
      <section className="dash-quote-section">
        <div className="dash-quote-card">
          <i className="bi bi-quote dash-quote-icon" />
          <blockquote
            className="dash-quote-text"
            key={quoteIndex}
          >
            {QUOTES[quoteIndex].text}
          </blockquote>
          <cite className="dash-quote-author">
            — {QUOTES[quoteIndex].author}
          </cite>
          <div className="dash-quote-dots">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                className={`dash-quote-dot${i === quoteIndex ? ' dash-quote-dot--active' : ''}`}
                onClick={() => setQuoteIndex(i)}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Reset Section ────────────────────────────────────────────────── */}
      <section className="dash-reset-section">
        {resetDone && (
          <div className="dash-reset-success">
            <i className="bi bi-check-circle-fill" />
            Progress reset successfully. Fresh start — you've got this! 💪
          </div>
        )}

        {!showReset ? (
          <button
            className="dash-reset-btn"
            onClick={() => setShowReset(true)}
            disabled={completedCount === 0}
          >
            <i className="bi bi-arrow-counterclockwise" /> Reset All Progress
          </button>
        ) : (
          <div className="dash-reset-confirm">
            <div className="dash-reset-confirm__icon">⚠️</div>
            <p className="dash-reset-confirm__text">
              Are you sure? This will clear all <strong>{completedCount}</strong> completed topic
              {completedCount !== 1 ? 's' : ''} and cannot be undone.
            </p>
            <div className="dash-reset-confirm__actions">
              <button className="dash-reset-confirm__yes" onClick={handleReset}>
                Yes, Reset Everything
              </button>
              <button className="dash-reset-confirm__no" onClick={() => setShowReset(false)}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>

      <JsAdvFooter />
    </div>
  )
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ icon, label, value, color }) {
  return (
    <div className="dash-stat-card" style={{ '--stat-color': color }}>
      <div className="dash-stat-card__icon">
        <i className={icon} style={{ color }} />
      </div>
      <div className="dash-stat-card__body">
        <span className="dash-stat-card__value" style={{ color }}>
          {value}
        </span>
        <span className="dash-stat-card__label">{label}</span>
      </div>
    </div>
  )
}
