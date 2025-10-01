"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Lock, FileText, AlertTriangle, CheckCircle, Eye } from "lucide-react"

const complianceItems = [
  {
    id: "sebi",
    title: "SEBI Compliance",
    description: "Securities and Exchange Board of India regulations",
    status: "compliant",
    lastCheck: "2024-01-15",
    icon: Shield,
  },
  {
    id: "rbi",
    title: "RBI Guidelines",
    description: "Reserve Bank of India financial regulations",
    status: "compliant",
    lastCheck: "2024-01-14",
    icon: Lock,
  },
  {
    id: "kyc",
    title: "KYC Verification",
    description: "Know Your Customer documentation",
    status: "pending",
    lastCheck: "2024-01-10",
    icon: FileText,
  },
  {
    id: "aml",
    title: "AML Monitoring",
    description: "Anti-Money Laundering compliance",
    status: "compliant",
    lastCheck: "2024-01-15",
    icon: Eye,
  },
]

const securityFeatures = [
  "256-bit SSL encryption for all data transmission",
  "Two-factor authentication (2FA) mandatory",
  "Real-time fraud detection and monitoring",
  "Segregated client funds with tier-1 banks",
  "Regular security audits and penetration testing",
  "GDPR compliant data protection policies",
]

export default function ComplianceSection() {
  const getStatusBadge = (status: string) => {
    const variants = {
      compliant: "bg-green-500/10 text-green-500 border-green-500/20",
      pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      warning: "bg-red-500/10 text-red-500 border-red-500/20",
    }
    return variants[status as keyof typeof variants] || variants.warning
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "compliant":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Compliance & Security</h2>
          <p className="text-gray-400">Regulatory compliance and security measures</p>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600">
          <FileText className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Regulatory Compliance</CardTitle>
            <CardDescription>Current compliance status with financial regulations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {complianceItems.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-600 rounded-lg">
                      <IconComponent className="h-4 w-4 text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      <p className="text-gray-400 text-xs">{item.description}</p>
                      <p className="text-gray-500 text-xs mt-1">Last checked: {item.lastCheck}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(item.status)}
                    <Badge className={getStatusBadge(item.status)}>{item.status}</Badge>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Security Features</CardTitle>
            <CardDescription>Advanced security measures protecting your data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-teal-500/10 border border-teal-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-teal-400" />
                <span className="text-teal-400 font-medium text-sm">Security Score</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">98/100</div>
              <p className="text-gray-400 text-xs">Excellent security rating based on industry standards</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Risk Management</CardTitle>
          <CardDescription>Automated risk controls and position limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-white font-medium">Position Limits</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Max Position Size:</span>
                  <span className="text-white">₹5,00,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Daily Loss Limit:</span>
                  <span className="text-white">₹50,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Max Open Positions:</span>
                  <span className="text-white">20</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-medium">Risk Metrics</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Current VaR:</span>
                  <span className="text-white">₹12,450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Portfolio Beta:</span>
                  <span className="text-white">0.85</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Correlation Risk:</span>
                  <span className="text-green-400">Low</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-medium">Alerts & Notifications</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Position limit alerts</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Margin call notifications</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-3 w-3 text-green-500" />
                  <span className="text-gray-300">Market volatility alerts</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
