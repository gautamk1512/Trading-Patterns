"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ArrowRight, Shield, Users, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Multi-Mode Trading Platform
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-balance">
              Start Trading with a <span className="text-primary">Trusted</span> Platform
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl">
              Experience professional trading with our advanced platform featuring eKYC verification, solo and team
              trading modes, and seamless broker API integrations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/demo">Try Demo Account</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5M+</div>
                <div className="text-sm text-muted-foreground">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100M+</div>
                <div className="text-sm text-muted-foreground">Trades Executed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">120+</div>
                <div className="text-sm text-muted-foreground">Trading Pairs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">06</div>
                <div className="text-sm text-muted-foreground">Broker Integrations</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="trading-chart-bg p-6 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Live Trading Dashboard</h3>
                  <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                    <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
                    Live
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Portfolio Value</div>
                    <div className="text-2xl font-bold text-success">₹2,45,680</div>
                    <div className="text-sm text-success">+12.5% today</div>
                  </div>
                  <div className="bg-card/50 p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground">Active Positions</div>
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-muted-foreground">6 profitable</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
                        ₿
                      </div>
                      <div>
                        <div className="font-medium">BTC/INR</div>
                        <div className="text-sm text-muted-foreground">Bitcoin</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">₹67,52,000</div>
                      <div className="text-sm text-success">+2.34%</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-card/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                        E
                      </div>
                      <div>
                        <div className="font-medium">ETH/INR</div>
                        <div className="text-sm text-muted-foreground">Ethereum</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">₹3,50,842</div>
                      <div className="text-sm text-destructive">-1.23%</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -left-4 bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">eKYC Verified</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Team Trading</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
