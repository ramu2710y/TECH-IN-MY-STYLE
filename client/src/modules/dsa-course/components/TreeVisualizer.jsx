import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// BST: 50, 30, 70, 20, 40, 60, 80
const TREE = {
  val: 50,
  left: { val: 30, left: { val: 20, left: null, right: null }, right: { val: 40, left: null, right: null } },
  right: { val: 70, left: { val: 60, left: null, right: null }, right: { val: 80, left: null, right: null } },
};

function inorderTraversal(node, steps = [], visited = []) {
  if (!node) return steps;
  inorderTraversal(node.left, steps, visited);
  const newVisited = [...visited, node.val];
  steps.push({ active: node.val, visited: [...newVisited], explanation: `Visit node ${node.val}. Inorder: Left → Node → Right.` });
  inorderTraversal(node.right, steps, newVisited);
  return steps;
}

const TRAVERSAL_STEPS = [
  { active: null, visited: [], explanation: 'BST ready. Starting Inorder Traversal (Left → Node → Right).' },
  ...inorderTraversal(TREE),
  { active: null, visited: [20, 30, 40, 50, 60, 70, 80], explanation: 'Inorder complete! Result: [20, 30, 40, 50, 60, 70, 80] — sorted order.' },
];

// Render tree nodes recursively
function TreeNode({ node, active, visited, x, y, parentX, parentY, level }) {
  if (!node) return null;
  const isActive = active === node.val;
  const isVisited = visited.includes(node.val);
  const color = isActive ? '#e8001c' : isVisited ? '#c9a96e' : '#3a3040';
  const textColor = isActive ? '#fff' : isVisited ? '#ede5d8' : '#6a6070';
  const glow = isActive ? '0 0 16px rgba(232,0,28,0.7)' : isVisited ? '0 0 10px rgba(201,169,110,0.4)' : 'none';
  const hSpread = 120 / (level + 1);

  return (
    <g>
      {/* Edge to parent */}
      {parentX !== undefined && (
        <motion.line x1={parentX} y1={parentY} x2={x} y2={y}
          stroke={isVisited ? '#c9a96e44' : '#3a304044'} strokeWidth={1.5}
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4 }} />
      )}
      {/* Node circle */}
      <motion.circle cx={x} cy={y} r={22}
        fill={`${color}22`} stroke={color} strokeWidth={isActive ? 2 : 1}
        style={{ filter: glow ? `drop-shadow(${glow})` : 'none' }}
        animate={{ r: isActive ? 24 : 22 }} transition={{ duration: 0.3 }} />
      <text x={x} y={y + 5} textAnchor="middle" fill={textColor} fontSize={13} fontFamily="Bebas Neue, sans-serif" letterSpacing="1">
        {node.val}
      </text>
      {/* Children */}
      <TreeNode node={node.left} active={active} visited={visited} x={x - hSpread} y={y + 70} parentX={x} parentY={y} level={level + 1} />
      <TreeNode node={node.right} active={active} visited={visited} x={x + hSpread} y={y + 70} parentX={x} parentY={y} level={level + 1} />
    </g>
  );
}

export default function TreeVisualizer() {
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);
  const timerRef = useRef(null);
  const cur = TRAVERSAL_STEPS[idx];

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setIdx(i => { if (i >= TRAVERSAL_STEPS.length - 1) { setPlaying(false); return i; } return i + 1; });
      }, speed);
    } else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [playing, speed]);

  const reset = () => { setPlaying(false); setIdx(0); };
  const step = () => { if (idx < TRAVERSAL_STEPS.length - 1) setIdx(i => i + 1); };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        🌳 BST INORDER TRAVERSAL
      </h3>

      {/* SVG Tree */}
      <div style={{ background: 'rgba(6,4,8,0.6)', border: '1px solid rgba(232,0,28,0.1)', borderRadius: 6, overflow: 'hidden', marginBottom: '1rem' }}>
        <svg width="100%" viewBox="0 0 400 260" style={{ display: 'block' }}>
          <TreeNode node={TREE} active={cur.active} visited={cur.visited} x={200} y={40} level={0} />
        </svg>
      </div>

      {/* Visited sequence */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>VISITED:</span>
        <AnimatePresence>
          {cur.visited.map((v, i) => (
            <motion.div key={v} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              style={{ background: 'rgba(201,169,110,0.12)', border: '1px solid rgba(201,169,110,0.3)', borderRadius: 3, padding: '0.15rem 0.5rem', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: '#c9a96e' }}>
              {v}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {TRAVERSAL_STEPS.length}</p>
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
        <button onClick={step} disabled={idx >= TRAVERSAL_STEPS.length - 1} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', opacity: idx >= TRAVERSAL_STEPS.length - 1 ? 0.4 : 1 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoPlaySkipForward />STEP</span>
        </button>
        <button onClick={reset} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoRefresh />RESET</span>
        </button>
        <SpeedControl speed={speed} onChange={setSpeed} />
        <div style={{ flex: 1, height: 3, background: 'rgba(232,0,28,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #e8001c, #c9a96e)', borderRadius: 2 }}
            animate={{ width: `${(idx / (TRAVERSAL_STEPS.length - 1)) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
      </div>
    </div>
  );
}
