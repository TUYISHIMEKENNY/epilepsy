import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Cause {
  id: number;
  icon: string;
  title: string;
  description: string;
  examples: string[];
}

const causes: Cause[] = [
  {
    id: 1,
    icon: 'UserIcon',
    title: 'Genetic Factors',
    description: 'Some types of epilepsy run in families and are linked to genetic factors.',
    examples: [
      'Family history of epilepsy',
      'Genetic mutations',
      'Inherited syndromes'
    ]
  },
  {
    id: 2,
    icon: 'HeartIcon',
    title: 'Brain Injury',
    description: 'Damage to the brain from various injuries can lead to epilepsy.',
    examples: [
      'Traumatic brain injury',
      'Stroke',
      'Brain surgery complications'
    ]
  },
  {
    id: 3,
    icon: 'BeakerIcon',
    title: 'Infections',
    description: 'Certain infections affecting the brain can cause epilepsy.',
    examples: [
      'Meningitis',
      'Encephalitis',
      'Brain abscess'
    ]
  },
  {
    id: 4,
    icon: 'BoltIcon',
    title: 'Developmental Disorders',
    description: 'Conditions affecting brain development can be associated with epilepsy.',
    examples: [
      'Autism spectrum disorder',
      'Neurofibromatosis',
      'Tuberous sclerosis'
    ]
  },
  {
    id: 5,
    icon: 'SparklesIcon',
    title: 'Prenatal Factors',
    description: 'Issues during pregnancy or birth can increase epilepsy risk.',
    examples: [
      'Brain malformations',
      'Oxygen deprivation at birth',
      'Maternal infections'
    ]
  },
  {
    id: 6,
    icon: 'QuestionMarkCircleIcon',
    title: 'Unknown Causes',
    description: 'In many cases, the cause of epilepsy cannot be identified.',
    examples: [
      'Idiopathic epilepsy',
      'No identifiable cause',
      'Ongoing research'
    ]
  }
];

const CausesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted" aria-labelledby="causes-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="MagnifyingGlassIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-medium text-primary">Understanding Origins</span>
          </div>
          
          <h2 id="causes-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            What Causes Epilepsy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Epilepsy can develop from various factors. Understanding potential causes helps with diagnosis and treatment planning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {causes.map((cause) => (
            <div
              key={cause.id}
              className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={cause.icon as any} size={24} className="text-primary" variant="solid" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cause.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {cause.examples.map((example, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto bg-primary/5 rounded-lg p-8 border border-primary/20">
          <div className="flex gap-4">
            <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-1" variant="solid" />
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Important to Know
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In about 60% of cases, the cause of epilepsy is unknown. This is called idiopathic or cryptogenic epilepsy. Even when the cause cannot be identified, epilepsy can often be successfully treated and managed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ongoing research continues to improve our understanding of epilepsy causes, leading to better diagnostic tools and treatment options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;