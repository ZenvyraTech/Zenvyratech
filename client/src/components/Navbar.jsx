import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

// Resolve public assets reliably in both dev and prod builds
// Use the SVG text-logo as primary for crisp scaling
const logoSvg = new URL('/logo.svg', import.meta.url).href;

// ThemeToggle component — toggles `light` class on <html> and persists preference
function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
    } catch {}
    // If no stored preference, respect OS preference
    try {
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch {}
    return 'dark';
  });

  useEffect(() => {
    const doc = document.documentElement;
    if (theme === 'light') {
      doc.classList.add('light');
    } else {
      doc.classList.remove('light');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  return (
    <button
      onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      className="p-2 rounded-md bg-steel/60 hover:bg-steel/80 text-soft-white transition-colors duration-200 flex items-center justify-center"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
    </button>
  );
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'SEO', path: '/seo-services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group" aria-label="Zenvyra Tech - Home">
              <img
                src={logoSvg}
                alt="Zenvyra Tech"
                // responsive sizes: slightly larger on bigger screens for better presence
                className="h-10 sm:h-12 md:h-14 w-auto object-contain block"
              />
              {/* Single-line brand text (no wrapping) using heading font */}
                <span className="ml-3 whitespace-nowrap font-heading tracking-wider leading-tight flex items-baseline">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-soft-white">ZENVYRA</span>
                  <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-accent">TECH</span>
                </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-muted-grey hover:text-soft-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right: Theme toggle (desktop) + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-soft-white focus:outline-none"
              aria-label="Open menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-soft-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-soft-white transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-soft-white transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium tracking-wide transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-muted-grey hover:text-soft-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
