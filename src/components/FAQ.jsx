import React from 'react';

const FAQ = () => {

  const contactInfo = {
    email: "RA-JJInstituteOrthop@ITS.JNJ.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM (GMT+7)"
  };


  return (
    <section id="faq" className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-red-600 uppercase text-sm font-bold tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            CONTACT US
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 md:mt-6 mb-4 md:mb-6"></div>
        </div>

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
            {/* Contact Info Card */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-red-600 text-sm transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div> */}

                {/* <div className="flex items-start">
                  <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">Address</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Office Hours</p>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FAQ;