import Image from 'next/image';

const brands = [
  { name: "SUPER FOOD", src: "/logos/logo-2.png", w: 65, h: 65 },
  { name: "CREATIVE STUDIO", src: "/logos/logo-3.png", w: 75, h: 65 },
  { name: "IN MOTION", src: "/logos/logo-4.png", w: 74, h: 65 },
  { name: "IN MOTION", src: "/logos/logo-4.png", w: 74, h: 65 },
  { name: "Abstract", src: "/logos/logo-7.png", w: 79, h: 65 },
  { name: "INVISION", src: "/logos/logo-5.png", w: 70, h: 65 },
  { name: "VISION STUDIO", src: "/logos/logo-9.png", w: 123, h: 35 }
];

export default function Logos() {
  return (
    <section className="w-full h-auto lg:h-[161px] bg-white text-[#242424] border-b border-black flex flex-col lg:flex-row">
      {/* Area Kiri (Judul) */}
      <div className="w-full h-[64px] border-b border-black lg:w-[308px] lg:h-full lg:border-b-0 lg:border-r flex items-center justify-center flex-none">
        <h2 className="font-mono text-[13px] uppercase font-normal leading-[1.4] tracking-wider">
          BRANDS I'VE WORKED WITH
        </h2>
      </div>

      {/* Area Kanan (Kumpulan Logo) */}
      <div className="flex-1 h-full flex flex-wrap justify-center py-8 px-4 gap-8 lg:flex-nowrap lg:flex-row lg:items-center lg:justify-between lg:px-[64px] lg:gap-[10px] lg:py-0 overflow-hidden">
        
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col items-center justify-center flex-none grayscale hover:opacity-70 transition-opacity cursor-pointer">
            <div className="relative" style={{ width: brand.w, height: brand.h }}>
              <Image 
                src={brand.src} 
                alt={`${brand.name} logo`} 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
