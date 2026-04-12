import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const ARR = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const QUERIES = [[1, 4], [0, 6], [3, 8], [2, 5]];

function generateSteps(arr, queries) {
  const steps = [];
  const prefix = new Array(arr.length + 1).fill(0);

  steps.push({ arr, prefix: [...prefix], building: -1, query: null, result: null, highlight: [], explanation: 'Prefix Sum: precompute cumulative sums. prefix[i] = sum of arr[0..i-1]. O(n) build, O(1) range query.', phase: 'init' });

  // Build prefix array
  for (let i = 1; i <= arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i - 1];
    steps.push({ arr, prefix: [...prefix], building: i, query: null, result: null, highlight: [i - 1], explanation: `prefix[${i}] = prefix[${i - 1}] + arr[${i - 1}] = ${prefix[i - 1]} + ${arr[i - 1]} = ${prefix[i]}`, phase: 'build' });
  }
  steps.push({ arr, prefix: [...prefix], building: -1, query: null, result: null, highlight: [], explanation: `Prefix array built! Now any range sum query [l, r] = prefix[r+1] - prefix[l] in O(1).`, phase: 'built' });

  // Answer queries
  for (const [l, r] of queries) {
    const result = prefix[r + 1] - prefix[l];
    steps.push({ arr, prefix: [...prefix], building: -1, query: [l, r], result: null, highlight: Array.from({ length: r - l + 1 }, (_, i) => l + i), explanation: `Query sum(${l}, ${r}): elements [${arr.slice(l, r + 1).join(', ')}]`, phase: 'query' });
    steps.push({ arr, prefix: [...prefix], building: -1, query: [l, r], result, highlight: Array.from({ length: r - l + 1 }, (_, i) => l + i), explanation: `sum(${l}, ${r}) = prefix[${r + 1}] - prefix[${l}] = ${prefix[r + 1]} - ${prefix[l]} = ${result}. O(1)!`, phase: 'answer' });
  }
  return steps;
}

const STEPS = generateSteps(ARR, QUERIES);

export default function PrefixSumVisualizer() {
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

  const arrCellColor = (i) => {
    if (cur.highlight.includes(i)) return cur.phase === 'answer' ? '#3aff8a' : '#e8001c';
    if (cur.building === i + 1) return '#c9a96e';
    return '#3a3040';
  };

  const prefixCellColor = (i) => {
    if (cur.query && (i === cur.query[0] || i === cur.query[1] + 1)) return '#e8001c';
    if (cur.building === i) return '#c9a96e';
    if (i <= (cur.building === -1 ? ARR.length : cur.building - 1) && cur.prefix[i] !== 0) return '#8a6aff';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        ∑ PREFIX SUM — O(1) RANGE QUERIES
      </h3>

      {/* Original array */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070', marginBottom: '0.5rem' }}>ORIGINAL ARRAY</div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {ARR.map((val, i) => (
            <motion.div key={i}
              animate={{ borderColor: arrCellColor(i), background: `${arrCellColor(i)}18`, scale: cur.highlight.includes(i) ? 1.1 : 1, boxShadow: cur.highlight.includes(i) ? `0 0 12px ${arrCellColor(i)}55` : 'none' }}
              transition={{ duration: 0.3 }}
              style={{ width: 40, height: 40, border: '2px solid', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.95rem', color: arrCellColor(i), lineHeight: 1 }}>{val}</span>
              <span style={{ fontSize: '0.5rem', color: '#6a6070' }}>{i}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Prefix array */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070', marginBottom: '0.5rem' }}>PREFIX ARRAY (size n+1)</div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {cur.prefix.map((val, i) => (
            <motion.div key={i}
              animate={{ borderColor: prefixCellColor(i), background: `${prefixCellColor(i)}18`, scale: cur.building === i ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ width: 40, height: 40, border: '2px solid', borderRadius: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: prefixCellColor(i), lineHeight: 1 }}>{val}</span>
              <span style={{ fontSize: '0.5rem', color: '#6a6070' }}>{i}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Query result */}
      {cur.query && (
        <motion.div key={`q-${cur.query}`} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', background: 'rgba(138,106,255,0.08)', border: '1px solid rgba(138,106,255,0.2)', borderRadius: 4, padding: '0.6rem 1rem' }}>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', color: '#8a6aff', letterSpacing: '0.1em' }}>QUERY sum({cur.query[0]}, {cur.query[1]})</span>
          {cur.result !== null && (
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', color: '#3aff8a', lineHeight: 1 }}>= {cur.result}</span>
          )}
        </motion.div>
      )}

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
        </motion.div>
      </AnimatePresence>

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
