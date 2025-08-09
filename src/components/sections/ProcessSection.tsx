import { Search, Lightbulb, Wrench, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { step: 1, title: "Kennenlernen & Idee verstehen", text: "In einem ersten Gespräch lernen wir dich und deine Idee kennen.", icon: Search },
  { step: 2, title: "Konzeptphase", text: "Anschließend entwerfen wir anhand der Informationen, die du uns gegeben hast, ein Mockup für dein Produkt.", icon: Lightbulb },
  { step: 3, title: "MVP-Entwicklung", text: "Wenn dir das Mockup gefällt, entwickeln wir dein SaaS-MVP mit Flutter, um eine hybride Lösung zu schaffen.", icon: Wrench },
  { step: 4, title: "Launch", text: "Wenn du mit unserer Arbeit zufrieden bist, wird deine SaaS-Anwendung veröffentlicht.", icon: Rocket },
  { step: 5, title: "Skalierung", text: "Auf Wunsch bleiben wir dein langfristiger Partner zur Weiterentwicklung deiner Anwendung.", icon: TrendingUp },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          So bringen wir dein SaaS an den Start
        </h2>
        <div className="space-y-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.step}
                className="relative p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border shadow-lg animate-fade-in hover-scale transition-transform"
              >
                {/* Schritt-Badge rechts */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full border border-primary/20 bg-primary/10 text-primary">
                    • Schritt {s.step}
                  </span>
                </div>

                <header className="flex items-start gap-4 mb-2">
                  <div className="size-12 shrink-0 rounded-lg border border-border bg-primary/10 text-primary grid place-items-center shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="text-muted-foreground mt-1">{s.text}</p>
                  </div>
                </header>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
