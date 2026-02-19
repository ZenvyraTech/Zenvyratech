import Link from 'next/link';
import { motion } from 'framer-motion';
import Seo from '../../components/Seo';
import AnimatedSection from '../../components/AnimatedSection';
import GlassCard from '../../components/GlassCard';
import { projects } from '../../content/projects';

// Metadata for the projects page
export const metadata = {
  title: "Portfolio | Scalable Web Projects & Case Studies",
  description: "Results-driven digital projects showcasing scalable web applications and SEO-optimized solutions.",
  keywords: ["web development portfolio", "scalable projects", "SEO case studies", "digital solutions", "technical projects"],
  alternates: {
    canonical: "https://www.zenvyratech.in/projects",
  },
  openGraph: {
    title: "Portfolio | Scalable Web Projects & Case Studies",
    description: "Results-driven digital projects showcasing scalable web applications and SEO-optimized solutions.",
    url: "https://www.zenvyratech.in/projects",
    type: "website",
    images: [
      {
        url: "/images/projects-og.jpg",
        width: 1200,
        height: 630,
        alt: "Zenvyra Tech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Scalable Web Projects & Case Studies",
    description: "Results-driven digital projects showcasing scalable web applications and SEO-optimized solutions.",
    images: ["/images/projects-og.jpg"],
  },
};

const Projects = () => {
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
        title="Portfolio | Scalable Web Projects & Case Studies"
        description="Results-driven digital projects showcasing scalable web applications and SEO-optimized solutions."
        pathname="/projects"
        image="/images/projects-og.jpg"
        keywords="web development portfolio, scalable projects, SEO case studies, digital solutions, technical projects"
      />

      {/* Organization Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="min-h-screen pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-soft-white">
              Our Work
            </h1>
            <div className="w-32 h-1 bg-accent mb-12" />
            <p className="text-xl md:text-2xl text-muted-grey leading-relaxed max-w-4xl">
              Performance-driven projects engineered for scalability and measurable results.
              <br />
              Each solution built with clean architecture and strategic optimization.
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
                  className="group"
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
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
            </GlassCard>
          </AnimatedSection>
        </section>
      </div>
    </>
  );
};

export default Projects;