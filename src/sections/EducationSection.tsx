import { CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-32 border-t border-white/[0.08] space-y-16" aria-label="Education and Certifications">
      {/* Section Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="font-mono text-xs sm:text-sm text-blue-400 font-semibold uppercase tracking-widest block">
          EDUCATION & CERTIFICATIONS
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.08]">
          Academic Background & Credentials.
        </h2>
      </div>

      {/* 2-Column Grid: Minimal Timeline & Elegant Certifications List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Minimal Timeline (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-mono text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
            EDUCATION
          </h3>

          <div className="relative border-l border-white/[0.12] pl-6 space-y-10 ml-2">
            {/* 2024 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#0A0C0F]" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-blue-400 font-semibold block">
                  2024
                </span>
                <h4 className="text-lg font-bold text-white">
                  B.Tech CSE
                </h4>
                <p className="text-sm sm:text-base text-slate-300">
                  Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)
                </p>
                <p className="text-xs sm:text-sm text-slate-400 pt-1 font-mono">
                  Commencement · CGPA: <span className="text-white font-medium">8.01</span>
                </p>
              </div>
            </div>

            {/* 2028 */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-600 border-2 border-[#0A0C0F]" />
              <div className="space-y-1">
                <span className="font-mono text-xs text-slate-400 font-semibold block">
                  2028
                </span>
                <h4 className="text-lg font-bold text-white">
                  Expected Graduation
                </h4>
                <p className="text-sm sm:text-base text-slate-400">
                  B.Tech in Computer Science and Engineering
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Elegant Vertical Certifications List (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
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
                className="py-4 sm:py-5 flex items-center justify-between gap-4 group hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-slate-500 w-6">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h4>
                    {cert.category && (
                      <span className="text-xs sm:text-sm text-slate-400 block pt-0.5">
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
