import { useEffect, useRef } from 'react';

export default function DsaEmberCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const embers = Array.from({ length: 55 }, (_, idx) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight + window.innerHeight,
      size: Math.random() * 2.2 + 0.4,
      speedY: -(Math.random() * 1.1 + 0.35),
      speedX: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.15,
      flicker: Math.random() * Math.PI * 2,
      // P5 blend: ~30% red sparks, 70% gold embers
      isRed: idx < 17,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      embers.forEach(e => {
        e.y += e.speedY;
        e.x += e.speedX + Math.sin(e.flicker) * 0.3;
        e.flicker += 0.04;
        e.opacity += (Math.random() - 0.5) * 0.03;
        e.opacity = Math.max(0.05, Math.min(0.8, e.opacity));

        if (e.y < -10) {
          e.y = canvas.height + 10;
          e.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 2);
        if (e.isRed) {
          grad.addColorStop(0, `rgba(232, 0, 28, ${e.opacity})`);
          grad.addColorStop(0.5, `rgba(180, 0, 20, ${e.opacity * 0.5})`);
          grad.addColorStop(1, 'rgba(100, 0, 10, 0)');
        } else {
          grad.addColorStop(0, `rgba(255, 160, 60, ${e.opacity})`);
          grad.addColorStop(0.5, `rgba(255, 80, 20, ${e.opacity * 0.6})`);
          grad.addColorStop(1, 'rgba(255, 40, 0, 0)');
        }
        ctx.fillStyle = grad;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="ember-canvas" />;
}
