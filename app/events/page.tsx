'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Modal from '@/components/ui/Modal';
import VolunteerCTA from '@/components/VolunteerCTA';
import { getEvents } from '@/lib/services/dataService';
import { EventItem } from '@/types';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  ExternalLink,
  Trophy,
  Phone,
  BookOpen,
  Award,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>(() => getEvents());
  const [statusFilter, setStatusFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');
  const [previewPoster, setPreviewPoster] = useState<string | null>(null);

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
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      {/* Hero Banner */}
      <section className="bg-theme-primary text-white py-14 sm:py-18 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 inline-block">
            Events & Competitions
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold">
            Foundation Events & Initiatives
          </h1>
          <p className="mt-4 text-amber-100 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Empowering youth across Khandesh through competitive platforms, leadership camps, and cultural events.
          </p>
        </div>
      </section>

      <Section bg="main">
        {/* Status Filter Buttons */}
        <div className="flex justify-center items-center gap-3 mb-10">
          {(['All', 'Upcoming', 'Completed'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                statusFilter === st
                  ? 'bg-[var(--color-primary)] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              {st} Events
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 max-w-lg mx-auto">
            <p className="text-stone-500 font-medium">No events found in this category.</p>
          </div>
        ) : (
          <div className="space-y-10 max-w-5xl mx-auto">
            {filtered.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border border-amber-200/80 shadow-md bg-white rounded-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Poster Image Column */}
                  <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-950 p-6 flex flex-col items-center justify-center text-center relative group">
                    <div
                      onClick={() => setPreviewPoster(event.image)}
                      className="relative w-full max-w-[340px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 cursor-pointer group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <Image
                        src={event.image || '/bg.jpg'}
                        alt={event.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-contain"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-xs gap-1.5 backdrop-blur-[2px]">
                        <span>Click to enlarge poster</span>
                      </div>
                    </div>

                    <p className="text-amber-200/80 text-[11px] mt-3 font-medium">
                      🔍 Click poster to view in full resolution
                    </p>

                    {event.entryFee && (
                      <div className="mt-4 w-full max-w-[300px] py-2 px-4 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-semibold flex items-center justify-between">
                        <span>नोंदणी शुल्क (Entry Fee)</span>
                        <span className="text-sm font-bold text-white">{event.entryFee}</span>
                      </div>
                    )}
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="accent">{event.status}</Badge>
                      <Badge variant="primary">{event.category}</Badge>
                      {event.entryFee && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                          नोंदणी शुल्क: {event.entryFee}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mb-1">
                      {event.title}
                    </h2>
                    {event.subtitle && (
                      <p className="text-base sm:text-lg font-medium text-[var(--color-primary)] mb-3">
                        {event.subtitle}
                      </p>
                    )}

                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Cash Prizes */}
                    {event.prizes && event.prizes.length > 0 && (
                      <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200">
                        <div className="flex items-center gap-2 mb-3">
                          <Trophy className="w-4 h-4 text-amber-700" />
                          <h3 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wide">
                            भव्य पारितोषिके (Cash Prizes)
                          </h3>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {event.prizes.map((prize, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-lg bg-white/90 border border-amber-200/80 shadow-2xs"
                            >
                              <p className="text-[11px] font-semibold text-stone-500 uppercase">
                                {prize.title}
                              </p>
                              <p className="text-base sm:text-lg font-bold text-[var(--color-primary)] mt-0.5">
                                {prize.amount}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Rounds & Schedule */}
                    {event.rounds && event.rounds.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2.5">
                          <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                          <h3 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wide">
                            फेऱ्या व वेळापत्रक (Schedule)
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {event.rounds.map((r, idx) => (
                            <div
                              key={idx}
                              className="p-2 rounded-lg bg-stone-50 border border-stone-200 text-center"
                            >
                              <p className="text-[11px] font-bold text-stone-800">{r.name}</p>
                              <p className="text-[11px] text-[var(--color-primary)] font-semibold mt-0.5">
                                {r.date}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Topics (विषय) */}
                    {event.topics && event.topics.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2.5">
                          <BookOpen className="w-4 h-4 text-[var(--color-primary)]" />
                          <h3 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wide">
                            स्पर्धेचे विषय (Competition Topics)
                          </h3>
                        </div>
                        <ul className="space-y-1.5 text-xs text-stone-700 pl-1">
                          {event.topics.map((t, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="w-5 h-5 rounded-full bg-amber-100 text-[var(--color-primary)] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span className="leading-relaxed font-medium">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Language & Age Groups */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
                      {event.languages && (
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <span className="font-bold text-stone-700 block mb-1">भाषेचे माध्यम:</span>
                          <span className="text-stone-600 font-medium">
                            {event.languages.join(' | ')}
                          </span>
                        </div>
                      )}
                      {event.ageGroups && (
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                          <span className="font-bold text-stone-700 block mb-1">वयोगट:</span>
                          <span className="text-stone-600 font-medium">
                            {event.ageGroups.join(' | ')}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* District Helpline Contacts */}
                    {event.contacts && event.contacts.length > 0 && (
                      <div className="mb-6 p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <div className="flex items-center gap-2 mb-2.5">
                          <Phone className="w-4 h-4 text-emerald-600" />
                          <h3 className="font-serif font-bold text-sm text-stone-900 uppercase tracking-wide">
                            जिल्हा संपर्क क्रमांक (District Helplines)
                          </h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                          {event.contacts.map((c, idx) => (
                            <a
                              key={idx}
                              href={`tel:${c.phone}`}
                              className="p-2 rounded-lg bg-white border border-stone-200 hover:border-[var(--color-primary)] text-center transition group/tel"
                            >
                              <span className="block text-[11px] font-semibold text-stone-600">
                                {c.district}
                              </span>
                              <span className="block font-bold text-[var(--color-primary)] group-hover/tel:underline mt-0.5">
                                {c.phone}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 flex flex-col sm:flex-row items-center gap-3">
                      {event.registrationUrl ? (
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition shadow-md"
                        >
                          <span>नोंदणी फॉर्म भरा (Online Registration)</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : null}

                      <button
                        onClick={() => setPreviewPoster(event.image)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border border-stone-300 hover:bg-stone-100 text-stone-800 transition"
                      >
                        <span>पोस्टर पहा (View Poster)</span>
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
        title="शब्दभूषण २०२६ - स्पर्धा माहिती पोस्टर"
      >
        {previewPoster && (
          <div className="space-y-4">
            <div className="relative w-full max-w-lg mx-auto aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src={previewPoster}
                alt="Shabdbhushan 2026 Poster"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-contain bg-stone-900"
              />
            </div>
            <div className="text-center pt-2">
              <a
                href="https://forms.gle/xW3AqRnGNVKewGF4A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-6 py-3 rounded-xl font-bold text-sm transition"
              >
                <span>नोंदणी फॉर्मवर जा (Open Google Form)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </Modal>

      <VolunteerCTA />
      <Footer />
    </main>
  );
}
