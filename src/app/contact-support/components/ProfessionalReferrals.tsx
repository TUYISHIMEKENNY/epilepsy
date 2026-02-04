'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Referral {
  id: number;
  name: string;
  specialty: string;
  location: string;
  phone: string;
  website: string;
  acceptingPatients: boolean;
  languages: string[];
}

interface ProfessionalReferralsProps {
  referrals: Referral[];
}

const ProfessionalReferrals: React.FC<ProfessionalReferralsProps> = ({ referrals }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const specialties = ['all', ...Array.from(new Set(referrals.map((r) => r.specialty)))];

  const filteredReferrals = referrals.filter((referral) => {
    const matchesSearch =
      referral.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      referral.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || referral.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  if (!isHydrated) {
    return (
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
                Professional Referrals
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Professional Referrals
            </h2>
            <p className="text-lg text-muted-foreground">
              Find qualified healthcare providers specializing in epilepsy care
            </p>
          </div>

          <div className="mb-8 grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Icon
                name="MagnifyingGlassIcon"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or location..."
                className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
              />
            </div>

            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty === 'all' ? 'All Specialties' : specialty}
                </option>
              ))}
            </select>
          </div>

          {filteredReferrals.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="FaceFrownIcon" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                No professionals found matching your criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredReferrals.map((referral) => (
                <div
                  key={referral.id}
                  className="bg-card rounded-lg p-6 shadow-card transition-smooth hover:shadow-brand"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-headline font-semibold text-foreground mb-1">
                        {referral.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">{referral.specialty}</p>
                    </div>
                    {referral.acceptingPatients && (
                      <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                        Accepting Patients
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPinIcon" size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{referral.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="PhoneIcon" size={16} className="flex-shrink-0" />
                      <a
                        href={`tel:${referral.phone.replace(/\D/g, '')}`}
                        className="hover:text-primary transition-smooth"
                      >
                        {referral.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="LanguageIcon" size={16} className="flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{referral.languages.join(', ')}</span>
                    </div>
                  </div>

                  <a
                    href={referral.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-cta font-medium transition-smooth hover:bg-primary/90 active:scale-95"
                  >
                    <span>Visit Website</span>
                    <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalReferrals;