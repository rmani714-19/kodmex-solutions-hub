import { Layout } from "@/components/layout/Layout";

const techCategories = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-500",
    techs: [
      { name: "React", description: "Building interactive UIs with modern hooks and patterns" },
      { name: "Angular", description: "Enterprise-grade framework for complex applications" },
      { name: "TypeScript", description: "Type-safe JavaScript for robust development" },
      { name: "Next.js", description: "Full-stack React framework for production" },
    ],
  },
  {
    name: "Backend",
    color: "from-green-500 to-emerald-500",
    techs: [
      { name: "Java", description: "Enterprise-standard language for backend systems" },
      { name: "Spring Boot", description: "Microservices framework for Java applications" },
      { name: "Node.js", description: "JavaScript runtime for scalable network applications" },
      { name: "Python", description: "Versatile language for APIs and data processing" },
    ],
  },
  {
    name: "Mobile",
    color: "from-purple-500 to-pink-500",
    techs: [
      { name: "React Native", description: "Cross-platform mobile with React" },
      { name: "Flutter", description: "Google's UI toolkit for mobile, web, and desktop" },
      { name: "Swift", description: "Native iOS development" },
      { name: "Kotlin", description: "Modern language for Android development" },
    ],
  },
  {
    name: "Database",
    color: "from-orange-500 to-red-500",
    techs: [
      { name: "PostgreSQL", description: "Advanced open-source relational database" },
      { name: "MySQL", description: "Popular relational database system" },
      { name: "MongoDB", description: "NoSQL database for flexible data models" },
      { name: "Redis", description: "In-memory data structure store and cache" },
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "from-indigo-500 to-blue-500",
    techs: [
      { name: "AWS", description: "Amazon's comprehensive cloud platform" },
      { name: "Azure", description: "Microsoft's cloud computing service" },
      { name: "Docker", description: "Container platform for consistent deployments" },
      { name: "Kubernetes", description: "Container orchestration at scale" },
    ],
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
              Technology <span className="gradient-text">Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We leverage the latest technologies to build robust, scalable solutions
            </p>
          </div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {techCategories.map((category, categoryIndex) => (
              <div 
                key={category.name}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.techs.map((tech, techIndex) => (
                    <div 
                      key={tech.name}
                      className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our team can help you choose the right technology stack for your specific requirements and business goals.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
