import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Socials from "@/components/Socials";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <Hero />
      <Logos />
      <Services />
      <Work />
      <Process />
      <Socials />
      <About />
      <Testimonials />
      <CTA />
    </main>
  );
}
