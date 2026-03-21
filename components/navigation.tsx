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
        "fixed top-0 left-0 right-0 z-[70] border-b border-border bg-card shadow-sm lg:border-b-0 lg:bg-transparent lg:backdrop-blur-0 lg:shadow-none",
        (isScrolled || isOpen)
          ? "bg-card shadow-sm border-b border-border lg:bg-card/95 lg:backdrop-blur-md"
          : "lg:bg-transparent lg:shadow-none"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
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
                  "px-4 py-2 text-sm font-medium rounded-lg",
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
            className="relative z-[90] lg:hidden rounded-lg border border-primary bg-primary p-2 text-primary-foreground shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="h-6 w-6 stroke-[2.5]" /> : <Menu className="h-6 w-6 stroke-[2.5]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[80] bg-card lg:hidden"
          aria-hidden={!isOpen}
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
            <Link href="/" className="flex items-center shrink-0" aria-label="Built4Trades.co.uk home">
              <Image
                src="/buildingtrades-logo.png"
                alt="Built4Trades.co.uk"
                width={604}
                height={604}
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <button
              className="rounded-lg border border-primary bg-primary p-2 text-primary-foreground shadow-sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 stroke-[2.5]" />
            </button>
          </div>

          <div className="h-px w-full bg-border" />

          <div className="flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-lg font-medium rounded-lg",
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
      )}
    </header>
  )
}
