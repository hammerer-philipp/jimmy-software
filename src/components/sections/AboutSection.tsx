import { CheckCircle2 } from "lucide-react";

const services = [
  { title: "Individuelle SaaS-MVP-Entwicklung" },
  { title: "Faire Einstiegskosten + Umsatzbeteiligung" },
  { title: "Erfahrung aus echtem Betrieb" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Wir bauen nicht nur für andere – wir bauen auch für uns.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ich bin Philipp und habe aus dem Kinderzimmer heraus meine eigene SaaS gegründet. Mit <a href="https://jimmy-ausbildung.de" target="_blank" rel="noopener noreferrer" className="text-current no-underline hover:no-underline focus:no-underline">Jimmy Ausbildung</a>, unserem Ausbildungsportal, erleben wir täglich den Alltag eines SaaS-Startups.
            <br /><br />
            Diese Erfahrung wollen wir jetzt nutzen, um andere SaaS-Startups oder die, die es werden wollen, bei der Entwicklung ihrer MVPs zu unterstützen. Wir helfen dir, deine Idee schnell, effizient und kosteneffektiv in ein marktreifes Produkt zu verwandeln.
            <br /><br />
            Unser Modell ist transparent: Du zahlst eine faire Anzahlung im mittleren vierstelligen Bereich plus eine Umsatzbeteiligung für einen bestimmten Zeitraum. So entstehen keine hohen Anfangskosten und du gehst kein Risiko ein. Sollte dein Produkt nicht wie gewünscht ankommen, hast du bei uns keine Schulden und verlierst außer der Anzahlung nichts.
            <br /><br />
            Wir sind der Partner für Gründer ohne eigene Entwickler oder Tech-Co-Founder, die ihre SaaS-Idee realisieren wollen.
          </p>
          <ul className="space-y-4 pt-2">
            {services.map(({ title }) => (
              <li key={title} className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 text-primary shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-base md:text-lg leading-snug">{title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-fade-in">
          <img
            src="/lovable-uploads/05cf5ffd-2285-4cb7-93fa-429fdb1ad870.png"
            alt="Philipp von Jimmy Software in Berlin"
            className="w-full max-w-xl mx-auto rounded-lg shadow-[var(--shadow-elevate)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
