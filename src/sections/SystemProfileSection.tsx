import type React from 'react';
import { User, GraduationCap, Cpu, Terminal, ShieldCheck, MapPin, Compass } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SystemProfileSection: React.FC = () => {
  return (
    <section id="system" className="section-container section-reveal" aria-label="System Profile">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          systemCode="SYS.MOD.01 // IDENTITY"
          title="System Profile"
          subtitle="Academic standing, engineering orientation, and operational telemetry."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ── Left: Identity Panel ── */}
          <div className="lg:col-span-7 hud-panel rounded-2xl p-8 space-y-7">
            <span className="corner-bracket corner-tl" />
            <span className="corner-bracket corner-tr" />
            <span className="corner-bracket corner-bl" />
            <span className="corner-bracket corner-br" />

            {/* Identity header */}
            <div className="border-b border-white/[0.06] pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-mono-tech text-[10px] text-[--accent-cyan]/70 tracking-widest uppercase">
                  <User className="w-3 h-3" />
                  <span>Identity Vector</span>
                </div>
                <h3 className="font-display font-black text-white uppercase leading-none" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
                  {PERSONAL_INFO.name}
                </h3>
                <p className="font-mono-tech text-[11px] text-[--text-secondary]">
                  {PERSONAL_INFO.title}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-lg font-mono-tech text-xs font-bold bg-emerald-400/8 border border-emerald-400/20 text-emerald-300">
                  CGPA {PERSONAL_INFO.education.cgpa}
                </span>
                <div className="flex items-center gap-1 text-[10px] font-mono-tech text-[--text-muted]">
                  <MapPin className="w-3 h-3" />
                  <span>Hyderabad, India</span>
                </div>
              </div>
            </div>

            {/* Education block */}
            <div className="space-y-3 p-5 rounded-xl bg-white/[0.025] border border-white/[0.05]">
              <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[--accent-cyan]/80 uppercase tracking-widest">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Institution</span>
              </div>
              <div>
                <p className="font-sans-clean font-semibold text-white text-base leading-snug">
                  {PERSONAL_INFO.education.institution}
                </p>
                <p className="font-mono-tech text-[11px] text-[--accent-cyan]/80 mt-1">
                  {PERSONAL_INFO.education.degree}
                </p>
                <div className="flex items-center justify-between mt-2 text-[10px] font-mono-tech text-[--text-muted]">
                  <span>Duration: {PERSONAL_INFO.education.period}</span>
                  <span className="text-emerald-400/80">Undergraduate Track</span>
                </div>
              </div>
            </div>

            {/* Engineering mindset */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[--text-muted] uppercase tracking-widest">
                <Cpu className="w-3 h-3 text-[--accent-cyan]/60" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="font-sans-clean text-sm text-[--text-secondary] leading-[1.7] bg-[--accent-cyan]/3 border border-[--accent-cyan]/10 rounded-xl p-4">
                {PERSONAL_INFO.systemProfile.mindset}
              </p>
            </div>
          </div>

          {/* ── Right: Telemetry ── */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* System Telemetry */}
            <div className="hud-panel rounded-2xl p-6 space-y-4 flex-shrink-0">
              <span className="corner-bracket corner-tl" />
              <span className="corner-bracket corner-br" />

              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2 text-[10px] font-mono-tech text-[--accent-cyan]/70 uppercase tracking-widest">
                  <Terminal className="w-3 h-3" />
                  <span>Environment</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] animate-pulse" />
              </div>

              <div className="space-y-2 font-mono-tech text-[11px]">
                {[
                  { label: 'RUNTIME:', value: 'Node.js 24 + TypeScript 6' },
                  { label: 'RENDERER:', value: 'WebGL 2.0 / Three.js r186' },
                  { label: 'FRAMEWORK:', value: 'React 19 + Vite 8' },
                  { label: 'ANIMATION:', value: 'GSAP + Lenis Smooth Scroll' },
                  { label: 'VERIFIED:', value: '100% Factual — 0 Invented Claims', highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div key={label} className="flex items-center justify-between py-1.5 border-b border-white/[0.04]">
                    <span className="text-[--text-muted]">{label}</span>
                    <span className={highlight ? 'text-emerald-400 flex items-center gap-1' : 'text-white/80'}>
                      {highlight && <ShieldCheck className="w-3 h-3" />}
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Focus Areas */}
            <div className="hud-panel rounded-2xl p-6 flex-1">
              <span className="corner-bracket corner-tl" />
              <span className="corner-bracket corner-br" />

              <div className="flex items-center gap-2 border-b border-white/[0.06] pb-3 mb-4 text-[10px] font-mono-tech text-[--accent-cyan]/70 uppercase tracking-widest">
                <Compass className="w-3 h-3" />
                <span>Core Interest Vectors</span>
              </div>

              <div className="space-y-2">
                {PERSONAL_INFO.systemProfile.interests.map((interest, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg border border-white/[0.04] bg-white/[0.02] hover:border-[--accent-cyan]/20 hover:bg-[--accent-cyan]/4 transition-all duration-200"
                    data-cursor="hover"
                  >
                    <span className="font-mono-tech text-[10px] text-[--accent-cyan]/60 w-5 flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans-clean text-sm text-[--text-secondary]">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
