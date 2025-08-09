import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-hero">
      <div className="container py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Jimmy Software</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Kosteneffiziente SaaS-MVPs – lean, skalierbar & praxisnah
            </h1>
            <p className="text-lg text-muted-foreground">
              Gebaut mit der Erfahrung aus unserem eigenen Produkt – Jimmy Ausbildung.
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
          <div className="relative group">
            <img
              src="/lovable-uploads/5efead8f-0f07-4820-99dd-cf67b7c9fd61.png"
              alt="App-Mockup mit Jimmy-Logo"
              className="mx-auto w-full max-w-sm md:max-w-md transform transition-transform duration-300 group-hover:-rotate-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;