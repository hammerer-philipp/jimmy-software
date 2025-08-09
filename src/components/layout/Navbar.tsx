import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/09782ad4-4aa3-450b-8be5-185a9c24f0aa.png"
            alt="Jimmy Software Logo"
            className="h-8 w-auto"
            loading="eager"
          />
          <span className="font-helvetica text-foreground text-base md:text-lg font-semibold">Jimmy Software</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Leistungen</a>
          <a href="#about" className="hover:text-foreground transition-colors">Über uns</a>
          <a href="#process" className="hover:text-foreground transition-colors">Ablauf</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Kontakt</a>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="heroWhite" size="sm">
            <a href="#contact" aria-label="Projekt starten">Projekt starten</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;