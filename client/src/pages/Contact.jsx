import { useState } from 'react';
import Seo from '../components/Seo';
import { useForm } from '@formspree/react';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const [state, handleSubmit] = useForm("xeeeqaor"); // Formspree form ID - make sure this matches your form ID from https://formspree.io
  
  // Update the contact details
  const contactInfo = {
    email: 'contact@zenvyratech.in',
    phone: '+91 875 044 3995', // Updated phone number
    location: 'Delhi, India',
    businessHours: [
      { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    whatToExpect: [
      'Response within 24 hours',
      'Free project consultation',
      'Detailed proposal with timeline',
      'Transparent pricing',
    ],
  };
  
  // Update the status based on Formspree state
  const status = {
    type: state.succeeded ? 'success' : state.errors ? 'error' : '',
    message: state.succeeded 
      ? 'Thank you for your message! We\'ll get back to you soon.'
      : state.errors 
        ? 'There was an error submitting the form. Please try again.'
        : ''
  };

  return (
    <>
      <Seo
        title="Contact Zenvyra Tech | Let’s Build Something Scalable"
        description="Get in touch with Zenvyra Tech for web development and SEO services."
        pathname="/contact"
        image="/images/contact-og.jpg"
        keywords="contact, get in touch, web development, SEO services, digital marketing, India"
      />

      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-soft-white">
              Let's Build Something Reliable
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              Have a digital project in mind? Let's discuss how we can engineer a scalable solution that delivers measurable results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <GlassCard>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-soft-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-steel rounded-lg text-soft-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-soft-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-steel rounded-lg text-soft-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-soft-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-steel rounded-lg text-soft-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-soft-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-charcoal border border-steel rounded-lg text-soft-white focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {status.message && (
                    <div
                      className={`p-4 rounded-lg ${
                        status.type === 'success'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-red-500/10 text-red-400'
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full px-6 py-4 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </GlassCard>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.4}>
              <div className="space-y-8">
                <GlassCard>
                  <h3 className="text-2xl font-semibold mb-4 text-soft-white">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-grey mb-1">Email</p>
                      <a
                        href="mailto:contact@zenvyratech.in"
                        className="text-accent hover:text-soft-white transition-colors duration-300"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-grey mb-1">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                        className="text-accent hover:text-soft-white transition-colors duration-300"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-grey mb-1">Location</p>
                      <p className="text-soft-white">{contactInfo.location}</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-2xl font-semibold mb-4 text-soft-white">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    {contactInfo.businessHours.map((hour, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-grey">{hour.day}</span>
                        <span className="text-soft-white">{hour.hours}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-2xl font-semibold mb-4 text-soft-white">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-muted-grey">
                    {contactInfo.whatToExpect.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent mr-2">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
