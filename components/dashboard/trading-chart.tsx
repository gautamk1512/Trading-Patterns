"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, BarChart3 } from "lucide-react"

const chartData = [
  { time: "09:15", price: 2450, volume: 1200 },
  { time: "09:30", price: 2465, volume: 1800 },
  { time: "09:45", price: 2458, volume: 1500 },
  { time: "10:00", price: 2472, volume: 2100 },
  { time: "10:15", price: 2485, volume: 1900 },
  { time: "10:30", price: 2478, volume: 1600 },
  { time: "10:45", price: 2490, volume: 2300 },
  { time: "11:00", price: 2485, volume: 2000 },
]

export function TradingChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <span>RELIANCE</span>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                <TrendingUp className="w-3 h-3 mr-1" />
                +1.45%
              </Badge>
            </CardTitle>
            <CardDescription>₹2,485.50 • NSE</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="1D">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1D">1D</SelectItem>
                <SelectItem value="1W">1W</SelectItem>
                <SelectItem value="1M">1M</SelectItem>
                <SelectItem value="3M">3M</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Indicators
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="time" className="text-muted-foreground" fontSize={12} />
              <YAxis className="text-muted-foreground" fontSize={12} domain={["dataMin - 10", "dataMax + 10"]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "hsl(var(--foreground))" }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Open</div>
            <div className="font-medium">₹2,450.00</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">High</div>
            <div className="font-medium text-success">₹2,495.75</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Low</div>
            <div className="font-medium text-destructive">₹2,445.20</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-muted-foreground">Volume</div>
            <div className="font-medium">2.3M</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
