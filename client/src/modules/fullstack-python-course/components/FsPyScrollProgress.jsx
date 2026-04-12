import { useScroll, useSpring, motion } from 'framer-motion';

export default function FsPyScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px]"
    >
      <div className="w-full h-full" style={{ background: 'var(--accent)' }} />
    </motion.div>
  );
}
