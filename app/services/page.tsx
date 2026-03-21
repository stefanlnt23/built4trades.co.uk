"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TradeCard } from "@/components/trade-card"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"

const services = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Custom Website Design",
    description: "Every website is designed specifically for your trade and your business. No generic templates — your site will look professional and unique. We work with you to get the design exactly right.",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    title: "Mobile-Optimised",
    description: "Most of your customers are searching on their phones — whether they're sat in a broken-down car or dealing with a burst pipe. Your website will look and work perfectly on every screen size.",
  },
  {
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?w=800&q=80",
    title: "Shows Up on Google",
    description: "We set up your website so local customers can find you when they search for your trade in their area. No complicated SEO jargon — just the basics done properly so you get found.",
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    title: "Contact Forms & Click-to-Call",
    description: "Make it dead easy for customers to reach you. One tap to call, one tap to email, one tap to WhatsApp. Your site works around the clock so customers can contact you anytime.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    title: "Monthly Hosting & Maintenance",
    description: "Everything is included in your monthly price. Hosting, security updates, backups, and any small changes you need. You don't have to worry about the technical stuff — that's my job.",
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    title: "UK-Based Support",
    description: "When you need help, you're talking to me — not a call centre or a ticket queue. Fast responses, plain English, and someone who actually understands your business.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Everything Your Business Needs Online
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl">
              A professional website that gets you found, makes you look the part, and brings in new customers. All for a simple monthly price with no hidden costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TradeCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* What Makes Us Different */}
      <SectionWrapper background="muted">
        <SectionHeader
          title="What Makes Built4Trades.co.uk Different"
          subtitle="We're not a big agency churning out generic websites. We're specialists who understand trades businesses."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="font-display text-5xl font-bold text-primary mb-4">1</div>
            <h3 className="font-display text-xl font-semibold mb-2">Built for Trades</h3>
            <p className="text-muted-foreground">
              Every website is designed specifically for tradespeople. We know what works because it's all we do.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="font-display text-5xl font-bold text-primary mb-4">2</div>
            <h3 className="font-display text-xl font-semibold mb-2">No Jargon</h3>
            <p className="text-muted-foreground">
              We speak plain English. You'll always know exactly what you're getting and what it costs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="font-display text-5xl font-bold text-primary mb-4">3</div>
            <h3 className="font-display text-xl font-semibold mb-2">Personal Service</h3>
            <p className="text-muted-foreground">
              You deal with one person from start to finish. No being passed around departments.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Just get in touch and we'll figure it out together. No pressure, no sales pitch — just an honest chat about what would work best for your business.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
