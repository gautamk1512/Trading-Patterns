"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Trading Patterns</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced multi-mode trading platform with comprehensive broker integrations, strategy testing, and
              professional-grade risk management tools.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 (129) 8800 1200</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@tradepro.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Trading Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Trading</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Forex
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Crypto
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Stocks
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Indices
                </Link>
              </li>
              <li>
                <Link href="/broker-integration" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Brokers
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/strategy-tester" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Strategy Tester
                </Link>
              </li>
              <li>
                <Link href="/kyc-verification" className="text-gray-400 hover:text-teal-400 transition-colors">
                  KYC Verification
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Open Account
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest market insights and platform updates</p>
            </div>
            <div className="flex w-full md:w-auto">
              <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white mr-2 md:w-64" />
              <Button className="bg-teal-500 hover:bg-teal-600">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Trading Patterns. All rights reserved. |
                <Link href="#" className="hover:text-teal-400 ml-1">
                  Privacy Policy
                </Link>{" "}
                |
                <Link href="#" className="hover:text-teal-400 ml-1">
                  Terms of Service
                </Link>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Trading involves risk. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
