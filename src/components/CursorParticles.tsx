'use client';

import { useEffect, useRef } from 'react';
import type React from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
}

const NEON_COLORS = [
  '#00f3ff', // Cyber Cyan
  '#00ff99', // SparkX Neon Green
  '#a855f7', // Cosmic Violet
  '#38bdf8', // Starlight Sky
  '#ec4899', // Electric Pink
];

export const CursorParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100, isMoving: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();

    // Spawn trailing particles on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.isMoving = true;

      // Create 2-3 trailing glowing particles
      for (let i = 0; i < 2; i++) {
        const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.2 + 0.4;

        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3.2 + 1.2,
          life: 1.0,
          maxLife: 1.0,
          color,
        });
      }

      // Limit array length for buttery 60fps performance
      if (particlesRef.current.length > 120) {
        particlesRef.current.splice(0, particlesRef.current.length - 120);
      }
    };

    // Burst particles on click
    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 16; i++) {
        const color = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4.5 + 1.5;

        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 4.0 + 1.5,
          life: 1.2,
          maxLife: 1.2,
          color,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Draw particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Alpha calculation
        const alpha = Math.max(0, Math.min(1, p.life / p.maxLife));
        const alphaHex = Math.floor(alpha * 255).toString(16).padStart(2, '0');

        ctx.fillStyle = p.color + alphaHex;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();

        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96; // drag
        p.vy *= 0.96;
        p.life -= 0.022;

        // Remove dead particle
        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] w-full h-full cursor-particles-canvas"
      aria-hidden="true"
    />
  );
};
