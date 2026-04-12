import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Max sum subarray of size K
const ARR = [2, 1, 5, 1, 3, 2, 8, 4, 1, 6];
const K = 3;

function generateSteps(arr, k) {
  const steps = [];
  steps.push({ l: -1, r: -1, window: [], sum: 0, maxSum: 0, maxL: -1, explanation: `Find max sum subarray of size ${k}. Sliding Window: O(n) instead of O(n*k).`, phase: 'init' });

  // Build first window
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    steps.push({ l: 0, r: i, window: arr.slice(0, i + 1), sum, maxSum: sum, maxL: 0, explanation: `Build initial window: add arr[${i}]=${arr[i]}. Sum = ${sum}.`, phase: 'build' });
  }
  let maxSum = sum, maxL = 0;
  steps.push({ l: 0, r: k - 1, window: arr.slice(0, k), sum, maxSum, maxL, explanation: `Initial window [0..${k - 1}] = [${arr.slice(0, k).join(', ')}]. Sum = ${sum}. This is our current max.`, phase: 'window' });

  for (let r = k; r < arr.length; r++) {
    const l = r - k + 1;
    sum = sum + arr[r] - arr[r - k];
    steps.push({ l, r, window: arr.slice(l, r + 1), sum, maxSum, maxL, explanation: `Slide: add arr[${r}]=${arr[r]}, remove arr[${r - k}]=${arr[r - k]}. New sum = ${sum}.`, phase: 'slide' });
    if (sum > maxSum) {
      maxSum = sum; maxL = l;
      steps.push({ l, r, window: arr.slice(l, r + 1), sum, maxSum, maxL, explanation: `New max! Sum ${sum} > previous max. Window [${l}..${r}] = [${arr.slice(l, r + 1).join(', ')}].`, phase: 'newmax' });
    }
  }
  steps.push({ l: maxL, r: maxL + k - 1, window: arr.slice(maxL, maxL + k), sum: maxSum, maxSum, maxL, explanation: `DONE! Max sum = ${maxSum} at window [${maxL}..${maxL + k - 1}] = [${arr.slice(maxL, maxL + k).join(', ')}].`, phase: 'done' });
  return steps;
}

const STEPS = generateSteps(ARR, K);

export default function SlidingWindowVisualizer() {
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
    if (cur.phase === 'done' && i >= cur.maxL && i < cur.maxL + K) return '#3aff8a';
    if (cur.phase === 'newmax' && i >= cur.l && i <= cur.r) return '#3aff8a';
    if (i >= cur.l && i <= cur.r) return '#e8001c';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        🪟 SLIDING WINDOW — MAX SUM SUBARRAY
      </h3>
      <p style={{ color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
        WINDOW SIZE: <span style={{ color: '#e8001c' }}>{K}</span>
      </p>

      {/* Array */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem', paddingTop: '0.5rem' }}>
        {ARR.map((val, i) => {
          const c = cellColor(i);
          const inWindow = i >= cur.l && i <= cur.r && cur.l !== -1;
          return (
            <motion.div key={i}
              animate={{ borderColor: c, background: `${c}18`, scale: inWindow ? 1.08 : 1, boxShadow: inWindow ? `0 0 12px ${c}55` : 'none' }}
              transition={{ duration: 0.3 }}
              style={{ width: 44, height: 44, border: '2px solid', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: c, lineHeight: 1 }}>{val}</span>
              <span style={{ fontSize: '0.5rem', color: '#6a6070' }}>{i}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Window bracket */}
      {cur.l !== -1 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#6a6070' }}>WINDOW:</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.9rem', color: '#e8001c' }}>[{cur.window.join(', ')}]</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#6a6070' }}>SUM:</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', color: cur.phase === 'newmax' || cur.phase === 'done' ? '#3aff8a' : '#c9a96e', lineHeight: 1 }}>{cur.sum}</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em', color: '#6a6070' }}>MAX:</span>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.2rem', color: '#3aff8a', lineHeight: 1 }}>{cur.maxSum}</span>
        </div>
      )}

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: cur.phase === 'done' || cur.phase === 'newmax' ? 'rgba(58,255,138,0.06)' : 'rgba(232,0,28,0.04)', border: `1px solid ${cur.phase === 'done' || cur.phase === 'newmax' ? 'rgba(58,255,138,0.2)' : 'rgba(232,0,28,0.1)'}`, borderLeft: `3px solid ${cur.phase === 'done' || cur.phase === 'newmax' ? '#3aff8a' : '#e8001c'}`, borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['#e8001c', 'Current Window'], ['#3aff8a', 'Max Window'], ['#3a3040', 'Outside']].map(([c, l]) => (
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
