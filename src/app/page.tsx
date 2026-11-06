import { FinalCtaSection, HomeFaqSection } from "@/features/home/components/closing-sections";
import { AboutPreviewSection, ServicesSection } from "@/features/home/components/growth-sections";
import { HeroSection } from "@/features/home/components/hero-section";
import { ImpactStatsSection } from "@/features/home/components/impact-stats-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStatsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <HomeFaqSection />
      <FinalCtaSection />
    </>
  );
}
