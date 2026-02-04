import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      // 1. ลบ bg-cover, bg-center, bg-no-repeat และ style backgroundImage
      // 2. เพิ่ม relative และ overflow-hidden เพื่อจัดการกับรูปภาพและ overlay
      className="relative py-12 md:py-16 px-4 md:px-6 overflow-hidden"
    >
      {/* 3. เพิ่ม Image Component สำหรับพื้นหลัง */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://eeotixwvwphvcgysajys.supabase.co/storage/v1/object/public/aaphks2026/about.png" 
          alt="" 
          // object-cover: รักษาสัดส่วนของรูปภาพ ไม่ให้ถูกบีบ และครอบคลุมพื้นที่ทั้งหมด
          className="w-full h-full object-cover object-center" 
        />
      </div>

      {/* Overlay for better text readability */}
      {/* 4. เพิ่ม z-index (z-10) ให้อยู่เหนือรูปภาพ */}
      <div className="absolute inset-0 bg-white/80 z-10"></div>
      
      {/* Content */}
      {/* 5. เพิ่ม z-index (z-20) ให้อยู่เหนือ overlay และรูปภาพ */}
      <div className="max-w-5xl mx-auto relative z-20">
        <div className="grid grid-cols-1 gap-8 md:gap-12 items-start">
          {/* Content Container */}
          <div className="max-w-4xl">

            {/* Main heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="text-red-600">Welcome to AAPHKS 2026</span>
              <br className="hidden md:block" />
              <span className="text-black"> — The ACE Asia Pacific Hip & Knee Symposium</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
              
              {/* Intro Section */}
              <div className="space-y-4">
                <p>
                  Get ready for an unforgettable experience at <strong className="text-black font-bold">AAPHKS 2026</strong>, the <strong className="text-black font-bold">ACE Asia Pacific Hip & Knee Symposium</strong> hosted by <strong className="text-black font-bold">DePuy Synthes</strong> in collaboration with <strong className="text-black font-bold">Johnson & Johnson MedTech | Surgery</strong>.
                </p>
                <p>
                  This year we’re bringing the region’s leading joint‑replacement minds together in <strong className="text-black font-bold">Bangkok, Thailand</strong>—a vibrant, world‑class city that sets the perfect stage for innovation, education, and collaboration.
                </p>
              </div>

              {/* Where Expertise Meets Innovation */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">Where Expertise Meets Innovation</h3>
                <p>
                  AAPHKS 2026 unites an outstanding faculty of international experts and top surgeons from across Asia Pacific. Across an inspiring and highly interactive program, you’ll delve into advances in modern hip and knee reconstruction—examining emerging trends, debating current challenges, and exploring practical solutions to complex clinical cases.
                </p>
              </div>

              {/* What to Expect */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">What to Expect</h3>
                <p className="mb-4">
                  Our dynamic agenda covers a wide spectrum of cutting‑edge topics, including:
                </p>
                <ul className="list-disc pl-5 mb-4 marker:text-red-600">
                  <li>Breakthrough <strong className="text-black font-bold">technology‑driven surgical innovations</strong></li>
                  <li>Best‑practice <strong className="text-black font-bold">patient optimization</strong> and perioperative care</li>
                  <li><strong className="text-black font-bold">Next‑generation wound closure</strong> approaches</li>
                  <li>Surgical insights that shape <strong className="text-black font-bold">long‑term outcomes</strong> and implant performance</li>
                </ul>
                <p>
                  Every session is designed to spark meaningful discussion, accelerate learning, and showcase the future trajectory of joint replacement.
                </p>
              </div>

              {/* Closing */}
              <div className="pt-4 border-t border-gray-300">
                <p className="mb-4">
                  Thank you for being part of AAPHKS 2026. Your expertise and perspective make this meeting truly exceptional. We look forward to an energizing, thought‑provoking, and impactful event—made richer by your participation.
                </p>
                <p className="text-xl font-bold text-red-600">
                  See you in Bangkok!
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;