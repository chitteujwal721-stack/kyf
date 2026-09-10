import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  bg?: 'main' | 'white' | 'alt' | 'primary' | 'dark';
}

export default function Section({
  children,
  id,
  className = '',
  containerSize = 'xl',
  bg = 'main',
}: SectionProps) {
  const bgClasses = {
    main: 'bg-theme-main',
    white: 'bg-white',
    alt: 'bg-amber-50/50 dark:bg-stone-900/50',
    primary: 'bg-theme-primary text-white',
    dark: 'bg-theme-footer text-white',
  };

  return (
    <section id={id} className={`py-10 sm:py-16 md:py-20 lg:py-24 ${bgClasses[bg]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
