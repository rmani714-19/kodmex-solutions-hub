import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { jobs } from "@/data/jobs";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowLeft,
  CheckCircle2,
  Layers,
  ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ApplyModal } from "@/components/careers/ApplyModal";

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  
  const job = jobs.find(j => j.id === id);
  
  if (!job) {
    return <Navigate to="/careers/jobs" replace />;
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="pt-28 lg:pt-36 pb-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/careers" className="hover:text-foreground transition-colors">
              Careers
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/careers/jobs" className="hover:text-foreground transition-colors">
              Jobs
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{job.title}</span>
          </div>
        </div>
      </section>

      {/* Job Header */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link
              to="/careers/jobs"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all positions
            </Link>
            
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    {job.title}
                  </h1>
                  <Badge variant="secondary">{job.department}</Badge>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    {job.experience}
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {job.employmentType}
                  </span>
                </div>
              </div>
              
              <Button variant="hero" size="lg" onClick={() => setIsApplyModalOpen(true)}>
                Apply for this Role
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Role Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Role Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </div>
                
                {/* Project Exposure */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Project Exposure</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.projectExposure.map((project, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                        <Layers className="w-4 h-4 mr-2" />
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Required Skills */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Required Technical Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Nice to Have */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Nice to Have</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.niceToHave.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="px-4 py-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* What We Offer */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">What KodMeX Offers</h2>
                  <ul className="space-y-3">
                    {job.whatWeOffer.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Ready to Apply?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Join our team and work on real, high-impact projects that power businesses worldwide.
                  </p>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => setIsApplyModalOpen(true)}
                  >
                    Apply for this Role
                  </Button>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-sm font-medium text-foreground mb-3">Share this position</h4>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(window.location.href);
                        }}
                      >
                        Copy Link
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Build High-End Applications?
            </h2>
            <p className="text-muted-foreground mb-8">
              Apply now and join a team that's passionate about quality, scalability, and real-world impact.
            </p>
            <Button variant="hero" size="xl" onClick={() => setIsApplyModalOpen(true)}>
              Apply to Build High-End Applications
            </Button>
          </div>
        </div>
      </section>

      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        jobTitle={job.title}
      />
    </Layout>
  );
};

export default JobDetailsPage;
