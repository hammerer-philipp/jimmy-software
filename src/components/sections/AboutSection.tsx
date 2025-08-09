import { CheckCircle2 } from "lucide-react";

const services = [
  { title: "Individuelle SaaS-MVP-Entwicklung" },
  { title: "Faire Einstiegskosten + Umsatzbeteiligung" },
  { title: "Erfahrung aus echtem Betrieb" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
        <div className="space-y-6 animate-fade-in lg:col-span-7">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Wir bauen nicht nur für andere – wir bauen auch für uns.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ich bin Philipp. Mit <a href="https://jimmy-ausbildung.de" target="_blank" rel="noopener noreferrer" className="text-current no-underline hover:no-underline focus:no-underline">Jimmy Ausbildung</a> leben wir den echten SaaS‑Alltag.
            Diese Praxis nutzen wir, um Gründer schnell und kosteneffizient zu einem marktreifen MVP zu führen – ohne hohe Anfangskosten.
            Fair: überschaubare Anzahlung plus zeitlich begrenzte Umsatzbeteiligung. Ideal für Teams ohne eigenen Tech‑Co‑Founder.
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
        <div className="animate-fade-in lg:col-span-5">
          <img
            src="/lovable-uploads/05cf5ffd-2285-4cb7-93fa-429fdb1ad870.png"
            alt="Philipp von Jimmy Software in Berlin"
            className="w-full max-w-lg mx-auto rounded-lg shadow-[var(--shadow-elevate)]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
