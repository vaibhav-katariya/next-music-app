import CardHoverEffect from "@/components/CardHoverEffect";
import CardMoving from "@/components/CardMoving";
import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructor";
import WhyChooseus from "@/components/WhyChooseus";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourse />
      <WhyChooseus />
      <CardMoving />
      <CardHoverEffect />
      <Instructors />
      <Footer />
    </main>
  );
}
