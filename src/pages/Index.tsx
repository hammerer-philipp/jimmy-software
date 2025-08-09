import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";

import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
