import type React from 'react';
import { Cpu, Eye, Server, Wrench, Box } from 'lucide-react';
import { SectionHeading } from '../components/UI/SectionHeading';
import { CURRENT_FOCUS_ITEMS } from '../data/portfolioData';
import { TechBadge } from '../components/UI/TechBadge';
import { soundManager } from '../audio/soundEffects';

export const CurrentFocusSection: React.FC = () => {
  const getFocusIcon = (id: string) => {
    switch (id) {
      case 'cf-1': return <Cpu className="w-5 h-5 text-[--accent-cyan]" />;
      case 'cf-2': return <Eye className="w-5 h-5 text-blue-400" />;
      case 'cf-3': return <Server className="w-5 h-5 text-[--accent-violet]" />;
      case 'cf-4': return <Wrench className="w-5 h-5 text-emerald-400" />;
      default:     return <Box className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="focus" className="section-container section-reveal" aria-label="Current Focus">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          systemCode="SYS.MOD.06 // ACTIVE_FOCUS"
          title="Current Systems"
          subtitle="Active engineering tracks, algorithmic experiments, and technology domains in deep-dive mode."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CURRENT_FOCUS_ITEMS.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="hover"
              className="glass-card rounded-xl p-6 hover:border-[--accent-cyan]/25 hover:shadow-[0_0_25px_rgba(0,212,255,0.08)] transition-all duration-300 flex flex-col justify-between space-y-5 group relative"
            >
              <span className="corner-bracket corner-tl !w-2 !h-2" />
              <span className="corner-bracket corner-br !w-2 !h-2" />

              <div className="space-y-3">
                {/* Icon + status */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] group-hover:border-[--accent-cyan]/25 transition-colors">
                    {getFocusIcon(item.id)}
                  </div>
                  <span className="px-2 py-0.5 rounded font-mono-tech text-[9px] font-bold tracking-wider uppercase border border-[--accent-cyan]/25 bg-[--accent-cyan]/6 text-[--accent-cyan]/80">
                    {item.status}
                  </span>
                </div>

                {/* Code + title */}
                <div className="space-y-1">
                  <span className="font-mono-tech text-[9px] text-[--text-muted] block uppercase tracking-wider">
                    {item.code}
                  </span>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-[--accent-cyan] transition-colors uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-[--text-secondary] font-sans-clean leading-[1.7]">
                  {item.description}
                </p>
              </div>

              {/* Tech + score */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} variant="cyan" size="sm" />
                  ))}
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono-tech text-[--text-muted]">
                  <span>INTEL INDEX:</span>
                  <span className="text-[--accent-cyan] font-semibold">{item.matrixScore}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
