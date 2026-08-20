'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Badge from '@/components/ui/Badge';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { getGallery } from '@/lib/services/dataService';
import { GalleryItem } from '@/types';
import { ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';

export default function GalleryPreview() {
  const [gallery, setGallery] = useState<GalleryItem[]>(() => getGallery());

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

  return (
    <Section id="gallery-preview" bg="white">
      <SectionHeading
        badge="Memories & Impact"
        title="Gallery Highlights"
        subtitle="Moments captured from our recent blood donation drives, tree plantations, and youth workshops."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="group relative h-64 rounded-2xl overflow-hidden shadow-md bg-stone-100 cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              suppressHydrationWarning
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            {/* Top Category Badge */}
            <div className="absolute top-3 left-3">
              <Badge variant="primary">{item.category}</Badge>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-serif font-bold text-lg leading-snug text-amber-100">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-stone-300 line-clamp-1 mt-1 font-light">
                  {item.description}
                </p>
              )}
            </div>

            {/* Hover Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
              <Link href="/gallery" className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                <Eye className="w-6 h-6" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <PrimaryButton href="/gallery" variant="outline" size="lg">
          <span>Explore Full Gallery</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </PrimaryButton>
      </div>
    </Section>
  );
}
