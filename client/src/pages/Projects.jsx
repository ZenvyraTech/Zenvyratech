import Seo from '../components/Seo';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { projects } from '../content/projects';
import { useState, useRef, useEffect, useMemo } from 'react';

const PREVIEW_ALLOWLIST = ['vercel.app', 'netlify.app', 'localhost'];

const ProjectCard = ({ project, delay }) => {
  const [hover, setHover] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const containerRef = useRef(null);

  /* ---------- Allowlist ---------- */
  const previewAllowed = useMemo(() => {
    try {
      const host = new URL(project.liveUrl).hostname;
      return PREVIEW_ALLOWLIST.some(
        d => host === d || host.endsWith(`.${d}`)
      );
    } catch {
      return false;
    }
  }, [project.liveUrl]);

  /* ---------- Lazy loading ---------- */
  useEffect(() => {
    if (!previewAllowed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [previewAllowed]);

  /* ---------- Scaling ---------- */
  const scale = 0.33; // designed for 1200x900

  return (
    <>
      <AnimatedSection delay={delay}>
        <motion.div whileHover={{ y: -10 }}>
          <GlassCard className="overflow-hidden p-0">

            <div
              ref={containerRef}
              className="relative h-64 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setModal(true)}
            >
              {/* Screenshot always visible */}
              <img
                src={project.image}
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  hover && loaded && previewAllowed ? 'opacity-0' : 'opacity-100'
                }`}
              />

              {/* Live badge */}
              {previewAllowed && (
                <span className="absolute top-2 left-2 bg-accent text-black text-xs px-2 py-1 rounded">
                  Live
                </span>
              )}

              {/* Lazy iframe */}
              {previewAllowed && visible && (
                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  onLoad={() => setLoaded(true)}
                  className={`absolute inset-0 w-[1200px] h-[900px] border-0 pointer-events-none origin-top-left transition-opacity duration-500 ${
                    hover && loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transform: `scale(${scale})` }}
                />
              )}

              {/* Loading spinner */}
              {previewAllowed && visible && !loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>

            <div className="p-6">
              <span className="text-xs text-accent">{project.category}</span>
              <h3 className="text-xl font-semibold mt-2 text-soft-white">
                {project.title}
              </h3>
              <p className="text-muted-grey mt-2">
                {project.description}
              </p>
            </div>

          </GlassCard>
        </motion.div>
      </AnimatedSection>

      {/* ---------- Mobile + tap modal ---------- */}
      {modal && previewAllowed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setModal(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black">
            <iframe
              src={project.liveUrl}
              title={project.title}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  return (
    <>
      <Seo
        title="Portfolio | Scalable Web Projects & Case Studies"
        description="Results-driven digital projects showcasing scalable solutions."
        pathname="/projects"
        image="/images/projects-og.jpg"
      />

      <div className="min-h-screen pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <AnimatedSection>
            <h1 className="text-5xl font-bold mb-6 text-soft-white">Our Work</h1>
            <p className="text-xl text-muted-grey max-w-3xl">
              High-performance digital platforms built for growth and measurable results.
            </p>
          </AnimatedSection>
        </section>

        <section className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
  