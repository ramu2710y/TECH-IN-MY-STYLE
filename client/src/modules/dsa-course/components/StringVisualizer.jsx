import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const STR = 'racecar';

function generatePalindromeSteps(s) {
  const steps = [];
  let l = 0, r = s.length - 1;
  steps.push({ l: -1, r: -1, matched: [], failed: false, explanation: `Check if "${s}" is a palindrome using two pointers.`, phase: 'init' });
  while (l <= r) {
    steps.push({ l, r, matched: [], failed: false, explanation: `Compare s[${l}]='${s[l]}' and s[${r}]='${s[r]}'`, phase: 'compare' });
    if (s[l] !== s[r]) {
      steps.push({ l, r, matched: [], failed: true, explanation: `'${s[l]}' != '${s[r]}' — NOT a palindrome!`, phase: 'fail' });
      return steps;
    }
    steps.push({ l, r, matched: [l, r], failed: false, explanation: `Match! '${s[l]}' == '${s[r]}' — move pointers inward.`, phase: 'match' });
    l++; r--;
  }
  steps.push({ l: -1, r: -1, matched: Array.from({ length: s.length }, (_, i) => i), failed: false, explanation: `All characters matched! "${s}" IS a palindrome.`, phase: 'done' });
  return steps;
}

const STEPS = generatePalindromeSteps(STR);

export default function StringVisualizer() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);
  const timerRef = useRef(null);
  const cur = STEPS[idx];

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setIdx(i => { if (i >= STEPS.length - 1) { setPlaying(false); return i; } return i + 1; });
      }, speed);
    } else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [playing, speed]);

  const reset = () => { setPlaying(false); setIdx(0); };
  const step = () => { if (idx < STEPS.length - 1) setIdx(i => i + 1); };

  const charColor = (i) => {
    if (cur.failed && (i === cur.l || i === cur.r)) return '#e8001c';
    if (cur.matched.includes(i)) return '#3aff8a';
    if (i === cur.l || i === cur.r) return '#c9a96e';
    return '#6a6070';
  };
  const charBg = (i) => {
    if (cur.failed && (i === cur.l || i === cur.r)) return 'rgba(232,0,28,0.15)';
    if (cur.matched.includes(i)) return 'rgba(58,255,138,0.1)';
    if (i === cur.l || i === cur.r) return 'rgba(201,169,110,0.15)';
    return 'rgba(16,12,18,0.8)';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        📜 PALINDROME CHECK — TWO POINTER
      </h3>

      {/* String chars */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {STR.split('').map((ch, i) => (
          <motion.div key={i} animate={{ background: charBg(i), borderColor: charColor(i), scale: (i === cur.l || i === cur.r) ? 1.15 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: 48, height: 48, border: '2px solid', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.4rem', color: charColor(i), lineHeight: 1 }}>{ch}</span>
            <span style={{ fontSize: '0.55rem', color: '#6a6070', position: 'absolute', bottom: 2 }}>{i}</span>
            {/* Pointer labels */}
            {i === cur.l && cur.l !== -1 && (
              <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                style={{ position: 'absolute', top: -20, fontSize: '0.6rem', fontFamily: 'Bebas Neue, sans-serif', color: '#c9a96e', letterSpacing: '0.05em' }}>L</motion.div>
            )}
            {i === cur.r && cur.r !== -1 && i !== cur.l && (
              <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                style={{ position: 'absolute', top: -20, fontSize: '0.6rem', fontFamily: 'Bebas Neue, sans-serif', color: '#c9a96e', letterSpacing: '0.05em' }}>R</motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Pointer arrows */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['L (left)', cur.l, '#c9a96e'], ['R (right)', cur.r, '#c9a96e']].map(([label, val, color]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: color }} />
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#6a6070' }}>
              {label}: <span style={{ color }}>{val === -1 ? '—' : val}</span>
            </span>
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: '#3aff8a' }} />
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#6a6070' }}>
            Matched: <span style={{ color: '#3aff8a' }}>{cur.matched.length}</span>
          </span>
        </div>
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: cur.failed ? 'rgba(232,0,28,0.06)' : cur.phase === 'done' ? 'rgba(58,255,138,0.06)' : 'rgba(232,0,28,0.04)', border: `1px solid ${cur.failed ? 'rgba(232,0,28,0.25)' : cur.phase === 'done' ? 'rgba(58,255,138,0.2)' : 'rgba(232,0,28,0.1)'}`, borderLeft: `3px solid ${cur.failed ? '#e8001c' : cur.phase === 'done' ? '#3aff8a' : '#c9a96e'}`, borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['#c9a96e', 'Active Pointer'], ['#3aff8a', 'Matched'], ['#e8001c', 'Mismatch'], ['#6a6070', 'Unvisited']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
            <span style={{ color: '#6a6070', fontSize: '0.72rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        <button onClick={() => setPlaying(p => !p)} className={playing ? 'p5-btn' : 'p5-btn p5-btn-gold'} style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>{playing ? <IoPause /> : <IoPlay />}{playing ? 'PAUSE' : 'PLAY'}</span>
        </button>
        <button onClick={step} disabled={idx >= STEPS.length - 1} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', opacity: idx >= STEPS.length - 1 ? 0.4 : 1 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoPlaySkipForward />STEP</span>
        </button>
        <button onClick={reset} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoRefresh />RESET</span>
        </button>
        <SpeedControl speed={speed} onChange={setSpeed} />
        <div style={{ flex: 1, height: 3, background: 'rgba(232,0,28,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #e8001c, #c9a96e)', borderRadius: 2 }}
            animate={{ width: `${(idx / (STEPS.length - 1)) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
      </div>
    </div>
  );
}
