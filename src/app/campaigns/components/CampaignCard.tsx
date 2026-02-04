import React from 'react';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CampaignCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  status: 'upcoming' | 'active' | 'completed';
  participantCount: number;
  hashtag: string;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  id,
  title,
  date,
  description,
  image,
  alt,
  status,
  participantCount,
  hashtag,
}) => {
  const statusConfig = {
    upcoming: {
      label: 'Upcoming',
      color: 'bg-brand-turquoise text-brand-turquoise-foreground',
      icon: 'ClockIcon' as const,
    },
    active: {
      label: 'Active Now',
      color: 'bg-brand-emerald text-brand-emerald-foreground',
      icon: 'BoltIcon' as const,
    },
    completed: {
      label: 'Completed',
      color: 'bg-muted text-muted-foreground',
      icon: 'CheckCircleIcon' as const,
    },
  };

  const config = statusConfig[status];

  return (
    <article className="bg-card rounded-lg shadow-card overflow-hidden transition-smooth hover:shadow-brand group">
      <div className="relative h-56 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${config.color}`}>
            <Icon name={config.icon} size={14} variant="solid" />
            {config.label}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Icon name="CalendarIcon" size={16} />
          <time dateTime={date}>{date}</time>
        </div>
        
        <h3 className="text-xl font-headline font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <Icon name="UserGroupIcon" size={18} className="text-primary" />
            <span className="text-sm font-medium text-foreground">
              {participantCount.toLocaleString()} participants
            </span>
          </div>
          
          <span className="text-sm font-medium text-primary">
            {hashtag}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CampaignCard;