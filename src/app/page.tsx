import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <div className="relative isolation-isolate">
      {/* Background effects (HARUS di belakang) */}
      <FloatingElements />

      {/* Music Player (overlay kecil, aman) */}
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
