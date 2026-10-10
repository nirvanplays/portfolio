import type React from 'react';
import { PERSONAL_INFO, HOW_I_BUILD_PRINCIPLES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="space-y-12 pt-8 border-t border-white/[0.08]" aria-label="About and Approach">
      {/* Section Index Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
        <span className="text-blue-400">04</span>
        <span className="w-8 h-px bg-white/[0.2]" />
        <span>ABOUT & APPROACH</span>
      </div>

      {/* Large Statement */}
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
          I like building things that sit between software engineering and applied AI.
        </h2>

        {/* Short Factual Paragraph */}
        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
          I'm an undergraduate Computer Science Engineering student focused on building practical, full-stack web platforms and applied machine learning models. I enjoy working across the entire lifecycle—from frontend reactive interfaces and backend REST services to video kinematic tracking with computer vision.
        </p>
      </div>

      {/* 2-Column Focus & Technical Interests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Column 1: Core Focus Areas */}
        <div className="editorial-card rounded-xl p-5 space-y-3">
          <div className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
            // CORE FOCUS AREAS
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {PERSONAL_INFO.focus.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Applied Interests */}
        <div className="editorial-card rounded-xl p-5 space-y-3">
          <div className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
            // APPLIED INTERESTS
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            {PERSONAL_INFO.interests.map((interest, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Engineering Working Principles */}
      <div className="space-y-6 pt-2">
        <div className="space-y-1">
          <div className="font-mono text-xs text-blue-400 uppercase tracking-widest">
            // HOW I BUILD
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Engineering Principles.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_I_BUILD_PRINCIPLES.map((principle) => (
            <div
              key={principle.number}
              className="editorial-card rounded-xl p-5 space-y-2.5"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-blue-400 font-bold">{principle.number}</span>
                <span className="text-slate-400 uppercase tracking-wider">{principle.title}</span>
              </div>

              <h4 className="text-sm font-bold text-white tracking-tight">
                {principle.summary}
              </h4>

              <p className="text-xs text-slate-400 font-light leading-relaxed">
                {principle.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
