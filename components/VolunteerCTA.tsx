import React from 'react';
import Section from '@/components/ui/Section';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { siteConfig } from '@/config/site';
import { Heart, UserPlus } from 'lucide-react';

export default function VolunteerCTA() {
  return (
    <Section bg="primary" className="relative overflow-hidden">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-6">
          <UserPlus className="w-4 h-4" />
          <span>Join the Movement</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
          Ready to Make a Difference in Khandesh?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-amber-100 font-light leading-relaxed">
          Whether you want to volunteer for blood donation camps, plant trees, mentor rural students, or contribute financially — your support transforms lives.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.joinUsFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-3.5 rounded-xl font-bold text-base transition shadow-lg"
          >
            <UserPlus className="w-5 h-5" />
            <span>Become a Volunteer</span>
          </a>

          <PrimaryButton
            href="/donate"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10"
          >
            <Heart className="w-5 h-5 mr-2 fill-white/30" />
            <span>Donate Now</span>
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
}
