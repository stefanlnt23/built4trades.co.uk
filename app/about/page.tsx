"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"

export default function AboutPage() {
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
              Built by a Real Person, for Real Trades
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl">
              No big agency. No outsourcing. Just honest, affordable websites built specifically for UK tradespeople.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
              {"I'm Stef, a Coventry-based web developer who noticed that too many skilled tradespeople were losing work simply because they had no online presence — or a website that looked like it was built in 2005."}
            </p>
            <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
              Built4Trades.co.uk exists to fix that. I build honest, affordable, no-nonsense websites specifically for trades. No jargon, no complicated contracts, no waiting months for updates.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
              <p className="text-xl lg:text-2xl font-display font-medium text-foreground italic">
                {"\"Not a big agency. No outsourcing. Just me — making sure your business looks the part online.\""}
              </p>
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Every website I build is designed to do one thing: get you more work. I handle everything — the design, the hosting, the tech stuff — so you can focus on what you do best.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Stef - Built4Trades.co.uk founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg">
              <p className="font-display font-bold text-2xl">Based in Coventry</p>
              <p className="text-primary-foreground/80">Serving all of the UK</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Why I Started */}
      <SectionWrapper background="muted">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Why I Started Built4Trades.co.uk"
            centered={false}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg"
          >
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I used to freelance for agencies, building websites for all sorts of businesses. But I kept seeing the same problem: talented tradespeople were being overcharged for mediocre websites, or they were putting off getting one because the whole process seemed too complicated and expensive.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Meanwhile, their competitors with half the skills but a decent website were getting all the calls.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              That didnt sit right with me. So I started Built4Trades.co.uk — a simple, transparent service where I build you a professional website, you pay a flat monthly fee, and I handle everything else. No surprises, no tech headaches, no contracts tying you down.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              If youre a tradesperson who wants a website that actually works for your business, without the hassle — Im here to help.
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
            Want to See What I Can Do for Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get in touch and Ill build you a free demo site — no payment, no obligation. Just a proper look at what your new website could be.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
