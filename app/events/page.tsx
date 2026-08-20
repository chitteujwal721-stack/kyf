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
import FormField from '@/components/ui/FormField';
import VolunteerCTA from '@/components/VolunteerCTA';
import { getEvents } from '@/lib/services/dataService';
import { EventItem } from '@/types';
import Image from 'next/image';
import { Calendar, Clock, MapPin, ArrowRight, Check } from 'lucide-react';

export default function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>(() => getEvents());
  const [statusFilter, setStatusFilter] = useState<'All' | 'Upcoming' | 'Completed'>('All');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({ name: '', phone: '', email: '', message: '' });

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

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setSelectedEvent(null);
      setVolunteerForm({ name: '', phone: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      <section className="bg-theme-primary text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 inline-block">
            Events Calendar
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">Foundation Events & Camps</h1>
          <p className="mt-4 text-amber-100 text-lg max-w-2xl mx-auto font-light">
            Stay updated with our upcoming blood donation drives, tree plantation events, and social workshops.
          </p>
        </div>
      </section>

      <Section bg="main">
        {/* Status Filter Buttons */}
        <div className="flex justify-center items-center gap-3 mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((event) => (
            <Card key={event.id} className="flex flex-col h-full group">
              <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                <Image
                  src={event.image || '/bg.jpg'}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  suppressHydrationWarning
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant={event.status === 'Upcoming' ? 'accent' : 'gray'}>
                    {event.status}
                  </Badge>
                  <Badge variant="primary">{event.category}</Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif font-bold text-xl text-stone-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 text-xs text-stone-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                    <span>{event.date}</span>
                  </div>
                  {event.time && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[var(--color-secondary)]" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>

                <p className="text-stone-600 text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                  {event.description}
                </p>

                {event.status === 'Upcoming' ? (
                  <PrimaryButton
                    onClick={() => setSelectedEvent(event)}
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    <span>Register to Volunteer</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </PrimaryButton>
                ) : (
                  <div className="text-xs text-center text-stone-500 font-medium py-2 bg-stone-100 rounded-xl">
                    Event Completed
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Section>

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
              Thank you for registering. Our team will contact you with venue details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="space-y-4">
            <FormField
              label="Full Name"
              id="name"
              required
              value={volunteerForm.name}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
              placeholder="e.g. Rahul Patil"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Phone Number"
                id="phone"
                type="tel"
                required
                value={volunteerForm.phone}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })}
                placeholder="+91 98765 43210"
              />
              <FormField
                label="Email Address"
                id="email"
                type="email"
                value={volunteerForm.email}
                onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                placeholder="you@domain.com"
              />
            </div>
            <FormField
              label="Notes / Volunteer Preference"
              id="message"
              type="textarea"
              rows={2}
              value={volunteerForm.message}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
              placeholder="Any specific skill or questions..."
            />
            <div className="pt-2">
              <PrimaryButton type="submit" variant="primary" className="w-full">
                Confirm Registration
              </PrimaryButton>
            </div>
          </form>
        )}
      </Modal>

      <VolunteerCTA />
      <Footer />
    </main>
  );
}
