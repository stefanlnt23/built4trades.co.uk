"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for getting started with a professional online presence.",
    features: [
      "1-page website",
      "Mobile-friendly design",
      "Hosting included",
      "Contact form",
      "Basic on-page SEO",
    ],
    recommended: false,
  },
  {
    name: "Pro",
    price: "49",
    description: "Everything you need to dominate local search and win more work.",
    features: [
      "Everything in Starter",
      "Multi-page site (up to 5 pages)",
      "Local SEO setup",
      "Google Business profile help",
      "Google review link setup",
      "Monthly content updates",
      "Priority support",
    ],
    recommended: true,
  },
]

export default function PricingPage() {
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
              Simple Pricing. No Surprises.
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              No setup fees. No contracts. No hidden costs. Just a flat monthly price that includes everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative rounded-2xl p-8 border",
                plan.recommended
                  ? "bg-primary/5 border-primary shadow-lg shadow-primary/10"
                  : "bg-card border-border"
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    Recommended
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                    £{plan.price}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full"
                size="lg"
                variant={plan.recommended ? "default" : "outline"}
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-primary font-semibold mb-4">
            Setup fee waived if you go live within 7 days of seeing your demo
          </p>
          <p className="text-muted-foreground text-sm">
            No contracts. Cancel anytime. All prices include UK hosting and support.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* FAQ Teaser */}
      <SectionWrapper background="muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Start With a Free Demo
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {"No payment needed until you're ready to go live. We'll build you a complete demo website for free — so you can see exactly what you're getting before you commit."}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Request Your Free Demo</Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
