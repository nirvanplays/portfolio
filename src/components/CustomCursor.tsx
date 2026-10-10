import { useEffect, useRef, useState } from 'react';
import type React from 'react';

type CursorState = 'default' | 'hover' | 'click' | 'text' | 'project';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const stateRef = useRef<CursorState>('default');

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchDevice) return;

    setEnabled(true);

    const mouse = { x: -200, y: -200 };
    const ring = { x: -200, y: -200 };
    const ringTarget = { x: -200, y: -200 };
    let rafId: number;

    const getTargetState = (el: Element | null): CursorState => {
      if (!el) return 'default';
      const elem = el as HTMLElement;
      if (elem.closest('[data-cursor="project"]')) return 'project';
      if (elem.closest('[data-cursor="text"]')) return 'text';
      if (elem.closest('button, a, [role="button"]')) return 'hover';
      if (elem.closest('input, textarea')) return 'text';
      return 'default';
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      ringTarget.x = e.clientX;
      ringTarget.y = e.clientY;

      // Immediate dot snap
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      // Synchronize label position if hovering over project
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      const newState = getTargetState(e.target as Element);
      if (newState !== stateRef.current) {
        stateRef.current = newState;
        setCursorState(newState);
      }
    };

    const onMouseDown = () => {
      stateRef.current = 'click';
      setCursorState('click');
    };

    const onMouseUp = () => {
      stateRef.current = getTargetState(document.querySelector(':hover'));
      setCursorState(stateRef.current);
    };

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (labelRef.current) labelRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (labelRef.current) labelRef.current.style.opacity = '1';
    };

    // Smooth RAF loop for the lagged ring
    const loop = () => {
      rafId = requestAnimationFrame(loop);
      const lerpFactor = 0.14;
      ring.x += (ringTarget.x - ring.x) * lerpFactor;
      ring.y += (ringTarget.y - ring.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
    };
    rafId = requestAnimationFrame(loop);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseLeave);
    document.documentElement.addEventListener('mouseenter', onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseLeave);
      document.documentElement.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (!enabled) return null;

  const isHover = cursorState === 'hover' || cursorState === 'project';
  const isClick = cursorState === 'click';
  const isProject = cursorState === 'project';
  const isText = cursorState === 'text';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {/* ── Inner dot — snaps immediately ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full transition-[width,height,background-color,opacity,box-shadow] duration-150 ease-out will-change-transform"
        style={{
          width: isText ? '2px' : isHover ? '6px' : '5px',
          height: isText ? '16px' : isHover ? '6px' : '5px',
          borderRadius: isText ? '1px' : '50%',
          backgroundColor: isClick ? '#7c3aed' : isProject ? '#f0f4f8' : '#00d4ff',
          boxShadow: isProject ? '0 0 12px rgba(240,244,248,0.8)' : '0 0 10px rgba(0,212,255,0.9)',
          transform: 'translate3d(-200px, -200px, 0)',
          marginLeft: isText ? '-1px' : '-2.5px',
          marginTop: isText ? '-8px' : '-2.5px',
        }}
      />

      {/* ── Lagged outer ring ── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border will-change-transform"
        style={{
          width: isClick ? '28px' : isProject ? '52px' : isHover ? '44px' : '36px',
          height: isClick ? '28px' : isProject ? '52px' : isHover ? '44px' : '36px',
          marginLeft: isClick ? '-14px' : isProject ? '-26px' : isHover ? '-22px' : '-18px',
          marginTop: isClick ? '-14px' : isProject ? '-26px' : isHover ? '-22px' : '-18px',
          borderColor: isClick
            ? 'rgba(124, 58, 237, 0.8)'
            : isProject
            ? 'rgba(240, 244, 248, 0.5)'
            : isHover
            ? 'rgba(0, 212, 255, 0.7)'
            : 'rgba(0, 212, 255, 0.28)',
          backgroundColor: isProject
            ? 'rgba(240, 244, 248, 0.04)'
            : isHover
            ? 'rgba(0, 212, 255, 0.04)'
            : 'transparent',
          boxShadow: isHover || isProject
            ? '0 0 20px rgba(0, 212, 255, 0.15)'
            : 'none',
          transform: 'translate3d(-200px, -200px, 0)',
          transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), margin 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />

      {/* ── "VIEW" label that follows cursor on project cards ── */}
      {isProject && (
        <div
          ref={labelRef}
          className="fixed top-0 left-0 font-mono-tech text-[9px] tracking-widest uppercase text-white/80 pointer-events-none will-change-transform select-none"
          style={{
            transform: 'translate3d(-200px, -200px, 0)',
            marginLeft: '-14px',
            marginTop: '32px',
          }}
        >
          INSPECT
        </div>
      )}
    </div>
  );
};
