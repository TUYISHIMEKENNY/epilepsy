'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const EmergencyAccessButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      href="/first-aid-guide"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-4 bg-red-600 text-white rounded-full shadow-brand font-cta font-semibold transition-smooth hover:bg-red-700 hover:scale-110 active:scale-95 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Quick access to first aid guide"
    >
      <Icon name="HeartIcon" size={24} variant="solid" className="animate-pulse" />
      <span className="hidden sm:inline">Emergency First Aid</span>
      <span className="sm:hidden">First Aid</span>
    </Link>
  );
};

export default EmergencyAccessButton;