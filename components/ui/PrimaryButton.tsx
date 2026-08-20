import React from 'react';
import Link from 'next/link';

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
}

export default function PrimaryButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
}: PrimaryButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs';

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const variantClasses = {
    primary:
      'bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white focus:ring-[var(--color-primary)]',
    secondary:
      'bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white focus:ring-[var(--color-secondary)]',
    accent:
      'bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white focus:ring-[var(--color-accent)]',
    outline:
      'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]',
    ghost:
      'text-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 focus:ring-stone-400',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
