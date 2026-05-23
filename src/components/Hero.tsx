import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full h-auto min-h-screen lg:min-h-0 lg:h-[902px] grid grid-cols-1 lg:grid-cols-2 border-b border-black">
      {/* Kolom Kiri: Area Gambar */}
      <div className="relative h-[50vh] lg:h-full border-b lg:border-b-0 lg:border-r border-black">
        <Image 
          src="/assets/Image Wrapper.jpg" 
          alt="Hero Image" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* Kolom Kanan: Area Teks */}
      <div className="relative h-full flex flex-col bg-[#F8F8F8] text-[#242424]">
        {/* Ikon Vector Kiri Atas */}
        <div className="mt-8 ml-8 lg:mt-16 lg:ml-16 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] relative flex-none">
          <Image 
            src="/assets/Vector (4).png" 
            alt="Logo Vector" 
            fill 
            className="object-contain"
          />
        </div>

        {/* Konten Teks Utama (Tengah) */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-0">
          <h1 className="font-sans text-[48px] lg:text-[96px] font-normal leading-[1.1] lg:max-w-[694px]">
            Creating Unique Brands.
          </h1>
          <p className="font-sans text-[16px] lg:text-[18px] leading-[1.8] lg:max-w-[500px] mt-6">
            From concept to execution, we craft timeless identities that resonate with your audience.
          </p>
        </div>

        {/* Bottom Bar ("SCROLL DOWN") */}
        <div className="mt-auto h-[51px] flex-none border-t border-black flex items-center justify-between px-8">
          <span className="font-mono text-[13px] uppercase">SCROLL DOWN</span>
          <span className="text-sm font-sans">↓</span>
        </div>
      </div>
    </section>
  );
}
