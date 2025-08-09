import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container text-center max-w-3xl animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Starte jetzt mit einem Partner, der weiß, wie es geht.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Buche dein unverbindliches Erstgespräch und erfahre, wie wir deine SaaS-Idee umsetzen können – fair, effizient und praxisnah.
        </p>
        <Button asChild variant="heroWhite" size="xl" className="hover-scale">
          <a href="mailto:hello@jimmy.software" aria-label="Kostenloses Erstgespräch buchen">
            Kostenloses Erstgespräch buchen
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;