import type React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../audio/soundEffects';

export const FuturisticFooter: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#03050a] py-12 px-4 sm:px-6 font-mono-tech z-10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan]" />
            <span className="font-display font-bold text-white text-base tracking-wider">
              KOPPELA NIRVAN REDDY
            </span>
          </div>
          <p className="text-xs text-[--text-muted]">
            B.Tech CSE · Full Stack Developer · AI/ML Enthusiast
          </p>
        </div>

        {/* Center: System coordinates */}
        <div className="text-center text-[10px] text-[--text-muted] space-y-0.5">
          <div>HYD // 17.5376° N, 78.3842° E · GRIET 2024–2028</div>
          <div className="text-[--accent-cyan]/70">ENGINEERED WORKSTATION // REACT + THREE.JS + GSAP + LENIS</div>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[--text-muted]">
            &copy; 2026 NIRVAN REDDY
          </span>
          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor="hover"
            className="p-2.5 rounded-lg border border-[--accent-cyan]/30 bg-[--accent-cyan]/8 text-[--accent-cyan] hover:text-white hover:border-[--accent-cyan]/60 transition-colors cursor-pointer"
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
