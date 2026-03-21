import Link from "next/link"
import { Wrench } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold">
                Built4Trades.co.uk
              </span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Professional websites for UK tradespeople. No jargon. No contracts. Just results.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>Based in Coventry, UK</li>
              <li>
                <a
                  href="mailto:hello@built4trades.co.uk"
                  className="hover:text-primary transition-colors"
                >
                  hello@built4trades.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Built4Trades.co.uk | Based in Coventry, UK | built4trades.co.uk
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
