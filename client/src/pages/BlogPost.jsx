import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import AnimatedSection from '../components/AnimatedSection';
import { blogPosts } from '../content/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPosts.find(post => post.slug === slug);
    setPost(foundPost);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-soft-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:text-soft-white">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${post.title} | Zenvyra Tech Blog`}
        description={post.seoDescription || post.excerpt}
        pathname={`/blog/${post.slug}`}
        image={post.featuredImage || '/images/default-blog-og.jpg'}
        type="article"
        keywords={post.seoKeywords ? post.seoKeywords.join(', ') : post.tags ? post.tags.join(', ') : post.category}
      />

      <div className="min-h-screen pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <AnimatedSection>
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-grey hover:text-accent transition-colors duration-300 mb-8"
            >
              ← Back to Blog
            </Link>
          </AnimatedSection>

          {/* Post Header */}
          <AnimatedSection delay={0.1}>
            <div className="mb-8">
              <span className="text-sm text-accent font-semibold uppercase tracking-wide">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-soft-white mt-4 mb-6">
                {post.title}
              </h1>
              <div className="flex items-center text-muted-grey text-sm space-x-4">
                <span>
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span>•</span>
                <span>{post.readTime} min read</span>
              </div>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-accent to-transparent mb-12"></div>
          </AnimatedSection>

          {/* Post Content */}
          <AnimatedSection delay={0.2}>
            <div
              className="prose prose-invert prose-lg max-w-none
              prose-headings:text-soft-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-grey prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:text-soft-white
              prose-strong:text-soft-white prose-strong:font-semibold
              prose-ul:text-muted-grey prose-ul:my-6
              prose-li:my-2
              prose-code:text-accent prose-code:bg-steel/30 prose-code:px-2 prose-code:py-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>

          {/* Post Footer */}
          <AnimatedSection delay={0.3}>
            <div className="mt-16 pt-8 border-t border-steel">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  to="/blog"
                  className="px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-charcoal transition-all duration-300"
                >
                  ← More Articles
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300"
                >
                  Start a Project →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
