import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Headphones,
  Users,
  Zap,
  Building2,
  Heart,
  UserCheck,
  Accessibility as Flexibility,
  Smartphone,
} from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Save & Security",
    description: "Bank-grade security with multi-layer encryption and regulatory compliance.",
    badge: "Security",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated relationship managers.",
    badge: "Support",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join our active trading community with expert insights and market discussions.",
    badge: "Community",
  },
  {
    icon: Zap,
    title: "Instant Exchange",
    description: "Lightning-fast order execution with minimal latency and maximum reliability.",
    badge: "Speed",
  },
  {
    icon: Building2,
    title: "Best Trading Company",
    description: "Award-winning platform trusted by over 2.5 million active traders worldwide.",
    badge: "Trust",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "98% customer satisfaction rate with personalized trading experiences.",
    badge: "Satisfaction",
  },
  {
    icon: UserCheck,
    title: "Expert Advisors",
    description: "Access to certified financial advisors and algorithmic trading strategies.",
    badge: "Expertise",
  },
  {
    icon: Flexibility,
    title: "Flexibility",
    description: "Customizable trading interface with advanced charting and analysis tools.",
    badge: "Flexibility",
  },
  {
    icon: Smartphone,
    title: "User Experience",
    description: "Intuitive mobile and web platforms designed for seamless trading experience.",
    badge: "UX",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Why Choose Trading Patterns.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Manage your account, take control of your trades with our comprehensive suite of professional services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
