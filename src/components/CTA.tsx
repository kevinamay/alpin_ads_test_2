import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="w-full flex flex-col bg-white">
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
        {/* Left Side */}
        <div className="flex flex-col max-w-[800px] mb-8 lg:mb-0">
          <span className="font-mono text-[13px] lg:text-[11px] uppercase tracking-widest text-[#242424] mb-8 lg:mb-12">
            CONTACT
          </span>
          <h2 className="font-sans text-[48px] lg:text-[96px] font-normal leading-[1.1] tracking-tighter text-[#242424]">
            Let’s bring your brand<br />to the next level
          </h2>
        </div>

        {/* Right Side - Button */}
        <button className="w-full lg:w-[158px] h-[51px] bg-[#242424] text-white flex items-center justify-center font-mono text-[13px] uppercase border border-black hover:bg-white hover:text-[#242424] transition-colors gap-1 shrink-0 mt-8 lg:mt-0">
          GET IN TOUCH <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}
