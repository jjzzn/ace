import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-white/90 backdrop-blur-sm shadow-md py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <img 
              src="https://in2it-service.com/ace/ACE_Logo_FA-03.png" 
              alt="ACE Logo" 
              className={`transition-all duration-300 ${
                scrolled ? 'h-10' : 'h-12'
              } w-auto group-hover:scale-105`}
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#about"
              className="relative px-4 py-2 text-gray-700 font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:text-primary-500 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#schedule"
              className="relative px-4 py-2 text-gray-700 font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:text-primary-500 group"
            >
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#agenda"
              className="relative px-4 py-2 text-gray-700 font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:text-primary-500 group"
            >
              Speakers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              to="/courses"
              className={`relative px-4 py-2 font-medium text-sm uppercase tracking-wide transition-all duration-300 group ${
                isActive('/courses') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              Courses
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                isActive('/courses') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            {/* Register Button */}
            <Link
              to="/register"
              className={`ml-4 relative overflow-hidden px-8 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                isActive('/register')
                  ? 'bg-primary-700 text-white shadow-lg scale-105'
                  : 'bg-primary-500 text-white hover:bg-primary-700 hover:shadow-xl hover:scale-105'
              }`}
            >
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary-500 font-medium text-sm uppercase tracking-wide py-2 transition-colors"
              >
                About
              </a>
              <a
                href="#schedule"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary-500 font-medium text-sm uppercase tracking-wide py-2 transition-colors"
              >
                Schedule
              </a>
              <a
                href="#agenda"
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-primary-500 font-medium text-sm uppercase tracking-wide py-2 transition-colors"
              >
                Speakers
              </a>
              <Link
                to="/courses"
                onClick={closeMobileMenu}
                className={`font-medium text-sm uppercase tracking-wide py-2 transition-colors ${
                  isActive('/courses') ? 'text-primary-500' : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                Courses
              </Link>
              <Link
                to="/register"
                onClick={closeMobileMenu}
                className="bg-primary-500 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-primary-700 transition-all duration-300 text-center"
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
