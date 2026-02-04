'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
            activeCategory === category
              ? 'bg-primary text-primary-foreground shadow-card'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
          aria-pressed={activeCategory === category}
          aria-label={`Filter by ${category}`}
        >
          {activeCategory === category && (
            <Icon name="CheckIcon" size={16} />
          )}
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;