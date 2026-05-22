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
            I am a passionate graphic designer with a keen eye for detail and a love for creating visually stunning and meaningful designs. With a strong foundation in design principles and a deep understanding of user experience, I strive to deliver impactful solutions that resonate with audiences.
          </p>
          <p className="mt-[24px] font-sans text-[18px] leading-[1.8] max-w-[500px]">
            When I'm not designing, you can find me exploring the outdoors, seeking inspiration from nature, or immersing myself in the latest design trends and technologies.
          </p>
        </div>

        {/* Bagian Bawah (Button) */}
        <div className="mt-16 lg:mt-0">
          <button className="w-[158px] h-[51px] bg-[#EBFB48] border border-black flex items-center justify-center font-mono text-[13px] uppercase text-[#242424] hover:bg-[#242424] hover:text-white transition-colors">
            GET IN TOUCH
          </button>
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
