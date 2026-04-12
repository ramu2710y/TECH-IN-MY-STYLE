import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Activity Selection Problem
const ACTIVITIES = [
  { id: 'A', start: 1, end: 4 },
  { id: 'B', start: 3, end: 5 },
  { id: 'C', start: 0, end: 6 },
  { id: 'D', start: 5, end: 7 },
  { id: 'E', start: 3, end: 9 },
  { id: 'F', start: 5, end: 9 },
  { id: 'G', start: 6, end: 10 },
  { id: 'H', start: 8, end: 11 },
  { id: 'I', start: 8, end: 12 },
];

function generateSteps() {
  const steps = [];
  const sorted = [...ACTIVITIES].sort((a, b) => a.end - b.end);
  steps.push({ activities: ACTIVITIES, sorted: [], selected: [], current: null, explanation: 'Activity Selection: Select max non-overlapping activities. Greedy: always pick earliest finishing activity.' });
  steps.push({ activities: ACTIVITIES, sorted: sorted.map(a => a.id), selected: [], current: null, explanation: `Sort by finish time: ${sorted.map(a => `${a.id}(end=${a.end})`).join(' → ')}` });

  const selected = [];
  let lastEnd = -1;

  for (const act of sorted) {
    steps.push({ activities: ACTIVITIES, sorted: sorted.map(a => a.id), selected: [...selected], current: act.id, explanation: `Consider activity ${act.id} [${act.start}, ${act.end}]. Last end = ${lastEnd}.` });
    if (act.start >= lastEnd) {
      selected.push(act.id);
      lastEnd = act.end;
      steps.push({ activities: ACTIVITIES, sorted: sorted.map(a => a.id), selected: [...selected], current: act.id, explanation: `✓ Select ${act.id}! Start ${act.start} >= last end ${lastEnd === act.end ? '(prev)' : lastEnd}. Selected: [${selected.join(', ')}]` });
    } else {
      steps.push({ activities: ACTIVITIES, sorted: sorted.map(a => a.id), selected: [...selected], current: act.id, explanation: `✗ Skip ${act.id}. Start ${act.start} < last end ${lastEnd}. Overlaps!` });
    }
  }
  steps.push({ activities: ACTIVITIES, sorted: sorted.map(a => a.id), selected, current: null, explanation: `DONE! Maximum ${selected.length} activities selected: [${selected.join(', ')}]. Greedy gives optimal solution here.` });
  return steps;
}

const STEPS = generateSteps();
const MAX_TIME = 13;

export default function GreedyVisualizer() {
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

  const actColor = (act) => {
    if (cur.selected.includes(act.id)) return '#3aff8a';
    if (cur.current === act.id) return '#e8001c';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        ⚡ ACTIVITY SELECTION — GREEDY
      </h3>

      {/* Timeline */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070', marginBottom: '0.5rem' }}>TIMELINE (0 → {MAX_TIME})</div>
        {/* Time axis */}
        <div style={{ display: 'flex', marginBottom: 4 }}>
          {Array(MAX_TIME + 1).fill(0).map((_, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.55rem', color: '#6a6070' }}>{i}</div>
          ))}
        </div>
        {/* Activity bars */}
        {ACTIVITIES.map(act => {
          const c = actColor(act);
          const isCurrent = cur.current === act.id;
          return (
            <div key={act.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 4, gap: 4 }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', color: c, minWidth: 16, letterSpacing: '0.05em' }}>{act.id}</span>
              <div style={{ flex: 1, position: 'relative', height: 20 }}>
                <div style={{ position: 'absolute', height: '100%', background: 'rgba(58,48,64,0.3)', width: '100%', borderRadius: 2 }} />
                <motion.div
                  animate={{ background: `${c}${isCurrent ? 'cc' : '88'}`, boxShadow: isCurrent ? `0 0 8px ${c}88` : 'none' }}
                  transition={{ duration: 0.3 }}
                  style={{ position: 'absolute', left: `${(act.start / MAX_TIME) * 100}%`, width: `${((act.end - act.start) / MAX_TIME) * 100}%`, height: '100%', borderRadius: 2, border: `1px solid ${c}` }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected activities */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>SELECTED:</span>
        <AnimatePresence>
          {cur.selected.map(id => (
            <motion.div key={id} initial={{ scale: 0 }} animate={{ scale: 1 }}
              style={{ background: 'rgba(58,255,138,0.12)', border: '1px solid rgba(58,255,138,0.4)', borderRadius: 3, padding: '0.15rem 0.5rem', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: '#3aff8a' }}>
              {id}
            </motion.div>
          ))}
        </AnimatePresence>
        {cur.selected.length === 0 && <span style={{ color: '#6a6070', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem' }}>NONE YET</span>}
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['#3aff8a', 'Selected'], ['#e8001c', 'Considering'], ['#3a3040', 'Skipped']].map(([c, l]) => (
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
