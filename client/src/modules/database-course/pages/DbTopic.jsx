import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faBookmark, faCheckCircle, faBrain,
  faInfoCircle, faTerminal, faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { topicContent } from '../data/topicContent';
import { courseModules } from '../data/courseData';
import DbAccordion from '../components/DbAccordion';
import DbMacCodeBlock from '../components/DbMacCodeBlock';
import { useProgress } from '../hooks/useProgress';
import { useState } from 'react';

export default function DbTopic() {
  const { id } = useParams();
  const { getProgress, toggleProgress, isBookmarked, toggleBookmark } = useProgress();
  const [activeTab, setActiveTab] = useState('sql');
  const content = topicContent[id];

  let modColor = '#00f0ff';
  for (const mod of courseModules) {
    if (mod.topics.find(t => t.id === id)) { modColor = mod.color; break; }
  }

  const allTopics = courseModules.flatMap(m => m.topics);
  const idx = allTopics.findIndex(t => t.id === id);
  const prev = idx > 0 ? allTopics[idx - 1] : null;
  const next = idx < allTopics.length - 1 ? allTopics[idx + 1] : null;

  if (!content) {
    return (
      <div style={{ maxWidth: 900, margin: '4rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <div className="phantom-card" style={{ padding: '3rem', borderRadius: 8 }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Module Loading...</div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>This topic is being assembled. Check back soon.</p>
          <Link to="/database-course/modules" style={{ textDecoration: 'none' }}>
            <button className="btn-rog">← Back to Modules</button>
          </Link>
        </div>
      </div>
    );
  }

  const done = getProgress(id);
  const bookmarked = isBookmarked(id);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ marginBottom: '1.5rem' }}>
        <Link to="/database-course/modules" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: '0.75rem' }} />
          Back to Modules
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="phantom-card"
        style={{ padding: '1.5rem 2rem', marginBottom: '1.5rem', borderRadius: 8, borderLeft: `4px solid ${modColor}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              {content.title}
            </h1>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
              <Link to={`/database-course/editor?topic=${id}`} style={{ textDecoration: 'none' }}>
                <button className="btn-p5" style={{ padding: '0.4rem 1rem', fontSize: '0.78rem' }}>
                  <FontAwesomeIcon icon={faTerminal} />
                  Try in Terminal
                </button>
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
            <button onClick={() => toggleBookmark(id)} style={{ width: 34, height: 34, border: `1px solid ${bookmarked ? 'rgba(255,214,0,0.4)' : 'var(--border-dim)'}`, background: bookmarked ? 'rgba(255,214,0,0.1)' : 'var(--bg-3)', cursor: 'pointer', color: bookmarked ? 'var(--p5-yellow)' : 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)', transition: 'all 0.15s' }}>
              <FontAwesomeIcon icon={faBookmark} style={{ fontSize: '0.8rem' }} />
            </button>
            <button onClick={() => toggleProgress(id)} style={{ width: 34, height: 34, border: `1px solid ${done ? 'rgba(40,200,64,0.4)' : 'var(--border-dim)'}`, background: done ? 'rgba(40,200,64,0.1)' : 'var(--bg-3)', cursor: 'pointer', color: done ? '#28c840' : 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)', transition: 'all 0.15s' }}>
              <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '0.8rem' }} />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        style={{ padding: '1.25rem 1.5rem', marginBottom: '1.5rem', background: 'rgba(232,0,45,0.05)', border: '1px solid var(--border-red-dim)', borderLeft: '3px solid var(--p5-red)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(232,0,45,0.03) 12px, rgba(232,0,45,0.03) 13px)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', position: 'relative' }}>
          <FontAwesomeIcon icon={faBrain} style={{ color: 'var(--p5-red)', marginTop: '0.2rem', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, fontStyle: 'italic', color: 'var(--p5-red)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'Barlow Condensed, sans-serif' }}>
              ▶ Real-World Analogy
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.65, fontStyle: 'italic' }}>
              {content.analogy}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="rog-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderRadius: 6 }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
          <FontAwesomeIcon icon={faInfoCircle} style={{ color: modColor }} />
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: modColor, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif' }}>Overview</div>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          {content.description}
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {content.points.map((pt, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ color: modColor, marginTop: '0.25rem', flexShrink: 0, fontSize: '0.55rem' }}>◆</span>
              {pt}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        style={{ marginBottom: '1.5rem' }}>
        {/* Tab Switcher */}
        <div style={{ 
          display: 'flex', 
          gap: '0.5rem', 
          marginBottom: '1rem',
          borderBottom: '1px solid var(--border-dim)',
        }}>
          <button
            onClick={() => setActiveTab('sql')}
            style={{
              padding: '0.75rem 1.5rem',
              background: activeTab === 'sql' ? 'rgba(0,212,255,0.1)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'sql' ? '2px solid #00d4ff' : '2px solid transparent',
              color: activeTab === 'sql' ? '#00d4ff' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
          >
            SQL
          </button>
          <button
            onClick={() => setActiveTab('mongo')}
            style={{
              padding: '0.75rem 1.5rem',
              background: activeTab === 'mongo' ? 'rgba(118,185,0,0.1)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'mongo' ? '2px solid #76b900' : '2px solid transparent',
              color: activeTab === 'mongo' ? '#76b900' : 'var(--text-secondary)',
              cursor: 'pointer',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
          >
            MongoDB
          </button>
        </div>

        {/* Code Block */}
        {activeTab === 'sql' ? (
          <DbMacCodeBlock code={content.sqlExample} lang="sql" title="SQL Command" />
        ) : (
          <DbMacCodeBlock code={content.mongoExample} lang="mongo" title="MongoDB Command" />
        )}
      </motion.div>

      {content.interview && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="rog-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', borderRadius: 6 }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
            <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'var(--p5-red)' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 800, fontStyle: 'italic', color: 'var(--p5-red)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif' }}>▶ Interview Questions</span>
          </div>
          <DbAccordion items={content.interview} color={modColor} />
        </motion.div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginTop: '2rem' }}>
        {prev ? (
          <Link to={`/database-course/topic/${prev.id}`} style={{ textDecoration: 'none', flex: 1 }}>
            <div className="rog-card" style={{ padding: '0.9rem 1rem', cursor: 'pointer', borderRadius: 6, transition: 'all 0.2s' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem', fontFamily: 'Barlow Condensed, sans-serif' }}>← Previous</div>
              <div style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>{prev.title}</div>
            </div>
          </Link>
        ) : <div style={{ flex: 1 }} />}
        {next ? (
          <Link to={`/database-course/topic/${next.id}`} style={{ textDecoration: 'none', flex: 1 }}>
            <div className="rog-card" style={{ padding: '0.9rem 1rem', cursor: 'pointer', textAlign: 'right', borderRadius: 6, transition: 'all 0.2s' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem', fontFamily: 'Barlow Condensed, sans-serif' }}>Next →</div>
              <div style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>{next.title}</div>
            </div>
          </Link>
        ) : <div style={{ flex: 1 }} />}
      </div>
    </div>
  );
}
