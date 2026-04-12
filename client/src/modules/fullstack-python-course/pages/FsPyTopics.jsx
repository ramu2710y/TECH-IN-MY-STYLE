import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { learningPaths, allTopics } from '../data/topics';

export default function FsPyTopics() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('All');

  const filteredTopics = selectedLevel === 'All' 
    ? allTopics 
    : allTopics.filter(t => t.category === selectedLevel);

  return (
    <div style={{ paddingTop: 62, minHeight: '100vh' }}>
      
      {/* HEADER */}
      <section style={{ padding: '3rem 1.5rem 2rem', background: 'var(--mac-surface-2)', borderBottom: '1px solid var(--mac-border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
              Course <span style={{ color: 'var(--accent)' }}>Topics</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 700 }}>
              Explore {allTopics.length} comprehensive topics across {learningPaths.length} levels. Click any topic to dive deep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section style={{ padding: '2rem 1.5rem', maxWidth: 1200, margin: '0 auto', position: 'sticky', top: 62, zIndex: 40, background: 'var(--mac-bg)', borderBottom: '1px solid var(--mac-border)' }}>
        <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {['All', ...learningPaths.map(p => p.level)].map(level => {
            const active = selectedLevel === level;
            const path = learningPaths.find(p => p.level === level);
            return (
              <button key={level}
                onClick={() => setSelectedLevel(level)}
                className="mac-btn"
                style={{
                  background: active ? 'var(--accent)' : 'var(--mac-surface)',
                  color: active ? '#fff' : 'var(--text-primary)',
                  border: active ? 'none' : '1px solid var(--mac-border)',
                  boxShadow: active ? '0 2px 8px rgba(0,113,227,0.3)' : 'var(--mac-shadow-sm)',
                  whiteSpace: 'nowrap',
                }}>
                {path && <i className={`fas ${path.icon}`} style={{ fontSize: '0.8rem' }} />}
                {level}
              </button>
            );
          })}
        </div>
      </section>

      {/* TOPICS GRID */}
      <section style={{ padding: '3rem 1.5rem 6rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredTopics.map((topic, i) => (
            <motion.div key={topic.id}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="mac-card"
              style={{ padding: '1.75rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              onClick={() => navigate(`/fullstack-python-course/topic/${topic.id}`)}>
              
              <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: `${topic.color}12`, filter: 'blur(30px)', pointerEvents: 'none' }} />
              
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${topic.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`fas ${topic.icon}`} style={{ color: topic.color, fontSize: '1.2rem' }} />
                </div>
                <div className="mac-badge" style={{ background: `${topic.color}15`, color: topic.color, border: `1px solid ${topic.color}30`, fontSize: '0.65rem' }}>
                  {topic.category}
                </div>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {topic.title}
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                {topic.tagline}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {topic.keyPoints.slice(0, 2).map((point, idx) => (
                  <div key={idx} className="mac-tag" style={{ fontSize: '0.7rem' }}>
                    {point.length > 30 ? point.substring(0, 30) + '...' : point}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: topic.color, fontSize: '0.8rem', fontWeight: 600 }}>
                Learn More <i className="fas fa-arrow-right" style={{ fontSize: '0.7rem' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
