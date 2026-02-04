'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  email: string;
  firstName: string;
  interests: string[];
}

const NewsletterSignup = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    interests: []
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const interestOptions = [
    { id: 'campaigns', label: 'Campaign Updates' },
    { id: 'stories', label: 'Community Stories' },
    { id: 'research', label: 'Latest Research' },
    { id: 'events', label: 'Events & Webinars' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Newsletter signup:', formData);
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ email: '', firstName: '', interests: [] });
      }, 5000);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-emerald-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-4">
              Welcome to Our Community!
            </h2>
            <p className="text-lg text-purple-100 mb-8">
              Thank you for subscribing. Check your email for a confirmation message and your first dose of epilepsy awareness content.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-lg font-cta font-semibold transition-smooth hover:bg-purple-50"
            >
              <Icon name="ArrowPathIcon" size={20} />
              <span>Subscribe Another Email</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <Icon name="EnvelopeIcon" size={20} className="text-white" />
              <span className="text-sm font-medium text-white">Stay Connected</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-4">
              Join Our Community Newsletter
            </h2>
            
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Get the latest epilepsy awareness updates, inspiring stories, and actionable resources delivered to your inbox
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-brand p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${
                      errors.firstName ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Enter your first name"
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={16} />
                      <span>{errors.firstName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-smooth ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={16} />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  What interests you? (Optional)
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {interestOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleInterestToggle(option.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-smooth ${
                        formData.interests.includes(option.id)
                          ? 'border-primary bg-primary/10 text-primary' :'border-border bg-muted text-foreground hover:border-primary/50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-smooth ${
                        formData.interests.includes(option.id)
                          ? 'border-primary bg-primary' :'border-border'
                      }`}>
                        {formData.interests.includes(option.id) && (
                          <Icon name="CheckIcon" size={14} className="text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <Icon name="InformationCircleIcon" size={20} className="flex-shrink-0 text-blue-600 mt-0.5" />
                <p className="text-sm text-blue-900">
                  We respect your privacy. Unsubscribe anytime. We'll never share your information with third parties.
                </p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-semibold text-lg transition-smooth hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-card"
              >
                <Icon name="PaperAirplaneIcon" size={20} />
                <span>Subscribe to Newsletter</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;