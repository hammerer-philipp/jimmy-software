import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rocket, Handshake, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Individuelle SaaS-MVP-Entwicklung",
    text: "Von der Idee zum marktreifen MVP – schnell, effizient, skalierbar.",
    Icon: Rocket,
  },
  {
    title: "Faire Einstiegskosten + Umsatzbeteiligung",
    text: "Transparente Kostenstruktur mit echter Partnerschaft.",
    Icon: Handshake,
  },
  {
    title: "Erfahrung aus echtem Betrieb",
    text: "Praktisches Know-how aus laufenden SaaS-Produkten.",
    Icon: BarChart3,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 md:py-28">
      {/* Subtle background to blend with the rest */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />

      <div className="container">
        <header className="text-center mb-12 md:mb-16 animate-fade-in">
          <p className="text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
            Was wir anbieten
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-2">Leistungen</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map(({ title, text, Icon }) => (
            <Card
              key={title}
              className="bg-card/80 border-border/60 backdrop-blur-sm transition-shadow hover:shadow-lg hover-scale animate-fade-in"
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl leading-snug">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
