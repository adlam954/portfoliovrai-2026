import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} {personalInfo.name}. Tous droits réservés.
          </div>

          

          <nav className="flex gap-6">
            <a
              href="#accueil"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Accueil
            </a>
            <a
              href="#projets"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
