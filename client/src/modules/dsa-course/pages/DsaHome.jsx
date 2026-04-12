import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import { MdLockOutline, MdCheckCircle } from 'react-icons/md';
import { realms, learningPath, REALM_ICONS } from '../data/dsaTopics';
import { useDsaProgress } from '../hooks/useDsaProgress';

const GiRobberMask = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', display: 'inline-block', ...style }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm1 14h-2v-1h2v1zm1.07-7.75l-.9.92C12.45 9.9 12 10.5 12 12h-2c0-1.5.45-2.1 1.17-2.83l.9-.92c.36-.36.59-.86.59-1.41C12.66 5.8 11.86 5 10.92 5c-.93 0-1.74.8-1.74 1.74H7.44C7.44 4.68 9.03 3 10.92 3c1.89 0 3.48 1.68 3.48 3.74 0 .82-.34 1.57-.83 2.09l-.5.42z"/>
  </svg>
);

const GiDeathSkull = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '1em', height: '1em', display: 'inline-block', ...style }}>
    <path d="M12 2C7.03 2 3 6.03 3 11c0 3.1 1.53 5.83 3.88 7.5L7 20v1h10v-1l.12-1.5C19.47 16.83 21 14.1 21 11c0-4.97-4.03-9-9-9zm-2 14H8v-2h2v2zm6 0h-2v-2h2v2zm1-5H7V9h10v2z"/>
  </svg>
);

