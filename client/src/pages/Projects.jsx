import Seo from '../components/Seo';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { projects } from '../content/projects';
import { Link } from 'react-router-dom';

/* ---------- Project Card ---------- */
const ProjectCard = ({ project, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <motion.div whileHover={{ y: -8 }} className="h-full">
        <GlassCard className="overflow-hidden p-0 group h-full flex flex-col">

          {/* Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden">

            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Category */}
            <span className="absolute top-2 left-2 bg-accent text-black text-xs px-3 py-1 rounded">
              {project.category}
            </span>

            {/* Mobile-first overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 hidden sm:flex items-center justify-center">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-soft-white transition"
              >
                View Live →
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">

            <h3 className="text-lg sm:text-xl font-semibold text-soft-white">
              {project.title}
            </h3>

            <p className="text-muted-grey mt-2 text-sm sm:text-base flex-grow">
              {project.description}
            </p>

            {/* Results */}
            {project.results?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.results.slice(0, 2).map((r, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-steel/50 rounded text-soft-white"
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}

            {/* Tech stack */}
            {project.technologies?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs text-muted-grey border border-steel px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Mobile CTA */}
            <div className="mt-5 sm:hidden">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 bg-accent text-black font-semibold rounded-lg"
              >
                View Live
              </a>
            </div>

          </div>
        </GlassCard>
      </motion.div>
    </AnimatedSection>
  );
};

/* ---------- Main Page ---------- */
const Projects = () => {
  return (
    <>
      <Seo
        title="Portfolio | Zenvyra Tech"
        description="High-performance digital platforms built for growth, conversions, and measurable results."
        pathname="/projects"
        image="/projects-og.png"
      />

      <div className="min-h-screen pt-28 sm:pt-32 pb-20">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 mb-16 sm:mb-20">
          <AnimatedSection>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 text-soft-white">
              Our Work
            </h1>

            <p className="text-base sm:text-xl text-muted-grey max-w-2xl">
              Real businesses. Real outcomes. We build digital systems that
              generate leads, increase trust, and scale growth.
            </p>
          </AnimatedSection>
        </section>

        {/* Projects grid */}
        <section className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.08}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 sm:mt-28 text-center px-4">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-soft-white">
              Want similar results for your business?
            </h2>

            <Link
              to="/contact"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-accent text-black font-semibold rounded-lg"
            >
              Start a Project
            </Link>
          </AnimatedSection>
        </section>

      </div>
    </>
  );
};

export default Projects;
