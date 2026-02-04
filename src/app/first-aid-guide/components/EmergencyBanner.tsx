import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface EmergencyBannerProps {
  className?: string;
}

const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ className = '' }) => {
  return (
    <div className={`bg-brand-coral text-brand-coral-foreground ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Icon name="ExclamationTriangleIcon" size={24} variant="solid" className="animate-pulse" />
            <span className="font-cta font-semibold text-lg">Emergency Information</span>
          </div>
          <span className="text-sm font-body">
            If someone is having a seizure lasting more than 5 minutes, call emergency services immediately
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;