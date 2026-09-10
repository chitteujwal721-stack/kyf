import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { ArrowRight, Heart, Users } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center bg-stone-950 text-white overflow-hidden py-14 sm:py-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.png"
          alt="KYF Community Work"
          fill
          className="object-cover object-center opacity-90 scale-105"
          priority
        />
        {/* Soft subtle overlay so text is crisp while bg1 is fully visible and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-900/40 to-stone-950/80 backdrop-brightness-90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* NGO Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-amber-200 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shrink-0" />
          <span className="truncate">Non-Governmental Organization • Dhule</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-md">
          Empowering Youth.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-sm">
            Transforming Society.
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-stone-100 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-md px-2 sm:px-0">
          {siteConfig.description}
        </p>

        {/* Action CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
          <PrimaryButton href="/donate" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg justify-center">
            <Heart className="w-5 h-5 mr-2 fill-white/30" />
            <span>Support Our Cause</span>
          </PrimaryButton>

          <PrimaryButton
            href="/about"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/60 text-white hover:bg-white/10 hover:border-white justify-center"
          >
            <span>Learn About Us</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </PrimaryButton>
        </div>

        {/* Highlight Trust Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-stone-300 text-xs sm:text-sm font-medium">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent py-2 px-3 rounded-xl sm:p-0">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-secondary)] shrink-0" />
            <span className="truncate">Youth Mentorship</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent py-2 px-3 rounded-xl sm:p-0">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0" />
            <span className="truncate">Blood Donation</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent py-2 px-3 rounded-xl sm:p-0">
            <span className="text-emerald-400 font-bold">🌱</span>
            <span className="truncate">Tree Plantation</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent py-2 px-3 rounded-xl sm:p-0">
            <span className="text-amber-400 font-bold">📚</span>
            <span className="truncate">Supports Education</span>
          </div>
        </div>
      </div>
    </section>
  );
}