'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: number;
  title: string;
  description: string;
  icon: string;
  action: string;
  actionLabel: string;
  responseTime: string;
  available: boolean;
}

interface ContactMethodsProps {
  methods: ContactMethod[];
}

const ContactMethods: React.FC<ContactMethodsProps> = ({ methods }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
                Ways to Reach Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the contact method that works best for you
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methods.map((method) => (
                <div key={method.id} className="bg-card rounded-lg p-6 shadow-card">
                  <div className="h-48" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method) => (
              <div
                key={method.id}
                className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand group"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-smooth">
                      <Icon
                        name={method.icon as any}
                        size={28}
                        className="text-primary"
                      />
                    </div>
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {method.description}
                    </p>
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground">{method.responseTime}</span>
                    </div>
                    
                    {method.available ? (
                      <a
                        href={method.action}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-cta font-medium transition-smooth hover:bg-primary/90 active:scale-95"
                      >
                        <span>{method.actionLabel}</span>
                        <Icon name="ArrowRightIcon" size={16} />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-muted text-muted-foreground rounded-lg font-cta font-medium cursor-not-allowed"
                      >
                        <span>Currently Unavailable</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;