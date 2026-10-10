import type React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundManager } from '../audio/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] py-12 px-6 sm:px-8 max-w-7xl mx-auto w-full font-mono-tech text-xs text-slate-400 select-none">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan]" />
          <span className="font-sans-clean font-bold text-white text-sm">
            KOPPELA NIRVAN REDDY
          </span>
          <span className="text-slate-400">•</span>
          <span>HYDERABAD, INDIA</span>
        </div>

        {/* Center: System notice */}
        <div className="text-[11px] text-slate-400">
          DESIGNED & ENGINEERED // 2026
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          aria-label="Back to Top"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
