import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FirstAidStepProps {
  stepNumber: number;
  title: string;
  description: string;
  doList: string[];
  dontList: string[];
  image: string;
  imageAlt: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const FirstAidStep: React.FC<FirstAidStepProps> = ({
  stepNumber,
  title,
  description,
  doList,
  dontList,
  image,
  imageAlt,
  isExpanded,
  onToggle
}) => {
  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden border border-border">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-smooth text-left"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-cta font-bold text-lg flex-shrink-0">
            {stepNumber}
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
        <Icon
          name="ChevronDownIcon"
          size={24}
          className={`text-muted-foreground transition-smooth flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-6">
          <div className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
            <AppImage
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success" />
                <h4 className="font-cta font-semibold text-foreground">DO</h4>
              </div>
              <ul className="space-y-2">
                {doList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                    <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon name="XCircleIcon" size={24} variant="solid" className="text-destructive" />
                <h4 className="font-cta font-semibold text-foreground">DON&apos;T</h4>
              </div>
              <ul className="space-y-2">
                {dontList.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                    <Icon name="XMarkIcon" size={16} className="text-destructive mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstAidStep;