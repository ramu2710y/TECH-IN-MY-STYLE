import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const TABLE_SIZE = 7;
const OPS = [
  { type: 'insert', key: 'apple', val: 5 },
  { type: 'insert', key: 'mango', val: 12 },
  { type: 'insert', key: 'grape', val: 8 },
  { type: 'insert', key: 'berry', val: 3 },
  { type: 'lookup', key: 'mango' },
  { type: 'insert', key: 'peach', val: 7 },
  { type: 'lookup', key: 'grape' },
  { type: 'delete', key: 'apple' },
  { type: 'lookup', key: 'apple' },
];

function hashFn(key) {
  let h = 0;
  for (const c of key) h = (h * 31 + c.charCodeAt(0)) % TABLE_SIZE;
  return h;
}

function generateSteps() {
  const steps = [];
  const table = Array(TABLE_SIZE).fill(null).map(() => []);
  steps.push({ table: table.map(b => [...b]), active: -1, op: null, key: null, hash: null, found: null, explanation: `Hash table with ${TABLE_SIZE} buckets. Hash function: h(key) = sum(char codes) % ${TABLE_SIZE}` });

  for (const op of OPS) {
    const h = hashFn(op.key);
    steps.push({ table: table.map(b => [...b]), active: h, op: op.type, key: op.key, hash: h, found: null, explanation: `hash("${op.key}") = ${h} → bucket ${h}` });

    if (op.type === 'insert') {
      const existing = table[h].findIndex(e => e.key === op.key);
      if (existing >= 0) {
        table[h][existing].val = op.val;
        steps.push({ table: table.map(b => [...b]), active: h, op: 'update', key: op.key, hash: h, found: h, explanation: `Key "${op.key}" exists in bucket ${h} — update value to ${op.val}.` });
      } else {
        table[h].push({ key: op.key, val: op.val });
        steps.push({ table: table.map(b => [...b]), active: h, op: 'insert', key: op.key, hash: h, found: h, explanation: `Insert "${op.key}": ${op.val} into bucket ${h}. O(1) average.` });
      }
    } else if (op.type === 'lookup') {
      const found = table[h].find(e => e.key === op.key);
      steps.push({ table: table.map(b => [...b]), active: h, op: 'lookup', key: op.key, hash: h, found: found ? h : null, explanation: found ? `FOUND "${op.key}" in bucket ${h} → value: ${found.val}` : `"${op.key}" NOT in bucket ${h}.` });
    } else if (op.type === 'delete') {
      const idx = table[h].findIndex(e => e.key === op.key);
      if (idx >= 0) {
        table[h].splice(idx, 1);
        steps.push({ table: table.map(b => [...b]), active: h, op: 'delete', key: op.key, hash: h, found: null, explanation: `Deleted "${op.key}" from bucket ${h}.` });
      }
    }
  }
  return steps;
}

const STEPS = generateSteps();

export default function HashingVisualizer() {
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

  const opColor = { insert: '#3aff8a', update: '#c9a96e', lookup: '#8a6aff', delete: '#e8001c' };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        #️⃣ HASH TABLE — CHAINING
      </h3>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Hash table */}
        <div style={{ flex: '0 0 260px' }}>
          <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070', marginBottom: '0.5rem' }}>HASH TABLE (CHAINING)</div>
          {cur.table.map((bucket, i) => {
            const isActive = cur.active === i;
            const bc = isActive ? (opColor[cur.op] || '#e8001c') : 'rgba(58,48,64,0.5)';
            return (
              <motion.div key={i} animate={{ borderColor: bc }} transition={{ duration: 0.3 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', border: `1px solid`, borderRadius: 4, padding: '0.4rem 0.6rem', background: isActive ? `${bc}10` : 'rgba(10,8,14,0.6)', boxShadow: isActive ? `0 0 10px ${bc}44` : 'none' }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', color: isActive ? bc : '#6a6070', minWidth: 16 }}>{i}</span>
                <div style={{ width: 1, height: 20, background: 'rgba(58,48,64,0.8)' }} />
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', flex: 1 }}>
                  {bucket.length === 0
                    ? <span style={{ color: '#3a3040', fontSize: '0.72rem', fontFamily: 'Bebas Neue, sans-serif' }}>EMPTY</span>
                    : bucket.map((entry, j) => (
                      <motion.div key={entry.key} initial={{ scale: 0 }} animate={{ scale: 1 }}
                        style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.3)', borderRadius: 3, padding: '0.15rem 0.4rem', fontSize: '0.72rem', color: '#c9a96e', fontFamily: 'Bebas Neue, sans-serif' }}>
                        {entry.key}:{entry.val}
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right panel */}
        <div style={{ flex: 1, minWidth: 160 }}>
          {cur.op && (
            <motion.div key={cur.op + idx} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${opColor[cur.op] || '#e8001c'}12`, border: `1px solid ${opColor[cur.op] || '#e8001c'}44`, borderRadius: 3, padding: '0.3rem 0.75rem', marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.8rem', color: opColor[cur.op] || '#e8001c', letterSpacing: '0.1em' }}>{cur.op?.toUpperCase()}</span>
              {cur.key && <span style={{ color: '#ede5d8', fontSize: '0.85rem' }}>"{cur.key}"</span>}
              {cur.hash !== null && <span style={{ color: '#6a6070', fontSize: '0.75rem' }}>→ bucket {cur.hash}</span>}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
              <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
              <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {STEPS.length}</p>
            </motion.div>
          </AnimatePresence>

          <div style={{ background: 'rgba(10,8,14,0.6)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: 4, padding: '0.75rem' }}>
            <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6a6070', marginBottom: '0.5rem' }}>COMPLEXITY</div>
            {[['INSERT', 'O(1) avg'], ['LOOKUP', 'O(1) avg'], ['DELETE', 'O(1) avg'], ['WORST', 'O(n)']].map(([op, c]) => (
              <div key={op} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', color: '#6a6070', letterSpacing: '0.08em' }}>{op}</span>
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', color: '#c9a96e' }}>{c}</span>
              </div>
            ))}
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
