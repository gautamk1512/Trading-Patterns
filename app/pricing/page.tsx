import { PageLayout } from "@/components/shared/page-layout"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { NewsletterSection } from "@/components/pricing/newsletter-section"
import { AppDownload } from "@/components/pricing/app-download"

export default function PricingPage() {
  return (
    <PageLayout>
      <PricingHero />
      <PricingPlans />
      <NewsletterSection />
      <AppDownload />
    </PageLayout>
  )
}
