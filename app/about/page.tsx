import { PageLayout } from "@/components/shared/page-layout"
import { AboutHero } from "@/components/about/about-hero"
import { PlatformOverview } from "@/components/about/platform-overview"
import { TradingInstruments } from "@/components/products/trading-instruments"
import { TradingSolutions } from "@/components/services/trading-solutions"
import { TeamSection } from "@/components/team/team-section"

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <PlatformOverview />
      <TradingInstruments />
      <TradingSolutions />
      <TeamSection />
    </PageLayout>
  )
}
