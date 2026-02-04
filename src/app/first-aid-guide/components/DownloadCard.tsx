import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface DownloadCardProps {
  title: string;
  description: string;
  fileSize: string;
  format: string;
  icon: string;
  onDownload: () => void;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  description,
  fileSize,
  format,
  icon,
  onDownload
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-smooth">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name={icon} size={24} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-headline font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Icon name="DocumentIcon" size={14} />
              {format}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="ArrowDownTrayIcon" size={14} />
              {fileSize}
            </span>
          </div>
          <button
            onClick={onDownload}
            className="w-full sm:w-auto px-6 py-2 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 active:scale-95 flex items-center justify-center gap-2"
          >
            <Icon name="ArrowDownTrayIcon" size={16} />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;