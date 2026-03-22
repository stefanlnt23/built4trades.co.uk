"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, MessageCircle, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"
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
  const pathname = usePathname()

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
      className="fixed top-0 left-0 right-0 z-[70] border-b border-border bg-card shadow-sm"
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
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              {siteConfig.phoneDisplay}
            </a>
            <Button asChild>
              <Link href="/contact">Get a Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="relative flex items-center lg:hidden">
            {!isOpen ? <MobileMenuArrow /> : null}
            <button
              className="relative z-[90] rounded-lg border border-primary bg-primary p-2 text-primary-foreground shadow-sm"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-6 w-6 stroke-[2.5]" /> : <Menu className="h-6 w-6 stroke-[2.5]" />}
            </button>
          </div>
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
            <div className="mt-auto space-y-3 pt-6 border-t border-border">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-base font-medium text-foreground"
              >
                <Phone className="h-5 w-5 text-primary" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border px-4 py-3 text-base font-medium text-foreground"
              >
                <MessageCircle className="h-5 w-5 text-primary" />
                WhatsApp Us
              </a>
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

function MobileMenuArrow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-full z-[85] mt-1"
    >
      <div
        className="opacity-100 drop-shadow-[0_0_12px_rgba(249,115,22,0.32)]"
      >
        <svg
          viewBox="0 0 44 56"
          className="h-[3.2rem] w-[2.6rem] text-primary motion-safe:animate-menu-arrow-active"
          fill="none"
        >
          <path
            d="M22 7C22 18 22 28 22 38"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M12 18L22 7L32 18"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
