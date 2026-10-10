import { useEffect, useRef } from 'react';
import type React from 'react';

export const InteractiveSystemGraphic: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set high-DPI resolution
    const size = 180;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    // 3D Octahedron Vertices
    const vertices = [
      { x: 0, y: -55, z: 0 },
      { x: 0, y: 55, z: 0 },
      { x: -50, y: 0, z: -30 },
      { x: 50, y: 0, z: -30 },
      { x: 30, y: 0, z: 45 },
      { x: -30, y: 0, z: 45 },
    ];

    // Edges connecting vertices
    const edges = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 3], [3, 4], [4, 5], [5, 2],
    ];

    let angleX = 0.2;
    let angleY = 0;
    let targetAngleY = 0;
    let mouseX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      mouseX = (e.clientX - cx) / (window.innerWidth / 2);
      targetAngleY = mouseX * 0.4;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Visibility Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        isVisible = e.isIntersecting;
      });
    });
    observer.observe(canvas);

    let lastTime = performance.now();

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      if (document.hidden || !isVisible) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!prefersReducedMotion) {
        angleY += delta * 0.4;
        angleX = Math.sin(time * 0.0008) * 0.15;
      }

      const effectiveAngleY = angleY + targetAngleY;

      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;

      // Project 3D vertices to 2D
      const projected = vertices.map((v) => {
        // Rotate Y
        const cosY = Math.cos(effectiveAngleY);
        const sinY = Math.sin(effectiveAngleY);
        const x1 = v.x * cosY + v.z * sinY;
        const z1 = -v.x * sinY + v.z * cosY;

        // Rotate X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = v.y * cosX - z1 * sinX;
        const z2 = v.y * sinX + z1 * cosX;

        // Perspective projection
        const fov = 160;
        const scale = fov / (fov + z2 + 80);
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
        };
      });

      // Draw wireframe edges
      ctx.lineWidth = 1;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.15, Math.min(0.7, 0.45 - avgZ * 0.004));

        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      // Draw vertex nodes
      projected.forEach((p) => {
        const radius = Math.max(1.8, Math.min(3.5, 2.5 - p.z * 0.02));
        ctx.fillStyle = '#60a5fa';
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
