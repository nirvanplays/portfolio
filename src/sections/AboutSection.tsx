import type React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-white/[0.08] space-y-12" aria-label="About">
      {/* Small Section Label */}
      <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
        ABOUT
      </div>

      {/* Large Statement & Narrative */}
      <div className="space-y-6 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
          I enjoy building software systems across the full stack and exploring practical applications of AI and computer vision.
        </h2>
        <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
          I'm an undergraduate Computer Science Engineering student focused on building practical, full-stack platforms and applied machine learning pipelines. Whether developing decoupled client-server web apps with React and Express, or computing joint articulation angles with OpenCV and MediaPipe, I prioritize clean architectural boundaries and dependable performance.
        </p>
      </div>

      {/* Information Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/[0.06]">
        {/* Column 1: Education */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
            EDUCATION
          </div>
          <div className="space-y-1 text-sm">
            <div className="font-semibold text-white">
              {PERSONAL_INFO.education.institution}
            </div>
            <div className="text-slate-300">
              {PERSONAL_INFO.education.degree} in Computer Science and Engineering
            </div>
            <div className="text-slate-400 font-mono text-xs pt-1 flex items-center justify-between">
              <span>{PERSONAL_INFO.education.period}</span>
              <span className="text-blue-400 font-semibold">CGPA: {PERSONAL_INFO.education.cgpa}</span>
            </div>
          </div>
        </div>

        {/* Column 2: Focus */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
            FOCUS
          </div>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Full Stack Development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>AI / Machine Learning</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Computer Vision</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Location */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
            LOCATION
          </div>
          <div className="space-y-1 text-sm">
            <div className="font-semibold text-white">
              Hyderabad, Telangana, India
            </div>
            <div className="text-slate-400 text-xs leading-relaxed pt-1">
              Open to on-site in Hyderabad and remote software engineering internships.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
