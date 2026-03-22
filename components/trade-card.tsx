import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
  return (
    <div
      className={cn(
        "group rounded-[1.5rem] transition-all duration-300 hover:-translate-y-1 sm:rounded-[1.75rem]",
        className
      )}
    >
      <div
        className={cn("relative isolate w-full overflow-hidden", {
          "h-[220px] sm:h-auto sm:aspect-video": aspectRatio === "16/9",
          "h-[220px] sm:h-auto sm:aspect-[4/3]": aspectRatio === "4/3",
          "h-[220px] sm:h-auto sm:aspect-square": aspectRatio === "1/1",
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
      <div className={cn("relative -mt-4 p-4 pt-6 text-center sm:-mt-5 sm:p-5 sm:pt-8 lg:p-6 lg:pt-9", contentClassName)}>
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/10" />
        {badge && (
          <span
            className={cn(
              "mb-2 inline-flex items-center justify-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:mb-3 sm:text-[11px]",
              badgeClassName
            )}
          >
            {badge}
          </span>
        )}
        <h3
          className={cn(
            "mb-2 font-display text-base font-semibold text-card-foreground sm:text-lg lg:text-xl",
            titleClassName
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mb-3 text-sm leading-relaxed text-card-foreground/78 sm:mb-4 lg:text-base",
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
    </div>
  )
}
