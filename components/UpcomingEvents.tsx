'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Modal from '@/components/ui/Modal';
import FormField from '@/components/ui/FormField';
import { getEvents } from '@/lib/services/dataService';
import { EventItem } from '@/types';
import { Calendar, Clock, MapPin, ArrowRight, Check } from 'lucide-react';

export default function UpcomingEvents() {
  const [events, setEvents] = useState<EventItem[]>(() => getEvents());
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

  return (
    <Section id="events" bg="main">
      <SectionHeading
        badge="Community Gatherings"
        title="Upcoming Events & Drives"
        subtitle="Join our upcoming social welfare events, blood donation camps, and environmental drives in Khandesh."
      />

      <div className={`grid gap-8 ${upcomingList.length === 1 ? 'max-w-xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {(upcomingList.length > 0 ? upcomingList : events).slice(0, 3).map((event) => (
          <Card key={event.id} className="flex flex-col h-full group border border-amber-200/80 shadow-md">
            <div className="relative h-60 w-full overflow-hidden bg-stone-900">
              <Image
                src={event.image || '/bg.jpg'}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain group-hover:scale-105 transition-transform duration-500"
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
              <h3 className="font-serif font-bold text-2xl text-stone-900 mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                {event.title}
              </h3>
              {event.subtitle && (
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                  {event.subtitle}
                </p>
              )}

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

              {event.prizes && event.prizes.length > 0 && (
                <div className="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">भव्य पारितोषिके:</span>
                  <div className="flex justify-between text-[11px] font-semibold text-[var(--color-primary)]">
                    {event.prizes.map((p, idx) => (
                      <span key={idx}>{p.title}: {p.amount}</span>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-stone-600 text-sm line-clamp-2 mb-6 leading-relaxed flex-1">
                {event.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {event.registrationUrl ? (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition shadow-sm"
                  >
                    <span>नोंदणी फॉर्म भरा</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <PrimaryButton
                    onClick={() => setSelectedEvent(event)}
                    variant="primary"
                    size="sm"
                    className="flex-1"
                  >
                    <span>Register / Participate</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </PrimaryButton>
                )}
                <PrimaryButton href="/events" variant="outline" size="sm">
                  <span>सविस्तर माहिती</span>
                </PrimaryButton>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <PrimaryButton href="/events" variant="outline" size="lg">
          View All Events Calendar
        </PrimaryButton>
      </div>

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
              Thank you for registering. Our team will contact you with location details.
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
              label="Additional Notes / Volunteer Role"
              id="message"
              type="textarea"
              rows={2}
              value={volunteerForm.message}
              onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
              placeholder="Tell us if you need transport or want to lead a subgroup..."
            />
            <div className="pt-2">
              <PrimaryButton type="submit" variant="primary" className="w-full">
                Confirm Registration
              </PrimaryButton>
            </div>
          </form>
        )}
      </Modal>
    </Section>
  );
}