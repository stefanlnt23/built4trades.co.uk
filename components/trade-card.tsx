"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

interface TradeCardProps {
  image: string
  title: string
  description: string
  href?: string
  ctaText?: string
  badge?: string
  className?: string
  aspectRatio?: "16/9" | "4/3" | "1/1"
  imageClassName?: string
  imageContainerClassName?: string
  imageBackdropClassName?: string
  contentClassName?: string
  badgeClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function TradeCard({
  image,
  title,
  description,
  href,
  ctaText,
  badge,
  className,
  aspectRatio = "16/9",
  imageClassName,
  imageContainerClassName,
  imageBackdropClassName,
  contentClassName,
  badgeClassName,
  titleClassName,
  descriptionClassName,
}: TradeCardProps) {
  const isMobile = useIsMobile()

  return (
    <motion.div
      initial={isMobile ? false : { opacity: 0, y: 20 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={isMobile ? undefined : { once: true, margin: "-50px" }}
      transition={isMobile ? undefined : { duration: 0.5 }}
      className={cn(
        "group rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn("relative isolate w-full overflow-hidden", {
          "aspect-video": aspectRatio === "16/9",
          "aspect-[4/3]": aspectRatio === "4/3",
          "aspect-square": aspectRatio === "1/1",
        }, imageContainerClassName)}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(244,241,236,0.88))]",
            imageBackdropClassName
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.45)_45%,transparent_100%)] opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent via-white/10 to-[rgba(2,6,23,0.22)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-[1.04]",
            imageClassName
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={cn("relative -mt-5 p-5 pt-8 lg:p-6 lg:pt-9 text-center", contentClassName)}>
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/10" />
        {badge && (
          <span
            className={cn(
              "mb-3 inline-flex items-center justify-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
              badgeClassName
            )}
          >
            {badge}
          </span>
        )}
        <h3
          className={cn(
            "font-display font-semibold text-lg lg:text-xl text-card-foreground mb-2",
            titleClassName
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm lg:text-base leading-relaxed mb-4 text-card-foreground/78",
            descriptionClassName
          )}
        >
          {description}
        </p>
        {href && ctaText && (
          <Button asChild variant="outline" size="sm">
            <Link href={href}>{ctaText}</Link>
          </Button>
        )}
      </div>
    </motion.div>
  )
}
