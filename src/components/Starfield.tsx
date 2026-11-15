import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  tint: string;
}

const STAR_TINTS = [
  '237, 235, 230', // warm off-white
  '222, 228, 240', // faint cool starlight
  '201, 164, 92',  // rare subtle warm amber star
];

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];

    const buildStars = (w: number, h: number): Star[] => {
      const count = Math.min(260, Math.max(95, Math.floor((w * h) / 7000)));
      const result: Star[] = [];
      for (let i = 0; i < count; i++) {
        const isBright = i % 10 === 0;
        const isWarm = i % 17 === 0;
        result.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: isBright ? 1.85 + Math.random() * 0.85 : 0.8 + Math.random() * 0.75,
          baseAlpha: isBright ? 0.68 + Math.random() * 0.25 : 0.24 + Math.random() * 0.42,
          twinkleSpeed: 0.4 + Math.random() * 1.1,
          phase: Math.random() * Math.PI * 2,
          tint: isWarm ? STAR_TINTS[2] : i % 3 === 0 ? STAR_TINTS[1] : STAR_TINTS[0],
        });
      }
      return result;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = buildStars(width, height);
    };

    const drawFrame = (timeMs: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = timeMs * 0.001;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const flicker = prefersReducedMotion
          ? 0
          : Math.sin(t * s.twinkleSpeed + s.phase) * 0.16;
        const alpha = Math.max(0.12, Math.min(0.95, s.baseAlpha + flicker));

        if (s.radius >= 1.85) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.tint}, ${(alpha * 0.14).toFixed(3)})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.tint}, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationId = window.requestAnimationFrame(drawFrame);
      }
    };

    resize();
    if (prefersReducedMotion) {
      drawFrame(0);
    } else {
      animationId = window.requestAnimationFrame(drawFrame);
    }

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) window.cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
