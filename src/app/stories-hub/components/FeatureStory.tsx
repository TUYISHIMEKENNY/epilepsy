'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedStoryProps {
  story: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    authorImage: string;
    authorImageAlt: string;
    coverImage: string;
    coverImageAlt: string;
    category: string;
    readTime: number;
    date: string;
  };
  onReadMore: (id: number) => void;
}

const FeaturedStory: React.FC<FeaturedStoryProps> = ({ story, onReadMore }) => {
  return (
    <article className="bg-gradient-to-br from-primary/5 to-brand-violet/5 rounded-xl shadow-brand overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-full overflow-hidden">
          <AppImage
            src={story.coverImage}
            alt={story.coverImageAlt}
            className="w-full h-full object-cover warm-image"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent text-accent-foreground text-sm font-cta font-semibold rounded-full shadow-card">
              <Icon name="StarIcon" size={16} variant="solid" />
              Featured Story
            </span>
          </div>
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {story.category}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground leading-tight">
              {story.title}
            </h2>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {story.excerpt}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
              <AppImage
                src={story.authorImage}
                alt={story.authorImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-foreground">{story.author}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="ClockIcon" size={14} />
                  {story.readTime} min
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="CalendarIcon" size={14} />
                  {story.date}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onReadMore(story.id)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-smooth active:scale-95 shadow-card w-full sm:w-auto"
            aria-label={`Read featured story: ${story.title}`}
          >
            Read Full Story
            <Icon name="ArrowRightIcon" size={20} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedStory;