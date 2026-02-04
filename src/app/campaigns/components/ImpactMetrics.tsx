'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: string;
  label: string;
  value: string;
  icon: 'UserGroupIcon' | 'HeartIcon' | 'AcademicCapIcon' | 'GlobeAltIcon';
  color: string;
}

interface ImpactMetricsProps {
  metrics: Metric[];
}

const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ metrics }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-10 bg-primary-foreground/20 rounded w-1/3 mx-auto mb-12 animate-pulse" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center animate-pulse">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full mx-auto mb-4" />
                  <div className="h-12 bg-primary-foreground/20 rounded mb-2" />
                  <div className="h-6 bg-primary-foreground/20 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-center mb-12">
            Our Impact Together
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.id} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${metric.color} mb-4 transition-smooth group-hover:scale-110`}>
                  <Icon name={metric.icon} size={28} variant="solid" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-headline font-bold mb-2">
                  {metric.value}
                </div>
                
                <div className="text-lg opacity-90">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;