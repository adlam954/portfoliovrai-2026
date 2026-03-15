import { Star } from "lucide-react";
import { skills, skillCategories } from "@/data/portfolio-data";
import type { Skill } from "@/data/portfolio-data";

const categoryIcons: Record<string, string> = {
  frontend: "🎨",
  backend: "⚙️",
  devops: "🖥️",
  tools: "🔧",
  soft: "💡",
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm">{skill.name}</span>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 transition-colors ${
              i < skill.level
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="competences" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">compétences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies et savoir-faire que je maîtrise
          </p>
        </div>
        

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {Object.entries(skillCategories).map(([key, label]) => {
            const categorySkills = groupedSkills[key];
            if (!categorySkills || categorySkills.length === 0) return null;

            return (
              <div key={key}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{categoryIcons[key]}</span>
                  <h3 className="text-xl font-semibold">{label}</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Certifications */}
<div className="mt-20">
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
    Certifications
  </h3>

  <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">

    {/* PIX */}
    <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <img
        src="/assets/pix.png"
        alt="Certification PIX"
        className="h-16 mx-auto mb-4"
      />

      <h4 className="font-semibold text-lg mb-2">
        Certification PIX
      </h4>

      <p className="text-sm text-muted-foreground mb-4">
        Certification des compétences numériques
      </p>

      <p className="text-xs mb-4">
        Obtenue en 2026
      </p>

      <a
        href="/assets/pix.pdf"
        target="_blank"
        className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
      >
        Voir la certification
      </a>
    </div>


    {/* Coursera */}
    <div className="bg-card p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <img
        src="/assets/coursera html,css,java.png"
        alt="Certification Coursera"
        className="h-16 mx-auto mb-4"
      />

      <h4 className="font-semibold text-lg mb-2">
        Certification Coursera
      </h4>

      <p className="text-sm text-muted-foreground mb-4">
        HTML, CSS et JavaScript
      </p>

      <p className="text-xs mb-4">
        Obtenue en 2024
      </p>

    </div>

  </div>
</div>
    </section>
  );
  
}
