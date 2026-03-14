import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { experiences, education } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon <span className="text-gradient">parcours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expériences professionnelles et formations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Experiences */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Expériences</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                    </div>

                    <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          <Calendar className="h-3 w-3" />
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-primary">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Formations</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-accent-foreground" />
                    </div>

                    <div className="bg-card rounded-xl p-6 border border-border shadow-card">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {edu.year}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium text-accent">{edu.school}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </span>
                      </div>

                      {edu.description && (
                        <p className="text-sm text-muted-foreground">{edu.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
