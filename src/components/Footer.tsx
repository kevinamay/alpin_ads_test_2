"use client";

export default function Footer() {
  return (
    <footer className="w-full h-[51px] bg-white border-t border-black flex justify-between items-center px-4 lg:px-[64px]">
      {/* Left: Copyright */}
      <div className="font-mono text-[13px] font-normal uppercase text-[#242424]">
        © 2026 ALPIN
      </div>

      {/* Right: Back to Top */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity"
      >
        <span className="font-mono text-[13px] font-normal leading-[1.4] uppercase text-[#242424] w-auto lg:w-[117px] h-auto lg:h-[18px]">
          BACK TO TOP
        </span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#242424" 
          strokeWidth="2" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    </footer>
  );
}
