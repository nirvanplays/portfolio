import type React from 'react';
import { Cpu, Eye, Server, Wrench, Box } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { CURRENT_FOCUS_ITEMS } from '../data/portfolioData';
import { TechBadge } from '../components/UI/TechBadge';
import { soundManager } from '../audio/soundEffects';

export const CurrentFocusSection: React.FC = () => {
  const getFocusIcon = (id: string) => {
    switch (id) {
      case 'cf-1':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'cf-2':
        return <Eye className="w-5 h-5 text-blue-400" />;
      case 'cf-3':
        return <Server className="w-5 h-5 text-violet-400" />;
      case 'cf-4':
        return <Wrench className="w-5 h-5 text-emerald-400" />;
      default:
        return <Box className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="focus" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <SectionHeading
        systemCode="SYS.MOD.06 // CURRENT_SYSTEMS"
        title="CURRENT SYSTEMS & ACTIVE FOCUS"
        subtitle="Current high-priority domains of engineering dedication, algorithmic experimentation, and technological mastery."
        badge="COMPUTATIONAL_FOCUS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CURRENT_FOCUS_ITEMS.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => soundManager.playHover()}
            className="hud-panel rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-300 flex flex-col justify-between space-y-5 group"
          >
            <span className="corner-bracket corner-tl !w-2 !h-2" />
            <span className="corner-bracket corner-br !w-2 !h-2" />

            <div className="space-y-3">
              {/* Header with Icon & Status Tag */}
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                  {getFocusIcon(item.id)}
                </div>
                <span className="px-2 py-0.5 rounded font-mono-tech text-[10px] font-bold tracking-wider uppercase border border-cyan-500/30 bg-cyan-950/40 text-cyan-300">
                  {item.status}
                </span>
              </div>

              {/* Title & System Code */}
              <div className="space-y-1">
                <span className="font-mono-tech text-[10px] text-slate-500 block">
                  {item.code}
                </span>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-200 transition-colors uppercase">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 font-sans-clean leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Technologies & Dedication Bar */}
            <div className="space-y-3 pt-3 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="cyan" size="sm" />
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-400 pt-1">
                <span>INTEL_INDEX:</span>
                <span className="text-cyan-400 font-semibold">{item.matrixScore}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
