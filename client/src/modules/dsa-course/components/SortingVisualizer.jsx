import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const INITIAL = [38, 27, 43, 3, 9, 82, 10];

function generateMergeSteps(arr) {
  const steps = [];
  const a = [...arr];
  steps.push({ arr: [...a], highlight: [], sorted: [], explanation: 'Merge Sort: Divide array into halves recursively, then merge sorted halves.', codeLine: 0 });

  function merge(arr, l, m, r, steps) {
    const left = arr.slice(l, m + 1);
    const right = arr.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) {
      steps.push({ arr: [...arr], highlight: [l + i, m + 1 + j], sorted: [], explanation: `Comparing ${left[i]} and ${right[j]} — pick smaller: ${Math.min(left[i], right[j])}`, codeLine: 3 });
      if (left[i] <= right[j]) { arr[k++] = left[i++]; }
      else { arr[k++] = right[j++]; }
      steps.push({ arr: [...arr], highlight: [k - 1], sorted: [], explanation: `Placed ${arr[k - 1]} at position ${k - 1}`, codeLine: 4 });
    }
    while (i < left.length) { arr[k++] = left[i++]; steps.push({ arr: [...arr], highlight: [k - 1], sorted: [], explanation: `Copy remaining left: ${arr[k - 1]}`, codeLine: 5 }); }
    while (j < right.length) { arr[k++] = right[j++]; steps.push({ arr: [...arr], highlight: [k - 1], sorted: [], explanation: `Copy remaining right: ${arr[k - 1]}`, codeLine: 5 }); }
    const sortedIdx = Array.from({ length: r - l + 1 }, (_, x) => l + x);
    steps.push({ arr: [...arr], highlight: [], sorted: sortedIdx, explanation: `Merged segment [${l}..${r}]: [${arr.slice(l, r + 1).join(', ')}]`, codeLine: 6 });
  }

  function mergeSort(arr, l, r, steps) {
    if (l >= r) return;
    const m = Math.floor((l + r) / 2);
    steps.push({ arr: [...arr], highlight: Array.from({ length: r - l + 1 }, (_, i) => l + i), sorted: [], explanation: `Divide [${l}..${r}] → [${l}..${m}] and [${m + 1}..${r}]`, codeLine: 1 });
    mergeSort(arr, l, m, steps);
    mergeSort(arr, m + 1, r, steps);
    merge(arr, l, m, r, steps);
  }

  mergeSort(a, 0, a.length - 1, steps);
  steps.push({ arr: [...a], highlight: [], sorted: a.map((_, i) => i), explanation: 'Merge Sort complete! Array fully sorted in O(n log n).', codeLine: -1 });
  return steps;
}

const CODE_LINES = [
  'def merge_sort(arr):',
  '    mid = len(arr) // 2',
  '    left = merge_sort(arr[:mid])',
  '    if left[i] <= right[j]:',
  '        result.append(left[i])',
  '        result.append(right[j])',
  '    # merge complete',
];

export default function SortingVisualizer() {
  const steps = useRef(generateMergeSteps(INITIAL));
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);
  const timerRef = useRef(null);
  const cur = steps.current[idx];
  const maxH = Math.max(...cur.arr);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(() => {
        setIdx(i => { if (i >= steps.current.length - 1) { setPlaying(false); return i; } return i + 1; });
      }, speed);
    } else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [playing, speed]);

  const reset = () => { setPlaying(false); setIdx(0); };
  const step = () => { if (idx < steps.current.length - 1) setIdx(i => i + 1); };

  const barColor = (i) => {
    if (cur.sorted.includes(i)) return '#3aff8a';
    if (cur.highlight.includes(i)) return '#e8001c';
    return '#c9a96e';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        ⚡ MERGE SORT VISUALIZATION — O(n log n)
      </h3>

      {/* Bars */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 140, marginBottom: '1.5rem', padding: '0 0.5rem' }}>
        {cur.arr.map((val, i) => (
          <motion.div key={i} layout
            style={{ flex: 1, borderRadius: '4px 4px 0 0', background: `linear-gradient(to top, ${barColor(i)}88, ${barColor(i)})`, boxShadow: cur.highlight.includes(i) ? `0 0 16px ${barColor(i)}88` : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 4, position: 'relative', transition: 'background 0.3s, box-shadow 0.3s' }}
            animate={{ height: `${(val / maxH) * 120 + 10}px` }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
            <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 600 }}>{val}</span>
            <span style={{ position: 'absolute', bottom: -18, color: '#6a6070', fontSize: '0.6rem' }}>{i}</span>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {[['#c9a96e', 'Unsorted'], ['#e8001c', 'Comparing'], ['#3aff8a', 'Sorted']].map(([c, l]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
            <span style={{ color: '#6a6070', fontSize: '0.72rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>{l}</span>
          </div>
        ))}
      </div>

      {/* Code */}
      <div className="code-block" style={{ padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.78rem' }}>
        {CODE_LINES.map((line, i) => (
          <span key={i} className={cur.codeLine === i ? 'line-highlight' : ''} style={{ display: 'block', color: cur.codeLine === i ? '#c9a96e' : '#6a6070' }}>{line}</span>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{cur.explanation}</p>
          <p style={{ color: '#6a6070', fontSize: '0.72rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>STEP {idx + 1} / {steps.current.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        <button onClick={() => setPlaying(p => !p)} className={playing ? 'p5-btn' : 'p5-btn p5-btn-gold'} style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>{playing ? <IoPause /> : <IoPlay />}{playing ? 'PAUSE' : 'PLAY'}</span>
        </button>
        <button onClick={step} disabled={idx >= steps.current.length - 1} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem', opacity: idx >= steps.current.length - 1 ? 0.4 : 1 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoPlaySkipForward />STEP</span>
        </button>
        <button onClick={reset} className="p5-btn p5-btn-gold" style={{ fontSize: '0.8rem', padding: '0.45rem 0.9rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><IoRefresh />RESET</span>
        </button>
        <SpeedControl speed={speed} onChange={setSpeed} />
        <div style={{ flex: 1, height: 3, background: 'rgba(232,0,28,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #e8001c, #c9a96e)', borderRadius: 2 }}
            animate={{ width: `${(idx / (steps.current.length - 1)) * 100}%` }} transition={{ duration: 0.3 }} />
        </div>
      </div>
    </div>
  );
}
