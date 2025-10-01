import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const solutions = [
  "Trusted by Traders 2019",
  "Professional Support Unit",
  "Optimized Trading Solutions",
  "Licensed & Regulated",
  "Comprehensive Analytics",
  "Premium Trading Technology",
]

export function TradingSolutions() {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%23ffffff' d='M158 206c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm42-12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6">New Trading Solutions.</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Discover Trading Patterns advantage trade can access their mobile trading system via any desktop and mobile
              browser, user friendly and reliable.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              Tellus rhoncus ut diam molestie sed eget ut sem. Sem integer vitae justo magna. Orci eu lobortis elementum
              nibh tellus hac et blandit. Blandit vulputate sed orci vulputate sed cras vitae ut orci mollis
              pellentesque ut nibh. Aliquam risus feugiat in orci rhoncus ut tempor orci. Nunc lorem orci odio
              pellentesque.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm">{solution}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="trading-chart-bg p-6 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Global Trading Network</h3>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                    Active
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">20M+</div>
                    <div className="text-sm text-muted-foreground">People join us</div>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">100M+</div>
                    <div className="text-sm text-muted-foreground">Playing with us</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">120+</div>
                    <div className="text-sm text-muted-foreground">Partner Company</div>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">06</div>
                    <div className="text-sm text-muted-foreground">Trading Instrument</div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center mb-2">
                      <span className="text-xs font-bold">TOTB+</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center mb-2">
                      <span className="text-xs font-bold">WALK</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-8 bg-muted rounded flex items-center justify-center mb-2">
                      <span className="text-xs font-bold">QUAKE</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
