import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

const services = [
  { title: "Individuelle SaaS-MVP-Entwicklung" },
  { title: "Faire Einstiegskosten + Umsatzbeteiligung" },
  { title: "Erfahrung aus echtem Betrieb" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Wir bauen nicht nur für andere – wir bauen auch für uns.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hey, ich bin Philipp. Mit <a href="https://jimmy-ausbildung.de" target="_blank" rel="noopener noreferrer" className="story-link text-foreground">Jimmy Ausbildung</a>, meinem eigenen SaaS kennen wir den Startup-Alltag. Diese Praxiserfahrung nutzen wir, um Gründer schnell und kosteneffizient zu einem marktreifen MVP zu führen – ohne hohe Anfangskosten. Da wir wissen dass das Budget zu beginn oft knapp ist, bieten wir eine überschaubare Anzahlung plus zeitlich begrenzte Umsatzbeteiligung. Ideal für Teams ohne eigenen Tech‑Co‑Founder.
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-6 pt-2">
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
        </Reveal>
        <Reveal className="lg:col-span-6" delay={120}>
          <img
            src="/lovable-uploads/05cf5ffd-2285-4cb7-93fa-429fdb1ad870.png"
            alt="Philipp von Jimmy Software in Berlin"
            className="w-full max-w-lg mx-auto rounded-lg shadow-[var(--shadow-elevate)]"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutSection;
