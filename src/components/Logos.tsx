import React from 'react';

const brands = [
  "SUPER FOOD",
  "CREATIVE STUDIO",
  "IN MOTION",
  "IN MOTION",
  "Abstract",
  "INVISION",
  "VISION STUDIO"
];

// Helper component for different SVG shapes
const LogoShape = ({ index }: { index: number }) => {
  switch (index) {
    case 0:
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="16" cy="16" r="14" />
          <path d="M11 11l10 10M21 11L11 21" />
        </svg>
      );
    case 1:
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="16" cy="16" r="12" />
          <path d="M16 4v24M4 16h24M7.5 7.5l17 17M7.5 24.5l17-17" />
        </svg>
      );
    case 2:
    case 3:
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="6" y="6" width="16" height="16" />
          <rect x="10" y="10" width="16" height="16" />
          <rect x="12" y="14" width="4" height="4" fill="currentColor" />
        </svg>
      );
    case 4:
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="20" height="20" />
          <rect x="10" y="14" width="12" height="4" fill="currentColor" />
        </svg>
      );
    case 5:
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="16" cy="16" r="10" />
          <path d="M16 6v20M6 16h20" />
          <circle cx="16" cy="16" r="4" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Logos() {
  return (
    <section className="w-full h-auto lg:h-[163px] bg-white text-[#242424] border-b border-black flex flex-col lg:flex-row">
      {/* Kotak Kiri: Area Judul */}
      <div className="w-full lg:w-[350px] h-[64px] lg:h-full border-b border-black lg:border-b-0 lg:border-r flex items-center justify-center flex-none">
        <h2 className="font-mono uppercase text-[13px] font-normal tracking-wider">
          BRANDS I'VE WORKED WITH
        </h2>
      </div>

      {/* Kotak Kanan: Area Logo Brand */}
      <div className="flex-1 h-full flex flex-wrap items-center justify-center lg:justify-evenly gap-8 py-8 px-4 lg:py-0 lg:px-8 overflow-hidden">
        {brands.map((brand, index) => {
          if (brand === "VISION STUDIO") {
            return (
              <div key={index} className="flex items-center border border-[#242424] h-[32px] grayscale hover:opacity-70 transition-opacity cursor-pointer">
                <span className="bg-[#242424] text-white text-[10px] font-bold px-2 py-1 h-full flex items-center tracking-widest">VISION</span>
                <span className="bg-white text-[#242424] text-[10px] font-bold px-2 py-1 h-full flex items-center tracking-widest">STUDIO</span>
              </div>
            );
          }
          
          return (
            <div key={index} className="flex flex-col items-center justify-center gap-2 grayscale opacity-80 hover:opacity-100 transition-opacity cursor-pointer w-[80px]">
              <LogoShape index={index} />
              {brand !== "Abstract" ? (
                <span className="text-[10px] uppercase font-bold text-center leading-tight tracking-wider">
                  {brand.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {word}
                      {i !== brand.split(' ').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              ) : (
                <span className="text-[12px] font-sans text-center leading-tight tracking-wide mt-1">
                  {brand}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
