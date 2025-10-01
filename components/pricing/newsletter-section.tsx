"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="trading-chart-bg p-8 md:p-12 border-primary/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Subscribe to our newsletter.</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to get started. Get our Newsletter and join the Community!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-background/50 backdrop-blur-sm"
                required
              />
              <Button type="submit" disabled={isSubscribed}>
                {isSubscribed ? "Subscribed!" : "Subscribe"}
                {!isSubscribed && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </form>

            {isSubscribed && <p className="text-success text-sm mt-4">Thank you for subscribing to our newsletter!</p>}
          </div>
        </Card>
      </div>
    </section>
  )
}
