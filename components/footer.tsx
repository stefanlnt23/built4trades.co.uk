import Link from "next/link"
import { MessageCircle, Phone, Wrench } from "lucide-react"
import { CookieSettingsButton } from "@/components/cookie-settings-button"
import { siteConfig } from "@/lib/site"

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services", label: "Custom Website Design" },
  { href: "/services", label: "Mobile-Optimised Sites" },
  { href: "/services", label: "Local SEO" },
  { href: "/services", label: "Hosting & Support" },
]

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold">Built4Trades.co.uk</span>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/80">
              Professional websites for UK tradespeople. No jargon. No contracts. Just results.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Pages</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 font-display text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  Get in Touch
                </Link>
              </li>
              <li>Based in Coventry, UK</li>
              <li>
                <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4 text-primary" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-secondary-foreground/60 sm:text-left">
              &copy; {new Date().getFullYear()} Built4Trades.co.uk | Based in Coventry, UK | built4trades.co.uk
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
              <CookieSettingsButton className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary" />
              <Link href="/contact" className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
