import type React from 'react';
import { soundManager } from '../../audio/soundEffects';

interface GlowingButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  'data-cursor'?: string;
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
  disabled,
  ...rest
}) => {
  const handleMouseEnter = () => soundManager.playHover();
  const handleClick = () => {
    soundManager.playClick();
    onClick?.();
  };

  const sizeStyles: Record<string, string> = {
    sm: 'text-[10px] px-3.5 py-1.5 gap-1.5',
    md: 'text-[11px] sm:text-xs px-5 py-2.5 gap-2',
    lg: 'text-xs sm:text-sm px-6 py-3.5 gap-2.5',
  };

  const variantStyles: Record<string, string> = {
    primary: [
      'border border-[--accent-cyan]/40 bg-[--accent-cyan]/8',
      'text-[--accent-cyan]',
      'hover:border-[--accent-cyan]/70 hover:bg-[--accent-cyan]/15',
      'hover:shadow-[0_0_24px_rgba(0,212,255,0.25)]',
    ].join(' '),
    secondary: [
      'border border-[--accent-violet]/40 bg-[--accent-violet]/8',
      'text-violet-300',
      'hover:border-[--accent-violet]/70 hover:bg-[--accent-violet]/15',
      'hover:shadow-[0_0_24px_rgba(124,58,237,0.25)]',
    ].join(' '),
    ghost: [
      'border border-white/[0.1] bg-white/[0.03]',
      'text-slate-300',
      'hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white',
    ].join(' '),
  };

  const base = [
    'relative inline-flex items-center justify-center',
    'font-mono-tech uppercase tracking-[0.12em] font-bold',
    'rounded-lg transition-all duration-250 ease-out',
    'select-none overflow-hidden',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[--accent-cyan]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg-void]',
    disabled ? 'opacity-40 pointer-events-none' : '',
  ].join(' ');

  const content = (
    <>
      {/* Shimmer sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />
      {icon && <span className="relative z-10 flex-shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} group ${className}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        data-cursor="hover"
        {...(rest as Record<string, unknown>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} group ${className}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      disabled={disabled}
      data-cursor="hover"
      {...(rest as Record<string, unknown>)}
    >
      {content}
    </button>
  );
};
