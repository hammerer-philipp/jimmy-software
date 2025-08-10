import { useEffect } from "react";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum | Jimmy UG";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Impressum der Jimmy UG (haftungsbeschränkt) – Anbieterkennzeichnung, Kontakt, Registereintrag und rechtliche Angaben.";
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
        <div className="container space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-semibold">Impressum</h1>
          <article className="space-y-8 text-muted-foreground leading-relaxed max-w-3xl">
            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Angaben gemäß § 5 TMG</h2>
              <p><strong>Jimmy UG (haftungsbeschränkt)</strong></p>
              <p>Adrian-von-Riedl-Str. 34<br />86669 Königsmoos<br />Deutschland</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Geschäftsführung</h2>
              <p>Christina Hammerer</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Gründung</h2>
              <p>05.09.2024</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Registereintrag</h2>
              <p>Eintragung im Handelsregister<br />Registergericht: Amtsgericht Ingolstadt<br />Handelsregisternummer: HRB 11954</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE450300772</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Steuernummer</h2>
              <p>124/129/70029</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Kontakt</h2>
              <p>
                Telefon: <a className="underline underline-offset-4 hover:opacity-90" href="tel:+4915157952359">+49 151 57952359</a><br />
                E-Mail: <a className="underline underline-offset-4 hover:opacity-90" href="mailto:kontakt@jimmy-marken.de">kontakt@jimmy-marken.de</a>
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>Christina Hammerer<br />Adrian-von-Riedl-Str. 34<br />86669 Königsmoos</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-foreground">Haftungsausschluss</h2>
              <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
            </section>
          </article>

          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              legalName: "Jimmy UG (haftungsbeschränkt)",
              name: "Jimmy UG (haftungsbeschränkt)",
              foundingDate: "2024-09-05",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Adrian-von-Riedl-Str. 34",
                postalCode: "86669",
                addressLocality: "Königsmoos",
                addressCountry: "DE",
              },
              vatID: "DE450300772",
              telephone: "+49 151 57952359",
              email: "kontakt@jimmy-marken.de",
              url: typeof window !== 'undefined' ? window.location.origin : undefined,
            })}
          </script>
        </div>
      </section>
    </main>
  );
};

export default Impressum;
