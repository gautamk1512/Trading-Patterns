"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, TrendingUp, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold font-poppins">Trading Patterns</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  Platform <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Trading Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/broker-integration">Broker Integration</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/strategy-tester">Strategy Tester</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/compliance">Compliance</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Start Trading</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-sm rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="/products" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Products
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Pricing
              </Link>
              <Link href="/dashboard" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Dashboard
              </Link>
              <Link href="/broker-integration" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Broker Integration
              </Link>
              <Link href="/strategy-tester" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Strategy Tester
              </Link>
              <Link href="/compliance" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Compliance
              </Link>
              <Link href="/faq" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                FAQ
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
