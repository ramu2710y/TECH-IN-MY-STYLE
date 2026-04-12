import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NlpIcon } from './NlpIcons';
import { FaArrowRight } from 'react-icons/fa';

export default function NlpTopicCard({ topic, index }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -5 }}
      onClick={() => navigate(`/nlp-course/topic/${topic.id}`)}
      style={{
        cursor: 'pointer',
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 16,
        padding: '28px 24px',
        display: 'flex', flexDirection: 'column', gap: 16,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        position: 'relative', overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(201,168,76,0.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)',
      }} />

      <div style={{
        width: 46, height: 46, borderRadius: 12,
        background: 'rgba(201,168,76,0.08)',
        border: '1px solid rgba(201,168,76,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <NlpIcon name={topic.iconKey} size={18} style={{ color: '#c9a84c' }} />
      </div>

      <div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 17, fontWeight: 700, color: '#f0ece4',
          marginBottom: 8, lineHeight: 1.3,
        }}>{topic.title}</h3>
        <p style={{ fontSize: 13, color: '#8a9ab5', lineHeight: 1.65 }}>{topic.description}</p>
      </div>

      <div style={{
        marginTop: 'auto',
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
        color: '#c9a84c', textTransform: 'uppercase',
      }}>
        Explore <FaArrowRight size={10} />
      </div>
    </motion.div>
  );
}
