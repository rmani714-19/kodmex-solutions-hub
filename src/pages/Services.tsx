import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Palette, Server, Cloud, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { EnquiryModal } from "@/components/EnquiryModal";

const services = [
  {
    icon: Code,
    title: "Web Application Development",
    description: "Modern, responsive web applications built with React, Angular, and cutting-edge technologies. We create single-page applications, progressive web apps, and enterprise portals.",
    features: ["React & Angular Development", "Progressive Web Apps", "E-commerce Solutions", "Enterprise Portals"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android. We use React Native and Flutter to deliver beautiful, performant mobile experiences.",
    features: ["iOS & Android Apps", "Cross-Platform Development", "App Store Optimization", "Push Notifications"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality. Our design process focuses on creating intuitive interfaces that users love.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"],
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Robust backend systems with Java, Spring Boot, and Node.js. We build scalable APIs and microservices architectures for enterprise performance.",
    features: ["RESTful APIs", "Microservices Architecture", "Database Design", "Third-party Integrations"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure on AWS and Azure. We help you migrate, optimize, and manage your cloud environment effectively.",
    features: ["AWS & Azure Deployment", "DevOps & CI/CD", "Container Orchestration", "Cloud Cost Optimization"],
  },
  {
    icon: Shield,
    title: "Enterprise Software",
    description: "Custom enterprise solutions with security-first approach. We build ERP systems, CRM platforms, and business automation tools.",
    features: ["Custom ERP Solutions", "CRM Development", "Business Process Automation", "Legacy Modernization"],
  },
];

const Services = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Comprehensive software development services tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" onClick={() => setIsEnquiryOpen(true)}>
                    Get Started
                    <ArrowRight size={18} />
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-card to-secondary border border-border flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </Layout>
  );
};

export default Services;
