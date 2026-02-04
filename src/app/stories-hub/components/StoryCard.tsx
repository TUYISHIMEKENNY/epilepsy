'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    authorImage: string;
    authorImageAlt: string;
    category: string;
    readTime: number;
    date: string;
    featured: boolean;
    tags: string[];
  };
  onReadMore: (id: number) => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, onReadMore }) => {
  return (
    <article className="bg-card rounded-lg shadow-card hover:shadow-brand transition-smooth overflow-hidden group">
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
            <AppImage
              src={story.authorImage}
              alt={story.authorImageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-headline font-semibold text-foreground group-hover:text-primary transition-smooth">
                {story.title}
              </h3>
              {story.featured && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  <Icon name="StarIcon" size={12} variant="solid" />
                  Featured
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              by {story.author}
            </p>
          </div>
        </div>

        <p className="text-foreground leading-relaxed line-clamp-3">
          {story.excerpt}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {story.category}
          </span>
          {story.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Icon name="ClockIcon" size={16} />
              {story.readTime} min read
            </span>
            <span className="flex items-center gap-1">
              <Icon name="CalendarIcon" size={16} />
              {story.date}
            </span>
          </div>
          <button
            onClick={() => onReadMore(story.id)}
            className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-cta font-semibold hover:bg-primary/90 transition-smooth active:scale-95"
            aria-label={`Read full story: ${story.title}`}
          >
            Read Story
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default StoryCard;