import { useEffect } from "react";

const Datenschutz = () => {
  useEffect(() => {
    document.title = "Datenschutzerklärung | Jimmy Software";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Datenschutzerklärung der Jimmy UG (haftungsbeschränkt) – Informationen zur Erhebung, Verarbeitung, Weitergabe und Ihren Rechten (DSGVO).";
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
          <h1 className="text-3xl md:text-4xl font-semibold">Datenschutzerklärung</h1>
          <article className="space-y-8 text-muted-foreground leading-relaxed max-w-3xl">
            <section aria-labelledby="verantwortliche-stelle">
              <h2 id="verantwortliche-stelle" className="text-xl md:text-2xl font-semibold">Verantwortliche Stelle</h2>
              <address className="not-italic">
                <p>Jimmy UG (haftungsbeschränkt)</p>
                <p>Adrian-von-Riedl-Str. 34</p>
                <p>86669 Königsmoos</p>
                <p>E-Mail: <a href="mailto:kontakt@jimmy-marken.de">kontakt@jimmy-marken.de</a></p>
              </address>
            </section>
            <hr className="my-6 border-border" aria-hidden="true" />
            <section aria-labelledby="sec-1">
              <h2 id="sec-1" className="text-xl md:text-2xl font-semibold">1. Allgemeines</h2>
              <p>Der Schutz Ihrer personenbezogenen Daten ist uns sehr wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            </section>
            <section aria-labelledby="sec-2">
              <h2 id="sec-2" className="text-xl md:text-2xl font-semibold">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
              <p>Personenbezogene Daten erheben wir nur, wenn Sie uns diese freiwillig mitteilen, etwa über unser Kontaktformular, bei der Newsletter-Anmeldung oder bei der Buchung von Kursangeboten. Dabei verarbeiten wir insbesondere Ihre E-Mail-Adresse.</p>
            </section>
            <section aria-labelledby="sec-3">
              <h2 id="sec-3" className="text-xl md:text-2xl font-semibold">3. Zweck der Datenverarbeitung</h2>
              <p>Die von Ihnen bereitgestellten Daten verwenden wir zum Zweck der Kommunikation mit Ihnen, zur Bearbeitung Ihrer Anfragen, zum Versand unseres Newsletters sowie zur Information über unsere Angebote. Google Meet wird ausschließlich zur Durchführung von Videokonferenzen und zur Kommunikation mit Ihnen genutzt.</p>
            </section>
            <section aria-labelledby="sec-4">
              <h2 id="sec-4" className="text-xl md:text-2xl font-semibold">4. Rechtsgrundlage der Verarbeitung</h2>
              <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO sowie zur Erfüllung vorvertraglicher Maßnahmen oder zur Wahrung berechtigter Interessen gemäß Art. 6 Abs. 1 lit. b und f DSGVO.</p>
            </section>
            <section aria-labelledby="sec-5">
              <h2 id="sec-5" className="text-xl md:text-2xl font-semibold">5. Weitergabe von Daten an Dritte</h2>
              <p>Eine Weitergabe Ihrer personenbezogenen Daten erfolgt nur, soweit dies zur Vertragsabwicklung notwendig ist oder Sie ausdrücklich eingewilligt haben. Wir nutzen hierzu insbesondere folgende Dienstleister:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p><strong>HubSpot, Inc.</strong><br />Adresse USA: 25 First Street, Cambridge, MA 02141, USA<br />EU-Niederlassung: HubSpot Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland</p>
                  <p>Für die Nutzung von HubSpot wurde ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen. Damit stellen wir sicher, dass die Verarbeitung personenbezogener Daten durch HubSpot im Einklang mit der DSGVO erfolgt. Die Datenübermittlung in die USA erfolgt auf Grundlage der EU-Standardvertragsklauseln (SCC). Bitte beachten Sie, dass bei der Übermittlung in die USA trotz SCC ein Restrisiko nicht vollständig ausgeschlossen werden kann. Weitere Informationen und die Datenschutzerklärung von HubSpot finden Sie hier: <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noreferrer">https://legal.hubspot.com/privacy-policy</a></p>
                </li>
                <li>
                  <p><strong>Strato AG</strong><br />Pascalstraße 10, 10587 Berlin, Deutschland</p>
                  <p>Strato stellt unser Webhosting bereit und verarbeitet Daten auf Grundlage eines Auftragsverarbeitungsvertrags.</p>
                </li>
                <li>
                  <p><strong>Google LLC (Google Meet, Google Calendar)</strong><br />Adresse USA: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />EU-Niederlassung: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</p>
                  <p>Wir nutzen Google Meet ausschließlich zur Durchführung von Videokonferenzen und Google Calendar zur Terminverwaltung. Die Datenverarbeitung erfolgt unter Einhaltung der EU-Standardvertragsklauseln. Weitere Informationen finden Sie hier: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">https://policies.google.com/privacy</a></p>
                </li>
              </ul>
            </section>
            <section aria-labelledby="sec-6">
              <h2 id="sec-6" className="text-xl md:text-2xl font-semibold">6. Dauer der Speicherung</h2>
              <p>Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder Sie Ihre Einwilligung nicht widerrufen haben. Beispielsweise werden Kontaktdaten für die Dauer der Geschäftsbeziehung und bis zu drei Jahre danach gespeichert, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
            </section>
            <section aria-labelledby="sec-7">
              <h2 id="sec-7" className="text-xl md:text-2xl font-semibold">7. Einwilligung und Widerruf</h2>
              <p>Die Anmeldung zu unserem Newsletter und unseren Kursangeboten erfolgt über Checkboxen mit anschließender Bestätigung via Double-Opt-In-E-Mail. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B. durch eine E-Mail an <a href="mailto:kontakt@jimmy-marken.de">kontakt@jimmy-marken.de</a>.</p>
            </section>
            <section aria-labelledby="sec-8">
              <h2 id="sec-8" className="text-xl md:text-2xl font-semibold">8. Ihre Rechte</h2>
              <p>Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Zudem können Sie der Verarbeitung widersprechen oder eine Datenübertragbarkeit verlangen. Sie können Ihre Einwilligung jederzeit widerrufen. Zusätzlich haben Sie das Recht, eine Beschwerde bei der zuständigen Datenschutzaufsichtsbehörde einzureichen. Für Fragen oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:kontakt@jimmy-marken.de">kontakt@jimmy-marken.de</a>.</p>
            </section>
            <section aria-labelledby="sec-9">
              <h2 id="sec-9" className="text-xl md:text-2xl font-semibold">9. Sicherheit</h2>
              <p>Unsere Website nutzt eine SSL-Verschlüsselung zum Schutz Ihrer Daten vor unbefugtem Zugriff.</p>
            </section>
            <section aria-labelledby="sec-10">
              <h2 id="sec-10" className="text-xl md:text-2xl font-semibold">10. Cookies</h2>
              <p>Unsere Website verwendet keine Cookies.</p>
            </section>
            <section aria-labelledby="sec-11">
              <h2 id="sec-11" className="text-xl md:text-2xl font-semibold">11. Externe Links</h2>
              <p>Auf unserer Website finden Sie Links zu sozialen Netzwerken wie LinkedIn und Instagram. Diese Links sind einfache Verweise, es erfolgt keine automatische Datenübermittlung beim Anklicken. Für den Inhalt und die Datenschutzpraktiken dieser externen Seiten übernehmen wir keine Verantwortung.</p>
            </section>
            <section aria-labelledby="sec-12">
              <h2 id="sec-12" className="text-xl md:text-2xl font-semibold">12. Videokonferenzen</h2>
              <p>Wir nutzen Google Meet ausschließlich für Videokonferenzen. Es gelten die Datenschutzbestimmungen von Google.</p>
            </section>
            <section aria-labelledby="sec-13">
              <h2 id="sec-13" className="text-xl md:text-2xl font-semibold">13. Aktualität und Änderungen der Datenschutzerklärung</h2>
              <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand August 2025. Wir behalten uns vor, die Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte rechtliche oder technische Rahmenbedingungen anzupassen. Die jeweils aktuelle Version ist auf unserer Website jederzeit einsehbar. Bitte informieren Sie sich regelmäßig über den Inhalt der Datenschutzerklärung.</p>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Datenschutz;
