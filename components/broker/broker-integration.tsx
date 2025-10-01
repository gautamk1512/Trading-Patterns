"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, Settings } from "lucide-react"

const brokers = [
  {
    id: "zerodha",
    name: "Zerodha",
    logo: "Z",
    status: "connected",
    apiKey: "zd_live_••••••••••••",
    balance: "₹2,45,680",
    positions: 12,
    color: "bg-blue-500",
  },
  {
    id: "angelone",
    name: "Angel One",
    logo: "A",
    status: "connected",
    apiKey: "ao_live_••••••••••••",
    balance: "₹1,89,340",
    positions: 8,
    color: "bg-red-500",
  },
  {
    id: "upstox",
    name: "Upstox",
    logo: "U",
    status: "disconnected",
    apiKey: "",
    balance: "₹0",
    positions: 0,
    color: "bg-orange-500",
  },
  {
    id: "likex",
    name: "Likex",
    logo: "L",
    status: "pending",
    apiKey: "lx_live_••••••••••••",
    balance: "₹0",
    positions: 0,
    color: "bg-purple-500",
  },
]

export default function BrokerIntegration() {
  const [selectedBroker, setSelectedBroker] = useState("zerodha")
  const [apiKey, setApiKey] = useState("")
  const [apiSecret, setApiSecret] = useState("")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      connected: "bg-green-500/10 text-green-500 border-green-500/20",
      pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      disconnected: "bg-red-500/10 text-red-500 border-red-500/20",
    }
    return variants[status as keyof typeof variants] || variants.disconnected
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Broker Integration</h2>
          <p className="text-gray-400">Connect your trading accounts for seamless execution</p>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-600">
          <Settings className="h-4 w-4 mr-2" />
          Manage APIs
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {brokers.map((broker) => (
          <Card key={broker.id} className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${broker.color} flex items-center justify-center text-white font-bold`}
                  >
                    {broker.logo}
                  </div>
                  <div>
                    <CardTitle className="text-white text-sm">{broker.name}</CardTitle>
                    <div className="flex items-center gap-1 mt-1">
                      {getStatusIcon(broker.status)}
                      <Badge className={getStatusBadge(broker.status)}>{broker.status}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Balance:</span>
                  <span className="text-white font-medium">{broker.balance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Positions:</span>
                  <span className="text-white font-medium">{broker.positions}</span>
                </div>
                {broker.apiKey && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">API Key:</span>
                    <span className="text-gray-300 font-mono text-xs">{broker.apiKey}</span>
                  </div>
                )}
              </div>
              <Button
                size="sm"
                className="w-full mt-3 bg-teal-500 hover:bg-teal-600"
                onClick={() => setSelectedBroker(broker.id)}
              >
                {broker.status === "connected" ? "Manage" : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">API Configuration</CardTitle>
          <CardDescription>Configure your broker API credentials securely</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedBroker} onValueChange={setSelectedBroker}>
            <TabsList className="bg-gray-700">
              {brokers.map((broker) => (
                <TabsTrigger key={broker.id} value={broker.id} className="data-[state=active]:bg-teal-500">
                  {broker.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {brokers.map((broker) => (
              <TabsContent key={broker.id} value={broker.id} className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey" className="text-white">
                      API Key
                    </Label>
                    <Input
                      id="apiKey"
                      placeholder="Enter your API key"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apiSecret" className="text-white">
                      API Secret
                    </Label>
                    <Input
                      id="apiSecret"
                      type="password"
                      placeholder="Enter your API secret"
                      value={apiSecret}
                      onChange={(e) => setApiSecret(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-teal-500 hover:bg-teal-600">
                    {broker.status === "connected" ? "Update" : "Connect"} API
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                    Test Connection
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
