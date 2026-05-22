"use client";

export default function Banner() {
  const text = "OPEN FOR NEW PROJECTS +++ ";
  // Repeat enough times to guarantee seamless coverage on ultra-wide screens
  const repeated = text.repeat(20);

  return (
    <div
      className="w-full h-[51px] flex items-center overflow-hidden border-b border-black bg-[#EBFB48]"
      aria-label="Announcement banner"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm uppercase text-black font-mono tracking-widest">
          {repeated}
        </span>
        {/* Duplicate span for seamless loop — as the first copy scrolls out
            to the left, the second copy fills the gap with zero visible seam. */}
        <span className="text-sm uppercase text-black font-mono tracking-widest">
          {repeated}
        </span>
      </div>
    </div>
  );
}
