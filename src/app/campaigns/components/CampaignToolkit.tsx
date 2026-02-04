'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ToolkitResource {
  id: string;
  title: string;
  description: string;
  type: 'graphics' | 'templates' | 'guides' | 'social';
  fileSize: string;
  format: string;
}

interface CampaignToolkitProps {
  resources: ToolkitResource[];
}

const CampaignToolkit: React.FC<CampaignToolkitProps> = ({ resources }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [downloadedItems, setDownloadedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDownload = (id: string) => {
    setDownloadedItems(prev => new Set(prev).add(id));
  };

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="h-10 bg-muted rounded w-1/3 mx-auto mb-4 animate-pulse" />
              <div className="h-6 bg-muted rounded w-2/3 mx-auto animate-pulse" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-lg p-6 animate-pulse">
                  <div className="h-12 w-12 bg-muted rounded-lg mb-4" />
                  <div className="h-6 bg-muted rounded mb-2" />
                  <div className="h-4 bg-muted rounded mb-4" />
                  <div className="h-10 bg-muted rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const typeConfig = {
    graphics: {
      icon: 'PhotoIcon' as const,
      color: 'text-brand-violet',
      bgColor: 'bg-brand-violet/10',
    },
    templates: {
      icon: 'DocumentTextIcon' as const,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    guides: {
      icon: 'BookOpenIcon' as const,
      color: 'text-brand-turquoise',
      bgColor: 'bg-brand-turquoise/10',
    },
    social: {
      icon: 'ShareIcon' as const,
      color: 'text-brand-emerald',
      bgColor: 'bg-brand-emerald/10',
    },
  };

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Campaign Toolkit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download free resources to help spread awareness in your community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const config = typeConfig[resource.type];
              const isDownloaded = downloadedItems.has(resource.id);
              
              return (
                <article key={resource.id} className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${config.bgColor} mb-4 transition-smooth group-hover:scale-110`}>
                    <Icon name={config.icon} size={24} className={config.color} />
                  </div>
                  
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                    {resource.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="DocumentIcon" size={14} />
                      {resource.format}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="ArrowDownTrayIcon" size={14} />
                      {resource.fileSize}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(resource.id)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-smooth ${
                      isDownloaded
                        ? 'bg-brand-emerald/10 text-brand-emerald' :'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                    disabled={isDownloaded}
                  >
                    <Icon
                      name={isDownloaded ? 'CheckCircleIcon' : 'ArrowDownTrayIcon'}
                      size={18}
                      variant={isDownloaded ? 'solid' : 'outline'}
                    />
                    <span>{isDownloaded ? 'Downloaded' : 'Download'}</span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignToolkit;