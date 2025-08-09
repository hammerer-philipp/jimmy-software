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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="p-6 rounded-lg bg-card border border-border animate-fade-in">
              <div className="text-primary text-sm font-semibold mb-2">Schritt {s.step}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;