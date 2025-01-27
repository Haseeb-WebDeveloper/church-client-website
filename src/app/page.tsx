import { HomeSection } from "@/components/layout/home-section";
import { ServicesSection } from "@/components/layout/services-section";
import { PastorSection } from "@/components/layout/pastor-section";
import { GroupsSection } from "@/components/layout/groups-section";
import { AboutSection } from "@/components/layout/about-section";
import { MinistrySection } from "@/components/layout/ministry-section";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <MinistrySection />
      <PastorSection />
      <GroupsSection />
    </>
  );
}
