import { Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-border">
      <div className="container py-10 flex flex-col gap-8">
        {/* Top row: Brand left, socials right */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/lovable-uploads/09782ad4-4aa3-450b-8be5-185a9c24f0aa.png"
              alt="Jimmy Software Logo"
              className="h-8 w-auto"
              loading="lazy"
            />
            <div className="flex flex-col">
              <span className="font-helvetica text-primary text-base md:text-lg font-semibold">Jimmy Software</span>
              <span className="text-xs text-muted-foreground">So einfach war es noch nie</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hammerer-philipp"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/philipp_hammerer/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram />
            </a>
          </div>
        </div>

        {/* Bottom row: Copyright left, legal links right */}
        <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 Jimmy Software – Entwickelt mit ❤️ in Bayern.</p>
          <div className="flex items-center gap-4">
            <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <span aria-hidden="true">•</span>
            <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;