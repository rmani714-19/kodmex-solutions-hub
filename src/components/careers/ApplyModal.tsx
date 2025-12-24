import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle, ShieldCheck } from "lucide-react";

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export const ApplyModal = ({ isOpen, onClose, jobTitle }: ApplyModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFileName, setResumeFileName] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Application Submitted!",
      description: "Thank you for applying to KodMeX. Our team will review your application and get back to you soon.",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setResumeFileName(null);
      onClose();
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeFileName(file.name);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Application Submitted!
            </h3>
            <p className="text-muted-foreground">
              Thank you for your interest in KodMeX. Our team will review your application and reach out soon.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Apply for {jobTitle}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="apply-name">Full Name *</Label>
            <Input
              id="apply-name"
              name="name"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-email">Email *</Label>
            <Input
              id="apply-email"
              name="email"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-phone">Phone (Optional)</Label>
            <Input
              id="apply-phone"
              name="phone"
              type="tel"
              placeholder="+91 9876543210"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-resume">Resume (PDF/DOC) *</Label>
            <div className="relative">
              <input
                id="apply-resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
                className="sr-only"
              />
              <label
                htmlFor="apply-resume"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-dashed border-border bg-secondary/30 cursor-pointer hover:bg-secondary/50 transition-colors"
              >
                <Upload className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {resumeFileName || "Upload your resume"}
                </span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-linkedin">LinkedIn / GitHub (Optional)</Label>
            <Input
              id="apply-linkedin"
              name="linkedin"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apply-message">Why KodMeX? (Optional)</Label>
            <Textarea
              id="apply-message"
              name="message"
              placeholder="Tell us why you want to join KodMeX..."
              rows={3}
            />
          </div>

          <div className="flex items-start gap-2 text-xs text-muted-foreground bg-secondary/30 p-3 rounded-lg">
            <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              Candidate data is handled securely and used only for recruitment purposes.
            </span>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Apply to Build High-End Applications"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
