'use client';

import React, { useEffect, useState } from 'react';
import { getNoticeSettings } from '@/lib/services/dataService';
import { NoticeSettings } from '@/types';
import { Bell } from 'lucide-react';

export default function NoticeBar() {
  const [notice, setNotice] = useState<NoticeSettings | null>(() => getNoticeSettings());

  useEffect(() => {
    const handleDataChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.key === 'kyf_data_notice') {
        setNotice(customEvent.detail.data as NoticeSettings);
      }
    };

    window.addEventListener('kyf_data_change', handleDataChange);
    return () => window.removeEventListener('kyf_data_change', handleDataChange);
  }, []);

  if (!notice || !notice.enabled || !notice.text.trim()) {
    return null;
  }

  return (
    <div
      className="relative w-full overflow-hidden z-40 text-sm font-medium py-2.5 shadow-inner border-b border-black/10"
      style={{
        backgroundColor: notice.bgColor || '#5D3A1A',
        color: notice.textColor || '#FDFBF7',
      }}
      suppressHydrationWarning
    >
      <div className="flex items-center">
        {/* Label Badge */}
        <div
          className="shrink-0 px-4 py-1 flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider z-10 shadow-md"
          style={{
            backgroundColor: 'rgba(0,0,0,0.25)',
            color: notice.textColor || '#FDFBF7',
          }}
        >
          <Bell className="w-3.5 h-3.5 animate-bounce" />
          <span>Notice</span>
        </div>

        {/* Continuous Marquee Wrapper */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="animate-notice-scroll whitespace-nowrap px-4 font-medium"
            style={{
              animationDuration: `${notice.speed || 18}s`,
            }}
          >
            {notice.text}
          </div>
        </div>
      </div>
    </div>
  );
}
