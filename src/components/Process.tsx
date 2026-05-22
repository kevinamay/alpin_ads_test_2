"use client";

import Image from 'next/image';
import { useState } from 'react';

const steps = [
  {
    label: "DISCOVERY CALL",
    num: "01",
    title: "LET'S SEE IF WE CLICK",
    desc: "We begin with a thorough discussion to understand your brand, goals, and vision, laying the foundation for a successful collaboration.",
    bullets: [
      "Define project objectives",
      "Identify target audience",
      "Discuss brand preferences"
    ]
  },
  {
    label: "CONCEPT",
    num: "02",
    title: "WE NEED A STRATEGY",
    desc: "We conceptualize innovative ideas that encapsulate your brand essence, ensuring each concept aligns seamlessly with your identity and resonates with your audience.",
    bullets: [
      "Brainstorming and ideation",
      "Mood board creation",
      "Concept presentation and feedback gathering"
    ]
  },
  {
    label: "DESIGN",
    num: "03",
    title: "LET THE MAGIC HAPPEN",
    desc: "With creativity and precision, we bring your chosen concept to life, refining every detail to ensure your brand visuals are captivating, cohesive, and impactful.",
    bullets: [
      "Logo and visual asset development",
      "Iterative design refinement",
      "Final design approval process"
    ]
  },
  {
    label: "DELIVERY",
    num: "04",
    title: "READY TO ROCK",
    desc: "We deliver the finalized brand assets promptly and efficiently, equipping you with everything you need to confidently launch your brand and make a memorable impression.",
    bullets: [
      "Preparation of brand guidelines",
      "Handover of design files",
      "Post-delivery support and guidance"
    ]
  }
];

export default function Process() {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <section className="w-full flex flex-col bg-white">
      {/* Area Marquee Heading (Atas) */}
      <div className="w-full h-[181px] border-b border-black overflow-hidden flex items-center bg-white relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Dua blok identik agar transisi infinite seamless */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="flex items-center gap-[48px] pr-[48px]">
                  <span 
                    className={`font-sans text-[96px] uppercase leading-none ${j % 2 === 0 ? 'text-[#242424]' : 'text-transparent'}`}
                    style={j % 2 !== 0 ? { WebkitTextStroke: '1px #242424' } : undefined}
                  >
                    PROCESS
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Area Grid Content (Bawah) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 border-b border-black bg-white items-start">
        
        {/* Kolom Kiri (Foto Model) */}
        <div className="relative w-full h-[600px] lg:h-[902px] lg:sticky lg:top-0 border-b border-black lg:border-b-0 lg:border-r overflow-hidden">
          <Image 
            src="/assets/Image (6).png" 
            fill 
            className="object-cover"
            style={{ objectPosition: 'center 20%' }}
            alt="Process Model" 
            priority
          />
        </div>

        {/* Kolom Kanan (Konten & Steps) */}
        <div className="flex flex-col h-full w-full">
          {/* Header Section */}
          <div className="p-[64px] flex flex-col">
            <Image 
              src="/assets/Vector (8).svg" 
              width={60} 
              height={60} 
              className="w-[60px] h-[60px] object-contain" 
              alt="Process Icon" 
            />
            <h2 className="mt-[64px] font-sans text-5xl lg:text-[80px] leading-[1.1] text-[#242424]">
              Your new brand<br />in 4 steps.
            </h2>
            <p className="mt-[32px] text-[18px] leading-[1.8] max-w-[500px] text-[#242424]">
              My streamlined process ensures collaboration, creativity, and precision to deliver exceptional branding solutions tailored to your vision.
            </p>
          </div>

          {/* Accordion / Steps List */}
          <div className="flex flex-col w-full text-[#242424]">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col w-full">
                {/* Top Bar */}
                <div 
                  className="h-[51px] border-t border-black flex justify-between items-center px-[64px] cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenStep(openStep === index ? null : index)}
                >
                  <span className="uppercase font-mono text-[13px]">{step.label}</span>
                  <span className="font-mono text-[13px] transition-transform duration-300">
                    {openStep === index ? '↑' : '↓'}
                  </span>
                </div>
                
                {/* Content Box */}
                {openStep === index && (
                  <div className="flex flex-col lg:flex-row gap-8 p-[64px] border-t border-black">
                    {/* Kiri: Angka */}
                    <div className="font-sans text-[24px]">
                      {step.num}
                    </div>
                    
                    {/* Kanan: Deskripsi */}
                    <div className="flex flex-col flex-1">
                      <h3 className="text-[24px] uppercase font-sans">
                        {step.title}
                      </h3>
                      <p className="text-[18px] mt-4 leading-[1.8]">
                        {step.desc}
                      </p>
                      <ul className="list-disc ml-6 mt-6 space-y-2 text-[18px]">
                        {step.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Get In Touch Button */}
          <button className="w-full flex items-center justify-center bg-[#242424] text-white px-[24px] py-[20px] transition-colors hover:bg-black">
            <span className="font-mono text-[13px] uppercase leading-[1.4]">
              GET IN TOUCH
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}
