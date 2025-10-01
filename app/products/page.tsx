import { PageLayout } from "@/components/shared/page-layout"
import { ProductsHero } from "@/components/products/products-hero"
import { TradingInstruments } from "@/components/products/trading-instruments"
import { ReadyToTrade } from "@/components/products/ready-to-trade"

export default function ProductsPage() {
  return (
    <PageLayout>
      <ProductsHero />
      <TradingInstruments />
      <ReadyToTrade />
    </PageLayout>
  )
}
