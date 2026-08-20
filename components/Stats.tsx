import React from 'react';
import { Users, HeartPulse, BookOpen, Trees } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '5,000+',
      label: 'Youth Impacted',
      description: 'Mentored through leadership and education drives',
      color: 'text-sky-600 bg-sky-50',
    },
    {
      icon: HeartPulse,
      value: '2,800+',
      label: 'Blood Units Collected',
      description: 'Saving critical lives in emergency blood drives',
      color: 'text-rose-600 bg-rose-50',
    },
    {
      icon: Trees,
      value: '12,000+',
      label: 'Trees Planted',
      description: 'Native saplings planted across rural Khandesh',
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      icon: BookOpen,
      value: '45+',
      label: 'Active Projects',
      description: 'Community initiatives running throughout the region',
      color: 'text-amber-700 bg-amber-50',
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200 shadow-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl transition hover:bg-stone-50"
              >
                <div className={`p-3.5 rounded-2xl shrink-0 ${stat.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-stone-800 text-sm mt-0.5">{stat.label}</p>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}