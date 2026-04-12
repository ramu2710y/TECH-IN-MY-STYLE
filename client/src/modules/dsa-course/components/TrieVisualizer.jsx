import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoPlay, IoPause, IoPlaySkipForward, IoRefresh } from 'react-icons/io5';
import SpeedControl from './SpeedControl';

const WORDS = ['cat', 'car', 'card', 'care', 'bat', 'bar'];

function buildTrieSteps(words) {
  const steps = [];
  const root = { char: 'ROOT', children: {}, isEnd: false };
  steps.push({ trie: JSON.parse(JSON.stringify(root)), word: null, path: [], explanation: 'Empty Trie. Each node stores a character. Words share common prefixes.' });

  for (const word of words) {
    let node = root;
    const path = [];
    steps.push({ trie: JSON.parse(JSON.stringify(root)), word, path: [], explanation: `Insert "${word}" — traverse from root, create missing nodes.` });
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      path.push(ch);
      if (!node.children[ch]) {
        node.children[ch] = { char: ch, children: {}, isEnd: false };
        steps.push({ trie: JSON.parse(JSON.stringify(root)), word, path: [...path], explanation: `Create node '${ch}' for "${word.slice(0, i + 1)}"` });
      } else {
        steps.push({ trie: JSON.parse(JSON.stringify(root)), word, path: [...path], explanation: `Node '${ch}' already exists — shared prefix "${word.slice(0, i + 1)}"` });
      }
      node = node.children[ch];
    }
    node.isEnd = true;
    steps.push({ trie: JSON.parse(JSON.stringify(root)), word, path: [...path], explanation: `Mark end of word "${word}". Insert complete.` });
  }
  steps.push({ trie: JSON.parse(JSON.stringify(root)), word: null, path: [], explanation: `Trie complete! ${words.length} words inserted. Prefix search is O(m) where m = word length.` });
  return steps;
}

const STEPS = buildTrieSteps(WORDS);

function TrieNode({ node, depth, activePath, pathIdx }) {
  const isActive = activePath[pathIdx] === node.char || (node.char === 'ROOT' && activePath.length > 0);
  const children = Object.values(node.children);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      <motion.div animate={{ borderColor: isActive ? '#e8001c' : node.isEnd ? '#3aff8a' : 'rgba(201,169,110,0.2)', background: isActive ? 'rgba(232,0,28,0.12)' : node.isEnd ? 'rgba(58,255,138,0.08)' : 'rgba(16,12,18,0.8)', boxShadow: isActive ? '0 0 12px rgba(232,0,28,0.4)' : 'none' }} transition={{ duration: 0.3 }}
        style={{ width: 36, height: 36, border: '1px solid', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: isActive ? '#e8001c' : node.isEnd ? '#3aff8a' : '#c9a96e' }}>
          {node.char === 'ROOT' ? '●' : node.char.toUpperCase()}
        </span>
        {node.isEnd && <div style={{ position: 'absolute', bottom: -4, right: -4, width: 8, height: 8, borderRadius: '50%', background: '#3aff8a' }} />}
      </motion.div>

      {children.length > 0 && (
        <div style={{ display: 'flex', gap: depth < 2 ? '0.5rem' : '0.25rem', marginTop: 4, position: 'relative' }}>
          {/* Connector line */}
          <div style={{ position: 'absolute', top: 0, left: '50%', width: 1, height: 8, background: 'rgba(201,169,110,0.2)', transform: 'translateX(-50%)' }} />
          {children.map(child => (
            <div key={child.char} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
              <TrieNode node={child} depth={depth + 1} activePath={activePath} pathIdx={pathIdx + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TrieVisualizer() {
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

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
        🌐 TRIE — PREFIX TREE
      </h3>
      <p style={{ color: '#6a6070', fontSize: '0.75rem', fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
        WORDS: {WORDS.map(w => `"${w}"`).join(', ')}
      </p>

      {/* Trie visualization */}
      <div style={{ background: 'rgba(6,4,8,0.6)', border: '1px solid rgba(232,0,28,0.1)', borderRadius: 6, padding: '1.5rem', marginBottom: '1rem', overflowX: 'auto' }}>
        <TrieNode node={cur.trie} depth={0} activePath={cur.path} pathIdx={-1} />
      </div>

      {/* Current word */}
      {cur.word && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: '#6a6070' }}>INSERTING:</span>
          {cur.word.split('').map((ch, i) => (
            <motion.div key={i} style={{ background: cur.path.includes(ch) && cur.path[i] === ch ? 'rgba(232,0,28,0.15)' : 'rgba(16,12,18,0.8)', border: `1px solid ${cur.path[i] === ch ? '#e8001c' : 'rgba(201,169,110,0.2)'}`, borderRadius: 3, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.9rem', color: cur.path[i] === ch ? '#e8001c' : '#c9a96e' }}>
              {ch.toUpperCase()}
            </motion.div>
          ))}
        </div>
      )}

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
        {[['#e8001c', 'Active Path'], ['#3aff8a', 'Word End'], ['#c9a96e', 'Node']].map(([c, l]) => (
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
