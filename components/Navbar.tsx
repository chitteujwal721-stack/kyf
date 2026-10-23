'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { siteConfig } from '@/config/site';
import { Menu, X, IndianRupee, UserPlus } from 'lucide-react';

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
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all ${scrolled ? 'shadow-md py-1' : 'shadow-xs py-2 sm:py-2.5'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-22 sm:h-26 md:h-28 flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Enlarged Logo and Foundation Title Beside It */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 md:gap-5 group shrink-0 min-w-0" aria-label="Khandesh Youth Foundation Home">
          <div className="relative h-16 sm:h-20 md:h-22 lg:h-24 w-28 sm:w-36 md:w-44 lg:w-48 shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={siteConfig.logoUrl}
              alt={siteConfig.name}
              fill
              sizes="(max-width: 640px) 112px, (max-width: 768px) 160px, 200px"
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <span className="font-serif font-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-stone-950 group-hover:text-[var(--color-primary)] transition tracking-tight leading-tight whitespace-nowrap">
              Khandesh Youth Foundation
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold text-amber-900 tracking-wider uppercase mt-1 leading-tight">
              खान्देश युथ फाउंडेशन • (KYF)
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation Links + CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
          <nav className="flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition relative ${isActive(link.href)
                  ? 'text-[var(--color-primary)] font-black'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/70'
                  }`}
              >
                <span>{link.name}</span>
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 xl:gap-2.5 pl-3 border-l border-stone-200">
            <a
              href={siteConfig.joinUsFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white transition shadow-xs"
            >
              <UserPlus className="w-4 h-4 shrink-0" />
              <span className="hidden xl:inline">Become a</span>
              <span>Member</span>
            </a>

            <PrimaryButton href="/donate" variant="primary" size="md" className="shadow-md text-xs xl:text-sm px-3.5 py-2">
              <IndianRupee className="w-4 h-4 text-white mr-1 shrink-0" />
              <span>Donate</span>
            </PrimaryButton>
          </div>
        </div>

        {/* Mobile Menu & Action Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <a
            href={siteConfig.joinUsFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition"
          >
            <UserPlus className="w-3.5 h-3.5 shrink-0" />
            <span>Member</span>
          </a>

          <PrimaryButton href="/donate" variant="primary" size="sm" className="sm:hidden px-2.5 py-1.5 text-xs">
            <IndianRupee className="w-3.5 h-3.5 text-white mr-0.5 shrink-0" />
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
            className="fixed inset-0 top-22 sm:top-26 md:top-28 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-50 lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="flex items-center gap-3.5 pb-3 border-b border-stone-100 mb-2">
              <div className="relative h-14 w-32 shrink-0">
                <Image
                  src={siteConfig.logoUrl}
                  alt={siteConfig.name}
                  fill
                  sizes="128px"
                  className="object-contain object-left"
                />
              </div>
              <div className="min-w-0">
                <p className="font-serif font-black text-base text-stone-950 leading-tight truncate">
                  Khandesh Youth Foundation
                </p>
                <p className="text-xs text-amber-900 font-bold mt-0.5 truncate">
                  खान्देश युथ फाउंडेशन • (KYF)
                </p>
              </div>
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition ${isActive(link.href)
                    ? 'bg-amber-50 text-[var(--color-primary)] font-bold'
                    : 'text-stone-700 hover:bg-stone-50 active:bg-amber-100/50'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
              <a
                href={siteConfig.joinUsFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-xl font-bold text-sm py-3 transition shadow-xs"
                onClick={() => setMobileMenuOpen(false)}
              >
                <UserPlus className="w-4 h-4" />
                <span>Become a Member</span>
              </a>

              <PrimaryButton
                href="/donate"
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-md py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                <IndianRupee className="w-4 h-4 text-white mr-2" />
                <span>Support Our NGO (Donate)</span>
              </PrimaryButton>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
