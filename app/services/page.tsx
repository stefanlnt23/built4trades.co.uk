import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  PhoneCall,
  Search,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

const services = [
  {
    label: "BUILT FOR YOUR TRADE",
    title: "A Website That Helps Turn Visitors Into Customers",
    copy:
      "No templates, no generic layouts. Every site is shaped around your trade, your area, and the jobs you want more of so it looks credible and gives people a clear reason to contact you.",
    visual: "website",
    image: "/adl-mechanic-1.webp",
    imageAlt: "ADL Mechanic website hero section",
  },
  {
    label: "MOBILE-FIRST",
    title: "Looks Sharp and Loads Fast on Every Phone",
    copy:
      "Most of your customers are searching on their phones — on a job, in the car, at midnight with a burst pipe. Your site will look sharp and load fast on every device.",
    visual: "mobile",
    image: "/aaron-mobile-view.webp",
    imageAlt: "Trade website shown on a real phone screen",
  },
  {
    label: "LOCAL VISIBILITY",
    title: "Built to Help Local Customers Find You",
    copy:
      "We set up your site properly so local customers can find you when they search for your trade. No complicated SEO jargon — just the basics done right so you get found.",
    visual: "search",
  },
  {
    label: "EASY CONTACT",
    title: "Customers Can Reach You in One Tap",
    copy:
      "Click-to-call, WhatsApp buttons, and contact forms built into every page. Your site works around the clock so customers can reach you the moment they decide to book.",
    visual: "contact",
  },
  {
    label: "HANDLED FOR YOU",
    title: "Everything Technical Is Handled for You",
    copy:
      "Everything is included in your monthly price. Hosting, SSL security, backups, and any small changes you need. You never have to think about the technical side.",
    visual: "maintenance",
  },
  {
    label: "REAL HUMAN HELP",
    title: "Direct Support When You Need a Change",
    copy:
      "When you need something, you're talking to Stef directly — not a call centre or a ticket queue. Fast responses, plain English, and someone who actually knows your site.",
    visual: "support",
  },
] as const

const flowSteps = [
  {
    title: "We Build Your Site",
    copy: "Tailored to your trade, area, and the kind of jobs you want more of.",
  },
  {
    title: "We Set It Up on Google",
    copy: "The local SEO basics are handled properly so customers can actually find you.",
  },
  {
    title: "We Handle the Hosting",
    copy: "Fast hosting, SSL, backups, and updates are looked after in the background.",
  },
  {
    title: "You Get Enquiries",
    copy: "Calls, WhatsApp messages, and contact form leads from people ready to book.",
  },
] as const

const pricingPlans = [
  {
    name: "Basic",
    price: "£15.90/month",
    summary: "1-page site, get online fast",
    featured: false,
  },
  {
    name: "Starter",
    price: "£25/month",
    summary: "Up to 3 pages, most trades choose this",
    featured: true,
  },
  {
    name: "Pro",
    price: "£49/month",
    summary: "Up to 15 pages, full local SEO setup",
    featured: false,
  },
] as const

const comparisonPoints = [
  {
    label: "Traditional agency",
    points: ["Large upfront quote", "Extras for hosting or edits", "Often slower to update"],
  },
  {
    label: "DIY builder",
    points: ["Cheap to start", "Still takes your time", "Easy to end up with a weak site"],
  },
  {
    label: "Built4Trades",
    points: ["Low monthly pricing", "Hosting, edits, and support included", "Built around getting more enquiries"],
  },
] as const

