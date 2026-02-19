import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-heading whitespace-nowrap">
              <span className="text-soft-white">ZENVYRA</span>
              <span className="ml-2 text-accent">TECH</span>
            </h3>
            <p className="text-muted-grey text-sm leading-relaxed mb-6">
              Engineering digital systems that scale.
              <br />
              Building clarity, performance, and long-term growth.
            </p>
            
            {/* Contact Details */}
            <div className="mb-6">
              <h4 className="text-soft-white font-semibold mb-3 text-sm tracking-wide">
                CONTACT US
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-grey">
                  <FaEnvelope className="mr-3 text-accent" />
                  <a href="mailto:contact@zenvyratech.in" className="hover:text-accent transition-colors duration-300">
                    contact@zenvyratech.in
                  </a>
                </div>
                <div className="flex items-center text-muted-grey">
                  <FaEnvelope className="mr-3 text-accent" />
                  <a href="mailto:support@zenvyratech.in" className="hover:text-accent transition-colors duration-300">
                    support@zenvyratech.in
                  </a>
                </div>
                <div className="flex items-center text-muted-grey">
                  <FaPhone className="mr-3 text-accent" />
                  <a href="tel:+918750443995" className="hover:text-accent transition-colors duration-300">
                    +91 8750443995
                  </a>
                </div>
                <div className="flex items-center text-muted-grey">
                  <FaMapMarkerAlt className="mr-3 text-accent" />
                  <span>Delhi, India</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-soft-white font-semibold mb-3 text-sm tracking-wide">
                FOLLOW US
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/zenvyratech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-grey hover:text-accent transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.facebook.com/zenvyratech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-grey hover:text-accent transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/zenvyratech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-grey hover:text-accent transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://wa.me/918750443995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-grey hover:text-accent transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <FaPhone size={20} />
                </a>
                <a
                  href="https://github.com/zenvyratech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-grey hover:text-accent transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-soft-white font-semibold mb-4 text-sm tracking-wide">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-grey hover:text-accent transition-colors duration-300 text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-grey hover:text-accent transition-colors duration-300 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-grey hover:text-accent transition-colors duration-300 text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-grey hover:text-accent transition-colors duration-300 text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Founder Info */}
          <div>
            <h4 className="text-soft-white font-semibold mb-4 text-sm tracking-wide">
              FOUNDER
            </h4>
            <div className="space-y-4">
              <p className="text-muted-grey text-sm">Abhishek</p>

              {/* Social links: show icon + label on sm and up, icons-only on xs */}
              <div>
                <h5 className="text-soft-white text-xs mb-2">SOCIAL</h5>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/yup.abhishek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-grey hover:text-accent transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={18} />
                    <span className="ml-2 hidden sm:inline text-xs">Instagram</span>
                  </a>

                  <a
                    href="https://wa.me/918750443995"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-grey hover:text-accent transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <FaPhone size={18} />
                    <span className="ml-2 hidden sm:inline text-xs">WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Profiles: icons with labels on sm+ */}
              <div>
                <h5 className="text-soft-white text-xs mb-2">PROFILES</h5>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/yup-abhishek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-grey hover:text-accent transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                    <span className="ml-2 hidden sm:inline text-xs">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/yupabhishek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-grey hover:text-accent transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                    <span className="ml-2 hidden sm:inline text-xs">GitHub</span>
                  </a>

                  <a
                    href="https://linktr.ee/yup.abhishek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-grey hover:text-accent transition-colors duration-300"
                    aria-label="Linktree"
                  >
                    <FaLink size={16} />
                    <span className="ml-2 hidden sm:inline text-xs">Linktree</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-soft-white font-semibold mb-4 text-sm tracking-wide">
              LEGAL
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-muted-grey hover:text-accent transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-muted-grey hover:text-accent transition-colors duration-300 text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-steel">
          <p className="text-center text-muted-grey text-sm">
            © {new Date().getFullYear()} Zenvyra Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
