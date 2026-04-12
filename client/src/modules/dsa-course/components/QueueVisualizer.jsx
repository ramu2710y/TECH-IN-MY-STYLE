import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const OPS = [
  { type: 'enqueue', val: 'A', explanation: 'ENQUEUE "A" — Add to rear. Queue: [A]' },
  { type: 'enqueue', val: 'B', explanation: 'ENQUEUE "B" — Add to rear. Queue: [A, B]' },
  { type: 'enqueue', val: 'C', explanation: 'ENQUEUE "C" — Add to rear. Queue: [A, B, C]' },
  { type: 'enqueue', val: 'D', explanation: 'ENQUEUE "D" — Add to rear. Queue: [A, B, C, D]' },
  { type: 'peek', explanation: 'PEEK — Front element is "A". FIFO: first in, first out.' },
  { type: 'dequeue', explanation: 'DEQUEUE — Remove "A" from front. Queue: [B, C, D]' },
  { type: 'dequeue', explanation: 'DEQUEUE — Remove "B" from front. Queue: [C, D]' },
  { type: 'enqueue', val: 'E', explanation: 'ENQUEUE "E" — Add to rear. Queue: [C, D, E]' },
  { type: 'dequeue', explanation: 'DEQUEUE — Remove "C" from front. Queue: [D, E]' },
];

function generateSteps() {
  const steps = [{ queue: [], op: null, active: null, explanation: 'Empty queue. Ready for operations. FIFO — First In, First Out.' }];
  let queue = [];
  for (const op of OPS) {
    if (op.type === 'enqueue') {
      queue = [...queue, op.val];
      steps.push({ queue: [...queue], op: 'enqueue', active: queue.length - 1, explanation: op.explanation });
    } else if (op.type === 'dequeue' && queue.length > 0) {
      steps.push({ queue: [...queue], op: 'dequeue', active: 0, explanation: op.explanation });
      queue = queue.slice(1);
      steps.push({ queue: [...queue], op: null, active: null, explanation: `Dequeued. Queue now has ${queue.length} element(s).` });
    } else if (op.type === 'peek') {
      steps.push({ queue: [...queue], op: 'peek', active: 0, explanation: op.explanation });
    }
  }
  return steps;
}

const STEPS = generateSteps();

export default function QueueVisualizer() {
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

  const itemColor = (i) => {
    if (cur.active === i) {
      if (cur.op === 'enqueue') return '#3aff8a';
      if (cur.op === 'dequeue') return '#e8001c';
      if (cur.op === 'peek') return '#c9a96e';
    }
    if (i === 0) return '#c9a96e';
    return '#6a6070';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🚂 QUEUE OPERATIONS — FIFO
      </h3>

      {/* Queue visual — horizontal */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', padding: '1.5rem 0 0.5rem' }}>
          {/* ENQUEUE arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 8, flexShrink: 0 }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#3aff8a', marginBottom: 4 }}>ENQUEUE</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 20, height: 2, background: 'rgba(58,255,138,0.4)' }} />
              <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid rgba(58,255,138,0.4)' }} />
            </div>
          </div>

          {/* Queue container */}
          <div style={{ display: 'flex', border: '1px solid rgba(232,0,28,0.2)', borderRadius: 4, minWidth: 200, minHeight: 60, alignItems: 'center', padding: '0.5rem', gap: '0.4rem', position: 'relative', flex: 1 }}>
            {/* REAR label */}
            <div style={{ position: 'absolute', top: -18, right: 8, fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.55rem', letterSpacing: '0.1em', color: '#3aff8a' }}>REAR</div>
            {/* FRONT label */}
            <div style={{ position: 'absolute', top: -18, left: 8, fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.55rem', letterSpacing: '0.1em', color: '#e8001c' }}>FRONT</div>

            {cur.queue.length === 0 && (
              <div style={{ color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.1em', margin: '0 auto' }}>EMPTY</div>
            )}
            <AnimatePresence>
              {cur.queue.map((val, i) => (
                <motion.div key={`${i}-${val}`}
                  initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }}
                  style={{ background: `${itemColor(i)}18`, border: `2px solid ${itemColor(i)}`, borderRadius: 4, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: cur.active === i ? `0 0 12px ${itemColor(i)}55` : 'none' }}>
                  <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', color: itemColor(i) }}>{val}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* DEQUEUE arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 8, flexShrink: 0 }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.1em', color: '#e8001c', marginBottom: 4 }}>DEQUEUE</span>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderRight: '8px solid rgba(232,0,28,0.4)' }} />
              <div style={{ width: 20, height: 2, background: 'rgba(232,0,28,0.4)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
        {[['SIZE', cur.queue.length, '#c9a96e'], ['FRONT', cur.queue[0] || '—', '#e8001c'], ['REAR', cur.queue[cur.queue.length - 1] || '—', '#3aff8a']].map(([l, v, c]) => (
          <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.3rem', color: c, lineHeight: 1 }}>{v}</div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.12em', color: '#6a6070' }}>{l}</div>
          </div>
        ))}
        {cur.op && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="phantom-badge" style={{ borderColor: cur.op === 'enqueue' ? 'rgba(58,255,138,0.4)' : cur.op === 'dequeue' ? 'rgba(232,0,28,0.4)' : 'rgba(201,169,110,0.4)', color: cur.op === 'enqueue' ? '#3aff8a' : cur.op === 'dequeue' ? '#e8001c' : '#c9a96e', background: 'transparent' }}>
              {cur.op.toUpperCase()}
            </div>
          </div>
        )}
      </div>

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
