import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface QuickActionCardProps {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'emergency';
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onClick,
  variant = 'primary'
}) => {
  const variantStyles = {
    primary: 'bg-primary/10 border-primary/20 hover:bg-primary/20',
    secondary: 'bg-secondary/10 border-secondary/20 hover:bg-secondary/20',
    emergency: 'bg-brand-coral/10 border-brand-coral/20 hover:bg-brand-coral/20'
  };

  const iconColors = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    emergency: 'text-brand-coral'
  };

  return (
    <div className={`border-2 rounded-lg p-6 transition-smooth ${variantStyles[variant]}`}>
      <div className="flex flex-col items-center text-center gap-4">
        <div className={`w-16 h-16 rounded-full bg-background flex items-center justify-center ${iconColors[variant]}`}>
          <Icon name={icon} size={32} variant="solid" />
        </div>
        <div className="space-y-2">
          <h3 className="font-headline font-semibold text-xl text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <button
          onClick={onClick}
          className={`w-full px-6 py-3 rounded-lg font-cta font-semibold transition-smooth active:scale-95 ${
            variant === 'emergency' ?'bg-brand-coral text-brand-coral-foreground hover:bg-brand-coral/90'
              : variant === 'primary' ?'bg-primary text-primary-foreground hover:bg-primary/90' :'bg-secondary text-secondary-foreground hover:bg-secondary/90'
          }`}
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default QuickActionCard;