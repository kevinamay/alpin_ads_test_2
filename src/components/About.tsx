import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full lg:h-[900px] h-auto grid grid-cols-1 lg:grid-cols-2 border-b border-black text-[#242424] bg-white">
      
      {/* Kolom Kiri (Area Teks) */}
      <div className="flex flex-col justify-between p-6 lg:p-[64px] border-b lg:border-b-0 lg:border-r border-black">
        
        {/* Bagian Atas (Teks) */}
        <div className="mb-12 lg:mb-0">
          <h3 className="font-mono text-[13px] uppercase leading-[1.4] mb-8 lg:mb-[32px]">
            ABOUT ME
          </h3>
          <h2 className="font-sans text-[48px] lg:text-[80px] font-normal leading-[1.1]">
            Passion<br className="hidden lg:block" />for design.
          </h2>
        </div>

        {/* Bagian Bawah (Paragraf) */}
        <div>
          <p className="font-sans text-[16px] lg:text-[18px] leading-[1.8]">
            We are a passionate team of brand enthusiasts dedicated to crafting exceptional experiences that resonate with audiences worldwide. With a commitment to excellence and a keen eye for detail, we specialize in delivering tailored solutions that bring your brand's story to life.
          </p>
          <p className="mt-[24px] font-sans text-[18px] leading-[1.8]">
            Our collaborative approach ensures that every project is infused with authenticity, creativity, and strategic thinking, driving tangible results for our clients.
          </p>
        </div>

      </div>

      {/* Kolom Kanan (Area Gambar) */}
      <div className="relative w-full h-[400px] lg:h-full">
        <Image 
          src="/assets/Image (7).png" 
          alt="About Me" 
          fill 
          className="object-cover" 
        />
      </div>

    </section>
  );
}
