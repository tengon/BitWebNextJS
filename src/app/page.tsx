import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import ServicesSection from "@/components/ServicesSection";
import EcosystemDiagram from "@/components/EcosystemDiagram";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ProjectsGallery from "@/components/ProjectsGallery";
import PartnersMarquee from "@/components/PartnersMarquee";
import Statistics from "@/components/Statistics";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Background for Home Page */}
      <div className="fixed inset-0 z-0 bg-[#0B1220]">
        {/* Main Background Image */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-no-repeat bg-fixed opacity-45" style={{ backgroundPosition: 'center 80px' }}></div>

        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/60 to-[#0B1220]/30"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

        {/* Neon Glow Accents */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0099FF]/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00D4FF]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <VisionMission />
        <ServicesSection />
        <EcosystemDiagram />
        <FeaturedSolutions />
        <ProjectsGallery />
        <PartnersMarquee />
        {/* <Statistics /> */}
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
