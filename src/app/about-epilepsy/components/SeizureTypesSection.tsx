'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SeizureType {
  id: number;
  category: string;
  name: string;
  description: string;
  symptoms: string[];
  duration: string;
  color: string;
}

const seizureTypes: SeizureType[] = [
  {
    id: 1,
    category: 'Focal Onset',
    name: 'Focal Aware Seizures',
    description: 'Previously called simple partial seizures. Person remains conscious and aware during the seizure.',
    symptoms: [
      'Sudden feelings of fear or joy',
      'Tingling or numbness',
      'Visual or auditory changes',
      'Muscle jerking in one area'
    ],
    duration: 'Usually less than 2 minutes',
    color: 'primary'
  },
  {
    id: 2,
    category: 'Focal Onset',
    name: 'Focal Impaired Awareness',
    description: 'Previously called complex partial seizures. Consciousness is affected, person may seem confused or dazed.',
    symptoms: [
      'Staring blankly',
      'Repetitive movements (lip smacking, hand rubbing)',
      'Confusion or inability to respond',
      'Wandering or fumbling'
    ],
    duration: '1-2 minutes, with confusion afterward',
    color: 'brand-violet'
  },
  {
    id: 3,
    category: 'Generalized Onset',
    name: 'Absence Seizures',
    description: 'Brief lapses in awareness, often mistaken for daydreaming. Common in children.',
    symptoms: [
      'Staring into space',
      'Brief loss of awareness',
      'Subtle body movements',
      'Sudden stop in activity'
    ],
    duration: 'Usually less than 10 seconds',
    color: 'brand-turquoise'
  },
  {
    id: 4,
    category: 'Generalized Onset',
    name: 'Tonic-Clonic Seizures',
    description: 'Previously called grand mal seizures. Most recognizable type with loss of consciousness and body convulsions.',
    symptoms: [
      'Loss of consciousness',
      'Body stiffening (tonic phase)',
      'Rhythmic jerking (clonic phase)',
      'Possible loss of bladder control'
    ],
    duration: '1-3 minutes, followed by confusion and fatigue',
    color: 'brand-coral'
  },
  {
    id: 5,
    category: 'Generalized Onset',
    name: 'Myoclonic Seizures',
    description: 'Brief, shock-like jerks of muscles or muscle groups.',
    symptoms: [
      'Sudden muscle jerks',
      'Quick, involuntary movements',
      'Usually affects arms and legs',
      'Person remains conscious'
    ],
    duration: 'Less than a second',
    color: 'brand-emerald'
  },
  {
    id: 6,
    category: 'Generalized Onset',
    name: 'Atonic Seizures',
    description: 'Sudden loss of muscle tone, also called drop seizures.',
    symptoms: [
      'Sudden loss of muscle control',
      'Head dropping forward',
      'Falling to the ground',
      'Brief loss of consciousness'
    ],
    duration: 'Usually less than 15 seconds',
    color: 'secondary'
  }
];

const SeizureTypesSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<number>(1);

  const selectedSeizure = seizureTypes.find(type => type.id === selectedType);

  return (
    <section className="py-16 lg:py-24 bg-background" aria-labelledby="seizure-types-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="ClipboardDocumentListIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-medium text-primary">Medical Classification</span>
          </div>
          
          <h2 id="seizure-types-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Types of Seizures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding different seizure types helps with proper recognition and response
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-4 shadow-card sticky top-24">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Select Seizure Type
              </h3>
              <div className="space-y-2">
                {seizureTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-smooth ${
                      selectedType === type.id
                        ? `bg-${type.color}/10 text-${type.color} font-medium`
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <div className="text-xs text-muted-foreground mb-1">
                      {type.category}
                    </div>
                    <div className="text-sm">
                      {type.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            {selectedSeizure && (
              <div className="bg-card rounded-lg p-8 shadow-brand">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${selectedSeizure.color}/10 flex items-center justify-center`}>
                    <Icon name="BoltIcon" size={24} className={`text-${selectedSeizure.color}`} variant="solid" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      {selectedSeizure.category}
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-foreground mb-2">
                      {selectedSeizure.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedSeizure.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="EyeIcon" size={20} className="text-primary" />
                      <span>Common Symptoms</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedSeizure.symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" variant="solid" />
                          <span className="text-muted-foreground">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="ClockIcon" size={20} className="text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">
                        Typical Duration
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {selectedSeizure.duration}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-warning/10 rounded-lg border border-warning/20">
                  <div className="flex gap-3">
                    <Icon name="ExclamationTriangleIcon" size={20} className="text-warning flex-shrink-0 mt-0.5" variant="solid" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Important Note
                      </p>
                      <p className="text-sm text-muted-foreground">
                        If you witness a seizure lasting longer than 5 minutes, or if multiple seizures occur without recovery between them, call emergency services immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/first-aid-guide"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-coral text-brand-coral-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-brand-coral/90 active:scale-95 shadow-card"
          >
            <Icon name="HeartIcon" size={20} variant="solid" />
            <span>Learn Seizure First Aid</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SeizureTypesSection;