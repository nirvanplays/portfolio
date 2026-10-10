import React from 'react';
import { soundManager } from '../../audio/soundEffects';

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  ...props
}) => {
  const handleMouseEnter = () => {
    soundManager.playHover();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    soundManager.playClick();
    if (onClick) {
      onClick(e as unknown as React.MouseEvent<HTMLButtonElement>);
    }
  };

  const baseStyles =
    'relative inline-flex items-center justify-center font-mono-tech uppercase tracking-wider font-semibold transition-all duration-300 group cursor-pointer select-none overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-xs sm:text-sm px-5 py-2.5 gap-2',
    lg: 'text-sm sm:text-base px-7 py-3.5 gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]',
    secondary:
      'bg-blue-600/10 text-blue-400 border border-blue-500/40 hover:bg-blue-600/20 hover:border-blue-400 hover:text-blue-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]',
    ghost:
      'bg-transparent text-slate-300 border border-slate-700/60 hover:border-slate-500 hover:text-white hover:bg-slate-800/40',
    danger:
      'bg-red-500/10 text-red-400 border border-red-500/40 hover:bg-red-500/20 hover:border-red-400 hover:text-red-200',
  }[variant];

  const content = (
    <>
      {/* Corner Brackets */}
      <span className="corner-bracket corner-tl opacity-75 group-hover:opacity-100 transition-opacity" />
      <span className="corner-bracket corner-tr opacity-75 group-hover:opacity-100 transition-opacity" />
      <span className="corner-bracket corner-bl opacity-75 group-hover:opacity-100 transition-opacity" />
      <span className="corner-bracket corner-br opacity-75 group-hover:opacity-100 transition-opacity" />

      {/* Shimmer sweep on hover */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {icon && <span className="relative z-10 transition-transform group-hover:scale-110">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      {...props}
    >
      {content}
    </button>
  );
};
