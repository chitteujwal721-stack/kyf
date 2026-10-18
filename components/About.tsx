import React from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const highlights = [
    'Youth-driven organization dedicated to empowering young minds and grassroots development.',
    'Over 500 lives saved during the COVID-19 pandemic through timely emergency response.',
    'Flagship youth platforms including Shabdabhushan (3 consecutive years) and Swarnaakshar.',
    'Spanning 10 key sectors including education, healthcare, environment, and entrepreneurship.',
  ];

  return (
    <Section id="about" bg="main">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Collage Images */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[540px] aspect-[16/11] rounded-3xl overflow-hidden shadow-xl shadow-stone-300/40 border border-stone-200/90 bg-white flex items-center justify-center p-5 sm:p-8 group">
            <Image
              src="/logo.png"
              alt="Khandesh Youth Foundation Logo"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <SectionHeading
            badge="Who We Are"
            title="Building a Stronger Khandesh Through Youth Power"
            subtitle="Khandesh Youth Foundation (KYF) unites cause driven youth to solve community challenges in education, healthcare, environment, and social welfare."
            centered={false}
          />

          <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <span className="text-stone-700 text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <PrimaryButton href="/about" variant="primary" className="justify-center">
              <span>Read Full Story</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </PrimaryButton>

            <PrimaryButton href="/contact" variant="outline" className="justify-center">
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}