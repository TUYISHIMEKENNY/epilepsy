'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StorySubmissionCTAProps {
  onSubmitClick: () => void;
}

const StorySubmissionCTA: React.FC<StorySubmissionCTAProps> = ({ onSubmitClick }) => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-brand-violet/10 rounded-xl p-8 lg:p-12 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
        <Icon name="PencilSquareIcon" size={32} className="text-primary" />
      </div>

      <div className="space-y-3 max-w-2xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-headline font-bold text-foreground">
          Share Your Story
        </h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          Your experience matters. Help others feel less alone by sharing your journey with epilepsy. Every story has the power to educate, inspire, and reduce stigma.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onSubmitClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-smooth active:scale-95 shadow-card"
          aria-label="Submit your story"
        >
          <Icon name="PlusIcon" size={20} />
          Submit Your Story
        </button>
        <button
          className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground rounded-lg font-cta font-semibold hover:bg-muted transition-smooth active:scale-95"
          aria-label="Learn about story guidelines"
        >
          <Icon name="InformationCircleIcon" size={20} />
          Story Guidelines
        </button>
      </div>

      <p className="text-sm text-muted-foreground">
        All submissions are reviewed to ensure appropriate content while maintaining authenticity
      </p>
    </section>
  );
};

export default StorySubmissionCTA;