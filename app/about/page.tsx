import React from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import VolunteerCTA from '@/components/VolunteerCTA';
import { Target, Eye, Heart, Award, ShieldCheck, Users } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      {/* Hero Banner */}
      <section className="bg-theme-primary text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 sm:mb-4 inline-block">
            About Our NGO
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight">
            Our Journey & Vision
          </h1>
          <p className="mt-3 sm:mt-4 text-amber-100 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <Section bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="p-5 sm:p-8 border-l-4 border-l-[var(--color-primary)]">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-[var(--color-primary)] flex items-center justify-center mb-4">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2 sm:mb-3">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
              To empower the youth of Khandesh through accessible education, skill-building workshops, emergency healthcare support, and environmental stewardship, creating a self-sustaining and compassionate society.
            </p>
          </Card>

          <Card className="p-5 sm:p-8 border-l-4 border-l-[var(--color-secondary)]">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2 sm:mb-3">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
              A vibrant Khandesh region where every young person has equal access to growth opportunities, healthcare support is readily available, and environmental consciousness is deeply ingrained in community life.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section bg="main">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="The foundational ethics behind every project we undertake."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Heart,
              title: 'Selfless Service',
              desc: 'Dedicated to serving humanity without discrimination or self-interest.',
            },
            {
              icon: ShieldCheck,
              title: 'Transparency',
              desc: '100% accountability in resource utilization, donations, and impact metrics.',
            },
            {
              icon: Users,
              title: 'Youth Leadership',
              desc: 'Nurturing young minds to lead local solutions for local challenges.',
            },
            {
              icon: Award,
              title: 'Community First',
              desc: 'Collaborating directly with villagers, students, and healthcare institutions.',
            },
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <Card key={idx} className="p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">{val.title}</h4>
                <p className="text-xs text-stone-600 leading-relaxed">{val.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <VolunteerCTA />

      <Footer />
    </main>
  );
}