import type React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-white/[0.08] select-none text-sm text-slate-400">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-bold text-white text-base tracking-wide">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-slate-400">
            Computer Science Engineering · Full Stack · AI/ML
          </div>
        </div>

        <div className="flex items-center gap-8">
          <span>© 2026</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs font-mono font-semibold uppercase tracking-wider"
            aria-label="Back to Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
