import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    Name: "EMILY JOHNSON",
    Role: "Super food",
    Portrait: "/assets/testimonial-01-1.png",
    BrandLogo: "/assets/logos/logo-1.png",
    Title: "Exceptional Branding Partner",
    Content: "Working with Skold was a game-changer for our brand. Their innovative designs and strategic insights propelled us to success. From the initial brainstorming session to the final delivery, they exceeded our expectations at every step."
  },
  {
    Name: "MICHAEL CHEN",
    Role: "Creative Studio",
    Portrait: "/assets/Image (8).png",
    BrandLogo: "/assets/logos/logo-2.png",
    Title: "Creative Genius",
    Content: "The team's ability to translate complex ideas into clean, impactful visuals is unmatched. They delivered a brand identity that truly resonates with our audience."
  },
  {
    Name: "SOPHIA RODRIGUEZ",
    Role: "In Motion",
    Portrait: "/assets/Image (9).png",
    BrandLogo: "/assets/logos/logo-3.png",
    Title: "Strategic Excellence",
    Content: "Beyond just aesthetics, they provided a strategic framework that has guided our marketing efforts for the past year. Highly recommended."
  },
  {
    Name: "DAVID WILSON",
    Role: "Abstract",
    Portrait: "/assets/Image (10).png",
    BrandLogo: "/assets/logos/logo-7.png",
    Title: "Professional & Reliable",
    Content: "Everything was delivered on time and exceeded our quality standards. A seamless partnership from start to finish."
  }
];

export default function Testimonials() {
  return (
    <section className="w-full border-b border-black bg-white">
      {/* Area Marquee Heading (Atas) */}
      <div className="w-full h-[181px] border-b border-black overflow-hidden flex items-center bg-white relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[...Array(4)].map((_, j) => {
                const isOutline = j % 2 !== 0;
                return (
                  <div key={j} className="flex items-center">
                    <span 
                      className={`font-sans text-[96px] uppercase leading-none ${
                        isOutline ? 'text-transparent' : 'text-[#242424]'
                      }`}
                      style={{
                        WebkitTextStroke: isOutline ? '1px #242424' : 'none',
                        marginRight: '48px'
                      }}
                    >
                      TESTIMONIALS
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Grid Testimonials (Bawah) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {testimonials.map((testi, index) => {
          return (
            <div 
              key={index} 
              className={`p-[48px] lg:p-[64px] border-black flex flex-col justify-between border-b ${
                index % 2 === 0 ? 'lg:border-r' : ''
              } ${
                index >= testimonials.length - 2 ? 'lg:border-b-0' : ''
              } ${
                index === testimonials.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <div>
                {/* Baris Atas */}
                <div className="flex justify-between items-center mb-8">
                  <div className="w-[65px] h-[65px] relative">
                    <Image 
                      src={testi.BrandLogo} 
                      alt={`${testi.Role} logo`} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} size={16} fill="#111111" color="#111111" />
                    ))}
                  </div>
                </div>

                {/* Tengah (Konten) */}
                <h4 className="font-sans text-[24px] font-normal text-[#242424] mb-4">
                  {testi.Title}
                </h4>
                <p className="font-sans text-[16px] leading-[1.8] text-[#242424]">
                  {testi.Content}
                </p>
              </div>

              {/* Bawah (Profil Klien) */}
              <div className="mt-12 flex items-center gap-4">
                <Image 
                  src={testi.Portrait} 
                  alt={testi.Name} 
                  width={60} 
                  height={60} 
                  className="rounded-full object-cover w-[60px] h-[60px]"
                />
                <div className="flex flex-col">
                  <span className="font-mono text-[13px] uppercase text-[#242424]">
                    {testi.Name}
                  </span>
                  <span className="font-sans text-[14px] text-[#777777]">
                    {testi.Role}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
