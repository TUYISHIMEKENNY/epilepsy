    import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface QuickFact {
  id: number;
  icon: string;
  stat: string;
  description: string;
  color: string;
}

const quickFacts: QuickFact[] = [
  {
    id: 1,
    icon: 'UsersIcon',
    stat: '1 in 26',
    description: 'People will develop epilepsy in their lifetime',
    color: 'primary'
  },
  {
    id: 2,
    icon: 'GlobeAltIcon',
    stat: '50 Million',
    description: 'People worldwide live with epilepsy',
    color: 'brand-violet'
  },
  {
    id: 3,
    icon: 'HeartIcon',
    stat: '70%',
    description: 'Can live seizure-free with proper treatment',
    color: 'brand-emerald'
  },
  {
    id: 4,
    icon: 'SparklesIcon',
    stat: 'All Ages',
    description: 'Epilepsy can develop at any age',
    color: 'brand-turquoise'
  }
];

const QuickFactsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted" aria-labelledby="quick-facts-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="quick-facts-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Quick Facts About Epilepsy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the basics helps break down misconceptions and build awareness
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((fact) => (
            <div
              key={fact.id}
              className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${fact.color}/10 mb-4`}>
                <Icon name={fact.icon as any} size={24} className={`text-${fact.color}`} variant="solid" />
              </div>
              <div className="text-3xl font-headline font-bold text-foreground mb-2">
                {fact.stat}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFactsSection;