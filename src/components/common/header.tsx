'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  isEmergency?: boolean;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      href: '/homepage',
      description: 'Return to homepage'
    },
    {
      label: 'About Epilepsy',
      href: '/about-epilepsy',
      description: 'Learn the facts'
    },
    {
      label: 'First Aid Guide',
      href: '/first-aid-guide',
      description: 'Emergency resources',
      isEmergency: true
    },
    {
      label: 'Stories',
      href: '/stories-hub',
      description: 'Community voices'
    },
    {
      label: 'Campaigns',
      href: '/campaigns',
      description: 'Take action'
    }
  ];

  const moreItems: NavigationItem[] = [
    {
      label: 'Contact & Support',
      href: '/contact-support',
      description: 'Get help'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled
            ? 'bg-card shadow-card'
            : 'bg-background'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/homepage"
              className="flex items-center gap-3 transition-smooth hover:opacity-80 focus:opacity-80"
              aria-label="Epilepsy Awareness Hub - Home"
            >
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-smooth"
                  aria-hidden="true"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="var(--color-primary)"
                    opacity="0.1"
                  />
                  <path
                    d="M20 8C13.373 8 8 13.373 8 20C8 26.627 13.373 32 20 32C26.627 32 32 26.627 32 20C32 13.373 26.627 8 20 8ZM20 10C25.514 10 30 14.486 30 20C30 25.514 25.514 30 20 30C14.486 30 10 25.514 10 20C10 14.486 14.486 10 20 10Z"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M16 16L20 20L24 16"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 24L20 20L24 24"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-xl font-headline font-semibold text-foreground leading-tight">
                  Epilepsy Awareness Hub
                </span>
                <span className="text-xs text-muted-foreground font-body hidden sm:block">
                  Knowledge Illuminates, Community Heals
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-smooth group ${
                    isActiveRoute(item.href)
                      ? item.isEmergency
                        ? 'text-brand-coral bg-brand-coral/10' :'text-primary bg-primary/10' :'text-foreground hover:text-primary hover:bg-muted'
                  } ${item.isEmergency ? 'ring-2 ring-brand-coral/20' : ''}`}
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.description && (
                    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 bg-popover text-popover-foreground text-xs rounded-md shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth whitespace-nowrap pointer-events-none">
                      {item.description}
                    </span>
                  )}
                  {isActiveRoute(item.href) && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full ${
                        item.isEmergency ? 'bg-brand-coral' : 'bg-primary'
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}

              <div className="relative group">
                <button
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-smooth flex items-center gap-1"
                  aria-label="More options"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>More</span>
                  <Icon name="ChevronDownIcon" size={16} className="transition-smooth group-hover:rotate-180" />
                </button>
                <div className="absolute right-0 top-full mt-2 w-56 bg-popover rounded-lg shadow-brand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                  <div className="py-2">
                    {moreItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm transition-smooth ${
                          isActiveRoute(item.href)
                            ? 'text-primary bg-primary/10 font-medium' :'text-popover-foreground hover:bg-muted'
                        }`}
                      >
                        <div className="flex flex-col gap-0.5">
                          <span>{item.label}</span>
                          {item.description && (
                            <span className="text-xs text-muted-foreground">{item.description}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            <button
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            className="fixed inset-0 bg-foreground/20"
            onClick={handleMobileMenuToggle}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-card shadow-brand animate-slide-in-from-top overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="p-6 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileLinkClick}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-smooth ${
                    isActiveRoute(item.href)
                      ? item.isEmergency
                        ? 'text-brand-coral bg-brand-coral/10 ring-2 ring-brand-coral/20' :'text-primary bg-primary/10' :'text-foreground hover:bg-muted'
                  }`}
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <span>{item.label}</span>
                      {item.description && (
                        <span className="text-xs text-muted-foreground font-normal">
                          {item.description}
                        </span>
                      )}
                    </div>
                    {isActiveRoute(item.href) && (
                      <Icon
                        name="CheckIcon"
                        size={20}
                        className={item.isEmergency ? 'text-brand-coral' : 'text-primary'}
                      />
                    )}
                  </div>
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-border">
                <p className="px-4 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  More Options
                </p>
                {moreItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleMobileLinkClick}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-smooth ${
                      isActiveRoute(item.href)
                        ? 'text-primary bg-primary/10' :'text-foreground hover:bg-muted'
                    }`}
                    aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1">
                        <span>{item.label}</span>
                        {item.description && (
                          <span className="text-xs text-muted-foreground font-normal">
                            {item.description}
                          </span>
                        )}
                      </div>
                      {isActiveRoute(item.href) && (
                        <Icon name="CheckIcon" size={20} className="text-primary" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sticky bottom-0 p-6 bg-muted border-t border-border">
              <Link
                href="/first-aid-guide"
                onClick={handleMobileLinkClick}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-brand-coral text-brand-coral-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-brand-coral/90 active:scale-95 shadow-card"
              >
                <Icon name="HeartIcon" size={20} variant="solid" />
                <span>Emergency First Aid</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;