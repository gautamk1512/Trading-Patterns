import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const features = ["Trusted by Traders 2019", "Professional Support Unit", "Optimized Trading Solutions"]

const missions = ["Trusted by Traders 2019", "Professional Support Unit", "Optimized Trading Solutions"]

export function PlatformOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="trading-chart-bg p-6 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Trading Patterns Platform</h3>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                    Live
                  </Badge>
                </div>

                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Platform Uptime</span>
                    <span className="text-success text-sm">99.9%</span>
                  </div>
                  <div className="text-2xl font-bold">Advanced Trading</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-primary">2.5M+</div>
                    <div className="text-xs text-muted-foreground">Active Users</div>
                  </div>
                  <div className="bg-card/50 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-primary">100M+</div>
                    <div className="text-xs text-muted-foreground">Trades Executed</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">Trading Patterns trading platform.</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Experience the cutting edge of trading technology with our award-winning platform designed for both
              beginners and professional traders.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              Our platform combines advanced charting tools, real-time market data, and intelligent order execution to
              provide you with everything you need to succeed in today's fast-paced financial markets. With over 2.5
              million active users worldwide, we're trusted by traders globally.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold mb-3 text-primary">OUR VISION</h4>
                <div className="space-y-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-primary">OUR MISSION</h4>
                <div className="space-y-2">
                  {missions.map((mission, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{mission}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
