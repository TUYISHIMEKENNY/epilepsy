import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import FirstAidGuideInteractive from './components/FirstAidGuideInteractive';

export const metadata: Metadata = {
  title: 'Seizure First Aid Guide - Epilepsy Awareness Hub',
  description: 'Learn essential seizure first aid steps that could save a life. Access step-by-step instructions, emergency checklists, video demonstrations, and downloadable resources for immediate reference.',
};

export default function FirstAidGuidePage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <FirstAidGuideInteractive />
      </main>
    </>
  );
}