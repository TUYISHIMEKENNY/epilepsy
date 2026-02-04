'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'milestone' | 'event' | 'achievement';
}

interface CampaignTimelineProps {
  events: TimelineEvent[];
}

const CampaignTimeline: React.FC<CampaignTimelineProps> = ({ events }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="bg-muted py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground text-center mb-12">
              Campaign Timeline
            </h2>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-6 animate-pulse">
                  <div className="w-12 h-12 bg-card rounded-full" />
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-card rounded w-1/3" />
                    <div className="h-4 bg-card rounded w-1/4" />
                    <div className="h-16 bg-card rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const typeConfig = {
    milestone: {
      icon: 'FlagIcon' as const,
      color: 'bg-primary text-primary-foreground',
    },
    event: {
      icon: 'CalendarDaysIcon' as const,
      color: 'bg-brand-turquoise text-brand-turquoise-foreground',
    },
    achievement: {
      icon: 'TrophyIcon' as const,
      color: 'bg-brand-emerald text-brand-emerald-foreground',
    },
  };

  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Campaign Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones and upcoming events in our awareness journey
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {events.map((event, index) => {
                const config = typeConfig[event.type];
                
                return (
                  <div key={event.id} className="relative flex gap-6 group">
                    <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${config.color} shadow-card transition-smooth group-hover:scale-110`}>
                      <Icon name={config.icon} size={20} variant="solid" />
                    </div>
                    
                    <div className="flex-1 bg-card rounded-lg p-6 shadow-card transition-smooth group-hover:shadow-brand">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl font-headline font-semibold text-foreground">
                          {event.title}
                        </h3>
                        <time className="text-sm text-muted-foreground whitespace-nowrap">
                          {event.date}
                        </time>
                      </div>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignTimeline;