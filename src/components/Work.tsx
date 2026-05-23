import Image from 'next/image';

export default function Work() {
  return (
    <section className="w-full flex flex-col bg-white">
      {/* Area Marquee Heading (Bagian Atas) */}
      <div className="w-full h-[120px] lg:h-[181px] border-b border-black overflow-hidden flex items-center bg-white relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Dua blok identik agar transisi infinite seamless */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="flex items-center gap-[48px] pr-[48px]">
                  <span className="font-sans text-[48px] lg:text-[96px] uppercase leading-none text-[#242424]">
                    SELECTED WORK
                  </span>
                  <span 
                    className="font-sans text-[48px] lg:text-[96px] uppercase leading-none text-transparent" 
                    style={{ WebkitTextStroke: '1px #242424' }}
                  >
                    SELECTED WORK
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Area Grid / Bento Box (Bagian Bawah) */}
      <div className="w-full h-auto lg:h-[902px] border-b border-black grid grid-cols-1 lg:grid-cols-2">
        
        {/* Kolom Kiri (Grid Kiri) */}
        <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-black">
          
          {/* Baris Atas (Poster) */}
          <div className="w-full h-[300px] lg:h-[450px] relative">
            <Image 
              src="/assets/Image (5).png" 
              fill 
              className="object-cover" 
              alt="Poster" 
            />
            {/* Label Absolut "VIEW" */}
            <div className="absolute bottom-10 right-10 bg-[#EBFB48] w-[52px] h-[34px] border border-black flex items-center justify-center font-mono text-[13px] uppercase text-[#242424]">
              VIEW
            </div>
          </div>

          {/* Baris Bawah (Koran & Package) */}
          <div className="w-full h-auto lg:h-[450px] grid grid-cols-1 lg:grid-cols-2 border-t border-black">
            
            {/* Kotak Kiri (Koran) */}
            <div className="relative h-[300px] lg:h-full border-b lg:border-b-0 lg:border-r border-black">
              <Image 
                src="/assets/Image (4).png" 
                fill 
                className="object-cover" 
                alt="Newspaper" 
              />
            </div>
            
            {/* Kotak Kanan (Package) */}
            <div className="flex flex-col h-full w-full">
              <div className="h-[300px] lg:h-[400px] relative w-full">
                <Image 
                  src="/assets/Image (2).png" 
                  fill 
                  className="object-cover" 
                  alt="Package" 
                />
              </div>
              <div className="h-[50px] flex justify-between items-center px-4 border-t border-black bg-white">
                <span className="font-mono text-[13px] uppercase text-[#242424]">
                  DESIGN STUDIO
                </span>
                <span className="font-mono text-[16px] text-[#242424]">
                  ↗
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Kolom Kanan (Grid Kanan) */}
        <div className="relative h-[450px] lg:h-full">
          <Image 
            src="/assets/Image Wrapper.jpg" 
            fill 
            className="object-cover" 
            alt="Mockups" 
          />
        </div>

      </div>
    </section>
  );
}
