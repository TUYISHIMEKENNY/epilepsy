import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Treatment {
  id: number;
  icon: string;
  title: string;
  description: string;
  effectiveness: string;
}

const treatments: Treatment[] = [
{
  id: 1,
  icon: 'BeakerIcon',
  title: 'Anti-Seizure Medications',
  description: 'The most common treatment approach. Various medications work by stabilizing electrical activity in the brain.',
  effectiveness: 'Controls seizures in about 70% of people'
},
{
  id: 2,
  icon: 'ScissorsIcon',
  title: 'Epilepsy Surgery',
  description: 'For people whose seizures originate from a specific brain area, surgery may remove or disconnect the affected tissue.',
  effectiveness: 'Can provide seizure freedom for 60-70% of suitable candidates'
},
{
  id: 3,
  icon: 'BoltIcon',
  title: 'Vagus Nerve Stimulation',
  description: 'A device implanted under the skin sends electrical signals to the brain via the vagus nerve to reduce seizure frequency.',
  effectiveness: 'Reduces seizures by 50% or more in about half of patients'
},
{
  id: 4,
  icon: 'SparklesIcon',
  title: 'Ketogenic Diet',
  description: 'A high-fat, low-carbohydrate diet that can help control seizures, especially in children.',
  effectiveness: 'Effective for about 50% of children who try it'
},
{
  id: 5,
  icon: 'HeartIcon',
  title: 'Responsive Neurostimulation',
  description: 'An implanted device monitors brain activity and delivers electrical stimulation when seizure activity is detected.',
  effectiveness: 'Reduces seizure frequency by 50% or more in many patients'
},
{
  id: 6,
  icon: 'UserGroupIcon',
  title: 'Lifestyle Management',
  description: 'Adequate sleep, stress management, avoiding triggers, and maintaining medication schedules are crucial.',
  effectiveness: 'Essential component of all treatment plans'
}];


const TreatmentSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-background" aria-labelledby="treatment-heading">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1b136e511-1766960254908.png"
                alt="Healthcare professional in white coat consulting with patient in modern medical office with natural lighting"
                className="w-full h-[500px] object-cover warm-image" />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-medium mb-2">Treatment Success</p>
                <p className="text-lg font-headline">
                  With proper treatment, most people with epilepsy can live seizure-free
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-6">
              <Icon name="CheckBadgeIcon" size={20} className="text-success" variant="solid" />
              <span className="text-sm font-medium text-success">Treatment Options</span>
            </div>
            
            <h2 id="treatment-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-6">
              How Is Epilepsy Treated?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Modern medicine offers multiple effective treatment options for epilepsy. The goal is to achieve seizure freedom with minimal side effects, allowing people to live full, active lives.
            </p>
            
            <div className="bg-success/5 rounded-lg p-6 border border-success/20">
              <div className="flex gap-3">
                <Icon name="LightBulbIcon" size={24} className="text-success flex-shrink-0 mt-1" variant="solid" />
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">
                    Personalized Approach
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Treatment plans are tailored to each individual based on seizure type, frequency, lifestyle, and overall health. What works for one person may not work for another, so finding the right treatment often requires patience and collaboration with healthcare providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-headline font-bold text-foreground mb-4">
            Available Treatment Methods
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multiple approaches can be used alone or in combination
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) =>
          <div
            key={treatment.id}
            className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand hover:-translate-y-1">

              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={treatment.icon as any} size={24} className="text-primary" variant="solid" />
              </div>
              
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {treatment.title}
              </h4>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {treatment.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <Icon name="ChartBarIcon" size={16} className="text-success flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    {treatment.effectiveness}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto bg-warning/5 rounded-lg p-8 border border-warning/20">
          <div className="flex gap-4">
            <Icon name="ExclamationTriangleIcon" size={24} className="text-warning flex-shrink-0 mt-1" variant="solid" />
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                Working with Healthcare Providers
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Never stop or change epilepsy medications without consulting your healthcare provider. Sudden changes can trigger seizures, even if you've been seizure-free for a long time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Regular follow-ups, honest communication about side effects, and adherence to treatment plans are essential for successful epilepsy management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TreatmentSection;