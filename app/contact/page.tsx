"use client"

import { FormEvent, useState } from "react"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState("idle")
    setErrorMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xyknqzap", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        form.reset()
        setSubmitState("success")
      } else {
        const data = await response.json().catch(() => null)
        const message =
          data?.errors?.map((error: { message?: string }) => error.message).filter(Boolean).join(" ") ||
          data?.error ||
          "Something went wrong sending your message."
        setErrorMessage(message)
        setSubmitState("error")
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong sending your message.")
      setSubmitState("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              {"Get More Enquiries With a Website Built for Your Business"}
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              {"Fill in the form and I'll personally build you a free demo site within 48 hours. No payment, no obligation, and no pressure."}
            </p>
            <p className="text-foreground/80 text-sm sm:text-base font-medium mt-5">
              Takes less than 2 minutes to send. You can see your site before paying anything.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="New Built4Trades contact form submission" />
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
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
                  name="trade"
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
                    name="phone"
                    type="tel"
                    placeholder={siteConfig.phoneDisplay}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-medium">
                  Tell Me a Bit About Your Business <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a bit about your business and what you're looking for..."
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Get My Free Demo Site"}
              </Button>
              {submitState === "success" && (
                <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Thanks. Your message has been sent and I&apos;ll be in touch shortly.
                </p>
              )}
              {submitState === "error" && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage || "Something went wrong sending your message."} Please try again or use WhatsApp instead.
                </p>
              )}
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-foreground">
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  No contracts
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  Cancel anytime
                </div>
                <div className="rounded-full border border-stone-200 bg-white px-4 py-2">
                  Based in Coventry
                </div>
              </div>
              <p className="text-center text-sm leading-relaxed text-muted-foreground">
                No spam. No pressure. Just a quick demo of what your business could look like online.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Prefer to Just Get in Touch?
            </h2>
            <p className="text-muted-foreground mb-8">
              {"No problem. Message me on WhatsApp, give me a call, or send an email. I reply quickly and keep things straightforward."}
            </p>

            <div className="space-y-6">
              <a
                href={siteConfig.phoneHref}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call me</p>
                  <p className="text-muted-foreground">Happy to talk through your business on {siteConfig.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={siteConfig.whatsappHref}
                className="flex items-start gap-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 transition-colors hover:bg-emerald-50"
              >
                <div className="p-3 rounded-lg bg-emerald-100">
                  <MessageCircle className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Message me on WhatsApp</p>
                  <p className="text-muted-foreground">Usually the fastest way to get started</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Send an email</p>
                  <p className="text-muted-foreground">Drop over the details at {siteConfig.email}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-primary" />
                <p className="font-semibold text-foreground">Quick Turnaround</p>
              </div>
              <p className="text-muted-foreground text-sm">
                {"I'll build a custom demo site for your business within 48 hours, so you can see exactly what you'll get before paying anything."}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
