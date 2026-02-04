import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Statistic {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: string;
  color: string;
}

const StatisticsSection = () => {
  const statistics: Statistic[] = [
    {
      id: 1,
      value: "50M+",
      label: "People Worldwide",
      description: "Living with epilepsy globally",
      icon: "UserGroupIcon",
      color: "text-purple-600"
    },
    {
      id: 2,
      value: "1 in 26",
      label: "Will Develop Epilepsy",
      description: "People in their lifetime",
      icon: "ChartBarIcon",
      color: "text-blue-600"
    },
    {
      id: 3,
      value: "70%",
      label: "Can Be Controlled",
      description: "With proper treatment",
      icon: "ShieldCheckIcon",
      color: "text-emerald-600"
    },
    {
      id: 4,
      value: "150K+",
      label: "New Cases Annually",
      description: "Diagnosed each year in the US",
      icon: "ArrowTrendingUpIcon",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Understanding the Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Epilepsy affects millions worldwide. Knowledge and awareness can change lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="bg-card rounded-xl p-6 shadow-card transition-smooth hover:shadow-brand hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center ${stat.color}`}>
                  <Icon name={stat.icon as any} size={24} variant="solid" />
                </div>
              </div>
              
              <div className={`text-4xl font-headline font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              
              <h3 className="text-lg font-headline font-semibold text-foreground mb-1">
                {stat.label}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Sources: World Health Organization, Epilepsy Foundation
          </p>
          <link
            href="/about-epilepsy"
            className="inline-flex items-center gap-2 text-primary font-medium transition-smooth hover:gap-3"
          >
            <span>Explore detailed epilepsy information</span>
            <Icon name="ArrowRightIcon" size={20} />
          </link>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;