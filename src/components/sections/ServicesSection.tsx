import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Individuelle SaaS-MVP-Entwicklung",
    text: "Von der Idee zum marktreifen MVP – optimiert für Geschwindigkeit, Kosten und Wachstum.",
  },
  {
    title: "Faire Einstiegskosten + Umsatzbeteiligung",
    text: "Eine faire Anzahlung und eine Beteiligung am Erfolg statt hoher Agenturpreise.",
  },
  {
    title: "Erfahrung aus echtem Betrieb",
    text: "Wir wissen, was im Alltag eines SaaS-Startups wirklich zählt – weil wir es selbst erleben.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Leistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="bg-card border-border animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;