import { MinistryHero } from "@/components/pages/ministries/ministry-hero";
import { MinistryCards } from "@/components/pages/ministries/ministry-cards";
import { DonationSection } from "@/components/pages/ministries/donation-section";
import { LivestreamSection } from "@/components/pages/ministries/livestream-section";
import { Footer } from "@/components/layout/footer";

export default function MinistryPage() {
  return (
    <>
      <MinistryHero />
      <MinistryCards />
      <DonationSection />
      <LivestreamSection />
      <Footer />
    </>
  );
} 