import React from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Initiatives from '@/components/Initiatives';
import UpcomingEvents from '@/components/UpcomingEvents';
import GalleryPreview from '@/components/GalleryPreview';
import Team from '@/components/Team';
import VolunteerCTA from '@/components/VolunteerCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />
      <Hero />
      <Stats />
      <About />
      <Initiatives />
      <UpcomingEvents />
      <GalleryPreview />
      <Team />
      <VolunteerCTA />
      <Footer />
    </main>
  );
}
