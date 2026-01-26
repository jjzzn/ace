import React from 'react';

const Venue = () => {
  const venueInfo = {
    name: "W BANGKOK",
    subtitle: "SATHORN ROAD",
    address: "106 Lorem Ipsum Dir Amet 10500",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
    transport: "Lorem Ipsum Dir Amet"
  };

  return (
    <section id="venue" className="py-0 bg-gray-50">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-2xl relative">
          {/* Left Side - Image & Map */}
          <div className="relative h-[600px] lg:h-auto">
            {/* Building Image with overlay gradient */}
            <div className="h-full bg-gray-900 relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="W Bangkok"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
              
              {/* Map Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-white p-6 shadow-xl">
                <div className="flex items-center mb-4">
                  <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide">Map View</h4>
                </div>
                <div className="bg-gray-100 h-40 rounded relative overflow-hidden">
                  <img
                    src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                    alt="Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-4 py-2 rounded shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <p className="text-sm font-bold text-gray-900">EXPAND MAP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Red vertical line */}
            <div className="hidden lg:block absolute top-0 right-0 w-1 h-full bg-red-600"></div>
          </div>

          {/* Right Side - Content */}
          <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center bg-gray-50">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-red-600 uppercase text-sm font-bold tracking-widest">
                  VENUE & ACCOMMODATION
                </span>
              </div>
              <div className="w-24 h-1 bg-primary-500 mr-auto mt-4 md:mt-6 mb-4 md:mb-6"></div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
                {venueInfo.name}
              </h2>
              <h3 className="text-4xl md:text-5xl text-gray-400 font-light tracking-wide">
                {venueInfo.subtitle}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base mb-12 leading-relaxed max-w-xl">
              {venueInfo.description}
            </p>

            {/* Location & Transport Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm mb-3 tracking-widest">
                  Location
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {venueInfo.address}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm mb-3 tracking-widest">
                  Transport
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {venueInfo.transport}
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;