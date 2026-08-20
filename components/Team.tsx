'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import { getTeam } from '@/lib/services/dataService';
import { TeamMember } from '@/types';
import { Mail } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '@/components/SocialIcons';

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>(() => getTeam());

  useEffect(() => {
    const handleDataChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.key === 'kyf_data_team') {
        setTeam(customEvent.detail.data as TeamMember[]);
      }
    };

    window.addEventListener('kyf_data_change', handleDataChange);
    return () => window.removeEventListener('kyf_data_change', handleDataChange);
  }, []);

  return (
    <Section id="team" bg="main">
      <SectionHeading
        badge="Our Leadership"
        title="Meet Our Dedicated Team"
        subtitle="Passionate individuals driving social change, youth mentorship, and community development across Khandesh."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <Card key={member.id} className="text-center p-6 flex flex-col items-center group">
            <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg bg-stone-100 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={member.image || '/bg.jpg'}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
                suppressHydrationWarning
              />
            </div>

            <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-[var(--color-primary)] transition-colors">
              {member.name}
            </h3>
            <p className="text-xs uppercase tracking-wider font-semibold text-[var(--color-secondary)] mt-1 mb-3">
              {member.role}
            </p>

            {member.bio && (
              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4 flex-1">
                {member.bio}
              </p>
            )}

            {/* Social Links */}
            {member.socials && (
              <div className="flex items-center justify-center gap-3 pt-3 border-t border-stone-100 w-full">
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="p-2 text-stone-400 hover:text-[var(--color-primary)] hover:bg-stone-100 rounded-full transition"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-stone-400 hover:text-[var(--color-secondary)] hover:bg-stone-100 rounded-full transition"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-stone-400 hover:text-rose-500 hover:bg-stone-100 rounded-full transition"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}