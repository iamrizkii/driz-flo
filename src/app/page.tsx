import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingElementsClient from "@/components/FloatingElementsClient";

export default function Home() {
  return (
    <div className="relative isolation-isolate">
      {/* Background effects (client-only, aman) */}
      <FloatingElementsClient />

      {/* Music Player */}
      <MusicPlayer />

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Catalog />
          <Gallery />
        </main>
        <Footer />
      </div>
    </div>
  );
}
