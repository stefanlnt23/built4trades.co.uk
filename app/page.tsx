"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, CheckCircle2, XCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TradeCard } from "@/components/trade-card"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"

const trades = [
  "Mechanics",
  "Plumbers",
  "Electricians",
  "Builders",
  "Roofers",
  "Accountants",
]

const tradeCards = [
  {
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
    title: "Mobile Mechanic",
    description: "Get found by local drivers who need you now.",
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    title: "Emergency Plumber",
    description: "Be the first call when pipes burst at midnight.",
  },
  {
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
    title: "Electrician",
    description: "Light up your online presence and get more bookings.",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    title: "Builder",
    description: "Showcase your projects and win bigger contracts.",
  },
  {
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
    title: "Roofer",
    description: "Rise above the competition with a professional site.",
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    title: "Accountant",
    description: "Build trust with clients before they even call.",
  },
]

const stats = [
  {
    stat: "87%",
    text: "of people search online before hiring a local tradesperson",
  },
  {
    stat: "39%",
    text: "more earnings for businesses with a professional website",
  },
  {
    stat: "0.05s",
    text: "First impressions happen fast — a bad site loses the job instantly",
  },
  {
    stat: "24/7",
    text: "Your website works around the clock, even when you're off",
  },
]

const features = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    title: "Custom Website Design",
    description: "A website that looks professional and matches your trade. No templates — everything is built for you.",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    title: "Mobile-Optimised",
    description: "Most of your customers search on their phones. Your site will look great on every screen size.",
  },
  {
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?w=800&q=80",
    title: "Shows Up on Google",
    description: "We set up your site so local customers can find you when they search for your trade in their area.",
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    title: "Contact Forms & Click-to-Call",
    description: "Make it easy for customers to reach you instantly — by phone, email, or WhatsApp.",
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    title: "Monthly Hosting Included",
    description: "No hidden costs. Your hosting, security, and backups are all included in your monthly price.",
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    title: "UK-Based Support",
    description: "Real support from a real person in the UK. No call centres. No ticket queues.",
  },
]

const howItWorks = [
  {
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
    title: "1. We Build Your Free Demo",
    description: "Tell us your trade and we'll build you a fully designed demo website — completely free, no strings attached.",
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    title: "2. You Review It",
    description: "We show you exactly what your new website will look like. You tell us any changes — we handle everything.",
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    title: "3. Go Live from £29/month",
    description: "Happy with it? We go live. You start getting found on Google and receiving enquiries the same week.",
  },
]

const negatives = [
  "Customers can't find you on Google",
  "You look less professional than competitors",
  "No way for customers to contact you at 11pm",
  "You rely entirely on word of mouth",
  "Jobs go to whoever shows up first in search",
]

const positives = [
  "Appear in local Google searches",
  "Instantly look more professional and trustworthy",
  "Customers can call, email or WhatsApp from your site 24/7",
  "Reviews and testimonials build trust automatically",
  "New enquiries while you're on the job",
]

const reviews = [
  {
    name: "Dave Hartley",
    trade: "Plumber, Birmingham",
    rating: 5,
    text: "Stef built me a proper website in less than a week. I've already had three new customers find me through Google. Absolutely worth every penny.",
  },
  {
    name: "Karen Mills",
    trade: "Electrician, Manchester",
    rating: 5,
    text: "I put off getting a website for years because I thought it would be complicated. Built4Trades.co.uk made it dead easy. My site looks brilliant and I didn't have to do anything.",
  },
  {
    name: "Tony Richardson",
    trade: "Builder, Leeds",
    rating: 5,
    text: "Finally a web designer who speaks plain English! No jargon, no messing about. Just a solid website that makes my business look professional.",
  },
]

const cities = [
  "London",
  "Manchester",
  "Birmingham",
  "Glasgow",
  "Bristol",
  "Leeds",
  "Cardiff",
  "Edinburgh",
  "Liverpool",
  "Sheffield",
  "Newcastle",
  "Coventry",
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Professional tradesperson at work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 text-balance">
              Your Trade Deserves a Website That Works as Hard as You Do
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              We build fast, professional websites for UK tradespeople. No jargon. No contracts. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Get a Free Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-secondary-foreground/80 text-sm mb-4">
              Trusted by tradespeople across the UK
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
              {trades.map((trade) => (
                <span
                  key={trade}
                  className="text-secondary-foreground font-medium text-sm lg:text-base"
                >
                  {trade}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Built for Your Trade */}
      <SectionWrapper>
        <SectionHeader
          title="Built for Your Trade"
          subtitle="Whatever your trade, we build websites that get you found and get you hired."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tradeCards.map((card) => (
            <TradeCard
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Why No Website Is Costing You Work */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-4">
            Every Day Without a Website Is a Day Your Competition Gets the Call
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-secondary-foreground/5"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-3">
                {item.stat}
              </div>
              <p className="text-secondary-foreground/80 text-sm lg:text-base">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl lg:text-2xl font-medium text-secondary-foreground mb-6">
            {"Don't lose another job to a competitor with a website."}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Yours Today</Link>
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper>
        <SectionHeader
          title="Everything Your Business Needs Online"
          subtitle="No technical jargon. No hidden costs. Just everything you need to get found and get hired."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((card) => (
            <TradeCard
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper background="muted">
        <SectionHeader
          title="How It Works"
          subtitle="From zero to live website in days — here's the process"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {howItWorks.map((card) => (
            <TradeCard
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Before/After Comparison */}
      <SectionWrapper>
        <SectionHeader
          title="What a Proper Website Does for Your Business"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-xl p-6 lg:p-8 border border-border"
          >
            <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground/60 mb-6">
              Without a Website
            </h3>
            <ul className="space-y-4">
              {negatives.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-xl p-6 lg:p-8 border border-primary/20"
          >
            <h3 className="font-display text-xl lg:text-2xl font-bold text-primary mb-6">
              With a Built4Trades.co.uk Website
            </h3>
            <ul className="space-y-4">
              {positives.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Google Reviews */}
      <SectionWrapper background="muted">
        <SectionHeader
          title="What Tradespeople Are Saying"
          subtitle="Real businesses, real results"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-auto">
                  Google Review
                </span>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                {`"${review.text}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.trade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* UK Coverage */}
      <SectionWrapper>
        <SectionHeader
          title="Based in Coventry. Building for the Whole of the UK."
          subtitle="Whether you're a plumber in Manchester, an electrician in Bristol, or a mechanic in Glasgow — we build websites for tradespeople all over the UK. Everything is handled remotely. You never need to leave your van."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {city}
            </span>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-secondary-foreground/80 text-lg lg:text-xl mb-8">
            Get a free demo website built for your trade — no payment, no obligation. See exactly what your new site could look like.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">Request Your Free Demo</Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
