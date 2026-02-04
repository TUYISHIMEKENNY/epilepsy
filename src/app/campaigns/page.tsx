import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CampaignHero from './components/CampaignHero';
import CampaignCard from './components/CampaignCard';
import CampaignTimeline from './components/CampaignTimeline';
import CampaignToolkit from './components/CampaignToolkit';
import VolunteerRegistration from './components/VolunteerRegistration';
import ImpactMetrics from './components/ImpactMetrics';
import SocialFeed from './components/SocialFeed';
import CampaignGallery from './components/CampaignGallery';
import NewsletterSignup from './components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Campaigns - Epilepsy Awareness Hub',
  description: 'Join our advocacy campaigns including Purple Day and International Epilepsy Day. Access campaign toolkits, volunteer opportunities, and help spread awareness in your community.'
};

interface Campaign {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  status: 'upcoming' | 'active' | 'completed';
  participantCount: number;
  hashtag: string;
}

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'milestone' | 'event' | 'achievement';
}

interface ToolkitResource {
  id: string;
  title: string;
  description: string;
  type: 'graphics' | 'templates' | 'guides' | 'social';
  fileSize: string;
  format: string;
}

interface Metric {
  id: string;
  label: string;
  value: string;
  icon: 'UserGroupIcon' | 'HeartIcon' | 'AcademicCapIcon' | 'GlobeAltIcon';
  color: string;
}

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

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  event: string;
  date: string;
}

