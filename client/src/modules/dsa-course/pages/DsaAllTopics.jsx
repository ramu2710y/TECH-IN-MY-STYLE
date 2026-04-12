import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoSearch, IoArrowForward } from 'react-icons/io5';
import { MdCheckCircle, MdLockOutline } from 'react-icons/md';
import { learningPath } from '../data/dsaTopics';
import { useDsaProgress } from '../hooks/useDsaProgress';

export default function DsaAllTopics() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const { isCompleted } = useDsaProgress();

  const filtered = learningPath.map(tier => ({
    ...tier,
    topics: tier.topics.filter(t => t.name.toLowerCase().includes(query.toLowerCase())),
  })).filter(tier => tier.topics.length > 0);

  return (
    <div style={{ position: 'relative', zIndex: 1, paddingTop: 62, minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 4, height: 32, background: '#e8001c', borderRadius: 2 }} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#e8001c' }}>ALL PALACES</span>
          </div>
          <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#ede5d8', letterSpacing: '0.04em', lineHeight: 1 }}>
            TOPIC <span style={{ color: '#c9a96e' }}>LIBRARY</span>
          </h1>
          <p style={{ color: '#6a6070', marginTop: '0.5rem', fontSize: '0.85rem' }}>Every realm. Every weapon. Choose your path.</p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: 420, marginBottom: '3rem' }}>
          <IoSearch style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#6a6070', fontSize: '0.9rem' }} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search topics..."
            style={{ width: '100%', background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.15)', borderLeft: '3px solid #e8001c', borderRadius: '0 4px 4px 0', padding: '0.7rem 1rem 0.7rem 2.5rem', color: '#ede5d8', fontSize: '0.88rem', outline: 'none', fontFamily: 'Inter, sans-serif' }} />
        </div>

        {filtered.map((tier, ti) => (
          <motion.div key={tier.tier} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: ti * 0.1 }} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: 3, height: 24, background: tier.color, borderRadius: 2 }} />
              <div className="phantom-badge" style={{ borderColor: `${tier.color}44`, color: tier.color, background: `${tier.color}10` }}>
                {tier.tier}
              </div>
              <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${tier.color}33, transparent)` }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem' }}>
              {tier.topics.map(topic => {
                const done = isCompleted(topic.id);
                return (
                  <motion.div key={topic.id} whileHover={{ x: 4 }} onClick={() => navigate(topic.path)}
                    style={{ background: done ? `${tier.color}08` : 'rgba(10,8,14,0.8)', border: `1px solid ${done ? tier.color + '33' : 'rgba(232,0,28,0.1)'}`, borderLeft: `3px solid ${done ? tier.color : 'rgba(232,0,28,0.2)'}`, borderRadius: '0 6px 6px 0', padding: '0.85rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.25s' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {done ? <MdCheckCircle style={{ color: tier.color, fontSize: '0.9rem' }} /> : <MdLockOutline style={{ color: '#6a6070', fontSize: '0.9rem' }} />}
                      <span style={{ color: done ? '#ede5d8' : '#a09080', fontSize: '0.85rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{topic.name}</span>
                    </div>
                    <IoArrowForward style={{ color: '#6a6070', fontSize: '0.85rem' }} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
