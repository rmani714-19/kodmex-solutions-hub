import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Gem } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver exceptional software solutions that empower businesses to achieve their digital transformation goals through innovation, quality, and reliability.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To become the most trusted software development partner for enterprises worldwide, known for our technical excellence and commitment to client success.",
  },
  {
    icon: Gem,
    title: "Our Values",
    description: "Quality, transparency, innovation, and scalability form the foundation of everything we do. We believe in building lasting partnerships through trust and exceptional delivery.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
              About <span className="gradient-text">KodMex</span>
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Engineering premium software solutions for the modern enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  KodMex was founded with a simple yet powerful vision: to bridge the gap between 
                  enterprise-grade software development and accessible, transparent collaboration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Based in India with a global delivery model, we combine technical expertise with 
                  a deep understanding of business needs to create software that truly makes a difference.
                </p>
              </div>
              <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary-foreground">K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="p-8 rounded-2xl bg-card border border-border text-center opacity-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Clean Architecture <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe in building software that's not just functional, but maintainable, 
              scalable, and elegant. Our clean architecture approach ensures your codebase 
              remains a valuable asset as your business grows.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {["Modular Design", "Test-Driven Development", "CI/CD Pipeline"].map((item, index) => (
                <div 
                  key={item}
                  className="p-6 rounded-xl bg-secondary/50 text-foreground font-medium opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
