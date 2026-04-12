import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleLogout = () => {
    // Clear all auth data
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    
    // Redirect to login
    window.location.href = '/login';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2><Link to="/">TECH IN MY STYLE</Link></h2>
        </div>
        
        {/* Mobile Header Controls */}
        <div className="mobile-header-controls">
          <div className="theme-toggle">
            <i className="fas fa-sun"></i>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={theme === 'dark'} 
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
            <i className="fas fa-moon"></i>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav">
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link className={`nav-link ${isActive('/')}`} to="/" onClick={closeMenu}>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link className={`nav-link ${isActive('/courses')}`} to="/courses" onClick={closeMenu}>
              <i className="fas fa-book"></i>
              <span>Courses</span>
            </Link>
            <Link className={`nav-link ${isActive('/about-us')}`} to="/about-us" onClick={closeMenu}>
              <i className="fas fa-info-circle"></i>
              <span>About Us</span>
            </Link>
            <Link className={`nav-link ${isActive('/stay-connected')}`} to="/stay-connected" onClick={closeMenu}>
              <i className="fas fa-users"></i>
              <span>Stay Connected</span>
            </Link>
            <Link className={`nav-link ${isActive('/feedback')}`} to="/feedback" onClick={closeMenu}>
              <i className="fas fa-comment"></i>
              <span>Feedback Center</span>
            </Link>
            <Link className={`nav-link ${isActive('/leaderboard')}`} to="/leaderboard" onClick={closeMenu}>
              <i className="fas fa-trophy"></i>
              <span>Leaderboard</span>
            </Link>
            <button 
              className="nav-link" 
              onClick={handleLogout}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <i className="fas fa-arrow-right-from-bracket"></i>
              <span>Logout</span>
            </button>
          </div>
          <div className="theme-toggle">
            <i className="fas fa-sun"></i>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={theme === 'dark'} 
                onChange={toggleTheme}
              />
              <span className="slider"></span>
            </label>
            <i className="fas fa-moon"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
