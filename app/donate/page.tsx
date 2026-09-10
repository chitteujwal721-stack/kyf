'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NoticeBar from '@/components/NoticeBar';
import Footer from '@/components/Footer';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { getSiteSettings } from '@/lib/services/dataService';
import { SiteSettings } from '@/types';
import Image from 'next/image';
import { Copy, Check, QrCode, Building2, ShieldCheck } from 'lucide-react';

export default function DonatePage() {
  const [settings, setSettings] = useState<SiteSettings | null>(() => getSiteSettings());
  const [copied, setCopied] = useState(false);

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

  const upi = settings?.upi || {
    id: 'kyf@upi',
    accountName: 'Khandesh Youth Foundation',
    bankName: 'State Bank of India',
    accountNumber: '389201554920',
    ifsc: 'SBIN0000364',
    branch: 'Dhule Main Branch',
  };

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upi.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };



  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      <section className="bg-theme-primary text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 inline-block">
            Support Our Mission
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold">Donate to KYF</h1>
          <p className="mt-4 text-amber-100 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Your generous contribution fuels educational kits, blood donation helplines, and environmental conservation in Khandesh.
          </p>
        </div>
      </section>

      <Section bg="main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* QR Code Card */}
          <Card className="p-4 sm:p-8 text-center border-2 border-amber-200/90 shadow-xl bg-white rounded-3xl">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-amber-100 text-[var(--color-primary)] text-xs font-extrabold uppercase tracking-wider mb-4 sm:mb-6">
              <QrCode className="w-4 h-4" />
              <span>Official UPI QR Code • Scan & Pay</span>
            </div>

            {/* QR Image Container */}
            <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto p-3 sm:p-4 bg-white rounded-2xl border-2 border-amber-200 shadow-md mb-6 flex items-center justify-center overflow-hidden">
              <Image
                src="/qr-code.png"
                alt="Khandesh Youth Foundation UPI QR Code"
                fill
                sizes="(max-width: 640px) 240px, 320px"
                className="object-contain p-2"
                priority
              />
            </div>

            {/* UPI Copy Box */}
            <div className="bg-amber-50/60 p-3.5 sm:p-4 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-md mx-auto">
              <div className="text-center sm:text-left min-w-0">
                <p className="text-[11px] text-stone-500 font-bold uppercase tracking-wide">Official UPI ID</p>
                <p className="text-base sm:text-lg font-mono font-extrabold text-[var(--color-primary)] tracking-tight truncate">{upi.id}</p>
              </div>
              <button
                onClick={handleCopyUPI}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy UPI ID</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-stone-500 text-xs mt-4 font-medium leading-relaxed">
              Scan directly using Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, or any bank UPI app.
            </p>
          </Card>

          {/* Bank Details Card */}
          <div className="space-y-6">
            <Card className="p-4 sm:p-8 border border-stone-200 shadow-lg bg-white rounded-3xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div className="p-3 bg-amber-100 text-[var(--color-primary)] rounded-2xl shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">Direct Bank Transfer</h3>
                  <p className="text-xs text-stone-500 font-medium">NEFT / RTGS / IMPS Official Account</p>
                </div>
              </div>

              <div className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-stone-100 gap-0.5 sm:gap-1">
                  <span className="text-stone-500 font-medium">Account Name</span>
                  <span className="font-bold text-stone-900">{upi.accountName}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-stone-100 gap-0.5 sm:gap-1">
                  <span className="text-stone-500 font-medium">Bank Name</span>
                  <span className="font-bold text-stone-900">{upi.bankName}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-stone-100 gap-0.5 sm:gap-1">
                  <span className="text-stone-500 font-medium">Account Number</span>
                  <span className="font-mono font-extrabold text-sm sm:text-base text-[var(--color-primary)] break-all">{upi.accountNumber}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-stone-100 gap-0.5 sm:gap-1">
                  <span className="text-stone-500 font-medium">IFSC Code</span>
                  <span className="font-mono font-extrabold text-sm sm:text-base text-[var(--color-primary)]">{upi.ifsc}</span>
                </div>
                {upi.branch && (
                  <div className="flex flex-col sm:flex-row sm:justify-between py-2 gap-0.5 sm:gap-1">
                    <span className="text-stone-500 font-medium">Branch</span>
                    <span className="font-bold text-stone-900">{upi.branch}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 p-3.5 sm:p-4 bg-amber-50/80 rounded-2xl border border-amber-200 flex items-start gap-2.5 sm:gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  All donations go directly toward community welfare drives. Receipts can be requested by emailing your payment screenshot to{' '}
                  <span className="font-bold text-[var(--color-primary)] break-all">contact@khandeshyouthfoundation.org</span>.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Impact Tiers */}
        <div className="mt-16">
          <SectionHeading
            badge="Transparency & Impact"
            title="How Your Donation Helps"
            subtitle="Every contribution directly supports grassroot programs."
          />

        </div>
      </Section>

      <Footer />
    </main>
  );
}
