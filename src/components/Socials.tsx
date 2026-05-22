import Image from 'next/image';

const socials = [
  {
    name: "TWITTER",
    iconSrc: "/assets/Vector.png",
    linkText: "VISIT TWITTER",
    isDark: false
  },
  {
    name: "INSTAGRAM",
    iconSrc: "/assets/Vector (1).png",
    linkText: "VISIT INSTAGRAM",
    isDark: false
  },
  {
    name: "BEHANCE",
    iconSrc: "/assets/Vector (2).png",
    linkText: "VISIT BEHANCE",
    isDark: false
  },
  {
    name: "DRIBBBLE",
    iconSrc: "/assets/Vector (3).png",
    linkText: "VISIT DRIBBBLE",
    isDark: false
  }
];

export default function Socials() {
  return (
    <section className="w-full border-b border-black bg-white">
      {/* Area Marquee Heading (Atas) */}
      <div className="w-full h-[51px] border-b border-black overflow-hidden flex items-center bg-[#EBFB48] relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Dua blok identik agar transisi infinite seamless */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[...Array(10)].map((_, j) => (
                <div key={j} className="flex items-center">
                  <span className="font-mono text-[13px] uppercase tracking-widest text-[#242424]">
                    FIND ME ON SOCIAL MEDIA +++&nbsp;
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Area Grid Links (Bawah) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[450px]">
        {socials.map((social, index) => {
          return (
            <a 
              key={index}
              href="#"
              className="group relative flex flex-col h-[450px] lg:h-full border-b border-black lg:border-b-0 lg:border-r lg:last:border-r-0 last:border-b-0 bg-white text-[#242424] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
            >
              {/* Bagian Atas (Ikon) */}
              <div className="p-[64px]">
                <Image 
                  src={social.iconSrc} 
                  alt={`${social.name} icon`} 
                  width={24} 
                  height={24} 
                  className="w-6 h-6 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" 
                />
              </div>
              
              {/* Bagian Tengah (Nama) */}
              <div className="flex-1 flex items-end px-[64px] pb-[64px]">
                <span className="text-[32px] font-sans uppercase">
                  {social.name}
                </span>
              </div>
              
              {/* Bagian Bawah (Link Bar) */}
              <div 
                className={`absolute bottom-0 w-full h-[51px] border-t flex justify-between items-center px-[64px] transition-colors duration-300
                  ${social.isDark 
                    ? 'bg-[#1a1a1a] text-white border-[#1a1a1a] group-hover:border-white/20' 
                    : 'bg-white text-[#242424] border-black group-hover:bg-[#1a1a1a] group-hover:text-white group-hover:border-white/20'}
                `}
              >
                <span className="font-mono text-[13px] uppercase">{social.linkText}</span>
                <span className="font-mono text-[16px]">↗</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
