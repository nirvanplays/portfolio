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
          <span>VERIFIED CREDENTIALS</span>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl font-sans-clean font-bold tracking-tight text-white uppercase leading-none">
            CERTIFICATIONS.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Verified technical qualifications across enterprise cloud systems, machine learning pipelines, relational databases, and business intelligence.
          </p>
        </div>

        {/* Minimal Editorial List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              onMouseEnter={() => soundManager.playHover()}
              className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group transition-colors hover:bg-white/[0.015] px-2 sm:px-4 rounded-md"
            >
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="font-mono-tech text-xs text-slate-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-sans-clean font-bold text-white group-hover:text-[--accent-cyan] transition-colors uppercase">
                    {cert.name}
                  </h3>
                  {cert.issuer ? (
                    <p className="font-mono-tech text-xs text-rose-300/80 pt-0.5">
                      ISSUED BY: {cert.issuer}
                    </p>
                  ) : (
                    <p className="font-mono-tech text-xs text-slate-400 pt-0.5">
                      DOMAIN: {cert.category}
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
