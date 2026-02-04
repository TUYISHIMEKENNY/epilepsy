import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import StoriesInteractive from './components/StoriesInteractive';

export const metadata: Metadata = {
  title: 'Stories Hub - Epilepsy Awareness Hub',
  description: 'Read authentic stories from individuals living with epilepsy and their families. Personal narratives that inspire, educate, and reduce stigma while building community connection.',
};

export default function StoriesHubPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <StoriesInteractive />
      </main>
    </>
  );
}