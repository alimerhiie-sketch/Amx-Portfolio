import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reels from "@/components/Reels";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-bg text-fg">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Reels />
      <SocialProof />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
