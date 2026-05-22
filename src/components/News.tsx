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
    desc: "Advantages and drawbacks of branding strategies. Gain insights to make informed decisions about your brand's direction."
  }
];

export default function News() {
  return (
    <section className="w-full bg-white flex flex-col border-b border-black">
      {/* Top Header */}
      <div className="w-full flex justify-between items-center px-4 lg:px-[64px] py-8 lg:py-[64px] border-b border-black">
        <h2 className="font-sans text-5xl lg:text-[80px] leading-[1] text-[#242424] font-normal tracking-tight">
          Latest News
        </h2>
        <span className="font-mono text-[13px] uppercase text-[#242424] border-b border-transparent hover:border-black cursor-pointer transition-colors mt-auto lg:mt-0">
          SEE ALL
        </span>
      </div>

      {/* 4-Column Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {newsData.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col border-b lg:border-b-0 border-black lg:border-r [&:nth-child(2)]:md:border-r-0 [&:nth-child(4)]:lg:border-r-0 last:border-b-0"
          >
            {/* Image Container (Square) */}
            <div className="w-full aspect-square relative border-b border-black">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                className="object-cover" 
              />
            </div>
            
            {/* Text Content */}
            <div className="p-[32px] lg:p-[48px] flex flex-col flex-grow bg-white hover:bg-gray-50 transition-colors cursor-pointer">
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
