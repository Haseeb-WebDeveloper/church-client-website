import { HomeSection } from "@/components/layout/home-section";
import { ServicesSection } from "@/components/layout/services-section";
import { PastorSection } from "@/components/layout/pastor-section";
import { GroupsSection } from "@/components/layout/groups-section";
import { AboutSection } from "@/components/layout/about-section";
import { MinistrySection } from "@/components/layout/ministry-section";
import { PrayerSection } from "@/components/layout/prayer-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <MinistrySection />
      <PastorSection />
      <GroupsSection />
      <PrayerSection />
      <Footer />
    </>
  );
}
