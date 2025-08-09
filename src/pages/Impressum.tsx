import { useEffect } from "react";

const Impressum = () => {
  useEffect(() => {
    document.title = "Impressum | Jimmy Software";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Impressum von Jimmy Software – Kontakt und Anbieterkennzeichnung.";
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
          <h1 className="text-3xl md:text-4xl font-semibold">Impressum</h1>
          <article className="prose prose-invert max-w-none">
            <p><strong>Jimmy Software</strong></p>
            <p>Musterstraße 1<br />12345 Musterstadt<br />Deutschland</p>
            <p>E-Mail: <a href="mailto:hello@jimmy.software">hello@jimmy.software</a></p>
            <p>Vertretungsberechtigt: Philipp</p>
            <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Philipp</p>
            <p>USt-IdNr.: wird nachgereicht</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Impressum;
