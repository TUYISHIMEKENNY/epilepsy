'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Campaign {
  id: number;
  name: string;
  date: string;
  description: string;
  color: string;
  bgGradient: string;
}

const CampaignCountdown = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const upcomingCampaigns: Campaign[] = [
    {
      id: 1,
      name: "International Epilepsy Day",
      date: "2026-02-10T00:00:00",
      description: "Join the global movement for epilepsy awareness",
      color: "text-blue-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      id: 2,
      name: "Purple Day",
      date: "2026-03-26T00:00:00",
      description: "Wear purple and spread awareness worldwide",
      color: "text-purple-600",
      bgGradient: "from-purple-50 to-pink-50"
    }
  ];

  const nextCampaign = upcomingCampaigns[0];

  useEffect(() => {
    if (!isHydrated) return;

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const targetDate = new Date(nextCampaign.date).getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [isHydrated, nextCampaign.date]);

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-brand p-8 lg:p-12">
            <div className="h-8 w-64 bg-gray-200 rounded-lg mb-4 animate-pulse" />
            <div className="h-6 w-full bg-gray-200 rounded-lg mb-8 animate-pulse" />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto bg-gradient-to-br ${nextCampaign.bgGradient} rounded-2xl shadow-brand p-8 lg:p-12`}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4">
              <Icon name="CalendarIcon" size={20} className={nextCampaign.color} />
              <span className="text-sm font-medium text-foreground">Upcoming Campaign</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-3">
              {nextCampaign.name}
            </h2>
            
            <p className="text-lg text-muted-foreground">
              {nextCampaign.description}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Days', value: timeRemaining.days },
              { label: 'Hours', value: timeRemaining.hours },
              { label: 'Minutes', value: timeRemaining.minutes },
              { label: 'Seconds', value: timeRemaining.seconds }
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 text-center shadow-card">
                <div className={`text-4xl lg:text-5xl font-headline font-bold ${nextCampaign.color} mb-2`}>
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/campaigns"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-white ${nextCampaign.color} rounded-lg font-cta font-semibold text-lg transition-smooth hover:shadow-brand hover:scale-105 active:scale-95`}
            >
              <span>View Campaign Details</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            
            <Link
              href="/contact-support"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/50 backdrop-blur-sm text-foreground rounded-lg font-cta font-semibold text-lg transition-smooth hover:bg-white/70 border-2 border-white"
            >
              <Icon name="BellAlertIcon" size={20} />
              <span>Get Reminders</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignCountdown;