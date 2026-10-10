import type React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_TIMELINE, CERTIFICATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="space-y-12 pt-8 border-t border-white/[0.08]" aria-label="Education and Certifications">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400 uppercase tracking-widest">
          <span className="text-blue-400">04</span>
          <span className="w-8 h-px bg-white/[0.2]" />
          <span>EDUCATION & CREDENTIALS</span>
        </div>
        <p className="text-sm text-slate-400 font-light">
          Academic milestones and validated professional certifications.
        </p>
      </div>

      {/* 2-Column Grid: Timeline on Left, Certifications on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Education Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-mono text-xs text-blue-400 uppercase tracking-wider font-semibold">
            // ACADEMIC TIMELINE
          </h3>

          <div className="relative border-l border-white/[0.12] ml-3 space-y-8 pl-6">
            {EDUCATION_TIMELINE.map((item) => (
              <div key={item.year} className="relative group">
                {/* Node on Axis */}
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#0c0e12] border border-white/[0.3] group-hover:border-blue-400 group-hover:bg-blue-500 transition-colors" />

                <div className="editorial-card rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white">
                      {item.year}
                    </span>
                    {item.tag && (
                      <span className="font-mono text-[10px] text-slate-400 uppercase">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs font-mono text-slate-400">
                    {item.organization}
                  </p>

                  <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-mono text-xs text-blue-400 uppercase tracking-wider font-semibold">
            // CERTIFICATIONS
          </h3>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="py-4 space-y-1 hover:bg-white/[0.02] px-2 rounded-lg transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <h4 className="text-xs font-semibold text-white">
                      {cert.name}
                    </h4>
                  </div>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                </div>
                <div className="font-mono text-[10px] text-slate-400 pl-6">
                  {cert.issuer ? `Issuer: ${cert.issuer}` : `Domain: ${cert.category}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
