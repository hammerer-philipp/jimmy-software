import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
const Hero = () => {
  return (
    <section id="home" className="bg-hero">
      <div className="container py-20 md:py-28">
        <div className="grid gap-10 place-items-center text-center">
          <div className="space-y-6">
            <Reveal as="p" className="text-sm uppercase tracking-wider text-muted-foreground">Dein Partner für SaaS</Reveal>
            <Reveal as="h1" delay={80} className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Wir entwickeln <span className="text-primary">SaaS‑MVP</span> für Startups mit <span className="text-primary">kleinem Budget</span>
            </Reveal>
            <Reveal as="p" delay={140} className="text-lg text-muted-foreground">
              Durch unsere eigene SaaS Jimmy Ausbildung kennen wir die Bedürfnisse junger Startups.
            </Reveal>
            <Reveal as="div" delay={200} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button asChild variant="heroWhite" size="xl" className="hover-scale">
                <a href="#contact">Projekt starten</a>
              </Button>
              <Button asChild variant="heroBlack" size="xl" className="hover-scale">
                <a href="#about">Mehr erfahren</a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;