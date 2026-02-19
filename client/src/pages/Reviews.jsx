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
              "https://share.google/T0wqx59pLXw61AxUx",
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