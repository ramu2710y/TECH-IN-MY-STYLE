import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Fibonacci call tree for fib(5)
// Each step shows the call stack and current computation
const STEPS = [
  { call: 'fib(5)', stack: ['fib(5)'], result: null, explanation: 'Call fib(5). Not base case — recurse into fib(4) and fib(3).', depth: 0 },
  { call: 'fib(4)', stack: ['fib(5)', 'fib(4)'], result: null, explanation: 'Call fib(4). Not base case — recurse into fib(3) and fib(2).', depth: 1 },
  { call: 'fib(3)', stack: ['fib(5)', 'fib(4)', 'fib(3)'], result: null, explanation: 'Call fib(3). Not base case — recurse into fib(2) and fib(1).', depth: 2 },
  { call: 'fib(2)', stack: ['fib(5)', 'fib(4)', 'fib(3)', 'fib(2)'], result: null, explanation: 'Call fib(2). Not base case — recurse into fib(1) and fib(0).', depth: 3 },
  { call: 'fib(1)', stack: ['fib(5)', 'fib(4)', 'fib(3)', 'fib(2)', 'fib(1)'], result: 1, explanation: 'fib(1) = 1 — BASE CASE! Return 1. Pop from stack.', depth: 4, isBase: true },
  { call: 'fib(0)', stack: ['fib(5)', 'fib(4)', 'fib(3)', 'fib(2)', 'fib(0)'], result: 0, explanation: 'fib(0) = 0 — BASE CASE! Return 0. Pop from stack.', depth: 4, isBase: true },
  { call: 'fib(2)=1', stack: ['fib(5)', 'fib(4)', 'fib(3)', 'fib(2)=1'], result: 1, explanation: 'fib(2) = fib(1) + fib(0) = 1 + 0 = 1. Return 1.', depth: 3, resolved: true },
  { call: 'fib(1)', stack: ['fib(5)', 'fib(4)', 'fib(3)', 'fib(1)'], result: 1, explanation: 'fib(1) = 1 — BASE CASE! Return 1.', depth: 3, isBase: true },
  { call: 'fib(3)=2', stack: ['fib(5)', 'fib(4)', 'fib(3)=2'], result: 2, explanation: 'fib(3) = fib(2) + fib(1) = 1 + 1 = 2. Return 2.', depth: 2, resolved: true },
  { call: 'fib(2)', stack: ['fib(5)', 'fib(4)', 'fib(2)'], result: null, explanation: 'Now compute fib(2) for fib(4). Recurse again.', depth: 2 },
  { call: 'fib(1)', stack: ['fib(5)', 'fib(4)', 'fib(2)', 'fib(1)'], result: 1, explanation: 'fib(1) = 1 — BASE CASE!', depth: 3, isBase: true },
  { call: 'fib(0)', stack: ['fib(5)', 'fib(4)', 'fib(2)', 'fib(0)'], result: 0, explanation: 'fib(0) = 0 — BASE CASE!', depth: 3, isBase: true },
  { call: 'fib(2)=1', stack: ['fib(5)', 'fib(4)', 'fib(2)=1'], result: 1, explanation: 'fib(2) = 1 + 0 = 1. Return 1.', depth: 2, resolved: true },
  { call: 'fib(4)=3', stack: ['fib(5)', 'fib(4)=3'], result: 3, explanation: 'fib(4) = fib(3) + fib(2) = 2 + 1 = 3. Return 3.', depth: 1, resolved: true },
  { call: 'fib(3)', stack: ['fib(5)', 'fib(3)'], result: null, explanation: 'Now compute fib(3) for fib(5). (Already computed — memoization would skip this!)', depth: 1 },
  { call: 'fib(3)=2', stack: ['fib(5)', 'fib(3)=2'], result: 2, explanation: 'fib(3) = 2 (resolved). Return 2.', depth: 1, resolved: true },
  { call: 'fib(5)=5', stack: ['fib(5)=5'], result: 5, explanation: 'fib(5) = fib(4) + fib(3) = 3 + 2 = 5. FINAL ANSWER: 5!', depth: 0, resolved: true, final: true },
];

export default function RecursionVisualizer() {
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

  const frameColor = (frame, i) => {
    const isTop = i === cur.stack.length - 1;
    if (cur.final) return '#3aff8a';
    if (cur.isBase && isTop) return '#c9a96e';
    if (cur.resolved && isTop) return '#3aff8a';
    if (isTop) return '#e8001c';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🌀 FIBONACCI RECURSION — CALL STACK
      </h3>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Call Stack */}
        <div style={{ flex: '0 0 180px' }}>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#6a6070', marginBottom: '0.5rem' }}>CALL STACK (TOP = ACTIVE)</div>
          <div style={{ border: '1px solid rgba(232,0,28,0.2)', borderRadius: '4px 4px 0 0', minHeight: 220, display: 'flex', flexDirection: 'column-reverse', padding: '0.5rem', gap: '0.35rem' }}>
            <AnimatePresence>
              {cur.stack.map((frame, i) => {
                const isTop = i === cur.stack.length - 1;
                const fc = frameColor(frame, i);
                return (
                  <motion.div key={`${i}-${frame}`}
                    initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }}
                    style={{ background: `${fc}12`, border: `1px solid ${fc}44`, borderRadius: 3, padding: '0.4rem 0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: isTop ? `0 0 10px ${fc}33` : 'none' }}>
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', color: fc, letterSpacing: '0.05em' }}>{frame}</span>
                    {isTop && <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.55rem', color: fc, letterSpacing: '0.08em' }}>TOP</span>}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div style={{ height: 5, background: 'linear-gradient(to right, #e8001c, #c9a96e)', borderRadius: '0 0 4px 4px' }} />
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#6a6070', marginTop: 4, textAlign: 'center' }}>
            DEPTH: {cur.stack.length}
          </div>
        </div>

        {/* Right panel */}
        <div style={{ flex: 1, minWidth: 180 }}>
          {/* Current call badge */}
          <motion.div key={cur.call} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: cur.isBase ? 'rgba(201,169,110,0.1)' : cur.resolved ? 'rgba(58,255,138,0.1)' : 'rgba(232,0,28,0.1)', border: `1px solid ${cur.isBase ? 'rgba(201,169,110,0.3)' : cur.resolved ? 'rgba(58,255,138,0.3)' : 'rgba(232,0,28,0.3)'}`, borderRadius: 3, padding: '0.3rem 0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: cur.isBase ? '#c9a96e' : cur.resolved ? '#3aff8a' : '#e8001c', letterSpacing: '0.08em' }}>
              {cur.isBase ? 'BASE CASE' : cur.resolved ? 'RETURNING' : 'CALLING'}
            </span>
            {cur.result !== null && (
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: '#ede5d8' }}>= {cur.result}</span>
            )}
          </motion.div>

          {/* Explanation */}
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
              <p style={{ color: '#c8c0b0', fontSize: '0.85rem', lineHeight: 1.6 }}>{cur.explanation}</p>
              <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
            </motion.div>
          </AnimatePresence>

          {/* fib sequence so far */}
          <div style={{ background: 'rgba(10,8,14,0.6)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: 4, padding: '0.75rem' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6a6070', marginBottom: '0.5rem' }}>FIBONACCI SEQUENCE</div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {[0,1,1,2,3,5].map((v, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: i <= cur.depth ? '#c9a96e' : '#3a3040', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.55rem', color: '#6a6070', letterSpacing: '0.08em' }}>fib({i})</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '1.5rem' }}>
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
