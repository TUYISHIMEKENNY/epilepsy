'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  userType: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  userType?: string;
  subject?: string;
  message?: string;
  consent?: string;
}

const ContactForm: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    userType: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const userTypes = [
    'Person with Epilepsy',
    'Family Member/Caregiver',
    'Healthcare Professional',
    'Educator',
    'Employer',
    'Volunteer/Advocate',
    'Media/Press',
    'Other',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select your user type';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        userType: '',
        subject: '',
        message: '',
        consent: false,
      });
      setErrors({});

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  if (!isHydrated) {
    return (
      <section className="py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-card">
              <div className="h-96" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you within 24-48 hours
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 lg:p-8 shadow-card">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-start gap-3">
                <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0" variant="solid" />
                <div>
                  <p className="text-success font-medium mb-1">Message sent successfully!</p>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. We'll respond to your inquiry soon.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                      errors.name ? 'border-error' : 'border-border'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={16} />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                      errors.email ? 'border-error' : 'border-border'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={16} />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                      errors.phone ? 'border-error' : 'border-border'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-error flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={16} />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-foreground mb-2">
                    I am a... <span className="text-brand-coral">*</span>
                  </label>
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-input border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                      errors.userType ? 'border-error' : 'border-border'
                    }`}
                  >
                    <option value="">Select your role</option>
                    {userTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.userType && (
                    <p className="mt-1 text-sm text-error flex items-center gap-1">
                      <Icon name="ExclamationCircleIcon" size={16} />
                      {errors.userType}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject <span className="text-brand-coral">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth ${
                    errors.subject ? 'border-error' : 'border-border'
                  }`}
                  placeholder="How can we help you?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-error flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={16} />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-brand-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-2.5 bg-input border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth resize-none ${
                    errors.message ? 'border-error' : 'border-border'
                  }`}
                  placeholder="Please provide details about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-error flex items-center gap-1">
                    <Icon name="ExclamationCircleIcon" size={16} />
                    {errors.message}
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-ring"
                  />
                  <span className="text-sm text-muted-foreground">
                    I agree to the privacy policy and consent to my information being used to respond to my inquiry. <span className="text-brand-coral">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-error flex items-center gap-1 ml-7">
                    <Icon name="ExclamationCircleIcon" size={16} />
                    {errors.consent}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold transition-smooth hover:bg-primary/90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;