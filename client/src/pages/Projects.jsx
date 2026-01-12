import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { projects } from '../content/projects';

const Projects = () => {

  return (
    <>
      <Helmet>
        <title>Our Work | Zenvyra Tech</title>
        <meta
          name="description"
          content="Explore digital projects and systems built by Zenvyra Tech."
        />
        <meta name="keywords" content="portfolio, projects, case studies, web development, design, SEO" />
        <meta property="og:title" content="Our Work | Zenvyra Tech" />
        <meta property="og:description" content="Explore digital projects and systems built by Zenvyra Tech." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.zenvyratech.com/projects" />
        <meta property="og:image" content="/images/projects-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Work | Zenvyra Tech" />
        <meta name="twitter:description" content="Explore digital projects and systems built by Zenvyra Tech." />
        <meta name="twitter:image" content="/images/projects-og.jpg" />
      </Helmet>

      <div className="min-h-screen pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-soft-white">
              Our Work
            </h1>
            <div className="w-32 h-1 bg-accent mb-12" />
            <p className="text-xl md:text-2xl text-muted-grey leading-relaxed max-w-4xl">
              A selection of projects we've built.
              <br />
              Each one designed with precision and built to perform.
            </p>
          </AnimatedSection>
        </section>

        {/* Projects Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <GlassCard className="h-full overflow-hidden p-0">
                    {/* Project Image Placeholder */}
                    <div className="relative h-64 bg-gradient-to-br from-accent/20 to-steel overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bold text-soft-white/10">
                          {project.title}
                        </span>
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-charcoal font-semibold text-lg">
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-soft-white group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-grey mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-steel/50 text-soft-white rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-soft-white">
                Want to see your project here?
              </h3>
              <p className="text-lg text-muted-grey mb-6">
                Let's create something exceptional together.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
            </GlassCard>
          </AnimatedSection>
        </section>
      </div>
    </>
  );
};

export default Projects;
