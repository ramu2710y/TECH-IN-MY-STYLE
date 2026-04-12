import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './CNavbar.css';

export default function CNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/c-course' || location.pathname === '/c-course/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (!isHome) {
      navigate('/c-course');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="c-navbar" style={{ background: scrolled ? 'rgba(15,23,42,0.95)' : 'rgba(15,23,42,0.9)' }}>
      <div className="c-nav-container">
        <div className="c-nav-logo">
          <Link to="/c-course" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
            <i className="fas fa-code c-nav-icon"></i>
            <span className="c-logo-text">C Programming<span className="c-logo-accent"> In My Style</span></span>
          </Link>
        </div>
        <div className={`c-nav-menu${menuOpen ? ' active' : ''}`}>
          <button className="c-nav-link" onClick={() => scrollTo('c-home')}>Home</button>
          <button className="c-nav-link" onClick={() => scrollTo('c-topics')}>Topics</button>
          <button className="c-nav-link" onClick={() => scrollTo('c-resources')}>Resources</button>
          <button className="c-nav-link" onClick={() => scrollTo('c-about')}>About</button>
        </div>
        <div className={`c-nav-toggle${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(o => !o)}>
          <span className="c-bar"></span>
          <span className="c-bar"></span>
          <span className="c-bar"></span>
        </div>
      </div>
    </nav>
  );
}
