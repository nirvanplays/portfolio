import type React from 'react';
import { User, GraduationCap, Cpu, Compass, Terminal, ShieldCheck, MapPin } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SystemProfileSection: React.FC = () => {
  return (
    <section id="system" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        systemCode="SYS.MOD.01 // SYSTEM_PROFILE"
        title="SYSTEM PROFILE & IDENTITY"
        subtitle="Deconstructing academic foundations, engineering philosophy, and operational technical telemetry."
        badge="TELEMETRY_ONLINE"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Panel 1: Primary Identity & Academic Standing (7 cols) */}
        <div className="lg:col-span-7 hud-panel rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <span className="corner-bracket corner-tl !w-2.5 !h-2.5" />
          <span className="corner-bracket corner-tr !w-2.5 !h-2.5" />
          <span className="corner-bracket corner-bl !w-2.5 !h-2.5" />
          <span className="corner-bracket corner-br !w-2.5 !h-2.5" />

          {/* Identity Header */}
          <div className="flex items-start justify-between border-b border-cyan-500/20 pb-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono-tech text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                IDENTITY TELEMETRY
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-mono-tech text-slate-300">
                {PERSONAL_INFO.title}
              </p>
            </div>
            <div className="text-right font-mono-tech text-xs space-y-1">
              <span className="inline-block px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                CGPA: {PERSONAL_INFO.education.cgpa}
              </span>
              <div className="text-[10px] text-slate-400 flex items-center justify-end gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>HYD, INDIA</span>
              </div>
            </div>
          </div>

          {/* Education Breakdown */}
          <div className="space-y-3 p-4 rounded-lg bg-slate-900/50 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono-tech uppercase font-bold text-cyan-300">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>ACADEMIC INSTITUTION & DEGREE</span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="text-sm font-bold text-white">
                {PERSONAL_INFO.education.institution}
              </div>
              <div className="text-cyan-400 font-mono-tech">
                {PERSONAL_INFO.education.degree}
              </div>
              <div className="text-slate-400 font-mono-tech text-[11px] flex items-center justify-between pt-1">
                <span>Duration: {PERSONAL_INFO.education.period}</span>
                <span className="text-emerald-400">Undergraduate Engineering Track</span>
              </div>
            </div>
          </div>

          {/* Technical Mindset */}
          <div className="space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>TECHNICAL MINDSET & ENGINEERING PRINCIPLES</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans-clean bg-cyan-950/15 p-4 rounded-lg border border-cyan-500/20">
              {PERSONAL_INFO.systemProfile.mindset}
            </p>
          </div>
        </div>

        {/* Panel 2: Telemetry Specs & Development Interests (5 cols) */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          {/* System Specs Box */}
          <div className="hud-panel rounded-xl p-6 space-y-4">
            <span className="corner-bracket corner-tl !w-2.5 !h-2.5" />
            <span className="corner-bracket corner-br !w-2.5 !h-2.5" />

            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                ENVIRONMENT TELEMETRY
              </span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <div className="font-mono-tech text-xs space-y-2.5">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                <span className="text-slate-400">OPERATING SYS:</span>
                <span className="text-cyan-300 font-semibold">{PERSONAL_INFO.systemProfile.os}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                <span className="text-slate-400">RUNTIME ENGINE:</span>
                <span className="text-white font-semibold">Node.js 24 + TS 6</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                <span className="text-slate-400">GRAPHICS PIPELINE:</span>
                <span className="text-cyan-300 font-semibold">WebGL 2.0 / Three.js</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/80">
                <span className="text-slate-400">DATA VERIFICATION:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED 100%
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">COORDINATES:</span>
                <span className="text-slate-300">{PERSONAL_INFO.systemProfile.coordinates}</span>
              </div>
            </div>
          </div>

          {/* Development Interests */}
          <div className="hud-panel rounded-xl p-6 space-y-4 flex-1">
            <span className="corner-bracket corner-tl !w-2.5 !h-2.5" />
            <span className="corner-bracket corner-br !w-2.5 !h-2.5" />

            <div className="flex items-center gap-2 border-b border-cyan-500/20 pb-3">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
                CORE TECHNICAL VECTORS
              </span>
            </div>

            <div className="space-y-2">
              {PERSONAL_INFO.systemProfile.interests.map((interest, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/30 transition-colors"
                >
                  <span className="text-[10px] font-mono-tech text-cyan-400 font-bold">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-sans-clean font-medium text-slate-200">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
