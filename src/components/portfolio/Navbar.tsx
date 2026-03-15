import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#veille", label: "Veille" },
  { href: "#e5", label: "E5" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#accueil" className="font-bold text-xl text-gradient">
            {personalInfo.name.split(" ")[0]}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Changer le thème"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              asChild
              size="sm"
              className="hidden md:flex bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <a href={personalInfo.cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                CV
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="sm"
              className="mt-2 bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <a href={personalInfo.cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
