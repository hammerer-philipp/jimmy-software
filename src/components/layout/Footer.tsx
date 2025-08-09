import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/09782ad4-4aa3-450b-8be5-185a9c24f0aa.png"
              alt="Jimmy Software Logo"
              className="h-8 w-auto"
              loading="lazy"
            />
            <span className="font-helvetica text-primary text-base md:text-lg font-semibold">Jimmy Software</span>
          </div>
          <p className="text-sm text-muted-foreground">So einfach war es noch nie</p>
        </div>
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © 2025 Jimmy Software – Entwickelt mit ❤️ in Bayern.
        </p>
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram />
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
            <span aria-hidden="true">•</span>
            <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;