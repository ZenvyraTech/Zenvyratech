import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { FaCode, FaShoppingCart, FaSearch, FaBullhorn, FaPalette, FaCogs } from 'react-icons/fa';
import HoverAnimation from '../components/HoverAnimation';
import { staggerContainer, textVariant } from '../utils/animationUtils';

const Home = () => {
  const services = [
    {
      icon: <FaCode size={32} />,
      title: 'Website Development',
      description: 'Custom, scalable websites built with modern tech stacks.',
    },
    {
      icon: <FaShoppingCart size={32} />,
      title: 'E-Commerce Solutions',
      description: 'End-to-end online stores optimized for conversions.',
    },
    {
      icon: <FaSearch size={32} />,
      title: 'SEO & Performance',
      description: 'Technical SEO and speed optimization for organic growth.',
    },
    {
      icon: <FaBullhorn size={32} />,
      title: 'Digital Marketing',
      description: 'Strategic campaigns across social media and search.',
    },
    {
      icon: <FaPalette size={32} />,
      title: 'UI/UX & Graphic Design',
      description: 'Clean, intuitive interfaces and brand identity design.',
    },
    {
      icon: <FaCogs size={32} />,
      title: 'Automation & Integrations',
      description: 'Streamline workflows with custom integrations.',
    },
  ];

  const process = [
    { step: '01', title: 'Research', description: 'Understanding goals and requirements' },
    { step: '02', title: 'Strategy', description: 'Planning the roadmap' },
    { step: '03', title: 'Design', description: 'Crafting the experience' },
    { step: '04', title: 'Build', description: 'Engineering the solution' },
    { step: '05', title: 'Optimize', description: 'Refining performance' },
    { step: '06', title: 'Scale', description: 'Growing with your business' },
  ];

  const principles = [
    'Clarity over complexity',
    'Systems over shortcuts',
    'Performance-first mindset',
    'Built for long-term growth',
  ];

  return (
    <>
      <Seo
        title="Zenvyra Tech | Web Development, SEO & Digital Solutions"
        description="Performance-driven digital agency delivering scalable websites, SEO services and digital growth systems."
        pathname="/"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"></div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="space-y-6"
            >
              <motion.h1
                variants={textVariant(0.2)}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
              >
                <span className="text-soft-white">Zenvyra Tech</span>
              </motion.h1>

              <motion.h2
                variants={textVariant(0.4)}
                className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-muted-grey"
              >
                Engineering Digital Systems That Scale
              </motion.h2>
              
              <motion.p
                variants={textVariant(0.6)}
                className="text-lg md:text-xl text-muted-grey max-w-3xl mx-auto mb-12 leading-relaxed"
              >
                We design, build, and optimize digital experiences —<br />
                websites, SEO, and growth systems built for clarity and long-term performance.
              </motion.p>
              
              <motion.div
                variants={textVariant(0.8)}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-charcoal transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-muted-grey text-muted-grey font-semibold rounded-lg hover:border-soft-white hover:text-soft-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-grey rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

        {/* Services Overview */}
        <section className="py-24 bg-graphite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white">
                What We Do
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <HoverAnimation key={index} className="h-full">
                  <AnimatedSection delay={index * 0.1}>
                    <GlassCard className="h-full group">
                      <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-soft-white">
                        {service.title}
                      </h3>
                      <p className="text-muted-grey leading-relaxed">
                        {service.description}
                      </p>
                    </GlassCard>
                  </AnimatedSection>
                </HoverAnimation>
              ))}
            </div>

            <AnimatedSection delay={0.6} className="text-center mt-12">
              <Link
                to="/services"
                className="inline-block px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-charcoal transition-all duration-300"
              >
                View All Services
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Why Zenvyra */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-soft-white">
                  Why Zenvyra
                </h2>
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <p className="text-lg text-muted-grey">{principle}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <GlassCard hover={false} className="p-8">
                  <p className="text-lg text-muted-grey leading-relaxed">
                    At Zenvyra Tech, we believe in building digital systems that are{' '}
                    <span className="text-accent font-semibold">simple, scalable, and sustainable</span>.
                    We don't chase trends—we focus on what works.
                    <br /><br />
                    Every project is approached with a systems-thinking mindset,
                    ensuring long-term performance and growth.
                  </p>
                </GlassCard>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-24 bg-graphite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white">
                Our Process
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto"></div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="relative">
                    <div className="text-6xl font-bold text-steel mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-soft-white">
                      {item.title}
                    </h3>
                    <p className="text-muted-grey">{item.description}</p>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30"></div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Preview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <GlassCard className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4 text-soft-white">
                  Founded by Abhishek
                </h3>
                <p className="text-lg text-muted-grey leading-relaxed mb-6">
                  Focused on building clean systems, honest solutions,
                  <br />
                  and digital products that actually work.
                </p>
                <Link
                  to="/about"
                  className="inline-block text-accent hover:text-soft-white transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-24 bg-gradient-to-r from-graphite to-steel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-soft-white">
                Let's build something solid.
              </h2>
              <HoverAnimation>
                <Link
                  to="/contact"
                  className="inline-block px-10 py-4 bg-accent text-charcoal font-bold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </HoverAnimation>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
