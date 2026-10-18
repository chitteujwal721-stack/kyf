import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import VolunteerCTA from '@/components/VolunteerCTA';
import FoundersDesk from '@/components/FoundersDesk';
import {
  Target,
  Eye,
  Heart,
  Award,
  ShieldCheck,
  Users,
  Briefcase,
  Calendar,
  Mic,
  PenTool,
  Landmark,
  Palette,
  Sparkle,
  Sparkles,
  HandHeart,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    'Learn about Khandesh Youth Foundation (KYF) - our story, our journey from COVID-19 relief to flagship initiatives like Shabdabhushan, our mission, vision, and key sectors.',
};

export default function AboutPage() {
  const flagshipInitiatives = [
    {
      title: 'Shabdabhushan (शब्दभूषण)',
      category: 'Elocution Platform',
      badge: '3 Consecutive Years',
      icon: Mic,
      color: 'bg-amber-500',
      description:
        'Our flagship annual elocution competition that has grown into one of Khandesh’s largest and most prestigious platforms for young orators, bringing together remarkable participation, eloquence, and youth talent.',
    },
    {
      title: 'Swarnaakshar (सुवर्णाक्षर)',
      category: 'State-Level Essay Writing',
      badge: 'Literary Expression',
      icon: PenTool,
      color: 'bg-sky-600',
      description:
        'A comprehensive essay writing competition encouraging critical thinking, ideological depth, and literary brilliance among students and youth thinkers across the region.',
    },
    {
      title: 'Yashogatha (यशोगाथा)',
      category: 'Inspiration & Honor',
      badge: 'Success Chronicles',
      icon: Award,
      color: 'bg-emerald-600',
      description:
        'Spotlighting and celebrating Khandesh’s grassroots success stories, notable achievers, and inspiring trailblazers to motivate the next generation to dream bigger.',
    },
    {
      title: 'KilleDar (किल्लेदार)',
      category: 'Heritage & History',
      badge: 'Traditional Fort-Making',
      icon: Landmark,
      color: 'bg-orange-600',
      description:
        'Celebrating Maharashtra’s historic fort architecture and Chhatrapati Shivaji Maharaj’s legacy through traditional fort-making workshops and competitions for children and youth.',
    },
    {
      title: 'Patriotic Online Art Events',
      category: 'Creativity & Culture',
      badge: 'National Pride',
      icon: Palette,
      color: 'bg-rose-600',
      description:
        'Digital art exhibitions and creative showcases that channel youth artistry into themes of patriotism, social awareness, and regional pride.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-theme-main">
      <Navbar />
      <NoticeBar />

      {/* Hero Banner */}
      <section className="bg-theme-primary text-white py-14 sm:py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/15 text-amber-100 border border-white/20 mb-4 inline-flex items-center gap-1.5 shadow-sm">
            <Sparkle className="w-3.5 h-3.5 text-amber-300" />
            About Khandesh Youth Foundation
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Where Youth Power Meets Purpose
          </h1>
          <p className="mt-4 sm:mt-6 text-amber-100/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Empowering young minds, addressing grassroots challenges, and driving sustainable, progressive development across Khandesh.
          </p>
        </div>
      </section>

      {/* SECTION 1: About Khandesh Youth Foundation (KYF) */}
      <Section id="about-kyf" bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-100 text-[var(--color-primary)] border border-amber-200 mb-3">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
                About Khandesh Youth Foundation (KYF)
              </h2>
              <div className="mt-3 h-1 w-20 rounded bg-[var(--color-secondary)]" />
            </div>

            <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-normal">
              <strong className="text-[var(--color-primary)] font-semibold">Khandesh Youth Foundation (KYF)</strong> is a youth-driven organization committed to empowering young people, creating meaningful opportunities, and driving sustainable development across Khandesh. We unite passionate, cause-driven youth to address grassroots challenges and create lasting, positive change in society.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Our work spans key sectors including education, healthcare, environmental sustainability, social welfare, sports, arts and culture, technology, skill development, entrepreneurship, and community development. Through grassroots initiatives, youth leadership, innovation, collaboration, and community engagement, we strive to unlock the potential of young people, nurture local talent, promote equal opportunities, and build stronger, more inclusive communities.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border-l-4 border-l-[var(--color-primary)] border border-amber-200/60">
              <p className="text-sm sm:text-base text-stone-700 italic leading-relaxed">
                “At KYF, we believe that empowered youth are the driving force behind a progressive Khandesh. Our mission is to transform ideas into action, challenges into opportunities, and collective efforts into meaningful impact—contributing to the social, cultural, economic, and sustainable development of the entire Khandesh region.”
              </p>
            </div>
          </div>

          {/* Right Visual & Key Sectors Card */}
          <div className="lg:col-span-5">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-white via-amber-50/40 to-white border-2 border-amber-200/80 shadow-md text-center">
              <div className="relative w-44 h-28 mx-auto mb-4 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Khandesh Youth Foundation Logo"
                  fill
                  sizes="176px"
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="font-serif font-black text-xl text-stone-900">
                {siteConfig.name}
              </h3>
              <p className="text-xs uppercase tracking-wider font-extrabold text-[var(--color-primary)] mt-1 mb-4">
                {siteConfig.tagline}
              </p>

              <div className="space-y-2.5 text-xs text-stone-600 bg-white/90 p-4 rounded-2xl border border-stone-200/80 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-500">संस्था प्रकार (Type)</span>
                  <span className="font-bold text-stone-800">Youth NGO / संस्था</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-500">मुख्यालय (Headquarters)</span>
                  <span className="font-bold text-stone-800">धुळे, महाराष्ट्र (Dhule)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-500">कार्यक्षेत्र (Region)</span>
                  <span className="font-bold text-stone-800">संपूर्ण खान्देश परिसर</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Leadership & Founders' Desk Section */}
      <FoundersDesk />

      {/* SECTION 2: Our Story */}
      <Section id="our-story" bg="main">
        <SectionHeading
          badge="Our Story"
          title="Where Youth Power Meets Purpose"
          subtitle="Our Story: Why KYF was founded and the problem it set out to address."
        />

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-light">
            <strong className="font-medium text-stone-900">Khandesh Youth Foundation (KYF)</strong> was born from a vision to empower youth, address grassroots challenges, and create meaningful opportunities across Khandesh. We believe that when young people unite with purpose, they can turn local challenges into long lasting developments.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 border-l-4 border-l-[var(--color-primary)] bg-white shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[var(--color-primary)] flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">Our Mission</h3>
            <p className="text-stone-600 leading-relaxed text-sm">
              To empower the youth of Khandesh through accessible education, skill-building workshops, emergency healthcare support, and environmental stewardship, creating a self-sustaining and compassionate society.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 border-l-4 border-l-[var(--color-secondary)] bg-white shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">Our Vision</h3>
            <p className="text-stone-600 leading-relaxed text-sm">
              A vibrant Khandesh region where every young person has equal access to growth opportunities, healthcare support is readily available, and environmental consciousness is deeply ingrained in community life.
            </p>
          </Card>
        </div>
      </Section>

      {/* SECTION 3: Our Journey & Milestones */}
      <Section id="our-journey" bg="white">
        <SectionHeading
          badge="Our Journey"
          title="Every Step Creates an Impact"
          subtitle="Our Journey: Key milestones, events, and achievements with dates."
        />

        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            From our first initiatives to growing community engagement, every milestone reflects our commitment to youth leadership and the development of Khandesh. Our journey is shaped by the people we serve, the initiatives we lead, and the change we create together.
          </p>
        </div>

        {/* Milestone Timeline / Highlights */}
        <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          {/* Milestone 1: Genesis - COVID-19 Emergency Action */}
          <div className="rounded-3xl bg-gradient-to-br from-amber-50/80 via-white to-amber-100/40 p-6 sm:p-10 border border-amber-200/80 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200">
                    Genesis & Emergency Action
                  </span>
                  <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> 2020 - 2021
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                  Saving 500+ Lives During the COVID-19 Pandemic
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  Born during the COVID-19 pandemic, KYF began its journey by helping save nearly 500 lives through timely support and community action. When medical facilities faced shortages, our young volunteers stepped forward to coordinate blood, oxygen, plasma, medicine access, and food distribution across the region.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-white/90 rounded-2xl border border-amber-200 text-center shadow-xs">
                <span className="text-3xl sm:text-4xl font-extrabold text-[var(--color-primary)] font-serif">500+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 mt-1">Lives Saved</span>
                <span className="text-xs text-stone-500 mt-1">Through timely emergency support & community mobilization</span>
              </div>
            </div>
          </div>

          {/* Milestone 2: Knowledge Sharing & Philanthropic Drives */}
          <div className="rounded-3xl bg-white p-6 sm:p-10 border border-stone-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 border border-sky-200">
                Youth Empowerment & Philanthropy
              </span>
              <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Ongoing Drives
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-3">
              Knowledge Seminars & Drought-Relief Drives
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
              Since then, we have expanded our efforts through youth-focused initiatives, knowledge-sharing events like <strong className="text-stone-800">Let’s Talk Business</strong> and <strong className="text-stone-800">Let’s Talk Finance</strong>, and philanthropic drives like <strong className="text-stone-800">Ek Diwas Balirajasathi</strong>, providing educational kits and essentials to drought-affected students.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70">
                <h4 className="font-semibold text-stone-900 text-sm mb-1 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[var(--color-primary)]" /> Let’s Talk Business
                </h4>
                <p className="text-xs text-stone-600">Empowering youth entrepreneurship and local enterprise creation.</p>
              </div>

              <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-200/70">
                <h4 className="font-semibold text-stone-900 text-sm mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-700" /> Let’s Talk Finance
                </h4>
                <p className="text-xs text-stone-600">Instilling essential financial literacy and smart wealth habits.</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/70">
                <h4 className="font-semibold text-stone-900 text-sm mb-1 flex items-center gap-1.5">
                  <HandHeart className="w-4 h-4 text-emerald-700" /> Ek Diwas Balirajasathi
                </h4>
                <p className="text-xs text-stone-600">Providing educational kits and essentials to drought-affected students.</p>
              </div>
            </div>
          </div>

          {/* Milestone 3: Flagship Competitions & Talent Platforms */}
          <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-stone-950">
                  Flagship Platforms
                </span>
                <span className="text-xs text-stone-300">Nurturing Talent & Creativity</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                Flagship Cultural & Educational Initiatives
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-4xl mb-8">
                Through flagship initiatives such as <strong className="text-amber-200">Shabdabhushan</strong> (elocution), <strong className="text-amber-200">Swarnaakshar</strong> (essay writing), patriotic online art events, <strong className="text-amber-200">Yashogatha</strong> (celebrating Khandesh’s success stories), and <strong className="text-amber-200">KilleDar</strong> (traditional fort-making), we have created platforms for talent, creativity, learning, and opportunity. For three consecutive years, our flagship elocution competition has grown into one of Khandesh’s largest platforms for young orators, bringing together remarkable participation and talent.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {flagshipInitiatives.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-xs rounded-2xl p-5 border border-white/15 hover:border-amber-400/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-9 h-9 rounded-xl ${item.color} text-white flex items-center justify-center`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/20 text-white">
                            {item.badge}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-base text-white mb-1">{item.title}</h4>
                        <span className="text-xs text-amber-300/90 font-medium block mb-2">{item.category}</span>
                        <p className="text-xs text-stone-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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