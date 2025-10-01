"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Users,
  Settings,
  Bell,
  Wallet,
  FileText,
  Target,
  Shield,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  tradingMode: "solo" | "team"
  userRole?: "admin" | "trader" | "viewer"
}

export function DashboardSidebar({ tradingMode, userRole = "admin" }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const soloMenuItems = [
    { icon: BarChart3, label: "Dashboard", href: "/dashboard", badge: null },
    { icon: TrendingUp, label: "Trading", href: "/dashboard/trading", badge: null },
    { icon: Wallet, label: "Portfolio", href: "/dashboard/portfolio", badge: "₹2.4L" },
    { icon: FileText, label: "Trade History", href: "/dashboard/history", badge: null },
    { icon: Target, label: "Strategy Tester", href: "/dashboard/strategy", badge: "New" },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications", badge: "3" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", badge: null },
  ]

  const teamMenuItems = [
    { icon: BarChart3, label: "Team Dashboard", href: "/dashboard", badge: null },
    { icon: TrendingUp, label: "Trading", href: "/dashboard/trading", badge: null, roles: ["admin", "trader"] },
    { icon: Users, label: "Team Members", href: "/dashboard/team", badge: "5", roles: ["admin"] },
    { icon: Wallet, label: "Shared Capital", href: "/dashboard/capital", badge: "₹12.8L" },
    { icon: FileText, label: "Trade Log", href: "/dashboard/history", badge: null },
    { icon: Target, label: "P&L Distribution", href: "/dashboard/pnl", badge: null, roles: ["admin"] },
    { icon: Shield, label: "Role Management", href: "/dashboard/roles", badge: null, roles: ["admin"] },
    { icon: Bell, label: "Notifications", href: "/dashboard/notifications", badge: "7" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings", badge: null },
  ]

  const menuItems = tradingMode === "solo" ? soloMenuItems : teamMenuItems

  const filteredMenuItems = menuItems.filter((item) => !item.roles || item.roles.includes(userRole))

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h2 className="font-semibold">{tradingMode === "solo" ? "Solo Trading" : "Team Trading"}</h2>
              <p className="text-sm text-muted-foreground">
                {tradingMode === "team" && `Role: ${userRole.charAt(0).toUpperCase() + userRole.slice(1)}`}
              </p>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {filteredMenuItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <Button variant="ghost" className={cn("w-full justify-start h-10", collapsed ? "px-2" : "px-3")}>
              <item.icon className="h-4 w-4 flex-shrink-0" />
              {!collapsed && (
                <>
                  <span className="ml-3 flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </Button>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10",
            collapsed ? "px-2" : "px-3",
          )}
        >
          <LogOut className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </div>
  )
}
