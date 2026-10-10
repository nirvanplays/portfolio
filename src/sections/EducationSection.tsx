import { CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 border-t border-white/[0.08] space-y-14" aria-label="Education and Certifications">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
          EDUCATION & CREDENTIALS
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Academic Timeline & Certifications.
        </h2>
      </div>

      {/* 2-Column Grid: Minimal Timeline & Premium Certifications List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Minimal Timeline (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
            EDUCATION
          </h3>

          <div className="relative border-l border-white/[0.12] pl-6 space-y-8 ml-2">
            {/* 2024 Node */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0B0D10]" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-blue-400 font-semibold block">
                  2024
                </span>
                <h4 className="text-base font-bold text-white">
                  B.Tech in Computer Science and Engineering
                </h4>
                <p className="text-sm text-slate-300">
                  Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)
                </p>
                <p className="text-xs text-slate-400 pt-1">
                  Commenced degree program · Current CGPA: <span className="text-slate-200 font-medium">8.01</span>
                </p>
              </div>
            </div>

            {/* 2028 Node */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-600 border-2 border-[#0B0D10]" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-slate-400 font-semibold block">
                  2028
                </span>
                <h4 className="text-base font-bold text-white">
                  Expected Graduation
                </h4>
                <p className="text-sm text-slate-400">
                  B.Tech CSE degree completion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Certifications List (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              CERTIFICATIONS
            </h3>
            <span className="text-xs font-mono text-slate-500">
              5 VERIFIED CREDENTIALS
            </span>
          </div>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={cert.id}
                className="py-4 flex items-center justify-between gap-4 group hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-500 w-5">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h4>
                    {cert.category && (
                      <span className="text-xs text-slate-400 block pt-0.5">
                        {cert.category}
                      </span>
                    )}
                  </div>
                </div>

                <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
