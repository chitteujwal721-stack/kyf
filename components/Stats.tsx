import React from 'react';
import { Users, HeartPulse, BookOpen, Trees } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '90+',
      label: 'Youth Impacted',
      description: 'Mentored through leadership and education drives',
      color: 'text-sky-600 bg-sky-50',
    },
    {
      icon: HeartPulse,
      value: '50+',
      label: 'Blood Units Collected',
      description: 'Saving critical lives in emergency blood drives',
      color: 'text-rose-600 bg-rose-50',
    },
    {
      icon: Trees,
      value: '100+',
      label: 'Trees Planted',
      description: 'Native saplings planted across rural Khandesh',
      color: 'text-emerald-600 bg-emerald-50',
    },

  ];

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-stone-200 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl transition hover:bg-stone-50 bg-stone-50/50 sm:bg-transparent"
              >
                <div className={`p-2.5 sm:p-3.5 rounded-2xl shrink-0 ${stat.color}`}>
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-stone-800 text-xs sm:text-sm mt-0.5">{stat.label}</p>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-relaxed hidden sm:block">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}