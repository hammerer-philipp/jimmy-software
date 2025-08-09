const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Wir bauen nicht nur für andere – wir bauen auch für uns.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hey, ich bin Philipp. Mit 15 habe ich aus dem Klassenzimmer heraus meine eigene SaaS gestartet. Heute betreibe ich mit Jimmy Ausbildung ein Ausbildungsportal, das uns täglich zeigt, was es heißt, ein digitales Produkt wirklich am Laufen zu halten.
            <br /><br />
            Diese Erfahrung setzen wir gezielt ein, um Startups zu helfen, ihre Ideen in funktionierende Produkte zu verwandeln – fair, effizient und praxisnah.
          </p>
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