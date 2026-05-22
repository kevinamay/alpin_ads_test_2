"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white flex flex-col">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row border-t border-black">
        
        {/* Left Info Panel */}
        <div className="w-full lg:w-[30%] lg:border-r border-b lg:border-b-0 border-black p-8 lg:p-[64px] flex flex-col justify-between min-h-[250px] lg:min-h-[400px]">
          <div className="font-mono text-2xl tracking-tighter text-[#242424]">
            skøld.
          </div>
          <div className="font-mono text-[12px] uppercase text-[#242424] leading-relaxed mt-16 lg:mt-0">
            MAIN STREET 16<br />
            22222 LISBON
          </div>
        </div>

        {/* Right Links Panel */}
        <div className="w-full lg:w-[70%] p-8 lg:p-[64px] grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="font-mono text-[12px] uppercase text-[#242424] mb-2">PAGES</h4>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">HOME</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">SERVICES</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">ABOUT ME</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">CONTACT</a>
            <button className="mt-4 bg-[#EBFB48] border border-black px-6 py-3 font-mono text-[12px] uppercase text-[#242424] hover:bg-white transition-colors cursor-pointer">
              MORE TEMPLATES
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="font-mono text-[12px] uppercase text-[#242424] mb-2">CMS</h4>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">WORK</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">WORK SINGLE</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">BLOG</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">BLOG POST</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">SHOP</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">SHOP SINGLE</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="font-mono text-[12px] uppercase text-[#242424] mb-2">UTILITY PAGES</h4>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">404 ERROR PAGE</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">PASSWORD PROTECTED</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">STYLEGUIDE</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">LICENSING</a>
            <a href="#" className="font-mono text-[12px] uppercase text-[#242424] hover:opacity-70 transition-opacity">CHANGELOG</a>
          </div>
          
        </div>
      </div>

      {/* Bottom 51px Bar */}
      <div className="w-full h-auto lg:h-[51px] flex flex-col lg:flex-row border-t border-b border-black bg-white">
        
        {/* Copyright */}
        <div className="flex-1 flex items-center px-4 lg:px-[64px] h-[51px] lg:h-full border-b lg:border-b-0 border-black font-mono text-[11px] lg:text-[13px] uppercase text-[#242424]">
          © 2026 ALPIN.
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center h-[51px] lg:h-full overflow-x-auto">
          <a href="#" className="h-full px-4 lg:px-6 flex items-center justify-center lg:border-l border-black font-mono text-[10px] lg:text-[11px] uppercase text-[#242424] hover:bg-gray-50 transition-colors shrink-0">
            INSTAGRAM
          </a>
          <a href="#" className="h-full px-4 lg:px-6 flex items-center justify-center border-l border-black font-mono text-[10px] lg:text-[11px] uppercase text-[#242424] hover:bg-gray-50 transition-colors shrink-0">
            TWITTER
          </a>
          <a href="#" className="hidden sm:flex h-full px-4 lg:px-6 items-center justify-center border-l border-black font-mono text-[10px] lg:text-[11px] uppercase text-[#242424] hover:bg-gray-50 transition-colors shrink-0">
            BEHANCE
          </a>
          <a href="#" className="hidden md:flex h-full px-4 lg:px-6 items-center justify-center border-l border-black font-mono text-[10px] lg:text-[11px] uppercase text-[#242424] hover:bg-gray-50 transition-colors shrink-0">
            DRIBBBLE
          </a>
          <div 
            onClick={scrollToTop}
            className="h-full px-4 lg:px-6 flex items-center justify-center border-l border-black cursor-pointer hover:bg-gray-100 transition-colors gap-2 shrink-0"
          >
            <span className="font-mono text-[10px] lg:text-[11px] uppercase text-[#242424]">
              BACK TO TOP
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#242424" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
