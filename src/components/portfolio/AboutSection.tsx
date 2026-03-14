import { Check, Globe, MapPin, User } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="apropos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              À propos de <span className="text-gradient">moi</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez mon parcours et mes motivations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Bio */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mon profil</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {personalInfo.bio}
                  </p>
                </div>
              </div>

              {/* Location & Contact */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Localisation</h3>
                  <p className="text-muted-foreground">{personalInfo.location}</p>
                </div>
              </div>

              {/* Languages */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Langues</h3>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.languages.map((lang) => (
                      <span
                        key={lang.name}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                      >
                        {lang.name} ({lang.level})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
              <h3 className="text-xl font-semibold mb-6">Mes points forts</h3>
              <div className="space-y-4">
                {personalInfo.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Quick info */}
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Âge</div>
                  <div className="font-semibold">20 ans</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Statut</div>
                  <div className="font-semibold">Célibataire</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Permis</div>
                  <div className="font-semibold">B & A2</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Mobilité</div>
                  <div className="font-semibold">Île-de-France</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
