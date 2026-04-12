import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

// Coin Change DP: coins=[1,3,4], amount=6
const COINS = [1, 3, 4];
const AMOUNT = 6;

function generateCoinChangeSteps() {
  const steps = [];
  const dp = new Array(AMOUNT + 1).fill(Infinity);
  dp[0] = 0;
  steps.push({
    dp: [...dp], current: -1, coin: null,
    explanation: `Initialize dp[0]=0 (0 coins for amount 0). All others = Infinity.`,
    phase: 'init',
  });

  for (let i = 1; i <= AMOUNT; i++) {
    steps.push({ dp: [...dp], current: i, coin: null, explanation: `Computing dp[${i}] — minimum coins for amount ${i}.`, phase: 'start' });
    for (const coin of COINS) {
      if (coin <= i) {
        const candidate = dp[i - coin] + 1;
        steps.push({
          dp: [...dp], current: i, coin,
          explanation: `Try coin ${coin}: dp[${i}] = min(${dp[i] === Infinity ? '∞' : dp[i]}, dp[${i}-${coin}]+1) = min(${dp[i] === Infinity ? '∞' : dp[i]}, ${dp[i - coin] === Infinity ? '∞' : dp[i - coin] + 1})`,
          phase: 'try', prev: i - coin,
        });
        if (candidate < dp[i]) {
          dp[i] = candidate;
          steps.push({ dp: [...dp], current: i, coin, explanation: `Update! dp[${i}] = ${dp[i]} (using coin ${coin})`, phase: 'update', prev: i - coin });
        }
      }
    }
    steps.push({ dp: [...dp], current: i, coin: null, explanation: `dp[${i}] = ${dp[i] === Infinity ? '∞' : dp[i]} coins.`, phase: 'done' });
  }
  steps.push({ dp: [...dp], current: -1, coin: null, explanation: `COMPLETE! Minimum coins for amount ${AMOUNT} = ${dp[AMOUNT]}. (coins: ${COINS.join(', ')})`, phase: 'final' });
  return steps;
}

const STEPS = generateCoinChangeSteps();

export default function DPVisualizer() {
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

  const cellColor = (i) => {
    if (cur.phase === 'final' && i === AMOUNT) return '#3aff8a';
    if (i === cur.current) {
      if (cur.phase === 'update') return '#3aff8a';
      return '#e8001c';
    }
    if (i === cur.prev) return '#c9a96e';
    if (cur.dp[i] !== Infinity && i < (cur.current === -1 ? AMOUNT + 1 : cur.current)) return '#8a6aff';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        🧠 COIN CHANGE — DP TABLE
      </h3>
      <p style={{ color: '#6a6070', fontSize: '0.78rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
        COINS: [{COINS.join(', ')}] &nbsp;|&nbsp; AMOUNT: {AMOUNT}
      </p>

      {/* DP Table */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070', marginBottom: '0.5rem' }}>DP TABLE (index = amount, value = min coins)</div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {cur.dp.map((val, i) => (
            <motion.div key={i}
              animate={{ borderColor: cellColor(i), background: `${cellColor(i)}18`, scale: i === cur.current ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ width: 52, border: '2px solid', borderRadius: 6, overflow: 'hidden', boxShadow: i === cur.current ? `0 0 12px ${cellColor(i)}55` : 'none' }}>
              {/* Index */}
              <div style={{ background: `${cellColor(i)}22`, padding: '0.2rem', textAlign: 'center', borderBottom: `1px solid ${cellColor(i)}33` }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', color: '#6a6070' }}>{i}</span>
              </div>
              {/* Value */}
              <div style={{ padding: '0.4rem', textAlign: 'center' }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', color: cellColor(i), lineHeight: 1 }}>
                  {val === Infinity ? '∞' : val}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coins display */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>COINS:</span>
        {COINS.map(c => (
          <div key={c} style={{ background: cur.coin === c ? 'rgba(201,169,110,0.15)' : 'rgba(58,48,64,0.5)', border: `1px solid ${cur.coin === c ? '#c9a96e' : '#3a3040'}`, borderRadius: 3, padding: '0.2rem 0.6rem', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.9rem', color: cur.coin === c ? '#c9a96e' : '#6a6070', transition: 'all 0.3s' }}>
            {c}
          </div>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: cur.phase === 'final' ? 'rgba(58,255,138,0.06)' : 'rgba(232,0,28,0.04)', border: `1px solid ${cur.phase === 'final' ? 'rgba(58,255,138,0.2)' : 'rgba(232,0,28,0.1)'}`, borderLeft: `3px solid ${cur.phase === 'final' ? '#3aff8a' : '#e8001c'}`, borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['#e8001c', 'Current Amount'], ['#c9a96e', 'Lookup (i-coin)'], ['#3aff8a', 'Updated/Final'], ['#8a6aff', 'Computed']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: c }} />
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
