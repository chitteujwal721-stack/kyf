'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, ExternalLink, Trophy, Flame } from 'lucide-react';

export default function ShabdabhushanBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#44220b] via-[#5D3A1A] to-[#2c1404] text-white py-5 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-400/50 shadow-lg">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
        {/* Left / Center Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-3 sm:gap-4 text-center sm:text-left">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider shadow-md shrink-0 animate-pulse">
            <Flame className="w-4 h-4 fill-stone-950 text-stone-950" />
            <span>नोंदणी सुरू • Registration Open</span>
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg sm:text-xl md:text-2xl font-serif font-black text-white tracking-wide flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span>शब्दभूषण २०२६ नोंदणी सुरू झाली आहे!</span>
              <span className="text-amber-300 font-extrabold text-base sm:text-lg">
                (Shabdabhushan Registration Has Started)
              </span>
            </h2>

            {/* Crucial Date Highlight */}
            <div className="mt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 bg-red-600/90 hover:bg-red-600 text-white font-black px-3 py-1 rounded-lg border border-red-400/40 shadow-xs">
                <Calendar className="w-4 h-4 shrink-0 text-amber-200" />
                <span>नोंदणी मुदतवाढ : २० सप्टेंबर २०२६ पर्यंत (Extended: 20 Sep 2026)</span>
              </span>

              <span className="inline-flex items-center gap-1 text-amber-200 font-bold bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>खान्देशस्तरीय स्पर्धा (Khandesh Level)</span>
              </span>

              <span className="inline-flex items-center gap-1 text-amber-200 font-bold bg-white/10 px-2.5 py-1 rounded-lg border border-white/15">
                <Trophy className="w-3.5 h-3.5 text-amber-300" />
                <span>भव्य रोख पारितोषिके ₹१०,०००/-</span>
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center flex-wrap justify-center gap-2.5 shrink-0 w-full sm:w-auto">
          <a
            href="https://forms.gle/xW3AqRnGNVKewGF4A"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm tracking-wide transition transform hover:scale-105 shadow-md active:scale-95"
          >
            <span>नोंदणी फॉर्म भरा (Register Now)</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>

          <Link
            href="/events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition backdrop-blur-xs"
          >
            <span>सविस्तर माहिती (View Details)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
