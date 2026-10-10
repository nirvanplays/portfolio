import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../audio/soundEffects';

export const FuturisticFooter: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#04060a] py-12 px-4 sm:px-6 font-mono-tech z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="font-display font-bold text-white text-base tracking-wider">
              NIRVAN REDDY
            </span>
          </div>
          <p className="text-xs text-slate-400">
            CSE • Full Stack • AI/ML
          </p>
        </div>

        {/* Center: System coordinates */}
        <div className="text-center text-[11px] text-slate-400 space-y-0.5">
          <div>COORDINATES: 17.3850° N, 78.4867° E [HYD, IN]</div>
          <div className="text-cyan-500/70">ARCH: REACT // THREE.JS // GSAP // LENIS</div>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-400">
            &copy; 2026
          </span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            className="p-2.5 rounded border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
