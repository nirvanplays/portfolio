import { useEffect, useState } from 'react';
import type React from 'react';
import gsap from 'gsap';
import { soundManager } from '../audio/soundEffects';

interface CinematicLoaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  'INITIALIZING SYSTEM ENVIRONMENT // NODE_V24 // TS_X',
  'ALLOCATING WEBGL 2.0 CONTEXT & THREE.JS SHADER KERNEL',
  'COMPILING GEOMETRIC NEURAL NETWORK & ORBITAL DATA GIMBALS',
  'LOADING VERIFIED SYSTEM TOPOLOGIES & PROJECT ARCHITECTURES',
  'CONNECTING KINEMATICS, TELEMETRY & SPATIAL AUDIO STREAMS',
  'SECURITY PROTOCOLS VERIFIED // 0 ERRORS DETECTED',
  'SYSTEM READY. ENTERING WORKSTATION // NIRVAN REDDY',
];

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const finishLoading = () => {
    soundManager.playActivate();
    gsap.to('.loader-container', {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(12px)',
      duration: 0.7,
      ease: 'power3.inOut',
      onComplete: () => {
        onComplete();
      },
    });
  };

  useEffect(() => {
    // Increment progress dynamically
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 250);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        const next = Math.min(100, prev + increment);

        // Update log index based on progress
        const targetLog = Math.floor((next / 100) * (BOOT_LOGS.length - 1));
        setLogIndex(targetLog);

        return next;
      });
    }, 120);

    // Keyboard listener: Escape key skips loading
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        finishLoading();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="loader-container fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03050a] text-cyan-400 font-mono-tech select-none overflow-hidden px-4"
      aria-label="System Boot Sequence"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />

      {/* Center Holographic HUD Box */}
      <div className="relative w-full max-w-lg hud-panel p-6 sm:p-8 rounded-lg border border-cyan-500/40 glow-box-cyan">
        <span className="corner-bracket corner-tl" />
        <span className="corner-bracket corner-tr" />
        <span className="corner-bracket corner-bl" />
        <span className="corner-bracket corner-br" />

        {/* Header telemetry */}
        <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-5 text-[11px] tracking-wider text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-cyan-300 font-bold uppercase">SYSTEM BOOT SEQUENCE</span>
          </div>
          <span className="text-cyan-500 font-bold">{progress}% READY</span>
        </div>

        {/* Animated Terminal Logs */}
        <div
          className="space-y-1.5 min-h-[96px] text-xs font-mono-tech text-slate-300 mb-6"
          aria-live="polite"
        >
          {BOOT_LOGS.slice(0, logIndex + 1).map((log, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold select-none">&gt;&gt;</span>
              <span className={idx === logIndex ? 'text-cyan-300 font-bold' : 'text-slate-400'}>
                {log}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar Container */}
        <div
          className="space-y-2 mb-6"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="System Boot Progress"
        >
          <div className="flex justify-between text-[11px] text-slate-400 font-mono-tech">
            <span>CORE_INITIALIZATION_VECTOR</span>
            <span className="text-cyan-300">{progress} / 100</span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 rounded overflow-hidden border border-cyan-500/30">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip Action button */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden sm:inline">
            PRESS [ESC] TO BYPASS BOOT
          </span>
          <button
            onClick={finishLoading}
            data-cursor="hover"
            className="text-xs uppercase tracking-wider text-cyan-400 hover:text-white px-3 py-1 border border-cyan-500/30 hover:border-cyan-400 rounded bg-cyan-950/40 transition-colors ml-auto cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            SKIP SEQUENCE &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
