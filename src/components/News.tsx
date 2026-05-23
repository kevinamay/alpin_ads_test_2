import Image from 'next/image';

const newsData = [
  {
    image: "/assets/Image (12).png",
    title: "THINGS TO LOOK FOR WHEN COMPARING BRANDING",
    desc: "Key elements to consider when evaluating branding options. Ensure alignment with your vision, audience, and long-term goals."
  },
  {
    image: "/assets/Image (13).png",
    title: "5 STAND-OUT FEATURES OF BRANDING YOU SHOULD KNOW",
    desc: "Discover five essential features that distinguish remarkable branding efforts, setting your brand apart from competitors."
  },
  {
    image: "/assets/Image (14).png",
    title: "BRANDING: WHAT REAL CUSTOMERS HAVE TO SAY",
    desc: "Insights from real customers on the impact of branding. Learn how effective branding influences purchasing decisions."
  },
  {
    image: "/assets/Image (15).png",
    title: "BRANDING: PROS AND CONS THEY DON'T TELL YOU",
    desc: "Advantages and drawbacks of branding strategies. Gain insights to make informed decisions about your brand's direction.",
    date: "01.04.2024"
  }
];

export default function News() {
  return (
    <section className="w-full bg-white flex flex-col border-b border-black">
      {/* Header Section (Atas) */}
      <div className="w-full border-b border-black flex flex-col lg:flex-row justify-between items-start lg:items-end p-6 lg:p-[64px]">
        {/* Kiri: Teks */}
        <div>
          <h3 className="font-mono text-[13px] uppercase leading-[1.4] mb-8 lg:mb-[32px]">
            NEWS
          </h3>
          <h2 className="font-sans text-[48px] lg:text-[80px] font-normal leading-[1.1]">
            Recent works.
          </h2>
        </div>
        
        {/* Kanan: Tombol View All */}
        <button className="font-sans text-[16px] lg:text-[18px] uppercase border-b-2 border-black pb-1 hover:opacity-70 transition-opacity mt-8 lg:mt-0">
          VIEW ALL
        </button>
      </div>

      {/* 4-Column Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {newsData.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col border-b lg:border-b-0 border-black md:border-r [&:nth-child(2n)]:md:border-r-0 [&:nth-child(2n)]:lg:border-r last:border-b-0 lg:last:border-r-0"
          >
            {/* Image Container (Square) */}
            <div className="w-full aspect-square relative">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Text Content */}
            <div className="p-6 lg:p-[48px] flex flex-col flex-grow bg-white hover:bg-gray-50 transition-colors cursor-pointer border-t border-black">
              <h3 className="font-mono text-[13px] uppercase leading-[1.6] text-[#242424] mb-6">
                {item.title}
              </h3>
              <p className="font-sans text-[15px] leading-[1.8] text-[#777777]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
