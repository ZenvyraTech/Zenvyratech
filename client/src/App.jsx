import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
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


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal text-soft-white relative">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
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
          </Routes>
        </Suspense>
      </PageTransition>
    </main> 
  );
}

export default App;
