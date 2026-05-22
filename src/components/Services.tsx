import Image from 'next/image';

const services = [
  {
    title: "BRAND IDENTITY",
    desc: "Develop visually striking logos, color schemes, and typography that represent the essence of your client's brand.",
    icon: "/assets/Vector (4).png"
  },
  {
    title: "BRAND STRATEGY",
    desc: "Craft comprehensive strategies to define brand positioning, target audience, and messaging to ensure cohesive brand communication.",
    icon: "/assets/Vector (6).svg"
  },
  {
    title: "BRAND DESIGN",
    desc: "Design various collateral such as business cards, letterheads, brochures, and packaging to maintain brand consistency across all touchpoints.",
    icon: "/assets/Vector (7).svg"
  },
  {
    title: "BRAND REFRESH",
    desc: "Revitalize outdated brands or execute complete rebranding strategies, aligning visuals and messaging with evolving market trends and client objectives.",
    icon: "/assets/Vector (8).svg"
  }
];

export default function Services() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 text-[#242424] border-b border-black">
      {/* Kolom Kiri: Header & Deskripsi */}
      <div className="flex flex-col gap-[16px] p-[64px] border-b border-black lg:border-b-0 lg:border-r">
        <span className="font-mono text-[13px] uppercase font-normal leading-[1.4]">
          SERVICES
        </span>
        <h2 className="font-sans text-5xl lg:text-[80px] font-normal leading-[1.1] max-w-full">
          Branding Services
        </h2>
        <p className="font-sans text-[18px] font-normal leading-[1.8] w-full lg:max-w-[500px]">
          Transform your brand into a visual masterpiece. My expertise in branding brings your vision to reality, making your brand shine.
        </p>
      </div>

      {/* Kolom Kanan: Daftar Layanan/Cards */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col lg:flex-row gap-[32px] p-[64px] border-b border-black last:border-b-0"
          >
            {/* Ikon Kiri */}
            <div className="flex-none">
              <Image 
                src={service.icon} 
                alt={service.title} 
                width={60} 
                height={60} 
                className="w-[60px] h-[60px] object-contain"
              />
            </div>
            
            {/* Konten Teks Kanan */}
            <div className="flex flex-col flex-1">
              <h3 className="font-sans text-[32px] uppercase font-normal leading-[1.3]">
                {service.title}
              </h3>
              <p className="font-sans text-[16px] font-normal leading-[1.8] mt-2">
                {service.desc}
              </p>
              <a 
                href="#" 
                className="font-mono text-[13px] uppercase leading-[1.4] border-b border-black w-fit mt-6 pb-1 hover:opacity-70 transition-opacity"
              >
                MORE INFORMATION
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
