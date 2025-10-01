import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Download } from "lucide-react"

export function AppDownload() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">App is Available for all device.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Access their mobile trading via any desktop and mobile browser, user friendly and reliable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="trading-chart-bg p-6 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Mobile Trading Experience</h3>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <Smartphone className="w-3 h-3 mr-1" />
                    Mobile Ready
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">4.8★</div>
                    <div className="text-sm text-muted-foreground">App Store Rating</div>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-primary">1M+</div>
                    <div className="text-sm text-muted-foreground">Downloads</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Smartphone className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium">Real-time Trading</div>
                        <div className="text-sm text-muted-foreground">Execute trades on the go</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                        <Download className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Offline Charts</div>
                        <div className="text-sm text-muted-foreground">View charts without internet</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Download Our Trading App</h3>
            <p className="text-muted-foreground mb-8 text-pretty">
              Get the full trading experience on your mobile device. Available for iOS and Android with all the features
              you need to trade successfully.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Button variant="outline" className="h-16 bg-transparent">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-bold">📱</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Available on</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="h-16 bg-transparent">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-bold">🤖</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 bg-transparent">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-bold">🪟</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download for</div>
                    <div className="font-semibold">Windows</div>
                  </div>
                </div>
              </Button>

              <Button variant="outline" className="h-16 bg-transparent">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                    <span className="text-xs font-bold">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Download for</div>
                    <div className="font-semibold">macOS</div>
                  </div>
                </div>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              *Available on iPhone, iPad and all Android devices
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
