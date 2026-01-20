import { AllGoogleReviews } from '../components/GoogleReviews';
import AnimatedSection from '../components/AnimatedSection';
import { Helmet } from 'react-helmet-async';
import googleReviews from '../data/googleReviews.json';

const Reviews = () => {
  return (
    <div className="min-h-screen bg-charcoal">
      <Helmet>
        <title>Client Reviews & Testimonials | Zenvyra Tech</title>
        <meta name="description" content="Read authentic client testimonials and reviews for Zenvyra Tech. See why businesses trust us for web development, SEO, and digital solutions." />
        <link rel="canonical" href="https://www.zenvyratech.in/reviews" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zenvyra Tech",
            "url": "https://www.zenvyratech.in",
            "logo": "https://www.zenvyratech.in/logo.svg",
            "sameAs": [
              "https://www.google.com/maps/place/Zenvyra+Tech",
              "https://www.linkedin.com/company/zenvyratech",
              "https://www.zenvyratech.in"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": googleReviews.length
            },
            "review": googleReviews.map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating
              },
              "reviewBody": review.text,
              "datePublished": review.date
            }))
          })}
        </script>
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-graphite to-charcoal cyber-grid">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-soft-white text-glow">
                Client Testimonials
              </h1>
              <p className="text-xl text-muted-grey max-w-2xl mx-auto">
                Hear what our clients have to say about our services
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Section */}
      <AllGoogleReviews />
      
      {/* Disclaimer */}
      <div className="py-8 text-center text-muted-grey text-sm">
        <p>Reviews shown here are sourced from Google and updated periodically.</p>
      </div>
    </div>
  );
};

export default Reviews;