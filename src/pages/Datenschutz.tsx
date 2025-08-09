import { useEffect } from "react";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutzerklärung | Jimmy Software";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Datenschutz bei Jimmy Software – Informationen zur Verarbeitung personenbezogener Daten.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      m.setAttribute("content", content);
      document.head.appendChild(m);
    }
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.href);
  }, []);

  return (
    <main>
      <section className="py-16 md:py-20">
        <div className="container space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Datenschutzerklärung</h1>
          <article className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold">1. Verantwortlicher</h2>
              <p>Jimmy Software, E-Mail: <a href="mailto:hello@jimmy.software">hello@jimmy.software</a></p>
            </section>
            <section>
              <h2 className="text-xl md:text-2xl font-semibold">2. Erhebung und Verarbeitung</h2>
              <p>Wir verarbeiten personenbezogene Daten, die beim Besuch dieser Website anfallen (z. B. IP-Adresse, Zugriffsdaten) und Daten, die Sie uns übermitteln (z. B. Kontaktaufnahme per E-Mail).</p>
            </section>
            <section>
              <h2 className="text-xl md:text-2xl font-semibold">3. Rechtsgrundlagen</h2>
              <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) sowie – sofern einschlägig – Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) oder lit. b DSGVO (Vertrag).</p>
            </section>
            <section>
              <h2 className="text-xl md:text-2xl font-semibold">4. Speicherdauer</h2>
              <p>Wir speichern Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
            </section>
            <section>
              <h2 className="text-xl md:text-2xl font-semibold">5. Ihre Rechte</h2>
              <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich hierzu an <a href="mailto:hello@jimmy.software">hello@jimmy.software</a>.</p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Datenschutz;
