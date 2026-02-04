import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  title: string;
  subtitle: string;
  emergencyText: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, subtitle, emergencyText }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-brand-violet/5 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-coral/10 text-brand-coral rounded-full mb-6">
            <Icon name="HeartIcon" size={20} variant="solid" />
            <span className="text-sm font-cta font-semibold">{emergencyText}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
            {title}
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;