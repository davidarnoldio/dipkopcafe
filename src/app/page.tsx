import { MotionProvider } from "@/components/MotionPrimitives";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { BrandStory } from "@/components/BrandStory";
import { MenuShowcase } from "@/components/MenuShowcase";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GallerySection } from "@/components/GallerySection";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <MotionProvider>
      <Navbar />
      <main>
        <HeroSection />
        <BrandStory />
        <MenuShowcase />
        <ExperienceSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
    </MotionProvider>
  );
}
