import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  { step: "01", title: "REGISTER", description: "Create your account with eKYC verification" },
  { step: "02", title: "VERIFY ID", description: "Complete document verification process" },
  { step: "03", title: "SELECT PLAN", description: "Choose your trading plan and features" },
  { step: "04", title: "START TRADING", description: "Begin trading with our advanced platform" },
]

export function ReadyToTrade() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="trading-chart-bg p-6 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Mobile Trading App</h3>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                    Live
                  </Badge>
                </div>

                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">BTC/USD</span>
                    <span className="text-success text-sm">+2.34%</span>
                  </div>
                  <div className="text-2xl font-bold">$67,520.00</div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-card/30 rounded">
                    <span className="text-sm">NIFTY 50</span>
                    <span className="text-success text-sm">+1.2%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-card/30 rounded">
                    <span className="text-sm">SENSEX</span>
                    <span className="text-destructive text-sm">-0.8%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-card/30 rounded">
                    <span className="text-sm">BANK NIFTY</span>
                    <span className="text-success text-sm">+2.1%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Ready to trade?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">Get started. 4 simple steps to buy & sell.</p>
            <p className="text-muted-foreground mb-8 text-pretty">
              Sem integer vitae justo magna. Orci eu lobortis elementum nibh tellus hac et blandit. Blandit vulputate
              sed orci vulputate sed cras vitae ut orci mollis pellentesque ut nibh. Aliquam risus feugiat in orci
              rhoncus ut tempor orci. Nunc lorem orci odio pellentesque.
            </p>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.description}</div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Contact With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Try a Free Demo Account
              </Button>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> If you need quick payment kindly contact us by live chat, whatsapp, Telegram etc.
                We will send you payment instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
