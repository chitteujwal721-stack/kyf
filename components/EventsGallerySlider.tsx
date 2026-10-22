'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Camera,
  Layers,
  CheckCircle2,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface EventPhoto {
  id: number;
  src: string;
}

export const eventPhotos: EventPhoto[] = [
  // New Flagship Photos Added
  { id: 1, src: '/eventsphoto/46.png' },
  { id: 2, src: '/eventsphoto/50.png' },
  { id: 3, src: '/eventsphoto/51.png' },
  { id: 4, src: '/eventsphoto/53.png' },
  { id: 5, src: '/eventsphoto/49.png' },
  { id: 6, src: '/eventsphoto/48.png' },
  { id: 7, src: '/eventsphoto/47.png' },
  { id: 8, src: '/eventsphoto/52.png' },

  // Event Gallery Photos
  { id: 9, src: '/eventsphoto/8.png' },
  { id: 10, src: '/eventsphoto/9.png' },
  { id: 11, src: '/eventsphoto/10.png' },
  { id: 12, src: '/eventsphoto/11.png' },
  { id: 13, src: '/eventsphoto/12.png' },
  { id: 14, src: '/eventsphoto/14.png' },
  { id: 15, src: '/eventsphoto/15.png' },
  { id: 16, src: '/eventsphoto/16.png' },
  { id: 17, src: '/eventsphoto/17.png' },
  { id: 18, src: '/eventsphoto/18.png' },
  { id: 19, src: '/eventsphoto/19.png' },
  { id: 20, src: '/eventsphoto/20.png' },
  { id: 21, src: '/eventsphoto/22.png' },
  { id: 22, src: '/eventsphoto/23.png' },
  { id: 23, src: '/eventsphoto/24.png' },
  { id: 24, src: '/eventsphoto/25.png' },
  { id: 25, src: '/eventsphoto/26.png' },
  { id: 26, src: '/eventsphoto/27.png' },
  { id: 27, src: '/eventsphoto/28.png' },
  { id: 28, src: '/eventsphoto/29.png' },
  { id: 29, src: '/eventsphoto/30.png' },
  { id: 30, src: '/eventsphoto/34.png' },
  { id: 31, src: '/eventsphoto/35.png' },
  { id: 32, src: '/eventsphoto/36.png' },
  { id: 33, src: '/eventsphoto/37.png' },
  { id: 34, src: '/eventsphoto/38.png' },
  { id: 35, src: '/eventsphoto/39.png' },
  { id: 36, src: '/eventsphoto/40.png' },
  { id: 37, src: '/eventsphoto/41.png' },
  { id: 38, src: '/eventsphoto/42.png' },
  { id: 39, src: '/eventsphoto/43.png' },
  { id: 40, src: '/eventsphoto/44.png' },
  { id: 41, src: '/eventsphoto/45.png' },
];

interface EventsGallerySliderProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

export default function EventsGallerySlider({
  title = 'उपक्रम क्षणचित्रे • Event Moments Gallery',
  subtitle = 'A glimpse into the grassroots initiatives, youth oratory competitions, and community drives by Khandesh Youth Foundation.',
  badge = '📸 छायाचित्रे • Official Photo Gallery',
}: EventsGallerySliderProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % eventPhotos.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + eventPhotos.length) % eventPhotos.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % eventPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + eventPhotos.length) % eventPhotos.length);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FDFBF7] via-amber-50/30 to-[#FDFBF7] relative overflow-hidden border-t border-b border-amber-200/60">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-100 text-[#5D3A1A] border border-amber-200 mb-3 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-[#5D3A1A]" />
              {badge}
            </span>
          )}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black text-stone-950 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-4 h-1 w-20 rounded bg-amber-500 mx-auto" />
        </div>

        {/* Swiper Slider Container */}
        <div className="relative group">
          {/* Custom Navigation Buttons */}
          <button
            type="button"
            className="events-swiper-prev absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-[#5D3A1A] border-2 border-amber-400 shadow-xl flex items-center justify-center hover:bg-amber-400 hover:text-stone-950 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          <button
            type="button"
            className="events-swiper-next absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-[#5D3A1A] border-2 border-amber-400 shadow-xl flex items-center justify-center hover:bg-amber-400 hover:text-stone-950 transition duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: '.events-swiper-prev',
              nextEl: '.events-swiper-next',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={18}
            breakpoints={{
              320: {
                slidesPerView: 1.15,
                centeredSlides: true,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 22,
              },
            }}
            className="pb-12 !overflow-visible"
          >
            {eventPhotos.map((photo, idx) => (
              <SwiperSlide key={photo.id} className="h-auto">
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="group/card relative bg-white rounded-2xl overflow-hidden border-2 border-amber-300/80 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] w-full bg-stone-900 overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={`खान्देश युथ फाउंडेशन उपक्रम छायाचित्र ${photo.id}`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                      loading={idx < 4 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-black/10 to-transparent opacity-40 group-hover/card:opacity-80 transition-opacity" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 text-stone-950 text-xs font-black shadow-lg transform scale-90 group-hover/card:scale-100 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </span>
                    </div>

                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-black/60 text-amber-200 border border-amber-300/40 backdrop-blur-xs">
                        #{idx + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white pb-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-stone-950 font-black text-xs">
                {lightboxIndex + 1} / {eventPhotos.length}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Display */}
          <div
            className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevPhoto}
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-amber-400 hover:text-stone-950 text-white border border-white/20 flex items-center justify-center transition cursor-pointer shadow-xl"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              onClick={nextPhoto}
              className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-amber-400 hover:text-stone-950 text-white border border-white/20 flex items-center justify-center transition cursor-pointer shadow-xl"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-amber-400/60 bg-stone-950 shadow-2xl">
              <Image
                src={eventPhotos[lightboxIndex].src}
                alt={`खान्देश युथ फाउंडेशन उपक्रम छायाचित्र ${eventPhotos[lightboxIndex].id}`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Bottom Thumbnails preview */}
          <div
            className="w-full max-w-4xl mt-3 overflow-x-auto flex items-center gap-2 py-1 scrollbar-thin"
            onClick={(e) => e.stopPropagation()}
          >
            {eventPhotos.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setLightboxIndex(i)}
                className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition ${i === lightboxIndex
                    ? 'border-amber-400 ring-2 ring-amber-400 scale-105'
                    : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
              >
                <Image
                  src={p.src}
                  alt={`छायाचित्र ${p.id}`}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
