import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Graph: 6 nodes, BFS from node 0
// Positions for SVG rendering
const NODES = [
  { id: 0, x: 200, y: 60, label: '0' },
  { id: 1, x: 80,  y: 160, label: '1' },
  { id: 2, x: 320, y: 160, label: '2' },
  { id: 3, x: 40,  y: 280, label: '3' },
  { id: 4, x: 180, y: 280, label: '4' },
  { id: 5, x: 340, y: 280, label: '5' },
];
const EDGES = [[0,1],[0,2],[1,3],[1,4],[2,4],[2,5]];
const ADJ = { 0:[1,2], 1:[0,3,4], 2:[0,4,5], 3:[1], 4:[1,2], 5:[2] };

function generateBFSSteps() {
  const steps = [];
  steps.push({ visited: [], queue: [], current: null, explanation: 'Graph ready. Starting BFS from node 0. Use a queue — FIFO.' });
  const visited = new Set();
  const queue = [0];
  visited.add(0);
  steps.push({ visited: [0], queue: [0], current: null, explanation: 'Enqueue node 0. Mark as visited.' });

  while (queue.length > 0) {
    const node = queue.shift();
    steps.push({ visited: [...visited], queue: [...queue], current: node, explanation: `Dequeue node ${node}. Process it. Explore neighbors: [${ADJ[node].join(', ')}]` });
    for (const neighbor of ADJ[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        steps.push({ visited: [...visited], queue: [...queue], current: node, explanation: `Node ${neighbor} not visited — enqueue it. Queue: [${queue.join(', ')}]` });
      }
    }
  }
  steps.push({ visited: [...visited], queue: [], current: null, explanation: `BFS complete! Visited order: ${[...visited].join(' → ')}` });
  return steps;
}

const STEPS = generateBFSSteps();

export default function GraphVisualizer() {
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

  const nodeColor = (id) => {
    if (cur.current === id) return '#e8001c';
    if (cur.visited.includes(id)) return '#c9a96e';
    return '#3a3040';
  };
  const nodeGlow = (id) => {
    if (cur.current === id) return 'drop-shadow(0 0 8px rgba(232,0,28,0.8))';
    if (cur.visited.includes(id)) return 'drop-shadow(0 0 6px rgba(201,169,110,0.5))';
    return 'none';
  };
  const edgeColor = (a, b) => {
    const aVisited = cur.visited.includes(a);
    const bVisited = cur.visited.includes(b);
    if (aVisited && bVisited) return 'rgba(201,169,110,0.5)';
    return 'rgba(58,48,64,0.8)';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🕸️ GRAPH BFS TRAVERSAL
      </h3>

      {/* SVG Graph */}
      <div style={{ background: 'rgba(6,4,8,0.6)', border: '1px solid rgba(232,0,28,0.1)', borderRadius: 6, overflow: 'hidden', marginBottom: '1rem' }}>
        <svg width="100%" viewBox="0 0 400 340" style={{ display: 'block' }}>
          {/* Edges */}
          {EDGES.map(([a, b], i) => (
            <line key={i}
              x1={NODES[a].x} y1={NODES[a].y}
              x2={NODES[b].x} y2={NODES[b].y}
              stroke={edgeColor(a, b)} strokeWidth={1.5}
              style={{ transition: 'stroke 0.4s' }} />
          ))}
          {/* Nodes */}
          {NODES.map(node => (
            <g key={node.id}>
              <motion.circle
                cx={node.x} cy={node.y} r={22}
                fill={`${nodeColor(node.id)}22`}
                stroke={nodeColor(node.id)} strokeWidth={cur.current === node.id ? 2.5 : 1.5}
                style={{ filter: nodeGlow(node.id), transition: 'stroke 0.3s, fill 0.3s' }}
                animate={{ r: cur.current === node.id ? 25 : 22 }}
                transition={{ duration: 0.3 }} />
              <text x={node.x} y={node.y + 5} textAnchor="middle"
                fill={nodeColor(node.id)} fontSize={14}
                fontFamily="Bebas Neue, sans-serif" letterSpacing="1"
                style={{ transition: 'fill 0.3s' }}>
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* BFS Queue display */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>QUEUE:</span>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          <AnimatePresence>
            {cur.queue.length === 0
              ? <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', color: '#6a6070' }}>EMPTY</span>
              : cur.queue.map((n, i) => (
                <motion.div key={`${i}-${n}`} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}
                  style={{ background: 'rgba(232,0,28,0.1)', border: '1px solid rgba(232,0,28,0.3)', borderRadius: 3, padding: '0.15rem 0.5rem', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: '#e8001c' }}>
                  {n}
                </motion.div>
              ))
            }
          </AnimatePresence>
        </div>
      </div>

      {/* Visited order */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>VISITED:</span>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          <AnimatePresence>
            {cur.visited.map((n, i) => (
              <motion.div key={n} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.3)', borderRadius: 3, padding: '0.15rem 0.5rem', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: '#c9a96e' }}>
                {n}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
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
        {[['#e8001c', 'Current'], ['#c9a96e', 'Visited'], ['#3a3040', 'Unvisited']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
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
