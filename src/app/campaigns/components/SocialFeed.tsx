'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface SocialPost {
  id: string;
  author: string;
  username: string;
  avatar: string;
  avatarAlt: string;
  content: string;
  image?: string;
  imageAlt?: string;
  timestamp: string;
  likes: number;
  shares: number;
  hashtags: string[];
}

interface SocialFeedProps {
  posts: SocialPost[];
  campaignHashtag: string;
}

const SocialFeed: React.FC<SocialFeedProps> = ({ posts, campaignHashtag }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-10 bg-muted rounded w-1/3 mx-auto mb-4 animate-pulse" />
              <div className="h-6 bg-muted rounded w-1/2 mx-auto animate-pulse" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-1/2" />
                      <div className="h-3 bg-muted rounded w-1/3" />
                    </div>
                  </div>
                  <div className="h-40 bg-muted rounded mb-4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Community Voices
            </h2>
            <p className="text-lg text-muted-foreground">
              See what people are saying about <span className="text-primary font-medium">{campaignHashtag}</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <AppImage
                      src={post.avatar}
                      alt={post.avatarAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {post.author}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">
                      @{post.username}
                    </p>
                  </div>
                </div>
                
                {post.image && post.imageAlt && (
                  <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                    <AppImage
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <p className="text-foreground mb-3 line-clamp-3">
                  {post.content}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.hashtags.map((tag, index) => (
                    <span key={index} className="text-sm text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="HeartIcon" size={16} />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="ArrowPathRoundedSquareIcon" size={16} />
                      {post.shares}
                    </span>
                  </div>
                  <time className="text-xs text-muted-foreground">
                    {post.timestamp}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;