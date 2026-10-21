import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="liquid-nav-wrapper" ref={navRef}>
      <motion.nav
        className={`liquid-nav ${menuOpen ? 'menu-open' : ''}`}
        aria-label="Main Navigation"
        initial={false}
      >
        <div className="liquid-nav-inner">
          {/* Top Row: Brand & Mobile Menu Toggle */}
          <div className="liquid-nav-top-row">
            <Link
              to="/"
              className="liquid-nav-brand"
              onClick={() => setMenuOpen(false)}
            >
              <div className="liquid-nav-gem">
                <div className="liquid-nav-gem-body">
                  <div className="liquid-nav-gem-facet" />
                </div>
              </div>
              <span className="liquid-nav-name">Lakhan</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className={`liquid-nav-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
            >
              <span className="liquid-nav-toggle-bar bar-top" />
              <span className="liquid-nav-toggle-bar bar-bottom" />
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="liquid-nav-links">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`liquid-nav-link ${active ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Glass CTA */}
          <div className="liquid-nav-cta-container">
            <Link
              to="/contact"
              className={`liquid-glass-cta ${isActive('/contact') ? 'active' : ''}`}
            >
              <span className="liquid-glass-cta-shine" />
              <span className="liquid-glass-cta-label">Contact</span>
            </Link>
          </div>

          {/* Mobile Collapsible Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="liquid-nav-mobile-dropdown"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="liquid-nav-mobile-divider" />
                <div className="liquid-nav-mobile-links">
                  {navLinks.map((link) => {
                    const active = isActive(link.path);
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`liquid-nav-mobile-link ${active ? 'active' : ''}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                  <Link
                    to="/contact"
                    className={`liquid-glass-cta mobile-cta ${isActive('/contact') ? 'active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="liquid-glass-cta-shine" />
                    <span className="liquid-glass-cta-label">Contact</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;