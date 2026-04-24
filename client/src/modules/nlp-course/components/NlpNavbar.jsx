import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBrain } from 'react-icons/fa';

export default function NlpNavbar() {
  const { pathname } = useLocation();

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(8,11,20,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/nlp-course" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 8,
            background: 'linear-gradient(135deg,#c9a84c,#e8c97a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <FaBrain size={16} style={{ color: '#080b14' }} />
          </div>
          <span style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 18, fontWeight: 700,
            background: 'linear-gradient(135deg,#c9a84c,#e8c97a)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>NLP in My Style</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {[['/nlp-course', 'Home'], ['/nlp-course/topics', 'Topics']].map(([path, label]) => (
            <Link key={path} to={path} style={{
              textDecoration: 'none', fontSize: 14, fontWeight: 500,
              color: pathname === path || (path === '/nlp-course/topics' && pathname.startsWith('/nlp-course/topic'))
                ? '#c9a84c' : '#8a9ab5',
              transition: 'color 0.2s',
              letterSpacing: '0.02em',
            }}>{label}</Link>
          ))}
          <Link to="/nlp-course/topics" style={{
            textDecoration: 'none',
            padding: '8px 20px', borderRadius: 6,
            background: 'linear-gradient(135deg,#c9a84c,#e8c97a)',
            color: '#080b14', fontSize: 13, fontWeight: 700,
            letterSpacing: '0.04em',
          }}>Start Learning</Link>
        </div>
      </div>
    </motion.nav>
  );
}

