import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, TrendingUp, Zap, FileCheck, BarChart3, Lock, Smartphone, Globe } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "eKYC Verification",
    description:
      "Secure Aadhaar and PAN verification with real-time document processing and instant verification badges.",
    badge: "Security",
  },
  {
    icon: Users,
    title: "Team Trading Mode",
    description:
      "Collaborate with shared capital, role-based access, trade assignments, and automated P&L distribution.",
    badge: "Collaboration",
  },
  {
    icon: TrendingUp,
    title: "Solo Trading",
    description:
      "Individual trading accounts with personal wallets, advanced analytics, and comprehensive portfolio management.",
    badge: "Individual",
  },
  {
    icon: Zap,
    title: "Broker API Integration",
    description: "Seamless integration with Zerodha, AngelOne, Upstox, and Likex for unified trading experience.",
    badge: "Integration",
  },
  {
    icon: BarChart3,
    title: "Strategy Tester",
    description: "Advanced backtesting with interactive charts, performance metrics, and risk analysis tools.",
    badge: "Analytics",
  },
  {
    icon: FileCheck,
    title: "Compliance & Security",
    description: "Bank-grade security with regulatory compliance, audit trails, and comprehensive risk management.",
    badge: "Compliance",
  },
  {
    icon: Lock,
    title: "Real-time Verification",
    description: "Instant document verification with AI-powered validation and automated approval workflows.",
    badge: "Verification",
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Full-featured mobile app with real-time notifications, touch ID, and offline chart analysis.",
    badge: "Mobile",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Access to international markets, forex, commodities, and cryptocurrency trading platforms.",
    badge: "Markets",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Why Choose Trading Patterns
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Advanced Trading Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Manage your trading account, take control of your investments with our comprehensive suite of professional
            trading tools and features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
