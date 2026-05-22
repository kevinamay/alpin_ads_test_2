import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <Header />
      <Hero />
      <Logos />
      <Services />
    </main>
  );
}
