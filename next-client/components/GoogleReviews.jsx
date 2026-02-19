import { motion } from 'framer-motion';
import googleReviews from '../data/googleReviews.json';

// Star rating component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
      {hasHalfStar && (
        <span key="half" className="text-yellow-400 text-lg">
          ★
        </span>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-600 text-lg">
          ☆
        </span>
      ))}
    </div>
  );
};

// Individual review card component
const ReviewCard = ({ review, isCompact = false }) => {
  return (
    <motion.article
      className={`p-6 rounded-xl ${
        isCompact ? 'bg-charcoal/50' : 'bg-charcoal'
      } border border-steel hover:border-accent transition-all duration-300`}
      itemScope
      itemType="https://schema.org/Review"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-semibold text-soft-white text-lg" itemProp="author" itemScope itemType="https://schema.org/Person">
            <span itemProp="name">{review.name}</span>
          </h4>
          <div className="flex items-center mt-1">
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content={review.rating.toString()} />
              <StarRating rating={review.rating} />
            </div>
            {!isCompact && (
              <span className="ml-2 text-sm text-muted-grey" itemProp="datePublished">{review.formattedDate}</span>
            )}
          </div>
        </div>
        {isCompact && (
          <span className="text-xs text-muted-grey bg-steel/50 px-2 py-1 rounded" itemProp="datePublished">
            {review.formattedDate}
          </span>
        )}
      </div>
      
      <p className={`text-muted-grey ${isCompact ? 'line-clamp-3 text-sm' : 'text-base'}`} itemProp="reviewBody">
        "{review.text}"
      </p>
      
      {!isCompact && (
        <p className="mt-3 text-sm text-muted-grey" itemProp="datePublished">{review.formattedDate}</p>
      )}
    </motion.article>
  );
};

// Google Reviews section for homepage
const GoogleReviewsSection = ({ title = "What Clients Say" }) => {
  // Take only the first 3 reviews for the homepage
  const displayedReviews = googleReviews.slice(0, 3);

  // Calculate average rating
  const averageRating = googleReviews.reduce((sum, review) => sum + review.rating, 0) / googleReviews.length;
  const roundedAverage = Math.round(averageRating * 10) / 10; // Round to 1 decimal place

  return (
    <section className="py-16 bg-graphite" id="reviews" itemScope itemType="https://schema.org/CreativeWorkSeries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-soft-white" id="reviews-heading">
            {title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          
          {/* Google Rating Display */}
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content={roundedAverage.toString()} />
            <meta itemProp="bestRating" content="5" />
            <meta itemProp="worstRating" content="1" />
            <meta itemProp="reviewCount" content={googleReviews.length.toString()} />
            <a 
              href="https://g.page/r/CZ59KVvRzmZcEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-steel/50 px-4 py-2 rounded-lg hover:bg-steel/70 transition-colors duration-300"
            >
              <div className="flex text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => {
                  if (i < Math.floor(roundedAverage)) {
                    return <span key={i} className="text-yellow-400">★</span>;
                  } else if (i === Math.floor(roundedAverage) && roundedAverage % 1 >= 0.5) {
                    return <span key={i} className="text-yellow-400">★</span>;
                  } else {
                    return <span key={i} className="text-gray-600">☆</span>;
                  }
                })}
              </div>
              <span className="text-soft-white font-semibold">{roundedAverage} on Google</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <ReviewCard key={review.id || index} review={review} isCompact={true} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/reviews"
            className="inline-flex items-center px-6 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300 transform hover:scale-105"
          >
            Read all reviews
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Full reviews page component
const AllGoogleReviews = () => {
  // Calculate average rating
  const averageRating = googleReviews.reduce((sum, review) => sum + review.rating, 0) / googleReviews.length;
  const roundedAverage = Math.round(averageRating * 10) / 10; // Round to 1 decimal place

  return (
    <section className="py-16 bg-graphite" itemScope itemType="https://schema.org/CreativeWorkSeries">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-soft-white" itemProp="name">Client Testimonials</h2>
          <p className="text-muted-grey max-w-2xl mx-auto mb-6">
            See what our clients have to say about working with us
          </p>
          
          {/* Google Rating Display */}
          <a 
            href="https://g.page/r/CZ59KVvRzmZcEAE/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-steel/50 px-4 py-2 rounded-lg hover:bg-steel/70 transition-colors duration-300"
          >
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => {
                if (i < Math.floor(roundedAverage)) {
                  return <span key={i} className="text-yellow-400">★</span>;
                } else if (i === Math.floor(roundedAverage) && roundedAverage % 1 >= 0.5) {
                  return <span key={i} className="text-yellow-400">★</span>;
                } else {
                  return <span key={i} className="text-gray-600">☆</span>;
                }
              })}
            </div>
            <span className="text-soft-white font-semibold">{roundedAverage} on Google</span>
          </a>
        </div>

        <div className="space-y-6">
          {googleReviews.map((review, index) => (
            <ReviewCard key={review.id || index} review={review} isCompact={false} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://share.google/T0wqx59pLXw61AxUx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-accent text-charcoal font-semibold rounded-lg hover:bg-soft-white transition-all duration-300"
          >
View on Google Maps
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { GoogleReviewsSection, AllGoogleReviews, ReviewCard };