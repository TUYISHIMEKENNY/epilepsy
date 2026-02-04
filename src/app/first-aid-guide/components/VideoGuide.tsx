import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface VideoGuideProps {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  thumbnailAlt: string;
  onPlay: () => void;
}

const VideoGuide: React.FC<VideoGuideProps> = ({
  title,
  description,
  duration,
  thumbnail,
  thumbnailAlt,
  onPlay
}) => {
  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden border border-border group">
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-smooth group-hover:scale-105"
          style={{ backgroundImage: `url(${thumbnail})` }}
          role="img"
          aria-label={thumbnailAlt}
        />
        <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-smooth" />
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-smooth group-hover:scale-110 group-hover:bg-primary/90">
            <Icon name="PlayIcon" size={28} variant="solid" />
          </div>
        </button>
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-foreground/80 text-background text-xs font-cta rounded">
          {duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-headline font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default VideoGuide;