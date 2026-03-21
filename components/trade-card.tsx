"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TradeCardProps {
  image: string
  title: string
  description: string
  href?: string
  ctaText?: string
  className?: string
  aspectRatio?: "16/9" | "4/3" | "1/1"
}

export function TradeCard({
  image,
  title,
  description,
  href,
  ctaText,
  className,
  aspectRatio = "16/9",
}: TradeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn("relative w-full overflow-hidden", {
          "aspect-video": aspectRatio === "16/9",
          "aspect-[4/3]": aspectRatio === "4/3",
          "aspect-square": aspectRatio === "1/1",
        })}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 lg:p-6">
        <h3 className="font-display font-semibold text-lg lg:text-xl text-card-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4">
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
