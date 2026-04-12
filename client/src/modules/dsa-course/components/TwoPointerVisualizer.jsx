import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Two Sum II - sorted array, find pair summing to target
const ARR = [-4, -1, 0, 2, 5, 8, 11, 14];
const TARGET = 13;

function generateSteps(arr, target) {
  const steps = [];
  let l = 0, r = arr.length - 1;
  steps.push({ l: -1, r: -1, found: false, sum: null, explanation: `Two Pointers on sorted array. Find pair summing to ${target}. Start: left=0, right=${arr.length - 1}.`, phase: 'init' });

  while (l < r) {
    const sum = arr[l] + arr[r];
    steps.push({ l, r, found: false, sum, explanation: `arr[${l}]=${arr[l]} + arr[${r}]=${arr[r]} = ${sum}. Target = ${target}.`, phase: 'compare' });
    if (sum === target) {
      steps.push({ l, r, found: true, sum, explanation: `FOUND! arr[${l}] + arr[${r}] = ${sum} = ${target}. Answer: indices [${l}, ${r}].`, phase: 'found' });
      return steps;
    } else if (sum < target) {
      steps.push({ l, r, found: false, sum, explanation: `Sum ${sum} < ${target}. Move LEFT pointer right to increase sum.`, phase: 'move_l' });
      l++;
    } else {
      steps.push({ l, r, found: false, sum, explanation: `Sum ${sum} > ${target}. Move RIGHT pointer left to decrease sum.`, phase: 'move_r' });
      r--;
    }
  }
  steps.push({ l, r, found: false, sum: null, explanation: 'Pointers crossed. No pair found.', phase: 'done' });
  return steps;
}

const STEPS = generateSteps(ARR, TARGET);

export default function TwoPointerVisualizer() {
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

  const cellColor = (i) => {
    if (cur.found && (i === cur.l || i === cur.r)) return '#3aff8a';
    if (i === cur.l) return '#e8001c';
    if (i === cur.r) return '#c9a96e';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        👆👆 TWO POINTERS — TWO SUM II
      </h3>
      <p style={{ color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
        TARGET: <span style={{ color: '#e8001c' }}>{TARGET}</span> &nbsp;|&nbsp; SORTED ARRAY
      </p>

      {/* Array */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '2rem', paddingTop: '1.5rem', position: 'relative' }}>
        {ARR.map((val, i) => {
          const c = cellColor(i);
          const isL = i === cur.l;
          const isR = i === cur.r;
          return (
            <div key={i} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Pointer label above */}
              <div style={{ height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isL && <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', color: '#e8001c', letterSpacing: '0.05em' }}>L</motion.span>}
                {isR && !isL && <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', color: '#c9a96e', letterSpacing: '0.05em' }}>R</motion.span>}
              </div>
              <motion.div
                animate={{ borderColor: c, background: `${c}18`, scale: (isL || isR) ? 1.1 : 1, boxShadow: (isL || isR) ? `0 0 14px ${c}66` : 'none' }}
                transition={{ duration: 0.3 }}
                style={{ width: 44, height: 44, border: '2px solid', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: c, lineHeight: 1 }}>{val}</span>
                <span style={{ fontSize: '0.5rem', color: '#6a6070' }}>{i}</span>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Sum display */}
      {cur.sum !== null && (
        <motion.div key={cur.sum} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', color: '#6a6070', letterSpacing: '0.1em' }}>CURRENT SUM:</div>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', color: cur.found ? '#3aff8a' : cur.sum < TARGET ? '#e8001c' : '#c9a96e', lineHeight: 1 }}>{cur.sum}</div>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', color: '#6a6070' }}>
            {cur.found ? '= TARGET ✓' : cur.sum < TARGET ? '< TARGET → move L →' : '> TARGET → ← move R'}
          </div>
        </motion.div>
      )}

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: cur.found ? 'rgba(58,255,138,0.06)' : 'rgba(232,0,28,0.04)', border: `1px solid ${cur.found ? 'rgba(58,255,138,0.2)' : 'rgba(232,0,28,0.1)'}`, borderLeft: `3px solid ${cur.found ? '#3aff8a' : '#e8001c'}`, borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['#e8001c', 'Left Pointer'], ['#c9a96e', 'Right Pointer'], ['#3aff8a', 'Found Pair']].map(([c, l]) => (
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
