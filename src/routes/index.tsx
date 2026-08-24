import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
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

      {/* 1. HERO SECTION (Above the fold clarity) */}
      <HeroSection />

      {/* 2. THE REAL PROBLEM (Human, practical friction) */}
      <ProblemSection />

      {/* 3. THE SHIFT & 7-STAGE TRANSFORMATION (Methodology & Golden Rule) */}
      <TransformationSection />

      {/* 4. WHAT IS NUX GROWTH AI GUIDE? (Interactive digital guide & application) */}
      <WhatIsGuideSection />

      {/* 5. THE CONNECTED GUIDE EXPERIENCE (LEARN -> EXPLORE -> BUILD -> WORK -> SAVE -> REUSE) */}
      <ConnectedJourneySection />

      {/* 6. FEATURE DEEP DIVES (6 Core Verified Pillars) */}
      <FeatureDeepDivesSection />

      {/* 7. THE "THIS ISN'T JUST AN EBOOK" INTERACTIVE MOMENT (Live Before/After & 4 Variants) */}
      <InteractiveProductMomentSection />

      {/* 8. WHO IT IS FOR (8 Verified Practical Workplace Roles) */}
      <AudienceRolesSection />

      {/* 9. THE BONUS REVEAL (18-Month Subscription + Included Gift) */}
      <BonusRevealSection />

      {/* 10. OFFER STACK (Primary Subscription + Verified Guide Deliverables) */}
      <OfferStackSection />

      {/* 11. OBJECTIONS & FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* 12. FINAL HIGH-IMPACT TRANSFORMATION CTA */}
      <FinalCtaSection />

      {/* 13. EDITORIAL FOOTER & LEGAL DISCLOSURES */}
      <Footer />

      {/* 14. STICKY MOBILE CTA BAR */}
      <StickyMobileCta />
    </div>
  );
}
