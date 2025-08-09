import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-hero">
      <div className="container py-20 md:py-28">
        <div className="grid gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Dein Partner für SaaS</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Wir entwickeln <span className="text-primary">SaaS‑MVP</span> für Startups mit <span className="text-primary">kleinem Budget</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Durch unsere eigene SaaS Jimmy Ausbildung kennen wir die Bedürfnisse junger Startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild variant="heroWhite" size="xl">
                <a href="#contact">Projekt starten</a>
              </Button>
              <Button asChild variant="heroBlack" size="xl">
                <a href="#about">Mehr erfahren</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;