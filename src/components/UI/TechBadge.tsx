import React from 'react';

interface TechBadgeProps {
  label: string;
  variant?: 'cyan' | 'blue' | 'violet' | 'amber' | 'emerald';
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  variant = 'cyan',
  size = 'md',
}) => {
  const variantStyles = {
    cyan: 'border-cyan-500/25 bg-cyan-950/30 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-950/50',
    blue: 'border-blue-500/25 bg-blue-950/30 text-blue-300 hover:border-blue-400/50 hover:bg-blue-950/50',
    violet: 'border-violet-500/25 bg-violet-950/30 text-violet-300 hover:border-violet-400/50 hover:bg-violet-950/50',
    amber: 'border-amber-500/25 bg-amber-950/30 text-amber-300 hover:border-amber-400/50 hover:bg-amber-950/50',
    emerald: 'border-emerald-500/25 bg-emerald-950/30 text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-950/50',
  }[variant];

  const sizeStyles = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono-tech border rounded transition-colors duration-200 select-none ${variantStyles} ${sizeStyles}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {label}
    </span>
  );
};
