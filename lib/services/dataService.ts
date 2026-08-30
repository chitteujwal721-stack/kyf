import { siteConfig } from '@/config/site';
import { initialEvents } from '@/data/events';
import { initialInitiatives } from '@/data/initiatives';
import { initialTeam } from '@/data/team';
import {
  EventItem,
  InitiativeItem,
  NoticeSettings,
  SiteSettings,
  TeamMember,
  ThemeConfig,
} from '@/types';

export const defaultNoticeSettings: NoticeSettings = {
  enabled: true,
  text: '🚩 शब्दभूषण २०२६: खान्देशातील सर्वात भव्य वक्तृत्व स्पर्धा! 🏆 भव्य पारितोषिके ₹१०,०००/-, ₹७,०००/-, ₹५,०००/- | नोंदणी अंतिम तारीख: १४ सप्टेंबर २०२६ | सविस्तर माहिती व ऑनलाईन नोंदणीसाठी येथे क्लिक करा किंवा Events विभागाला भेट द्या! (Online Registration Open)',
  speed: 26,
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
export const getInitiatives = (): InitiativeItem[] => initialInitiatives;
export const getTeam = (): TeamMember[] => initialTeam;
export const getNoticeSettings = (): NoticeSettings => defaultNoticeSettings;
export const getThemeConfig = (): ThemeConfig => defaultThemeConfig;
export const getSiteSettings = (): SiteSettings => defaultSiteSettings;
