import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import JsAdvNavbar, { useDarkMode } from '../components/JsAdvNavbar'
import JsAdvFooter from '../components/JsAdvFooter'
import '../styles/JsAdvProjects.css'

/* ─────────────────────────────────────────────────────────────────────────────
   PROJECTS DATA
───────────────────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Advanced Todo App',
    description:
      'Full-featured todo application with state management, drag & drop, priorities, and local storage persistence.',
    features: ['State management', 'Local storage', 'Drag & Drop', 'Filter & Search', 'Priority levels', 'Dark mode'],
    techStack: ['Vanilla JS', 'CSS Grid', 'LocalStorage', 'HTML5 DnD API'],
    difficulty: 'Advanced',
    color: '#06b6d4',
    icon: 'bi-check2-square',
    time: '3-4 hours',
    code: `// Advanced Todo App - State Management Pattern
const TodoApp = (() => {
  let state = {
    todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    filter: 'all'
  };

  const setState = (updates) => {
    state = { ...state, ...updates };
    localStorage.setItem('todos', JSON.stringify(state.todos));
    render();
  };

  const addTodo = (text, priority = 'medium') => {
    const todo = {
      id: Date.now(),
      text,
      priority,
      done: false,
      createdAt: new Date().toISOString()
    };
    setState({ todos: [...state.todos, todo] });
  };

  const toggleTodo = (id) => setState({
    todos: state.todos.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    )
  });

  const getFiltered = () => state.todos.filter(t =>
    state.filter === 'all' ? true
    : state.filter === 'done' ? t.done
    : !t.done
  );

  const render = () => console.log('Todos:', getFiltered());

  return { addTodo, toggleTodo, setState };
})();

TodoApp.addTodo('Learn Closures', 'high');
TodoApp.addTodo('Master Async/Await', 'high');
TodoApp.addTodo('Build a mini framework', 'medium');`,
  },
  {
    id: 2,
    title: 'API JsAdvDashboard',
    description:
      'Real-time data dashboard using Fetch API with live updates, error handling, loading states, and data visualization.',
    features: ['Fetch API', 'Real-time updates', 'Loading states', 'Error boundaries', 'Data visualization', 'Caching'],
    techStack: ['Fetch API', 'Async/Await', 'DOM Manipulation', 'CSS Animations'],
    difficulty: 'Advanced',
    color: '#06b6d4',
    icon: 'bi-bar-chart-line-fill',
    time: '4-5 hours',
    code: `// API JsAdvDashboard - Fetch with caching & error handling
class ApiDashboard {
  #cache = new Map();
  #cacheTTL = 60000; // 1 minute

  async fetchWithCache(url) {
    const cached = this.#cache.get(url);
    if (cached && Date.now() - cached.timestamp < this.#cacheTTL) {
      return cached.data;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    const data = await response.json();
    this.#cache.set(url, { data, timestamp: Date.now() });
    return data;
  }

  async loadDashboard() {
    const endpoints = [
      'https://jsonplaceholder.typicode.com/users',
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    ];
    try {
      const [users, posts] = await Promise.all(
        endpoints.map(url => this.fetchWithCache(url))
      );
      console.log('Users loaded:', users.length);
      console.log('Posts loaded:', posts.length);
    } catch (err) {
      console.error('JsAdvDashboard error:', err.message);
    }
  }
}

const dashboard = new ApiDashboard();
dashboard.loadDashboard();`,
  },
  {
    id: 3,
    title: 'Custom JS Library',
    description:
      'Build a mini JavaScript framework with virtual DOM concept, component system, reactive state, and event system.',
    features: ['Virtual DOM concept', 'Component system', 'Reactive state', 'Event system', 'Lifecycle hooks', 'Diffing algorithm'],
    techStack: ['Pure JavaScript', 'OOP', 'Proxy API', 'WeakMap'],
    difficulty: 'Expert',
    color: '#8b5cf6',
    icon: 'bi-code-slash',
    time: '6-8 hours',
    code: `// Mini JS Framework - Reactive State with Proxy
class MiniFramework {
  static createReactive(data, onChange) {
    return new Proxy(data, {
      set(target, key, value) {
        target[key] = value;
        onChange(key, value);
        return true;
      }
    });
  }

  static createElement(tag, props = {}, ...children) {
    return { tag, props, children: children.flat() };
  }

  static render(vnode, container) {
    if (typeof vnode === 'string') {
      container.appendChild(document.createTextNode(vnode));
      return;
    }
    const el = document.createElement(vnode.tag);
    Object.entries(vnode.props).forEach(([k, v]) => {
      if (k.startsWith('on')) {
        el.addEventListener(k.slice(2).toLowerCase(), v);
      } else {
        el.setAttribute(k, v);
      }
    });
    vnode.children.forEach(child =>
      MiniFramework.render(child, el)
    );
    container.appendChild(el);
  }
}

const state = MiniFramework.createReactive(
  { count: 0 },
  (key, val) => console.log(\`State changed: \${key} = \${val}\`)
);
state.count++; // triggers reactive update`,
  },
  {
    id: 4,
    title: 'Real-time Search with Debounce',
    description:
      'Intelligent search component with debouncing, API integration, highlighted matches, and search history.',
    features: ['Debouncing', 'API search', 'Highlight matches', 'Search history', 'Keyboard navigation', 'Loading indicator'],
    techStack: ['Fetch API', 'Debounce', 'DOM API', 'LocalStorage'],
    difficulty: 'Intermediate',
    color: '#10b981',
    icon: 'bi-search',
    time: '2-3 hours',
    code: `// Real-time Search with Debounce
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

class SearchEngine {
  #history = JSON.parse(
    localStorage.getItem('searchHistory') || '[]'
  );

  async search(query) {
    if (!query.trim()) return [];
    const url = \`https://jsonplaceholder.typicode.com/posts?q=\${
      encodeURIComponent(query)
    }&_limit=5\`;
    const res = await fetch(url);
    const data = await res.json();
    this.#addToHistory(query);
    return data;
  }

  #addToHistory(query) {
    this.#history = [
      query,
      ...this.#history.filter(h => h !== query)
    ].slice(0, 10);
    localStorage.setItem(
      'searchHistory',
      JSON.stringify(this.#history)
    );
  }

  highlightMatch(text, query) {
    const regex = new RegExp(\`(\${query})\`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  getHistory() { return this.#history; }
}

const engine = new SearchEngine();
const debouncedSearch = debounce(async (q) => {
  const results = await engine.search(q);
  console.log('Results:', results.length);
}, 300);

debouncedSearch('javascript');`,
  },
  {
    id: 5,
    title: 'Drag & Drop UI Builder',
    description:
      'Interactive UI builder using HTML5 Drag & Drop API with dynamic DOM manipulation, save to localStorage, and export HTML.',
    features: ['HTML5 DnD API', 'Dynamic DOM', 'LocalStorage save', 'Export HTML', 'Undo/Redo', 'Grid layout'],
    techStack: ['Drag & Drop API', 'DOM API', 'LocalStorage', 'CSS Grid'],
    difficulty: 'Advanced',
    color: '#f97316',
    icon: 'bi-grid-3x3-gap-fill',
    time: '4-5 hours',
    code: `// Drag & Drop UI Builder
class UIBuilder {
  #canvas = [];
  #history = [];

  constructor(canvasEl) {
    this.el = canvasEl;
    this.setupDnD();
    this.load();
  }

  setupDnD() {
    this.el.addEventListener('dragover', e => e.preventDefault());
    this.el.addEventListener('drop', e => {
      e.preventDefault();
      const type = e.dataTransfer.getData('component');
      const rect = this.el.getBoundingClientRect();
      this.addComponent(type, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    });
  }

  addComponent(type, position) {
    const component = {
      id: Date.now(),
      type,
      position,
      props: this.getDefaultProps(type)
    };
    this.#history.push([...this.#canvas]);
    this.#canvas.push(component);
    this.render();
    this.save();
  }

  getDefaultProps(type) {
    const defaults = {
      button: { text: 'Click Me', color: '#06b6d4' },
      text:   { content: 'Hello World' },
      card:   { title: 'Card Title', body: 'Card content' }
    };
    return defaults[type] || {};
  }

  undo() {
    if (this.#history.length) {
      this.#canvas = this.#history.pop();
      this.render();
      this.save();
    }
  }

  exportHTML() { return this.el.innerHTML; }
  save()  { localStorage.setItem('ui-builder', JSON.stringify(this.#canvas)); }
  load()  { this.#canvas = JSON.parse(localStorage.getItem('ui-builder') || '[]'); this.render(); }
  render(){ console.log('Canvas components:', this.#canvas.length); }
}

console.log('UI Builder ready - drag components to the canvas!');`,
  },
]

const DIFFICULTIES = ['All', 'Intermediate', 'Advanced', 'Expert']

/* ─────────────────────────────────────────────────────────────────────────────
   HELPER: pad number
───────────────────────────────────────────────────────────────────────────── */
const padNum = (n) => String(n).padStart(2, '0')

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────────────────────────────────────── */
export default function JsAdvProjects() {
  const { dark }                          = useDarkMode()
  const navigate                          = useNavigate()
  const [filterDifficulty, setFilter]     = useState('All')
  const [expandedCode, setExpandedCode]   = useState(new Set())
  const [heroVisible,  setHeroVisible]    = useState(false)
  const [showBackTop,  setShowBackTop]    = useState(false)
  const [copiedId,     setCopiedId]       = useState(null)

  /* hero entrance */
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  /* back-to-top */
  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* filtered list */
  const visible = PROJECTS.filter(p =>
    filterDifficulty === 'All' || p.difficulty === filterDifficulty
  )

  /* toggle code panel */
  const toggleCode = (id) => {
    setExpandedCode(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  /* copy code to clipboard */
  const copyCode = async (id, code) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch {
      /* fallback silently */
    }
  }

  /* difficulty badge colour */
  const diffClass = (d) => {
    switch (d) {
      case 'Intermediate': return 'diff--intermediate'
      case 'Advanced':     return 'diff--advanced'
      case 'Expert':       return 'diff--expert'
      default:             return 'diff--intermediate'
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  /* ── render ── */
  return (
    <div className="projects-page">
      <JsAdvNavbar />

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className={`projects-hero${heroVisible ? ' projects-hero--visible' : ''}`}>
        <div className="projects-hero__inner">
          <span className="projects-hero__badge">
            <i className="bi bi-layers-fill" /> Project Lab
          </span>
          <h1 className="projects-hero__title">Real-World JS JsAdvProjects</h1>
          <p className="projects-hero__subtitle">
            Move beyond tutorials — build production-quality applications that demonstrate mastery of advanced JavaScript concepts.
          </p>
          <div className="projects-hero__meta">
            <span><i className="bi bi-collection-fill" /> {PROJECTS.length} JsAdvProjects</span>
            <span className="sep">·</span>
            <span><i className="bi bi-clock-fill" /> Self-paced</span>
            <span className="sep">·</span>
            <span><i className="bi bi-heart-fill" /> Free Forever</span>
          </div>
        </div>

        {/* decorative blobs */}
        <div className="projects-hero__blob projects-hero__blob--1" aria-hidden />
        <div className="projects-hero__blob projects-hero__blob--2" aria-hidden />
      </section>

      {/* ════════════════════════════════════════
          FILTER BAR
      ════════════════════════════════════════ */}
      <div className="filter-bar">
        <span className="filter-bar__label"><i className="bi bi-funnel-fill" /> Filter:</span>
        {DIFFICULTIES.map(d => (
          <button
            key={d}
            className={`filter-btn${filterDifficulty === d ? ' filter-btn--active' : ''}`}
            onClick={() => setFilter(d)}
          >
            {d}
            {d !== 'All' && (
              <span className="filter-btn__count">
                {PROJECTS.filter(p => p.difficulty === d).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ════════════════════════════════════════
          PROJECTS GRID
      ════════════════════════════════════════ */}
      <main className="projects-main">
        {visible.length === 0 ? (
          <div className="projects-empty">
            <i className="bi bi-inbox" />
            <p>No projects found for <strong>{filterDifficulty}</strong> difficulty.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {visible.map((proj) => {
              const isOpen = expandedCode.has(proj.id)
              return (
                <article
                  key={proj.id}
                  className="project-card"
                  style={{ '--proj-color': proj.color }}
                >
                  {/* faded background number */}
                  <span className="project-card__num" aria-hidden>
                    {padNum(proj.id)}
                  </span>

                  {/* ── Header ── */}
                  <div className="project-card__header">
                    <div className="project-card__icon" style={{ background: `${proj.color}22`, border: `1.5px solid ${proj.color}44` }}>
                      <i className={`bi ${proj.icon}`} style={{ color: proj.color }} />
                    </div>
                    <div className="project-card__header-text">
                      <h2 className="project-card__title">{proj.title}</h2>
                      <p className="project-card__desc">{proj.description}</p>
                    </div>
                  </div>

                  {/* ── Features ── */}
                  <div className="project-card__features">
                    {proj.features.map(f => (
                      <span key={f} className="feature-chip">
                        <i className="bi bi-check2" /> {f}
                      </span>
                    ))}
                  </div>

                  {/* ── Tech Stack ── */}
                  <div className="project-card__tech">
                    <span className="project-card__tech-label">Tech Stack:</span>
                    {proj.techStack.map(t => (
                      <span
                        key={t}
                        className="tech-badge"
                        style={{ borderColor: `${proj.color}66`, color: proj.color }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ── Meta ── */}
                  <div className="project-card__meta">
                    <span className={`difficulty-badge ${diffClass(proj.difficulty)}`}>
                      <i className="bi bi-stars" /> {proj.difficulty}
                    </span>
                    <span className="time-badge">
                      <i className="bi bi-clock" /> {proj.time}
                    </span>
                  </div>

                  {/* ── Actions ── */}
                  <div className="project-card__actions">
                    <button
                      className={`btn-view-code${isOpen ? ' btn-view-code--open' : ''}`}
                      onClick={() => toggleCode(proj.id)}
                      style={{ '--btn-color': proj.color }}
                    >
                      <i className={`bi ${isOpen ? 'bi-chevron-up' : 'bi-code-square'}`} />
                      {isOpen ? 'Hide Code' : 'View Code'}
                    </button>
                    <button
                      className="btn-compiler"
                      onClick={() => navigate('/js-adv-course/compiler')}
                    >
                      <i className="bi bi-terminal-fill" /> Open in JsAdvCompiler
                    </button>
                  </div>

                  {/* ── Code Section ── */}
                  <div className={`code-section${isOpen ? ' code-section--open' : ''}`}>
                    <div className="code-section__toolbar">
                      <div className="code-section__dots" aria-hidden>
                        <span /><span /><span />
                      </div>
                      <span className="code-section__filename">
                        <i className="bi bi-file-earmark-code" /> {proj.title.replace(/\s+/g, '-').toLowerCase()}.js
                      </span>
                      <button
                        className="code-section__copy"
                        onClick={() => copyCode(proj.id, proj.code)}
                        title="Copy code"
                      >
                        <i className={`bi ${copiedId === proj.id ? 'bi-check2' : 'bi-clipboard'}`} />
                        {copiedId === proj.id ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <pre className="code-section__pre"><code>{proj.code}</code></pre>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </main>

      {/* back to top */}
      {showBackTop && (
        <button className="back-top-btn" onClick={scrollToTop} aria-label="Back to top">
          <i className="bi bi-arrow-up" />
        </button>
      )}

      <JsAdvFooter />
    </div>
  )
}
