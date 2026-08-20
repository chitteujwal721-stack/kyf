export interface ImpactMetric {
  label: string;
  value: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  category: string;
  image: string;
  iconName?: string;
  impactMetrics?: ImpactMetric[];
  featured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  category: 'Blood Donation' | 'Environment' | 'Education' | 'Youth' | 'Social';
  image: string;
  status: 'Upcoming' | 'Completed';
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
  };
  order?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Education' | 'Blood Donation' | 'Environment' | 'Women Empowerment' | 'Youth Events';
  image: string;
  date?: string;
  description?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
  status: 'Unread' | 'Replied' | 'Archived';
}

export interface VolunteerItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills?: string;
  eventTitle?: string;
  createdAt: string;
}

export interface NoticeSettings {
  enabled: boolean;
  text: string;
  speed: number; // in seconds
  bgColor: string;
  textColor: string;
}

export interface ThemeConfig {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  accent: string;
  accentHover: string;
  bgMain: string;
  bgCard: string;
  textMain: string;
  textMuted: string;
  navbarBg: string;
  footerBg: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  altPhone: string;
  address: string;
  googleMapsEmbed: string;
  upi: {
    id: string;
    accountName: string;
    bankName: string;
    accountNumber: string;
    ifsc: string;
    branch: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
    linkedin: string;
    whatsapp: string;
    twitter?: string;
  };
  footerText: string;
}
