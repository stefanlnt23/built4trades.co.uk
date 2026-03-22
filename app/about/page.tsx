import Image from "next/image"
import Link from "next/link"
import { Brush, MessageCircle, PhoneCall, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

const teamCards = [
  {
    image: "/me.png",
    alt: "Stef from Built4Trades",
    name: "Stef",
    role: "Web Developer",
    badge: "Based in Coventry, UK",
    imageClassName: "object-cover object-[center_18%]",
    description:
      "Stef handles the build, the tech, the hosting, and everything in between. Every site is built from scratch around your trade and your area — no templates, no shortcuts.",
  },
  {
    image: "/bella.png",
    alt: "Bella from Built4Trades",
    name: "Bella",
    role: "Graphic Designer",
    badge: "Branding & Visual Direction",
    imageClassName: "object-cover object-[center_16%]",
    description:
      "Bella handles the look — the layout, the colours, the details that make a site feel sharp and professional. She makes sure your business makes the right impression before anyone picks up the phone.",
  },
]

const valueCards = [
  {
    title: "You deal with us directly",
    description: "You always speak to us, not account managers or middlemen.",
    icon: PhoneCall,
  },
  {
    title: "Your site fits your trade",
    description: "Bella shapes the look around your business, not a recycled template.",
    icon: Brush,
  },
  {
    title: "We handle the full job",
    description: "Build, hosting, edits, and support are covered so you can stay focused on work.",
    icon: Wrench,
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(252,248,242,0.98),rgba(241,237,231,0.96))] pb-10 pt-20 sm:pb-14 sm:pt-24 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(120,113,108,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.45)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="mb-4 font-display text-[2.5rem] font-bold leading-[0.98] text-foreground sm:mb-6 lg:text-5xl xl:text-6xl">
              Built by Two People Who Actually Care
            </h1>
            <p className="max-w-3xl text-base text-muted-foreground sm:text-lg lg:text-xl">
              No big agency. No outsourcing. Just a developer and a designer in Coventry, building proper websites for UK tradespeople.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-10 lg:py-24">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-14">
          <div>
            <SectionHeader title="Why We Started Built4Trades" centered={false} className="mb-6 lg:mb-10" />
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground sm:space-y-5 sm:text-lg">
              <p className="font-medium text-foreground">
                Most websites for trades look fine, but they do not actually help bring in work.
              </p>
              <p>
                Stef kept seeing skilled tradespeople lose work to competitors who simply looked better online.
              </p>
              <p>
                Talented plumbers, electricians, and mechanics were being overlooked because they had no proper site, or one that made them look weaker than they were.
              </p>
              <p>
                At the same time, agencies were charging too much for generic websites that did not really generate leads.
              </p>
              <p className="font-medium text-foreground">
                That is the gap Built4Trades was created to fix.
              </p>
              <p>
                You get a professional website built around your trade, a clear monthly price, and everything handled without jargon or contracts.
              </p>
            </div>
            <blockquote className="mt-6 rounded-[1.5rem] border border-primary/15 bg-primary/5 px-4 py-4 sm:mt-8 sm:rounded-[1.75rem] sm:px-6 sm:py-5">
              <p className="font-display text-lg font-medium italic text-foreground sm:text-xl lg:text-2xl">
                &quot;Not a big agency. No outsourcing. A developer and a designer making sure your business looks the part online.&quot;
              </p>
            </blockquote>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_32%)] blur-2xl" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-100 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                <Image
                  src="/me2.png"
                  alt="Stef from Built4Trades"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-stone-100 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                <Image
                  src="/bella.png"
                  alt="Bella from Built4Trades"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" className="py-10 lg:py-24">
        <SectionHeader
          title="Meet the Team"
          className="mb-8 lg:mb-14"
          subtitle="A small team on purpose. Development and design stay close together, so the work feels joined up from first draft to launch."
        />
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {teamCards.map((member) => (
            <div
              key={member.name}
              className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:rounded-[2rem]"
            >
              <div className="relative h-[320px] overflow-hidden bg-stone-100 sm:h-[25rem] lg:h-[27rem]">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className={member.imageClassName}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{member.role}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">{member.name}</h3>
                <div className="mt-3 inline-flex w-fit rounded-full border border-primary/15 bg-primary/8 px-3 py-1.5 text-xs font-medium text-foreground sm:mt-4 sm:px-4 sm:py-2 sm:text-sm">
                  {member.badge}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-10 lg:py-24">
        <SectionHeader
          title="What That Means for You"
          className="mb-8 lg:mb-14"
          subtitle="You are not paying for agency layers. You are getting a tighter process, clearer communication, and a site built with real attention."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {valueCards.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border bg-card p-4 shadow-sm sm:rounded-[1.75rem] sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-foreground sm:mt-5 sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-7 rounded-[1.5rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(255,237,213,0.75),rgba(255,247,237,0.95))] px-4 py-4 sm:mt-10 sm:rounded-[1.75rem] sm:px-6 sm:py-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <p className="text-base font-medium text-foreground sm:text-lg">Want to work with a small team that actually builds around your business?</p>
          <Button asChild className="mt-4 lg:mt-0">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper background="secondary" className="py-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold lg:mb-6 lg:text-4xl">
            Let&apos;s build something that actually brings you customers
          </h2>
          <p className="mb-6 text-base text-secondary-foreground/80 sm:mb-8 sm:text-lg">
            Get in touch and we&apos;ll build you a free demo site with no payment and no obligation. Just a proper look at what your business could look like online.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Demo</Link>
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
