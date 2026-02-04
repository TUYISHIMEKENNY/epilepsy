import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import QuickAccessTiles from './components/QuickAccessTiles';
import CampaignCountdown from './components/CampaignCountdown';
import StatisticsSection from './components/StatisticsSection';
import MythBuster from './components/MythBuster';
import FeaturedStory from './components/FeaturedStory';
import NewsletterSignup from './components/NewsletterSignup';
import EmergencyAccessButton from './components/EmergencyAccessButton';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - Epilepsy Awareness Hub',
  description: 'Join the global movement for epilepsy awareness. Access educational resources, inspiring community stories, first aid guides, and advocacy campaigns. Knowledge illuminates, community heals.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <QuickAccessTiles />
        <CampaignCountdown />
        <StatisticsSection />
        <MythBuster />
        <FeaturedStory />
        <NewsletterSignup />
      </main>

      <Footer />
      <EmergencyAccessButton />
    </div>
  );
}