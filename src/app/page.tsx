import Hero from "@/components/Hero";
import Logos from "@/components/Logos";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      <Hero />
      <Logos />
    </main>
  );
}
