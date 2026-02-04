'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  event: string;
  date: string;
}

interface CampaignGalleryProps {
  images: GalleryImage[];
}

const CampaignGallery: React.FC<CampaignGalleryProps> = ({ images }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="h-10 bg-card rounded w-1/3 mx-auto mb-12 animate-pulse" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-card rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
                Campaign Gallery
              </h2>
              <p className="text-lg text-muted-foreground">
                Moments from our awareness events and community gatherings
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square rounded-lg overflow-hidden shadow-card transition-smooth hover:shadow-brand focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <AppImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                      <p className="text-white font-medium mb-1">{image.event}</p>
                      <p className="text-white/80 text-sm">{image.date}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Icon name="MagnifyingGlassPlusIcon" size={20} className="text-foreground" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-background rounded-full transition-smooth hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Close gallery"
          >
            <Icon name="XMarkIcon" size={24} className="text-foreground" />
          </button>
          
          <div
            className="max-w-5xl w-full bg-card rounded-lg overflow-hidden shadow-brand"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <AppImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                {selectedImage.event}
              </h3>
              <p className="text-muted-foreground mb-3">{selectedImage.caption}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="CalendarIcon" size={16} />
                <time>{selectedImage.date}</time>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CampaignGallery;