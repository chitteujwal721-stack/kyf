import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'gray' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-amber-100 text-[var(--color-primary)] border border-amber-200',
    secondary: 'bg-sky-100 text-sky-800 border border-sky-200',
    accent: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    gray: 'bg-stone-100 text-stone-700 border border-stone-200',
    danger: 'bg-rose-100 text-rose-800 border border-rose-200',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs font-semibold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full uppercase tracking-wider ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
