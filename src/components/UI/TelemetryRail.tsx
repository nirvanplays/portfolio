import { useState, useEffect } from 'react';
import type React from 'react';

const SECTIONS_TELEMETRY = [
  { id: 'hero', code: '01', tag: 'HERO_CORE' },
  { id: 'system', code: '02', tag: 'SYS_IDENTITY' },
  { id: 'skills', code: '03', tag: 'CONSTELLATION' },
  { id: 'projects', code: '04', tag: 'MODULES' },
  { id: 'timeline', code: '05', tag: 'CHRONO_TRACK' },
  { id: 'certifications', code: '06', tag: 'CREDENTIALS' },
  { id: 'focus', code: '07', tag: 'SYS_FOCUS' },
  { id: 'contact', code: '08', tag: 'TERMINAL' },
];

export const TelemetryRail: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeCode, setActiveCode] = useState('01');
  const [activeTag, setActiveTag] = useState('HERO_CORE');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setScrollPercent(pct);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track active section via IntersectionObserver
    const observers: IntersectionObserver[] = [];
    SECTIONS_TELEMETRY.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setActiveCode(sec.code);
              setActiveTag(sec.tag);
            }
          });
        },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <aside
      className="fixed left-6 bottom-10 z-30 hidden xl:flex flex-col items-start gap-3 pointer-events-none select-none font-mono-tech"
      aria-label="Telemetry Navigation Rail"
    >
      {/* Active Section Telemetry Tag */}
      <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#03050a]/85 border border-white/[0.08] backdrop-blur-md text-[10px] text-[--text-muted]">
        <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] animate-pulse" />
        <span className="text-[--accent-cyan] font-bold">SEC // {activeCode}</span>
        <span className="text-white/60">[{activeTag}]</span>
      </div>

      {/* Vertical Progress Conductor Rail */}
      <div className="flex items-center gap-2.5 pl-1">
        <div className="relative w-[2px] h-24 bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className="w-full bg-gradient-to-b from-[--accent-cyan] to-[--accent-violet] rounded-full transition-all duration-150 ease-out"
            style={{ height: `${scrollPercent}%` }}
          />
        </div>

        <div className="flex flex-col text-[9px] text-[--text-muted] leading-tight">
          <span className="text-[--accent-cyan] font-bold">{scrollPercent}%</span>
          <span className="text-[8px] tracking-wider text-slate-500">DEPTH</span>
        </div>
      </div>

      {/* Geospatial & Hardware Specs */}
      <div className="text-[8px] text-slate-500 leading-tight space-y-0.5 pl-1 opacity-70">
        <div>HYD // 17.5376° N, 78.3842° E</div>
        <div>RENDER // WEBGL 2.0 ACES</div>
      </div>
    </aside>
  );
};
