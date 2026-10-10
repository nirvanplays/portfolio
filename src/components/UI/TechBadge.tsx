import type React from 'react';

interface TechBadgeProps {
  label: string;
  variant?: 'cyan' | 'violet' | 'blue' | 'ghost';
  size?: 'xs' | 'sm' | 'md';
}

const variantMap: Record<string, string> = {
  cyan:   'border-[--accent-cyan]/20 bg-[--accent-cyan]/6 text-[--accent-cyan]/90',
  violet: 'border-[--accent-violet]/25 bg-[--accent-violet]/8 text-violet-300',
  blue:   'border-blue-500/25 bg-blue-500/8 text-blue-300',
  ghost:  'border-white/[0.1] bg-white/[0.03] text-[--text-muted]',
};

const sizeMap: Record<string, string> = {
  xs: 'text-[9px] px-1.5 py-0.5 tracking-[0.1em]',
  sm: 'text-[10px] px-2 py-0.5 tracking-[0.08em]',
  md: 'text-[11px] px-2.5 py-1 tracking-[0.06em]',
};

export const TechBadge: React.FC<TechBadgeProps> = ({
  label,
  variant = 'cyan',
  size = 'sm',
}) => (
  <span
    className={`inline-block font-mono-tech font-medium uppercase rounded border ${sizeMap[size]} ${variantMap[variant]}`}
  >
    {label}
  </span>
);
