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
        
        {/* Logo 1: SUPER FOOD */}
        <div className="w-[65px] h-[65px] flex flex-col items-center justify-center flex-none grayscale hover:opacity-70 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#191919" strokeWidth="1.5">
            <circle cx="20" cy="20" r="18" />
            <path d="M15 15l10 10M25 15L15 25" />
          </svg>
          <div className="text-[10px] font-bold uppercase leading-tight text-center mt-1 text-[#191919]">SUPER<br/>FOOD</div>
        </div>

        {/* Logo 2: CREATIVE STUDIO */}
        <div className="w-[75px] h-[65px] flex flex-col items-center justify-center flex-none grayscale hover:opacity-70 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#191919" strokeWidth="1">
            <circle cx="20" cy="20" r="16" />
            <circle cx="20" cy="20" r="12" />
            <circle cx="20" cy="20" r="8" />
            <circle cx="20" cy="20" r="4" />
          </svg>
          <div className="text-[10px] font-bold uppercase leading-tight text-center mt-1 text-[#191919]">CREATIVE<br/>STUDIO</div>
        </div>

        {/* Logo 3: IN MOTION */}
        <div className="w-[74px] h-[65px] flex flex-col items-center justify-center flex-none grayscale hover:opacity-70 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#191919" strokeWidth="1">
            <rect x="8" y="8" width="16" height="16" />
            <rect x="12" y="12" width="16" height="16" />
            <rect x="16" y="16" width="16" height="16" />
            <rect x="14" y="14" width="4" height="4" fill="#191919" />
          </svg>
          <div className="text-[10px] font-bold uppercase leading-tight text-center mt-1 text-[#191919]">IN MOTION</div>
        </div>

        {/* Logo 4: IN MOTION */}
        <div className="w-[74px] h-[65px] flex flex-col items-center justify-center flex-none grayscale hover:opacity-70 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#191919" strokeWidth="1">
            <rect x="8" y="8" width="16" height="16" />
            <rect x="12" y="12" width="16" height="16" />
            <rect x="16" y="16" width="16" height="16" />
            <rect x="14" y="14" width="4" height="4" fill="#191919" />
          </svg>
          <div className="text-[10px] font-bold uppercase leading-tight text-center mt-1 text-[#191919]">IN MOTION</div>
        </div>

        {/* Logo 5: Abstract */}
        <div className="w-[79px] h-[65px] flex flex-col items-center justify-center flex-none grayscale hover:opacity-70 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#191919" strokeWidth="2">
            <rect x="8" y="8" width="24" height="24" />
            <rect x="14" y="18" width="12" height="4" fill="#191919" stroke="none" />
          </svg>
          <div className="text-[12px] font-sans leading-tight text-center mt-1 text-[#191919]">Abstract</div>
        </div>

        {/* Logo 6: INVISION */}
        <div className="w-[70px] h-[65px] flex flex-col items-center justify-center flex-none grayscale hover:opacity-70 transition-opacity cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#191919" strokeWidth="1">
            <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)" />
            <rect x="10" y="10" width="20" height="20" />
            <circle cx="20" cy="20" r="6" />
            <path d="M14 20h12M20 14v12" />
          </svg>
          <div className="text-[10px] font-bold uppercase leading-tight text-center mt-1 text-[#191919]">INVISION</div>
        </div>

        {/* Logo 7: VISION STUDIO */}
        <div className="w-[123px] h-[35px] flex items-stretch border border-[#191919] grayscale flex-none hover:opacity-70 transition-opacity cursor-pointer">
          <div className="bg-[#191919] text-white flex-1 flex items-center justify-center px-2">
            <span className="text-[10px] font-bold tracking-widest">VISION</span>
          </div>
          <div className="bg-white text-[#191919] flex-1 flex items-center justify-center px-2">
            <span className="text-[10px] font-bold tracking-widest">STUDIO</span>
          </div>
        </div>

      </div>
    </section>
  );
}
