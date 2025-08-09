import { CheckCircle2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";


const services = [
  { title: "Individuelle SaaS-MVP-Entwicklung" },
  { title: "Faire Einstiegskosten + Umsatzbeteiligung" },
  { title: "Erfahrung aus echtem Betrieb" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background text-foreground">
      <div className="container">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* Bild links */}
          <div className="relative overflow-hidden rounded-xl shadow-lg animate-fade-in bg-background hover-scale">
            <AspectRatio ratio={4 / 3}>
              <img
                src="/lovable-uploads/06be3998-4bbb-4286-b687-09f853194294.png"
                alt="Minimalistisches Smartphone-Visual mit blauem Maskottchen-Icon"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </AspectRatio>
          </div>

          {/* Headlines rechts */}
          <div className="space-y-8 animate-fade-in">
            <ul className="space-y-5">
              {services.map(({ title }) => (
                <li key={title} className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-5 w-5 text-primary shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-lg md:text-xl font-medium leading-snug">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
