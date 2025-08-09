const steps = [
  { step: 1, title: "Kennenlernen & Analyse", text: "Wir verstehen deine Vision." },
  { step: 2, title: "MVP-Entwicklung", text: "Lean, praxisnah und nutzerorientiert." },
  { step: 3, title: "Launch", text: "Dein Produkt geht live." },
  { step: 4, title: "Skalierung", text: "Auf Wunsch bleiben wir langfristiger Partner." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          So bringen wir dein SaaS an den Start
        </h2>
        <div className="space-y-8">
          {steps.map((s) => (
            <article
              key={s.step}
              className="relative p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-md border border-border shadow-lg animate-fade-in"
            >
              {/* Schritt-Badge rechts */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full border border-primary/20 bg-primary/10 text-primary">
                  • Schritt {s.step}
                </span>
              </div>

              {/* Mockup/Status Kopfbereich */}
              <div className="mb-6">
                <div className="h-28 rounded-md border border-border bg-muted/30 flex items-center justify-between px-4">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <div className="w-48">
                    <div className="h-1.5 w-full rounded-full bg-muted">
                      <div className="h-1.5 rounded-full bg-primary w-1/3" />
                    </div>
                    <div className="mt-1 text-[10px] text-muted-foreground">Updating…</div>
                  </div>
                </div>
              </div>

              <header className="mb-2">
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </header>
              <p className="text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;