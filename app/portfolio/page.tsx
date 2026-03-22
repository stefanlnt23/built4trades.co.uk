"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

type PortfolioItem = {
  image?: string
  images?: string[]
  url?: string
  promo?: boolean
  trade: string
  businessName: string
  description: string
  summary?: string
  highlights?: string[]
}

function shuffleImages(images: string[]) {
  const shuffled = [...images]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }

  return shuffled
}

function getRandomSlideDelay() {
  return 2400 + Math.floor(Math.random() * 2800)
}

function RotatingPortfolioImage({
  images,
  alt,
  priority = false,
}: {
  images: string[]
  alt: string
  priority?: boolean
}) {
  const [shuffledImages, setShuffledImages] = useState(images)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoRotateEnabled, setIsAutoRotateEnabled] = useState(false)

  useEffect(() => {
    setShuffledImages(shuffleImages(images))
    setActiveIndex(0)
  }, [images])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)")
    const applyPreference = () => setIsAutoRotateEnabled(mediaQuery.matches)

    applyPreference()
    mediaQuery.addEventListener("change", applyPreference)

    return () => mediaQuery.removeEventListener("change", applyPreference)
  }, [])

  useEffect(() => {
    if (!isAutoRotateEnabled) {
      return
    }

    if (shuffledImages.length < 2) {
      return
    }

    const timeout = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % shuffledImages.length)
    }, getRandomSlideDelay())

    return () => window.clearTimeout(timeout)
  }, [activeIndex, shuffledImages, isAutoRotateEnabled])

  return (
    <div className="absolute inset-0 will-change-transform" style={{ zIndex: 1 }}>
      <Image
        src={shuffledImages[activeIndex]}
        alt={alt}
        fill
        priority={priority && activeIndex === 0}
        quality={80}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

const portfolioItems = [
  {
    images: [
      "/adl-mechanic-1.webp",
      "/adl-mechanic-2.webp",
      "/adl-mechanic-3.webp",
      "/adl-mechanic-4.webp",
      "/adl-mechanic-5.webp",
    ],
    url: "https://adlmechanic.uk",
    trade: "Mobile Mechanic",
    businessName: "ADL Mechanic",
    description: "A 24/7 mobile mechanic and servicing website built to convert urgent callouts and local service enquiries.",
    summary: "Live client site",
    highlights: [
      "Clear mobile-first layout for urgent customers",
      "Fast call and enquiry paths built into the page flow",
      "Service-led structure designed for local search visibility",
    ],
  },
  {
    images: [
      "/daw-mobile-mechanic-1.webp",
      "/daw-mobile-mechanic-2.webp",
      "/daw-mobile-mechanic-3.webp",
      "/daw-mobile-mechanic-4.webp",
    ],
    url: "https://dawmobilemechanic.co.uk",
    trade: "Mobile Mechanic",
    businessName: "DAW Mobile Mechanic",
    description: "A local mobile mechanic website built to drive bookings, breakdown enquiries, and trust with clear service-led messaging.",
    summary: "Live client site",
    highlights: [
      "Trust-focused messaging for breakdown and repair work",
      "Clear service sections to help visitors self-qualify fast",
      "Built to turn traffic into direct calls and quote enquiries",
    ],
  },
  {
    promo: true,
    url: "/contact",
    trade: "35% Off",
    businessName: "Your Business Here Next",
    description: "We are still taking on a small number of service and trade websites. Claim the open featured spot and get 35% off your site.",
    summary: "One featured spot open",
    highlights: [
      "Free demo before you commit",
      "Built around your trade, area, and services",
      "Featured here once your site is live",
    ],
  },
] satisfies PortfolioItem[]

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Real Websites We&apos;ve Built
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              We&apos;re selective about who we take on. Every site gets full attention — that&apos;s why the portfolio is small and the results are real.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {portfolioItems.map((item, index) => {
            if (item.promo) {
              return (
                <div
                  key={item.businessName || item.url || index}
                  className="group flex h-full min-h-[42rem] flex-col rounded-xl border border-dashed border-primary/35 bg-gradient-to-br from-orange-50 via-card to-amber-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 lg:p-8"
                >
                  <div className="flex flex-1 flex-col">
                    <span className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                      {item.trade}
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-card-foreground lg:text-4xl">
                      {item.businessName}
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground lg:text-lg">
                      {item.description}
                    </p>
                    {item.highlights && (
                      <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/85">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
                    <Link href={item.url ?? "/contact"}>Get a Free Demo</Link>
                  </Button>
                </div>
              )
            }

            const usesCarousel = Boolean(item.images && item.images.length > 1)
            return (
              <div
                key={item.businessName || item.url || index}
                className="group flex h-full min-h-[42rem] flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="relative h-60 overflow-hidden">
                  {usesCarousel ? (
                    <RotatingPortfolioImage
                      images={item.images ?? []}
                      alt={item.businessName || "Portfolio image"}
                      priority={index === 0}
                    />
                  ) : (
                    <Image
                      src={item.image ?? item.images?.[0] ?? "/placeholder.jpg"}
                      alt={item.businessName || "Portfolio image"}
                      fill
                      priority={index === 0}
                      quality={80}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5 lg:p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {item.trade}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-card-foreground lg:text-xl">
                    {item.businessName}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                    {item.summary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
                    {item.description}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {item.highlights?.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                      <Link
                        href={item.url ?? "#"}
                        target={item.url?.startsWith("http") ? "_blank" : undefined}
                        rel={item.url?.startsWith("http") ? "noreferrer" : undefined}
                      >
                        View Live Site <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Want Your Business on the Wall?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8">
            Still taking on new clients. Get 35% off and have your business featured on this page.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Claim Your Spot</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white hover:text-foreground">
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Us <MessageCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
