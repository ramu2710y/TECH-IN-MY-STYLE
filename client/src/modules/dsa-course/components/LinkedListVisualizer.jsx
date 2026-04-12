import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const NODES = [10, 20, 30, 40, 50];

function generateTraversalSteps(nodes) {
  const steps = [];
  steps.push({ visited: [], active: -1, explanation: 'Linked List ready. Head points to first node.', codeLine: 0 });
  for (let i = 0; i < nodes.length; i++) {
    steps.push({ visited: Array.from({ length: i }, (_, k) => k), active: i, explanation: `Visiting node ${nodes[i]}. curr = curr.next`, codeLine: i === 0 ? 1 : 2 });
  }
  steps.push({ visited: nodes.map((_, i) => i), active: -1, explanation: 'Traversal complete! Reached NULL.', codeLine: 3 });
  return steps;
}

const CODE_LINES = [
  'curr = head',
  'while curr:',
  '    curr = curr.next',
  '# reached NULL',
];

export default function LinkedListVisualizer() {
  const steps = useRef(generateTraversalSteps(NODES));
  const [stepIdx, setStepIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(900);
  const intervalRef = useRef(null);

  const current = steps.current[stepIdx];

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setStepIdx(i => {
          if (i >= steps.current.length - 1) { setPlaying(false); return i; }
          return i + 1;
        });
      }, 900);
    } else clearInterval(intervalRef.current);
    return () => clearInterval(intervalRef.current);
  }, [playing, speed]);

  const reset = () => { setPlaying(false); setStepIdx(0); };
  const stepFwd = () => { if (stepIdx < steps.current.length - 1) setStepIdx(i => i + 1); };

  return (
    <div style={{ background: 'rgba(10,10,10,0.8)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: 12, padding: '1.5rem', marginTop: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
        🔗 LINKED LIST TRAVERSAL
      </h3>

      {/* Nodes */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, overflowX: 'auto', padding: '1rem 0', marginBottom: '1rem' }}>
        {/* HEAD label */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 8 }}>
          <span style={{ color: '#c9a96e', fontSize: '0.7rem', fontFamily: 'Cinzel, serif', marginBottom: 4 }}>HEAD</span>
          <div style={{ width: 2, height: 20, background: 'rgba(201,169,110,0.4)' }} />
          <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid rgba(201,169,110,0.4)' }} />
        </div>

        {NODES.map((val, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              animate={{
                borderColor: current.active === i ? '#ff6b2b' : current.visited.includes(i) ? '#c9a96e' : 'rgba(201,169,110,0.2)',
                boxShadow: current.active === i ? '0 0 20px rgba(255,107,43,0.6)' : current.visited.includes(i) ? '0 0 12px rgba(201,169,110,0.3)' : 'none',
                background: current.active === i ? 'rgba(255,107,43,0.1)' : current.visited.includes(i) ? 'rgba(201,169,110,0.08)' : 'rgba(15,15,15,0.9)',
              }}
              transition={{ duration: 0.4 }}
              style={{ border: '1px solid', borderRadius: 8, minWidth: 80, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              {/* Data section */}
              <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid rgba(201,169,110,0.1)', textAlign: 'center' }}>
                <div style={{ color: '#7a7060', fontSize: '0.6rem', marginBottom: 2 }}>data</div>
                <div style={{ color: current.active === i ? '#ff6b2b' : '#e8e0d0', fontWeight: 700, fontSize: '1rem' }}>{val}</div>
              </div>
              {/* Next pointer */}
              <div style={{ padding: '0.3rem 0.75rem', textAlign: 'center' }}>
                <div style={{ color: '#7a7060', fontSize: '0.6rem', marginBottom: 1 }}>next</div>
                <div style={{ color: '#c9a96e', fontSize: '0.7rem' }}>{i < NODES.length - 1 ? '→' : 'NULL'}</div>
              </div>
            </motion.div>

            {/* Arrow */}
            {i < NODES.length - 1 && (
              <motion.div
                animate={{ opacity: current.visited.includes(i) || current.active === i ? 1 : 0.3 }}
                style={{ display: 'flex', alignItems: 'center', margin: '0 4px' }}>
                <div style={{ width: 20, height: 2, background: current.visited.includes(i) ? '#c9a96e' : 'rgba(201,169,110,0.3)' }} />
                <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: `8px solid ${current.visited.includes(i) ? '#c9a96e' : 'rgba(201,169,110,0.3)'}` }} />
              </motion.div>
            )}
          </div>
        ))}

        {/* NULL */}
        <div style={{ marginLeft: 8, color: '#7a7060', fontSize: '0.8rem', fontFamily: 'Cinzel, serif' }}>NULL</div>
      </div>

      {/* Explanation */}
      <AnimatePresence mode="wait">
        <motion.div key={stepIdx} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
          style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1rem' }}>
          <p style={{ color: '#e8e0d0', fontSize: '0.85rem' }}>{current.explanation}</p>
          <p style={{ color: '#7a7060', fontSize: '0.75rem', marginTop: 4 }}>Step {stepIdx + 1} / {steps.current.length}</p>
        </motion.div>
      </AnimatePresence>

      {/* Code */}
      <div className="code-block" style={{ padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.8rem' }}>
        {CODE_LINES.map((line, i) => (
          <span key={i} className={current.codeLine === i ? 'line-highlight' : ''} style={{ display: 'block', color: current.codeLine === i ? '#c9a96e' : '#7a7060' }}>
            {line}
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
          style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 8, padding: '0.5rem 1rem', color: '#c9a96e', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6, opacity: stepIdx >= steps.current.length - 1 ? 0.4 : 1 }}>
          <IoPlaySkipForward /> Step
        </button>
        <button onClick={reset}
          style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', borderRadius: 8, padding: '0.5rem 1rem', color: '#c9a96e', cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 6 }}>
          <IoRefresh /> Reset
        </button>
        <SpeedControl speed={speed} onChange={setSpeed} />
        <div style={{ flex: 1, height: 4, background: 'rgba(201,169,110,0.1)', borderRadius: 2, overflow: 'hidden' }}>
          <motion.div style={{ height: '100%', background: 'linear-gradient(to right, #c9a96e, #ff6b2b)', borderRadius: 2 }}
            animate={{ width: `${(stepIdx / (steps.current.length - 1)) * 100}%` }}
            transition={{ duration: 0.3 }} />
        </div>
      </div>
    </div>
  );
}
