'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import EmergencyBanner from './EmergencyBanner';
import QuickActionCard from './QuickActionCard';
import FirstAidStep from './FirstAidStep';
import DownloadCard from './DownloadCard';
import EmergencyChecklist from './EmergencyChecklist';
import VideoGuide from './VideoGuide';

interface FirstAidStepData {
  stepNumber: number;
  title: string;
  description: string;
  doList: string[];
  dontList: string[];
  image: string;
  imageAlt: string;
}

interface ChecklistItemData {
  id: string;
  text: string;
  category: 'immediate' | 'during' | 'after';
}

interface DownloadResource {
  title: string;
  description: string;
  fileSize: string;
  format: string;
  icon: string;
}

interface VideoGuideData {
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  thumbnailAlt: string;
}

const FirstAidGuideInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'steps' | 'checklist' | 'videos' | 'downloads'>('steps');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const firstAidSteps: FirstAidStepData[] = [
  {
    stepNumber: 1,
    title: "Stay Calm & Ensure Safety",
    description: "Keep yourself and the person safe",
    doList: [
    "Stay calm and reassure others nearby",
    "Note the time when the seizure starts",
    "Clear the area of hard or sharp objects",
    "Loosen tight clothing around the neck",
    "Place something soft under their head"],

    dontList: [
    "Don't panic or show distress",
    "Don't try to hold the person down",
    "Don't put anything in their mouth",
    "Don't try to stop their movements",
    "Don't leave them alone"],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa894dfa-1764685355641.png",
    imageAlt: "Healthcare professional demonstrating proper positioning of patient during seizure with soft cushion under head"
  },
  {
    stepNumber: 2,
    title: "Position Safely",
    description: "Protect from injury during the seizure",
    doList: [
    "Turn them gently onto their side if possible",
    "Support their head with something soft",
    "Keep their airway clear",
    "Stay with them throughout the seizure",
    "Speak calmly and reassuringly"],

    dontList: [
    "Don't force them into a position",
    "Don't restrain their movements",
    "Don't give them water or food",
    "Don't try to perform CPR during seizure",
    "Don't crowd around them"],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_123617af4-1767611134471.png",
    imageAlt: "Medical illustration showing proper recovery position with person lying on their side"
  },
  {
    stepNumber: 3,
    title: "Time the Seizure",
    description: "Monitor duration and call for help if needed",
    doList: [
    "Check your watch or phone for timing",
    "Call emergency services if seizure lasts over 5 minutes",
    "Call if this is their first seizure",
    "Call if they're injured or pregnant",
    "Note any unusual symptoms"],

    dontList: [
    "Don't assume all seizures are the same",
    "Don't delay calling for help if needed",
    "Don't leave to get help if alone with them",
    "Don't forget to time the seizure",
    "Don't ignore signs of distress"],

    image: "https://images.unsplash.com/photo-1669413453505-2582fb5083b3",
    imageAlt: "Close-up of person checking time on wristwatch while monitoring patient"
  },
  {
    stepNumber: 4,
    title: "After the Seizure",
    description: "Provide comfort and monitor recovery",
    doList: [
    "Stay with them until fully conscious",
    "Keep them on their side if drowsy",
    "Speak calmly and explain what happened",
    "Check for injuries",
    "Offer to call someone for them"],

    dontList: [
    "Don't give them anything to eat or drink immediately",
    "Don't leave them alone until fully recovered",
    "Don't be alarmed if they're confused",
    "Don't rush them to get up",
    "Don't make them feel embarrassed"],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa894dfa-1764685355641.png",
    imageAlt: "Caregiver sitting beside patient providing comfort and reassurance after seizure"
  }];


  const checklistItems: ChecklistItemData[] = [
  { id: 'imm1', text: 'Stay calm and note the time', category: 'immediate' },
  { id: 'imm2', text: 'Clear area of dangerous objects', category: 'immediate' },
  { id: 'imm3', text: 'Loosen tight clothing around neck', category: 'immediate' },
  { id: 'imm4', text: 'Place soft object under head', category: 'immediate' },
  { id: 'dur1', text: 'Turn person gently on their side', category: 'during' },
  { id: 'dur2', text: 'Stay with them throughout', category: 'during' },
  { id: 'dur3', text: 'Time the seizure duration', category: 'during' },
  { id: 'dur4', text: 'Speak calmly and reassuringly', category: 'during' },
  { id: 'dur5', text: 'Call emergency if over 5 minutes', category: 'during' },
  { id: 'aft1', text: 'Keep them on their side if drowsy', category: 'after' },
  { id: 'aft2', text: 'Check for injuries', category: 'after' },
  { id: 'aft3', text: 'Explain what happened calmly', category: 'after' },
  { id: 'aft4', text: 'Stay until fully conscious', category: 'after' },
  { id: 'aft5', text: 'Offer to contact someone for them', category: 'after' }];


  const downloadResources: DownloadResource[] = [
  {
    title: "Complete First Aid Guide",
    description: "Comprehensive PDF with step-by-step instructions and illustrations",
    fileSize: "2.4 MB",
    format: "PDF",
    icon: "DocumentTextIcon"
  },
  {
    title: "Quick Reference Card",
    description: "Wallet-sized card with essential first aid steps",
    fileSize: "450 KB",
    format: "PDF",
    icon: "CreditCardIcon"
  },
  {
    title: "Workplace Poster",
    description: "Large format poster for office or school display",
    fileSize: "3.1 MB",
    format: "PDF",
    icon: "DocumentChartBarIcon"
  },
  {
    title: "Multi-Language Guide",
    description: "First aid instructions in 12 languages",
    fileSize: "5.8 MB",
    format: "PDF",
    icon: "LanguageIcon"
  }];


  const videoGuides: VideoGuideData[] = [
  {
    title: "Seizure First Aid Basics",
    description: "Essential steps everyone should know",
    duration: "3:45",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1729a4466-1767475597316.png",
    thumbnailAlt: "Medical professional demonstrating first aid techniques in training video"
  },
  {
    title: "What to Do During a Seizure",
    description: "Real-time demonstration with expert guidance",
    duration: "5:20",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1c2f9e921-1767611136807.png",
    thumbnailAlt: "Healthcare worker showing proper positioning during seizure emergency"
  },
  {
    title: "After Seizure Care",
    description: "Supporting recovery and when to seek help",
    duration: "4:15",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_18248f9b2-1767611136122.png",
    thumbnailAlt: "Caregiver providing post-seizure comfort and monitoring"
  }];


  const handleQuickAction = (action: string) => {
    if (!isHydrated) return;

    if (action === 'call') {
      window.location.href = 'tel:911';
    } else if (action === 'steps') {
      setActiveTab('steps');
      window.scrollTo({ top: 400, behavior: 'smooth' });
    } else if (action === 'download') {
      setActiveTab('downloads');
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleStepToggle = (stepNumber: number) => {
    if (!isHydrated) return;
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  const handleDownload = (title: string) => {
    if (!isHydrated) return;
    alert(`Downloading: ${title}\n\nIn a production environment, this would download the actual PDF file.`);
  };

  const handleVideoPlay = (title: string) => {
    if (!isHydrated) return;
    alert(`Playing video: ${title}\n\nIn a production environment, this would open a video player with closed captions.`);
  };

  const tabs = [
  { id: 'steps' as const, label: 'Step-by-Step Guide', icon: 'ListBulletIcon' },
  { id: 'checklist' as const, label: 'Emergency Checklist', icon: 'ClipboardDocumentCheckIcon' },
  { id: 'videos' as const, label: 'Video Demonstrations', icon: 'PlayCircleIcon' },
  { id: 'downloads' as const, label: 'Download Resources', icon: 'ArrowDownTrayIcon' }];


  return (
    <div className="min-h-screen bg-background">
      <EmergencyBanner />

      <section className="py-12 lg:py-16 bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-cta font-semibold">
              <Icon name="HeartIcon" size={16} variant="solid" />
              <span>Knowledge Saves Lives</span>
            </div>
            <h1 className="font-headline font-bold text-4xl lg:text-5xl text-foreground">
              Seizure First Aid Guide
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn the essential steps to help someone during a seizure. This guide provides clear, actionable information that could save a life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            <QuickActionCard
              icon="PhoneIcon"
              title="Call Emergency"
              description="If seizure lasts over 5 minutes"
              actionLabel="Call 911"
              onClick={() => handleQuickAction('call')}
              variant="emergency" />

            <QuickActionCard
              icon="BookOpenIcon"
              title="View Steps"
              description="Detailed first aid instructions"
              actionLabel="See Guide"
              onClick={() => handleQuickAction('steps')}
              variant="primary" />

            <QuickActionCard
              icon="ArrowDownTrayIcon"
              title="Get Resources"
              description="Printable guides and cards"
              actionLabel="Download"
              onClick={() => handleQuickAction('download')}
              variant="secondary" />

          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-warning/10 border-l-4 border-warning rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="ExclamationTriangleIcon" size={24} className="text-warning flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-cta font-semibold text-foreground">When to Call Emergency Services</h3>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• Seizure lasts longer than 5 minutes</li>
                    <li>• Person has multiple seizures without regaining consciousness</li>
                    <li>• This is the person&apos;s first seizure</li>
                    <li>• Person is injured, pregnant, or has diabetes</li>
                    <li>• Seizure happens in water</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
              {tabs.map((tab) =>
              <button
                key={tab.id}
                onClick={() => isHydrated && setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-cta font-semibold transition-smooth border-b-2 ${
                activeTab === tab.id ?
                'text-primary border-primary' : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border'}`
                }>

                  <Icon name={tab.icon} size={20} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              )}
            </div>

            {activeTab === 'steps' &&
            <div className="space-y-4">
                {firstAidSteps.map((step) =>
              <FirstAidStep
                key={step.stepNumber}
                {...step}
                isExpanded={isHydrated ? expandedStep === step.stepNumber : false}
                onToggle={() => handleStepToggle(step.stepNumber)} />

              )}
              </div>
            }

            {activeTab === 'checklist' &&
            <EmergencyChecklist items={checklistItems} />
            }

            {activeTab === 'videos' &&
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoGuides.map((video, index) =>
              <VideoGuide
                key={index}
                {...video}
                onPlay={() => handleVideoPlay(video.title)} />

              )}
              </div>
            }

            {activeTab === 'downloads' &&
            <div className="space-y-4">
                {downloadResources.map((resource, index) =>
              <DownloadCard
                key={index}
                {...resource}
                onDownload={() => handleDownload(resource.title)} />

              )}
              </div>
            }
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-lg shadow-card p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-turquoise/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="InformationCircleIcon" size={24} className="text-brand-turquoise" />
                </div>
                <div>
                  <h2 className="font-headline font-semibold text-2xl text-foreground mb-2">
                    Additional Resources
                  </h2>
                  <p className="text-muted-foreground">
                    Access more information and support for epilepsy awareness
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="/about-epilepsy"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-smooth group">

                  <Icon name="AcademicCapIcon" size={24} className="text-primary group-hover:scale-110 transition-smooth" />
                  <div>
                    <div className="font-cta font-semibold text-foreground">Learn About Epilepsy</div>
                    <div className="text-sm text-muted-foreground">Understanding the condition</div>
                  </div>
                </a>

                <a
                  href="/stories-hub"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-smooth group">

                  <Icon name="UserGroupIcon" size={24} className="text-primary group-hover:scale-110 transition-smooth" />
                  <div>
                    <div className="font-cta font-semibold text-foreground">Community Stories</div>
                    <div className="text-sm text-muted-foreground">Real experiences shared</div>
                  </div>
                </a>

                <a
                  href="/campaigns"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-smooth group">

                  <Icon name="MegaphoneIcon" size={24} className="text-primary group-hover:scale-110 transition-smooth" />
                  <div>
                    <div className="font-cta font-semibold text-foreground">Awareness Campaigns</div>
                    <div className="text-sm text-muted-foreground">Join our initiatives</div>
                  </div>
                </a>

                <a
                  href="/contact-support"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted transition-smooth group">

                  <Icon name="ChatBubbleLeftRightIcon" size={24} className="text-primary group-hover:scale-110 transition-smooth" />
                  <div>
                    <div className="font-cta font-semibold text-foreground">Get Support</div>
                    <div className="text-sm text-muted-foreground">We&apos;re here to help</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default FirstAidGuideInteractive;