'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import Modal from '@/components/ui/Modal';
import { Maximize2, Quote, ExternalLink, Sparkles } from 'lucide-react';

interface LeaderItem {
  id: string;
  name: string;
  nameMarathi: string;
  role: string;
  roleMarathi: string;
  deskBadge: string;
  image: string;
  quote: string;
  tagline: string;
}

const leaders: LeaderItem[] = [
  {
    id: 'kshitij',
    name: 'Kshitij Kiran Salunke',
    nameMarathi: 'क्षितिज किरण साळुंके',
    role: 'Founder & Past President',
    roleMarathi: 'संस्थापक आणि मा. अध्यक्ष, धुळे युथ क्लब',
    deskBadge: "Founder's Desk",
    image: '/Kshitij salunke  (1).png',
    quote:
      'धुळे युथ क्लब ही जनतेची चळवळ आहे. आपण बाहेर शोधत असलेल्या संधी आपल्या मातीत निर्माण करण्याचा हा प्रयत्न आहे. उज्ज्वल भविष्यासाठी तेजस्वी तरुणांचे व्यासपीठ उभे करण्याचे ध्येय आम्ही ठेवले आहे.',
    tagline: '“Together we can, together we will — एकत्र येऊ, आणि एकत्र साध्य करू!”',
  },
  {
    id: 'dipesh',
    name: 'Dipesh Shyam Agrawal',
    nameMarathi: 'दीपेश श्याम अग्रवाल',
    role: 'Co-Founder & President',
    roleMarathi: 'सह संस्थापक आणि अध्यक्ष, धुळे युथ क्लब',
    deskBadge: "Co-Founder's Desk",
    image: '/Dipesh Agrawal.png',
    quote:
      'धुळे युथ क्लब ही फक्त एक संस्था नाही, तर आपल्या समाजाला सक्षम, प्रेरित आणि उन्नत करण्याची एक चळवळ आहे. एकत्र येऊन आपण प्रगती, एकता आणि अर्थपूर्ण बदल यासाठी प्रयत्नशील आहोत.',
    tagline: '“चला, उज्ज्वल भविष्य घडवूया — एकेक पाऊल टाकत!”',
  },
];

export default function FoundersDesk() {
  const [activeLeader, setActiveLeader] = useState<LeaderItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLeader(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-amber-50/25 to-white border-t border-b border-amber-200/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="नेतृत्व व प्रेरणा • Founders' Desk"
          title="संस्थापक मनोगत व विचार"
          subtitle="Vision, philosophy, and guidance from the founding leadership of the foundation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {leaders.map((leader) => (
            <Card
              key={leader.id}
              className="overflow-hidden border-2 border-amber-300/80 shadow-md hover:shadow-2xl transition-all duration-300 bg-white rounded-3xl flex flex-col group"
            >
              {/* Graphic Display with Click to Expand */}
              <div
                onClick={() => setActiveLeader(leader)}
                className="relative aspect-[16/9] w-full bg-stone-950 overflow-hidden cursor-pointer"
              >
                <Image
                  src={leader.image}
                  alt={`${leader.nameMarathi} - ${leader.roleMarathi}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs sm:text-sm font-black gap-2 backdrop-blur-xs">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                  <span>Click to View Full Graphic (मोठे करून पहा)</span>
                </div>

                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-black bg-amber-400 text-stone-950 shadow-md">
                    {leader.deskBadge}
                  </span>
                </div>
              </div>

              {/* Leader Details & Message */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-serif font-black text-xl sm:text-2xl text-stone-900 group-hover:text-[var(--color-primary)] transition-colors">
                      {leader.nameMarathi}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-stone-500">
                    {leader.name}
                  </p>

                  <p className="text-xs uppercase tracking-wider font-extrabold text-[var(--color-primary)] mt-1.5 mb-4">
                    {leader.roleMarathi}
                  </p>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border-l-4 border-l-[var(--color-primary)] border border-amber-200/60 mb-4">
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                      “{leader.quote}”
                    </p>
                    <p className="text-xs font-bold text-[var(--color-primary)] mt-2 italic">
                      {leader.tagline}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-500">Khandesh Youth Foundation</span>
                  <button
                    type="button"
                    onClick={() => setActiveLeader(leader)}
                    className="font-bold text-[var(--color-primary)] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>संपूर्ण मनोगत पहा (View)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Leader Graphic */}
      <Modal
        isOpen={!!activeLeader}
        onClose={() => setActiveLeader(null)}
        title={activeLeader ? `${activeLeader.nameMarathi} — ${activeLeader.deskBadge}` : ''}
        maxWidth="2xl"
      >
        {activeLeader && (
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full bg-stone-950 rounded-2xl overflow-hidden border-2 border-stone-300 shadow-2xl">
              <Image
                src={activeLeader.image}
                alt={activeLeader.nameMarathi}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-stone-600">
              <div>
                <p className="font-bold text-stone-900 text-sm">{activeLeader.nameMarathi} ({activeLeader.name})</p>
                <p className="text-stone-500">{activeLeader.roleMarathi}</p>
              </div>

              <div className="flex items-center gap-2">
                {leaders.map((ld) => (
                  <button
                    key={ld.id}
                    type="button"
                    onClick={() => setActiveLeader(ld)}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                      ld.id === activeLeader.id
                        ? 'bg-[var(--color-primary)] text-white shadow-md'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {ld.deskBadge}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
