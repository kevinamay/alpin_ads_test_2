"use client";

import Image from 'next/image';
import { Star } from 'lucide-react';
import { useState } from 'react';

const col2Data = [
  {
    company: "SUPER FOOD",
    logo: "/assets/logos/logo-2.png",
    title: "Exceptional Branding Partner",
    content: "Working with Skold was a game-changer for our brand. Their innovative designs and strategic insights propelled us to success. From the initial brainstorming session to the final delivery, they exceeded our expectations at every step. Their attention to detail and commitment to understanding our brand's identity were truly remarkable.\n\nWith their help, we were able to elevate our brand and connect with our audience in meaningful ways.",
    portrait: "/assets/Image (8).png",
    name: "EMILY JOHNSON",
    role: "Super food"
  },
  {
    company: "INVISION SQUARE",
    logo: "/assets/logos/logo-5.png",
    title: "Creative Genius: Beyond Expectations",
    content: "We were blown away by the creativity and dedication of Skold. They exceeded our expectations, delivering results that truly set us apart. From the conceptualization stage to the final execution, Skold demonstrated an exceptional level of skill and professionalism.",
    portrait: "/assets/Image (9).png",
    name: "SOPHIA RODRIGUEZ",
    role: "Invision Square"
  },
  {
    company: "VISION STUDIO",
    logo: "/assets/logos/logo-9.png",
    title: "Transformative Experience: Unparalleled Quality",
    content: "Their attention to detail and commitment to quality were unparalleled. From the initial consultation to the final delivery, Skold demonstrated a deep understanding of our brand's needs and objectives.",
    portrait: "/assets/testimonial-01 1.png",
    name: "ALEXANDER SMITH",
    role: "Vision Studio"
  }
];

const col3Data = [
  {
    company: "IN MOTION",
    logo: "/assets/logos/logo-4.png",
    title: "Trusted Partner: Exceptional Service",
    content: "Choosing Skold as our branding partner was the best decision we made. Their exceptional service and expertise made all the difference. Skold took the time to listen to our needs and preferences, and they delivered results that exceeded our expectations.\n\nFrom the initial concept development to the final delivery, Skold demonstrated professionalism and attention to detail every step of the way. They were responsive to our feedback and made sure that we were completely satisfied with the end result.\n\nWe couldn't be happier with our branding, and we have Skold to thank for it.",
    portrait: "/assets/Image (10).png",
    name: "JAMES THOMPSON",
    role: "In motion"
  },
  {
    company: "CREATIVE STUDIO",
    logo: "/assets/logos/logo-6.png",
    title: "Lorem dolor amet ipsum.",
    content: "Thanks to Skold, our brand is thriving. Their innovative solutions and creative approach have been instrumental in driving our success. Skold took the time to understand our brand's unique needs and challenges, and they developed a customized branding strategy that exceeded our expectations. From the initial brainstorming sessions to the final delivery, Skold demonstrated creativity, professionalism, and a commitment to excellence.\n\nThey provided valuable insights and guidance throughout the process, and the results speak for themselves. We would highly recommend Skold to anyone looking for innovative branding solutions.",
    portrait: "/assets/Image (11).png",
    name: "BENJAMIN WILSON",
    role: "Creative studio"
  }
];

const TestimonialCard = ({ data, isLast }: { data: any, isLast?: boolean }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex flex-col border-black ${!isLast ? 'border-b' : ''}`}>
      {/* Top Bar */}
      <div 
        className={`flex justify-between items-center px-[32px] py-[16px] cursor-pointer hover:bg-[#f4f4f4] transition-colors ${isOpen ? 'border-b border-black' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-mono text-[11px] uppercase text-[#242424]">
          {data.company} {isOpen ? '↑' : '↓'}
        </span>
        <div className="flex gap-[2px]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill="#111111" color="#111111" />
          ))}
        </div>
      </div>
      
      {/* Content (Accordion) */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-[32px] flex flex-col">
            <div className="w-[70px] h-[70px] relative mb-8">
              <Image src={data.logo} alt={data.company} fill className="object-contain" />
            </div>
            
            <h4 className="font-sans text-[22px] leading-[1.3] text-[#242424] mb-6">
              {data.title}
            </h4>
            
            <div className="font-sans text-[16px] leading-[1.8] text-[#444444] mb-12 whitespace-pre-line">
              {data.content}
            </div>
            
            {/* Profile */}
            <div className="flex items-center gap-4 mt-auto">
              <Image src={data.portrait} alt={data.name} width={48} height={48} className="rounded-full object-cover w-[48px] h-[48px]" />
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase text-[#242424]">{data.name}</span>
                <span className="font-sans text-[12px] text-[#777777]">{data.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="w-full border-b border-black bg-white">
      {/* Marquee Heading */}
      <div className="w-full h-[120px] lg:h-[181px] border-b border-black overflow-hidden flex items-center bg-white relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[...Array(6)].map((_, j) => {
                const isOutline = j % 2 !== 0;
                return (
                  <div key={j} className="flex items-center">
                    <span 
                      className={`font-sans text-[64px] lg:text-[96px] uppercase leading-none ${
                        isOutline ? 'text-transparent' : 'text-[#242424]'
                      }`}
                      style={{
                        WebkitTextStroke: isOutline ? '1px #242424' : 'none',
                        marginRight: '48px'
                      }}
                    >
                      Feedback
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Main Layout: 50% Left / 50% Right */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Half: Intro */}
        <div className="flex flex-col justify-between p-[48px] lg:p-[64px] border-b lg:border-b-0 lg:border-r border-black">
          <div>
            <h3 className="font-mono text-[13px] uppercase tracking-widest mb-[32px] text-[#242424]">
              TESTIMONIALS
            </h3>
            <h2 className="font-sans text-5xl lg:text-[80px] leading-[1.1] text-[#242424] mb-[32px]">
              What my<br/>clients say
            </h2>
            <p className="font-sans text-[18px] leading-[1.8] text-[#444444] max-w-[400px]">
              Discover what our clients have to say about their transformative experiences partnering with us. Read their testimonials below.
            </p>
          </div>
          <div className="mt-24 lg:mt-0">
            <Image src="/assets/Vector (6).svg" alt="Geometric Logo" width={80} height={104.41} className="object-contain" />
          </div>
        </div>

        {/* Right Half: Testimonials Grid (split into 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Sub-Column 1: Testimonials List 1 */}
          <div className="flex flex-col border-b md:border-b-0 md:border-r border-black">
            {col2Data.map((item, idx) => (
              <TestimonialCard key={idx} data={item} isLast={idx === col2Data.length - 1} />
            ))}
          </div>

          {/* Sub-Column 2: Testimonials List 2 */}
          <div className="flex flex-col">
            {col3Data.map((item, idx) => (
              <TestimonialCard key={idx} data={item} isLast={idx === col3Data.length - 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
