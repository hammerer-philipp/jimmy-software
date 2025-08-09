import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-elevate)] animate-fade-in text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Bereit, dein MVP zu starten?</h2>
          <p className="text-base md:text-lg text-muted-foreground mt-3">
            Kurz, pragmatisch und fair – wir bringen deine Idee schnell zum marktreifen Produkt.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Projekt starten über LinkedIn">Projekt starten</a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#about" aria-label="Mehr über uns erfahren">Mehr erfahren</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;