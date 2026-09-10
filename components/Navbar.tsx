'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { siteConfig } from '@/config/site';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all ${scrolled ? 'shadow-md py-1' : 'shadow-xs py-1.5'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo and Foundation Name */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3.5 group min-w-0">
          <div className="relative h-11 sm:h-14 md:h-16 w-28 sm:w-36 md:w-44 shrink-0">
            <Image
              src={siteConfig.logoUrl}
              alt={siteConfig.name}
              fill
              sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
              className="object-contain object-left group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div className="hidden md:flex flex-col border-l border-stone-200 pl-3">
            <span className="font-extrabold text-base lg:text-lg text-stone-900 leading-none group-hover:text-[var(--color-primary)] transition truncate">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] font-semibold text-stone-500 tracking-wider uppercase mt-1">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition relative ${
                isActive(link.href)
                  ? 'text-[var(--color-primary)] font-bold'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
              }`}
            >
              <span>{link.name}</span>
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Header CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <PrimaryButton href="/donate" variant="primary" size="md" className="shadow-md">
            <Heart className="w-4 h-4 fill-white text-white mr-1.5" />
            <span>Donate Now</span>
          </PrimaryButton>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <PrimaryButton href="/donate" variant="primary" size="sm" className="sm:hidden px-3 py-1.5 text-xs">
            <Heart className="w-3.5 h-3.5 fill-white text-white mr-1" />
            <span>Donate</span>
          </PrimaryButton>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 sm:top-20 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-50 lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex items-center gap-3 pb-3 border-b border-stone-100 mb-2">
              <div className="relative h-10 w-28 shrink-0">
                <Image
                  src={siteConfig.logoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="112px"
                  className="object-contain object-left"
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm text-stone-900 leading-none truncate">{siteConfig.shortName}</p>
                <p className="text-[10px] text-stone-500 font-medium mt-0.5 truncate">{siteConfig.tagline}</p>
              </div>
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition ${
                    isActive(link.href)
                      ? 'bg-amber-50 text-[var(--color-primary)] font-bold'
                      : 'text-stone-700 hover:bg-stone-50 active:bg-amber-100/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
              <PrimaryButton
                href="/donate"
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-md py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="w-4 h-4 fill-white text-white mr-2" />
                <span>Support Our NGO (Donate)</span>
              </PrimaryButton>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
