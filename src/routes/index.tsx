import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { GoogleProFeaturesSection } from "@/components/landing/GoogleProFeaturesSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { TransformationSection } from "@/components/landing/TransformationSection";
import { WhatIsGuideSection } from "@/components/landing/WhatIsGuideSection";
import { ConnectedJourneySection } from "@/components/landing/ConnectedJourneySection";
import { FeatureDeepDivesSection } from "@/components/landing/FeatureDeepDivesSection";
import { InteractiveProductMomentSection } from "@/components/landing/InteractiveProductMomentSection";
import { AudienceRolesSection } from "@/components/landing/AudienceRolesSection";
import { BonusRevealSection } from "@/components/landing/BonusRevealSection";
import { OfferStackSection } from "@/components/landing/OfferStackSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col antialiased selection:bg-primary/20 selection:text-primary pb-16 md:pb-0">
      {/* 0. Top Navigation Bar */}
      <Navbar />

      {/* 1. HERO SECTION (Above the fold clarity for Google Pro 18-Month Bundle) */}
      <HeroSection />

      {/* 2. GOOGLE PRO 9-TOOL SUITE (Direct Match to Campaign Flyer Design) */}
      <GoogleProFeaturesSection />

      {/* 3. THE REAL PROBLEM (Human, practical workplace friction with AI) */}
      <ProblemSection />

      {/* 4. THE SHIFT & 7-STAGE TRANSFORMATION (Methodology & Golden Rule) */}
      <TransformationSection />

      {/* 5. WHAT IS NUX GROWTH AI GUIDE? (Interactive digital workbench vs static PDF) */}
      <WhatIsGuideSection />

      {/* 6. THE CONNECTED GUIDE EXPERIENCE (LEARN -> EXPLORE -> BUILD -> WORK -> SAVE -> REUSE) */}
      <ConnectedJourneySection />

      {/* 7. FEATURE DEEP DIVES (6 Core Verified Pillars) */}
      <FeatureDeepDivesSection />

      {/* 8. THE "THIS ISN'T JUST AN EBOOK" INTERACTIVE MOMENT (Live Before/After & 4 Variants) */}
      <InteractiveProductMomentSection />

      {/* 9. WHO IT IS FOR (8 Verified Practical Workplace Roles) */}
      <AudienceRolesSection />

      {/* 10. THE BONUS REVEAL (3D Book Mockup & 4 Value Pillars) */}
      <BonusRevealSection />

      {/* 11. OFFER STACK (Primary Google Pro 18-Month Subscription + Verified Guide Deliverables) */}
      <OfferStackSection />

      {/* 12. OBJECTIONS & FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* 13. FINAL HIGH-IMPACT TRANSFORMATION CTA */}
      <FinalCtaSection />

      {/* 14. EDITORIAL FOOTER & LEGAL DISCLOSURES */}
      <Footer />

      {/* 15. STICKY MOBILE CTA BAR */}
      <StickyMobileCta />
    </div>
  );
}
