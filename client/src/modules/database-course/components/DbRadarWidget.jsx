import { motion } from 'framer-motion';

export default function DbRadarWidget({ size = 120 }) {
  const r = size / 2;
  return (
    <div style={{ width: size, height: size, position: 'relative', flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Circles */}
        {[0.25, 0.5, 0.75, 1].map((f, i) => (
          <circle key={i} cx={r} cy={r} r={r * f} fill="none" stroke="rgba(0,240,255,0.15)" strokeWidth="1" />
        ))}
        {/* Cross lines */}
        <line x1={r} y1={0} x2={r} y2={size} stroke="rgba(0,240,255,0.1)" strokeWidth="1" />
        <line x1={0} y1={r} x2={size} y2={r} stroke="rgba(0,240,255,0.1)" strokeWidth="1" />
        {/* Diagonal lines */}
        <line x1={0} y1={0} x2={size} y2={size} stroke="rgba(0,240,255,0.05)" strokeWidth="1" />
        <line x1={size} y1={0} x2={0} y2={size} stroke="rgba(0,240,255,0.05)" strokeWidth="1" />
        {/* Blips */}
        <circle cx={r * 0.6} cy={r * 0.7} r={2} fill="#00f0ff" opacity={0.8} />
        <circle cx={r * 1.3} cy={r * 0.5} r={2} fill="#ff9f1c" opacity={0.8} />
        <circle cx={r * 0.8} cy={r * 1.4} r={2} fill="#39ff14" opacity={0.8} />
      </svg>
      {/* Sweep */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: size, height: size,
          transformOrigin: `${r}px ${r}px`,
        }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <linearGradient id="db-sweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path d={`M ${r} ${r} L ${r} 0 A ${r} ${r} 0 0 1 ${size} ${r} Z`} fill="url(#db-sweep)" />
          <line x1={r} y1={r} x2={r} y2={0} stroke="#00f0ff" strokeWidth="1.5" opacity={0.8} />
        </svg>
      </motion.div>
    </div>
  );
}
