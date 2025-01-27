"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      title: "About",
      href: "/about",
      children: [
        { title: "Our Mission", href: "/about#mission" },
        { title: "Our Team", href: "/team" },
        { title: "History", href: "/about#history" },
      ],
    },
    {
      title: "Projects",
      href: "/projects",
      children: [
        { title: "Current Projects", href: "/projects#current" },
        { title: "Past Projects", href: "/projects#past" },
        { title: "Impact", href: "/projects#impact" },
      ],
    },
    { title: "Events", href: "/events" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-blue-600 via-blue-500 to-green-500"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "text-2xl font-bold transition-colors",
              isScrolled ? "text-blue-600" : "text-white"
            )}
          >
            Nepal NGO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md inline-flex items-center transition-colors",
                    isScrolled
                      ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10",
                    "text-sm font-medium"
                  )}
                >
                  {item.title}
                  {item.children && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-48 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200">
                    <div className="relative top-0">
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200" />
                      <div className="relative top-0 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                href="/volunteer"
                className="group px-6 py-2.5 border-2 border-blue-600 rounded-full font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-200 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Join Us</span>
                  <span className="hidden group-hover:inline-block transition-all duration-300">
                    →
                  </span>
                </span>
              </Link>
              <Link
                href="/donate"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 animate-pulse-subtle"
              >
                Donate Now
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-md transition-colors",
              isScrolled
                ? "text-gray-600 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <div className="p-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="p-4 space-y-3">
              <Link
                href="/volunteer"
                className="group block w-full px-6 py-2.5 text-center border-2 border-blue-600 rounded-full font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Join Us</span>
                  <span className="hidden group-hover:inline-block transition-all duration-300">
                    →
                  </span>
                </span>
              </Link>
              <Link
                href="/donate"
                className="block w-full px-6 py-3 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

