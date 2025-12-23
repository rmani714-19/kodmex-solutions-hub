import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export const StickyEnquiryButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        variant="hero"
        size="lg"
        onClick={onClick}
        className="rounded-full shadow-2xl animate-glow-pulse"
      >
        <MessageSquare size={20} />
        <span className="hidden sm:inline">Enquiry Now</span>
      </Button>
    </div>
  );
};
