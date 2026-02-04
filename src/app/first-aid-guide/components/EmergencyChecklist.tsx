'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ChecklistItem {
  id: string;
  text: string;
  category: 'immediate' | 'during' | 'after';
}

interface EmergencyChecklistProps {
  items: ChecklistItem[];
}

const EmergencyChecklist: React.FC<EmergencyChecklistProps> = ({ items }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleToggle = (id: string) => {
    if (!isHydrated) return;
    
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const categoryLabels = {
    immediate: 'Immediate Actions',
    during: 'During Seizure',
    after: 'After Seizure'
  };

  const categoryColors = {
    immediate: 'border-brand-coral',
    during: 'border-warning',
    after: 'border-success'
  };

  const categories = ['immediate', 'during', 'after'] as const;

  return (
    <div className="bg-card rounded-lg shadow-card p-6 border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-headline font-semibold text-xl text-foreground">Emergency Checklist</h3>
        {isHydrated && checkedItems.size > 0 && (
          <button
            onClick={() => setCheckedItems(new Set())}
            className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
          >
            Reset All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {categories.map(category => {
          const categoryItems = items.filter(item => item.category === category);
          
          return (
            <div key={category} className={`border-l-4 pl-4 ${categoryColors[category]}`}>
              <h4 className="font-cta font-semibold text-foreground mb-3">
                {categoryLabels[category]}
              </h4>
              <div className="space-y-2">
                {categoryItems.map(item => (
                  <label
                    key={item.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-smooth cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={isHydrated ? checkedItems.has(item.id) : false}
                      onChange={() => handleToggle(item.id)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-smooth ${
                      isHydrated && checkedItems.has(item.id)
                        ? 'bg-primary border-primary' :'border-border group-hover:border-primary'
                    }`}>
                      {isHydrated && checkedItems.has(item.id) && (
                        <Icon name="CheckIcon" size={14} className="text-primary-foreground" />
                      )}
                    </div>
                    <span className={`text-sm transition-smooth ${
                      isHydrated && checkedItems.has(item.id)
                        ? 'text-muted-foreground line-through'
                        : 'text-foreground'
                    }`}>
                      {item.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmergencyChecklist;