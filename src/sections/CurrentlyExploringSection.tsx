import type React from 'react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';
import { Compass } from 'lucide-react';

export const CurrentlyExploringSection: React.FC = () => {
  return (
    <section className="section-container border-t border-slate-100" aria-label="Currently Exploring">
      <div className="space-y-8">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <Compass className="w-4 h-4" />
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Currently Exploring
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Concise 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CURRENTLY_EXPLORING.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all space-y-2"
            >
              <h3 className="font-semibold text-slate-900 text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
