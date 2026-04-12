import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Weighted graph: 6 nodes
const NODES_POS = [
  { id: 0, x: 80,  y: 80,  label: 'A' },
  { id: 1, x: 220, y: 50,  label: 'B' },
  { id: 2, x: 340, y: 100, label: 'C' },
  { id: 3, x: 100, y: 200, label: 'D' },
  { id: 4, x: 240, y: 200, label: 'E' },
  { id: 5, x: 360, y: 220, label: 'F' },
];
const EDGES = [
  [0,1,4],[0,3,2],[1,2,5],[1,4,1],[2,5,3],[3,4,8],[3,1,1],[4,5,2],[4,2,6],
];
const ADJ = {};
for (let i = 0; i < 6; i++) ADJ[i] = [];
for (const [u,v,w] of EDGES) { ADJ[u].push([v,w]); ADJ[v].push([u,w]); }

function generateDijkstraSteps(start = 0) {
  const steps = [];
  const INF = Infinity;
  const dist = new Array(6).fill(INF);
  const visited = new Set();
  const prev = new Array(6).fill(-1);
  dist[start] = 0;

  steps.push({ dist: [...dist], visited: [], current: -1, relaxing: null, explanation: `Dijkstra from node A(0). dist[A]=0, all others=∞. Use min-heap.`, phase: 'init' });

  const heap = [[0, start]];

  while (heap.length > 0) {
    heap.sort((a, b) => a[0] - b[0]);
    const [d, u] = heap.shift();
    if (visited.has(u)) continue;
    visited.add(u);
    steps.push({ dist: [...dist], visited: [...visited], current: u, relaxing: null, explanation: `Extract min: node ${NODES_POS[u].label}(${u}), dist=${d}. Mark visited.`, phase: 'extract' });

    for (const [v, w] of ADJ[u]) {
      if (visited.has(v)) continue;
      const newDist = dist[u] + w;
      steps.push({ dist: [...dist], visited: [...visited], current: u, relaxing: [u, v, w], explanation: `Relax edge ${NODES_POS[u].label}→${NODES_POS[v].label} (weight ${w}): ${dist[u]} + ${w} = ${newDist} vs current ${dist[v] === INF ? '∞' : dist[v]}`, phase: 'relax' });
      if (newDist < dist[v]) {
        dist[v] = newDist;
        prev[v] = u;
        heap.push([newDist, v]);
        steps.push({ dist: [...dist], visited: [...visited], current: u, relaxing: [u, v, w], explanation: `Updated! dist[${NODES_POS[v].label}] = ${newDist}. Shorter path found.`, phase: 'update' });
      }
    }
  }
  steps.push({ dist: [...dist], visited: [...visited], current: -1, relaxing: null, explanation: `Done! Shortest distances from A: ${NODES_POS.map((n,i) => `${n.label}=${dist[i]}`).join(', ')}`, phase: 'done' });
  return steps;
}

const STEPS = generateDijkstraSteps();

export default function DijkstraVisualizer() {
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
    if (cur.current === i) return '#e8001c';
    if (cur.visited.includes(i)) return '#3aff8a';
    if (cur.dist[i] < Infinity) return '#c9a96e';
    return '#3a3040';
  };

  const edgeColor = (u, v) => {
    if (cur.relaxing && ((cur.relaxing[0] === u && cur.relaxing[1] === v) || (cur.relaxing[0] === v && cur.relaxing[1] === u))) return '#e8001c';
    if (cur.visited.includes(u) && cur.visited.includes(v)) return 'rgba(58,255,138,0.5)';
    return 'rgba(58,48,64,0.6)';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🗺️ DIJKSTRA'S SHORTEST PATH
      </h3>

      {/* SVG Graph */}
      <div style={{ background: 'rgba(6,4,8,0.6)', border: '1px solid rgba(232,0,28,0.1)', borderRadius: 6, marginBottom: '1rem' }}>
        <svg width="100%" viewBox="0 0 440 280" style={{ display: 'block' }}>
          {/* Edges with weights */}
          {EDGES.map(([u, v, w], i) => {
            const from = NODES_POS[u], to = NODES_POS[v];
            const mx = (from.x + to.x) / 2, my = (from.y + to.y) / 2;
            const ec = edgeColor(u, v);
            return (
              <g key={i}>
                <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke={ec} strokeWidth={ec === 'rgba(232,0,28,0.5)' ? 2.5 : 1.5} style={{ transition: 'stroke 0.3s' }} />
                <text x={mx} y={my - 5} textAnchor="middle" fill="#c9a96e" fontSize={10} fontFamily="Bebas Neue, sans-serif">{w}</text>
              </g>
            );
          })}
          {/* Nodes */}
          {NODES_POS.map((node, i) => {
            const nc = nodeColor(i);
            const d = cur.dist[i];
            return (
              <g key={i}>
                <motion.circle cx={node.x} cy={node.y} r={cur.current === i ? 26 : 22}
                  fill={`${nc}22`} stroke={nc} strokeWidth={cur.current === i ? 2.5 : 1.5}
                  style={{ filter: cur.current === i ? `drop-shadow(0 0 10px ${nc}88)` : 'none' }}
                  animate={{ r: cur.current === i ? 26 : 22 }} transition={{ duration: 0.3 }} />
                <text x={node.x} y={node.y + 4} textAnchor="middle" fill={nc} fontSize={13} fontFamily="Bebas Neue, sans-serif">{node.label}</text>
                <text x={node.x} y={node.y + 38} textAnchor="middle" fill={d === Infinity ? '#3a3040' : '#c9a96e'} fontSize={10} fontFamily="Bebas Neue, sans-serif">
                  {d === Infinity ? '∞' : d}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Distance table */}
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {NODES_POS.map((node, i) => (
          <div key={i} style={{ textAlign: 'center', background: cur.visited.includes(i) ? 'rgba(58,255,138,0.08)' : 'rgba(16,12,18,0.8)', border: `1px solid ${nodeColor(i)}44`, borderRadius: 4, padding: '0.4rem 0.6rem', minWidth: 44 }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', color: nodeColor(i) }}>{node.label}</div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: cur.dist[i] === Infinity ? '#3a3040' : '#c9a96e', lineHeight: 1 }}>
              {cur.dist[i] === Infinity ? '∞' : cur.dist[i]}
            </div>
          </div>
        ))}
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
        {[['#e8001c', 'Current'], ['#3aff8a', 'Visited'], ['#c9a96e', 'Reached'], ['#3a3040', 'Unvisited']].map(([c, l]) => (
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
