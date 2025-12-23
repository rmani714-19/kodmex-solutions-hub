import { ReactNode, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { EnquiryModal } from "@/components/EnquiryModal";
import { StickyEnquiryButton } from "@/components/StickyEnquiryButton";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onEnquiryClick={() => setIsEnquiryOpen(true)} />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
      <StickyEnquiryButton onClick={() => setIsEnquiryOpen(true)} />
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </div>
  );
};
