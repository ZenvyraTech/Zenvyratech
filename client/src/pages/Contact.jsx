import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending the form data
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you soon. In the meantime, feel free to reach out to us directly at contact@zenvyratech.com',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Zenvyra Tech | Get in Touch for Digital Solutions</title>
        <meta
          name="description"
          content="Get in touch with Zenvyra Tech to start your digital project. Reach out for web development, SEO, design, and digital marketing services."
        />
        <meta name="keywords" content="contact, get in touch, web development, SEO services, digital marketing, India" />
        <meta property="og:title" content="Contact Zenvyra Tech | Get in Touch for Digital Solutions" />
        <meta property="og:description" content="Get in touch with Zenvyra Tech to start your digital project. Reach out for web development, SEO, design, and digital marketing services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zenvyratech.com/contact" />
        <meta property="og:image" content="/images/contact-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Zenvyra Tech | Get in Touch for Digital Solutions" />
        <meta name="twitter:description" content="Get in touch with Zenvyra Tech to start your digital project. Reach out for web development, SEO, design, and digital marketing services." />
        <meta name="twitter:image" content="/images/contact-og.jpg" />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-soft-white">
              Let's Build Something Reliable
            </h1>
            <div className="w-32 h-1 bg-accent mx-auto mb-8" />
            <p className="text-xl text-muted-grey max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can help you build
              a digital solution that works.
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
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.subject}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
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
                    disabled={loading}
                    className="w-full px-6 py-4 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
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
                        href="mailto:contact@zenvyratech.com"
                        className="text-accent hover:text-soft-white transition-colors duration-300"
                      >
                        contact@zenvyratech.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-grey mb-1">Phone</p>
                      <a
                        href="tel:+911234567890"
                        className="text-accent hover:text-soft-white transition-colors duration-300"
                      >
                        +91 123 456 7890
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-grey mb-1">Location</p>
                      <p className="text-soft-white">India</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-2xl font-semibold mb-4 text-soft-white">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-grey">Monday - Friday</span>
                      <span className="text-soft-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-grey">Saturday</span>
                      <span className="text-soft-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-grey">Sunday</span>
                      <span className="text-soft-white">Closed</span>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="text-2xl font-semibold mb-4 text-soft-white">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-muted-grey">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">→</span>
                      Response within 24-48 hours
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">→</span>
                      Free initial consultation
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">→</span>
                      Detailed project proposal
                    </li>
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
