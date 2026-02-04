import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onScrollToContent: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToContent }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 gradient-light" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="AcademicCapIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-medium text-primary">Evidence-Based Education</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-foreground mb-6 leading-tight">
            Understanding Epilepsy:<br />
            <span className="text-primary">Knowledge That Empowers</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Epilepsy affects over 50 million people worldwide. Let's transform complex medical information into accessible knowledge that breaks stigma and builds understanding.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToContent}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 active:scale-95 shadow-card flex items-center justify-center gap-2"
              aria-label="Start learning about epilepsy"
            >
              <span>Start Learning</span>
              <Icon name="ArrowDownIcon" size={20} />
            </button>
            
            <a
              href="/first-aid-guide"
              className="w-full sm:w-auto px-8 py-4 bg-brand-coral text-brand-coral-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-brand-coral/90 active:scale-95 shadow-card flex items-center justify-center gap-2"
              aria-label="View emergency first aid guide"
            >
              <Icon name="HeartIcon" size={20} variant="solid" />
              <span>Emergency First Aid</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
};

export default HeroSection;