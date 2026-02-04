import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CampaignHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const CampaignHero: React.FC<CampaignHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-brand-medium-purple/10 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-medium text-primary">{subtitle}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-foreground mb-6">
            {title}
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-medium-purple/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default CampaignHero;