import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="w-full flex flex-col bg-white">
      {/* Marquee Top */}
      <div className="w-full h-[52px] bg-[#EBFB48] border-t border-black overflow-hidden flex items-center">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[...Array(10)].map((_, j) => (
                <span key={j} className="font-mono text-[13px] uppercase text-[#242424] mr-8">
                  LET'S TALK +++
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full h-auto px-4 lg:px-[64px] pt-12 lg:pt-[64px] pb-12 lg:pb-[80px] flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-b border-black">
        {/* Area Teks Tengah */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-[64px] w-full max-w-[1200px]">
          <h2 className="font-sans text-[64px] lg:text-[120px] leading-[1] text-[#242424] text-center mb-10 lg:mb-[48px]">
            Let's create<br />something great.
          </h2>
          <button className="h-[51px] px-[32px] bg-[#242424] text-white font-sans text-[16px] lg:text-[18px] uppercase hover:bg-black transition-colors rounded-none w-full lg:w-auto">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
}
