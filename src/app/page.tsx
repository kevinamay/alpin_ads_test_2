import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <Hero />
      <Logos />
      <About />
      <Services />
      <Work />
      <Process />
      <Socials />
    </main>
  );
}
