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
    title: "GCAP : l’Inde annonce s’intéresser au programme 6G britannique tout en menant des négociations avec Paris",
    description: "Depuis plus d’un mois, New Delhi multiplie les signaux vers Paris. Le 21 janvier, le chef d’état‑major de la Force aérienne indienne IAF et Dassault Aviation ont lancé des discussions directes",
    source: "MetaDefense",
    sourceUrl: "https://meta-defense.fr/2026/03/20/inde-gcap-scaf-rafale-cooperation-2026/",
    date: "2026-03",
    tags: ["6G", "Télécoms", "Innovation"],
    category: "infrastructure",
  },
  {
    id: "tw-2",
    title: "La 6G promet bien plus que de faire exploser les débits",
    description: "Qualcomm dévoile sa stratégie pour la 6G, dont le déploiement commercial arrive à grands pas. Une nouvelle génération qui, vous allez le voir, ne se contentera pas d’être simplement plus rapide.",
    source: "01net",
    sourceUrl: "https://www.01net.com/actualites/6g-promet-bien-plus-que-faire-exploser-debits.html",
    date: "2026-03",
    tags: ["6G", "Europe", "Recherche"],
    category: "infrastructure",
  },
  {
    id: "tw-3",
    title: "Samsung franchit une étape historique dans la course à la 6G",
    description: "La société sud-coréenne a en effet récemment annoncé un résultat très important dans la vérification d’une technologie qui pourrait s’avérer centrale dans le déploiement de réseaux cellulaires de sixième génération.",
    source: "COMPARATEL",
    sourceUrl: "https://www.comparatel.fr/actualites-et-conseils/samsung-franchit-une-etape-historique-dans-la-course-a-la-6g/",
    date: "2026-02",
    tags: ["6G", "satellite", "Réseaux intelligents"],
    category: "cloud",
  },
  {
    id: "tw-4",
    title: "La Chine intègre les technologies de fibre optique et sans fil, établissant un record de 512 Gbit/s et ouvrant la voie à la 6G.",
    description: "Le système optique-sans fil intégré atteint 512 Gbit/s, simulant la 6G et diffusant 86 canaux 8K en temps réel, soit plus de 10 fois la vitesse de la 5G actuelle.",
    source: "vietnamvn",
    sourceUrl: "https://www.vietnam.vn/fr/trung-quoc-hop-nhat-cap-quang-khong-day-lap-ky-luc-512-gbps-mo-duong-6g",
    date: "2026-02",
    tags: ["6G", "Fréquences THz", "Technologie"],
    category: "infrastructure",
  },
  {
    id: "tw-5",
    title: "Au MWC 2026, Anritsu et Qualcomm dévoilent la prochaine étape : la validation RF 7 GHz, première pierre de la 6G",
    description: "7 GHz : la bande passerelle vers l’avenir de la 6G. Anritsu et Qualcomm annoncent la validation RF de la bande 7 GHz, une étape cruciale pour les futurs réseaux mobiles ultra-rapides et à faible latence.",
    source: "Elecktormag",
    sourceUrl: "https://www.elektormagazine.fr/news/au-mwc-2026-anritsu-et-qualcomm-devoilent-la-prochaine-etape-la-validation-rf-7-ghz-premiere-pierre-de-la-6g",
    date: "2026-02",
    tags: ["6G", "Satellite", "Fréquence"],
    category: "infrastructure",
  },
  {
    id: "tw-6",
    title: "Ericsson met en avant ses collaborations sur la 6G lors du salon MWC.",
    description: "Ericsson a déclaré dans un communiqué collaborer avec plusieurs acteurs pour développer la prochaine génération de réseaux mobiles, la 6G, ...",
    source: "zonebourse",
    sourceUrl: "https://www.zonebourse.com/actualite-bourse/ericsson-met-en-avant-ses-collaborations-sur-la-6g-lors-du-salon-mwc-ce7e5fd2d18eff2c",
    date: "2026-03",
    tags: ["6G", "Sécurité", "Quantique"],
    category: "economique",
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
    name: "Twitter",
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
  economique: "Économique",
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
