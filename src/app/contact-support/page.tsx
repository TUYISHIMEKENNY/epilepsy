import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import EmergencyResources from './components/EmergencyResources';
import ContactMethods from './components/ContactMethods';
import ContactForm from './components/ContactForm';
import ProfessionalReferrals from './components/ProfessionalReferrals';
import SupportGroups from './components/SupportGroups';
import FAQ from './components/FAQ';

export const metadata: Metadata = {
  title: 'Contact & Support - Epilepsy Awareness Hub',
  description: 'Get help and support for epilepsy-related questions. Access emergency resources, contact our team, find professional referrals, and connect with support groups.',
};

interface EmergencyResource {
  id: number;
  title: string;
  description: string;
  phone: string;
  availability: string;
  icon: string;
  urgent: boolean;
}

interface ContactMethod {
  id: number;
  title: string;
  description: string;
  icon: string;
  action: string;
  actionLabel: string;
  responseTime: string;
  available: boolean;
}

interface Referral {
  id: number;
  name: string;
  specialty: string;
  location: string;
  phone: string;
  website: string;
  acceptingPatients: boolean;
  languages: string[];
}

interface SupportGroup {
  id: number;
  name: string;
  type: 'virtual' | 'in-person' | 'hybrid';
  schedule: string;
  location: string;
  description: string;
  contactEmail: string;
  capacity: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function ContactSupportPage() {
  const emergencyResources: EmergencyResource[] = [
    {
      id: 1,
      title: 'National Suicide Prevention Lifeline',
      description: 'Free, confidential support for people in distress, prevention and crisis resources',
      phone: '988',
      availability: '24/7 - Available anytime',
      icon: 'PhoneIcon',
      urgent: true,
    },
    {
      id: 2,
      title: 'Crisis Text Line',
      description: 'Text-based crisis support for those who prefer messaging over calling',
      phone: 'Text HOME to 741741',
      availability: '24/7 - Text anytime',
      icon: 'ChatBubbleLeftRightIcon',
      urgent: true,
    },
    {
      id: 3,
      title: 'Epilepsy Foundation Helpline',
      description: 'Specialized support for epilepsy-related questions and concerns',
      phone: '1-800-332-1000',
      availability: 'Mon-Fri, 9 AM - 5 PM ET',
      icon: 'HeartIcon',
      urgent: false,
    },
    {
      id: 4,
      title: 'SAMHSA National Helpline',
      description: 'Treatment referral and information service for mental health and substance use',
      phone: '1-800-662-4357',
      availability: '24/7 - Available anytime',
      icon: 'LifebuoyIcon',
      urgent: false,
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond within 24-48 hours',
      icon: 'EnvelopeIcon',
      action: 'mailto:support@epilepsyawareness.org',
      actionLabel: 'Send Email',
      responseTime: 'Response within 24-48 hours',
      available: true,
    },
    {
      id: 2,
      title: 'Phone Support',
      description: 'Speak directly with our support team during business hours',
      icon: 'PhoneIcon',
      action: 'tel:+18005551234',
      actionLabel: 'Call Now',
      responseTime: 'Mon-Fri, 9 AM - 5 PM ET',
      available: true,
    },
    {
      id: 3,
      title: 'Live Chat',
      description: 'Get instant answers to your questions through our live chat service',
      icon: 'ChatBubbleLeftEllipsisIcon',
      action: '#',
      actionLabel: 'Start Chat',
      responseTime: 'Mon-Fri, 9 AM - 5 PM ET',
      available: true,
    },
    {
      id: 4,
      title: 'Schedule Consultation',
      description: 'Book a one-on-one consultation with our epilepsy education specialist',
      icon: 'CalendarIcon',
      action: '#',
      actionLabel: 'Book Appointment',
      responseTime: 'Flexible scheduling available',
      available: true,
    },
    {
      id: 5,
      title: 'Community Forum',
      description: 'Connect with others in our moderated online community',
      icon: 'UserGroupIcon',
      action: '#',
      actionLabel: 'Join Forum',
      responseTime: 'Active community responses',
      available: true,
    },
    {
      id: 6,
      title: 'Resource Library',
      description: 'Access downloadable guides, fact sheets, and educational materials',
      icon: 'BookOpenIcon',
      action: '#',
      actionLabel: 'Browse Resources',
      responseTime: 'Instant access',
      available: true,
    },
  ];

  const professionalReferrals: Referral[] = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Neurologist - Epilepsy Specialist',
      location: 'Boston Medical Center, Boston, MA',
      phone: '(617) 555-0123',
      website: 'https://example.com',
      acceptingPatients: true,
      languages: ['English', 'Spanish'],
    },
    {
      id: 2,
      name: 'Dr. James Chen',
      specialty: 'Pediatric Neurologist',
      location: 'Children\'s Hospital, Los Angeles, CA',
      phone: '(310) 555-0456',
      website: 'https://example.com',
      acceptingPatients: true,
      languages: ['English', 'Mandarin', 'Cantonese'],
    },
    {
      id: 3,
      name: 'Dr. Maria Rodriguez',
      specialty: 'Epileptologist',
      location: 'Mayo Clinic, Rochester, MN',
      phone: '(507) 555-0789',
      website: 'https://example.com',
      acceptingPatients: false,
      languages: ['English', 'Spanish', 'Portuguese'],
    },
    {
      id: 4,
      name: 'Dr. David Thompson',
      specialty: 'Neurosurgeon - Epilepsy Surgery',
      location: 'Johns Hopkins Hospital, Baltimore, MD',
      phone: '(410) 555-0321',
      website: 'https://example.com',
      acceptingPatients: true,
      languages: ['English'],
    },
    {
      id: 5,
      name: 'Dr. Lisa Patel',
      specialty: 'Neuropsychologist',
      location: 'Cleveland Clinic, Cleveland, OH',
      phone: '(216) 555-0654',
      website: 'https://example.com',
      acceptingPatients: true,
      languages: ['English', 'Hindi', 'Gujarati'],
    },
    {
      id: 6,
      name: 'Dr. Michael O\'Brien',
      specialty: 'Neurologist - Adult Epilepsy',
      location: 'NYU Langone Health, New York, NY',
      phone: '(212) 555-0987',
      website: 'https://example.com',
      acceptingPatients: true,
      languages: ['English', 'French'],
    },
  ];

  const supportGroups: SupportGroup[] = [
    {
      id: 1,
      name: 'Adult Epilepsy Support Circle',
      type: 'hybrid',
      schedule: 'Every Tuesday, 7:00 PM - 8:30 PM',
      location: 'Community Center & Zoom',
      description: 'A welcoming space for adults living with epilepsy to share experiences and coping strategies',
      contactEmail: 'adultsupport@epilepsyawareness.org',
      capacity: 'Up to 15 participants',
    },
    {
      id: 2,
      name: 'Parents & Caregivers Network',
      type: 'virtual',
      schedule: 'First and Third Saturday, 10:00 AM - 11:30 AM',
      location: 'Virtual via Zoom',
      description: 'Support for parents and caregivers of children with epilepsy, sharing resources and emotional support',
      contactEmail: 'parents@epilepsyawareness.org',
      capacity: 'Open to all',
    },
    {
      id: 3,
      name: 'Young Adults Living with Epilepsy',
      type: 'in-person',
      schedule: 'Every other Friday, 6:00 PM - 7:30 PM',
      location: 'Downtown Library, Meeting Room B',
      description: 'Connect with peers aged 18-35 navigating college, careers, and relationships with epilepsy',
      contactEmail: 'youngadults@epilepsyawareness.org',
      capacity: 'Up to 12 participants',
    },
    {
      id: 4,
      name: 'Spanish-Speaking Support Group',
      type: 'hybrid',
      schedule: 'Every Thursday, 6:30 PM - 8:00 PM',
      location: 'Community Health Center & Zoom',
      description: 'Grupo de apoyo en español para personas con epilepsia y sus familias',
      contactEmail: 'espanol@epilepsyawareness.org',
      capacity: 'Hasta 20 participantes',
    },
  ];

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'How quickly will I receive a response to my inquiry?',
      answer: 'We strive to respond to all email inquiries within 24-48 hours during business days. For urgent matters, please call our helpline or use the emergency resources listed above.',
      category: 'General',
    },
    {
      id: 2,
      question: 'Are your services free?',
      answer: 'Yes, all our support services, educational resources, and community programs are completely free. We are a non-profit organization dedicated to making epilepsy support accessible to everyone.',
      category: 'General',
    },
    {
      id: 3,
      question: 'Can I remain anonymous when seeking support?',
      answer: 'Absolutely. We respect your privacy and you can choose to remain anonymous when participating in support groups or reaching out for help. We only collect information necessary to provide you with the support you need.',
      category: 'Privacy',
    },
    {
      id: 4,
      question: 'Do you provide medical advice?',
      answer: 'We provide educational information and support, but we do not offer medical advice. For medical concerns, please consult with your healthcare provider or use our professional referral directory to find a qualified specialist.',
      category: 'Medical',
    },
    {
      id: 5,
      question: 'How do I join a support group?',
      answer: 'Simply contact the support group coordinator via the email provided in the group listing. They will provide you with meeting details, registration information, and answer any questions you may have.',
      category: 'Support Groups',
    },
    {
      id: 6,
      question: 'Can family members attend support groups?',
      answer: 'Yes! We have dedicated groups for family members and caregivers, and some groups welcome both individuals with epilepsy and their support persons. Check the specific group description for details.',
      category: 'Support Groups',
    },
    {
      id: 7,
      question: 'What if I need help outside of business hours?',
      answer: 'For crisis situations, please use the 24/7 emergency hotlines listed at the top of this page. For non-urgent matters, you can submit a contact form anytime, and we\'ll respond during our next business day.',
      category: 'Emergency',
    },
    {
      id: 8,
      question: 'Do you offer services in languages other than English?',
      answer: 'Yes, we have Spanish-speaking support groups and can connect you with multilingual healthcare providers. Contact us to discuss your language needs and we\'ll do our best to accommodate you.',
      category: 'General',
    },
    {
      id: 9,
      question: 'How do I find a specialist in my area?',
      answer: 'Use our professional referral directory above to search by location and specialty. You can also contact us directly and we\'ll help you find appropriate healthcare providers in your area.',
      category: 'Medical',
    },
    {
      id: 10,
      question: 'Is my personal information secure?',
      answer: 'Yes, we take data security seriously. All information shared through our contact forms is encrypted and stored securely. We never share your personal information with third parties without your explicit consent.',
      category: 'Privacy',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16 lg:pt-20">
        <ContactHero
          title="We're Here to Help"
          subtitle="Whether you need immediate crisis support, have questions about epilepsy, or want to connect with our community, we're here for you every step of the way."
          emergencyText="24/7 Crisis Support Available"
        />

        <EmergencyResources resources={emergencyResources} />

        <ContactMethods methods={contactMethods} />

        <div id="contact-form">
          <ContactForm />
        </div>

        <ProfessionalReferrals referrals={professionalReferrals} />

        <SupportGroups groups={supportGroups} />

        <FAQ faqs={faqs} />

        <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 via-background to-brand-violet/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-6">
                You're Not Alone
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our community is here to support you. Whether you're newly diagnosed, a long-time advocate, or supporting someone with epilepsy, we're committed to providing the resources and connections you need.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/first-aid-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-coral text-brand-coral-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-brand-coral/90 active:scale-95 shadow-card"
                >
                  <span>View First Aid Guide</span>
                </a>
                <a
                  href="/stories-hub"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground border border-border rounded-lg font-cta font-semibold transition-smooth hover:bg-muted active:scale-95"
                >
                  <span>Read Community Stories</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}