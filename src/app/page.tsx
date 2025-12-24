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
    <>
      {/* Floating butterflies and petals */}
      <FloatingElements />

      {/* Background music player */}
      <MusicPlayer />

      <Header />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