const CampaignsPage = () => {
  const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Purple Day 2026',
    date: 'March 26, 2026',
    description: 'Join the global movement to increase awareness about epilepsy. Wear purple, share stories, and help dispel myths surrounding this condition.',
    image: "https://images.unsplash.com/photo-1711611985747-825a50aec03f",
    alt: 'Group of diverse people wearing purple shirts standing together outdoors with purple balloons',
    status: 'upcoming',
    participantCount: 12847,
    hashtag: '#PurpleDay2026'
  },
  {
    id: '2',
    title: 'International Epilepsy Day',
    date: 'February 10, 2026',
    description: 'A special day dedicated to promoting awareness of epilepsy in more than 130 countries. Join educational events and advocacy initiatives worldwide.',
    image: "https://images.unsplash.com/photo-1666744425481-b2ac3cc167b9",
    alt: 'International conference hall with diverse audience attending epilepsy awareness presentation',
    status: 'active',
    participantCount: 25634,
    hashtag: '#EpilepsyDay2026'
  },
  {
    id: '3',
    title: 'Seizure First Aid Training',
    date: 'January 15, 2026',
    description: 'Free community workshops teaching essential seizure first aid skills. Empower yourself to help others during medical emergencies.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cd97aff2-1767475597667.png",
    alt: 'Medical instructor demonstrating first aid techniques to attentive group of diverse students',
    status: 'completed',
    participantCount: 8921,
    hashtag: '#SeizureFirstAid'
  },
  {
    id: '4',
    title: 'Workplace Inclusion Initiative',
    date: 'April 12, 2026',
    description: 'Partner with employers to create epilepsy-friendly workplaces. Access resources for inclusive policies and reasonable accommodations.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e0a94e10-1766514923495.png",
    alt: 'Professional diverse team collaborating in modern office environment with inclusive workspace design',
    status: 'upcoming',
    participantCount: 4567,
    hashtag: '#EpilepsyAtWork'
  },
  {
    id: '5',
    title: 'Youth Advocacy Summit',
    date: 'May 20, 2026',
    description: 'Empowering young people with epilepsy to become advocates. Leadership training, peer support, and community building for the next generation.',
    image: "https://images.unsplash.com/photo-1573577880323-016161cfed94",
    alt: 'Energetic group of young diverse advocates holding awareness signs at outdoor rally',
    status: 'upcoming',
    participantCount: 3421,
    hashtag: '#YouthAdvocates'
  },
  {
    id: '6',
    title: 'Myth-Busting Marathon',
    date: 'March 1, 2026',
    description: 'A month-long social media campaign challenging common misconceptions about epilepsy. Share facts, educate your network, and change perceptions.',
    image: "https://images.unsplash.com/photo-1676276376474-74ab06e89307",
    alt: 'Creative team brainstorming social media content with laptops and colorful sticky notes',
    status: 'active',
    participantCount: 18932,
    hashtag: '#EpilepsyFacts'
  }];


  const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    title: 'Campaign Launch',
    date: 'January 1, 2026',
    description: 'Kicked off the year with renewed commitment to epilepsy awareness and advocacy initiatives across all platforms.',
    type: 'milestone'
  },
  {
    id: '2',
    title: 'International Epilepsy Day',
    date: 'February 10, 2026',
    description: 'Global day of awareness with events in 130+ countries. Educational webinars, community gatherings, and social media campaigns.',
    type: 'event'
  },
  {
    id: '3',
    title: '25,000 Participants Milestone',
    date: 'February 15, 2026',
    description: 'Reached 25,000 active campaign participants, demonstrating growing community engagement and awareness impact.',
    type: 'achievement'
  },
  {
    id: '4',
    title: 'Purple Day Celebration',
    date: 'March 26, 2026',
    description: 'The signature epilepsy awareness day where people worldwide wear purple to show support and spark conversations.',
    type: 'event'
  },
  {
    id: '5',
    title: 'Workplace Partnership Program',
    date: 'April 12, 2026',
    description: 'Launch of employer partnership initiative to create more inclusive workplaces for people with epilepsy.',
    type: 'milestone'
  },
  {
    id: '6',
    title: 'Youth Summit',
    date: 'May 20, 2026',
    description: 'First-ever youth advocacy summit bringing together young leaders from across the country for training and networking.',
    type: 'event'
  }];


  const toolkitResources: ToolkitResource[] = [
  {
    id: '1',
    title: 'Purple Day Graphics Pack',
    description: 'Social media graphics, profile frames, and event posters for Purple Day celebrations',
    type: 'graphics',
    fileSize: '15.2 MB',
    format: 'ZIP'
  },
  {
    id: '2',
    title: 'Social Media Templates',
    description: 'Ready-to-use post templates for Instagram, Facebook, Twitter, and LinkedIn',
    type: 'templates',
    fileSize: '8.7 MB',
    format: 'PSD'
  },
  {
    id: '3',
    title: 'Advocacy Guide',
    description: 'Comprehensive guide on how to advocate for epilepsy awareness in your community',
    type: 'guides',
    fileSize: '2.3 MB',
    format: 'PDF'
  },
  {
    id: '4',
    title: 'Shareable Fact Cards',
    description: 'Eye-catching cards with epilepsy facts perfect for social media sharing',
    type: 'social',
    fileSize: '5.1 MB',
    format: 'PNG'
  },
  {
    id: '5',
    title: 'Event Planning Toolkit',
    description: 'Complete guide with checklists and templates for organizing awareness events',
    type: 'guides',
    fileSize: '4.8 MB',
    format: 'PDF'
  },
  {
    id: '6',
    title: 'Campaign Logos',
    description: 'Official campaign logos in various formats and color schemes',
    type: 'graphics',
    fileSize: '3.2 MB',
    format: 'SVG'
  }];


  const impactMetrics: Metric[] = [
  {
    id: '1',
    label: 'Lives Touched',
    value: '50K+',
    icon: 'UserGroupIcon',
    color: 'bg-brand-emerald'
  },
  {
    id: '2',
    label: 'Myths Corrected',
    value: '1.2M',
    icon: 'HeartIcon',
    color: 'bg-brand-coral'
  },
  {
    id: '3',
    label: 'Communities Educated',
    value: '340+',
    icon: 'AcademicCapIcon',
    color: 'bg-brand-turquoise'
  },
  {
    id: '4',
    label: 'Countries Reached',
    value: '130+',
    icon: 'GlobeAltIcon',
    color: 'bg-accent'
  }];


  const socialPosts: SocialPost[] = [
  {
    id: '1',
    author: 'Sarah Mitchell',
    username: 'sarahmitchell',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c36b389a-1763293506589.png",
    avatarAlt: 'Professional headshot of smiling woman with brown hair in business attire',
    content: 'Proud to wear purple today for #PurpleDay2026! Living with epilepsy has taught me resilience and the importance of awareness. Let\'s keep the conversation going! 💜',
    image: "https://images.unsplash.com/photo-1734402670753-673d0c5b6c96",
    imageAlt: 'Woman wearing purple sweater holding purple awareness ribbon outdoors',
    timestamp: '2 hours ago',
    likes: 342,
    shares: 87,
    hashtags: ['#PurpleDay2026', '#EpilepsyAwareness', '#EndTheStigma']
  },
  {
    id: '2',
    author: 'Marcus Johnson',
    username: 'marcusj_advocate',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_131b58687-1763291716240.png",
    avatarAlt: 'Professional portrait of African American man with glasses in casual business attire',
    content: 'Just completed the Seizure First Aid training! Everyone should know these life-saving skills. Thank you @EpilepsyHub for making this accessible! 🙏',
    timestamp: '5 hours ago',
    likes: 521,
    shares: 143,
    hashtags: ['#SeizureFirstAid', '#SaveLives', '#EpilepsyDay2026']
  },
  {
    id: '3',
    author: 'Emma Rodriguez',
    username: 'emma_educates',
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec52d7ac-1763300230694.png",
    avatarAlt: 'Young Hispanic woman with long dark hair smiling at camera in outdoor setting',
    content: 'My daughter was diagnosed with epilepsy last year. The support from this community has been incredible. Sharing our story to help others feel less alone. 💜✨',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11e74bfd8-1766841423355.png",
    imageAlt: 'Mother and young daughter embracing and smiling together in sunlit room',
    timestamp: '1 day ago',
    likes: 892,
    shares: 234,
    hashtags: ['#EpilepsyFamily', '#StrongerTogether', '#PurpleDay2026']
  }];


  const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: "https://images.unsplash.com/photo-1678401727760-792023b3abdb",
    alt: 'Large diverse crowd gathered at outdoor Purple Day awareness event with purple balloons',
    caption: 'Over 500 community members joined us for the Purple Day celebration in Central Park',
    event: 'Purple Day 2025',
    date: 'March 26, 2025'
  },
  {
    id: '2',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1a70bc860-1764761352126.png",
    alt: 'Speaker presenting to engaged audience at International Epilepsy Day conference',
    caption: 'Dr. Sarah Chen sharing breakthrough research at our annual conference',
    event: 'International Epilepsy Day',
    date: 'February 10, 2025'
  },
  {
    id: '3',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_14442d22e-1767611138383.png",
    alt: 'Participants practicing first aid techniques during hands-on training workshop',
    caption: 'Community members learning life-saving seizure first aid skills',
    event: 'First Aid Training',
    date: 'January 15, 2025'
  },
  {
    id: '4',
    src: "https://images.unsplash.com/photo-1637340549982-a2f2de4e75dc",
    alt: 'Group of young advocates holding awareness signs at youth summit rally',
    caption: 'Youth advocates making their voices heard at the leadership summit',
    event: 'Youth Advocacy Summit',
    date: 'May 20, 2025'
  },
  {
    id: '5',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe84a721-1766495527129.png",
    alt: 'Corporate team participating in workplace inclusion training session',
    caption: 'Partnering with local businesses to create epilepsy-friendly workplaces',
    event: 'Workplace Initiative',
    date: 'April 12, 2025'
  },
  {
    id: '6',
    src: "https://images.unsplash.com/photo-1506417220146-25d505751fcc",
    alt: 'Evening awareness concert with purple stage lighting and enthusiastic crowd',
    caption: 'Benefit concert raising funds and awareness for epilepsy research',
    event: 'Awareness Concert',
    date: 'June 15, 2025'
  }];


  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-background pt-16 lg:pt-20">
        <CampaignHero
          title="Join the Movement"
          subtitle="Advocacy in Action"
          description="Together, we're building a world where epilepsy is understood, accepted, and supported. Explore our campaigns, access resources, and become part of a global community making real change." />


        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
                  Active Campaigns
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover ongoing and upcoming initiatives where you can make an impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {campaigns.map((campaign) =>
                <CampaignCard key={campaign.id} {...campaign} />
                )}
              </div>
            </div>
          </div>
        </section>

        <CampaignTimeline events={timelineEvents} />

        <ImpactMetrics metrics={impactMetrics} />

        <CampaignToolkit resources={toolkitResources} />

        <SocialFeed posts={socialPosts} campaignHashtag="#PurpleDay2026" />

        <CampaignGallery images={galleryImages} />

        <VolunteerRegistration />

        <NewsletterSignup />
      </main>
    </>);

};

export default CampaignsPage;