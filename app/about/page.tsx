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
    title: "One point of contact",
    description: "You deal with Stef directly. No account managers, no passing you around.",
    icon: PhoneCall,
  },
  {
    title: "Design that fits your trade",
    description: "Bella makes sure the site looks the part for your specific business, not a generic template.",
    icon: Brush,
  },
  {
    title: "Everything handled",
    description: "Build, hosting, support. We do it all so you don't have to think about it.",
    icon: Wrench,
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(252,248,242,0.98),rgba(241,237,231,0.96))] pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.10),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(120,113,108,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.45)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="mb-6 font-display text-4xl font-bold text-foreground lg:text-5xl xl:text-6xl">
              Built by Two People Who Actually Care
            </h1>
            <p className="max-w-3xl text-lg text-muted-foreground lg:text-xl">
              No big agency. No outsourcing. Just a developer and a designer in Coventry, building proper websites for UK tradespeople.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:gap-14">
          <div>
            <SectionHeader title="Why We Started Built4Trades" centered={false} />
            <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Stef kept seeing the same problem — skilled tradespeople losing work to competitors who simply had a better website. Talented plumbers, electricians, and mechanics being overlooked because they looked unprofessional online, or had no online presence at all.
              </p>
              <p>
                Meanwhile agencies were overcharging them for generic sites that didn&apos;t actually get results. That didn&apos;t sit right. So Built4Trades was born — a straightforward service where you get a professional website built around your trade, pay a flat monthly fee, and we handle everything else. No surprises. No jargon. No contracts tying you down.
              </p>
            </div>
            <blockquote className="mt-8 rounded-[1.75rem] border border-primary/15 bg-primary/5 px-6 py-5">
              <p className="font-display text-xl font-medium italic text-foreground lg:text-2xl">
                &quot;Not a big agency. No outsourcing. A developer and a designer making sure your business looks the part online.&quot;
              </p>
            </blockquote>
          </div>

          <div className="relative">
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

      <SectionWrapper background="muted">
        <SectionHeader
          title="Meet the Team"
          subtitle="A small team on purpose. Development and design stay close together, so the work feels joined up from first draft to launch."
        />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {teamCards.map((member) => (
            <div
              key={member.name}
              className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-[25rem] overflow-hidden bg-stone-100 lg:h-[27rem]">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className={member.imageClassName}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{member.role}</p>
                <h3 className="mt-2 font-display text-3xl font-bold text-foreground">{member.name}</h3>
                <div className="mt-4 inline-flex w-fit rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-medium text-foreground">
                  {member.badge}
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          title="What That Means for You"
          subtitle="You are not paying for agency layers. You are getting a tighter process, clearer communication, and a site built with real attention."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueCards.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(255,237,213,0.75),rgba(255,247,237,0.95))] px-6 py-6 lg:flex lg:items-center lg:justify-between lg:px-8">
          <p className="text-lg font-medium text-foreground">Want to see the kind of sites we build?</p>
          <Button asChild className="mt-4 lg:mt-0">
            <Link href="/portfolio">View Our Work</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-display text-3xl font-bold lg:text-4xl">
            Want to See What We Can Do for Your Business?
          </h2>
          <p className="mb-8 text-lg text-secondary-foreground/80">
            Get in touch and we&apos;ll build you a free demo site — no payment, no obligation. Just a proper look at what your new website could be.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
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
