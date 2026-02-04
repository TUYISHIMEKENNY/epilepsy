'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MythFact {
  id: number;
  myth: string;
  fact: string;
  category: string;
}

const MythBuster = () => {
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  const mythsFacts: MythFact[] = [
    {
      id: 1,
      myth: "Epilepsy is a mental illness",
      fact: "Epilepsy is a neurological condition caused by abnormal electrical activity in the brain. It is not a mental illness, though it can affect mental health.",
      category: "Understanding"
    },
    {
      id: 2,
      myth: "You should put something in the mouth during a seizure",
      fact: "Never put anything in someone's mouth during a seizure. This can cause injury. Instead, protect their head and turn them on their side.",
      category: "First Aid"
    },
    {
      id: 3,
      myth: "People with epilepsy can't work or drive",
      fact: "Many people with epilepsy lead full, active lives including working and driving. Restrictions depend on seizure control and local regulations.",
      category: "Living Well"
    },
    {
      id: 4,
      myth: "Epilepsy is contagious",
      fact: "Epilepsy is not contagious. You cannot catch epilepsy from someone who has it. It's caused by various factors affecting brain function.",
      category: "Understanding"
    }
  ];

  const handleToggle = (id: number) => {
    setActiveMyth(activeMyth === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-4">
              <Icon name="ExclamationCircleIcon" size={20} className="text-red-600" />
              <span className="text-sm font-medium text-red-600">Myth Busting</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Separating Fact from Fiction
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Common misconceptions about epilepsy debunked with scientific facts
            </p>
          </div>

          <div className="space-y-4">
            {mythsFacts.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl shadow-card overflow-hidden transition-smooth hover:shadow-brand"
              >
                <button
                  onClick={() => handleToggle(item.id)}
                  className="w-full px-6 py-5 flex items-start gap-4 text-left transition-smooth hover:bg-muted"
                  aria-expanded={activeMyth === item.id}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Icon
                      name="XCircleIcon"
                      size={24}
                      variant="solid"
                      className="text-red-600"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className="text-lg font-headline font-semibold text-foreground">
                        {item.myth}
                      </h3>
                      <Icon
                        name="ChevronDownIcon"
                        size={20}
                        className={`flex-shrink-0 text-muted-foreground transition-smooth ${
                          activeMyth === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <span className="inline-block px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                      {item.category}
                    </span>
                  </div>
                </button>

                {activeMyth === item.id && (
                  <div className="px-6 pb-5 pl-20">
                    <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                      <Icon
                        name="CheckCircleIcon"
                        size={24}
                        variant="solid"
                        className="flex-shrink-0 text-emerald-600 mt-0.5"
                      />
                      <div>
                        <p className="text-sm font-medium text-emerald-900 mb-1">The Truth:</p>
                        <p className="text-sm text-emerald-800 leading-relaxed">
                          {item.fact}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/about-epilepsy"
              className="inline-flex items-center gap-2 text-primary font-medium transition-smooth hover:gap-3"
            >
              <span>Learn more about epilepsy facts</span>
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MythBuster;