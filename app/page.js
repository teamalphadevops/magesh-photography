import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getGallery, getHeroImage, getAboutImage } from "@/lib/gallery";

export default function Home() {
  const gallery = getGallery();
  const heroImage = getHeroImage();
  const aboutImage = getAboutImage();

  return (
    <>
      <Nav />
      <main>
        <Hero image={heroImage} />
        <Marquee />
        <About image={aboutImage} />
        <Services />
        <Gallery items={gallery} />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
