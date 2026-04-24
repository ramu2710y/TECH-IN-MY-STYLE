import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DlNavbar.css';

const navLinks = [
  { to: '/dl-course', label: 'Home' },
  { to: '/dl-course/topics', label: 'Topics' },
  { to: '/dl-course/about', label: 'About' },
  { to: '/dl-course/contact', label: 'Contact' },
];

export default function DlNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/dl-course' || location.pathname === '/dl-course/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navClass = `dl-navbar${isHome && !scrolled ? ' transparent' : scrolled ? ' scrolled' : ''}`;

  return (
    <header className="dl-navbar-header">
      <nav className={navClass}>
        <Link to="/dl-course" className="dl-logo">
          <span>Deep</span>Learning <span>In My Style</span>
        </Link>
        <div className={`dl-nav-links${menuOpen ? ' active' : ''}`}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={location.pathname === l.to ? 'active' : ''}>{l.label}</Link>
          ))}
          <Link to="/courses" style={{ opacity: 0.8, border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: '20px', padding: '0.2rem 0.75rem', fontSize: '0.8rem' }}>← Back</Link>
        </div>
        <div
          className={`dl-mobile-menu-btn${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
        >
          <div className="dl-bar" />
          <div className="dl-bar" />
          <div className="dl-bar" />
        </div>
      </nav>
    </header>
  );
}
