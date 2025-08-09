import { CheckCircle2 } from "lucide-react";


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
          <div className="relative overflow-hidden rounded-xl shadow-lg animate-fade-in">
            <img
              src="/lovable-uploads/8d4b0435-ce43-4afd-a203-18f8c77166ff.png"
              alt="SaaS MVP – minimalistisches Mockup, professionell und fokussiert"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
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
