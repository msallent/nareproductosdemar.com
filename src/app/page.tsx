import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { About2 } from "@/components/About2";
import { Kitchen } from "@/components/Kitchen";
import { Gallery } from "@/components/Gallery";
import { Gallery2 } from "@/components/Gallery2";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="scrollbar-none flex h-svh snap-y snap-mandatory flex-col overflow-y-auto uppercase">
      <Hero />
      <About />
      <About2 />
      <Kitchen />
      <Gallery />
      <Gallery2 />
      <Contact />
      <Footer />
    </main>
  );
}
