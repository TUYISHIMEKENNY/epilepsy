import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: "Learn",
      links: [
        { label: "About Epilepsy", href: "/about-epilepsy" },
        { label: "First Aid Guide", href: "/first-aid-guide" },
        { label: "Community Stories", href: "/stories-hub" }
      ]
    },
    {
      title: "Get Involved",
      links: [
        { label: "Campaigns", href: "/campaigns" },
        { label: "Contact & Support", href: "/contact-support" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Emergency Resources", href: "/first-aid-guide" },
        { label: "Support Network", href: "/contact-support" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "ShareIcon", href: "#" },
    { name: "Twitter", icon: "ChatBubbleLeftIcon", href: "#" },
    { name: "Instagram", icon: "PhotoIcon", href: "#" },
    { name: "LinkedIn", icon: "BriefcaseIcon", href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/homepage" className="inline-flex items-center gap-3 mb-4">
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="20" cy="20" r="18" fill="var(--color-primary)" opacity="0.1" />
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
              <span className="text-xl font-headline font-semibold text-foreground">
                Epilepsy Awareness Hub
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md">
              Empowering individuals and communities through education, advocacy, and support. Together, we illuminate understanding and break the stigma surrounding epilepsy.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-muted rounded-lg text-muted-foreground transition-smooth hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-headline font-semibold text-foreground uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-smooth hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Epilepsy Awareness Hub. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;