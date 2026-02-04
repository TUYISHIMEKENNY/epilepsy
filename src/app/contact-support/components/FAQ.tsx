'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = ['all', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="h-96" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-cta font-medium text-sm transition-smooth ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {category === 'all' ? 'All Questions' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-card rounded-lg shadow-card overflow-hidden transition-smooth hover:shadow-brand"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-smooth hover:bg-muted/50"
                  aria-expanded={openId === faq.id}
                >
                  <span className="text-lg font-headline font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <Icon
                    name="ChevronDownIcon"
                    size={24}
                    className={`text-primary flex-shrink-0 transition-smooth ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for?
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 active:scale-95"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Ask Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;