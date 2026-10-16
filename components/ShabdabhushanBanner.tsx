'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import {
  Trophy,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Maximize2,
} from 'lucide-react';

export default function ShabdabhushanBanner() {
  const [showPosterModal, setShowPosterModal] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2c1404] via-[#4a270f] to-[#1f0c02] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-400/80 shadow-2xl">
        {/* Subtle ambient lighting */}
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative z-10">
          {/* Left Column: Event announcement details */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-black text-xs uppercase tracking-wider shadow-lg mb-3">
              <Trophy className="w-4 h-4 fill-stone-950 text-stone-950" />
              <span>महाअंतिम फेरी • Grand Finale 2026</span>
              <Sparkles className="w-3.5 h-3.5 text-stone-950" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white tracking-wide leading-tight">
              <span>शब्दभूषण २०२६: महाअंतिम फेरी!</span>
            </h2>
            <p className="mt-1 text-amber-300 font-extrabold text-sm sm:text-base md:text-lg">
              खान्देशातील सर्वात भव्य वक्तृत्व स्पर्धा • Grand Finale
            </p>

            {/* Event Key Details Pills */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white font-black px-3 py-1.5 rounded-xl border border-red-400/60 shadow-md">
                <Calendar className="w-4 h-4 shrink-0 text-amber-200" />
                <span>दिनांक : २५ ऑक्टोबर २०२६ (रविवार)</span>
              </span>

              <span className="inline-flex items-center gap-1.5 bg-amber-400 text-stone-950 font-black px-3 py-1.5 rounded-xl shadow-md">
                <Clock className="w-4 h-4 shrink-0 text-stone-950" />
                <span>वेळ : सकाळी ८ ते संध्याकाळी ६</span>
              </span>

              <span className="inline-flex items-center gap-1.5 bg-white/15 text-white font-bold px-3 py-1.5 rounded-xl border border-white/25 backdrop-blur-xs">
                <MapPin className="w-4 h-4 shrink-0 text-amber-300" />
                <span>ठिकाण : हिरे भवन, धुळे</span>
              </span>

              <span className="inline-flex items-center gap-1.5 bg-white/10 text-amber-200 font-bold px-3 py-1.5 rounded-xl border border-white/15">
                <span>सहकार्य : धुळे मनपा व दैनिक सकाळ</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 px-5 py-3 rounded-xl font-black text-xs sm:text-sm tracking-wide transition transform hover:scale-105 shadow-xl active:scale-95"
              >
                <span>सविस्तर माहिती पहा (View Details)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://maps.google.com/?q=Hire+Bhavan+Dhule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition backdrop-blur-xs"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>स्थळ नकाशा (Directions)</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-300" />
              </a>

              <button
                type="button"
                onClick={() => setShowPosterModal(true)}
                className="inline-flex items-center justify-center gap-1.5 bg-stone-900/60 hover:bg-stone-900/90 text-amber-200 border border-amber-400/40 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                <Maximize2 className="w-4 h-4" />
                <span>पोस्टर पहा (View Poster)</span>
              </button>
            </div>
          </div>

          {/* Right Column: New Grand Finale Poster Image */}
          <div className="shrink-0 flex flex-col items-center">
            <div
              onClick={() => setShowPosterModal(true)}
              className="relative w-48 sm:w-56 md:w-64 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/80 cursor-pointer group hover:scale-[1.03] transition-all duration-300 bg-stone-950 ring-4 ring-amber-400/20"
            >
              <Image
                src="/grand-finale.png"
                alt="शब्दभूषण २०२६ महाअंतिम फेरी अधिकृत पोस्टर"
                fill
                sizes="(max-width: 768px) 220px, 280px"
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white font-black text-xs gap-1.5 backdrop-blur-xs p-2 text-center">
                <Maximize2 className="w-6 h-6 text-amber-300" />
                <span>मोठा पोस्टर पहा</span>
                <span className="text-[10px] text-amber-200 font-normal">Click to Enlarge</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowPosterModal(true)}
              className="mt-2 text-amber-300 hover:text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition"
            >
              <span>🔍 क्लिक करून पूर्ण पोस्टर पहा</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Starting Page */}
      <Modal
        isOpen={showPosterModal}
        onClose={() => setShowPosterModal(false)}
        title="शब्दभूषण २०२६ - महाअंतिम फेरी अधिकृत पोस्टर"
        maxWidth="lg"
      >
        <div className="space-y-4">
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-300 bg-stone-950">
            <Image
              src="/grand-finale.png"
              alt="शब्दभूषण २०२६ महाअंतिम फेरी पोस्टर"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-contain"
              priority
            />
          </div>

          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-stone-900 text-xs sm:text-sm text-center font-bold">
            <p>🏆 महाअंतिम फेरी: २५ ऑक्टोबर २०२६ • सकाळी ८ ते संध्या. ६</p>
            <p className="text-stone-700 font-semibold mt-0.5">ठिकाण: हिरे भवन, धुळे</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              href="/events"
              onClick={() => setShowPosterModal(false)}
              className="inline-flex items-center justify-center gap-2 bg-[#5D3A1A] hover:bg-[#422209] text-white px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition shadow-md"
            >
              <span>इव्हेंट पेजवर जा (Go to Events)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://maps.google.com/?q=Hire+Bhavan+Dhule"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-stone-200 hover:bg-stone-300 text-stone-900 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition"
            >
              <MapPin className="w-4 h-4 text-rose-600" />
              <span>नकाशावर पहा</span>
            </a>

            <button
              type="button"
              onClick={() => setShowPosterModal(false)}
              className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-stone-100 text-stone-700 hover:bg-stone-200 transition cursor-pointer"
            >
              बंद करा (Close)
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
