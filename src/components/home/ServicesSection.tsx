import { Code, Smartphone, Palette, Server, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with React, Angular, and cutting-edge technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality for exceptional experiences.",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust backend systems with Java, Spring Boot, and Node.js for enterprise-grade performance.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud architecture on AWS and Azure with automated deployments and monitoring.",
  },
  {
    icon: Shield,
    title: "Enterprise Software",
    description: "Custom enterprise solutions with security-first approach and seamless integrations.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive software development services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
