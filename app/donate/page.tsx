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

  const impactTiers = [
    { amount: '₹100', text: 'Provides essential notebooks & stationery kits to 1 student.' },
    { amount: '₹500', text: 'Funds emergency transportation for voluntary blood donors.' },
    { amount: '₹1,000', text: 'Sponsors 10 native tree saplings with tree guards for green drives.' },
    { amount: 'Any Amount', text: 'Directly supports our 24/7 social service emergency helpline.' },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <NoticeBar />

      <section className="bg-theme-primary text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-white/20 text-white border border-white/30 mb-3 inline-block">
            Support Our Mission
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold">Donate to KYF</h1>
          <p className="mt-4 text-amber-100 text-lg max-w-2xl mx-auto font-light">
            Your generous contribution fuels educational kits, blood donation helplines, and environmental conservation in Khandesh.
          </p>
        </div>
      </section>

      <Section bg="main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* QR Code Card */}
          <Card className="p-8 text-center border-2 border-amber-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider mb-6">
              <QrCode className="w-4 h-4" />
              <span>UPI Scan & Pay</span>
            </div>

            <div className="relative w-64 h-64 mx-auto p-4 bg-white rounded-2xl border border-stone-200 shadow-md mb-6 flex items-center justify-center">
              <Image
                src="/qr-code.png"
                alt="Donation UPI QR Code"
                fill
                className="object-contain p-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="text-center p-4">
                <QrCode className="w-20 h-20 text-[var(--color-primary)] mx-auto mb-2 opacity-80" />
                <p className="text-xs text-stone-500 font-medium">Scan using GPay, PhonePe, Paytm, BHIM</p>
              </div>
            </div>

            {/* UPI Copy Box */}
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-md mx-auto">
              <div className="text-left">
                <p className="text-[11px] text-stone-500 font-semibold uppercase">Official UPI ID</p>
                <p className="text-lg font-bold text-[var(--color-primary)] font-mono">{upi.id}</p>
              </div>
              <button
                onClick={handleCopyUPI}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 rounded-lg text-xs font-bold transition shadow-sm"
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

            <p className="text-stone-500 text-xs mt-4">
              Accepted through Google Pay, PhonePe, Paytm, Amazon Pay, or any UPI app.
            </p>
          </Card>

          {/* Bank Details Card */}
          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div className="p-3 bg-amber-100 text-[var(--color-primary)] rounded-xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900">Direct Bank Transfer</h3>
                  <p className="text-xs text-stone-500">NEFT / RTGS / IMPS Account Information</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 font-medium">Account Name</span>
                  <span className="font-bold text-stone-900">{upi.accountName}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 font-medium">Bank Name</span>
                  <span className="font-bold text-stone-900">{upi.bankName}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 font-medium">Account Number</span>
                  <span className="font-bold text-stone-900 font-mono">{upi.accountNumber}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500 font-medium">IFSC Code</span>
                  <span className="font-bold text-stone-900 font-mono">{upi.ifsc}</span>
                </div>
                {upi.branch && (
                  <div className="flex justify-between py-2">
                    <span className="text-stone-500 font-medium">Branch</span>
                    <span className="font-bold text-stone-900">{upi.branch}</span>
                  </div>
                )}
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <p className="text-xs text-stone-700 leading-relaxed">
                  All donations go directly toward community welfare drives. Receipts can be requested by emailing your payment screenshot to{' '}
                  <span className="font-bold text-[var(--color-primary)]">contact@khandeshyouthfoundation.org</span>.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactTiers.map((tier, idx) => (
              <Card key={idx} className="p-6 text-center border-t-4 border-t-[var(--color-primary)]">
                <p className="text-3xl font-serif font-bold text-[var(--color-primary)] mb-2">
                  {tier.amount}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed font-medium">{tier.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
