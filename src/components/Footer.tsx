import type React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 px-6 sm:px-8 max-w-6xl mx-auto w-full text-sm text-slate-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold text-slate-900 text-base">
            Nirvan Reddy
          </div>
          <div className="text-xs text-slate-500">
            Computer Science Engineering · Full Stack • AI/ML
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-slate-400">
          © 2026 Koppela Nirvan Reddy. All rights reserved.
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          aria-label="Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
