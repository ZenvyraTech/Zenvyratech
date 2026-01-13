import Seo from '../components/Seo';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { FaCode, FaShoppingCart, FaSearch, FaBullhorn, FaPalette, FaCogs, FaCheck } from 'react-icons/fa';
import { services } from '../content/services';
import { blogPosts } from '../content/blogs';


const Services = () => {

  return (
    <>
      <Seo
        title="Services | Web Development & SEO – Zenvyra Tech"
        description="Full-stack web development, SEO optimization, UI/UX and digital growth services."
        pathname="/services"
        image="/images/services-og.jpg"
        keywords="web development, SEO services, e-commerce, UI/UX design, digital marketing, automation"
      />

      <div className="min-h-screen pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-soft-white">
              Our Services
            </h1>
            <div className="w-32 h-1 bg-accent mb-12" />
            <p className="text-xl md:text-2xl text-muted-grey leading-relaxed max-w-4xl">
              End-to-end digital solutions built with precision and performance in mind.
              <br />
              From concept to deployment, we handle every detail.
            </p>
          </AnimatedSection>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="text-accent mb-6">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-soft-white">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-grey mb-6 leading-relaxed">
                      {service.longDescription}
                    </p>
                
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <FaCheck className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                
                    <div className="pt-4 border-t border-steel">
                      <p className="text-sm text-muted-grey mb-2">Technologies & Tools:</p>
                      <p className="text-soft-white">{service.technologies.join(', ')}</p>
                    </div>

                    {/* Related Articles (internal linking) */}
                    {(() => {
                      const related = blogPosts.filter(p => p.category && p.category.toLowerCase() === service.title.toLowerCase())
                        .concat(blogPosts.filter(p => p.tags && p.tags.map(t=>t.toLowerCase()).includes(service.title.toLowerCase())));
                      const unique = Array.from(new Map(related.map(r => [r.slug, r])).values());
                      return unique.length > 0 ? (
                        <div className="mt-6">
                          <h3 className="text-sm text-soft-white font-semibold mb-2">Related articles</h3>
                          <ul className="text-muted-grey space-y-2">
                            {unique.slice(0,3).map(r => (
                              <li key={r.id}><a href={`/blog/${r.slug}`} className="text-accent hover:text-soft-white">{r.title}</a></li>
                            ))}
                          </ul>
                        </div>
                      ) : null;
                    })()}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                      <a
                        href="/contact"
                        className="inline-block px-6 py-2 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 text-center"
                      >
                        Enquire Now
                      </a>
                      <a
                        href="https://wa.me/918750443995"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 text-center flex items-center justify-center"
                      >
                        <span className="mr-2">💬</span> WhatsApp
                      </a>
                    </div>
                  </div>
                
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <GlassCard className="h-full">
                      <div className="aspect-video bg-gradient-to-br from-accent/10 to-transparent rounded-lg flex items-center justify-center p-8">
                        {index === 0 && (
                          <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent opacity-60" fill="currentColor">
                            <path d="M20 20h60v60H20z" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M20 35h60M20 50h60M20 65h40" stroke="currentColor" strokeWidth="2" />
                            <circle cx="30" cy="30" r="3" fill="currentColor" />
                            <circle cx="45" cy="30" r="3" fill="currentColor" />
                            <circle cx="60" cy="30" r="3" fill="currentColor" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent opacity-60" fill="currentColor">
                            <path d="M20 65Q50 20 80 65T20 65" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M30 55l10-15 10 15M60 55l10-15 10 15" stroke="currentColor" strokeWidth="2" />
                            <circle cx="50" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M42 45l16 10M42 55l16 10" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent opacity-60" fill="currentColor">
                            <rect x="15" y="20" width="70" height="60" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="50" cy="45" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M35 65l30 10M35 75l30 10" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent opacity-60" fill="currentColor">
                            <circle cx="50" cy="35" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                            <path d="M35 50l30 20M35 70l30 20" stroke="currentColor" strokeWidth="2" />
                            <path d="M20 20h60v60H20z" stroke="currentColor" strokeWidth="2" fill="none" />
                          </svg>
                        )}
                        {index === 4 && (
                          <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent opacity-60" fill="currentColor">
                            <path d="M20 70l15-30 15 20 15-15 15 25 15-35" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="20" cy="70" r="3" fill="currentColor" />
                            <circle cx="35" cy="40" r="3" fill="currentColor" />
                            <circle cx="50" cy="60" r="3" fill="currentColor" />
                            <circle cx="65" cy="45" r="3" fill="currentColor" />
                            <circle cx="80" cy="70" r="3" fill="currentColor" />
                            <circle cx="95" cy="35" r="3" fill="currentColor" />
                          </svg>
                        )}
                        {index === 5 && (
                          <svg viewBox="0 0 100 100" className="w-32 h-32 text-accent opacity-60" fill="currentColor">
                            <path d="M20 80l10-15 10 10 10-20 10 15 10-10 10 20 10-25" stroke="currentColor" strokeWidth="2" fill="none" />
                            <circle cx="20" cy="80" r="3" fill="currentColor" />
                            <circle cx="30" cy="65" r="3" fill="currentColor" />
                            <circle cx="40" cy="75" r="3" fill="currentColor" />
                            <circle cx="50" cy="55" r="3" fill="currentColor" />
                            <circle cx="60" cy="70" r="3" fill="currentColor" />
                            <circle cx="70" cy="60" r="3" fill="currentColor" />
                            <circle cx="80" cy="80" r="3" fill="currentColor" />
                            <circle cx="90" cy="55" r="3" fill="currentColor" />
                          </svg>
                        )}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 mt-24 bg-graphite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white">
                Common Questions
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" />
            </AnimatedSection>

            <div className="space-y-6">
              {[
                {
                  q: 'How long does a typical project take?',
                  a: 'Project timelines vary based on scope. A standard website takes 4-8 weeks, while larger systems may take 3-6 months. We prioritize quality over speed.',
                },
                {
                  q: 'Do you provide ongoing support?',
                  a: 'Yes. We offer maintenance packages and ongoing optimization services to ensure your digital systems continue to perform at their best.',
                },
                {
                  q: 'What industries do you work with?',
                  a: 'We work across industries—from startups to established businesses. Our systems-first approach adapts to any sector.',
                },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlassCard>
                    <h3 className="text-xl font-semibold mb-3 text-soft-white">
                      {item.q}
                    </h3>
                    <p className="text-muted-grey leading-relaxed">
                      {item.a}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-soft-white">
                Ready to start your project?
              </h3>
              <p className="text-lg text-muted-grey mb-6">
                Let's discuss how we can help you build something exceptional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
                >
                  Enquire Now
                </a>
                <a
                  href="https://wa.me/918750443995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <span className="mr-2">💬</span> WhatsApp
                </a>
              </div>
            </GlassCard>
          </AnimatedSection>
        </section>
      </div>
    </>
  );
};

export default Services;
