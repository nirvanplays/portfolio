import type React from 'react';
import { Award, GraduationCap, Code2, Flag } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { TIMELINE_ITEMS } from '../data/portfolioData';
import { soundManager } from '../audio/soundEffects';

export const BuildTimelineSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'hackathon':
        return <Flag className="w-4 h-4 text-amber-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-violet-400" />;
      default:
        return <Code2 className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="timeline" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        systemCode="SYS.MOD.04 // BUILD_TIMELINE"
        title="EXPERIENCE & BUILD TIMELINE"
        subtitle="Chronological telemetry documenting academic rigor at GRIET, hackathon presentation milestones, algorithmic engineering builds, and certifications."
        badge="CHRONO_CIRCUIT"
      />

      {/* Vertical Circuit Timeline */}
      <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-32 md:ml-40 space-y-12 pl-6 sm:pl-10">
        {/* Animated circuit pulse down the timeline line */}
        <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500 opacity-60" />

        {TIMELINE_ITEMS.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => soundManager.playHover()}
            className="relative group transition-all duration-300"
          >
            {/* Timeline Glowing Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#05070b] border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_15px_#00f0ff] transition-all">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Floating Date Badge on Left (Desktop) */}
            <div className="hidden sm:block absolute -left-44 top-1 w-32 text-right font-mono-tech text-xs font-bold text-cyan-300 tracking-wider">
              {item.period}
            </div>

            {/* Mobile Date Badge */}
            <div className="sm:hidden font-mono-tech text-xs text-cyan-300 font-bold mb-1">
              {item.period}
            </div>

            {/* Content Card */}
            <div className="hud-panel rounded-xl p-6 border border-cyan-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.12)] transition-all space-y-3">
              <span className="corner-bracket corner-tl !w-2 !h-2" />
              <span className="corner-bracket corner-br !w-2 !h-2" />

              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(item.category)}
                  <span className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-cyan-400">
                    {item.tag}
                  </span>
                </div>
                <span className="text-xs font-mono-tech text-slate-400">
                  {item.organization}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-display font-bold text-white uppercase group-hover:text-cyan-200 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-sans-clean leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1.5 pt-2">
                {item.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
