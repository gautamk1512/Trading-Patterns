"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "STARTER",
    price: "₹0",
    period: "/month",
    description: "Perfect for beginners",
    popular: false,
    features: [
      "Basic trading platform access",
      "Up to 10 trades per month",
      "Email support",
      "Basic market data",
      "Mobile app access",
      "Educational resources",
      "Paper trading mode",
      "Community forum access",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
  },
  {
    name: "BASIC",
    price: "₹2,999",
    period: "/month",
    description: "For active traders",
    popular: false,
    features: [
      "Advanced trading platform",
      "Unlimited trades",
      "Priority email support",
      "Real-time market data",
      "Advanced charting tools",
      "Technical indicators",
      "Risk management tools",
      "API access (limited)",
    ],
    buttonText: "Get Started Now",
    buttonVariant: "outline" as const,
  },
  {
    name: "ESSENTIAL",
    price: "₹4,999",
    period: "/month",
    description: "Most popular choice",
    popular: false,
    features: [
      "Professional trading suite",
      "Unlimited trades + priority execution",
      "24/7 phone & chat support",
      "Level 2 market data",
      "Advanced analytics dashboard",
      "Algorithmic trading tools",
      "Portfolio management",
      "Full API access",
    ],
    buttonText: "Get Started Now",
    buttonVariant: "outline" as const,
  },
  {
    name: "PROFESSIONAL",
    price: "₹9,999",
    period: "/month",
    description: "For institutional traders",
    popular: true,
    features: [
      "Enterprise trading platform",
      "Unlimited everything + fastest execution",
      "Dedicated account manager",
      "Premium market data feeds",
      "Custom trading strategies",
      "Team collaboration tools",
      "White-label solutions",
      "Custom integrations",
    ],
    buttonText: "Get Started Now",
    buttonVariant: "default" as const,
  },
]

export function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Our Price Plan.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty mb-8">
            We help you become professional Trader.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === "yearly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <Badge variant="secondary" className="ml-2 bg-success/10 text-success border-success/20">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border/50 hover:border-primary/50 transition-all duration-300 ${
                plan.popular ? "border-primary bg-primary/5 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs mb-2">
                    {plan.name}
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bold">
                  {billingCycle === "yearly" && plan.price !== "₹0"
                    ? `₹${Math.floor(Number.parseInt(plan.price.replace("₹", "").replace(",", "")) * 0.8).toLocaleString()}`
                    : plan.price}
                  <span className="text-lg font-normal text-muted-foreground">
                    {billingCycle === "yearly" && plan.price !== "₹0" ? "/year" : plan.period}
                  </span>
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant={plan.buttonVariant} className="w-full mt-6" size="lg">
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">*Terms & Conditions</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom plan for your organization?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
