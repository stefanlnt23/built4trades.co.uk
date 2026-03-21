"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    trade: "Mobile Mechanic",
    businessName: "FastFix Mobile Mechanics",
    description: "A clean, professional site designed to get mobile mechanics found by drivers who need roadside help.",
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    trade: "Emergency Plumber",
    businessName: "AquaFlow Plumbing",
    description: "Built for quick contact with prominent phone numbers and emergency call-to-action buttons.",
  },
  {
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    trade: "Electrician",
    businessName: "Bright Spark Electrical",
    description: "Professional and trustworthy design that showcases qualifications and builds customer confidence.",
  },
  {
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
    trade: "Roofing Company",
    businessName: "Peak Roofing Solutions",
    description: "Gallery-focused design to showcase completed projects and demonstrate quality workmanship.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    trade: "Accountant",
    businessName: "Clear Accounts",
    description: "Clean, professional design that builds trust and clearly explains services offered.",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    trade: "Builder",
    businessName: "Solid Build Construction",
    description: "Project gallery and testimonials to demonstrate reliability and quality of work.",
  },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Demo Sites Built for Real Trades
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              Every site below was built to show what's possible for that trade. Want one for yours?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.businessName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.businessName}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="gap-2"
                    asChild
                  >
                    <Link href="#">
                      View Demo <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-5 lg:p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {item.trade}
                </span>
                <h3 className="font-display font-semibold text-lg lg:text-xl text-card-foreground mt-1 mb-2">
                  {item.businessName}
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Want to See One Built for YOUR Trade?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8">
            {"We'll build it free — no obligation. Tell us about your trade and we'll create a custom demo website just for you."}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Request Your Free Demo</Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
