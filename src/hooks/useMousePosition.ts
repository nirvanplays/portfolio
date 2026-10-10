import { useState, useEffect } from 'react';

export interface MousePos {
  x: number;
  y: number;
  normX: number;
  normY: number;
}

export function useMousePosition(): MousePos {
  const [mousePos, setMousePos] = useState<MousePos>({
    x: 0,
    y: 0,
    normX: 0,
    normY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({
        x: e.clientX,
        y: e.clientY,
        normX,
        normY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePos;
}
