import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const highlights = [
    'Registered non-profit youth organization committed to social service.',
    '24/7 blood donation coordination helpline connecting donors with blood banks.',
    'Educational kit distribution and scholarship assistance for rural students.',
    'Environmental conservation through large-scale native tree plantations.',
  ];

  return (
    <Section id="about" bg="main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Collage Images */}
        <div className="relative">
          <div className="relative h-[380px] sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/education.jpg"
              alt="KYF Education Support Drive"
              fill
              className="object-cover"
            />
          </div>
          {/* Overlapping Badge Card */}
          <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 max-w-xs flex items-center gap-4">
            <div className="relative h-12 w-20 rounded-xl overflow-hidden bg-white p-1 border border-stone-200 shrink-0 shadow-2xs">
              <Image src="/logo.png" alt="KYF Logo" fill sizes="80px" className="object-contain" />
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Established</p>
              <p className="text-sm font-bold text-stone-900">Serving Khandesh Region</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <SectionHeading
            badge="Who We Are"
            title="Building a Stronger Khandesh Through Youth Power"
            subtitle="Khandesh Youth Foundation (KYF) unites driven youth to solve community challenges in education, healthcare, environment, and social welfare."
            centered={false}
          />

          <div className="space-y-3.5 mb-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-stone-700 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href="/about" variant="primary">
              <span>Read Full Story</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </PrimaryButton>

            <PrimaryButton href="/contact" variant="outline">
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}