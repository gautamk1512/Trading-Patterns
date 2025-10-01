"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, TrendingDown, X } from "lucide-react"

interface Position {
  id: string
  symbol: string
  type: "BUY" | "SELL"
  quantity: number
  entryPrice: number
  currentPrice: number
  pnl: number
  pnlPercent: number
  assignedTo?: string // For team mode
}

interface LivePositionsProps {
  tradingMode: "solo" | "team"
}

export function LivePositions({ tradingMode }: LivePositionsProps) {
  const positions: Position[] = [
    {
      id: "1",
      symbol: "RELIANCE",
      type: "BUY",
      quantity: 50,
      entryPrice: 2450.0,
      currentPrice: 2485.5,
      pnl: 1775.0,
      pnlPercent: 1.45,
      assignedTo: tradingMode === "team" ? "Rahul Kumar" : undefined,
    },
    {
      id: "2",
      symbol: "TCS",
      type: "BUY",
      quantity: 25,
      entryPrice: 3650.0,
      currentPrice: 3598.25,
      pnl: -1293.75,
      pnlPercent: -1.42,
      assignedTo: tradingMode === "team" ? "Priya Sharma" : undefined,
    },
    {
      id: "3",
      symbol: "HDFC",
      type: "SELL",
      quantity: 30,
      entryPrice: 1580.0,
      currentPrice: 1565.75,
      pnl: 427.5,
      pnlPercent: 0.9,
      assignedTo: tradingMode === "team" ? "Amit Singh" : undefined,
    },
    {
      id: "4",
      symbol: "INFY",
      type: "BUY",
      quantity: 40,
      entryPrice: 1420.0,
      currentPrice: 1445.8,
      pnl: 1032.0,
      pnlPercent: 1.82,
      assignedTo: tradingMode === "team" ? "Rahul Kumar" : undefined,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Positions</CardTitle>
        <CardDescription>
          {tradingMode === "team" ? "Team's active trading positions" : "Your active trading positions"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Symbol</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Entry Price</TableHead>
              <TableHead>Current Price</TableHead>
              <TableHead>P&L</TableHead>
              {tradingMode === "team" && <TableHead>Assigned To</TableHead>}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.id}>
                <TableCell className="font-medium">{position.symbol}</TableCell>
                <TableCell>
                  <Badge variant={position.type === "BUY" ? "default" : "secondary"}>{position.type}</Badge>
                </TableCell>
                <TableCell>{position.quantity}</TableCell>
                <TableCell>₹{position.entryPrice.toFixed(2)}</TableCell>
                <TableCell>₹{position.currentPrice.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {position.pnl >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span className={position.pnl >= 0 ? "text-success" : "text-destructive"}>
                      ₹{Math.abs(position.pnl).toFixed(2)}
                    </span>
                    <Badge
                      variant="outline"
                      className={
                        position.pnl >= 0 ? "border-success text-success" : "border-destructive text-destructive"
                      }
                    >
                      {position.pnlPercent >= 0 ? "+" : ""}
                      {position.pnlPercent.toFixed(2)}%
                    </Badge>
                  </div>
                </TableCell>
                {tradingMode === "team" && (
                  <TableCell>
                    <span className="text-sm text-muted-foreground">{position.assignedTo}</span>
                  </TableCell>
                )}
                <TableCell>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-transparent">
                    <X className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
