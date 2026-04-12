import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './OsLayout.css';

const modules = [
  { path: '/os-course/overview', label: 'Course Overview', icon: '◈' },
  { path: '/os-course/introduction', label: 'Introduction to OS', icon: '⬡' },
  { path: '/os-course/process-management', label: 'Process Management', icon: '⚙' },
  { path: '/os-course/threads', label: 'Threads & Concurrency', icon: '⧉' },
  { path: '/os-course/memory', label: 'Memory Management', icon: '▦' },
  { path: '/os-course/file-systems', label: 'File Systems', icon: '◫' },
  { path: '/os-course/io-systems', label: 'I/O Systems', icon: '⇄' },
  { path: '/os-course/security', label: 'Security & Protection', icon: '◆' },
  { path: '/os-course/real-world', label: 'Real-World Apps', icon: '◉' },
  { path: '/os-course/interview-prep', label: 'Interview Prep', icon: '◧' },
  { path: '/os-course/projects', label: 'Projects & Hands-On', icon: '⬢' },
];

export default function OsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
          <span></span><span></span><span></span>
        </button>
        <div className="topbar-brand">
          <div className="topbar-logo">OS</div>
          <span className="topbar-text">
            <span className="topbar-text-bold">OS</span> in My Style
          </span>
        </div>
        <div className="topbar-actions">
          <span className="topbar-pill">
            <span className="topbar-pill-dot"></span>
            10 Modules
          </span>
        </div>
      </header>

      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo-text">◈ Modules</span>
        </div>
        <nav className="sidebar-nav">
          {modules.map((mod, i) => (
            <NavLink key={mod.path} to={mod.path} end={mod.path === '/os-course/overview'}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
              onClick={() => setSidebarOpen(false)}>
              <span className="sidebar-link-icon">{mod.icon}</span>
              <span className="sidebar-link-label">{mod.label}</span>
              {i > 0 && <span className="sidebar-link-num">{String(i).padStart(2, '0')}</span>}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="sidebar-footer-version">v2.0</span>
          <span className="sidebar-footer-copy">© 2026</span>
        </div>
      </aside>

      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
