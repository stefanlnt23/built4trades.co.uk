"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const hasScrolled = window.scrollY > 20
      setIsScrolled((current) => (current === hasScrolled ? current : hasScrolled))
    }
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
    }

    handleScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur-md shadow-sm transition-all duration-300 lg:border-b-0 lg:bg-transparent lg:backdrop-blur-0 lg:shadow-none",
        (isScrolled || isOpen)
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "lg:bg-transparent lg:shadow-none"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 transition-opacity hover:opacity-90"
            aria-label="Built4Trades.co.uk home"
          >
            <Image
              src="/buildingtrades-logo.png"
              alt="Built4Trades.co.uk"
              width={604}
              height={604}
              priority
              className="h-16 w-auto sm:h-[4.5rem] lg:h-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get a Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-lg border border-border bg-background/90 p-2 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-border bg-card shadow-xl lg:hidden",
          "transform-gpu transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col px-6 pt-20 pb-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-6 border-t border-border">
            <Button asChild className="w-full" size="lg">
              <Link href="/contact">Get a Free Demo</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden",
          "transition-opacity duration-200",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      />
    </header>
  )
}
