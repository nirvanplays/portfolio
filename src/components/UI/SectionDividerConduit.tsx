import type React from 'react';

interface SectionDividerConduitProps {
  sourceModule: string;
  targetModule: string;
  className?: string;
}

export const SectionDividerConduit: React.FC<SectionDividerConduitProps> = ({
  sourceModule,
  targetModule,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Central Conduit Column */}
      <div className="flex flex-col items-center gap-2">
        {/* Origin node */}
        <div className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan]/50 border border-[--accent-cyan]" />

        {/* Vertical laser beam */}
        <div className="relative w-px h-16 sm:h-20 bg-gradient-to-b from-[--accent-cyan]/60 via-[--accent-violet]/40 to-[--accent-cyan]/60 overflow-hidden">
          {/* Traveling energy pulse */}
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-white to-transparent animate-shimmer" />
        </div>

        {/* Telemetry transfer badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded border border-white/[0.08] bg-[#03050a]/80 backdrop-blur-sm font-mono-tech text-[9px] text-[--text-muted] tracking-widest uppercase">
          <span className="text-[--accent-cyan]">{sourceModule}</span>
          <span className="text-white/40">➔</span>
          <span className="text-[--accent-violet]">{targetModule}</span>
        </div>

        {/* Lower laser beam */}
        <div className="relative w-px h-16 sm:h-20 bg-gradient-to-b from-[--accent-cyan]/60 via-[--accent-violet]/40 to-[--accent-cyan]/60 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-[--accent-cyan] to-transparent animate-shimmer" />
        </div>

        {/* Destination node */}
        <div className="w-1.5 h-1.5 rounded-full bg-[--accent-violet]/50 border border-[--accent-violet]" />
      </div>
    </div>
  );
};
