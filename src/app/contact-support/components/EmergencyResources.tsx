import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface EmergencyResource {
  id: number;
  title: string;
  description: string;
  phone: string;
  availability: string;
  icon: string;
  urgent: boolean;
}

interface EmergencyResourcesProps {
  resources: EmergencyResource[];
}

const EmergencyResources: React.FC<EmergencyResourcesProps> = ({ resources }) => {
  return (
    <section className="py-12 lg:py-16 bg-brand-coral/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-coral/10 text-brand-coral rounded-full mb-4">
              <Icon name="ExclamationTriangleIcon" size={20} variant="solid" />
              <span className="text-sm font-cta font-semibold">Immediate Help Available</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Emergency Crisis Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you or someone you know is in crisis, help is available 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className={`bg-card rounded-lg p-6 lg:p-8 shadow-card transition-smooth hover:shadow-brand ${
                  resource.urgent ? 'ring-2 ring-brand-coral' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${
                    resource.urgent ? 'bg-brand-coral/10' : 'bg-primary/10'
                  }`}>
                    <Icon
                      name={resource.icon as any}
                      size={24}
                      variant="solid"
                      className={resource.urgent ? 'text-brand-coral' : 'text-primary'}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${resource.phone.replace(/\D/g, '')}`}
                    className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-cta font-semibold transition-smooth active:scale-95 ${
                      resource.urgent
                        ? 'bg-brand-coral text-brand-coral-foreground hover:bg-brand-coral/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    <Icon name="PhoneIcon" size={20} variant="solid" />
                    <span>{resource.phone}</span>
                  </a>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Icon name="ClockIcon" size={16} />
                    <span>{resource.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
            <div className="flex items-start gap-3">
              <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium mb-2">
                  If you are experiencing a medical emergency or seizure:
                </p>
                <p className="text-sm text-muted-foreground">
                  Call 911 immediately or go to your nearest emergency room. These hotlines are for emotional support and crisis intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyResources;