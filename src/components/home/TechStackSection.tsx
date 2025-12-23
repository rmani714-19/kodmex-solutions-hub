const techStack = {
  frontend: ["React", "Angular", "TypeScript", "Next.js"],
  backend: ["Java", "Spring Boot", "Node.js", "Python"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  database: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  cloud: ["AWS", "Azure", "Docker", "Kubernetes"],
};

export const TechStackSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage the latest technologies to build robust, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Object.entries(techStack).map(([category, techs], categoryIndex) => (
            <div 
              key={category}
              className="p-6 rounded-2xl bg-card border border-border opacity-0 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div 
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-secondary/50 text-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
