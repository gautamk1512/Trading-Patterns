"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, DollarSign, Target, Users, Wallet } from "lucide-react"

interface PortfolioOverviewProps {
  tradingMode: "solo" | "team"
}

export function PortfolioOverview({ tradingMode }: PortfolioOverviewProps) {
  const soloData = {
    totalValue: "₹2,45,680",
    todayPnL: "+₹12,450",
    todayPnLPercent: "+5.34%",
    totalPnL: "+₹45,680",
    totalPnLPercent: "+22.84%",
    activePositions: 8,
    profitablePositions: 6,
    availableBalance: "₹85,320",
  }

  const teamData = {
    totalValue: "₹12,85,400",
    todayPnL: "+₹65,200",
    todayPnLPercent: "+5.34%",
    totalPnL: "+₹2,85,400",
    totalPnLPercent: "+28.54%",
    activePositions: 24,
    profitablePositions: 18,
    availableBalance: "₹4,25,600",
    teamMembers: 5,
    activeTraders: 3,
  }

  const data = tradingMode === "solo" ? soloData : teamData

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Portfolio Value</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.totalValue}</div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <TrendingUp className="h-3 w-3 text-success" />
            <span className="text-success">
              {data.totalPnL} ({data.totalPnLPercent})
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today's P&L</CardTitle>
          <TrendingUp className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-success">{data.todayPnL}</div>
          <div className="flex items-center space-x-2 text-xs">
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
              {data.todayPnLPercent}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
          <Target className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.activePositions}</div>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <span>{data.profitablePositions} profitable</span>
          </div>
          <Progress value={(data.profitablePositions / data.activePositions) * 100} className="mt-2 h-1" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {tradingMode === "team" ? "Available Capital" : "Available Balance"}
          </CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.availableBalance}</div>
          {tradingMode === "team" && "teamMembers" in data && (
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>
                {data.teamMembers} members, {data.activeTraders} active
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
