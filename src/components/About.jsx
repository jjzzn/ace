import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-12 md:py-16 px-4 md:px-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: 'url(https://in2it-service.com/ace/about.png)' }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/70"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div>
            {/* Small heading */}
            <p className="text-xs md:text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3 md:mb-4">
              OUR MISSION
            </p>
            
            {/* Main heading with red and black text */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="text-red-600">WELCOME</span>
              <br />
              <span className="text-black">Lorem Ipsum Dir</span>
              <br />
              <span className="text-black">Amet Event</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed">
              <p className="text-sm md:text-base text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
              </p>
              
              <blockquote className="border-l-4 border-red-600 pl-4 md:pl-6 my-6 md:my-8">
                <p className="italic text-gray-800 text-base md:text-lg mb-2">
                 "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque"
                </p>
              </blockquote>
              
              <p className="text-sm md:text-base text-gray-600">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
            </div>
          </div>

          {/* Right Side - Empty or additional content */}
          <div className="lg:sticky lg:top-24">
            {/* Can add content here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;