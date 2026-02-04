'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Campaign {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  ctaText: string;
  ctaLink: string;
  bgGradient: string;
}

const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const campaigns: Campaign[] = [
  {
    id: 1,
    title: "Purple Day 2026",
    subtitle: "March 26th - Join the Global Movement",
    description: "Wear purple, share stories, and help break the stigma surrounding epilepsy. Together, we illuminate understanding.",
    image: "https://images.unsplash.com/photo-1662100388153-e2d2bdf52e78",
    alt: "Group of diverse people wearing purple shirts standing together in solidarity for epilepsy awareness",
    ctaText: "Join Purple Day",
    ctaLink: "/campaigns",
    bgGradient: "from-purple-600 to-purple-800"
  },
  {
    id: 2,
    title: "International Epilepsy Day",
    subtitle: "February 10th - Uniting for Understanding",
    description: "A global day of awareness bringing together individuals, families, and communities to share knowledge and support.",
    image: "https://images.unsplash.com/photo-1651372381086-9861c9c81db5",
    alt: "Hands of multiple people joined together in circle showing unity and community support",
    ctaText: "Learn More",
    ctaLink: "/campaigns",
    bgGradient: "from-blue-600 to-indigo-800"
  },
  {
    id: 3,
    title: "First Aid Saves Lives",
    subtitle: "Be Prepared, Be Confident",
    description: "Learn the essential steps to help someone during a seizure. Your knowledge can make a life-changing difference.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1604f94d1-1764691794857.png",
    alt: "Healthcare professional demonstrating first aid techniques with medical training mannequin",
    ctaText: "View First Aid Guide",
    ctaLink: "/first-aid-guide",
    bgGradient: "from-red-500 to-pink-700"
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % campaigns.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, campaigns.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campaigns.length) % campaigns.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campaigns.length);
  };

  if (!isHydrated) {
    return (
      <section className="relative h-[600px] lg:h-[700px] bg-gradient-to-br from-purple-600 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="h-12 w-48 bg-white/20 rounded-lg mb-4 animate-pulse" />
            <div className="h-16 w-full bg-white/20 rounded-lg mb-6 animate-pulse" />
            <div className="h-24 w-full bg-white/20 rounded-lg mb-8 animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[600px] lg:h-[700px] overflow-hidden" aria-label="Featured campaigns carousel">
      <div className="absolute inset-0">
        {campaigns.map((campaign, index) =>
        <div
          key={campaign.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'}`
          }>

            <div className="absolute inset-0">
              <AppImage
              src={campaign.image}
              alt={campaign.alt}
              className="w-full h-full object-cover"
              priority={index === 0} />

            </div>
            <div className={`absolute inset-0 bg-gradient-to-r ${campaign.bgGradient} opacity-90`} />
          </div>
        )}
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <Icon name="SparklesIcon" size={20} variant="solid" />
            <span className="text-sm font-medium">{campaigns[currentSlide].subtitle}</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
            {campaigns[currentSlide].title}
          </h1>
          
          <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-95">
            {campaigns[currentSlide].description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href={campaigns[currentSlide].ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-lg font-cta font-semibold text-lg transition-smooth hover:bg-purple-50 hover:scale-105 active:scale-95 shadow-brand">

              <span>{campaigns[currentSlide].ctaText}</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            
            <Link
              href="/about-epilepsy"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-cta font-semibold text-lg transition-smooth hover:bg-white/20 border-2 border-white/30">

              <span>Learn About Epilepsy</span>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full transition-smooth hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous campaign">

        <Icon name="ChevronLeftIcon" size={24} />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full transition-smooth hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next campaign">

        <Icon name="ChevronRightIcon" size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3" role="tablist" aria-label="Campaign slides">
        {campaigns.map((campaign, index) =>
        <button
          key={campaign.id}
          onClick={() => handleSlideChange(index)}
          className={`w-3 h-3 rounded-full transition-smooth ${
          index === currentSlide ?
          'bg-white w-8' : 'bg-white/50 hover:bg-white/70'}`
          }
          aria-label={`Go to ${campaign.title}`}
          aria-selected={index === currentSlide}
          role="tab" />
        )}
      </div>
    </section>
  );
};

export default HeroSection;