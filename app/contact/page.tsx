"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionWrapper } from "@/components/section-wrapper"

export default function ContactPage() {
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
              {"Let's Get Your Business Online"}
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              {"Fill in the form and I'll build you a free demo site within 48 hours — no payment, no obligation."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="John Smith"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="trade" className="text-foreground font-medium">
                  Trade / Business Type
                </Label>
                <Input
                  id="trade"
                  placeholder="e.g. Plumber, Electrician, Builder"
                  className="bg-background"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="07123 456789"
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Message <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me a bit about your business and what you're looking for..."
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Request Your Free Demo
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Prefer to Just Get in Touch?
            </h2>
            <p className="text-muted-foreground mb-8">
              {"No problem. Drop me a message on WhatsApp, give me a call, or send an email. I'll get back to you as soon as I can."}
            </p>

            <div className="space-y-6">
              <a
                href="tel:+447123456789"
                className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Give me a call</p>
                  <p className="text-muted-foreground">07123 456 789</p>
                </div>
              </a>

              <a
                href="https://wa.me/447123456789"
                className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp me</p>
                  <p className="text-muted-foreground">Quick and easy</p>
                </div>
              </a>

              <a
                href="mailto:hello@built4trades.co.uk"
                className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Send an email</p>
                  <p className="text-muted-foreground">hello@built4trades.co.uk</p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">Quick Turnaround</p>
              </div>
              <p className="text-muted-foreground text-sm">
                {"I'll have a demo site ready for your trade within 48 hours of hearing from you. No messing about."}
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  )
}
