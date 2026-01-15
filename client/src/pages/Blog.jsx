import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';
import { blogPosts } from '../content/blogs';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPosts(blogPosts);
    setLoading(false);
  }, []);



  return (
    <>
      <Seo
        title="Digital Growth Blog | SEO & Web Development"
        description="Expert insights on technical SEO, scalable web development, and performance-driven digital strategies."
        pathname="/blog"
        keywords="SEO blog, web development insights, technical SEO, digital growth, scalable systems"
      />

      <div className="min-h-screen pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-soft-white">
              Blog
            </h1>
            <div className="w-32 h-1 bg-accent mb-12" />
            <p className="text-xl md:text-2xl text-muted-grey leading-relaxed max-w-4xl">
              Expert insights on technical SEO, scalable web development, and performance-driven digital strategies for growing businesses.
            </p>
          </AnimatedSection>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <article itemScope itemType="https://schema.org/Article">
                    <a href={`/blog/${post.slug}`} itemProp="url" className="block">
                      <GlassCard className="h-full hover:border-accent/70 transition-all duration-300 p-0 overflow-hidden">
                        {/* Featured Image Placeholder */}
                        <div className="h-48 bg-gradient-to-br from-accent/20 to-steel flex items-center justify-center">
                          <span className="text-3xl font-bold text-soft-white/10">
                            {post.title.substring(0, 1)}
                          </span>
                        </div>

                        {/* Post Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs text-accent font-semibold uppercase tracking-wide">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-grey">
                              {post.readTime} min read
                            </span>
                          </div>

                          <h2 itemProp="headline" className="text-xl font-semibold mb-3 text-soft-white hover:text-accent transition-colors duration-300">
                            <span itemProp="name">{post.title}</span>
                          </h2>

                          <p itemProp="description" className="text-muted-grey mb-4 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-steel">
                            <time itemProp="datePublished" dateTime={post.createdAt} className="text-sm text-muted-grey">
                              {new Date(post.createdAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                              })}
                            </time>
                            <span className="text-accent text-sm font-medium" aria-hidden>
                              Read More →
                            </span>
                          </div>

                          <meta itemProp="author" content={post.author} />
                          <meta itemProp="url" content={`/blog/${post.slug}`} />
                        </div>
                      </GlassCard>
                    </a>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-soft-white">
                Want to discuss a topic?
              </h3>
              <p className="text-lg text-muted-grey mb-6">
                Have questions or suggestions for future articles? Get in touch.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </GlassCard>
          </AnimatedSection>
        </section>
      </div>
    </>
  );
};

export default Blog;
