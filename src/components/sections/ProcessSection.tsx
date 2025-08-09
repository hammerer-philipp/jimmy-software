import { AspectRatio } from "@/components/ui/aspect-ratio";
import step1 from "@/assets/process-step-1.jpg";
import step2 from "@/assets/process-step-2.jpg";
import step3 from "@/assets/process-step-3.jpg";
import step4 from "@/assets/process-step-4.jpg";

const stepImages = [step1, step2, step3, step4];

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

              {/* Bildbereich */}
              <div className="mb-6">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={stepImages[s.step - 1]}
                    alt={`${s.title} – Prozessschritt ${s.step}`}
                    loading="lazy"
                    className="h-full w-full rounded-md object-cover border border-border"
                  />
                </AspectRatio>
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
