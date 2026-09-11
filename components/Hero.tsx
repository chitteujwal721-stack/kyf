import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { ArrowRight, IndianRupee, Heart, Users } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative min-h-[68vh] sm:min-h-[85vh] flex items-center justify-center bg-stone-950 text-white overflow-hidden py-8 sm:py-20">
      {/* Background Image Overlay - tuned so the team photo background.png is beautifully framed and visible on both mobile and desktop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="KYF Team and Community Work"
          fill
          className="object-cover object-[center_60%] sm:object-[center_35%] opacity-100"
          priority
        />
        {/* Balanced contrast overlay: top protects navbar/badge, clear bright center for team faces, bottom anchors trust bar */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-stone-950/25 to-stone-950/85 sm:from-stone-950/70 sm:via-stone-950/30 sm:to-stone-950/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* NGO Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-stone-950/80 border border-white/25 backdrop-blur-md text-amber-200 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-6 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shrink-0" />
          <span className="truncate">Non-Governmental Organization • Dhule</span>
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          Empowering Youth.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Transforming Society.
          </span>
        </h1>

        <p className="mt-2.5 sm:mt-6 text-xs sm:text-xl md:text-2xl text-stone-100 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] px-2 sm:px-0">
          {siteConfig.description}
        </p>

        {/* Action CTA Buttons */}
        <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
          <PrimaryButton href="/donate" variant="primary" size="md" className="w-full sm:w-auto shadow-xl justify-center font-bold text-xs sm:text-base py-2.5 sm:py-3.5">
            <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 text-white" />
            <span>Support Our Cause</span>
          </PrimaryButton>

          <PrimaryButton
            href="/about"
            variant="outline"
            size="md"
            className="w-full sm:w-auto border-white/80 text-white bg-black/30 hover:bg-white/20 hover:border-white justify-center backdrop-blur-xs font-bold text-xs sm:text-base py-2.5 sm:py-3.5"
          >
            <span>Learn About Us</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5" />
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