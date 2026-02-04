'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  interests: string[];
  availability: string;
  message: string;
}

const VolunteerRegistration: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const interestOptions = [
    { id: 'social-media', label: 'Social Media Advocacy' },
    { id: 'event-planning', label: 'Event Planning' },
    { id: 'fundraising', label: 'Fundraising' },
    { id: 'education', label: 'Educational Outreach' },
    { id: 'content-creation', label: 'Content Creation' },
    { id: 'community-support', label: 'Community Support' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-card">
            <div className="h-10 bg-muted rounded w-1/2 mb-4 animate-pulse" />
            <div className="h-6 bg-muted rounded w-3/4 mb-8 animate-pulse" />
            <div className="space-y-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-12 bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 lg:p-12 shadow-card text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-emerald/10 rounded-full mb-6">
              <Icon name="CheckCircleIcon" size={40} className="text-brand-emerald" variant="solid" />
            </div>
            
            <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
              Thank You for Volunteering!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              We've received your registration and will contact you soon with next steps. Together, we can make a difference in epilepsy awareness.
            </p>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-smooth hover:bg-primary/90"
            >
              <Icon name="ArrowLeftIcon" size={18} />
              <span>Submit Another Registration</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Become a Campaign Volunteer
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our community of advocates and help spread awareness
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-card space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Areas of Interest <span className="text-destructive">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {interestOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-3 p-3 bg-input border border-border rounded-lg cursor-pointer transition-smooth hover:bg-muted"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(option.id)}
                      onChange={() => handleCheckboxChange(option.id)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-ring"
                    />
                    <span className="text-sm text-foreground">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="availability" className="block text-sm font-medium text-foreground mb-2">
                Availability <span className="text-destructive">*</span>
              </label>
              <select
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
              >
                <option value="">Select your availability</option>
                <option value="weekdays">Weekdays</option>
                <option value="weekends">Weekends</option>
                <option value="flexible">Flexible</option>
                <option value="specific-events">Specific Events Only</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Tell Us About Yourself
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none"
                placeholder="Share your motivation for volunteering and any relevant experience..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 active:scale-95 shadow-card"
            >
              <Icon name="UserPlusIcon" size={20} />
              <span>Register as Volunteer</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerRegistration;