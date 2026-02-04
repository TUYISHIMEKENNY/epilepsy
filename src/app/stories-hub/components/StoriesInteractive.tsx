'use client';

import React, { useState, useEffect } from 'react';
import StoryCard from './StoryCard';
import CategoryFilter from './CategoryFilter';
import FeaturedStory from './FeaturedStory';
import StorySubmissionCTA from './StorySubmissionCTA';
import AudioStoryCard from './AudioStoryCard';
import StoryModal from './StoryModal';
import Icon from '@/components/ui/AppIcon';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  authorImage: string;
  authorImageAlt: string;
  authorBio: string;
  coverImage?: string;
  coverImageAlt?: string;
  category: string;
  readTime: number;
  date: string;
  featured: boolean;
  tags: string[];
}

interface AudioStory {
  id: number;
  title: string;
  author: string;
  authorImage: string;
  authorImageAlt: string;
  duration: string;
  category: string;
}

const StoriesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Stories');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = [
  'All Stories',
  'Newly Diagnosed',
  'Living Well',
  'Family Perspectives',
  'Workplace Success',
  'Youth Voices'];


  const stories: Story[] = [
  {
    id: 1,
    title: "Finding Strength After Diagnosis",
    excerpt: "When I was diagnosed with epilepsy at 28, I thought my life was over. Today, I'm thriving as a software engineer and advocate, proving that epilepsy doesn't define your potential.",
    fullContent: `When I was diagnosed with epilepsy at 28, I thought my life was over. The neurologist's words echoed in my mind: "You have temporal lobe epilepsy." I felt like everything I'd worked for was slipping away.\n\nThe first few months were the hardest. I had to give up driving temporarily, adjust my work schedule, and learn to recognize my seizure triggers. But with each small victory—finding the right medication, understanding my condition, connecting with others—I grew stronger.\n\nToday, three years later, I'm thriving as a software engineer. I've been seizure-free for 18 months, and I've become an advocate for epilepsy awareness in the tech industry. I've learned that epilepsy is just one part of who I am, not my entire identity.\n\nMy advice to anyone newly diagnosed: Give yourself time to adjust. Connect with others who understand. And remember—you are so much more than your diagnosis. Your dreams are still valid, your goals are still achievable, and your life can still be extraordinary.`,
    author: "Sarah Martinez",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_14e77bce4-1763299835640.png",
    authorImageAlt: "Professional woman with long brown hair and warm smile wearing blue blazer",
    authorBio: "Sarah is a software engineer and epilepsy advocate based in Austin, Texas. She volunteers with local support groups and speaks at tech conferences about workplace inclusion.",
    coverImage: "https://images.unsplash.com/photo-1731374404945-d3fde8909690",
    coverImageAlt: "Young professional woman working confidently at laptop in modern office with natural lighting",
    category: "Newly Diagnosed",
    readTime: 5,
    date: "Dec 28, 2025",
    featured: true,
    tags: ["Diagnosis Journey", "Career Success", "Advocacy"]
  },
  {
    id: 2,
    title: "A Mother's Perspective on Pediatric Epilepsy",
    excerpt: "Watching my 7-year-old daughter have her first seizure was terrifying. Here's how our family learned to navigate pediatric epilepsy with love, patience, and hope.",
    fullContent: `The day Emma had her first seizure, I felt my world stop. She was playing in the backyard when suddenly she went rigid and fell. Those few minutes felt like hours as we waited for the ambulance.\n\nThe diagnosis of childhood absence epilepsy came two weeks later. As a mother, I felt helpless, scared, and overwhelmed with questions. How would this affect her education? Her friendships? Her future?\n\nBut Emma taught me something incredible: resilience. She adapted to her medication routine with remarkable maturity. She educated her classmates about epilepsy during show-and-tell. She never let her condition stop her from trying new things.\n\nWe've learned to work closely with her school, ensuring her teachers understand her needs. We've connected with other families facing similar challenges. And we've celebrated every milestone—from her first seizure-free month to her starring role in the school play.\n\nEmma is now 10, thriving academically and socially. She wants to be a doctor when she grows up, specifically to help other kids with epilepsy. Her condition hasn't limited her dreams—if anything, it's expanded her compassion and determination.`,
    author: "Jennifer Thompson",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_168903093-1763299426983.png",
    authorImageAlt: "Caring mother with blonde hair and gentle expression wearing casual sweater",
    authorBio: "Jennifer is a mother of two and a pediatric epilepsy advocate. She runs a local support group for families navigating childhood epilepsy and works to improve school awareness programs.",
    category: "Family Perspectives",
    readTime: 6,
    date: "Dec 20, 2025",
    featured: false,
    tags: ["Pediatric Epilepsy", "Family Support", "School Inclusion"]
  },
  {
    id: 3,
    title: "Thriving in the Workplace with Epilepsy",
    excerpt: "I was afraid to disclose my epilepsy at work. Learning when and how to share my condition transformed my career and helped create a more inclusive workplace.",
    fullContent: `For years, I hid my epilepsy at work. I was terrified of discrimination, of being seen as less capable, of losing opportunities. But keeping this secret was exhausting and isolating.\n\nThe turning point came when I had a breakthrough seizure at the office. My colleagues responded with kindness and concern, not judgment. That experience taught me that hiding wasn't protecting me—it was limiting me.\n\nI decided to have an honest conversation with my manager. I explained my condition, my triggers, and what support I might need. To my surprise, she was incredibly supportive. Together, we created a plan that included flexible work hours during medication adjustments and a quiet space I could use if I felt a seizure coming.\n\nDisclosing my epilepsy also allowed me to become an advocate for workplace inclusion. I helped develop our company's disability awareness training and connected with other employees facing similar challenges. I've learned that vulnerability can be a strength, and that the right workplace will support you, not limit you.\n\nToday, I'm a senior project manager, leading a team of 12. My epilepsy hasn't held me back—in many ways, it's made me a better leader, more empathetic and understanding of diverse needs.`,
    author: "Michael Chen",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f75b7949-1763298528125.png",
    authorImageAlt: "Professional Asian man with short black hair wearing navy suit and confident smile",
    authorBio: "Michael is a senior project manager and workplace inclusion advocate. He consults with companies on creating epilepsy-friendly work environments and speaks at HR conferences.",
    category: "Workplace Success",
    readTime: 5,
    date: "Dec 15, 2025",
    featured: false,
    tags: ["Workplace Disclosure", "Career Growth", "Advocacy"]
  },
  {
    id: 4,
    title: "College Life with Epilepsy: My Journey",
    excerpt: "Starting college with epilepsy felt overwhelming. Here's how I learned to balance academics, social life, and self-care while managing my condition.",
    fullContent: `When I started college at 18, I was determined to have the "normal" college experience. But I quickly learned that managing epilepsy required me to redefine what "normal" meant for me.\n\nThe first semester was challenging. Late nights studying, irregular sleep schedules, and stress all triggered seizures. I had to learn to prioritize my health without feeling like I was missing out on the college experience.\n\nI connected with my university's disability services office, which was a game-changer. They helped me arrange accommodations like extended test time and excused absences for medical appointments. I also found a supportive group of friends who understood my needs and never made me feel different.\n\nI learned to advocate for myself—speaking up when I needed breaks, being honest about my limitations, and not pushing myself beyond what was healthy. I also discovered that many of my peers were dealing with their own health challenges, and being open about mine helped create a more supportive community.\n\nNow in my senior year, I'm thriving. I've maintained a strong GPA, served as president of the disability awareness club, and built meaningful friendships. I've learned that success isn't about doing everything everyone else does—it's about finding what works for you and pursuing it with confidence.`,
    author: "Alex Rivera",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1957c40e5-1763294844875.png",
    authorImageAlt: "Young Hispanic student with short dark hair and bright smile wearing casual college attire",
    authorBio: "Alex is a senior studying psychology and disability studies. They lead campus awareness initiatives and mentor incoming students with epilepsy.",
    category: "Youth Voices",
    readTime: 5,
    date: "Dec 10, 2025",
    featured: false,
    tags: ["College Life", "Self-Advocacy", "Peer Support"]
  },
  {
    id: 5,
    title: "Living Well: My 20-Year Journey with Epilepsy",
    excerpt: "Two decades after my diagnosis, I've learned that living well with epilepsy isn't about being seizure-free—it's about building a life filled with purpose, joy, and connection.",
    fullContent: `I was diagnosed with epilepsy 20 years ago, at age 25. In those two decades, I've experienced countless ups and downs, medication changes, and life adjustments. But I've also built a beautiful, fulfilling life.\n\nThe key lesson I've learned is that living well with epilepsy isn't about achieving perfect seizure control—it's about building a life that brings you joy and purpose despite the challenges. For me, that meant pursuing my passion for teaching, building a loving family, and staying connected to a supportive community.\n\nI've had to make adjustments along the way. I can't drive, so I've become an expert at public transportation and ride-sharing. I've learned to recognize my triggers and avoid them when possible. I've built a strong support network of family, friends, and healthcare providers who understand my needs.\n\nBut I've also refused to let epilepsy define my life. I've traveled to 15 countries, earned my master's degree, raised two wonderful children, and taught hundreds of students. I've learned that epilepsy is part of my story, but it's not the whole story.\n\nMy advice after 20 years: Be patient with yourself. Celebrate small victories. Stay connected to others who understand. And never stop pursuing the things that bring you joy. Life with epilepsy can be challenging, but it can also be incredibly rich and meaningful.`,
    author: "David Williams",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a424e8a2-1763294679746.png",
    authorImageAlt: "Middle-aged man with graying hair and warm smile wearing casual button-down shirt",
    authorBio: "David is a high school teacher and long-time epilepsy advocate. He mentors newly diagnosed individuals and speaks at community events about living well with epilepsy.",
    category: "Living Well",
    readTime: 6,
    date: "Dec 5, 2025",
    featured: false,
    tags: ["Long-term Management", "Life Balance", "Inspiration"]
  },
  {
    id: 6,
    title: "Breaking Stigma: My Story as a Public Figure",
    excerpt: "As a local news anchor, I faced a difficult decision: hide my epilepsy or use my platform to break stigma. Here's why I chose visibility.",
    fullContent: `When I landed my dream job as a news anchor, I was thrilled. But I was also terrified. Would my epilepsy be a problem? Should I disclose it? What if I had a seizure on air?\n\nFor the first year, I kept my condition private. But the stress of hiding was taking a toll on my health and my performance. I realized that by staying silent, I was perpetuating the very stigma I wanted to fight.\n\nI decided to share my story during Epilepsy Awareness Month. The response was overwhelming—and overwhelmingly positive. Viewers reached out to share their own experiences, thank me for my courage, and express how much it meant to see someone with epilepsy in a visible role.\n\nSince then, I've used my platform to educate the public about epilepsy, challenge misconceptions, and advocate for better understanding. I've interviewed neurologists, shared first-aid information, and highlighted the stories of others in our community.\n\nHas it been easy? No. I've faced some negative comments and had to navigate difficult conversations. But the impact has been worth it. I've received messages from parents saying their children feel less alone, from employers saying they've become more inclusive, and from individuals saying they've found the courage to pursue their own dreams.\n\nBeing visible with epilepsy isn't just about representation—it's about changing the narrative and creating a world where no one has to hide who they are.`,
    author: "Lisa Anderson",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1a3fe8b61-1763294293825.png",
    authorImageAlt: "Professional news anchor with shoulder-length blonde hair and confident expression wearing business attire",
    authorBio: "Lisa is a news anchor and public advocate for epilepsy awareness. She uses her media platform to educate the public and challenge stigma surrounding neurological conditions.",
    category: "Living Well",
    readTime: 5,
    date: "Nov 30, 2025",
    featured: false,
    tags: ["Public Advocacy", "Stigma Reduction", "Media Representation"]
  }];


  const audioStories: AudioStory[] = [
  {
    id: 101,
    title: "My First Seizure: A Teenager's Story",
    author: "Emma Rodriguez",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_11175e72b-1763299167470.png",
    authorImageAlt: "Young teenage girl with long dark hair and bright smile wearing casual clothing",
    duration: "8:32",
    category: "Youth Voices"
  },
  {
    id: 102,
    title: "Parenting with Epilepsy: Finding Balance",
    author: "Rachel Kim",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed98e6e3-1763301372148.png",
    authorImageAlt: "Asian mother with short black hair and gentle smile wearing comfortable home attire",
    duration: "12:15",
    category: "Family Perspectives"
  },
  {
    id: 103,
    title: "From Fear to Empowerment: A 5-Year Journey",
    author: "James Patterson",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18d5bd88d-1763296665838.png",
    authorImageAlt: "African American man with short hair and confident expression wearing casual shirt",
    duration: "10:45",
    category: "Living Well"
  }];


  const filteredStories = activeCategory === 'All Stories' ?
  stories :
  stories.filter((story) => story.category === activeCategory);

  const featuredStory = stories.find((story) => story.featured);
  const regularStories = filteredStories.filter((story) => !story.featured);

  const handleReadMore = (id: number) => {
    const story = stories.find((s) => s.id === id);
    if (story) {
      setSelectedStory(story);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStory(null), 300);
  };

  const handleSubmitClick = () => {
    setShowSubmissionForm(true);
  };

  const handlePlayAudio = (id: number) => {
    console.log('Playing audio story:', id);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded-lg w-1/3" />
            <div className="h-64 bg-muted rounded-xl" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-64 bg-muted rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Icon name="BookOpenIcon" size={16} />
            Community Stories
          </div>
          <h1 className="text-4xl lg:text-5xl font-headline font-bold text-foreground">
            Stories of Strength & Hope
          </h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Real experiences from real people living with epilepsy. Every story shared helps reduce stigma, build understanding, and create connection.
          </p>
        </header>

        {featuredStory &&
        <section aria-label="Featured story">
            <FeaturedStory story={featuredStory} onReadMore={handleReadMore} />
          </section>
        }

        <section className="space-y-6" aria-label="Story categories">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl font-headline font-bold text-foreground">
              Browse Stories
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="FunnelIcon" size={16} />
              <span>{filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'}</span>
            </div>
          </div>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory} />

        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" aria-label="Story collection">
          {regularStories.map((story) =>
          <StoryCard key={story.id} story={story} onReadMore={handleReadMore} />
          )}
        </section>

        {regularStories.length === 0 &&
        <div className="text-center py-12 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full">
              <Icon name="MagnifyingGlassIcon" size={32} className="text-muted-foreground" />
            </div>
            <p className="text-lg text-muted-foreground">
              No stories found in this category yet.
            </p>
          </div>
        }

        <section className="space-y-6" aria-label="Audio stories">
          <div className="flex items-center gap-3">
            <Icon name="SpeakerWaveIcon" size={24} className="text-primary" />
            <h2 className="text-2xl font-headline font-bold text-foreground">
              Listen to Stories
            </h2>
          </div>
          <p className="text-foreground/80 max-w-2xl">
            Prefer to listen? Explore our audio story collection, perfect for multitasking or accessibility needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audioStories.map((story) =>
            <AudioStoryCard key={story.id} story={story} onPlay={handlePlayAudio} />
            )}
          </div>
        </section>

        <StorySubmissionCTA onSubmitClick={handleSubmitClick} />

        <section className="bg-muted rounded-xl p-8 lg:p-12 space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Icon name="InformationCircleIcon" size={32} className="text-primary" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-headline font-bold text-foreground">
                Story Guidelines & Review Process
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                All submitted stories are reviewed by our team to ensure appropriate content while maintaining authenticity. We use person-first language, celebrate diversity, and maintain hope while being realistic about challenges. Your story can help others feel less alone and contribute to reducing stigma around epilepsy.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Icon name="CheckCircleIcon" size={16} className="text-success" />
                  <span>Respectful & authentic</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Icon name="CheckCircleIcon" size={16} className="text-success" />
                  <span>Person-first language</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Icon name="CheckCircleIcon" size={16} className="text-success" />
                  <span>Medically accurate</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <StoryModal
        story={selectedStory}
        isOpen={isModalOpen}
        onClose={handleCloseModal} />

    </div>);

};

export default StoriesInteractive;