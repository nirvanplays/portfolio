import type React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-container" aria-label="About">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-16">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">01</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>SYSTEM PROFILE // ABOUT</span>
        </div>

        {/* Large Editorial Headline */}
        <div className="space-y-6 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans-clean font-bold tracking-tight text-white uppercase leading-[0.95]">
            BUILDING WITH CURIOSITY.
            <span className="block text-slate-400">ENGINEERING WITH PURPOSE.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            I am a Computer Science Engineering student focused on building robust full-stack platforms and applying computer vision and deep learning to tangible real-world challenges.
          </p>
        </div>

        {/* 3-Column Editorial Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/[0.08]">
          {/* Column 1: Education */}
          <div className="space-y-4">
            <span className="font-mono-tech text-xs text-[--accent-cyan] uppercase tracking-widest block">
              // EDUCATION
            </span>
            <div className="space-y-2">
              <h3 className="font-bold text-white text-lg">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-sm text-slate-300 leading-snug">
                {PERSONAL_INFO.education.institution}
              </p>
              <div className="flex items-center gap-3 pt-2 font-mono-tech text-xs text-slate-400">
                <span>{PERSONAL_INFO.education.period}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">
                  CGPA: {PERSONAL_INFO.education.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Focus */}
          <div className="space-y-4">
            <span className="font-mono-tech text-xs text-[--accent-cyan] uppercase tracking-widest block">
              // CORE FOCUS
            </span>
            <ul className="space-y-2.5 font-sans-clean text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[--accent-cyan]" />
                <span>AI / ML & Kinematics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[--accent-cyan]" />
                <span>Computer Vision Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[--accent-cyan]" />
                <span>Full Stack Web Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[--accent-cyan]" />
                <span>Interactive Web Experiences</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Interests */}
          <div className="space-y-4">
            <span className="font-mono-tech text-xs text-[--accent-cyan] uppercase tracking-widest block">
              // PERSONAL INTERESTS
            </span>
            <ul className="space-y-2.5 font-sans-clean text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>Coding & Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>Building Personal Projects</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>AI & Deep Learning Experimentation</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>Full Stack Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                <span>Basketball</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
