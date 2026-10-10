import type React from 'react';
import { ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="section-container" aria-label="Verified Certifications">
      <div className="border-t border-white/[0.1] pt-16 sm:pt-24 space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono-tech text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-[--accent-cyan]">05</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>CREDENTIALS & LICENSES</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans-clean font-bold tracking-tight text-white uppercase leading-none">
            CERTIFICATIONS.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            Verified technical qualifications validating proficiency across enterprise cloud administration, machine learning pipelines, relational databases, and data analytics.
          </p>
        </div>

        {/* Minimal Editorial List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              onMouseEnter={() => soundManager.playHover()}
              className="py-6 sm:py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors hover:bg-white/[0.015] px-2 sm:px-4 rounded-lg"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono-tech text-xs text-slate-400 font-semibold">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-sans-clean font-bold text-white group-hover:text-[--accent-cyan] transition-colors">
                    {cert.name}
                  </h3>
                  {cert.issuer ? (
                    <p className="font-mono-tech text-xs text-rose-300/80 pt-0.5">
                      ISSUING BODY: {cert.issuer}
                    </p>
                  ) : (
                    <p className="font-mono-tech text-xs text-slate-400 pt-0.5">
                      TECHNICAL DOMAIN: {cert.category}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono-tech text-xs text-emerald-400/90 pl-8 md:pl-0">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>{cert.verificationBadge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
