import type React from 'react';

interface SectionHeadingProps {
  systemCode: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  systemCode,
  title,
  subtitle,
  badge,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`relative z-10 section-heading-reveal ${className}`}>
      {/* System code line */}
      <div
        className={`flex items-center gap-2.5 mb-3 font-mono-tech text-[10px] tracking-[0.2em] text-[--accent-cyan]/70 uppercase ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[--accent-cyan] animate-pulse flex-shrink-0" />
        <span>{systemCode}</span>
        {badge && (
          <span className="px-1.5 py-0.5 text-[9px] tracking-wider border border-[--accent-cyan]/20 bg-[--accent-cyan]/8 text-[--accent-cyan]/70 rounded">
            {badge}
          </span>
        )}
      </div>

      {/* Main heading */}
      <h2
        className={`font-display font-black uppercase text-white leading-[0.95] tracking-tight ${
          isCenter ? 'text-center' : 'text-left'
        }`}
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        {title}
      </h2>

      {/* Accent divider */}
      <div className={`mt-5 flex items-center gap-2 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-px w-14 bg-gradient-to-r from-[--accent-cyan] to-[--accent-violet] divider-draw" />
        <div className="h-px w-5 bg-[--accent-violet]/50 divider-draw" />
        <div className="h-px w-32 bg-white/[0.04]" />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-5 text-sm sm:text-base text-[--text-secondary] font-sans-clean leading-[1.7] max-w-2xl ${
            isCenter ? 'mx-auto text-center' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
