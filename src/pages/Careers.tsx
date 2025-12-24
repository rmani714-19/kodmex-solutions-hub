import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Target, 
  Users, 
  ShieldCheck, 
  Layers, 
  MessageSquare,
  ShoppingCart,
  Store,
  Globe,
  Smartphone,
  Cog,
  ArrowRight,
  CheckCircle2,
  Heart,
  Sparkles
} from "lucide-react";

const CareersPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Build High-End Applications with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                KodMeX
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We have successfully delivered e-commerce platforms, store applications, 
              web and Android applications for growing businesses and enterprises.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/careers/jobs">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#our-work">
                  Our Work & Culture
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Delivery Expertise Section */}
      <section id="our-work" className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Build at KodMeX
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every solution is designed with scalability, performance, and long-term maintainability in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: ShoppingCart,
                title: "E-commerce Solutions",
                description: "Full-featured platforms for small and medium businesses"
              },
              {
                icon: Store,
                title: "Store Applications",
                description: "Retail and store management applications"
              },
              {
                icon: Globe,
                title: "Web Applications",
                description: "Scalable web applications for enterprise clients"
              },
              {
                icon: Smartphone,
                title: "Android Applications",
                description: "Mobile applications with real-world usage"
              },
              {
                icon: Cog,
                title: "Business Automation",
                description: "Custom workflow automation systems"
              },
              {
                icon: Layers,
                title: "Enterprise Software",
                description: "Large-scale enterprise-grade solutions"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work at KodMeX */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Work at KodMeX?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join a team that's passionate about building software that makes a real difference 
                for businesses around the world.
              </p>
              
              <div className="space-y-4">
                {[
                  "Work on real, production-grade applications",
                  "Exposure to e-commerce, retail, and enterprise systems",
                  "Strong focus on clean architecture and quality delivery",
                  "Opportunity to build high-end, scalable applications",
                  "Transparent communication and ownership-driven culture"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { icon: Rocket, label: "Innovation", value: "First" },
                  { icon: Target, label: "Delivery", value: "Quality" },
                  { icon: Users, label: "Team", value: "Culture" },
                  { icon: ShieldCheck, label: "Security", value: "Focus" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-card border border-border text-center"
                  >
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at KodMeX */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Life at KodMeX</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Products with Real Impact
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              KodMeX believes in building products that create real business impact. Our teams work 
              closely with clients to understand requirements, design scalable systems, and deliver 
              high-quality applications. We value transparency, ownership, and continuous learning.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: "Remote First", description: "Work from anywhere" },
                { label: "Learning Budget", description: "Grow your skills" },
                { label: "Real Projects", description: "Meaningful work" }
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="text-xl font-semibold text-foreground mb-2">{item.label}</div>
                  <div className="text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Confidence */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 rounded-3xl" />
              
              <div className="relative z-10 text-center">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Trusted by Growing Businesses
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Clients trust KodMeX because we consistently deliver high-end applications 
                  across e-commerce, retail, web, and mobile platforms with a strong focus 
                  on quality, scalability, and long-term support.
                </p>
                
                <Button asChild variant="hero" size="lg">
                  <Link to="/careers/jobs">
                    Join Our Team
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareersPage;
