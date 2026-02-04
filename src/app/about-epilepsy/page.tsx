import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutEpilepsyInteractive from './components/AboutEpilepsyInteractive';

export const metadata: Metadata = {
  title: 'About Epilepsy - Epilepsy Awareness Hub',
  description: 'Comprehensive, accessible education about epilepsy. Learn about seizure types, causes, treatments, and living well with epilepsy. Evidence-based information that dispels myths and builds understanding.',
};

export default function AboutEpilepsyPage() {
  return (
    <>
      <Header />
      <main>
        <AboutEpilepsyInteractive />
      </main>
    </>
  );
}