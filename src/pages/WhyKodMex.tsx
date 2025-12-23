import { Layout } from "@/components/layout/Layout";
import { Shield, Zap, Users, Award, Clock, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Secure Coding Practices",
    description: "Security is embedded in our DNA. We follow OWASP guidelines, implement secure authentication, encrypt sensitive data, and conduct regular security audits.",
    points: ["OWASP Compliance", "Secure Authentication", "Data Encryption", "Regular Security Audits"],
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    description: "Built to grow with your business. Our microservices architecture and cloud-native approach ensure your application handles millions of users effortlessly.",
    points: ["Microservices Design", "Auto-scaling Infrastructure", "Load Balancing", "Performance Optimization"],
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "No surprises, no hidden agendas. We maintain clear communication channels, provide regular updates, and ensure you're always in the loop.",
    points: ["Weekly Progress Reports", "Dedicated Project Manager", "24/7 Slack Channel", "Clear Documentation"],
  },
  {
    icon: Award,
    title: "Enterprise Standards",
    description: "We follow the same coding standards and best practices used by Fortune 500 companies. Your codebase is a valuable asset, not technical debt.",
    points: ["Clean Code Practices", "Comprehensive Testing", "Code Reviews", "CI/CD Pipelines"],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" },
];

const WhyKodMex = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in">
              Why Choose <span className="gradient-text">KodMex</span>?
            </h1>
            <p className="text-xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We don't just build software – we engineer solutions that drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="p-8 rounded-2xl bg-card border border-border text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Reasons */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className={`grid lg:grid-cols-2 gap-12 items-center opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                    <reason.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{reason.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{reason.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {reason.points.map((point) => (
                      <div key={point} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-card to-secondary border border-border flex items-center justify-center">
                    <reason.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Our Development <span className="gradient-text">Process</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your needs" },
                { step: "02", title: "Planning", desc: "Architecture & timeline" },
                { step: "03", title: "Development", desc: "Agile sprints & reviews" },
                { step: "04", title: "Delivery", desc: "Launch & ongoing support" },
              ].map((item, index) => (
                <div 
                  key={item.step}
                  className="text-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyKodMex;
