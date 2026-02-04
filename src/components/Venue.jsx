import React, { useState } from 'react';

const Venue = () => {
  const [openDropdowns, setOpenDropdowns] = useState({
    airport1: false,
    airport2: false,
    otherTransport: false
  });

  const toggleDropdown = (key) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  const venueInfo = {
    name: "W HOTEL BANGKOK",
    subtitle: "SATHORN ROAD",
    address: "106 North Sathorn Road, Silom, Bangrak, Bangkok, Thailand, 10500 \n",
    description: "Experience the perfect blend of modern luxury and vibrant Bangkok energy at <strong>W Bangkok</strong>, a striking 31-story hotel located in the heart of the city's Sathorn business district. <strong>W Bangkok</strong> seamlessly combines a sleek glass tower with the iconic <strong>House on Sathorn</strong>, a beautifully restored 19th-century heritage building. With stylish, contemporary spaces, world-class dining, and state-of-the-art event facilities, W Bangkok delivers an inspiring backdrop for innovation, collaboration, and connection. Its bold design, premium amenities, and unbeatable central location make it the ideal venue for a high-impact, unforgettable meeting experience.",
    transport: {
      airports: [
        {
          name: "Suvarnabhumi Airport",
          distance: "34.5 KM",
          phone: "+66 2-132 1888",
          website: "Visit Website",
          shuttle: {
            oneWay: "฿3200.00",
            roundTrip: "฿6400.00",
            reservation: "+66 2-3444000"
          },
          alternateTransport: {
            type: "Grab",
            fee: "450.00 THB (one way) on request",
            oneWay: "฿450.00",
            roundTrip: "฿0.00",
            note: "On Request"
          }
        },
        {
          name: "Don Mueang International Airport",
          distance: "28.0 KM",
          phone: "+66 2-535 1111",
          website: "Visit Website",
          shuttle: {
            oneWay: "฿3200.00",
            roundTrip: "฿6400.00",
            reservation: "+66 2-3444000"
          },
          alternateTransport: {
            type: "Grab",
            fee: "400.00 THB (one way) on request",
            oneWay: "฿400.00",
            roundTrip: "฿0.00",
            note: "On Request"
          }
        }
      ],
      otherTransportation: {
        onProperty: [
          "Private Car Service",
          "Limousine/Van Service"
        ],
        nearby: {
          busStation: ["Eastern Bus Terminal Bangkok Ekkamai"],
          subwayStation: [
            "BTS Sky Train - Chong Nonsi Station",
            "BTS Sky Train - Saint Louis Station"
          ],
          trainStation: ["Bangkok Train Station"]
        }
      }
    }
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
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/591835855.jpg?k=60f97e53f87fc2896103336d557d97a8a8c66169b2ab80093613617d365650ad&o="
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
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <h4 className="font-bold text-gray-900 uppercase text-sm tracking-wide">Map View</h4>
                </div>
                <div className="bg-gray-100 h-40 rounded relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.940079149188!2d100.52863769999999!3d13.722077599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298cd38309a59%3A0x83b0b40f0a307812!2sW%20Bangkok!5e0!3m2!1sen!2sth!4v1769661172115!5m2!1sen!2sth"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="W Bangkok Location"
                  />
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

                <span className="text-red-600 uppercase text-sm font-bold tracking-widest">
                  VENUE & ACCOMMODATION
                </span>
              </div>
              <div className="w-24 h-1 bg-primary-500 mr-auto mt-4 md:mt-6 mb-4 md:mb-6"></div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight">
                <span style={{ fontFamily: 'SupremeLL, sans-serif' }}>W</span> <span style={{ fontFamily: 'SupremeLL, sans-serif', fontSize: '40px' }}>HOTEL BANGKOK</span>
              </h2>
              <h3 className="text-2xl md:text-2xl text-gray-400 font-light tracking-wide">
                {venueInfo.subtitle}
              </h3>
            </div>

            {/* Description */}
            <p 
              className="text-gray-600 text-sm mb-12 leading-relaxed max-w-xl"
              dangerouslySetInnerHTML={{ __html: venueInfo.description }}
            />

            {/* Location & Transport Section */}
            <div className="space-y-8 mb-12">
              {/* Location */}
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm mb-3 tracking-widest">
                  Location
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {venueInfo.address}
                </p>
              </div>

              {/* Transport */}
              <div>
                <h4 className="font-bold text-gray-900 uppercase text-sm mb-4 tracking-widest">
                  Transport
                </h4>
                <div className="space-y-3">
                  {/* Airport 1 Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleDropdown('airport1')}
                      className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                        <span className="font-bold text-gray-900 text-sm">
                          {venueInfo.transport.airports[0].name}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                          openDropdowns.airport1 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdowns.airport1 ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                    >
                      <div className="text-xs text-gray-600 space-y-2 pl-8">
                        <p>Distance: <span className="font-medium">{venueInfo.transport.airports[0].distance}</span></p>
                        <p>Phone: <span className="font-medium">{venueInfo.transport.airports[0].phone}</span></p>

                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="font-semibold text-gray-700 mb-1">Airport Shuttle:</p>
                          <p>One-way: <span className="font-medium">{venueInfo.transport.airports[0].shuttle.oneWay}</span></p>
                          <p>Round Trip: <span className="font-medium">{venueInfo.transport.airports[0].shuttle.roundTrip}</span></p>
                          <p className="text-xs text-gray-500 mt-1">Reservation: {venueInfo.transport.airports[0].shuttle.reservation}</p>
                        </div>

                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <p className="font-semibold text-gray-700 mb-1">{venueInfo.transport.airports[0].alternateTransport.type}:</p>
                          <p>{venueInfo.transport.airports[0].alternateTransport.fee}</p>
                          <p className="text-xs text-gray-500 italic">{venueInfo.transport.airports[0].alternateTransport.note}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Airport 2 Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleDropdown('airport2')}
                      className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                        <span className="font-bold text-gray-900 text-sm">
                          {venueInfo.transport.airports[1].name}
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                          openDropdowns.airport2 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdowns.airport2 ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                    >
                      <div className="text-xs text-gray-600 space-y-2 pl-8">
                        <p>Distance: <span className="font-medium">{venueInfo.transport.airports[1].distance}</span></p>
                        <p>Phone: <span className="font-medium">{venueInfo.transport.airports[1].phone}</span></p>

                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="font-semibold text-gray-700 mb-1">Airport Shuttle:</p>
                          <p>One-way: <span className="font-medium">{venueInfo.transport.airports[1].shuttle.oneWay}</span></p>
                          <p>Round Trip: <span className="font-medium">{venueInfo.transport.airports[1].shuttle.roundTrip}</span></p>
                          <p className="text-xs text-gray-500 mt-1">Reservation: {venueInfo.transport.airports[1].shuttle.reservation}</p>
                        </div>

                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <p className="font-semibold text-gray-700 mb-1">{venueInfo.transport.airports[1].alternateTransport.type}:</p>
                          <p>{venueInfo.transport.airports[1].alternateTransport.fee}</p>
                          <p className="text-xs text-gray-500 italic">{venueInfo.transport.airports[1].alternateTransport.note}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Transportation Dropdown */}
                  <div className="border-b border-gray-200">
                    <button
                      onClick={() => toggleDropdown('otherTransport')}
                      className="w-full flex items-center justify-between py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                        </svg>
                        <span className="font-bold text-gray-900 text-sm">
                          Other Transportation
                        </span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                          openDropdowns.otherTransport ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdowns.otherTransport ? 'max-h-[500px] pb-4' : 'max-h-0'
                      }`}
                    >
                      <div className="pl-8 space-y-4">
                        {/* On-Property */}
                        <div>
                          <h5 className="font-semibold text-gray-800 text-sm mb-2">On-Property</h5>
                          <ul className="space-y-1">
                            {venueInfo.transport.otherTransportation.onProperty.map((service, index) => (
                              <li key={index} className="text-xs text-gray-600 flex items-start">
                                <span className="text-red-600 mr-2">•</span>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Nearby */}
                        <div>
                          <h5 className="font-semibold text-gray-800 text-sm mb-2">Nearby</h5>
                          
                          {/* Bus Station */}
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 mb-1">Bus Station</p>
                            <ul className="space-y-1">
                              {venueInfo.transport.otherTransportation.nearby.busStation.map((station, index) => (
                                <li key={index} className="text-xs text-gray-600 pl-3">
                                  {station}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Subway Station */}
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 mb-1">Subway Station</p>
                            <ul className="space-y-1">
                              {venueInfo.transport.otherTransportation.nearby.subwayStation.map((station, index) => (
                                <li key={index} className="text-xs text-gray-600 pl-3">
                                  {station}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Train Station */}
                          <div>
                            <p className="text-xs font-semibold text-gray-700 mb-1">Train Station</p>
                            <ul className="space-y-1">
                              {venueInfo.transport.otherTransportation.nearby.trainStation.map((station, index) => (
                                <li key={index} className="text-xs text-gray-600 pl-3">
                                  {station}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;