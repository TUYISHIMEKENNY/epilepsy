import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LifestyleTip {
  id: number;
  icon: string;
  title: string;
  description: string;
  tips: string[];
}

const lifestyleTips: LifestyleTip[] = [
  {
    id: 1,
    icon: 'MoonIcon',
    title: 'Sleep Management',
    description: 'Adequate sleep is crucial for seizure control',
    tips: [
      'Maintain consistent sleep schedule',
      'Aim for 7-9 hours nightly',
      'Create relaxing bedtime routine',
      'Avoid screens before bed'
    ]
  },
  {
    id: 2,
    icon: 'HeartIcon',
    title: 'Stress Reduction',
    description: 'Managing stress helps reduce seizure triggers',
    tips: [
      'Practice relaxation techniques',
      'Regular exercise routine',
      'Mindfulness or meditation',
      'Seek support when needed'
    ]
  },
  {
    id: 3,
    icon: 'BeakerIcon',
    title: 'Medication Adherence',
    description: 'Taking medications as prescribed is essential',
    tips: [
      'Set daily reminders',
      'Use pill organizers',
      'Keep medications accessible',
      'Refill prescriptions early'
    ]
  },
  {
    id: 4,
    icon: 'ShieldCheckIcon',
    title: 'Safety Precautions',
    description: 'Simple measures can prevent injury during seizures',
    tips: [
      'Wear medical alert jewelry',
      'Inform close contacts',
      'Avoid swimming alone',
      'Use protective equipment when needed'
    ]
  }
];

const LivingWithEpilepsySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted" aria-labelledby="living-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-emerald/10 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} className="text-brand-emerald" variant="solid" />
            <span className="text-sm font-medium text-brand-emerald">Daily Life</span>
          </div>
          
          <h2 id="living-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Living Well with Epilepsy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With proper management and lifestyle adjustments, most people with epilepsy lead full, active lives
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {lifestyleTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-emerald/10 flex items-center justify-center">
                  <Icon name={tip.icon as any} size={24} className="text-brand-emerald" variant="solid" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {tip.tips.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="CheckCircleIcon" size={18} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-card">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Icon name="BriefcaseIcon" size={24} className="text-primary" variant="solid" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Work & Education
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Most people with epilepsy can work and study successfully. Know your rights and communicate with employers or educators about your needs.
            </p>
            <a
              href="/contact-support"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <span>Learn more</span>
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-card">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Icon name="UserGroupIcon" size={24} className="text-primary" variant="solid" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Relationships & Social Life
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Open communication with friends and family helps build understanding and support. Epilepsy doesn't define who you are.
            </p>
            <a
              href="/stories-hub"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <span>Read stories</span>
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-card">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Icon name="TruckIcon" size={24} className="text-primary" variant="solid" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Driving & Travel
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Driving regulations vary by location. Many people with controlled epilepsy can drive. Always check local laws and medical requirements.
            </p>
            <a
              href="/contact-support"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <span>Get guidance</span>
              <Icon name="ArrowRightIcon" size={16} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-primary/5 rounded-lg p-8 border border-primary/20">
          <div className="text-center">
            <Icon name="HeartIcon" size={32} className="text-primary mx-auto mb-4" variant="solid" />
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              You Are Not Alone
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Millions of people worldwide live fulfilling lives with epilepsy. Connect with our community, share your experiences, and find support from others who understand your journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/stories-hub"
                className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 active:scale-95 flex items-center justify-center gap-2"
              >
                <Icon name="BookOpenIcon" size={20} />
                <span>Read Community Stories</span>
              </a>
              <a
                href="/contact-support"
                className="w-full sm:w-auto px-6 py-3 bg-card text-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-muted active:scale-95 border border-border flex items-center justify-center gap-2"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>Get Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivingWithEpilepsySection;