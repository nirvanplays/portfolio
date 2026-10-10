import type React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 border-t border-white/[0.08] space-y-16" aria-label="About">
      {/* Eyebrow & Large Editorial Statement */}
      <div className="space-y-6 max-w-5xl">
        <span className="font-mono text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest block">
          ABOUT
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12]">
          I enjoy building software systems across the full stack and exploring practical applications of AI and computer vision.
        </h2>
      </div>

      {/* Three Elegant Columns (Typography & Spacing Driven) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-8 border-t border-white/[0.08]">
        {/* Column 1: EDUCATION */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
            EDUCATION
          </h3>
          <div className="space-y-2 text-base text-slate-300">
            <div className="font-semibold text-white text-lg">
              {PERSONAL_INFO.education.institution}
            </div>
            <div className="text-slate-300">
              B.Tech in Computer Science and Engineering
            </div>
            <div className="font-mono text-sm text-slate-400 pt-1 flex items-center justify-between">
              <span>{PERSONAL_INFO.education.period}</span>
              <span className="text-blue-400 font-semibold">CGPA: {PERSONAL_INFO.education.cgpa}</span>
            </div>
          </div>
        </div>

        {/* Column 2: FOCUS */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
            FOCUS
          </h3>
          <ul className="space-y-2.5 text-base text-slate-300">
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Full Stack Development</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>AI / Machine Learning</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Computer Vision</span>
            </li>
          </ul>
        </div>

        {/* Column 3: INTERESTS */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
            INTERESTS
          </h3>
          <ul className="space-y-2.5 text-base text-slate-300">
            {PERSONAL_INFO.interests.map((interest, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
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
