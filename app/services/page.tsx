import { PageLayout } from "@/components/shared/page-layout"
import { ServicesHero } from "@/components/services/services-hero"
import { WhyChooseSection } from "@/components/services/why-choose-section"
import { TradingSolutions } from "@/components/services/trading-solutions"

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesHero />
      <WhyChooseSection />
      <TradingSolutions />
    </PageLayout>
  )
}
