import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { FaChartLine, FaCog, FaFileAlt, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const SEOServices = () => {
  const services = [
    {
      icon: <FaCog size={36} />,
      title: 'Technical SEO',
      description: 'Site structure, speed optimization, crawlability, and indexing improvements.',
    },
    {
      icon: <FaFileAlt size={36} />,
      title: 'On-Page SEO',
      description: 'Content optimization, meta tags, schema markup, and internal linking strategy.',
    },
    {
      icon: <FaSearch size={36} />,
      title: 'Content Strategy',
      description: 'Keyword research, content planning, and SEO-optimized content creation.',
    },
    {
      icon: <FaMapMarkerAlt size={36} />,
      title: 'Local SEO',
      description: 'Google Business Profile optimization and local search visibility.',
    },
    {
      icon: <FaChartLine size={36} />,
      title: 'Analytics & Tracking',
      description: 'Performance monitoring, conversion tracking, and data-driven insights.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>SEO Services for Long-Term Growth | Zenvyra Tech</title>
        <meta
          name="description"
          content="Performance-focused SEO strategies including technical SEO, on-page optimization, and content systems."
        />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-soft-white">
              SEO Services
            </h1>
            <div className="w-32 h-1 bg-accent mb-12" />
            <p className="text-xl md:text-2xl text-muted-grey leading-relaxed max-w-4xl">
              Performance-focused SEO strategies built for{' '}
              <span className="text-accent font-semibold">long-term organic growth</span>.
              <br />
              We don't chase algorithms—we build sustainable search visibility.
            </p>
          </AnimatedSection>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-graphite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlassCard className="h-full">
                    <div className="text-accent mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-soft-white">
                      {service.title}
                    </h3>
                    <p className="text-muted-grey leading-relaxed">
                      {service.description}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white">
              Our SEO Process
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit', desc: 'Technical & content analysis' },
              { step: '02', title: 'Strategy', desc: 'Keyword & content planning' },
              { step: '03', title: 'Optimize', desc: 'Implementation & fixes' },
              { step: '04', title: 'Monitor', desc: 'Tracking & refinement' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="text-center">
                  <div className="text-6xl font-bold text-steel mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2 text-soft-white">{item.title}</h3>
                  <p className="text-muted-grey">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Metrics Showcase */}
        <section className="py-24 bg-graphite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white">
                What We Track
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto" />
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { metric: 'Organic Traffic', icon: FaChartLine },
                { metric: 'Keyword Rankings', icon: FaSearch },
                { metric: 'Page Speed', icon: FaCog },
                { metric: 'Conversion Rate', icon: FaChartLine },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <GlassCard className="text-center">
                    <item.icon className="text-accent text-3xl mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-soft-white">{item.metric}</h3>
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
                Ready to grow your organic visibility?
              </h3>
              <p className="text-lg text-muted-grey mb-6">
                Let's build an SEO strategy that actually works.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
              >
                Start Your SEO Journey
              </a>
            </GlassCard>
          </AnimatedSection>
        </section>
      </div>
    </>
  );
};

export default SEOServices;
