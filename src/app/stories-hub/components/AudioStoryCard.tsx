'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface AudioStoryCardProps {
  story: {
    id: number;
    title: string;
    author: string;
    authorImage: string;
    authorImageAlt: string;
    duration: string;
    category: string;
  };
  onPlay: (id: number) => void;
}

const AudioStoryCard: React.FC<AudioStoryCardProps> = ({ story, onPlay }) => {
  return (
    <article className="bg-card rounded-lg shadow-card hover:shadow-brand transition-smooth p-6 space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
          <AppImage
            src={story.authorImage}
            alt={story.authorImageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-headline font-semibold text-foreground line-clamp-2">
            {story.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            by {story.author}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {story.category}
          </span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Icon name="ClockIcon" size={14} />
            {story.duration}
          </span>
        </div>
        <button
          onClick={() => onPlay(story.id)}
          className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-smooth active:scale-95 shadow-card"
          aria-label={`Play audio story: ${story.title}`}
        >
          <Icon name="PlayIcon" size={20} variant="solid" />
        </button>
      </div>
    </article>
  );
};

export default AudioStoryCard;