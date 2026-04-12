import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Max-Heap insertions then extract-max
const OPS = [
  { type: 'insert', val: 10 },
  { type: 'insert', val: 20 },
  { type: 'insert', val: 15 },
  { type: 'insert', val: 40 },
  { type: 'insert', val: 50 },
  { type: 'insert', val: 100 },
  { type: 'extract' },
  { type: 'extract' },
];

function generateSteps() {
  const steps = [];
  let heap = [];

  const heapifyUp = (h, i, steps) => {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (h[parent] < h[i]) {
        steps.push({ heap: [...h], active: [i, parent], explanation: `Heapify up: ${h[i]} > parent ${h[parent]} → swap`, phase: 'swap' });
        [h[parent], h[i]] = [h[i], h[parent]];
        steps.push({ heap: [...h], active: [parent], explanation: `Swapped. ${h[parent]} now at index ${parent}.`, phase: 'moved' });
        i = parent;
      } else break;
    }
  };

  const heapifyDown = (h, i, size, steps) => {
    while (true) {
      let largest = i;
      const l = 2 * i + 1, r = 2 * i + 2;
      if (l < size && h[l] > h[largest]) largest = l;
      if (r < size && h[r] > h[largest]) largest = r;
      if (largest !== i) {
        steps.push({ heap: [...h], active: [i, largest], explanation: `Heapify down: ${h[i]} < child ${h[largest]} → swap`, phase: 'swap' });
        [h[i], h[largest]] = [h[largest], h[i]];
        steps.push({ heap: [...h], active: [largest], explanation: `Swapped. Continue heapifying down.`, phase: 'moved' });
        i = largest;
      } else break;
    }
  };

  steps.push({ heap: [], active: [], explanation: 'Empty Max-Heap. Root is always the maximum element.', phase: 'init' });

  for (const op of OPS) {
    if (op.type === 'insert') {
      heap.push(op.val);
      steps.push({ heap: [...heap], active: [heap.length - 1], explanation: `Insert ${op.val} at end (index ${heap.length - 1}). Now heapify up.`, phase: 'insert' });
      heapifyUp(heap, heap.length - 1, steps);
      steps.push({ heap: [...heap], active: [], explanation: `Heap property restored. Max = ${heap[0]}`, phase: 'done' });
    } else if (op.type === 'extract') {
      const max = heap[0];
      steps.push({ heap: [...heap], active: [0], explanation: `Extract max: ${max}. Swap root with last element.`, phase: 'extract' });
      heap[0] = heap[heap.length - 1];
      heap.pop();
      steps.push({ heap: [...heap], active: [0], explanation: `Removed ${max}. New root = ${heap[0]}. Heapify down.`, phase: 'heapify' });
      heapifyDown(heap, 0, heap.length, steps);
      steps.push({ heap: [...heap], active: [], explanation: `Extracted ${max}. New max = ${heap[0] ?? 'empty'}`, phase: 'done' });
    }
  }
  return steps;
}

const STEPS = generateSteps();

// Tree positions for up to 7 nodes
const POSITIONS = [
  { x: 200, y: 40 },
  { x: 110, y: 110 }, { x: 290, y: 110 },
  { x: 60, y: 180 }, { x: 160, y: 180 }, { x: 240, y: 180 }, { x: 340, y: 180 },
];
const EDGES = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]];

export default function HeapVisualizer() {
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

  const nodeColor = (i) => {
    if (cur.active.includes(i)) return cur.phase === 'swap' ? '#e8001c' : '#3aff8a';
    if (i === 0 && cur.heap.length > 0) return '#c9a96e';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🏔️ MAX-HEAP — INSERT & EXTRACT
      </h3>

      {/* SVG Tree */}
      <div style={{ background: 'rgba(6,4,8,0.6)', border: '1px solid rgba(232,0,28,0.1)', borderRadius: 6, marginBottom: '1rem' }}>
        <svg width="100%" viewBox="0 0 400 230" style={{ display: 'block' }}>
          {EDGES.filter(([a, b]) => a < cur.heap.length && b < cur.heap.length).map(([a, b], i) => (
            <line key={i} x1={POSITIONS[a].x} y1={POSITIONS[a].y} x2={POSITIONS[b].x} y2={POSITIONS[b].y}
              stroke="rgba(58,48,64,0.8)" strokeWidth={1.5} />
          ))}
          {cur.heap.map((val, i) => {
            const pos = POSITIONS[i];
            const nc = nodeColor(i);
            return (
              <g key={i}>
                <motion.circle cx={pos.x} cy={pos.y} r={22}
                  fill={`${nc}22`} stroke={nc} strokeWidth={cur.active.includes(i) ? 2.5 : 1.5}
                  style={{ filter: cur.active.includes(i) ? `drop-shadow(0 0 8px ${nc}88)` : 'none' }}
                  animate={{ r: cur.active.includes(i) ? 25 : 22 }} transition={{ duration: 0.3 }} />
                <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill={nc} fontSize={13} fontFamily="Bebas Neue, sans-serif">{val}</text>
                {i === 0 && cur.heap.length > 0 && (
                  <text x={pos.x} y={pos.y - 30} textAnchor="middle" fill="#c9a96e" fontSize={9} fontFamily="Bebas Neue, sans-serif" letterSpacing="1">MAX</text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Array representation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>ARRAY:</span>
        {cur.heap.map((val, i) => (
          <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
            style={{ background: cur.active.includes(i) ? `${nodeColor(i)}18` : 'rgba(16,12,18,0.8)', border: `1px solid ${cur.active.includes(i) ? nodeColor(i) : 'rgba(201,169,110,0.2)'}`, borderRadius: 3, padding: '0.2rem 0.5rem', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: cur.active.includes(i) ? nodeColor(i) : '#c9a96e' }}>
            {val}
          </motion.div>
        ))}
        {cur.heap.length === 0 && <span style={{ color: '#6a6070', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem' }}>EMPTY</span>}
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
        {[['#c9a96e', 'Root (Max)'], ['#e8001c', 'Swapping'], ['#3aff8a', 'Placed']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
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
