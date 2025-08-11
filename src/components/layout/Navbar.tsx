import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToId = (id: string) => {
    if (window.location.hash !== "#/") {
      window.location.hash = "#/";
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 hover-scale">
          <img
            src="/lovable-uploads/09782ad4-4aa3-450b-8be5-185a9c24f0aa.png"
            alt="Jimmy Software Logo"
            className="h-8 w-auto"
            loading="eager"
          />
          <span className="font-helvetica text-primary text-base md:text-lg font-semibold">Jimmy Software</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId('about'); }} className="story-link hover:text-foreground transition-colors">Über uns</a>
          <a href="#process" onClick={(e) => { e.preventDefault(); scrollToId('process'); }} className="story-link hover:text-foreground transition-colors">Ablauf</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }} className="story-link hover:text-foreground transition-colors">Kontakt</a>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="heroWhite" size="sm">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }} aria-label="Projekt starten">Projekt starten</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;