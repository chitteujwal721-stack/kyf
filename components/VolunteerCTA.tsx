import React from 'react';
import Section from '@/components/ui/Section';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { siteConfig } from '@/config/site';
import { IndianRupee, Sparkles } from 'lucide-react';

export default function VolunteerCTA() {
  return (
    <Section bg="primary" className="relative overflow-hidden">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Support Our Mission</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
          Ready to Make a Difference in Khandesh?
        </h2>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-amber-100 font-light leading-relaxed">
          Whether you want to support blood donation camps, tree plantations, or rural student education — your contribution transforms lives.
        </p>

        <div className="mt-6 sm:mt-8 flex items-center justify-center">
          <PrimaryButton
            href="/donate"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-white hover:bg-white/10 justify-center shadow-lg px-8 py-3.5 font-bold"
          >
            <IndianRupee className="w-5 h-5 mr-2 text-white" />
            <span>Donate to KYF</span>
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
}