export default function DsaHome() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { isCompleted } = useDsaProgress();

  const totalTopics = learningPath.reduce((a, t) => a + t.topics.length, 0);
  const completedCount = learningPath.reduce((a, t) => a + t.topics.filter(tp => isCompleted(tp.id)).length, 0);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>

      {/* HERO */}
      <section ref={heroRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: 62 }}>
        <div className="p5-stripe-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(232,0,28,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 50% 70%, rgba(201,169,110,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 80, left: 0, width: 4, height: 200, background: 'linear-gradient(to bottom, transparent, #e8001c, transparent)', transform: 'skewY(-20deg)' }} />
        <div style={{ position: 'absolute', top: 80, right: 0, width: 4, height: 200, background: 'linear-gradient(to bottom, transparent, #c9a96e, transparent)', transform: 'skewY(20deg)' }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity, textAlign: 'center', padding: '0 1.5rem', maxWidth: 860, position: 'relative', zIndex: 2 }}>

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: '2rem' }}>
            <div className="phantom-badge">
              <GiRobberMask style={{ fontSize: '0.65rem' }} />
              PHANTOM THIEVES OF ALGORITHMS
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(1rem, 3vw, 1.4rem)', letterSpacing: '0.3em', color: '#6a6070', marginBottom: '0.5rem' }}>
              STEAL THE LOGIC. MASTER THE CODE.
            </div>
            <h1 className="glitch-text" data-text="DSA IN MY STYLE"
              style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 400, lineHeight: 0.9, letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
              <span style={{ color: '#ede5d8' }}>DSA </span>
              <span style={{ color: '#e8001c', textShadow: '0 0 30px rgba(232,0,28,0.4)' }}>IN MY</span>
              <br />
              <span style={{ color: '#c9a96e', textShadow: '0 0 20px rgba(201,169,110,0.3)' }}>STYLE</span>
            </h1>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            style={{ color: '#6a6070', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', lineHeight: 1.8, margin: '1.5rem auto 2.5rem', maxWidth: 520 }}>
            Not a course. A heist.<br />
            <span style={{ color: '#a09080' }}>Enter the Palace of Data Structures. Steal every secret.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="p5-btn" onClick={() => navigate('/dsa-course/topic/arrays')}>
              <span>BEGIN THE HEIST</span>
            </button>
            <button className="p5-btn p5-btn-gold" onClick={() => document.getElementById('dsa-realms').scrollIntoView({ behavior: 'smooth' })}>
              <span>EXPLORE REALMS</span>
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[
              [String(totalTopics), 'TOPICS'],
              [String(learningPath.length), 'TIERS'],
              ['∞', 'MASTERY'],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', color: '#e8001c', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: '#6a6070', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ color: '#6a6070', fontSize: '0.65rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.2em' }}>SCROLL</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <IoChevronDown style={{ color: '#e8001c', fontSize: '0.85rem' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* REALMS */}
      <section id="dsa-realms" style={{ padding: '6rem 1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 4, height: 32, background: '#e8001c', borderRadius: 2 }} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#e8001c' }}>CHOOSE YOUR PALACE</span>
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ede5d8', letterSpacing: '0.05em', lineHeight: 1 }}>
            DATA STRUCTURE <span style={{ color: '#c9a96e' }}>REALMS</span>
          </h2>
          <p style={{ color: '#6a6070', marginTop: '0.75rem', fontSize: '0.9rem' }}>Each realm is a Palace. Enter, steal the treasure, conquer.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {realms.map((realm, i) => (
            <motion.div key={realm.id}
              initial={{ opacity: 0, y: 40, skewX: -2 }} whileInView={{ opacity: 1, y: 0, skewX: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="realm-card" onClick={() => navigate(`/dsa-course/topic/${realm.id}`)}
              style={{ borderRadius: 4, padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 0, height: 0, borderTop: `40px solid ${realm.color}22`, borderLeft: '40px solid transparent' }} />
              <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, borderRadius: '50%', background: realm.glow, filter: 'blur(30px)', opacity: 0.5, pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{REALM_ICONS[realm.icon] || realm.icon}</span>
                <div className="phantom-badge" style={{ borderColor: `${realm.color}44`, color: realm.color, background: `${realm.color}10` }}>
                  {realm.level}
                </div>
              </div>
              <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#ede5d8', fontSize: '1.3rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{realm.name}</h3>
              <p style={{ color: '#6a6070', fontSize: '0.83rem', lineHeight: 1.6 }}>{realm.description}</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: 6, color: realm.color, fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em' }}>
                ENTER PALACE <span style={{ fontSize: '1rem' }}>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="p5-divider" style={{ maxWidth: 1200, margin: '0 auto' }} />

      {/* LEARNING PATH */}
      <section style={{ padding: '6rem 1.5rem', maxWidth: 860, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 4, height: 32, background: '#c9a96e', borderRadius: 2 }} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', letterSpacing: '0.2em', color: '#c9a96e' }}>YOUR PROGRESSION</span>
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ede5d8', letterSpacing: '0.05em', lineHeight: 1 }}>
            THE <span style={{ color: '#e8001c' }}>HEIST</span> PLAN
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, rgba(232,0,28,0.4), rgba(201,169,110,0.4), transparent)' }} />
          {learningPath.map((tier, ti) => (
            <motion.div key={tier.tier}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: ti * 0.15 }}
              style={{ marginBottom: '3rem', paddingLeft: '3.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 12, top: 8, width: 18, height: 18, borderRadius: 3, background: tier.color, transform: 'rotate(45deg)', boxShadow: `0 0 12px ${tier.color}66` }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="phantom-badge" style={{ borderColor: `${tier.color}44`, color: tier.color, background: `${tier.color}10` }}>
                  {tier.tier}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {tier.topics.map(topic => {
                  const done = isCompleted(topic.id);
                  return (
                    <motion.div key={topic.id} whileHover={{ x: 4 }}
                      onClick={() => navigate(`/dsa-course/topic/${topic.id}`)}
                      style={{ background: done ? `${tier.color}10` : 'rgba(16,12,18,0.8)', border: `1px solid ${done ? tier.color + '44' : 'rgba(232,0,28,0.12)'}`, borderLeft: `3px solid ${done ? tier.color : 'rgba(232,0,28,0.2)'}`, borderRadius: '0 4px 4px 0', padding: '0.6rem 1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.25s' }}>
                      {done ? <MdCheckCircle style={{ color: tier.color, fontSize: '0.9rem' }} /> : <MdLockOutline style={{ color: '#6a6070', fontSize: '0.9rem' }} />}
                      <span style={{ color: done ? '#ede5d8' : '#6a6070', fontSize: '0.82rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{topic.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MASTERY CARD */}
      <section style={{ padding: '2rem 1.5rem 6rem', maxWidth: 860, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ background: 'rgba(10,8,14,0.9)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 4, padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, borderTop: '60px solid rgba(232,0,28,0.12)', borderRight: '60px solid transparent' }} />
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: 0, height: 0, borderBottom: '60px solid rgba(201,169,110,0.08)', borderLeft: '60px solid transparent' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <GiDeathSkull style={{ color: '#e8001c', fontSize: '1.5rem' }} />
            <div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', color: '#e8001c' }}>PHANTOM THIEF RANK</div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', color: '#ede5d8', lineHeight: 1 }}>
                {completedCount} <span style={{ color: '#6a6070', fontSize: '1rem' }}>/ {totalTopics} CONQUERED</span>
              </div>
            </div>
          </div>
          <div style={{ background: 'rgba(232,0,28,0.06)', borderRadius: 2, height: 6, overflow: 'hidden', marginBottom: '0.75rem' }}>
            <motion.div initial={{ width: 0 }} whileInView={{ width: `${(completedCount / totalTopics) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ height: '100%', background: 'linear-gradient(to right, #e8001c, #c9a96e)', borderRadius: 2 }} />
          </div>
          <p style={{ color: '#6a6070', fontSize: '0.8rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em' }}>
            {completedCount === 0 ? 'THE HEIST BEGINS. ENTER YOUR FIRST PALACE.' : completedCount === totalTopics ? 'ALL PALACES CONQUERED. YOU ARE THE PHANTOM KING.' : `${totalTopics - completedCount} PALACES REMAIN. KEEP STEALING.`}
          </p>
        </motion.div>
      </section>

    </div>
  );
}