export default function Logos() {
  const logos = Array.from({ length: 6 }, (_, i) => `LOGO ${i + 1}`);

  return (
    <section className="w-full h-auto lg:h-[163px] bg-white text-[#242424] border-b border-black flex flex-col lg:flex-row">
      {/* Kotak Kiri: Area Judul */}
      <div className="w-full lg:w-[350px] h-[60px] lg:h-full border-b border-black lg:border-b-0 lg:border-r flex items-center justify-center flex-none">
        <h2 className="font-mono uppercase text-[13px] font-normal tracking-wider">
          BRANDS I'VE WORKED WITH
        </h2>
      </div>

      {/* Kotak Kanan: Area Logo Brand */}
      <div className="flex-1 h-full flex flex-wrap items-center justify-center lg:justify-evenly gap-8 py-8 lg:py-0 px-8">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="w-[120px] h-[60px] flex items-center justify-center border border-black/20 text-gray-400 font-bold text-xs uppercase tracking-widest grayscale opacity-70 hover:opacity-100 transition-opacity"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
