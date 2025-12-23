import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { CTASection } from "@/components/home/CTASection";
import { EnquiryModal } from "@/components/EnquiryModal";

const Index = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <Layout>
        <HeroSection onEnquiryClick={() => setIsEnquiryOpen(true)} />
        <ServicesSection />
        <WhyChooseSection />
        <TechStackSection />
        <CTASection onEnquiryClick={() => setIsEnquiryOpen(true)} />
      </Layout>
      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
};

export default Index;
