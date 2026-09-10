'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import FormField from '@/components/ui/FormField';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { getSiteSettings } from '@/lib/services/dataService';
import { SiteSettings } from '@/types';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(() => getSiteSettings());
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleDataChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.key === 'kyf_data_settings') {
        setSettings(customEvent.detail.data as SiteSettings);
      }
    };

    window.addEventListener('kyf_data_change', handleDataChange);
    return () => window.removeEventListener('kyf_data_change', handleDataChange);
  }, []);

  const config = settings || {
    name: 'Khandesh Youth Foundation',
    email: '',
    phone: '+91 9421098906',
    altPhone: '',
    address: '',
    googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.664408711463!2d74.7675765!3d20.9042225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd80693a1c6a2ad%3A0x6b4fb24e6446e507!2sDhule%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    socialLinks: {
      whatsapp: 'https://wa.me/919421098906',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      <section className="bg-theme-primary text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold">Contact Khandesh Youth Foundation</h1>
          <p className="mt-4 text-amber-100 text-base sm:text-lg max-w-2xl mx-auto font-light">
            We are here to answer your queries, coordinate blood donation emergencies, or welcome you as a volunteer.
          </p>
        </div>
      </section>

      <Section bg="main">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards Column */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="p-5 sm:p-6 border-l-4 border-l-[var(--color-primary)] shadow-md bg-white rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 text-[var(--color-primary)] rounded-2xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">Official Helpline</h3>
                  <a
                    href="tel:+919421098906"
                    className="text-stone-900 text-base sm:text-lg font-bold hover:text-[var(--color-primary)] transition block"
                  >
                    +91 9421098906
                  </a>
                  <p className="text-stone-500 text-xs mt-1">Available for calls & WhatsApp queries</p>
                </div>
              </div>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://wa.me/919421098906"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-2xl shadow-md transition text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919421098906"
                className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-3.5 rounded-2xl shadow-md transition text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <Card className="p-5 sm:p-8 shadow-lg bg-white rounded-2xl">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mb-2">Send Us a Message</h2>
              <p className="text-stone-600 text-xs mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-stone-900">Message Sent Successfully!</h3>
                  <p className="text-stone-600 text-xs mt-1">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Your Name"
                      id="name"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                    <FormField
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="ramesh@gmail.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 9421098906"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                    <FormField
                      label="Subject / Topic"
                      id="subject"
                      placeholder="e.g. Blood Donation Camp / Volunteering"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    />
                  </div>

                  <FormField
                    label="Your Message"
                    id="message"
                    type="textarea"
                    required
                    rows={5}
                    placeholder="Write your message or inquiry here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />

                  <PrimaryButton type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    <span>Send Message</span>
                  </PrimaryButton>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
