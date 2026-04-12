import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
const GiRobberMask = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', display: 'inline-block', ...style }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm1 14h-2v-1h2v1zm1.07-7.75l-.9.92C12.45 9.9 12 10.5 12 12h-2c0-1.5.45-2.1 1.17-2.83l.9-.92c.36-.36.59-.86.59-1.41C12.66 5.8 11.86 5 10.92 5c-.93 0-1.74.8-1.74 1.74H7.44C7.44 4.68 9.03 3 10.92 3c1.89 0 3.48 1.68 3.48 3.74 0 .82-.34 1.57-.83 2.09l-.5.42z"/>
  </svg>
);
import { useDsaProgress } from '../hooks/useDsaProgress';
import { topicsData } from '../data/dsaTopics';

export default function DsaBookmarks() {
  const navigate = useNavigate();
  const { bookmarks } = useDsaProgress();
  const saved = bookmarks.map(id => topicsData[id]).filter(Boolean);

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 62, minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 4, height: 32, background: '#c9a96e', borderRadius: 2 }} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#c9a96e' }}>YOUR ARSENAL</span>
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#ede5d8', letterSpacing: '0.04em', lineHeight: 1 }}>
            SAVED <span style={{ color: '#e8001c' }}>TOPICS</span>
          </h1>
        </motion.div>

        {saved.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '5rem 0' }}>
            <div style={{ width: 60, height: 60, background: 'rgba(232,0,28,0.08)', border: '1px solid rgba(232,0,28,0.2)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <GiRobberMask style={{ color: '#e8001c', fontSize: '1.5rem' }} />
            </div>
            <p style={{ color: '#6a6070', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>NO TARGETS SAVED YET</p>
            <button className="p5-btn" onClick={() => navigate('/dsa-course/topics')}><span>BROWSE TOPICS</span></button>
          </motion.div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {saved.map((topic, i) => (
              <motion.div key={topic.id}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}
                onClick={() => navigate(`/dsa-course/topic/${topic.id}`)}
                style={{ background: 'rgba(10,8,14,0.8)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 8px 8px 0', padding: '1.1rem 1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.25s' }}
                whileHover={{ x: 4, borderColor: 'rgba(232,0,28,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{topic.icon}</span>
                  <div>
                    <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#ede5d8', fontSize: '1.1rem', letterSpacing: '0.05em' }}>{topic.name}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 2 }}>
                      <span style={{ color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{topic.level}</span>
                      <span style={{ color: '#3a3040' }}>·</span>
                      <span style={{ color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{topic.realm}</span>
                    </div>
                  </div>
                </div>
                <IoArrowForward style={{ color: '#e8001c', fontSize: '1rem' }} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
