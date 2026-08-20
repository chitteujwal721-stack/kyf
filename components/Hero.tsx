import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { ArrowRight, Heart, Users } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-stone-900 text-white overflow-hidden py-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="KYF Community Work"
          fill
          className="object-cover object-center opacity-30 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-footer-bg)] via-stone-900/80 to-stone-900/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* NGO Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-amber-200 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span>Non-Governmental Organization • Dhule, Maharashtra</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
          Empowering Youth.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
            Transforming Society.
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto font-light leading-relaxed">
          {siteConfig.description}
        </p>

        {/* Action CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <PrimaryButton href="/donate" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg">
            <Heart className="w-5 h-5 mr-2 fill-white/30" />
            <span>Support Our Cause</span>
          </PrimaryButton>

          <PrimaryButton
            href="/about"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white/60 text-white hover:bg-white/10 hover:border-white"
          >
            <span>Learn About Us</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </PrimaryButton>
        </div>

        {/* Highlight Trust Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-300 text-sm font-medium">
          <div className="flex items-center justify-center gap-2">
            <Users className="w-5 h-5 text-[var(--color-secondary)]" />
            <span>Youth Mentorship</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            <span>Blood Donation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-emerald-400 font-bold">🌱</span>
            <span>Tree Plantation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-amber-400 font-bold">📚</span>
            <span>Free Education</span>
          </div>
        </div>
      </div>
    </section>
  );
}