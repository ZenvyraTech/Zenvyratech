import { motion } from 'framer-motion';
import Link from 'next/link';
import Seo from '../../components/Seo';
import AnimatedSection from '../../components/AnimatedSection';
import GlassCard from '../../components/GlassCard';

// Metadata for the about page
export const metadata = {
  title: "About Zenvyra Tech | Digital Systems Agency",
  description: "Discover Zenvyra Tech's mission to build scalable, performance-driven digital solutions for growing businesses.",
  keywords: ["digital agency", "web development company", "SEO services", "scalable systems", "Delhi"],
  alternates: {
    canonical: "https://www.zenvyratech.in/about",
  },
  openGraph: {
    title: "About Zenvyra Tech | Digital Systems Agency",
    description: "Discover Zenvyra Tech's mission to build scalable, performance-driven digital solutions for growing businesses.",
    url: "https://www.zenvyratech.in/about",
    type: "website",
    images: [
      {
        url: "/founder.png",
        width: 1200,
        height: 630,
        alt: "About Zenvyra Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Zenvyra Tech | Digital Systems Agency",
    description: "Discover Zenvyra Tech's mission to build scalable, performance-driven digital solutions for growing businesses.",
    images: ["/founder.png"],
  },
};

const About = () => {
  const philosophies = [
    {
      title: 'Minimalism',
      description: 'Strip away the unnecessary. Focus on what matters.',
    },
    {
      title: 'Precision',
      description: 'Every detail counts. Build with intention.',
    },
    {
      title: 'Scalability',
      description: 'Systems that grow with your business.',
    },
    {
      title: 'Reliability',
      description: 'Consistent performance. Predictable outcomes.',
    },
  ];

  // Organization JSON-LD schema
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zenvyra Tech",
    "url": "https://www.zenvyratech.in",
    "logo": "https://www.zenvyratech.in/logo.svg",
    "sameAs": [
      "https://www.linkedin.com/company/zenvyratech",
      "https://twitter.com/zenvyratech",
      "https://www.facebook.com/zenvyratech"
    ]
  };

  return (
    <>
      <Seo
        title="About Zenvyra Tech | Digital Systems Agency"
        description="Discover Zenvyra Tech's mission to build scalable, performance-driven digital solutions for growing businesses."
        pathname="/about"
        keywords="digital agency, web development company, SEO services, scalable systems, Delhi"
      />

      {/* Organization Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="min-h-screen pt-32 pb-20">
        {/* Intro */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <AnimatedSection>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 text-soft-white"
            >
              About Zenvyra Tech
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-32 h-1 bg-accent mb-12 origin-left"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-grey leading-relaxed max-w-4xl"
            >
              Zenvyra Tech builds <span className="text-accent font-semibold">scalable digital systems</span> that drive measurable business growth through clean code and strategic SEO.
            </motion.p>
          </AnimatedSection>
        </section>

        {/* Mission Statement */}
        <section className="py-24 bg-graphite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-soft-white">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-muted-grey leading-relaxed">
                  We build <span className="text-soft-white font-semibold">performance-driven digital systems</span> that scale with your business. Our approach combines clean code, strategic SEO, and sustainable growth practices.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white">
                Brand Philosophy
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {philosophies.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <GlassCard className="h-full text-center">
                    <motion.h3
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-6xl font-bold text-accent mb-6 opacity-20"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.h3>
                    <h3 className="text-2xl font-semibold mb-4 text-soft-white">
                      {item.title}
                    </h3>
                    <p className="text-muted-grey leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 bg-graphite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <AnimatedSection>
                <div className="relative aspect-square rounded-lg overflow-hidden glass-effect">
                  <img 
                    src="/founder.png" 
                    alt="Abhishek, Founder of Zenvyra Tech"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>

              {/* Founder Info */}
              <AnimatedSection delay={0.3}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 text-soft-white">
                      Abhishek
                    </h2>
                    <p className="text-xl text-accent font-semibold mb-6">
                      Founder & Digital Engineer
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg text-muted-grey leading-relaxed">
                      Founded Zenvyra Tech with the belief that <span className="text-soft-white font-semibold">digital systems should deliver results, not just aesthetics</span>.
                    </p>

                    <p className="text-lg text-muted-grey leading-relaxed">
                      Specializes in <span className="text-accent">scalable web development</span>, <span className="text-accent">technical SEO</span>, and <span className="text-accent">growth-oriented digital solutions</span> for forward-thinking businesses.
                    </p>

                    <p className="text-lg text-muted-grey leading-relaxed">
                      Leads projects with a systems-first approach: <span className="text-soft-white italic">engineered for performance, built to scale</span>.
                    </p>
                  </div>

                  <div className="pt-6">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-steel/50 text-soft-white rounded text-sm">
                        Scalable Web Apps
                      </span>
                      <span className="px-4 py-2 bg-steel/50 text-soft-white rounded text-sm">
                        Technical SEO
                      </span>
                      <span className="px-4 py-2 bg-steel/50 text-soft-white rounded text-sm">
                        System Architecture
                      </span>
                      <span className="px-4 py-2 bg-steel/50 text-soft-white rounded text-sm">
                        Growth Engineering
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white">
                What We Stand For
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
              <p className="text-xl text-muted-grey max-w-3xl mx-auto">
                These aren't just words on a page. They guide every decision we make.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Transparency',
                  description: 'Clear communication and honest project timelines.',
                },
                {
                  title: 'Performance Focus',
                  description: 'Engineered solutions that deliver measurable results.',
                },
                {
                  title: 'Scalable Growth',
                  description: 'Systems designed to expand with your business needs.',
                },
              ].map((value, index) => (
                <AnimatedSection key={index} delay={index * 0.15}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-soft-white">
                      {value.title}
                    </h3>
                    <p className="text-muted-grey leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <GlassCard className="text-center max-w-3xl mx-auto">
                <h3 className="text-3xl font-bold mb-4 text-soft-white">
                  Ready to work together?
                </h3>
                <p className="text-lg text-muted-grey mb-6">
                  Let's build something that actually works.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;