function ServiceVisual({ service }: { service: (typeof services)[number] }) {
  if (service.visual === "website") {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-stone-200 bg-stone-100 shadow-[0_22px_50px_rgba(15,23,42,0.10)]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 bg-white/88 px-4 py-3 backdrop-blur-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-medium text-stone-500">adlmechanic.uk</span>
        </div>
      </div>
    )
  }

  if (service.visual === "mobile") {
    return (
      <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-stone-200/80 bg-[linear-gradient(180deg,#fcfcfb_0%,#f5f5f4_100%)] p-4 shadow-[0_22px_50px_rgba(120,113,108,0.08)]">
        <div className="absolute left-4 top-4 z-20 rounded-full border border-stone-200 bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-700 shadow-sm">
          Mobile Preview
        </div>
        <div className="absolute bottom-6 left-6 h-16 w-16 rounded-full bg-orange-100/60 blur-2xl" />
        <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-stone-200/70 blur-2xl" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[220px] items-center justify-center pt-8">
          <div className="relative h-full min-h-[290px] w-full overflow-hidden rounded-[2.25rem] border-[8px] border-stone-200 bg-white p-1.5 shadow-[0_24px_45px_rgba(120,113,108,0.18)]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="rounded-[1.75rem] object-cover object-top"
              sizes="220px"
            />
            <div className="absolute inset-x-0 top-0 h-12 rounded-t-[1.75rem] bg-gradient-to-b from-stone-900/12 to-transparent" />
            <div className="absolute left-1/2 top-2.5 h-1.5 w-16 -translate-x-1/2 rounded-full bg-stone-300" />
            <div className="absolute inset-x-3 bottom-3 z-20 rounded-[1.1rem] border border-white/60 bg-white/92 px-3 py-2 shadow-lg backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-500">Real Mobile View</p>
              <p className="mt-1 text-xs font-medium text-foreground">Your site stays clear, fast, and easy to use on the go.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (service.visual === "search") {
    return (
      <div className="relative aspect-[16/10] rounded-[1.5rem] border border-emerald-200/70 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.16),transparent_34%),linear-gradient(180deg,#f7fdf8_0%,#edf9f0_100%)] p-4 shadow-[0_22px_50px_rgba(22,101,52,0.10)]">
        <div className="rounded-[1.2rem] border border-stone-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-500">
            <Search className="h-4 w-4 text-stone-400" />
            <span>mobile mechanic coventry</span>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">Highlighted Result</p>
              <p className="mt-1 font-semibold text-foreground">ADL Mechanic | Mobile Mechanic Coventry</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Local mobile mechanic for diagnostics, servicing and urgent callouts.
              </p>
            </div>
            <div className="rounded-xl border border-stone-200 p-3">
              <p className="font-medium text-foreground">Mobile Mechanic Coventry | Same-Day Callouts</p>
              <p className="mt-1 text-sm text-muted-foreground">Trade business result shown lower on the page.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (service.visual === "contact") {
    return (
      <div className="relative aspect-[16/10] rounded-[1.5rem] border border-orange-200/70 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.16),transparent_36%),linear-gradient(180deg,#fffaf5_0%,#fff2e7_100%)] p-5 shadow-[0_22px_50px_rgba(194,65,12,0.10)]">
        <div className="mx-auto aspect-[9/18.5] h-full max-h-[260px] w-[150px] overflow-hidden rounded-[2rem] border-[7px] border-stone-900 bg-stone-900 p-1.5 shadow-[0_24px_45px_rgba(15,23,42,0.18)]">
          <div className="relative h-full overflow-hidden rounded-[1.5rem] bg-white p-3">
            <div className="space-y-1.5">
              <div className="h-2.5 w-20 rounded-full bg-stone-200" />
              <div className="h-9 rounded-2xl border border-stone-200 bg-stone-50" />
              <div className="h-8 rounded-2xl border border-stone-200 bg-stone-50" />
              <div className="h-9 rounded-2xl border border-stone-200 bg-stone-50" />
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-[1.1rem] border border-stone-200 bg-stone-50 p-2">
              <div className="flex items-center justify-center gap-1.5 rounded-2xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-white">
                <PhoneCall className="h-3 w-3" />
                Call Now
              </div>
              <div className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-foreground">
                <MessageCircle className="h-3 w-3 text-emerald-600" />
                WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (service.visual === "maintenance") {
    return (
      <div className="relative min-h-[320px] rounded-[1.5rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_34%),linear-gradient(180deg,#fafbfd_0%,#f2f6fb_100%)] p-5 shadow-[0_22px_50px_rgba(51,65,85,0.10)]">
        <div className="flex h-full min-h-[280px] flex-col rounded-[1.4rem] border border-slate-200 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Site Care Included</p>
              <p className="text-sm text-muted-foreground">Always handled in the background</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {["Hosting", "Security", "Backups", "Updates"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="text-sm font-medium text-foreground">{item}</span>
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative aspect-[16/10] rounded-[1.5rem] border border-teal-200/70 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.16),transparent_34%),linear-gradient(180deg,#f6fffd_0%,#ebfbf7_100%)] p-5 shadow-[0_22px_50px_rgba(13,148,136,0.10)]">
      <div className="flex h-full flex-col rounded-[1.4rem] border border-teal-100 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-500" />
            <div>
              <p className="text-sm font-semibold text-foreground">Stef</p>
              <p className="text-xs text-muted-foreground">Built4Trades</p>
            </div>
          </div>
          <div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
              Online now
            </span>
          </div>
        </div>
        <div className="mt-4 space-y-3 text-sm">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-stone-100 px-3 py-2 text-foreground">
            Can you update my phone number?
          </div>
          <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-emerald-500 px-3 py-2 text-white">
            Done. Just refreshed it for you.
          </div>
          <div className="ml-auto max-w-[62%] rounded-2xl rounded-br-md bg-stone-100 px-3 py-2 text-foreground">
            Perfect, thanks.
          </div>
          <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-teal-100 bg-teal-50 px-3 py-2 text-foreground">
            No problem. If you need your opening hours or service area changed, send it over and I&apos;ll sort it.
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 text-xs font-medium text-teal-700">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Fast, direct support
          </div>
          <span className="rounded-full border border-teal-100 bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-teal-700">
            No ticket queue
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200/80 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.32),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.10),transparent_24%),linear-gradient(180deg,rgba(255,250,245,1)_0%,rgba(248,242,234,1)_100%)] pb-10 pt-28 lg:pb-14 lg:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_48%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex rounded-full border border-orange-200 bg-white/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-700 backdrop-blur-sm">
              Built For Trades That Need More Enquiries
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl xl:text-6xl">
              Websites That Help Local Businesses Get Found and Book More Customers
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
              One monthly price covers your website, hosting, local SEO setup, and direct support. No hidden costs, no tech headaches, no contracts, and you can see your demo before you pay.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-foreground">
              <div className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 shadow-sm">Free demo before you commit</div>
              <div className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 shadow-sm">Cancel anytime</div>
              <div className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 shadow-sm">Direct UK support</div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="min-w-[190px]">
                <Link href="/contact">Get a Free Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-w-[190px]">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-10 lg:pt-14">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">What We Handle</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Six Core Services That Work Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every part of the service is built to do one job: help more local customers find you, trust you, and contact you.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="p-4">
                <ServiceVisual service={service} />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-6 pt-1 lg:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {service.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="border-y border-stone-200/80 bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
              One Price. Everything Included.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Most web agencies charge separately for design, hosting, SEO, and support. We bundle it all into one simple monthly price so you always know exactly what you&apos;re paying.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-[repeat(4,minmax(0,1fr))] md:items-center">
            {flowSteps.map((step, index) => (
              <div key={step.title} className="flex items-center gap-4 md:gap-3">
                <div className="relative flex min-h-[156px] flex-1 items-center justify-center rounded-[1.6rem] border border-stone-200 bg-white px-5 py-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.08)] ring-1 ring-stone-100">
                  <div className="absolute inset-0 rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,247,237,0.7)_0%,rgba(255,255,255,0.92)_100%)]" />
                  <div className="relative">
                    <p className="font-display text-xl font-bold text-foreground">{step.title}</p>
                    <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center text-primary">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-bold text-foreground">
              Plans start from £15.90/month — no setup fee, no contract.
            </p>
            <Link
              href="/pricing"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              See Exactly What&apos;s Included <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-16 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Why It&apos;s Easier</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
            A Simpler Option Than Agencies or DIY Builders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most local businesses do not need a complicated web project. They need something professional, easy to manage, and built to bring in leads.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {comparisonPoints.map((column, index) => (
            <div
              key={column.label}
              className={`rounded-[1.75rem] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ${
                index === 2
                  ? "border-orange-200 bg-[linear-gradient(180deg,#fff7ef_0%,#fffdf9_100%)]"
                  : "border-stone-200/80 bg-white"
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{column.label}</p>
              <div className="mt-5 space-y-3">
                {column.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-stone-200/70 bg-white/80 px-4 py-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-relaxed text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[linear-gradient(180deg,#fff7f0_0%,#fdeedd_100%)] py-16 lg:py-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-orange-200/70 bg-[linear-gradient(180deg,rgba(255,245,235,1)_0%,rgba(255,239,220,1)_100%)] shadow-[0_24px_60px_rgba(194,65,12,0.08)] lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col justify-center p-8 lg:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Real Project Proof
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
              See the kind of site your business could have live in days
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              ADL Mechanic is a real trade website built to convert urgent callouts, local searches, and direct enquiries. If you want, we can build a version around your business first so you can judge it before paying anything.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-foreground">
                No obligation demo
              </div>
              <div className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-foreground">
                Built around your business
              </div>
              <div className="rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-foreground">
                See it before you pay
              </div>
            </div>
            <Link
              href="/portfolio"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View Our Work <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[280px] border-t border-orange-200/70 lg:min-h-[100%] lg:border-l lg:border-t-0">
            <Image
              src="/adl-mechanic-1.webp"
              alt="ADL Mechanic website preview"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-[linear-gradient(180deg,rgba(15,23,42,1)_0%,rgba(8,15,33,1)_100%)] py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold lg:text-4xl">
              Simple Monthly Pricing — No Surprises
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[1.6rem] p-5 text-left shadow-[0_18px_40px_rgba(2,6,23,0.25)] backdrop-blur-sm ${
                    plan.featured
                      ? "border border-orange-300/40 bg-gradient-to-b from-orange-500/18 to-white/8 ring-1 ring-orange-300/20"
                      : "border border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-300">{plan.name}</p>
                    {plan.featured && (
                      <span className="rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-display text-3xl font-bold">{plan.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{plan.summary}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-slate-300">
              All plans include hosting, SSL, and UK support. No contracts. Cancel anytime.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/pricing">Compare All Plans</Link>
            </Button>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground lg:text-4xl">
            Ready to Get More Enquiries?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We&apos;ll build you a free demo site around your trade before you pay a penny. It takes a couple of minutes to get started, there&apos;s no obligation, and you can decide after you&apos;ve seen what your business could look like online.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="min-w-[190px]">
              <Link href="/contact">Get a Free Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[190px]">
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
