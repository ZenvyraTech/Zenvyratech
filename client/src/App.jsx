import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import SEOServices from './pages/SEOServices';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

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
    <main>
      <ScrollToTop />
      <PageTransition location={location}>
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
      </PageTransition>
    </main>
  );
}

export default App;
