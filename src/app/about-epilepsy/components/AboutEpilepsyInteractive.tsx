'use client';

import React, { useState, useEffect, useRef } from 'react';
import HeroSection from './HeroSection';
import QuickFactsSection from './QuickFactsSection';
import WhatIsEpilepsySection from './WhatIsEpilepsySection';
import MythBusterSection from './MythBusterSection';
import SeizureTypesSection from './SeizureTypesSection';
import CausesSection from './CausesSection';
import TreatmentSection from './TreatmentSection';
import LivingWithEpilepsySection from './LivingWithEpilepsySection';
import ResourcesSection from './ResourcesSection';

const AboutEpilepsyInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleScrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-muted rounded-lg mb-6 mx-auto max-w-2xl" />
              <div className="h-6 bg-muted rounded-lg mb-4 mx-auto max-w-xl" />
              <div className="h-6 bg-muted rounded-lg mx-auto max-w-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onScrollToContent={handleScrollToContent} />
      <div ref={contentRef}>
        <QuickFactsSection />
      </div>
      <WhatIsEpilepsySection />
      <MythBusterSection />
      <SeizureTypesSection />
      <CausesSection />
      <TreatmentSection />
      <LivingWithEpilepsySection />
      <ResourcesSection />
    </div>
  );
};

export default AboutEpilepsyInteractive;