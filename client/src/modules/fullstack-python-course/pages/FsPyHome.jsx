import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { learningPaths } from '../data/topics';

export default function FsPyHome() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <section ref={heroRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 62 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,113,227,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div style={{ y: heroY, opacity: heroOpacity, textAlign: 'center', padding: '0 1.5rem', maxWidth: 900, position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem', background: 'var(--accent-light)', border: '1px solid var(--accent-border)', borderRadius: 980, padding: '6px 16px' }}>
              <i className="fab fa-python" style={{ color: 'var(--accent)', fontSize: '0.9rem' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.05em' }}>FULL STACK PYTHON</span>
            </div>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            From <span style={{ color: 'var(--accent)' }}>Zero</span> to Production <span style={{ background: 'linear-gradient(135deg, var(--accent), #0051a2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Backend</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, margin: '1.5rem auto 2.5rem', maxWidth: 600 }}>
            Master Python from fundamentals to deployment. Build REST APIs, work with databases, and ship production-ready applications.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="mac-btn mac-btn-primary" onClick={() => navigate('/fullstack-python-course/python')}>
              <i className="fas fa-rocket" style={{ fontSize: '0.85rem' }} />
              Start Learning
            </button>
            <button className="mac-btn mac-btn-secondary" onClick={() => navigate('/fullstack-python-course/build')}>
              <i className="fas fa-hammer" style={{ fontSize: '0.85rem' }} />
              Build Projects
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ display: 'flex', gap: '3rem', justifyContent: 'center', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            {[['25+', 'Topics', 'fa-book'], ['5', 'Levels', 'fa-layer-group'], ['∞', 'Practice', 'fa-code']].map(([num, label, icon]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)', marginTop: 4, letterSpacing: '0.05em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  <i className={`fas ${icon}`} style={{ fontSize: '0.7rem' }} />
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <section style={{ padding: '6rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
            Your Learning <span style={{ color: 'var(--accent)' }}>Journey</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto' }}>
            Progress through five carefully designed levels, from Python basics to production deployment.
          </p>
        </motion.div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {learningPaths.map((path, i) => (
            <motion.div key={path.level} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="mac-card" style={{ padding: '2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }} onClick={() => navigate('/fullstack-python-course/python')}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: `${path.color}15`, filter: 'blur(30px)', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${path.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fas ${path.icon}`} style={{ color: path.color, fontSize: '1.1rem' }} />
                </div>
                <div className="mac-badge" style={{ background: `${path.color}15`, color: path.color, border: `1px solid ${path.color}30` }}>
                  {path.level}
                </div>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                {path.level}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {path.topics.slice(0, 5).map(topic => (
                  <div key={topic} className="mac-tag" style={{ fontSize: '0.7rem' }}>
                    {topic}
                  </div>
                ))}
                {path.topics.length > 5 && (
                  <div className="mac-tag" style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>
                    +{path.topics.length - 5} more
                  </div>
                )}
              </div>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: 6, color: path.color, fontSize: '0.8rem', fontWeight: 600 }}>
                Explore <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section style={{ padding: '4rem 1.5rem 6rem', maxWidth: 900, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mac-card" style={{ padding: '3rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--accent-light), var(--mac-surface))' }}>
          <div style={{ width: 60, height: 60, borderRadius: 16, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', boxShadow: '0 8px 24px rgba(0,113,227,0.3)' }}>
            <i className="fas fa-code" style={{ color: '#fff', fontSize: '1.5rem' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Ready to Build?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem' }}>
            Start your journey from Python basics to production-ready backend systems.
          </p>
          <button className="mac-btn mac-btn-primary" style={{ fontSize: '1rem', padding: '12px 32px' }} onClick={() => navigate('/fullstack-python-course/python')}>
            <i className="fas fa-rocket" />
            Begin Your Journey
          </button>
        </motion.div>
      </section>
    </div>
  );
}
