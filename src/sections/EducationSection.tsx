'use client';

import type React from 'react';
import { Sparkles, CheckCircle2, GraduationCap, Award } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-32 border-t border-purple-500/20 space-y-16 select-none relative" aria-label="Education and Credentials">
      {/* Background Cosmic Glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-cyan-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ACADEMIC TRAJECTORY & CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
          Education & Verified <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Certifications.
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          Academic foundation at Gokaraju Rangaraju Institute of Engineering and Technology paired with verified technical credentials.
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Minimal Timeline (5 cols) */}
        <div className="lg:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#07031c]/65 border border-purple-500/25 backdrop-blur-xl space-y-6">
          <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase border-b border-purple-500/20 pb-3">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>ACADEMIC DEGREE</span>
          </div>

          <div className="relative border-l-2 border-purple-500/40 pl-6 space-y-8 ml-2">
            {/* 2024 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#030014] shadow-[0_0_10px_#22d3ee]" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-cyan-300 font-bold block">
                  2024 – PRESENT
                </span>
                <h4 className="text-lg font-bold text-white">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-sm text-slate-300">
                  Gokaraju Rangaraju Institute of Engineering and Technology (GRIET), Hyderabad
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-purple-900/40 border border-purple-500/40 text-xs font-mono font-bold text-cyan-300">
                    CGPA: 8.01
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Undergraduate Cohort
                  </span>
                </div>
              </div>
            </div>

            {/* 2028 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-[#030014] shadow-[0_0_10px_#a855f7]" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-purple-400 font-bold block">
                  2028 (EXPECTED)
                </span>
                <h4 className="text-lg font-bold text-white">
                  Graduation & Transition
                </h4>
                <p className="text-sm text-slate-400">
                  Transitioning to full-time Software Engineering & AI/ML roles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: 5 Verified Certifications (7 cols) */}
        <div className="lg:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#07031c]/65 border border-purple-500/25 backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
            <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <span className="text-[11px] font-mono text-purple-400 font-semibold">
              5 VERIFIED
            </span>
          </div>

          <div className="divide-y divide-purple-500/20">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={cert.id}
                className="py-4 flex items-center justify-between gap-4 group hover:bg-purple-900/10 px-3 -mx-3 rounded-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-cyan-400 font-bold w-6">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.name}
                    </h4>
                    <span className="text-xs text-slate-400 font-mono">
                      Verified Technical Credential
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SpaceEducationSection = EducationSection;
export default EducationSection;
