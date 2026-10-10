'use client';

import type React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-purple-500/20 select-none text-sm text-slate-400 relative z-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="font-extrabold text-white text-base tracking-wide flex items-center gap-2">
            <span>{PERSONAL_INFO.fullName}</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="text-slate-400 text-xs sm:text-sm font-mono">
            Computer Science Engineering (GRIET) • Full Stack & Applied AI/ML
          </div>
        </div>

        <div className="flex items-center gap-8 text-xs font-mono">
          <span>© 2026 NIRVAN REDDY</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors cursor-pointer font-bold uppercase tracking-wider group"
            aria-label="Back to Top"
          >
            <span>ORBIT TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export const SpaceFooter = Footer;
export default Footer;
