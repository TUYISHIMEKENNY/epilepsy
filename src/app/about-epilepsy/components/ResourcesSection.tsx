import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Resource {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  color: string;
}

const resources: Resource[] = [
  {
    id: 1,
    icon: 'HeartIcon',
    title: 'Emergency First Aid Guide',
    description: 'Learn what to do when someone has a seizure. This life-saving information could help someone in need.',
    link: '/first-aid-guide',
    linkText: 'View First Aid Guide',
    color: 'brand-coral'
  },
  {
    id: 2,
    icon: 'BookOpenIcon',
    title: 'Personal Stories',
    description: 'Read inspiring stories from people living with epilepsy and their families. Find connection and hope.',
    link: '/stories-hub',
    linkText: 'Read Stories',
    color: 'primary'
  },
  {
    id: 3,
    icon: 'MegaphoneIcon',
    title: 'Awareness Campaigns',
    description: 'Join our advocacy efforts. Participate in Purple Day, International Epilepsy Day, and other initiatives.',
    link: '/campaigns',
    linkText: 'View Campaigns',
    color: 'brand-violet'
  },
  {
    id: 4,
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Contact & Support',
    description: 'Have questions? Need help? Our support team and community are here for you.',
    link: '/contact-support',
    linkText: 'Get Support',
    color: 'brand-turquoise'
  }
];

const ResourcesSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-background" aria-labelledby="resources-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Icon name="FolderOpenIcon" size={20} className="text-primary" variant="solid" />
            <span className="text-sm font-medium text-primary">Additional Resources</span>
          </div>
          
          <h2 id="resources-heading" className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Continue Your Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore more resources to deepen your understanding and connect with our community
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-full bg-${resource.color}/10 flex items-center justify-center mb-4`}>
                <Icon name={resource.icon as any} size={24} className={`text-${resource.color}`} variant="solid" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {resource.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {resource.description}
              </p>
              
              <a
                href={resource.link}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-${resource.color}/10 text-${resource.color} rounded-lg font-medium transition-smooth hover:bg-${resource.color}/20`}
              >
                <span>{resource.linkText}</span>
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Medical information reviewed by healthcare professionals
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Icon name="CheckBadgeIcon" size={16} className="text-success" variant="solid" />
            <span>Evidence-based content</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <Icon name="ShieldCheckIcon" size={16} className="text-success" variant="solid" />
            <span>Medically reviewed</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <Icon name="ClockIcon" size={16} className="text-success" variant="solid" />
            <span>Updated January 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;