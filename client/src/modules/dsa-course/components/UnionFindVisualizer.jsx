import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const N = 7;
const UNIONS = [[0,1],[2,3],[4,5],[1,2],[3,6],[4,6]];

function generateSteps() {
  const steps = [];
  const parent = Array.from({ length: N }, (_, i) => i);
  const rank = new Array(N).fill(0);

  const find = (x) => {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  };

  const union = (x, y) => {
    const px = find(x), py = find(y);
    if (px === py) return false;
    if (rank[px] < rank[py]) parent[px] = py;
    else if (rank[px] > rank[py]) parent[py] = px;
    else { parent[py] = px; rank[px]++; }
    return true;
  };

  steps.push({ parent: [...parent], rank: [...rank], active: [], highlight: null, explanation: `Union-Find: ${N} nodes, each in its own set. parent[i] = i initially.`, phase: 'init' });

  for (const [a, b] of UNIONS) {
    const pa = find(a), pb = find(b);
    steps.push({ parent: [...parent], rank: [...rank], active: [a, b], highlight: null, explanation: `Union(${a}, ${b}): find root of ${a} → ${pa}, find root of ${b} → ${pb}.`, phase: 'find' });
    if (pa === pb) {
      steps.push({ parent: [...parent], rank: [...rank], active: [a, b], highlight: null, explanation: `${a} and ${b} already in same set (root=${pa}). No union needed.`, phase: 'same' });
    } else {
      union(a, b);
      steps.push({ parent: [...parent], rank: [...rank], active: [a, b], highlight: find(a), explanation: `Merged! New root = ${find(a)}. Components reduced.`, phase: 'union' });
    }
  }

  // Count components
  const roots = new Set(Array.from({ length: N }, (_, i) => find(i)));
  steps.push({ parent: [...parent], rank: [...rank], active: [], highlight: null, explanation: `Done! ${roots.size} connected component(s). Roots: {${[...roots].join(', ')}}`, phase: 'done' });
  return steps;
}

const STEPS = generateSteps();

// Node positions in a circle
const POSITIONS = Array.from({ length: N }, (_, i) => ({
  x: 200 + 130 * Math.cos((i * 2 * Math.PI) / N - Math.PI / 2),
  y: 150 + 110 * Math.sin((i * 2 * Math.PI) / N - Math.PI / 2),
}));

export default function UnionFindVisualizer() {
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

  // Group nodes by root for coloring
  const COLORS = ['#e8001c', '#c9a96e', '#3aff8a', '#8a6aff', '#ff6b2b', '#00d4ff', '#ff3aaa'];
  const rootMap = {};
  let colorIdx = 0;
  for (let i = 0; i < N; i++) {
    const root = cur.parent[i] === i ? i : cur.parent[cur.parent[i]] ?? cur.parent[i];
    // simplified: use parent chain
  }
  // Build component colors
  const compColor = {};
  const seen = {};
  let ci = 0;
  for (let i = 0; i < N; i++) {
    let r = i;
    while (cur.parent[r] !== r) r = cur.parent[r];
    if (!(r in seen)) { seen[r] = COLORS[ci++ % COLORS.length]; }
    compColor[i] = seen[r];
  }

  const nodeColor = (i) => {
    if (cur.active.includes(i)) return '#fff';
    return compColor[i];
  };
  const nodeBg = (i) => {
    if (cur.active.includes(i)) return `${compColor[i]}55`;
    return `${compColor[i]}18`;
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🔗 UNION-FIND — DISJOINT SET
      </h3>

      {/* SVG Graph */}
      <div style={{ background: 'rgba(6,4,8,0.6)', border: '1px solid rgba(232,0,28,0.1)', borderRadius: 6, marginBottom: '1rem' }}>
        <svg width="100%" viewBox="0 0 400 300" style={{ display: 'block' }}>
          {/* Parent edges */}
          {cur.parent.map((p, i) => {
            if (p === i) return null;
            const from = POSITIONS[i], to = POSITIONS[p];
            return (
              <line key={i} x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                stroke={compColor[i]} strokeWidth={1.5} strokeDasharray="4,3" opacity={0.6} />
            );
          })}
          {/* Nodes */}
          {Array.from({ length: N }, (_, i) => {
            const pos = POSITIONS[i];
            const isActive = cur.active.includes(i);
            const isRoot = cur.parent[i] === i;
            const c = compColor[i];
            return (
              <g key={i}>
                <motion.circle cx={pos.x} cy={pos.y} r={isActive ? 26 : 22}
                  fill={nodeBg(i)} stroke={c} strokeWidth={isActive ? 2.5 : isRoot ? 2 : 1}
                  style={{ filter: isActive ? `drop-shadow(0 0 10px ${c}88)` : 'none' }}
                  animate={{ r: isActive ? 26 : 22 }} transition={{ duration: 0.3 }} />
                <text x={pos.x} y={pos.y + 5} textAnchor="middle" fill={nodeColor(i)} fontSize={14} fontFamily="Bebas Neue, sans-serif">{i}</text>
                {isRoot && <text x={pos.x} y={pos.y - 30} textAnchor="middle" fill={c} fontSize={8} fontFamily="Bebas Neue, sans-serif" letterSpacing="1">ROOT</text>}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Parent array */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>PARENT:</span>
        {cur.parent.map((p, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ background: `${compColor[i]}18`, border: `1px solid ${compColor[i]}44`, borderRadius: 3, padding: '0.2rem 0.5rem', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: compColor[i] }}>{p}</div>
            <div style={{ fontSize: '0.55rem', color: '#6a6070', marginTop: 1 }}>[{i}]</div>
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
