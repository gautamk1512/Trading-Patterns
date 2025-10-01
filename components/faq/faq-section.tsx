"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Download, FileText } from "lucide-react"

const faqs = [
  {
    question: "What is TradePro and how does it work?",
    answer:
      "TradePro is a comprehensive trading platform that provides access to multiple financial markets including stocks, forex, crypto, and commodities. Our platform offers advanced charting tools, real-time market data, and seamless broker integrations to help you trade efficiently.",
  },
  {
    question: "How long do I get support?",
    answer:
      "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to assist you with any trading or technical questions you may have.",
  },
  {
    question: "Do I need to renew my license?",
    answer:
      "Your TradePro subscription automatically renews based on your chosen plan (monthly or yearly). You can manage your subscription settings and cancel anytime from your account dashboard without any cancellation fees.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "TradePro works on any modern web browser and is available as mobile apps for iOS and Android. For desktop trading, we recommend Windows 10+ or macOS 10.14+, with at least 4GB RAM and a stable internet connection.",
  },
  {
    question: "How secure is my trading data?",
    answer:
      "We use bank-grade security with 256-bit SSL encryption, two-factor authentication, and comply with all major financial regulations. Your funds are held in segregated accounts with tier-1 banks for maximum security.",
  },
  {
    question: "Can I try TradePro before purchasing?",
    answer:
      "Yes! We offer a free starter plan with limited features and a 14-day free trial of our premium features. You can also use our demo account with virtual funds to practice trading without any risk.",
  },
]

const downloads = [
  {
    title: "Beginner and tutorial brokers.",
    description: "Complete guide for new traders",
    icon: FileText,
  },
  {
    title: "Conditions for joining TradePro.",
    description: "Terms and requirements",
    icon: FileText,
  },
  {
    title: "Early history of TradePro company.",
    description: "Our journey and milestones",
    icon: FileText,
  },
  {
    title: "Read future investment movement.",
    description: "Market analysis and predictions",
    icon: FileText,
  },
  {
    title: "How to start to become a professional.",
    description: "Professional trading guide",
    icon: FileText,
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Help Center
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Frequently ask question.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Learn about new features from frequently asked question
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                  <Card className="border-border/50">
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openItems.includes(index) ? "transform rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </div>

          <div>
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Downloads & open with PDF</span>
                </CardTitle>
                <CardDescription>Essential documents and guides</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {downloads.map((download, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <download.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm leading-tight">{download.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{download.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 flex-shrink-0">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
