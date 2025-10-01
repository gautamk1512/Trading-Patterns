import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const instruments = [
  {
    icon: "₹",
    title: "FOREX",
    rating: 4.9,
    description: "Exchange",
    details: "EUR/USD, USD/JPY, GBP/USD, ETC",
    color: "bg-green-500",
  },
  {
    icon: "₿",
    title: "CRYPTO",
    rating: 4.8,
    description: "Exchange",
    details: "BTC/USD, ETH/USD, ETH/BTC, ETC",
    color: "bg-orange-500",
  },
  {
    icon: "⚡",
    title: "ENERGIES",
    rating: 4.5,
    description: "Exchange",
    details: "OIL, GAS, AND ALL ENERGIES",
    color: "bg-blue-500",
  },
  {
    icon: "📈",
    title: "STOCK",
    rating: 4.7,
    description: "Exchange",
    details: "APPLE, GOOGLE, FACEBOOK",
    color: "bg-purple-500",
  },
  {
    icon: "📊",
    title: "INDICES",
    rating: 4.6,
    description: "Exchange",
    details: "US30, UK100, EUR50",
    color: "bg-teal-500",
  },
  {
    icon: "🥇",
    title: "METALS",
    rating: 4.8,
    description: "Exchange",
    details: "GOLD, SILVER, AND MORE",
    color: "bg-yellow-500",
  },
]

export function TradingInstruments() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Trade our Product.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Search our Instruments. Check what interest you today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instruments.map((instrument, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${instrument.color} rounded-lg flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {instrument.icon}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{instrument.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{instrument.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{instrument.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{instrument.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
