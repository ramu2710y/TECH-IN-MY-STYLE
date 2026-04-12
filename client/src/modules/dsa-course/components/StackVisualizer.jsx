import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const OPS = [
  { type: 'push', val: 10, explanation: 'PUSH 10 — Place 10 on top of the stack.' },
  { type: 'push', val: 25, explanation: 'PUSH 25 — Place 25 on top. Stack grows upward.' },
  { type: 'push', val: 7, explanation: 'PUSH 7 — Stack now has 3 elements.' },
  { type: 'push', val: 42, explanation: 'PUSH 42 — Top of stack is now 42.' },
  { type: 'peek', val: null, explanation: 'PEEK — View top element (42) without removing.' },
  { type: 'pop', val: null, explanation: 'POP — Remove 42 from top. LIFO in action.' },
  { type: 'pop', val: null, explanation: 'POP — Remove 7. Stack shrinks.' },
  { type: 'push', val: 99, explanation: 'PUSH 99 — Add new element to top.' },
];

function generateSteps() {
  const steps = [];
  let stack = [];
  steps.push({ stack: [], active: null, op: null, explanation: 'Empty stack. Ready for operations.' });
  for (const op of OPS) {
    if (op.type === 'push') {
      stack = [...stack, op.val];
      steps.push({ stack: [...stack], active: stack.length - 1, op: 'push', explanation: op.explanation });
    } else if (op.type === 'pop' && stack.length > 0) {
      const popped = stack[stack.length - 1];
      steps.push({ stack: [...stack], active: stack.length - 1, op: 'pop', explanation: op.explanation, popped });
      stack = stack.slice(0, -1);
      steps.push({ stack: [...stack], active: null, op: null, explanation: `Popped ${popped}. Stack updated.` });
    } else if (op.type === 'peek') {
      steps.push({ stack: [...stack], active: stack.length - 1, op: 'peek', explanation: op.explanation });
    }
  }
  return steps;
}

const CODE_LINES = ['stack = []', 'stack.append(val)  # push', 'stack.pop()        # pop', 'stack[-1]          # peek'];

export default function StackVisualizer() {
  const steps = useRef(generateSteps());
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);
  const timerRef = useRef(null);
  const cur = steps.current[idx];

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setIdx(i => { if (i >= steps.current.length - 1) { setPlaying(false); return i; } return i + 1; });
      }, speed);
    } else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [playing, speed]);

  const reset = () => { setPlaying(false); setIdx(0); };
  const step = () => { if (idx < steps.current.length - 1) setIdx(i => i + 1); };

  const opColor = cur.op === 'push' ? '#3aff8a' : cur.op === 'pop' ? '#e8001c' : '#c9a96e';

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🗼 STACK OPERATIONS — LIFO
      </h3>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Stack visual */}
        <div style={{ flex: '0 0 160px' }}>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: '#6a6070', marginBottom: '0.5rem' }}>STACK (TOP → BOTTOM)</div>
          <div style={{ border: '1px solid rgba(232,0,28,0.2)', borderRadius: '4px 4px 0 0', minHeight: 200, display: 'flex', flexDirection: 'column-reverse', padding: '0.5rem', gap: '0.4rem', position: 'relative' }}>
            {cur.stack.length === 0 && (
              <div style={{ color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', textAlign: 'center', padding: '1rem' }}>EMPTY</div>
            )}
            <AnimatePresence>
              {cur.stack.map((val, i) => {
                const isTop = i === cur.stack.length - 1;
                const isActive = i === cur.active;
                return (
                  <motion.div key={`${i}-${val}`}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    style={{ background: isActive ? `${opColor}18` : 'rgba(16,12,18,0.9)', border: `1px solid ${isActive ? opColor : 'rgba(232,0,28,0.15)'}`, borderRadius: 3, padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: isActive ? `0 0 12px ${opColor}44` : 'none' }}>
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', color: isActive ? opColor : '#ede5d8' }}>{val}</span>
                    {isTop && <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', color: '#e8001c', letterSpacing: '0.1em' }}>TOP</span>}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          {/* Base */}
          <div style={{ height: 6, background: 'linear-gradient(to right, #e8001c, #c9a96e)', borderRadius: '0 0 4px 4px' }} />
        </div>

        {/* Right panel */}
        <div style={{ flex: 1, minWidth: 200 }}>
          {/* Op badge */}
          {cur.op && (
            <motion.div key={cur.op + idx} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${opColor}12`, border: `1px solid ${opColor}44`, borderRadius: 3, padding: '0.3rem 0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', color: opColor, letterSpacing: '0.1em' }}>{cur.op.toUpperCase()}</span>
            </motion.div>
          )}

          {/* Explanation */}
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
              <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
              <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {steps.current.length}</p>
            </motion.div>
          </AnimatePresence>

          {/* Code */}
          <div className="code-block" style={{ padding: '0.75rem 1rem', fontSize: '0.78rem' }}>
            {CODE_LINES.map((line, i) => (
              <span key={i} style={{ display: 'block', color: '#6a6070' }}>{line}</span>
            ))}
          </div>

          {/* Stack size */}
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', color: '#e8001c' }}>{cur.stack.length}</div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.12em', color: '#6a6070' }}>SIZE</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.5rem', color: '#c9a96e' }}>{cur.stack.length > 0 ? cur.stack[cur.stack.length - 1] : '—'}</div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.12em', color: '#6a6070' }}>TOP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '1.5rem' }}>
        <button onClick={() => setPlaying(p => !p)} className={playing ? 'p5-btn' : 'p5-btn p5-btn-gold'} style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>{playing ? <IoPause /> : <IoPlay />}{playing ? 'PAUSE' : 'PLAY'}</span>
        </button>
        <button onClick={step} disabled={idx >= steps.current.length - 1} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', opacity: idx >= steps.current.length - 1 ? 0.4 : 1 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoPlaySkipForward />STEP</span>
        </button>
        <button onClick={reset} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoRefresh />RESET</span>
        </button>
        <SpeedControl speed={speed} onChange={setSpeed} />
        <div style={{ flex: 1, height: 3, background: 'rgba(232,0,28,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #e8001c, #c9a96e)', borderRadius: 2 }}
            animate={{ width: `${(idx / (steps.current.length - 1)) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
      </div>
    </div>
  );
}
