'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import VolunteerCTA from '@/components/VolunteerCTA';
import { getEvents } from '@/lib/services/dataService';
import { EventItem } from '@/types';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Trophy,
  Phone,
  BookOpen,
  Sparkles,
  Flame,
  CheckCircle2,
} from 'lucide-react';

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>(() => getEvents());
  const [statusFilter, setStatusFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');
  const [previewPoster, setPreviewPoster] = useState<string | null>(null);
  const [activeBanner, setActiveBanner] = useState<'finale' | 'marathi' | 'english' | 'portrait'>('finale');

  const bannerMap = {
    finale: '/grand-finale.png',
    marathi: '/banner-marathi.png',
    english: '/banner-english.png',
    portrait: '/banner-portrait.jpg',
  };

  useEffect(() => {
    const handleDataChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.key === 'kyf_data_events') {
        setEvents(customEvent.detail.data as EventItem[]);
      }
    };

    window.addEventListener('kyf_data_change', handleDataChange);
    return () => window.removeEventListener('kyf_data_change', handleDataChange);
  }, []);

  const filtered =
    statusFilter === 'All' ? events : events.filter((e) => e.status === statusFilter);

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <Navbar />
      <NoticeBar />

      {/* Hero Banner with Richer Contrast & Bold Highlights */}
      <section className="bg-gradient-to-br from-[#3b1a08] via-[#5D3A1A] to-[#251004] text-white py-12 sm:py-16 text-center relative overflow-hidden border-b-4 border-amber-400 shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider rounded-full bg-amber-400 text-stone-950 shadow-lg mb-4">
            <Flame className="w-4 h-4 fill-stone-950 text-stone-950 animate-pulse" />
            <span>खान्देशस्तरीय भव्य उपक्रम • Khandesh-Level Competitions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white drop-shadow-md">
            शब्दभूषण २०२६ • Shabdabhushan 2026
          </h1>

          <p className="mt-3 text-amber-200 text-base sm:text-xl max-w-3xl mx-auto font-bold leading-relaxed">
            खान्देशातील सर्वात भव्य खान्देशस्तरीय वक्तृत्व स्पर्धा | Khandesh&apos;s Grandest Khandesh-Level Elocution Competition
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 bg-amber-400 text-stone-950 font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md">
              <Trophy className="w-4 h-4 text-stone-950" />
              <span>महाअंतिम फेरी • २५ ऑक्टोबर २०२६ (Grand Finale)</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-xl border border-white/30 backdrop-blur-xs">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>ठिकाण: हिरे भवन, धुळे (Hire Bhavan, Dhule)</span>
            </span>
          </div>
        </div>
      </section>

      <Section bg="main" className="py-10">
        {/* Status Filter Buttons */}
        <div className="flex justify-center items-center gap-3 mb-10">
          {(['All', 'Upcoming', 'Completed'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition duration-200 cursor-pointer shadow-xs ${
                statusFilter === st
                  ? 'bg-[var(--color-primary)] text-white shadow-lg ring-2 ring-amber-400'
                  : 'bg-white text-stone-800 hover:bg-amber-50 border-2 border-stone-300'
              }`}
            >
              {st === 'All' ? 'All (सर्व उपक्रम)' : st === 'Upcoming' ? 'Upcoming (आगामी स्पर्धा)' : 'Completed (पूर्ण झालेले)'}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border-2 border-stone-200 max-w-lg mx-auto shadow-sm">
            <p className="text-stone-700 font-bold text-lg">No events found in this category.</p>
          </div>
        ) : (
          <div className="space-y-12 max-w-5xl mx-auto">
            {filtered.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border-2 border-amber-400/90 shadow-2xl bg-white rounded-3xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Poster Image Column */}
                  <div className="lg:col-span-5 bg-gradient-to-b from-[#1c120c] via-[#2d1c12] to-[#120a06] p-4 sm:p-7 flex flex-col items-center justify-between text-center relative group">
                    <div className="w-full flex items-center justify-between gap-2 mb-2.5 z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-black bg-amber-400 text-stone-950 flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
                        खान्देशस्तरीय स्पर्धा
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-black bg-white/20 text-white border border-white/30">
                        {event.category}
                      </span>
                    </div>

                    {/* Banner Selector Tabs */}
                    <div className="w-full max-w-[340px] grid grid-cols-4 gap-1 p-1 bg-black/50 rounded-xl mb-2 border border-amber-400/30">
                      <button
                        type="button"
                        onClick={() => setActiveBanner('finale')}
                        className={`py-1 px-1 rounded-lg text-[9px] sm:text-[10px] font-black transition truncate ${
                          activeBanner === 'finale'
                            ? 'bg-amber-400 text-stone-950 shadow-xs'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        महाअंतिम फेरी
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveBanner('marathi')}
                        className={`py-1 px-1 rounded-lg text-[9px] sm:text-[10px] font-black transition truncate ${
                          activeBanner === 'marathi'
                            ? 'bg-amber-400 text-stone-950 shadow-xs'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        मराठी
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveBanner('english')}
                        className={`py-1 px-1 rounded-lg text-[9px] sm:text-[10px] font-black transition truncate ${
                          activeBanner === 'english'
                            ? 'bg-amber-400 text-stone-950 shadow-xs'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        English
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveBanner('portrait')}
                        className={`py-1 px-1 rounded-lg text-[9px] sm:text-[10px] font-black transition truncate ${
                          activeBanner === 'portrait'
                            ? 'bg-amber-400 text-stone-950 shadow-xs'
                            : 'text-stone-300 hover:text-white'
                        }`}
                      >
                        उभा पोस्टर
                      </button>
                    </div>

                    <div
                      onClick={() => setPreviewPoster(bannerMap[activeBanner])}
                      className={`relative w-full max-w-[340px] ${
                        activeBanner === 'finale'
                          ? 'aspect-[4/5]'
                          : activeBanner === 'portrait'
                          ? 'aspect-[3/4]'
                          : 'aspect-[16/10.5]'
                      } rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/60 cursor-pointer group-hover:scale-[1.02] transition-transform duration-300 my-1.5 bg-stone-950`}
                    >
                      <Image
                        src={bannerMap[activeBanner]}
                        alt="शब्दभूषण २०२६ अधिकृत पोस्टर"
                        fill
                        sizes="(max-width: 1024px) 100vw, 420px"
                        className="object-contain"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-black text-sm gap-2 backdrop-blur-xs">
                        <span>🔍 Click to View Full Poster</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setPreviewPoster(bannerMap[activeBanner])}
                      className="text-amber-300 font-bold text-xs mt-1.5 flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      <span>🔍 Click poster to view in high resolution</span>
                    </button>

                    {/* Grand Finale Date & Venue Highlight */}
                    <div className="mt-4 w-full max-w-[320px] py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 border-2 border-amber-300 text-xs sm:text-sm font-black flex items-center justify-between shadow-md">
                      <span>महाअंतिम फेरी (Grand Finale)</span>
                      <span className="text-xs sm:text-sm font-black text-stone-950">२५ ऑक्टोबर २०२६</span>
                    </div>

                    {/* Languages & Age Group */}
                    <div className="w-full max-w-[320px] mt-3 grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-black/50 border border-amber-400/30 text-center">
                        <span className="text-amber-300 font-black block mb-0.5">माध्यम (Languages)</span>
                        <span className="font-bold text-white text-[11px]">मराठी | अहिराणी | Eng</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-black/50 border border-amber-400/30 text-center">
                        <span className="text-amber-300 font-black block mb-0.5">वयोगट (Age Groups)</span>
                        <span className="font-bold text-white text-[11px]">14-18 | 18-25 | 25+</span>
                      </div>
                    </div>
                  </div>

                  {/* High Contrast, Bold Details Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col bg-[#FFFCF8]">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-100/80 px-3 py-1 rounded-lg border border-amber-300">
                        खान्देश युथ फाउंडेशन आयोजित • Organised by KYF
                      </span>
                      <span className="px-3.5 py-1 rounded-full text-xs font-black bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 shadow-xs flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-stone-950" />
                        <span>महाअंतिम फेरी (Grand Finale)</span>
                      </span>
                    </div>

                    {/* Main Title & Subtitle */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-stone-950 mb-1 leading-tight">
                      शब्दभूषण २०२६ • महाअंतिम फेरी
                    </h2>
                    <p className="text-base sm:text-lg font-extrabold text-[#5D3A1A] mb-4">
                      खान्देशातील सर्वात भव्य खान्देशस्तरीय वक्तृत्व स्पर्धा • Grand Finale 2026
                    </p>

                    {/* Overview Box */}
                    <div className="mb-5 p-3.5 rounded-2xl bg-amber-50/80 border-2 border-amber-200/80">
                      <p className="text-stone-950 font-bold text-sm leading-relaxed">
                        खान्देश युथ फाउंडेशन आयोजित खान्देशातील सर्वात भव्य खान्देशस्तरीय वक्तृत्व स्पर्धेची महाअंतिम फेरी. खान्देशातील सर्वोत्कृष्ट वक्ते आता महाअंतिम फेरीत आमनेसामने!
                      </p>
                      <p className="text-stone-700 font-semibold text-xs mt-1.5 italic">
                        (Grand Finale of Khandesh&apos;s grandest elocution competition bringing together the finest young orators from across the region.)
                      </p>
                    </div>

                    {/* Dates & Locations */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-white rounded-2xl border-2 border-stone-200 text-xs sm:text-sm text-stone-900 mb-5 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                          <Calendar className="w-4 h-4 text-[#5D3A1A]" />
                        </div>
                        <div>
                          <span className="font-black block text-stone-950">
                            दिनांक : २५ ऑक्टोबर २०२६
                          </span>
                          <span className="text-stone-600 font-bold text-[11px]">वेळ : सकाळी ८ ते संध्या. ६ (Sunday)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-rose-600" />
                        </div>
                        <div>
                          <span className="font-black block text-stone-950">
                            ठिकाण : हिरे भवन, धुळे
                          </span>
                          <span className="text-stone-600 font-bold text-[11px]">सहकार्य : धुळे मनपा व दैनिक सकाळ</span>
                        </div>
                      </div>
                    </div>

                    {/* Cash Prizes */}
                    <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-100/90 via-amber-50 to-orange-100/90 border-2 border-amber-300 shadow-xs">
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="w-5 h-5 text-amber-900" />
                        <h3 className="font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-amber-950">
                          भव्य रोख पारितोषिके • Prestigious Cash Prizes
                        </h3>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 text-center">
                        <div className="px-1 py-2.5 sm:p-3 rounded-2xl bg-white border-2 border-amber-300/80 shadow-xs flex flex-col justify-center">
                          <p className="text-[10px] sm:text-xs font-black text-stone-600 uppercase truncate">
                            प्रथम / 1st
                          </p>
                          <p className="text-xs sm:text-base md:text-xl font-black text-[#5D3A1A] mt-0.5 whitespace-nowrap tracking-tight sm:tracking-normal">
                            ₹१०,०००/-
                          </p>
                        </div>
                        <div className="px-1 py-2.5 sm:p-3 rounded-2xl bg-white border-2 border-amber-300/80 shadow-xs flex flex-col justify-center">
                          <p className="text-[10px] sm:text-xs font-black text-stone-600 uppercase truncate">
                            द्वितीय / 2nd
                          </p>
                          <p className="text-xs sm:text-base md:text-xl font-black text-[#5D3A1A] mt-0.5 whitespace-nowrap tracking-tight sm:tracking-normal">
                            ₹७,०००/-
                          </p>
                        </div>
                        <div className="px-1 py-2.5 sm:p-3 rounded-2xl bg-white border-2 border-amber-300/80 shadow-xs flex flex-col justify-center">
                          <p className="text-[10px] sm:text-xs font-black text-stone-600 uppercase truncate">
                            तृतीय / 3rd
                          </p>
                          <p className="text-xs sm:text-base md:text-xl font-black text-[#5D3A1A] mt-0.5 whitespace-nowrap tracking-tight sm:tracking-normal">
                            ₹५,०००/-
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Topics / विषय (Marathi + English) */}
                    <div className="mb-5 p-4 rounded-2xl bg-white border-2 border-stone-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-stone-100">
                        <BookOpen className="w-4 h-4 text-[#5D3A1A]" />
                        <h3 className="font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-stone-950">
                          स्पर्धेचे विषय • Competition Topics
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#5D3A1A] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                            १
                          </span>
                          <div className="leading-snug">
                            <span className="font-black block text-stone-950 text-sm">संवादाने भविष्य घडते.</span>
                            <span className="text-stone-600 font-bold text-xs">Dialogue shapes the future.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#5D3A1A] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                            २
                          </span>
                          <div className="leading-snug">
                            <span className="font-black block text-stone-950 text-sm">बलसागर भारत होवो, विश्वात शोभुनी राहो.</span>
                            <span className="text-stone-600 font-bold text-xs">Let India become mighty and shine across the universe.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#5D3A1A] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                            ३
                          </span>
                          <div className="leading-snug">
                            <span className="font-black block text-stone-950 text-sm">वृक्षवल्ली आम्हा सोयरे वनचरे : माझी वसुंधरा, माझं कुटुंब.</span>
                            <span className="text-stone-600 font-bold text-xs">Trees and nature are our kin: My Earth, My Family.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#5D3A1A] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                            ४
                          </span>
                          <div className="leading-snug">
                            <span className="font-black block text-stone-950 text-sm">शाश्वत विकास : विकसित खान्देशाचे महत्त्वपूर्ण उद्दिष्ट.</span>
                            <span className="text-stone-600 font-bold text-xs">Sustainable Development: A crucial goal for a developed Khandesh.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#5D3A1A] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                            ५
                          </span>
                          <div className="leading-snug">
                            <span className="font-black block text-stone-950 text-sm">आजचा युवक खान्देशाचे भविष्य : शेती, उद्योग आणि विकास.</span>
                            <span className="text-stone-600 font-bold text-xs">Today&apos;s Youth, Khandesh&apos;s Future: Agriculture, Industry, and Development.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#5D3A1A] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                            ६
                          </span>
                          <div className="leading-snug">
                            <span className="font-black block text-stone-950 text-sm">शिक्षण हे वाघिणीचे दूध आहे: शिका, समृद्ध व्हा आणि देशाला नवी दिशा द्या.</span>
                            <span className="text-stone-600 font-bold text-xs">Education is a tiger&apos;s boon: Educate, prosper and direct the nation.</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Timeline / फेऱ्या व वेळापत्रक with Registration highlight */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2.5">
                        <Clock className="w-4 h-4 text-[#5D3A1A]" />
                        <h3 className="font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-stone-950">
                          फेऱ्या व वेळापत्रक • Competition Rounds & Schedule
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        <div className="p-3 rounded-2xl bg-stone-100 border-2 border-stone-200 text-center shadow-xs opacity-80">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-black bg-stone-500 text-white mb-1">
                            पूर्ण (Closed)
                          </span>
                          <p className="text-xs font-black text-stone-950">नोंदणी फेरी</p>
                          <p className="text-[10px] text-stone-600 font-bold">Registration</p>
                          <p className="text-xs font-black text-stone-700 mt-1">
                            २९ ऑग - २० सप्टें
                          </p>
                        </div>
                        <div className="p-3 rounded-2xl bg-stone-100 border-2 border-stone-200 text-center shadow-xs opacity-80">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-black bg-stone-500 text-white mb-1">
                            पूर्ण (Completed)
                          </span>
                          <p className="text-xs font-black text-stone-950">प्राथमिक फेरी</p>
                          <p className="text-[10px] text-stone-600 font-bold">Preliminary Round</p>
                          <p className="text-xs font-black text-stone-700 mt-1">
                            २६ व २७ सप्टेंबर
                          </p>
                        </div>
                        <div className="p-3 rounded-2xl bg-stone-100 border-2 border-stone-200 text-center shadow-xs opacity-80">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-black bg-stone-500 text-white mb-1">
                            पूर्ण (Completed)
                          </span>
                          <p className="text-xs font-black text-stone-950">जिल्हास्तरीय फेरी</p>
                          <p className="text-[10px] text-stone-600 font-bold">District Round</p>
                          <p className="text-xs font-black text-stone-700 mt-1">
                            २ ते ४ ऑक्टोबर
                          </p>
                        </div>
                        <div className="p-3 rounded-2xl bg-amber-100 border-2 border-amber-400 text-center shadow-md relative ring-2 ring-amber-400/50">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-black bg-red-600 text-white mb-1 animate-pulse">
                            आगामी • Upcoming
                          </span>
                          <p className="text-xs font-black text-stone-950">महाअंतिम फेरी</p>
                          <p className="text-[10px] text-stone-600 font-bold">Grand Finale</p>
                          <p className="text-xs font-black text-[#5D3A1A] mt-1">
                            २५ ऑक्टोबर (हिरे भवन)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Helpline Contacts */}
                    <div className="mb-6 p-4 rounded-2xl bg-stone-50 border-2 border-stone-200">
                      <div className="flex items-center gap-2 mb-2.5">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <h3 className="font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-stone-950">
                          जिल्हा संपर्क क्रमांक • District Helpline Numbers
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                        <a
                          href="tel:8208000141"
                          className="p-2.5 rounded-xl bg-white border-2 border-stone-200 hover:border-amber-500 text-center transition group shadow-xs"
                        >
                          <span className="block text-[11px] font-black text-stone-700">धुळे (Dhule)</span>
                          <span className="block text-sm font-black text-[#5D3A1A] group-hover:underline mt-0.5">
                            8208000141
                          </span>
                        </a>
                        <a
                          href="tel:9373159728"
                          className="p-2.5 rounded-xl bg-white border-2 border-stone-200 hover:border-amber-500 text-center transition group shadow-xs"
                        >
                          <span className="block text-[11px] font-black text-stone-700">जळगाव (Jalgaon)</span>
                          <span className="block text-sm font-black text-[#5D3A1A] group-hover:underline mt-0.5">
                            9373159728
                          </span>
                        </a>
                        <a
                          href="tel:9322141593"
                          className="p-2.5 rounded-xl bg-white border-2 border-stone-200 hover:border-amber-500 text-center transition group shadow-xs"
                        >
                          <span className="block text-[11px] font-black text-stone-700">मालेगाव (Malegaon)</span>
                          <span className="block text-sm font-black text-[#5D3A1A] group-hover:underline mt-0.5">
                            9322141593
                          </span>
                        </a>
                        <a
                          href="tel:9561927351"
                          className="p-2.5 rounded-xl bg-white border-2 border-stone-200 hover:border-amber-500 text-center transition group shadow-xs"
                        >
                          <span className="block text-[11px] font-black text-stone-700">नंदुरबार (Nandurbar)</span>
                          <span className="block text-sm font-black text-[#5D3A1A] group-hover:underline mt-0.5">
                            9561927351
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="mt-auto pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href="https://maps.google.com/?q=Hire+Bhavan+Dhule"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5D3A1A] to-[#422209] hover:from-[#422209] hover:to-[#2e1504] text-white px-6 py-4 rounded-2xl font-black text-sm sm:text-base tracking-wide transition transform hover:scale-[1.02] active:scale-[0.98] shadow-xl"
                      >
                        <MapPin className="w-5 h-5 text-amber-300" />
                        <span>कार्यक्रम स्थळ / नकाशा (Hire Bhavan, Dhule)</span>
                        <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                      </a>

                      <button
                        onClick={() => setPreviewPoster(bannerMap[activeBanner])}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-sm border-2 border-amber-400/80 bg-amber-400/10 hover:bg-amber-400/20 text-stone-950 transition cursor-pointer"
                      >
                        <span>🔍 पोस्टर पहा (View Poster)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* Poster Lightbox Modal */}
      <Modal
        isOpen={!!previewPoster}
        onClose={() => setPreviewPoster(null)}
        title="शब्दभूषण २०२६ - अधिकृत स्पर्धा पोस्टर व माहिती"
        maxWidth="2xl"
      >
        {previewPoster && (
          <div className="space-y-3">
            {/* Banner switcher inside lightbox */}
            <div className="grid grid-cols-4 gap-1.5 pb-1">
              <button
                type="button"
                onClick={() => setPreviewPoster('/grand-finale.png')}
                className={`py-1.5 px-2 rounded-xl text-xs font-black transition truncate ${
                  previewPoster === '/grand-finale.png'
                    ? 'bg-[#5D3A1A] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                महाअंतिम फेरी
              </button>
              <button
                type="button"
                onClick={() => setPreviewPoster('/banner-marathi.png')}
                className={`py-1.5 px-2 rounded-xl text-xs font-black transition truncate ${
                  previewPoster === '/banner-marathi.png'
                    ? 'bg-[#5D3A1A] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                मराठी बॅनर
              </button>
              <button
                type="button"
                onClick={() => setPreviewPoster('/banner-english.png')}
                className={`py-1.5 px-2 rounded-xl text-xs font-black transition truncate ${
                  previewPoster === '/banner-english.png'
                    ? 'bg-[#5D3A1A] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setPreviewPoster('/banner-portrait.jpg')}
                className={`py-1.5 px-2 rounded-xl text-xs font-black transition truncate ${
                  previewPoster === '/banner-portrait.jpg' || previewPoster === '/shabdabushan.png'
                    ? 'bg-[#5D3A1A] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                उभा पोस्टर
              </button>
            </div>

            <div
              className={`relative w-full mx-auto ${
                previewPoster === '/grand-finale.png'
                  ? 'max-w-md aspect-[4/5]'
                  : previewPoster === '/banner-portrait.jpg' || previewPoster === '/shabdabushan.png'
                  ? 'max-w-md aspect-[3/4]'
                  : 'max-w-2xl aspect-[16/10.5]'
              } rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-300 bg-stone-950`}
            >
              <Image
                src={previewPoster}
                alt="Shabdabhushan 2026 Poster"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://maps.google.com/?q=Hire+Bhavan+Dhule"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5D3A1A] hover:bg-[#422209] text-white px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition shadow-lg"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>कार्यक्रम स्थळ (Hire Bhavan, Dhule)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setPreviewPoster(null)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-black text-xs sm:text-sm bg-stone-200 text-stone-800 hover:bg-stone-300 transition cursor-pointer"
              >
                बंद करा (Close)
              </button>
            </div>
          </div>
        )}
      </Modal>

      <VolunteerCTA />
      <Footer />
    </main>
  );
}
