import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/fullstack-python-course', label: 'Home', icon: 'fa-house' },
  { to: '/fullstack-python-course/python', label: 'Course', icon: 'fa-code' },
  { to: '/fullstack-python-course/build', label: 'Build', icon: 'fa-hammer' },
];

export default function FsPyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(246,246,248,0.82)'
          : 'rgba(246,246,248,0.72)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.06)',
        boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link to="/fullstack-python-course" className="flex items-center gap-2.5 select-none">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: 'linear-gradient(145deg, #0071e3, #0051a2)' }}>
            <i className="fab fa-python text-white" style={{ fontSize: '0.85rem' }} />
          </div>
          <div className="leading-none">
            <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Full Stack Python
            </span>
            <span className="block text-xs font-medium" style={{ color: 'var(--accent)', letterSpacing: '0.04em' }}>
              in My Style
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map(link => {
            const active = location.pathname === link.to ||
              (link.to !== '/fullstack-python-course' && location.pathname.startsWith(link.to));
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150"
                style={{
                  color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  background: active ? 'var(--accent-light)' : 'transparent',
                }}
              >
                <i className={`fas ${link.icon}`} style={{ fontSize: '0.7rem' }} />
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/fullstack-python-course/python" className="mac-btn mac-btn-primary text-sm">
            Start Learning
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
          style={{ background: 'rgba(0,0,0,0.06)' }}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-sm`}
            style={{ color: 'var(--text-secondary)' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mx-3 mb-3 rounded-xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            {links.map((link, i) => {
              const active = location.pathname === link.to ||
                (link.to !== '/fullstack-python-course' && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors"
                  style={{
                    color: active ? 'var(--accent)' : 'var(--text-primary)',
                    background: active ? 'var(--accent-light)' : 'transparent',
                    borderBottom: i < links.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                  }}
                >
                  <i className={`fas ${link.icon} w-4 text-center`}
                    style={{ color: active ? 'var(--accent)' : 'var(--text-tertiary)', fontSize: '0.8rem' }} />
                  {link.label}
                </Link>
              );
            })}
            <div className="p-3" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <Link to="/fullstack-python-course/python" className="mac-btn mac-btn-primary w-full justify-center text-sm">
                Start Learning
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
