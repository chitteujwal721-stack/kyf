import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  badge,
  className = '',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span
          className={`inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 ${
            light
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-amber-100 text-[var(--color-primary)] border border-amber-200'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-stone-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-stone-200' : 'text-stone-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded bg-[var(--color-secondary)] ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
