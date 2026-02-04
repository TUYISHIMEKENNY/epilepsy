import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface KeyPoint {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const keyPoints: KeyPoint[] = [
{
  id: 1,
  icon: 'BoltIcon',
  title: 'Neurological Condition',
  description: 'Epilepsy is a chronic disorder of the brain characterized by recurrent, unprovoked seizures caused by abnormal electrical activity.'
},
{
  id: 2,
  icon: 'ChartBarIcon',
  title: 'Varied Presentations',
  description: 'Seizures can range from brief lapses of attention to prolonged convulsions, affecting people differently based on seizure type.'
},
{
  id: 3,
  icon: 'BeakerIcon',
  title: 'Treatable Condition',
  description: 'With proper diagnosis and treatment, most people with epilepsy can control their seizures and live full, active lives.'
},
{
  id: 4,
  icon: 'ShieldCheckIcon',
  title: 'Not Contagious',
  description: 'Epilepsy is not contagious, not caused by mental illness, and does not indicate low intelligence or disability.'
}];


const WhatIsEpilepsySection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-background" aria-labelledby="what-is-epilepsy-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Icon name="InformationCircleIcon" size={20} className="text-primary" variant="solid" />
              <span className="text-sm font-medium text-primary">The Basics</span>
            </div>
            
            <h2 id="what-is-epilepsy-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-6">
              What Is Epilepsy?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Epilepsy is one of the world's oldest recognized conditions, with written records dating back to 4000 BCE. Despite its long history, misconceptions persist. Let's set the record straight with evidence-based information.
            </p>
            
            <div className="space-y-6">
              {keyPoints.map((point) =>
              <div key={point.id} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={point.icon as any} size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <AppImage
                src="https://images.unsplash.com/photo-1666214280577-5f90bc36be92"
                alt="Medical professional examining brain scan imagery on computer screen in modern healthcare facility"
                className="w-full h-[500px] object-cover warm-image" />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-medium mb-2">Medical Insight</p>
                <p className="text-lg font-headline">
                  Modern neuroscience continues to advance our understanding and treatment of epilepsy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default WhatIsEpilepsySection;