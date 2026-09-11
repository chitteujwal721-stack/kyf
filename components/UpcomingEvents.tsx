'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import FormField from '@/components/ui/FormField';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { getEvents } from '@/lib/services/dataService';
import { EventItem } from '@/types';
import {
  Calendar,
  Clock,
  MapPin,
  Check,
  Trophy,
  BookOpen,
  Phone,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function UpcomingEvents() {
  const [events, setEvents] = useState<EventItem[]>(() => getEvents());
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [previewPoster, setPreviewPoster] = useState<string | null>(null);
  const [activeBanner, setActiveBanner] = useState<'marathi' | 'english' | 'portrait'>('marathi');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({ name: '', phone: '', email: '', message: '' });

  const bannerMap = {
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

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setSelectedEvent(null);
      setVolunteerForm({ name: '', phone: '', email: '', message: '' });
    }, 2500);
  };

  const upcomingList = events.filter((evt) => evt.status === 'Upcoming');
  const displayEvents = upcomingList.length > 0 ? upcomingList : events;

  return (
    <Section id="events" bg="main" className="pt-8 pb-14 border-b border-amber-200/60">
      <SectionHeading
        badge="🚩 भव्य खान्देशस्तरीय स्पर्धा • Khandesh-Level Competition"
        title="शब्दभूषण २०२६ • Shabdabhushan 2026"
        subtitle="खान्देशातील सर्वात भव्य खान्देशस्तरीय वक्तृत्व स्पर्धा | Khandesh's Grandest Khandesh-Level Elocution & Oratory Competition"
      />

      <div className="space-y-8 max-w-6xl mx-auto">
        {displayEvents.map((event) => (
          <Card
            key={event.id}
            className="overflow-hidden border-2 border-amber-400/90 shadow-2xl bg-white rounded-3xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Poster Column with New Official Banners */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#1c120c] via-[#2d1c12] to-[#120a06] p-4 sm:p-7 flex flex-col items-center justify-between text-white relative">
                <div className="w-full flex items-center justify-between z-10 mb-2.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black bg-amber-400 text-stone-950 flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 fill-stone-950" />
                    खान्देशस्तरीय वक्तृत्व स्पर्धा
                  </span>
                  <Badge variant="primary">{event.category}</Badge>
                </div>

                {/* Banner Selector Tabs */}
                <div className="w-full max-w-[340px] flex items-center justify-center gap-1 p-1 bg-black/50 rounded-xl mb-2 border border-amber-400/30">
                  <button
                    type="button"
                    onClick={() => setActiveBanner('marathi')}
                    className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] sm:text-[11px] font-black transition ${
                      activeBanner === 'marathi'
                        ? 'bg-amber-400 text-stone-950 shadow-xs'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    मराठी बॅनर
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveBanner('english')}
                    className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] sm:text-[11px] font-black transition ${
                      activeBanner === 'english'
                        ? 'bg-amber-400 text-stone-950 shadow-xs'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    English Banner
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveBanner('portrait')}
                    className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] sm:text-[11px] font-black transition ${
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
                    activeBanner === 'portrait' ? 'aspect-[3/4]' : 'aspect-[16/10.5]'
                  } rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/50 cursor-pointer group my-1.5 bg-stone-950`}
                >
                  <Image
                    src={bannerMap[activeBanner]}
                    alt="शब्दभूषण २०२६ अधिकृत बॅनर"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-black text-xs gap-1.5 backdrop-blur-xs">
                    <span>🔍 Click to View Full Banner</span>
                  </div>
                </div>

                {/* Entry Fee Box */}
                <div className="w-full max-w-[340px] py-2 px-4 rounded-xl bg-amber-400 text-stone-950 border border-amber-300 text-xs sm:text-sm font-black flex items-center justify-between mt-2 shadow-md">
                  <span>नोंदणी शुल्क (Registration Fee)</span>
                  <span className="text-base font-black text-stone-950">₹१५०/-</span>
                </div>

                {/* Languages and Age group */}
                <div className="w-full max-w-[340px] mt-2.5 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-xl bg-black/50 border border-amber-400/30 text-center">
                    <span className="text-amber-300 font-black block mb-0.5 text-[10px]">माध्यम (Languages)</span>
                    <span className="font-bold text-white text-[11px]">मराठी | अहिराणी | English</span>
                  </div>
                  <div className="p-2 rounded-xl bg-black/50 border border-amber-400/30 text-center">
                    <span className="text-amber-300 font-black block mb-0.5 text-[10px]">वयोगट (Age Groups)</span>
                    <span className="font-bold text-white text-[11px]">14-18 | 18-25 | 25+ Open</span>
                  </div>
                </div>
              </div>

              {/* Both Marathi & English Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col bg-[#FFFCF8]">
                {/* Organiser tag & status */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-100/80 px-3 py-1 rounded-lg border border-amber-300">
                    खान्देश युथ फाउंडेशन आयोजित • Organised by KYF
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>नोंदणी सुरू (Registration Open)</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-stone-950 mb-1 leading-tight">
                  शब्दभूषण २०२६ • Shabdabhushan 2026
                </h2>
                <p className="text-sm sm:text-base font-extrabold text-[#5D3A1A] mb-4">
                  खान्देशातील सर्वात भव्य खान्देशस्तरीय वक्तृत्व स्पर्धा • Khandesh&apos;s Grandest Khandesh-Level Elocution Competition
                </p>

                {/* Date & Location Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-white rounded-2xl border-2 border-stone-200 text-xs text-stone-900 mb-5 shadow-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-[#5D3A1A]" />
                    </div>
                    <div>
                      <span className="font-black block text-stone-950">
                        कालावधी (Dates): २९ ऑगस्ट ते २५ ऑक्टोबर २०२६
                      </span>
                      <span className="text-stone-600 font-bold text-[11px]">29 August to 25 October 2026</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-rose-600" />
                    </div>
                    <div>
                      <span className="font-black block text-stone-950">
                        जिल्हे (Districts): धुळे, जळगाव, मालेगाव, नंदुरबार
                      </span>
                      <span className="text-stone-600 font-bold text-[11px]">Khandesh Region (North Maharashtra)</span>
                    </div>
                  </div>
                </div>

                {/* Cash Prizes */}
                <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-amber-100/90 via-amber-50 to-orange-100/90 border-2 border-amber-300 shadow-xs">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Trophy className="w-5 h-5 text-amber-900" />
                    <h4 className="font-serif font-black text-xs uppercase tracking-wider text-amber-950">
                      भव्य रोख पारितोषिके • Prestigious Cash Prizes
                    </h4>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 text-center">
                    <div className="px-1 py-2.5 sm:p-3 rounded-2xl bg-white border-2 border-amber-300/80 shadow-xs flex flex-col justify-center">
                      <p className="text-[10px] sm:text-[11px] font-black text-stone-600 uppercase truncate">
                        प्रथम / 1st Prize
                      </p>
                      <p className="text-xs sm:text-base md:text-xl font-black text-[#5D3A1A] mt-0.5 whitespace-nowrap tracking-tight sm:tracking-normal">
                        ₹१०,०००/-
                      </p>
                    </div>
                    <div className="px-1 py-2.5 sm:p-3 rounded-2xl bg-white border-2 border-amber-300/80 shadow-xs flex flex-col justify-center">
                      <p className="text-[10px] sm:text-[11px] font-black text-stone-600 uppercase truncate">
                        द्वितीय / 2nd Prize
                      </p>
                      <p className="text-xs sm:text-base md:text-xl font-black text-[#5D3A1A] mt-0.5 whitespace-nowrap tracking-tight sm:tracking-normal">
                        ₹७,०००/-
                      </p>
                    </div>
                    <div className="px-1 py-2.5 sm:p-3 rounded-2xl bg-white border-2 border-amber-300/80 shadow-xs flex flex-col justify-center">
                      <p className="text-[10px] sm:text-[11px] font-black text-stone-600 uppercase truncate">
                        तृतीय / 3rd Prize
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
                    <h4 className="font-serif font-black text-xs uppercase tracking-wider text-stone-950">
                      स्पर्धेचे विषय • Competition Topics
                    </h4>
                  </div>
                  <ul className="space-y-3 text-xs text-stone-800">
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

                {/* Timeline / फेऱ्या व वेळापत्रक */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Clock className="w-4 h-4 text-[#5D3A1A]" />
                    <h4 className="font-serif font-black text-xs uppercase tracking-wider text-stone-950">
                      फेऱ्या व वेळापत्रक • Competition Rounds & Schedule
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div className="p-3 rounded-2xl bg-amber-100/90 border-2 border-amber-400 text-center shadow-xs">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-black bg-red-600 text-white mb-1">
                        मुदतवाढ: २० सप्टें
                      </span>
                      <p className="text-xs font-black text-stone-950">नोंदणी मुदतवाढ</p>
                      <p className="text-[10px] text-stone-600 font-bold">Extended Deadline</p>
                      <p className="text-xs font-black text-[#5D3A1A] mt-1">
                        २९ ऑग - २० सप्टें
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border-2 border-stone-200 text-center shadow-xs">
                      <p className="text-xs font-black text-stone-950">प्राथमिक फेरी</p>
                      <p className="text-[10px] text-stone-600 font-bold">Preliminary</p>
                      <p className="text-xs font-black text-[#5D3A1A] mt-1">
                        २६ व २७ सप्टेंबर
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border-2 border-stone-200 text-center shadow-xs">
                      <p className="text-xs font-black text-stone-950">जिल्हास्तरीय फेरी</p>
                      <p className="text-[10px] text-stone-600 font-bold">District Round</p>
                      <p className="text-xs font-black text-[#5D3A1A] mt-1">
                        २ ते ४ ऑक्टोबर
                      </p>
                    </div>
                    <div className="p-3 rounded-2xl bg-white border-2 border-stone-200 text-center shadow-xs">
                      <p className="text-xs font-black text-stone-950">महाअंतिम फेरी</p>
                      <p className="text-[10px] text-stone-600 font-bold">Grand Finale</p>
                      <p className="text-xs font-black text-[#5D3A1A] mt-1">
                        २५ ऑक्टोबर
                      </p>
                    </div>
                  </div>
                </div>

                {/* Helpline Contacts */}
                <div className="mb-6 p-4 rounded-2xl bg-stone-50 border-2 border-stone-200">
                  <div className="flex items-center gap-2 mb-2.5">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <h4 className="font-serif font-black text-xs uppercase tracking-wider text-stone-950">
                      जिल्हा संपर्क क्रमांक • District Helpline Numbers
                    </h4>
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

                {/* Actions */}
                <div className="mt-auto pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://forms.gle/xW3AqRnGNVKewGF4A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#5D3A1A] to-[#422209] hover:from-[#422209] hover:to-[#2e1504] text-white px-6 py-4 rounded-2xl font-black text-sm sm:text-base tracking-wide transition shadow-xl"
                  >
                    <span>नोंदणी फॉर्म भरा (Online Registration Form)</span>
                    <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                  </a>

                  <button
                    onClick={() => setPreviewPoster(event.image || '/shabdabushan.png')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-black text-sm border-2 border-stone-300 hover:bg-stone-100 text-stone-900 transition"
                  >
                    <span>पोस्टर पहा (View Poster)</span>
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Poster Lightbox Modal */}
      <Modal
        isOpen={!!previewPoster}
        onClose={() => setPreviewPoster(null)}
        title="शब्दभूषण २०२६ - अधिकृत स्पर्धा बॅनर व माहिती (Official Banners)"
        maxWidth="2xl"
      >
        {previewPoster && (
          <div className="space-y-3">
            {/* Banner switcher inside lightbox */}
            <div className="flex items-center justify-center gap-1.5 pb-1">
              <button
                type="button"
                onClick={() => setPreviewPoster('/banner-marathi.png')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
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
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                  previewPoster === '/banner-english.png'
                    ? 'bg-[#5D3A1A] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                English Banner
              </button>
              <button
                type="button"
                onClick={() => setPreviewPoster('/banner-portrait.jpg')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                  previewPoster === '/banner-portrait.jpg' || previewPoster === '/shabdabushan.png'
                    ? 'bg-[#5D3A1A] text-white shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                उभा पोस्टर (Portrait)
              </button>
            </div>

            <div
              className={`relative w-full mx-auto ${
                previewPoster === '/banner-portrait.jpg' || previewPoster === '/shabdabushan.png'
                  ? 'max-w-md aspect-[3/4]'
                  : 'max-w-2xl aspect-[16/10.5]'
              } rounded-2xl overflow-hidden shadow-2xl border-2 border-stone-300 bg-stone-950`}
            >
              <Image
                src={previewPoster}
                alt="Shabdbhushan 2026 Official Banner"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center pt-2">
              <a
                href="https://forms.gle/xW3AqRnGNVKewGF4A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5D3A1A] hover:bg-[#422209] text-white px-6 py-3 rounded-xl font-black text-xs sm:text-sm transition shadow-lg"
              >
                <span>नोंदणी फॉर्मवर जा (Open Online Form)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </Modal>

      {/* Registration Modal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent ? `Register for ${selectedEvent.title}` : ''}
      >
        {registerSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-stone-900">Registration Received!</h4>
            <p className="text-sm text-stone-600">
              Thank you for registering. Our team will contact you with location and schedule details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <FormField
              label="Full Name (पूर्ण नाव)"
              id="name"
              required
              value={volunteerForm.name}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
              placeholder="e.g. Rahul Patil"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Phone Number (मोबाईल क्र.)"
                id="phone"
                type="tel"
                required
                value={volunteerForm.phone}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                placeholder="+91 9421098906"
              />
              <FormField
                label="Email Address (ईमेल)"
                id="email"
                type="email"
                value={volunteerForm.email}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                placeholder="you@domain.com"
              />
            </div>
            <FormField
              label="District / Notes (जिल्हा व इतर माहिती)"
              id="message"
              type="textarea"
              rows={2}
              value={volunteerForm.message}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
              placeholder="Enter your district (Dhule, Jalgaon, Malegaon, Nandurbar)..."
            />
            <div className="pt-2">
              <PrimaryButton type="submit" variant="primary" className="w-full">
                Confirm Registration (नोंदणी पूर्ण करा)
              </PrimaryButton>
            </div>
          </form>
        )}
      </Modal>
    </Section>
  );
}