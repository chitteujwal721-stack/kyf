import React from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import EventsGallerySlider from '@/components/EventsGallerySlider';

import ShabdabhushanBanner from '@/components/ShabdabhushanBanner';
import VolunteerCTA from '@/components/VolunteerCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />
      <ShabdabhushanBanner />
      <Hero />
      <Stats />
      <About />
      <EventsGallerySlider />

      <VolunteerCTA />
      <Footer />
    </main>
  );
}
