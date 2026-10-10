import React from 'react';

interface SectionHeadingProps {
  systemCode: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  systemCode,
  title,
  subtitle,
  badge,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 relative z-10 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* System Code Sub-header */}
      <div
        className={`flex items-center gap-2 mb-2 font-mono-tech text-xs tracking-widest text-cyan-400 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>{systemCode}</span>
        {badge && (
          <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
            {badge}
          </span>
        )}
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white uppercase">
        {title}
      </h2>

      {/* Futuristic accent bar */}
      <div
        className={`mt-4 flex items-center gap-2 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-blue-500" />
        <div className="h-[2px] w-4 bg-violet-500" />
        <div className="h-[1px] w-24 bg-slate-800" />
      </div>

      {/* Subtitle description */}
      {subtitle && (
        <p className={`mt-4 text-sm sm:text-base text-slate-400 max-w-2xl font-sans-clean leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
