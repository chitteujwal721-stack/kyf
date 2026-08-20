'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { getSiteSettings } from '@/lib/services/dataService';
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  YouTubeIcon,
} from '@/components/SocialIcons';

export default function Footer() {
  const settings = getSiteSettings();
  const config = { ...siteConfig, ...settings };

  return (
    <footer className="bg-theme-footer text-stone-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: NGO Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-amber-50 p-1.5 border border-amber-200/30">
                <Image src="/logo.png" alt="KYF Logo" fill className="object-contain" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-xl text-white tracking-tight leading-tight">
                  {config.name}
                </h2>
                <p className="text-[10px] text-amber-200 uppercase tracking-wider font-semibold">
                  {config.tagline}
                </p>
              </div>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed font-light">
              Dedicated to youth mentoring, emergency blood donation drives, tree plantations, and education across Khandesh.
            </p>
            <div className="pt-2">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[var(--color-primary-hover)] transition"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Support Our Cause</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-white text-base mb-4 border-b border-stone-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Social Initiatives', href: '/initiatives' },
                { name: 'Events Calendar', href: '/events' },
                { name: 'Photo Gallery', href: '/gallery' },
                { name: 'Donate & Support', href: '/donate' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[var(--color-secondary)]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-white text-base mb-4 border-b border-stone-800 pb-2">
              Contact & Address
            </h3>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{config.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${config.phone}`} className="hover:text-white transition">
                  {config.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-white transition">
                  {config.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Handles */}
          <div>
            <h3 className="font-serif font-bold text-white text-base mb-4 border-b border-stone-800 pb-2">
              Connect With Us
            </h3>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed font-light">
              Follow Khandesh Youth Foundation on social media for daily drive updates.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {config.socialLinks?.facebook && (
                <a
                  href={config.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-[var(--color-primary)] transition"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks?.instagram && (
                <a
                  href={config.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-rose-600 transition"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks?.twitter && (
                <a
                  href={config.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-sky-500 transition"
                  aria-label="Twitter Handle"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks?.linkedin && (
                <a
                  href={config.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-blue-600 transition"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}
              {config.socialLinks?.youtube && (
                <a
                  href={config.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-stone-800 text-stone-300 hover:text-white hover:bg-red-600 transition"
                  aria-label="YouTube Channel"
                >
                  <YouTubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>{config.footerText || `© ${new Date().getFullYear()} ${config.name}. All Rights Reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}
