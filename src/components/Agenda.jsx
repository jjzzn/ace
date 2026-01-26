import React from 'react';

const Agenda = () => {
  const speakers = [
    {
      id: 1,
      name: 'Dr. Lorem Ipsum',
      title: 'Lorem Ipsum',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      image: 'https://in2it-service.com/ace/speaker1.png',
    },
    {
      id: 2,
      name: 'Dr. Lorem Ipsum',
      title: 'Lorem Ipsum',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      image: 'https://in2it-service.com/ace/speaker2.png',
    },
    {
      id: 3,
      name: 'Dr. Lorem Ipsum',
      title: 'Lorem Ipsum',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      image: 'https://in2it-service.com/ace/speaker3.png',
    },
    {
      id: 4,
      name: 'Dr. Lorem Ipsum',
      title: 'Lorem Ipsum',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      image: 'https://in2it-service.com/ace/speaker4.png',
    },
  ];

  return (
    <div id="agenda" className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
            Distinguished Speakers
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 md:mt-6 mb-4 md:mb-6"></div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="text-center group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 md:mb-8">
                <div className="absolute inset-0 rounded-full border border-gray-200 group-hover:border-primary-500/50 scale-110 transition-all duration-500"></div>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition duration-500 shadow-xl"
                />
              </div>

              {/* Speaker Info */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors mb-1">
                {speaker.name}
              </h3>
              <p className="text-xs text-primary-500 font-bold uppercase tracking-widest mb-3 md:mb-4">
                {speaker.title}
              </p>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-2 md:px-4 line-clamp-3">
                {speaker.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
