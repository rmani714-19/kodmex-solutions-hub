import { Shield, Zap, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Coding",
    description: "Industry-standard security practices embedded in every line of code we write.",
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling millions of users effortlessly.",
  },
  {
    icon: Users,
    title: "Transparent Communication",
    description: "Regular updates and clear documentation throughout the development process.",
  },
  {
    icon: Award,
    title: "Enterprise Standards",
    description: "Following best practices and coding standards used by Fortune 500 companies.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="gradient-text">KodMex</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just build software – we engineer solutions that drive your business forward. 
              Our commitment to quality, scalability, and innovation sets us apart.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="p-8 rounded-2xl bg-card border border-border text-center opacity-0 animate-scale-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
