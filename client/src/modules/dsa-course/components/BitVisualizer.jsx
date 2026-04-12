import { useState } from 'react';
import { motion } from 'framer-motion';

const OPS = [
  { name: 'AND', a: 12, b: 10, op: (a, b) => a & b, desc: 'AND: 1 only if BOTH bits are 1. Used for masking.' },
  { name: 'OR', a: 12, b: 10, op: (a, b) => a | b, desc: 'OR: 1 if EITHER bit is 1. Used for setting bits.' },
  { name: 'XOR', a: 12, b: 10, op: (a, b) => a ^ b, desc: 'XOR: 1 if bits are DIFFERENT. Used for toggling, finding unique.' },
  { name: 'NOT', a: 12, b: null, op: (a) => ~a & 0xFF, desc: 'NOT: Flip all bits. ~12 = -13 (two\'s complement).' },
  { name: 'LEFT SHIFT', a: 3, b: 2, op: (a, b) => a << b, desc: 'Left shift by 2: multiply by 2^2 = 4. Fast multiplication.' },
  { name: 'RIGHT SHIFT', a: 12, b: 2, op: (a, b) => a >> b, desc: 'Right shift by 2: divide by 2^2 = 4. Fast division.' },
  { name: 'CHECK BIT', a: 13, b: 2, op: (a, b) => (a >> b) & 1, desc: 'Check if bit 2 is set: (13 >> 2) & 1. Returns 1 if set.' },
  { name: 'SET BIT', a: 8, b: 1, op: (a, b) => a | (1 << b), desc: 'Set bit 1: 8 | (1 << 1) = 10. Turn on a specific bit.' },
  { name: 'CLEAR BIT', a: 13, b: 2, op: (a, b) => a & ~(1 << b), desc: 'Clear bit 2: 13 & ~(1<<2) = 9. Turn off a specific bit.' },
];

function toBinary(n, bits = 8) {
  return (n >>> 0).toString(2).padStart(bits, '0').slice(-bits);
}

export default function BitVisualizer() {
  const [opIdx, setOpIdx] = useState(0);
  const op = OPS[opIdx];
  const result = op.b !== null ? op.op(op.a, op.b) : op.op(op.a);
  const aBin = toBinary(op.a);
  const bBin = op.b !== null ? toBinary(op.b) : null;
  const rBin = toBinary(result);

  const bitColor = (bit, i, type) => {
    if (type === 'result') {
      if (bit === '1') return '#3aff8a';
      return '#3a3040';
    }
    if (bit === '1') return '#c9a96e';
    return '#3a3040';
  };

  return (
    <div style={{ background: 'rgba(10,8,14,0.85)', border: '1px solid rgba(232,0,28,0.15)', borderRadius: 8, padding: '1.5rem' }}>
      <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#e8001c', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
        ⚙️ BIT MANIPULATION OPERATIONS
      </h3>

      {/* Operation selector */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {OPS.map((o, i) => (
          <button key={o.name} onClick={() => setOpIdx(i)}
            style={{ background: opIdx === i ? 'rgba(232,0,28,0.15)' : 'rgba(16,12,18,0.8)', border: `1px solid ${opIdx === i ? '#e8001c' : 'rgba(201,169,110,0.15)'}`, borderRadius: 3, padding: '0.3rem 0.6rem', color: opIdx === i ? '#e8001c' : '#6a6070', cursor: 'pointer', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', letterSpacing: '0.08em', transition: 'all 0.2s' }}>
            {o.name}
          </button>
        ))}
      </div>

      {/* Bit display */}
      <div style={{ marginBottom: '1.5rem' }}>
        {/* Bit index header */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 4, paddingLeft: 80 }}>
          {Array(8).fill(0).map((_, i) => (
            <div key={i} style={{ width: 32, textAlign: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.55rem', color: '#6a6070' }}>{7 - i}</div>
          ))}
        </div>

        {/* A row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
          <div style={{ width: 76, textAlign: 'right', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', color: '#c9a96e' }}>A = {op.a}</div>
          {aBin.split('').map((bit, i) => (
            <motion.div key={i} animate={{ background: bit === '1' ? 'rgba(201,169,110,0.2)' : 'rgba(16,12,18,0.8)', borderColor: bitColor(bit, i, 'a') }}
              style={{ width: 32, height: 32, border: '1px solid', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: bitColor(bit, i, 'a') }}>
              {bit}
            </motion.div>
          ))}
        </div>

        {/* B row */}
        {bBin && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
            <div style={{ width: 76, textAlign: 'right', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', color: '#c9a96e' }}>B = {op.b}</div>
            {bBin.split('').map((bit, i) => (
              <motion.div key={i} animate={{ background: bit === '1' ? 'rgba(201,169,110,0.2)' : 'rgba(16,12,18,0.8)', borderColor: bitColor(bit, i, 'b') }}
                style={{ width: 32, height: 32, border: '1px solid', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: bitColor(bit, i, 'b') }}>
                {bit}
              </motion.div>
            ))}
          </div>
        )}

        {/* Operator line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
          <div style={{ width: 76, textAlign: 'right', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.85rem', color: '#e8001c' }}>{op.name}</div>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, #e8001c, transparent)', maxWidth: 8 * 32 + 7 * 4 }} />
        </div>

        {/* Result row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 76, textAlign: 'right', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.75rem', color: '#3aff8a' }}>= {result}</div>
          {rBin.split('').map((bit, i) => (
            <motion.div key={i} animate={{ background: bit === '1' ? 'rgba(58,255,138,0.2)' : 'rgba(16,12,18,0.8)', borderColor: bitColor(bit, i, 'result'), boxShadow: bit === '1' ? '0 0 8px rgba(58,255,138,0.4)' : 'none' }}
              style={{ width: 32, height: 32, border: '2px solid', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', color: bitColor(bit, i, 'result') }}>
              {bit}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div style={{ background: 'rgba(232,0,28,0.04)', border: '1px solid rgba(232,0,28,0.1)', borderLeft: '3px solid #e8001c', borderRadius: '0 6px 6px 0', padding: '0.75rem 1rem', marginBottom: '1rem' }}>
        <p style={{ color: '#c8c0b0', fontSize: '0.85rem' }}>{op.desc}</p>
        <p style={{ color: '#6a6070', fontSize: '0.78rem', marginTop: 4, fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.08em' }}>
          {op.b !== null ? `${op.a} ${op.name} ${op.b} = ${result}` : `${op.name} ${op.a} = ${result}`}
        </p>
      </div>

      {/* Common tricks */}
      <div style={{ background: 'rgba(10,8,14,0.6)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: 4, padding: '0.75rem' }}>
        <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: '#6a6070', marginBottom: '0.5rem' }}>COMMON TRICKS</div>
        {[
          ['n & (n-1)', 'Remove lowest set bit'],
          ['n & (-n)', 'Isolate lowest set bit'],
          ['n ^ n = 0', 'XOR with itself = 0'],
          ['a ^ b ^ a = b', 'Find unique element'],
          ['n >> 1', 'Divide by 2'],
          ['n << 1', 'Multiply by 2'],
        ].map(([trick, desc]) => (
          <div key={trick} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, gap: '1rem' }}>
            <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', color: '#c9a96e', letterSpacing: '0.05em' }}>{trick}</span>
            <span style={{ fontSize: '0.72rem', color: '#6a6070', textAlign: 'right' }}>{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
