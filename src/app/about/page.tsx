import { AboutHero } from "@/components/pages/about/about-hero";
import { AboutStats } from "@/components/pages/about/about-stats";
import { AboutHistory } from "@/components/pages/about/about-history";
import { StatementOfFaith } from "@/components/pages/about/statement-of-faith";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutHistory />
      <StatementOfFaith />
      <Footer />
    </>
  );
} 