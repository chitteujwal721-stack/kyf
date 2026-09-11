import { siteConfig } from '@/config/site';
import { initialEvents } from '@/data/events';
import { initialTeam } from '@/data/team';
import {
  EventItem,
  NoticeSettings,
  SiteSettings,
  TeamMember,
  ThemeConfig,
} from '@/types';

export const defaultNoticeSettings: NoticeSettings = {
  enabled: true,
  text: '🚩 शब्दभूषण २०२६: भव्य खान्देशस्तरीय वक्तृत्व स्पर्धा! नोंदणी मुदतवाढ २० सप्टेंबर २०२६ पर्यंत | Shabdabhushan 2026: Khandesh-Level Elocution Competition! Registration Extended till 20 Sep 2026. Click here to Register Now! 🏆',
  speed: 24,
  bgColor: '#5D3A1A',
  textColor: '#FDFBF7',
  link: '/events',
};

export const defaultThemeConfig: ThemeConfig = {
  primary: '#5D3A1A',
  primaryHover: '#4A2E14',
  secondary: '#0EA5E9',
  secondaryHover: '#0284C7',
  accent: '#16A34A',
  accentHover: '#15803D',
  bgMain: '#FDFBF7',
  bgCard: '#FFFFFF',
  textMain: '#1C1917',
  textMuted: '#78716C',
  navbarBg: '#FFFFFF',
  footerBg: '#1C1917',
};

export const defaultSiteSettings: SiteSettings = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.email,
  phone: siteConfig.phone,
  altPhone: siteConfig.altPhone,
  address: siteConfig.address,
  googleMapsEmbed: siteConfig.googleMapsEmbed,
  upi: siteConfig.upi,
  socialLinks: siteConfig.socialLinks,
  footerText: `© ${new Date().getFullYear()} ${siteConfig.name}. All Rights Reserved.`,
};

export const getEvents = (): EventItem[] => initialEvents;
export const getTeam = (): TeamMember[] => initialTeam;
export const getNoticeSettings = (): NoticeSettings => defaultNoticeSettings;
export const getThemeConfig = (): ThemeConfig => defaultThemeConfig;
export const getSiteSettings = (): SiteSettings => defaultSiteSettings;
