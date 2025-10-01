import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview"
import { LivePositions } from "@/components/dashboard/live-positions"
import { TradingChart } from "@/components/dashboard/trading-chart"
import { TeamMembers } from "@/components/dashboard/team-members"

// This would normally come from user session/auth
const TRADING_MODE: "solo" | "team" = "team"
const USER_ROLE: "admin" | "trader" | "viewer" = "admin"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar tradingMode={TRADING_MODE} userRole={USER_ROLE} />

      <main className="flex-1 overflow-auto">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{TRADING_MODE === "solo" ? "Trading Dashboard" : "Team Dashboard"}</h1>
              <p className="text-muted-foreground">
                {TRADING_MODE === "solo"
                  ? "Monitor your portfolio and execute trades"
                  : "Manage your team's trading activities and performance"}
              </p>
            </div>
          </div>

          <PortfolioOverview tradingMode={TRADING_MODE} />

          <div className="grid gap-6 lg:grid-cols-2">
            <TradingChart />
            <LivePositions tradingMode={TRADING_MODE} />
          </div>

          {TRADING_MODE === "team" && USER_ROLE === "admin" && <TeamMembers />}
        </div>
      </main>
    </div>
  )
}
