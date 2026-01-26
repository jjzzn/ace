import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div 
      className="relative text-white py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-12 min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://in2it-service.com/ace/banner3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="md:col-span-10 lg:col-span-9">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] animate-slide-in-left opacity-0">
              Ace Solution<br />
              in Motion 2026
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 font-light tracking-wide animate-fade-in opacity-0 delay-200">
              15-17 May 2026 | Bangkok W Hotel
            </p>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-primary-500 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-base md:text-lg shadow-lg animate-scale-in opacity-0 delay-400"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Register today
            </Link>
          </div>
          
          {/* Vertical Text */}
          <div className="hidden md:flex md:col-span-2 lg:col-span-3 justify-end animate-slide-in-right opacity-0 delay-300">
            <div 
              className="text-xl lg:text-2xl xl:text-3xl font-light tracking-[0.4em] opacity-90"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              SAVE THE DATE
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="flex justify-between items-center mt-16 md:mt-24 lg:mt-32 pt-8 border-t border-white/20 animate-fade-in opacity-0 delay-500">
          <div className="transition-transform duration-300 hover:scale-110">
            <img 
              src="https://in2it-service.com/ace/ace_white_logo.png" 
              alt="ACE Logo" 
              className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto drop-shadow-lg"
            />
          </div>
          <div className="transition-transform duration-300 hover:scale-110">
            <img 
              src="https://in2it-service.com/ace/DPS_Logo_WHITE.png" 
              alt="DePuy Synthes Logo" 
              className="h-8 md:h-10 lg:h-12 xl:h-14 w-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
