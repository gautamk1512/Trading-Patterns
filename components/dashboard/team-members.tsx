"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, UserPlus, TrendingUp, TrendingDown } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  email: string
  role: "admin" | "trader" | "viewer"
  status: "online" | "offline"
  todayPnL: number
  totalTrades: number
  winRate: number
  avatar?: string
}

export function TeamMembers() {
  const members: TeamMember[] = [
    {
      id: "1",
      name: "Rahul Kumar",
      email: "rahul@example.com",
      role: "admin",
      status: "online",
      todayPnL: 15420,
      totalTrades: 12,
      winRate: 75,
      avatar: "/professional-man.jpg",
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priya@example.com",
      role: "trader",
      status: "online",
      todayPnL: -2340,
      totalTrades: 8,
      winRate: 62.5,
      avatar: "/professional-woman-diverse.png",
    },
    {
      id: "3",
      name: "Amit Singh",
      email: "amit@example.com",
      role: "trader",
      status: "offline",
      todayPnL: 8750,
      totalTrades: 15,
      winRate: 80,
      avatar: "/professional-man-2.png",
    },
    {
      id: "4",
      name: "Sneha Patel",
      email: "sneha@example.com",
      role: "viewer",
      status: "online",
      todayPnL: 0,
      totalTrades: 0,
      winRate: 0,
      avatar: "/professional-woman-2.png",
    },
  ]

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "admin":
        return "default"
      case "trader":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Manage your trading team and track performance</CardDescription>
          </div>
          <Button size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Today's P&L</TableHead>
              <TableHead>Trades</TableHead>
              <TableHead>Win Rate</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getRoleBadgeVariant(member.role)}>
                    {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        member.status === "online" ? "bg-success" : "bg-muted-foreground"
                      }`}
                    />
                    <span className="text-sm capitalize">{member.status}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1">
                    {member.todayPnL !== 0 && (
                      <>
                        {member.todayPnL > 0 ? (
                          <TrendingUp className="h-4 w-4 text-success" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-destructive" />
                        )}
                        <span className={member.todayPnL > 0 ? "text-success" : "text-destructive"}>
                          ₹{Math.abs(member.todayPnL).toLocaleString()}
                        </span>
                      </>
                    )}
                    {member.todayPnL === 0 && <span className="text-muted-foreground">₹0</span>}
                  </div>
                </TableCell>
                <TableCell>{member.totalTrades}</TableCell>
                <TableCell>
                  {member.winRate > 0 ? (
                    <Badge variant="outline" className="border-success text-success">
                      {member.winRate}%
                    </Badge>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
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
