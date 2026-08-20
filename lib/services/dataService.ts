import { siteConfig } from '@/config/site';
import { initialEvents } from '@/data/events';
import { initialGallery } from '@/data/gallery';
import { initialInitiatives } from '@/data/initiatives';
import { initialTeam } from '@/data/team';
import {
  EventItem,
  GalleryItem,
  InitiativeItem,
  NoticeSettings,
  SiteSettings,
  TeamMember,
  ThemeConfig,
} from '@/types';

export const defaultNoticeSettings: NoticeSettings = {
  enabled: true,
  text: '🚩 Urgent Blood Drive in Dhule Civil Hospital this Sunday from 9 AM to 4 PM. All blood groups needed!',
  speed: 18,
  bgColor: '#5D3A1A',
  textColor: '#FDFBF7',
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
export const getGallery = (): GalleryItem[] => initialGallery;
export const getNoticeSettings = (): NoticeSettings => defaultNoticeSettings;
export const getThemeConfig = (): ThemeConfig => defaultThemeConfig;
export const getSiteSettings = (): SiteSettings => defaultSiteSettings;
