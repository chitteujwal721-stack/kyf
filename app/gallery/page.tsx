'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import VolunteerCTA from '@/components/VolunteerCTA';
import { getGallery } from '@/lib/services/dataService';
import { GalleryItem } from '@/types';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Eye, Calendar } from 'lucide-react';

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>(() => getGallery());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleDataChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.key === 'kyf_data_gallery') {
        setGallery(customEvent.detail.data as GalleryItem[]);
      }
    };

    window.addEventListener('kyf_data_change', handleDataChange);
    return () => window.removeEventListener('kyf_data_change', handleDataChange);
  }, []);

  const categories = ['All', ...Array.from(new Set(gallery.map((g) => g.category)))];

  const filtered =
    selectedCategory === 'All' ? gallery : gallery.filter((g) => g.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
        );
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filtered.length]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      <section className="bg-theme-primary text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 inline-block">
            Photo Gallery
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">Moments of Impact</h1>
          <p className="mt-4 text-amber-100 text-lg max-w-2xl mx-auto font-light">
            Visual highlights from our blood donation drives, tree plantations, and student empowerment activities.
          </p>
        </div>
      </section>

      <Section bg="main">
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setLightboxIndex(null);
              }}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-md bg-stone-100 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                suppressHydrationWarning
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3">
                <Badge variant="primary">{item.category}</Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif font-bold text-lg leading-snug text-amber-100 mb-1">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="text-[11px] text-stone-300 flex items-center gap-1.5 font-light">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </p>
                )}
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <div className="p-3.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                  <Eye className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal with Keyboard Navigation */}
      {lightboxIndex !== null && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) =>
                prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
              )
            }
            className="absolute left-4 sm:left-8 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Content */}
          <div className="relative max-w-5xl max-h-[80vh] w-full flex flex-col items-center justify-center z-40">
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                sizes="100vw"
                className="object-contain"
                suppressHydrationWarning
              />
            </div>
            <div className="mt-4 text-center text-white max-w-2xl">
              <div className="mb-2">
                <Badge variant="primary">{currentItem.category}</Badge>
              </div>
              <h3 className="text-2xl font-serif font-bold text-amber-100 mb-1">
                {currentItem.title}
              </h3>
              {currentItem.description && (
                <p className="text-sm text-stone-300 font-light">{currentItem.description}</p>
              )}
              <p className="text-xs text-stone-400 mt-2 font-mono">
                {lightboxIndex + 1} / {filtered.length} • Use Arrow Keys to Navigate
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filtered.length : 0))
            }
            className="absolute right-4 sm:right-8 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

      <VolunteerCTA />
      <Footer />
    </main>
  );
}
