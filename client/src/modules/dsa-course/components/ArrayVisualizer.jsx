import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const INITIAL = [64, 34, 25, 12, 22, 11, 90];

function generateBubbleSortSteps(arr) {
  const steps = [];
  const a = [...arr];
  const n = a.length;

  steps.push({ arr: [...a], active: [], comparing: [], sorted: [], explanation: 'Initial array. We will sort using Bubble Sort.', codeLine: 0 });

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({ arr: [...a], active: [], comparing: [j, j + 1], sorted: Array.from({ length: i }, (_, k) => n - 1 - k), explanation: `Comparing arr[${j}]=${a[j]} and arr[${j+1}]=${a[j+1]}`, codeLine: 4 });
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        steps.push({ arr: [...a], active: [j, j + 1], comparing: [], sorted: Array.from({ length: i }, (_, k) => n - 1 - k), explanation: `Swapped! arr[${j}] and arr[${j+1}] exchanged.`, codeLine: 6 });
      }
    }
    steps.push({ arr: [...a], active: [], comparing: [], sorted: Array.from({ length: i + 1 }, (_, k) => n - 1 - k), explanation: `Pass ${i + 1} complete. Element ${a[n - 1 - i]} is in its final position.`, codeLine: 2 });
  }
  steps.push({ arr: [...a], active: [], comparing: [], sorted: Array.from({ length: n }, (_, k) => k), explanation: 'Array fully sorted!', codeLine: -1 });
  return steps;
}

const CODE_LINES = [
  'for i in range(n - 1):',
  '    for j in range(n - i - 1):',
  '        # end of pass',
  '',
  '        if arr[j] > arr[j + 1]:',
  '            # swap',
  '            arr[j], arr[j+1] = arr[j+1], arr[j]',
];

export default function ArrayVisualizer() {
  const steps = useRef(generateBubbleSortSteps(INITIAL));
  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);
  const intervalRef = useRef(null);

  const current = steps.current[stepIdx];
  const maxH = Math.max(...current.arr);

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setStepIdx(i => {
          if (i >= steps.current.length - 1) { setPlaying(false); return i; }
          return i + 1;
        });
      }, 700);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [playing, speed]);

  const reset = () => { setPlaying(false); setStepIdx(0); };
  const stepFwd = () => { if (stepIdx < steps.current.length - 1) setStepIdx(i => i + 1); };

  const barColor = (i) => {
    if (current.sorted.includes(i)) return '#3aff8a';
    if (current.active.includes(i)) return '#ff6b2b';
    if (current.comparing.includes(i)) return '#3a8aff';
    return '#c9a96e';
  };

  const barGlow = (i) => {
    if (current.sorted.includes(i)) return '0 0 12px rgba(58,255,138,0.6)';
    if (current.active.includes(i)) return '0 0 16px rgba(255,107,43,0.7)';
    if (current.comparing.includes(i)) return '0 0 14px rgba(58,138,255,0.6)';
    return 'none';
  };

  return (
    <div style={{ background: 'rgba(10,10,10,0.8)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: 12, padding: '1.5rem', marginTop: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
        ⚡ BUBBLE SORT — STEP BY STEP
      </h3>

      {/* Bars */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 140, marginBottom: '1rem', padding: '0 0.5rem' }}>
        {current.arr.map((val, i) => (
          <motion.div key={i} layout
            style={{
              flex: 1, borderRadius: '4px 4px 0 0',
              height: `${(val / maxH) * 120 + 10}px`,
              background: `linear-gradient(to top, ${barColor(i)}88, ${barColor(i)})`,
              boxShadow: barGlow(i),
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
              paddingTop: 4, position: 'relative',
              transition: 'background 0.3s, box-shadow 0.3s',
            }}
            animate={{ height: `${(val / maxH) * 120 + 10}px` }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 600 }}>{val}</span>
            <span style={{ position: 'absolute', bottom: -20, color: '#7a7060', fontSize: '0.65rem' }}>{i}</span>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
        {[['#c9a96e', 'Unsorted'], ['#3a8aff', 'Comparing'], ['#ff6b2b', 'Swapping'], ['#3aff8a', 'Sorted']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
            <span style={{ color: '#7a7060', fontSize: '0.75rem' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Step explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={stepIdx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#e8e0d0', fontSize: '0.85rem' }}>{current.explanation}</p>
          <p style={{ color: '#7a7060', fontSize: '0.75rem', marginTop: 4 }}>Step {stepIdx + 1} / {steps.current.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Code highlight */}
      <div className="code-block" style={{ padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.8rem' }}>
        {CODE_LINES.map((line, i) => (
          <span key={i} className={current.codeLine === i ? 'line-highlight' : ''} style={{ display: 'block', color: current.codeLine === i ? '#c9a96e' : '#7a7060' }}>
            {line || '\u00A0'}
          </span>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button onClick={() => setPlaying(p => !p)}
          style={{ background: playing ? 'rgba(255,107,43,0.15)' : 'rgba(201,169,110,0.12)', border: `1px solid ${playing ? 'rgba(255,107,43,0.4)' : 'rgba(201,169,110,0.3)'}`, borderRadius: 8, padding: '0.5rem 1.2rem', color: playing ? '#ff6b2b' : '#c9a96e', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s' }}>
          {playing ? <IoPause /> : <IoPlay />}
          {playing ? 'Pause' : 'Play'}
        </button>
        <button onClick={stepFwd} disabled={stepIdx >= steps.current.length - 1}
          style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 8, padding: '0.5rem 1rem', color: '#c9a96e', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6, opacity: stepIdx >= steps.current.length - 1 ? 0.4 : 1, transition: 'all 0.2s' }}>
          <IoPlaySkipForward /> Step
        </button>
        <button onClick={reset}
          style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 8, padding: '0.5rem 1rem', color: '#c9a96e', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6, transition: 'all 0.2s' }}>
          <IoRefresh /> Reset
        </button>
        {/* Progress bar */}
        <SpeedControl speed={speed} onChange={setSpeed} />
        <div style={{ flex: 1, height: 4, background: 'rgba(201,169,110,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #c9a96e, #ff6b2b)', borderRadius: 2 }}
            animate={{ width: `${((stepIdx) / (steps.current.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }} />
        </div>
      </div>
    </div>
  );
}
