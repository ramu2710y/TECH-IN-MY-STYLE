import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const ARR = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
const TARGET = 23;

function generateSteps(arr, target) {
  const steps = [];
  let lo = 0, hi = arr.length - 1;
  steps.push({ lo, hi, mid: -1, found: -1, eliminated: [], explanation: `Search for ${target} in sorted array of ${arr.length} elements. Binary Search: O(log n).`, codeLine: 0 });
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    steps.push({ lo, hi, mid, found: -1, eliminated: [], explanation: `lo=${lo}, hi=${hi} → mid=${mid}, arr[mid]=${arr[mid]}. Compare with target ${target}.`, codeLine: 1 });
    if (arr[mid] === target) {
      steps.push({ lo, hi, mid, found: mid, eliminated: [], explanation: `FOUND! arr[${mid}] = ${target}. Search complete in O(log n).`, codeLine: 2 });
      return steps;
    }
    const elim = arr[mid] < target
      ? Array.from({ length: mid - 0 + 1 }, (_, i) => i)
      : Array.from({ length: arr.length - mid }, (_, i) => mid + i);
    if (arr[mid] < target) {
      steps.push({ lo, hi, mid, found: -1, eliminated: elim, explanation: `arr[${mid}]=${arr[mid]} < ${target} → eliminate left half. Search right: [${mid + 1}..${hi}]`, codeLine: 3 });
      lo = mid + 1;
    } else {
      steps.push({ lo, hi, mid, found: -1, eliminated: elim, explanation: `arr[${mid}]=${arr[mid]} > ${target} → eliminate right half. Search left: [${lo}..${mid - 1}]`, codeLine: 4 });
      hi = mid - 1;
    }
  }
  steps.push({ lo, hi, mid: -1, found: -1, eliminated: [], explanation: `Target ${target} not found. Search space exhausted.`, codeLine: 5 });
  return steps;
}

const STEPS = generateSteps(ARR, TARGET);
const CODE_LINES = [
  'lo, hi = 0, len(arr) - 1',
  'mid = (lo + hi) // 2',
  'if arr[mid] == target: return mid',
  'elif arr[mid] < target: lo = mid + 1',
  'else: hi = mid - 1',
  'return -1  # not found',
];

export default function BinarySearchVisualizer() {
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
    if (cur.found === i) return '#3aff8a';
    if (cur.mid === i) return '#e8001c';
    if (cur.eliminated.includes(i)) return '#2a2030';
    if (i >= cur.lo && i <= cur.hi) return '#c9a96e';
    return '#3a3040';
  };
  const textColor = (i) => {
    if (cur.found === i) return '#3aff8a';
    if (cur.mid === i) return '#e8001c';
    if (cur.eliminated.includes(i)) return '#3a3040';
    if (i >= cur.lo && i <= cur.hi) return '#ede5d8';
    return '#6a6070';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        🎯 BINARY SEARCH — O(log n)
      </h3>
      <p style={{ color: '#6a6070', fontSize: '0.78rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
        TARGET: <span style={{ color: '#e8001c' }}>{TARGET}</span>
      </p>

      {/* Array cells */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {ARR.map((val, i) => (
          <motion.div key={i}
            animate={{ borderColor: cellColor(i), background: `${cellColor(i)}18`, scale: cur.mid === i ? 1.12 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ width: 46, border: '2px solid', borderRadius: 6, overflow: 'hidden', position: 'relative', boxShadow: cur.mid === i ? `0 0 14px ${cellColor(i)}66` : 'none' }}>
            <div style={{ padding: '0.5rem 0', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: textColor(i), lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '0.55rem', color: '#6a6070', marginTop: 2 }}>{i}</div>
            </div>
            {cur.mid === i && <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.55rem', color: '#e8001c', letterSpacing: '0.05em' }}>MID</div>}
            {i === cur.lo && cur.found === -1 && cur.mid !== i && <div style={{ position: 'absolute', top: -16, left: 0, fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.5rem', color: '#c9a96e' }}>LO</div>}
            {i === cur.hi && cur.found === -1 && cur.mid !== i && <div style={{ position: 'absolute', top: -16, right: 0, fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.5rem', color: '#c9a96e' }}>HI</div>}
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['LO', cur.lo, '#c9a96e'], ['MID', cur.mid === -1 ? '—' : cur.mid, '#e8001c'], ['HI', cur.hi, '#c9a96e'], ['STEP', idx + 1, '#8a6aff']].map(([l, v, c]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', color: c, lineHeight: 1 }}>{v}</div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.12em', color: '#6a6070' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* Code */}
      <div className="code-block" style={{ padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.78rem' }}>
        {CODE_LINES.map((line, i) => (
          <span key={i} className={cur.codeLine === i ? 'line-highlight' : ''} style={{ display: 'block', color: cur.codeLine === i ? '#c9a96e' : '#6a6070' }}>{line}</span>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: cur.found !== -1 ? 'rgba(58,255,138,0.06)' : 'rgba(232,0,28,0.04)', border: `1px solid ${cur.found !== -1 ? 'rgba(58,255,138,0.2)' : 'rgba(232,0,28,0.1)'}`, borderLeft: `3px solid ${cur.found !== -1 ? '#3aff8a' : '#e8001c'}`, borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['#e8001c', 'Mid'], ['#c9a96e', 'Search Space'], ['#3aff8a', 'Found'], ['#2a2030', 'Eliminated']].map(([c, l]) => (
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
