import type React from 'react';
import { HOW_I_BUILD_PRINCIPLES } from '../data/portfolioData';

export const HowIBuildSection: React.FC = () => {
  return (
    <section className="space-y-8 pt-8 border-t border-white/[0.08]" aria-label="Engineering Principles">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="font-mono text-xs text-blue-400 uppercase tracking-widest">
          // ENGINEERING APPROACH
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          HOW I BUILD.
        </h2>
        <p className="text-sm text-slate-400 font-light max-w-xl">
          Personal working principles framing how I approach software design, research, and technical implementation.
        </p>
      </div>

      {/* 3 Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {HOW_I_BUILD_PRINCIPLES.map((principle) => (
          <div
            key={principle.number}
            className="editorial-card rounded-xl p-6 space-y-3"
          >
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-blue-400 font-bold">{principle.number}</span>
              <span className="text-slate-400 uppercase tracking-wider">{principle.title}</span>
            </div>

            <h3 className="text-base font-bold text-white tracking-tight">
              {principle.summary}
            </h3>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              {principle.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
