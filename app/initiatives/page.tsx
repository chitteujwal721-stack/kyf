'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Modal from '@/components/ui/Modal';
import VolunteerCTA from '@/components/VolunteerCTA';
import { getInitiatives } from '@/lib/services/dataService';
import { InitiativeItem } from '@/types';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function InitiativesPage() {
  const [initiatives, setInitiatives] = useState<InitiativeItem[]>(() => getInitiatives());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
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

  const categories = ['All', ...Array.from(new Set(initiatives.map((i) => i.category)))];

  const filtered =
    selectedCategory === 'All'
      ? initiatives
      : initiatives.filter((i) => i.category === selectedCategory);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      <section className="bg-theme-primary text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 inline-block">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">Social Initiatives</h1>
          <p className="mt-4 text-amber-100 text-lg max-w-2xl mx-auto font-light">
            Comprehensive youth and community development projects transforming lives across Khandesh.
          </p>
        </div>
      </section>

      <Section bg="main">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                selectedCategory === cat
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-100/50 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Card key={item.id} className="flex flex-col h-full group">
              <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image || '/bg.jpg'}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  suppressHydrationWarning
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="primary">{item.category}</Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-xl text-stone-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                  {item.description}
                </p>

                {item.impactMetrics && item.impactMetrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 p-3 bg-amber-50 rounded-xl mb-6 text-center">
                    {item.impactMetrics.map((m, idx) => (
                      <div key={idx}>
                        <p className="font-serif font-bold text-base text-[var(--color-primary)]">
                          {m.value}
                        </p>
                        <p className="text-[10px] text-stone-600 uppercase font-semibold">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <PrimaryButton
                  onClick={() => setSelectedInitiative(item)}
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </PrimaryButton>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Modal
        isOpen={!!selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        title={selectedInitiative?.title}
      >
        {selectedInitiative && (
          <div className="space-y-4">
            <div className="relative h-64 w-full rounded-xl overflow-hidden">
              <Image
                src={selectedInitiative.image || '/bg.jpg'}
                alt={selectedInitiative.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                suppressHydrationWarning
              />
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="primary">{selectedInitiative.category}</Badge>
            </div>
            <p className="text-stone-700 text-sm leading-relaxed">
              {selectedInitiative.fullContent || selectedInitiative.description}
            </p>
            {selectedInitiative.impactMetrics && (
              <div className="grid grid-cols-2 gap-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
                {selectedInitiative.impactMetrics.map((m, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-serif font-bold text-[var(--color-primary)]">
                      {m.value}
                    </p>
                    <p className="text-xs text-stone-600 font-medium">{m.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>

      <VolunteerCTA />
      <Footer />
    </main>
  );
}