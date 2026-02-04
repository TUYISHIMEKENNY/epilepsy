import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  image: string;
  alt: string;
  authorImage: string;
  authorAlt: string;
  readTime: string;
  category: string;
}

const FeaturedStory = () => {
  const featuredStory: Story = {
    id: 1,
    title: "From Diagnosis to Advocacy: My Journey with Epilepsy",
    excerpt: "When I was first diagnosed with epilepsy at 22, I felt my world crumbling. Today, I stand as an advocate, helping others navigate their journey with confidence and hope. This is my story of transformation, resilience, and finding purpose in the unexpected.",
    author: "Sarah Mitchell",
    authorRole: "Epilepsy Advocate & Community Leader",
    image: "https://images.unsplash.com/photo-1601142287348-7c5bc360a797",
    alt: "Young woman with brown hair smiling confidently while standing outdoors in natural sunlight",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14da91c34-1763294780479.png",
    authorAlt: "Professional headshot of woman with shoulder-length brown hair wearing blue blazer",
    readTime: "5 min read",
    category: "Personal Journey"
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 shadow-card">
              <Icon name="SparklesIcon" size={20} className="text-purple-600" variant="solid" />
              <span className="text-sm font-medium text-purple-600">Featured Story</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Voices from Our Community
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories of courage, resilience, and hope from people living with epilepsy
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-brand overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <AppImage
                  src={featuredStory.image}
                  alt={featuredStory.alt}
                  className="w-full h-full object-cover transition-smooth hover:scale-105" />

                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-medium rounded-full shadow-card">
                    {featuredStory.category}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-headline font-bold text-foreground mb-4 leading-tight">
                    {featuredStory.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {featuredStory.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <AppImage
                        src={featuredStory.authorImage}
                        alt={featuredStory.authorAlt}
                        className="w-full h-full object-cover" />

                    </div>
                    <div className="flex-1">
                      <p className="font-headline font-semibold text-foreground">
                        {featuredStory.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {featuredStory.authorRole}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="ClockIcon" size={16} />
                      <span>{featuredStory.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/stories-hub"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-card">

                      <span>Read Full Story</span>
                      <Icon name="ArrowRightIcon" size={20} />
                    </Link>
                    
                    <Link
                      href="/stories-hub"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-muted/80">

                      <Icon name="BookOpenIcon" size={20} />
                      <span>More Stories</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedStory;