'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface StoryModalProps {
  story: {
    id: number;
    title: string;
    fullContent: string;
    author: string;
    authorImage: string;
    authorImageAlt: string;
    authorBio: string;
    category: string;
    readTime: number;
    date: string;
    tags: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ story, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !story) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-modal-title"
    >
      <div
        className="fixed inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative bg-card rounded-xl shadow-brand max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {story.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-smooth"
            aria-label="Close story"
          >
            <Icon name="XMarkIcon" size={24} />
          </button>
        </div>

        <article className="p-6 lg:p-12 space-y-8">
          <header className="space-y-6">
            <h1
              id="story-modal-title"
              className="text-3xl lg:text-4xl font-headline font-bold text-foreground leading-tight"
            >
              {story.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                <AppImage
                  src={story.authorImage}
                  alt={story.authorImageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">{story.author}</p>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                  <span className="flex items-center gap-1">
                    <Icon name="ClockIcon" size={14} />
                    {story.readTime} min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="CalendarIcon" size={14} />
                    {story.date}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed whitespace-pre-line">
              {story.fullContent}
            </div>
          </div>

          <div className="pt-6 border-t border-border space-y-4">
            <div className="bg-muted rounded-lg p-6 space-y-3">
              <h3 className="text-lg font-headline font-semibold text-foreground">
                About {story.author}
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                {story.authorBio}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-smooth active:scale-95 shadow-card w-full sm:w-auto">
              <Icon name="ShareIcon" size={20} />
              Share Story
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground border border-border rounded-lg font-cta font-semibold hover:bg-muted transition-smooth active:scale-95 w-full sm:w-auto">
              <Icon name="HeartIcon" size={20} />
              Support Author
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default StoryModal;