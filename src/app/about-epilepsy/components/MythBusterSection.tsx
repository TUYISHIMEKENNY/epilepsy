'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MythFact {
  id: number;
  myth: string;
  fact: string;
  explanation: string;
}

const mythsFacts: MythFact[] = [
  {
    id: 1,
    myth: 'Epilepsy is a mental illness',
    fact: 'Epilepsy is a neurological condition',
    explanation: 'Epilepsy is a physical condition caused by abnormal electrical activity in the brain. It is not a mental illness, psychological problem, or sign of low intelligence.'
  },
  {
    id: 2,
    myth: 'You can swallow your tongue during a seizure',
    fact: 'It is physically impossible to swallow your tongue',
    explanation: 'The tongue cannot be swallowed. Never put anything in the mouth of someone having a seizure, as this can cause injury. Turn them on their side instead.'
  },
  {
    id: 3,
    myth: 'All seizures involve convulsions',
    fact: 'Many seizures have no visible convulsions',
    explanation: 'Seizures can manifest as brief staring spells, confusion, or subtle movements. Only some seizure types involve the dramatic convulsions often portrayed in media.'
  },
  {
    id: 4,
    myth: 'People with epilepsy cannot work or drive',
    fact: 'Most people with epilepsy can work and drive',
    explanation: 'With proper treatment and seizure control, most people with epilepsy can work, drive, and participate fully in daily activities. Restrictions vary by location and seizure control.'
  },
  {
    id: 5,
    myth: 'Epilepsy is contagious',
    fact: 'Epilepsy cannot be transmitted between people',
    explanation: 'Epilepsy is not contagious. You cannot catch epilepsy from someone who has it, regardless of contact type.'
  },
  {
    id: 6,
    myth: 'Flashing lights cause all seizures',
    fact: 'Only 3% of people with epilepsy are photosensitive',
    explanation: 'While photosensitive epilepsy exists, it affects only a small percentage of people with epilepsy. Most seizures are not triggered by flashing lights.'
  }
];

const MythBusterSection: React.FC = () => {
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  const toggleMyth = (id: number) => {
    setActiveMyth(activeMyth === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted" aria-labelledby="myth-buster-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-coral/10 rounded-full mb-6">
            <Icon name="XCircleIcon" size={20} className="text-brand-coral" variant="solid" />
            <span className="text-sm font-medium text-brand-coral">Myth Busting</span>
          </div>
          
          <h2 id="myth-buster-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Myths vs. Facts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's dispel common misconceptions with evidence-based facts
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {mythsFacts.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg shadow-card overflow-hidden transition-smooth hover:shadow-brand"
            >
              <button
                onClick={() => toggleMyth(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-smooth hover:bg-muted/50"
                aria-expanded={activeMyth === item.id}
                aria-controls={`myth-content-${item.id}`}
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                        <Icon name="XMarkIcon" size={16} className="text-destructive" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-foreground line-through opacity-60">
                        {item.myth}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                        <Icon name="CheckIcon" size={16} className="text-success" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-foreground">
                        {item.fact}
                      </p>
                    </div>
                  </div>
                </div>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  className={`text-muted-foreground transition-smooth flex-shrink-0 ${
                    activeMyth === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {activeMyth === item.id && (
                <div
                  id={`myth-content-${item.id}`}
                  className="px-6 pb-5 pt-2 border-t border-border"
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <Icon name="InformationCircleIcon" size={20} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Have more questions? Our community is here to help
          </p>
          <a
            href="/contact-support"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 active:scale-95"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            <span>Ask a Question</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MythBusterSection;