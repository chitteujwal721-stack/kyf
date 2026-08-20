'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Modal from '@/components/ui/Modal';
import { getInitiatives } from '@/lib/services/dataService';
import { InitiativeItem } from '@/types';
import { ArrowRight, BookOpen, HeartPulse, Trees, UserCheck, Smile } from 'lucide-react';

export default function Initiatives() {
  const [initiatives, setInitiatives] = useState<InitiativeItem[]>(() => getInitiatives());
  const [selectedInitiative, setSelectedInitiative] = useState<InitiativeItem | null>(null);

  useEffect(() => {
    const handleDataChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.key === 'kyf_data_initiatives') {
        setInitiatives(customEvent.detail.data as InitiativeItem[]);
      }
    };

    window.addEventListener('kyf_data_change', handleDataChange);
    return () => window.removeEventListener('kyf_data_change', handleDataChange);
  }, []);

  const getIcon = (name?: string) => {
    switch (name) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-700" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-sky-600" />;
      default:
        return <UserCheck className="w-5 h-5 text-stone-700" />;
    }
  };

  return (
    <Section id="initiatives" bg="white">
      <SectionHeading
        badge="Our Core Pillars"
        title="Key Social Initiatives"
        subtitle="Empowering communities across Khandesh through structured programs in youth mentoring, education, healthcare, and green conservation."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.slice(0, 6).map((item) => (
          <Card key={item.id} className="flex flex-col h-full group">
            {/* Image Header */}
            <div className="relative h-52 w-full overflow-hidden bg-stone-100">
              <Image
                src={item.image || '/bg.jpg'}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                suppressHydrationWarning
              />
              <div className="absolute top-4 left-4">
                <Badge variant="primary">{item.category}</Badge>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                {getIcon(item.iconName)}
                <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-stone-600 text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                {item.description}
              </p>

              {/* Metrics */}
              {item.impactMetrics && item.impactMetrics.length > 0 && (
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-stone-100 mb-6 bg-amber-50/40 p-3 rounded-xl">
                  {item.impactMetrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <p className="font-serif font-bold text-lg text-[var(--color-primary)]">{m.value}</p>
                      <p className="text-[11px] text-stone-500 font-medium">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => setSelectedInitiative(item)}
                className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors pt-2"
              >
                <span>Read Overview</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <PrimaryButton href="/initiatives" variant="outline" size="lg">
          View All Initiatives
        </PrimaryButton>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        title={selectedInitiative?.title}
      >
        {selectedInitiative && (
          <div className="space-y-4">
            <div className="relative h-60 w-full rounded-xl overflow-hidden">
              <Image
                src={selectedInitiative.image || '/bg.jpg'}
                alt={selectedInitiative.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                suppressHydrationWarning
              />
            </div>
            <Badge variant="primary">{selectedInitiative.category}</Badge>
            <p className="text-stone-700 text-base leading-relaxed">
              {selectedInitiative.fullContent || selectedInitiative.description}
            </p>
            {selectedInitiative.impactMetrics && (
              <div className="grid grid-cols-2 gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                {selectedInitiative.impactMetrics.map((m, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-serif font-bold text-[var(--color-primary)]">{m.value}</p>
                    <p className="text-xs text-stone-600 font-medium">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </Section>
  );
}
