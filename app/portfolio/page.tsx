"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"

type PortfolioItem = {
  image?: string
  images?: string[]
  url?: string
  promo?: boolean
  trade: string
  businessName: string
  description: string
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
  },
  {
    images: [
      "/flori-si-frunze-1.webp",
      "/flori-si-frunze-2.webp",
      "/flori-si-frunze-3.webp",
      "/flori-si-frunze-4.webp",
      "/flori-si-frunze-5.webp",
    ],
    url: "https://florisifrunze.com",
    trade: "Gardening & Landscaping",
    businessName: "Flori si Frunze",
    description: "A gardening and landscaping website built to showcase services clearly and turn local enquiries into booked work.",
  },
  {
    images: [
      "/stefan-lenta-1.webp",
      "/stefan-lenta-2.webp",
      "/stefan-lenta-3.webp",
      "/stefan-lenta-4.webp",
    ],
    url: "https://stefanlenta.uk",
    trade: "Professional Portfolio",
    businessName: "Stefan Lenta",
    description: "A personal portfolio site built to present data analytics, training, and operational excellence work with a clear professional profile.",
  },
  {
    images: [
      "/web-force-1.webp",
      "/web-force-2.webp",
      "/web-force-3.webp",
      "/web-force-4.webp",
    ],
    url: "https://web-force.info",
    trade: "Web Development Agency",
    businessName: "Web-Force",
    description: "A web agency site built to present services clearly and drive enquiries for custom websites, e-commerce, SEO, and support.",
  },
  {
    promo: true,
    url: "/contact",
    trade: "35% Off",
    businessName: "Portfolio Wall Spot",
    description: "One featured spot is still open on the portfolio wall. Claim it now and get 35% off your site.",
  },
] satisfies PortfolioItem[]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Sites Built for Real Trades
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              These are real sites built for real businesses. Want your business featured next?
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => {
            if (item.promo) {
              return (
                <div
                  key={item.businessName || item.url || index}
                  className="group flex min-h-[28rem] flex-col justify-between rounded-xl border border-primary/20 bg-gradient-to-br from-orange-50 via-card to-amber-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 lg:p-8"
                >
                  <div>
                    <span className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                      {item.trade}
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-card-foreground lg:text-4xl">
                      Claim Your Spot on the Portfolio Wall
                    </h3>
                    <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground lg:text-lg">
                      {item.description}
                    </p>
                  </div>
                  <Button asChild size="lg" className="mt-8 w-full sm:w-fit">
                    <Link href={item.url ?? "/contact"}>Claim Now</Link>
                  </Button>
                </div>
              )
            }

            const hasContent = Boolean(item.trade || item.businessName || item.description)
            const usesCarousel = Boolean(item.images && item.images.length > 1)
            const shouldStretchImage = !hasContent && !usesCarousel
            return (
              <div
                key={item.businessName || item.url || index}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`relative overflow-hidden ${hasContent ? "aspect-video" : "h-full min-h-[28rem]"}`}>
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
                    className={`${shouldStretchImage ? "object-fill scale-[1.38]" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <Link
                        href={item.url ?? "#"}
                        target={item.url?.startsWith("http") ? "_blank" : undefined}
                        rel={item.url?.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {item.url === "/contact" ? "Claim This Spot" : "View Site"} <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                {hasContent && (
                  <div className="p-5 lg:p-6">
                    {item.trade && (
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {item.trade}
                      </span>
                    )}
                    {item.businessName && (
                      <h3 className="font-display font-semibold text-lg lg:text-xl text-card-foreground mt-1 mb-2">
                        {item.businessName}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper background="secondary">
        <div
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Want Your Business on the Wall?
          </h2>
          <p className="text-secondary-foreground/80 text-lg mb-8">
            {"We're filling the final featured slot now. If you want the 35% portfolio deal and a site built around your business, get in touch before that last place goes."}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Claim Your Spot</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
