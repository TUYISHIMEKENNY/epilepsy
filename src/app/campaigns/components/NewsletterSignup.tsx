'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary via-brand-violet to-brand-medium-purple text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-10 bg-primary-foreground/20 rounded w-2/3 mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-primary-foreground/20 rounded w-full mb-8 animate-pulse" />
            <div className="h-14 bg-primary-foreground/20 rounded animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  if (isSubscribed) {
    return (
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary via-brand-violet to-brand-medium-purple text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-emerald rounded-full mb-6">
              <Icon name="CheckCircleIcon" size={32} variant="solid" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
              You're Subscribed!
            </h2>
            
            <p className="text-lg opacity-90 mb-8">
              Thank you for joining our campaign updates. You'll receive the latest news and ways to get involved directly in your inbox.
            </p>
            
            <button
              onClick={() => setIsSubscribed(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-lg font-medium transition-smooth hover:bg-primary-foreground/90"
            >
              <Icon name="ArrowLeftIcon" size={18} />
              <span>Subscribe Another Email</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary via-brand-violet to-brand-medium-purple text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-full mb-6">
            <Icon name="EnvelopeIcon" size={32} variant="solid" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
            Stay Updated on Campaigns
          </h2>
          
          <p className="text-lg opacity-90 mb-8">
            Get the latest campaign news, event updates, and ways to make an impact delivered to your inbox
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-primary-foreground text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 transition-smooth"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-accent/90 active:scale-95 shadow-card whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          
          <p className="text-sm opacity-75 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;