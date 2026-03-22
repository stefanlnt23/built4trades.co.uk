import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "muted" | "secondary"
}

export function SectionWrapper({
  children,
  className,
  id,
  background = "default",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 lg:py-24",
        {
          "bg-background": background === "default",
          "bg-muted": background === "muted",
          "bg-secondary text-secondary-foreground": background === "secondary",
        },
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 lg:mb-14",
        centered && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
