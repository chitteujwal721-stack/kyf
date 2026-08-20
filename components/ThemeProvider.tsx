'use client';

import React, { useEffect } from 'react';
import { getThemeConfig } from '@/lib/services/dataService';
import { ThemeConfig } from '@/types';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const applyTheme = (config: ThemeConfig) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', config.primary);
    root.style.setProperty('--color-primary-hover', config.primaryHover);
    root.style.setProperty('--color-secondary', config.secondary);
    root.style.setProperty('--color-secondary-hover', config.secondaryHover);
    root.style.setProperty('--color-accent', config.accent);
    root.style.setProperty('--color-accent-hover', config.accentHover);
    root.style.setProperty('--color-bg-main', config.bgMain);
    root.style.setProperty('--color-bg-card', config.bgCard);
    root.style.setProperty('--color-text-main', config.textMain);
    root.style.setProperty('--color-text-muted', config.textMuted);
    root.style.setProperty('--color-navbar-bg', config.navbarBg);
    root.style.setProperty('--color-footer-bg', config.footerBg);
  };

  useEffect(() => {
    const current = getThemeConfig();
    applyTheme(current);

    const handleDataChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.key === 'kyf_data_theme') {
        const updated = customEvent.detail.data as ThemeConfig;
        applyTheme(updated);
      }
    };

    window.addEventListener('kyf_data_change', handleDataChange);
    return () => window.removeEventListener('kyf_data_change', handleDataChange);
  }, []);

  return <>{children}</>;
}
