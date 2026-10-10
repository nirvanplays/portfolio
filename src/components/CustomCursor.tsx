import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive =
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.closest('.cursor-pointer') !== null ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA';
        setHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Smooth RAF loop for outer trailing ring
    let rafId: number;
    const animateRing = () => {
      rafId = requestAnimationFrame(animateRing);
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
    };

    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] transition-opacity duration-200 ${
          hovered ? 'scale-150 bg-cyan-300' : 'scale-100'
        }`}
      />

      {/* Outer Interpolating Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full border transition-all duration-150 ease-out ${
          hovered
            ? 'scale-125 border-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
            : clicked
            ? 'scale-90 border-violet-400 bg-violet-500/20'
            : 'scale-100 border-cyan-500/30'
        }`}
      />
    </div>
  );
};
