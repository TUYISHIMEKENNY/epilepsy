import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SupportGroup {
  id: number;
  name: string;
  type: 'virtual' | 'in-person' | 'hybrid';
  schedule: string;
  location: string;
  description: string;
  contactEmail: string;
  capacity: string;
}

interface SupportGroupsProps {
  groups: SupportGroup[];
}

const SupportGroups: React.FC<SupportGroupsProps> = ({ groups }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'virtual':
        return 'VideoCameraIcon';
      case 'in-person':
        return 'UserGroupIcon';
      case 'hybrid':
        return 'GlobeAltIcon';
      default:
        return 'UserGroupIcon';
    }
  };

  const getTypeBadge = (type: string) => {
    const styles = {
      virtual: 'bg-brand-turquoise/10 text-brand-turquoise',
      'in-person': 'bg-brand-emerald/10 text-brand-emerald',
      hybrid: 'bg-brand-violet/10 text-brand-violet',
    };
    return styles[type as keyof typeof styles] || styles['in-person'];
  };

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Support Group Meetings
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect with others who understand your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon
                      name={getTypeIcon(group.type) as any}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-headline font-semibold text-foreground">
                        {group.name}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeBadge(group.type)}`}>
                        {group.type.charAt(0).toUpperCase() + group.type.slice(1)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2 text-sm">
                    <Icon name="CalendarIcon" size={16} className="flex-shrink-0 mt-0.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{group.schedule}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Icon name="MapPinIcon" size={16} className="flex-shrink-0 mt-0.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{group.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="UsersIcon" size={16} className="flex-shrink-0 text-muted-foreground" />
                    <span className="text-muted-foreground">{group.capacity}</span>
                  </div>
                </div>

                <a
                  href={`mailto:${group.contactEmail}`}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-cta font-medium transition-smooth hover:bg-primary/90 active:scale-95"
                >
                  <Icon name="EnvelopeIcon" size={16} />
                  <span>Contact for Details</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-card rounded-lg border border-border">
            <div className="flex items-start gap-3">
              <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium mb-2">
                  New to support groups?
                </p>
                <p className="text-sm text-muted-foreground">
                  Support groups provide a safe space to share experiences, learn coping strategies, and build connections with others who understand epilepsy. All meetings are confidential and facilitated by trained volunteers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportGroups;