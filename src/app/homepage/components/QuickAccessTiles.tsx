import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface QuickAccessTile {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
  bgColor: string;
  iconColor: string;
  isEmergency?: boolean;
}

const QuickAccessTiles = () => {
  const tiles: QuickAccessTile[] = [
    {
      id: 1,
      title: "First Aid Guide",
      description: "Essential steps to help during a seizure",
      icon: "HeartIcon",
      href: "/first-aid-guide",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      isEmergency: true
    },
    {
      id: 2,
      title: "About Epilepsy",
      description: "Understanding the condition and dispelling myths",
      icon: "BookOpenIcon",
      href: "/about-epilepsy",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      id: 3,
      title: "Community Stories",
      description: "Real experiences from people living with epilepsy",
      icon: "UserGroupIcon",
      href: "/stories-hub",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      id: 4,
      title: "Get Support",
      description: "Connect with resources and professionals",
      icon: "ChatBubbleLeftRightIcon",
      href: "/contact-support",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            Quick Access Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the information and support you need, right when you need it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              href={tile.href}
              className={`group relative ${tile.bgColor} rounded-xl p-6 transition-smooth hover:shadow-brand hover:scale-105 active:scale-95 ${
                tile.isEmergency ? 'ring-2 ring-red-200' : ''
              }`}
            >
              {tile.isEmergency && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                    <Icon name="ExclamationTriangleIcon" size={12} variant="solid" />
                    <span>Emergency</span>
                  </span>
                </div>
              )}

              <div className={`w-14 h-14 ${tile.bgColor} rounded-lg flex items-center justify-center mb-4 transition-smooth group-hover:scale-110`}>
                <Icon name={tile.icon as any} size={28} variant="solid" className={tile.iconColor} />
              </div>

              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                {tile.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {tile.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <span>Access Now</span>
                <Icon name="ArrowRightIcon" size={16} className="transition-smooth group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessTiles;    