import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* About Section */}
          <div>
            <img 
              src="https://in2it-service.com/ace/ace_white_logo.png" 
              alt="ACE Logo" 
              className="h-10 md:h-12 w-auto mb-3 md:mb-4"
            />
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
              ACE: Asia Pacific Hip & Knee Symposium 2026 brings together industry leaders, innovators, and experts to shape the future of healthcare and medical technology.
            </p>
            <div className="flex gap-4">
              <img 
                src="https://in2it-service.com/ace/DPS_Logo_WHITE.png" 
                alt="DePuy Synthes" 
                className="h-6 md:h-8 w-auto opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
               <a
              href="#schedule"
              onClick={(e) => handleSectionClick(e, 'schedule')}
              className="text-gray-400 hover:text-primary-400 transition-colors text-xs md:text-sm"
            >
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
              </li>
              <li>
                <a
              href="#agenda"
              onClick={(e) => handleSectionClick(e, 'agenda')}
              className="text-gray-400 hover:text-primary-400 transition-colors text-xs md:text-sm"
            >
              Speakers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-primary-400 transition-colors text-xs md:text-sm">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-white">Event Information</h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-400">
              <li className="flex items-start gap-2">
      <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span>15-17 May 2026</span>
    </li>
      <li className="flex items-start gap-2">
      <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span>W Hotel | Bangkok , Thailand</span>
    </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>RA-JJInstituteOrthop@ITS.JNJ.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; ACE: Asia Pacific Hip & Knee Symposium 2026. All rights reserved.
            </p>
          <div className="flex gap-6 text-sm text-gray-500">
  <a 
    href="https://jnjinstitute.com/en-eapac/privacy-policy" 
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary-400 transition-colors"
  >
    Privacy Policy
  </a>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
