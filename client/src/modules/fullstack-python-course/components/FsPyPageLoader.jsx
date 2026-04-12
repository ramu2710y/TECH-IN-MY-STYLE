import { motion } from 'framer-motion';

export default function FsPyPageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
      style={{ background: 'var(--mac-bg)' }}>
      <div className="flex flex-col items-center gap-4">
        {/* macOS-style spinner */}
        <div className="relative w-10 h-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-3.5 rounded-full"
              style={{
                background: 'var(--text-tertiary)',
                top: '50%', left: '50%',
                transformOrigin: '0 -14px',
                transform: `rotate(${i * 30}deg) translateX(-50%)`,
              }}
              animate={{ opacity: [0.15, 1, 0.15] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * (1 / 12),
                ease: 'linear',
              }}
            />
          ))}
        </div>
        <p className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>Loading…</p>
      </div>
    </div>
  );
}
