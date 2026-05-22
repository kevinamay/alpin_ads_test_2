import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full lg:h-[902px] h-auto grid grid-cols-1 lg:grid-cols-2 border-b border-black text-[#242424] bg-white">
      
      {/* Kolom Kiri (Area Teks) */}
      <div className="flex flex-col justify-between p-[64px] border-b lg:border-b-0 lg:border-r border-black">
        
        {/* Bagian Atas (Teks) */}
        <div>
          <h3 className="font-mono text-[13px] uppercase mb-[32px]">
            ABOUT ME
          </h3>
          <h2 className="font-sans text-5xl lg:text-[96px] font-normal leading-[1.1] max-w-[500px]">
            Passion<br className="hidden lg:block" />for design.
          </h2>
          <p className="mt-[32px] font-sans text-[18px] leading-[1.8] max-w-[500px]">
            We are a passionate team of brand enthusiasts dedicated to crafting exceptional experiences that resonate with audiences worldwide. With a commitment to excellence and a keen eye for detail, we specialize in delivering tailored solutions that bring your brand's story to life.
          </p>
          <p className="mt-[24px] font-sans text-[18px] leading-[1.8] max-w-[500px]">
            Our collaborative approach ensures that every project is infused with authenticity, creativity, and strategic thinking, driving tangible results for our clients.
          </p>
        </div>

      </div>

      {/* Kolom Kanan (Area Gambar) */}
      <div className="relative w-full h-[500px] lg:h-full">
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
