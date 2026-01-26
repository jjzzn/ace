import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: "DePuy Synthes", logo: "https://placehold.co/400x400?text=logo" },
    { name: "Partner Company A", logo: "https://placehold.co/400x400?text=logo" },
    { name: "Partner Company B", logo: "https://placehold.co/400x400?text=logo" },
    { name: "Partner Company C", logo: "https://placehold.co/400x400?text=logo" },
    { name: "Partner Company D", logo: "https://placehold.co/400x400?text=logo" },
    { name: "Partner Company E", logo: "https://placehold.co/400x400?text=logo" },
    { name: "Medical Association A", logo: "https://placehold.co/400x400?text=logo" },
    { name: "Healthcare Institute B", logo: "https://placehold.co/400x400?text=logo" },
  ];

  // Duplicate sponsors for seamless loop
  const allSponsors = [...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="py-12 md:py-16 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight mb-2">
            Sponsors & Partners
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 md:mt-6 mb-4 md:mb-6"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            We are proud to collaborate with industry leaders and organizations
          </p>
        </div>

        {/* Scrolling Sponsors */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {allSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 md:mx-6"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;