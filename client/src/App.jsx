import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
// Code-splitting lazy imports for faster initial load
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const SEOServices = lazy(() => import('./pages/SEOServices'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Reviews = lazy(() => import('./pages/Reviews'));


function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-charcoal text-soft-white relative">
          <GlobalMetadata />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

// Global metadata component
function GlobalMetadata() {
  const location = useLocation();
  
  // Define page-specific metadata
  const getPageMetadata = () => {
    const pathname = location.pathname;
    
    if (pathname === '/') {
      return {
        title: 'Zenvyra Tech - Web Development & SEO Agency | Digital Solutions',
        description: 'Zenvyra Tech is a premier web development and SEO agency specializing in creating high-performance digital solutions for businesses of all sizes.',
        url: 'https://www.zenvyratech.in/'
      };
    } else if (pathname === '/about') {
      return {
        title: 'About Zenvyra Tech - Your Digital Solutions Partner',
        description: 'Learn about Zenvyra Tech, our mission, team, and approach to creating exceptional digital solutions for businesses.',
        url: 'https://www.zenvyratech.in/about'
      };
    } else if (pathname === '/services') {
      return {
        title: 'Web Development & SEO Services | Zenvyra Tech',
        description: 'Comprehensive web development, SEO, and digital marketing services designed to grow your business and improve online presence.',
        url: 'https://www.zenvyratech.in/services'
      };
    } else if (pathname === '/seo-services') {
      return {
        title: 'Professional SEO Services | Rank Higher with Zenvyra Tech',
        description: 'Boost your search rankings with our proven SEO strategies and data-driven approach to organic growth.',
        url: 'https://www.zenvyratech.in/seo-services'
      };
    } else if (pathname === '/projects') {
      return {
        title: 'Our Portfolio | Web Development Projects | Zenvyra Tech',
        description: 'Explore our portfolio of successful web development projects and see how we\'ve helped businesses achieve their digital goals.',
        url: 'https://www.zenvyratech.in/projects'
      };
    } else if (pathname === '/blog') {
      return {
        title: 'Digital Insights & Web Development Tips | Zenvyra Tech Blog',
        description: 'Stay updated with the latest trends in web development, SEO, and digital marketing with our expert insights.',
        url: 'https://www.zenvyratech.in/blog'
      };
    } else if (pathname === '/contact') {
      return {
        title: 'Contact Zenvyra Tech | Web Development Agency',
        description: 'Get in touch with Zenvyra Tech for web development, SEO, and digital marketing services. We\'d love to hear from you!',
        url: 'https://www.zenvyratech.in/contact'
      };
    } else if (pathname === '/reviews') {
      return {
        title: 'Client Reviews & Testimonials | Zenvyra Tech',
        description: 'Read authentic client testimonials and reviews for Zenvyra Tech. See why businesses trust us for web development, SEO, and digital solutions.',
        url: 'https://www.zenvyratech.in/reviews'
      };
    } else {
      return {
        title: 'Zenvyra Tech - Web Development & SEO Agency | Digital Solutions',
        description: 'Zenvyra Tech is a premier web development and SEO agency specializing in creating high-performance digital solutions for businesses of all sizes.',
        url: `https://www.zenvyratech.in${pathname}`
      };
    }
  };
  
  const metadata = getPageMetadata();
  
  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="canonical" href={metadata.url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:image" content="https://www.zenvyratech.in/og-image.jpg" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content="https://www.zenvyratech.in/twitter-image.jpg" />
      
      {/* Schema.org structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zenvyra Tech",
          "url": "https://www.zenvyratech.in",
          "logo": "https://www.zenvyratech.in/logo.svg",
          "description": "A premier web development and SEO agency specializing in creating high-performance digital solutions for businesses of all sizes.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "",
            "addressRegion": "",
            "postalCode": "",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "en"
          },
          "sameAs": [
            "https://www.google.com/maps/place/Zenvyra+Tech",
            "https://www.linkedin.com/company/zenvyratech",
            "https://www.zenvyratech.in"
          ]
        })}
      </script>
    </Helmet>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever location changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // You can use 'auto' for instant scroll
    });
  }, [location]);

  return null;
}

function Main() {
  const location = useLocation();

  return (
    <main id="main">
      <ScrollToTop />
      <PageTransition location={location}>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/seo-services" element={<SEOServices />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </main> 
  );
}

export default App;
