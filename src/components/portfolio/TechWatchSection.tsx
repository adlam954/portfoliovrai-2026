import { Rss, ExternalLink, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface TechWatchItem {
  id: string;
  title: string;
  description: string;
  source: string;
  sourceUrl: string;
  date: string;
  tags: string[];
  category: "infrastructure" | "security" | "development" | "cloud" | "ai" | "other";
}

export interface TechWatchTool {
  name: string;
  description: string;
  url: string;
  icon: string;
}

export const techWatchItems: TechWatchItem[] = [
  {
    id: "tw-1",
    title: "6G : La prochaine révolution des télécommunications",
    description: "La 6G promet des débits jusqu'à 1 Tbps, une latence inférieure à 0,1 ms et une intégration native de l'IA dans les réseaux.",
    source: "ARCEP",
    sourceUrl: "https://www.arcep.fr",
    date: "2025-01",
    tags: ["6G", "Télécoms", "Innovation"],
    category: "infrastructure",
  },
  {
    id: "tw-2",
    title: "L'Europe lance son programme de recherche 6G",
    description: "Hexa-X-II, le projet phare européen, vise à positionner l'Europe comme leader mondial de la 6G d'ici 2030.",
    source: "Commission Européenne",
    sourceUrl: "https://digital-strategy.ec.europa.eu",
    date: "2024-12",
    tags: ["6G", "Europe", "Recherche"],
    category: "infrastructure",
  },
  {
    id: "tw-3",
    title: "6G et Intelligence Artificielle : une synergie prometteuse",
    description: "L'IA sera au cœur de la 6G pour optimiser les réseaux en temps réel, prédire les pannes et personnaliser les services.",
    source: "IEEE Spectrum",
    sourceUrl: "https://spectrum.ieee.org",
    date: "2024-11",
    tags: ["6G", "IA", "Réseaux intelligents"],
    category: "ai",
  },
  {
    id: "tw-4",
    title: "Les bandes de fréquences THz pour la 6G",
    description: "L'utilisation des fréquences térahertz (100 GHz - 10 THz) permettra des débits sans précédent mais pose des défis techniques.",
    source: "Techniques de l'Ingénieur",
    sourceUrl: "https://www.techniques-ingenieur.fr",
    date: "2024-10",
    tags: ["6G", "Fréquences THz", "Technologie"],
    category: "infrastructure",
  },
  {
    id: "tw-5",
    title: "6G : Vers une couverture mondiale par satellite",
    description: "La 6G intégrera les réseaux terrestres et satellites pour une connectivité ubiquitaire, y compris dans les zones reculées.",
    source: "Le Monde Informatique",
    sourceUrl: "https://www.lemondeinformatique.fr",
    date: "2024-09",
    tags: ["6G", "Satellite", "Couverture mondiale"],
    category: "cloud",
  },
  {
    id: "tw-6",
    title: "Sécurité et 6G : les enjeux de la cryptographie quantique",
    description: "La 6G devra intégrer des mécanismes de sécurité post-quantique pour résister aux futures menaces des ordinateurs quantiques.",
    source: "ANSSI",
    sourceUrl: "https://www.ssi.gouv.fr",
    date: "2024-08",
    tags: ["6G", "Sécurité", "Quantique"],
    category: "security",
  },
];

export const techWatchTools: TechWatchTool[] = [
  {
    name: "Feedly",
    description: "Flux RSS sur les télécoms et la 6G",
    url: "https://feedly.com",
    icon: "📰",
  },
  {
    name: "IEEE Spectrum",
    description: "Publications scientifiques sur les réseaux",
    url: "https://spectrum.ieee.org",
    icon: "🔬",
  },
  {
    name: "Twitt",
    description: "Réseau social d'information en temps réel.",
    url: "https://twitter.com",
    icon: "🐦",
  },
  {
    name: "Google Alerts",
    description: "Alertes Google sur les sujets de 6G",
    url: "https://www.google.com/alerts",
    icon: "📡",
  },
];

const categoryColors: Record<string, string> = {
  infrastructure: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  security: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  development: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  cloud: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  ai: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  other: "bg-muted text-muted-foreground border-border",
};

const categoryLabels: Record<string, string> = {
  infrastructure: "Infrastructure",
  security: "Sécurité",
  development: "Développement",
  cloud: "Cloud",
  ai: "Intelligence Artificielle",
  other: "Autre",
};

export function TechWatchSection() {
  return (
    <section id="veille" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Rss className="w-4 h-4" />
            <span className="text-sm font-medium">Veille Technologique</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            L'Avenir de la 6G
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ma veille technologique porte sur la 6G, la prochaine génération de réseaux mobiles 
            attendue vers 2030, qui promet des avancées majeures en termes de débit, latence et intelligence réseau.
          </p>
        </div>

        {/* Outils de veille */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Mes outils de veille
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techWatchTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-2">{tool.icon}</div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tool.name}
                </h4>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Articles de veille */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Sujets récents
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techWatchItems.map((item) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={categoryColors[item.category]}
                    >
                      {categoryLabels[item.category]}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <span>{item.source}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
