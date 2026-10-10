import type React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="space-y-8 pt-8 border-t border-white/[0.08]" aria-label="About">
      {/* Section Index Marker */}
      <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
        <span className="text-blue-400">01</span>
        <span className="w-8 h-px bg-white/[0.2]" />
        <span>ABOUT</span>
      </div>

      {/* Large Statement */}
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
          I like building things that sit between software engineering and applied AI.
        </h2>

        {/* Short Factual Paragraph */}
        <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
          I'm an undergraduate Computer Science Engineering student focused on building practical, full-stack web platforms and applied machine learning models. I enjoy working across the entire lifecycle—from frontend reactive interfaces and backend REST services to video kinematic tracking with computer vision.
        </p>
      </div>

      {/* 3-Column Editorial Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Column 1: Education */}
        <div className="editorial-card rounded-xl p-5 space-y-3">
          <div className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
            // EDUCATION
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">
              {PERSONAL_INFO.education.degree}
            </h3>
            <p className="text-xs text-slate-400 leading-snug">
              {PERSONAL_INFO.education.institution}
            </p>
            <div className="pt-2 font-mono text-xs text-slate-300 flex items-center justify-between">
              <span>{PERSONAL_INFO.education.period}</span>
              <span className="text-emerald-400 font-semibold">
                CGPA {PERSONAL_INFO.education.cgpa}
              </span>
            </div>
          </div>
        </div>

        {/* Column 2: Focus */}
        <div className="editorial-card rounded-xl p-5 space-y-3">
          <div className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
            // FOCUS
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {PERSONAL_INFO.focus.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Interests */}
        <div className="editorial-card rounded-xl p-5 space-y-3">
          <div className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
            // INTERESTS
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {PERSONAL_INFO.interests.map((interest, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
