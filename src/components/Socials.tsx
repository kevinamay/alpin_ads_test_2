import { PenTool } from 'lucide-react';

const TwitterIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 5 11 5 11s1.5.5 3 0c-2-2-3-5-3-5s1.5 1 3 1c-2.4-1.6-3-4.8-1.5-7 2.5 3 6.5 5 11 5 .5-4.5 5-7 7-4 1.5-.5 3-1.5 3-1.5z"/>
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const DribbbleIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M2.54 15.38c3.72-4.35 8.94-5.66 16.88-5.85M19.5 1.9c-3.5-.93-6.64-.32-8.94 2.48-1.54 1.9-2.16 4.34-2.28 6.42" />
  </svg>
);

const socials = [
  {
    name: "TWITTER",
    icon: TwitterIcon,
    linkText: "VISIT TWITTER",
    isDark: false
  },
  {
    name: "INSTAGRAM",
    icon: InstagramIcon,
    linkText: "VISIT INSTAGRAM",
    isDark: true
  },
  {
    name: "BEHANCE",
    icon: PenTool,
    linkText: "VISIT BEHANCE",
    isDark: false
  },
  {
    name: "DRIBBBLE",
    icon: DribbbleIcon,
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
          const Icon = social.icon;
          return (
            <a 
              key={index}
              href="#"
              className="group relative flex flex-col h-[450px] lg:h-full border-b border-black lg:border-b-0 lg:border-r lg:last:border-r-0 last:border-b-0 bg-white text-[#242424] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
            >
              {/* Bagian Atas (Ikon) */}
              <div className="p-[64px]">
                <Icon className="w-6 h-6 stroke-[1.5]" />
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
