"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { Play, Pause, RotateCcw, TrendingUp, TrendingDown, Activity } from "lucide-react"

const backtestData = [
  { date: "Jan", pnl: 2500, trades: 45, winRate: 68 },
  { date: "Feb", pnl: 3200, trades: 52, winRate: 72 },
  { date: "Mar", pnl: 1800, trades: 38, winRate: 65 },
  { date: "Apr", pnl: 4100, trades: 61, winRate: 75 },
  { date: "May", pnl: 3600, trades: 48, winRate: 70 },
  { date: "Jun", pnl: 5200, trades: 67, winRate: 78 },
]

const strategies = [
  {
    id: "momentum",
    name: "Momentum Breakout",
    description: "Trades breakouts with momentum confirmation",
    status: "active",
    returns: "+24.5%",
    winRate: "72%",
    trades: 156,
    sharpe: 1.8,
  },
  {
    id: "meanreversion",
    name: "Mean Reversion",
    description: "Trades oversold/overbought conditions",
    status: "paused",
    returns: "+18.2%",
    winRate: "68%",
    trades: 203,
    sharpe: 1.4,
  },
  {
    id: "arbitrage",
    name: "Statistical Arbitrage",
    description: "Pairs trading with statistical models",
    status: "testing",
    returns: "+31.7%",
    winRate: "75%",
    trades: 89,
    sharpe: 2.1,
  },
]

export default function StrategyTester() {
  const [selectedStrategy, setSelectedStrategy] = useState("momentum")
  const [isRunning, setIsRunning] = useState(false)
  const [testPeriod, setTestPeriod] = useState("6m")

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-green-500/10 text-green-500 border-green-500/20",
      paused: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      testing: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    }
    return variants[status as keyof typeof variants] || variants.testing
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Strategy Tester</h2>
          <p className="text-gray-400">Backtest and optimize your trading strategies</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            className={isRunning ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
          >
            {isRunning ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isRunning ? "Stop Test" : "Start Test"}
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Available Strategies</CardTitle>
            <CardDescription>Select a strategy to test and optimize</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                  selectedStrategy === strategy.id
                    ? "border-teal-500 bg-teal-500/10"
                    : "border-gray-600 hover:border-gray-500"
                }`}
                onClick={() => setSelectedStrategy(strategy.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-sm">{strategy.name}</h4>
                  <Badge className={getStatusBadge(strategy.status)}>{strategy.status}</Badge>
                </div>
                <p className="text-gray-400 text-xs mb-2">{strategy.description}</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Returns:</span>
                    <span className="text-green-400 font-medium">{strategy.returns}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Win Rate:</span>
                    <span className="text-white">{strategy.winRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trades:</span>
                    <span className="text-white">{strategy.trades}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sharpe:</span>
                    <span className="text-white">{strategy.sharpe}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Test Configuration</CardTitle>
              <CardDescription>Configure backtest parameters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="symbol" className="text-white">
                    Symbol
                  </Label>
                  <Select defaultValue="NIFTY50">
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="NIFTY50">NIFTY 50</SelectItem>
                      <SelectItem value="BANKNIFTY">BANK NIFTY</SelectItem>
                      <SelectItem value="RELIANCE">RELIANCE</SelectItem>
                      <SelectItem value="TCS">TCS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeframe" className="text-white">
                    Timeframe
                  </Label>
                  <Select defaultValue="5m">
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="1m">1 Minute</SelectItem>
                      <SelectItem value="5m">5 Minutes</SelectItem>
                      <SelectItem value="15m">15 Minutes</SelectItem>
                      <SelectItem value="1h">1 Hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="period" className="text-white">
                    Test Period
                  </Label>
                  <Select value={testPeriod} onValueChange={setTestPeriod}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600">
                      <SelectItem value="1m">1 Month</SelectItem>
                      <SelectItem value="3m">3 Months</SelectItem>
                      <SelectItem value="6m">6 Months</SelectItem>
                      <SelectItem value="1y">1 Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Backtest Results</CardTitle>
              <CardDescription>Performance metrics and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="performance" className="space-y-4">
                <TabsList className="bg-gray-700">
                  <TabsTrigger value="performance" className="data-[state=active]:bg-teal-500">
                    Performance
                  </TabsTrigger>
                  <TabsTrigger value="trades" className="data-[state=active]:bg-teal-500">
                    Trade Analysis
                  </TabsTrigger>
                  <TabsTrigger value="metrics" className="data-[state=active]:bg-teal-500">
                    Key Metrics
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="space-y-4">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={backtestData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="date" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #374151",
                            borderRadius: "8px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="pnl"
                          stroke="#14B8A6"
                          strokeWidth={2}
                          dot={{ fill: "#14B8A6", strokeWidth: 2 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>

                <TabsContent value="trades" className="space-y-4">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={backtestData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="date" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #374151",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="trades" fill="#14B8A6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>

                <TabsContent value="metrics" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-gray-400 text-sm">Total Return</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">+24.5%</div>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-4 w-4 text-blue-500" />
                        <span className="text-gray-400 text-sm">Sharpe Ratio</span>
                      </div>
                      <div className="text-2xl font-bold text-white">1.82</div>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="h-4 w-4 text-red-500" />
                        <span className="text-gray-400 text-sm">Max Drawdown</span>
                      </div>
                      <div className="text-2xl font-bold text-red-400">-8.3%</div>
                    </div>
                    <div className="bg-gray-700/50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-4 w-4 text-teal-500" />
                        <span className="text-gray-400 text-sm">Win Rate</span>
                      </div>
                      <div className="text-2xl font-bold text-white">72%</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
