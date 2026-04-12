import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// N-Queens on 4x4 board
const N = 4;

function generateSteps() {
  const steps = [];
  const board = Array(N).fill(null).map(() => Array(N).fill(0));

  const isSafe = (board, row, col) => {
    for (let i = 0; i < row; i++) if (board[i][col]) return false;
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) if (board[i][j]) return false;
    for (let i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) if (board[i][j]) return false;
    return true;
  };

  const solve = (board, row) => {
    if (row === N) {
      steps.push({ board: board.map(r => [...r]), row: -1, col: -1, phase: 'solution', explanation: `SOLUTION FOUND! All ${N} queens placed safely. This is one valid arrangement.` });
      return true;
    }
    for (let col = 0; col < N; col++) {
      steps.push({ board: board.map(r => [...r]), row, col, phase: 'try', explanation: `Row ${row}: Try placing queen at column ${col}. Check if safe...` });
      if (isSafe(board, row, col)) {
        board[row][col] = 1;
        steps.push({ board: board.map(r => [...r]), row, col, phase: 'place', explanation: `Safe! Place queen at (${row}, ${col}). Move to row ${row + 1}.` });
        if (solve(board, row + 1)) return true;
        board[row][col] = 0;
        steps.push({ board: board.map(r => [...r]), row, col, phase: 'backtrack', explanation: `Backtrack! Remove queen from (${row}, ${col}). Try next column.` });
      } else {
        steps.push({ board: board.map(r => [...r]), row, col, phase: 'unsafe', explanation: `Unsafe! Column ${col} conflicts with existing queen. Skip.` });
      }
    }
    return false;
  };

  steps.push({ board: board.map(r => [...r]), row: -1, col: -1, phase: 'init', explanation: `4-Queens Problem: Place 4 queens on a 4x4 board so no two attack each other.` });
  solve(board, 0);
  return steps;
}

const STEPS = generateSteps();

export default function BacktrackingVisualizer() {
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

  const phaseColor = { try: '#6a6070', place: '#3aff8a', backtrack: '#e8001c', unsafe: '#ff6b2b', solution: '#c9a96e', init: '#6a6070' };
  const pc = phaseColor[cur.phase] || '#6a6070';

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        ♛ N-QUEENS — BACKTRACKING (4×4)
      </h3>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Board */}
        <div>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070', marginBottom: '0.5rem' }}>BOARD</div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${N}, 52px)`, gap: 3 }}>
            {cur.board.map((row, r) =>
              row.map((cell, c) => {
                const isCurrent = cur.row === r && cur.col === c;
                const isQueen = cell === 1;
                const isDark = (r + c) % 2 === 1;
                let bg = isDark ? 'rgba(30,20,40,0.8)' : 'rgba(20,15,30,0.8)';
                let border = '1px solid rgba(58,48,64,0.5)';
                let glow = 'none';
                if (isCurrent) {
                  bg = `${pc}18`;
                  border = `2px solid ${pc}`;
                  glow = `0 0 12px ${pc}55`;
                } else if (isQueen) {
                  bg = 'rgba(58,255,138,0.1)';
                  border = '1px solid rgba(58,255,138,0.4)';
                }
                return (
                  <motion.div key={`${r}-${c}`} animate={{ background: bg, borderColor: isCurrent ? pc : isQueen ? '#3aff8a' : 'rgba(58,48,64,0.5)' }} transition={{ duration: 0.25 }}
                    style={{ width: 52, height: 52, border, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: glow, fontSize: '1.5rem' }}>
                    {isQueen ? '♛' : isCurrent ? '·' : ''}
                  </motion.div>
                );
              })
            )}
          </div>
          {/* Row/col labels */}
          <div style={{ display: 'flex', gap: 3, marginTop: 4, paddingLeft: 0 }}>
            {Array(N).fill(0).map((_, i) => (
              <div key={i} style={{ width: 52, textAlign: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', color: '#6a6070' }}>{i}</div>
            ))}
          </div>
        </div>

        {/* Right panel */}
        <div style={{ flex: 1, minWidth: 180 }}>
          {/* Phase badge */}
          <motion.div key={cur.phase + idx} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: `${pc}12`, border: `1px solid ${pc}44`, borderRadius: 3, padding: '0.3rem 0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', color: pc, letterSpacing: '0.1em' }}>{cur.phase.toUpperCase()}</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: `3px solid ${pc}`, borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
              <p style={{ color: '#c8c0b0', fontSize: '0.85rem', lineHeight: 1.6 }}>{cur.explanation}</p>
              <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
            </motion.div>
          </AnimatePresence>

          {/* Queens placed */}
          <div style={{ background: 'rgba(10,8,14,0.6)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: 4, padding: '0.75rem' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6a6070', marginBottom: '0.5rem' }}>QUEENS PLACED</div>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '2rem', color: '#c9a96e', lineHeight: 1 }}>
              {cur.board.flat().filter(Boolean).length} / {N}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        {[['#3aff8a', 'Place'], ['#e8001c', 'Backtrack'], ['#ff6b2b', 'Unsafe'], ['#c9a96e', 'Solution']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
            <span style={{ color: '#6a6070', fontSize: '0.72rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '1rem' }}>
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
