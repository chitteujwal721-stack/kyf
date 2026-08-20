import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden transition-all duration-300 ${
        hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
