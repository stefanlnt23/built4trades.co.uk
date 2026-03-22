import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle2,
  Clock3,
  ExternalLink,
  Headphones,
  MapPin,
  Monitor,
  PhoneCall,
  PoundSterling,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { TradeCard } from "@/components/trade-card"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

const proofPoints = [
  "Live in 5 to 7 days",
  `From GBP ${siteConfig.pricingFrom}/month`,
  "No contracts",
  "UK-based support",
]

const trades = [
  "Mechanics",
  "Plumbers",
  "Electricians",
  "Builders",
  "Roofers",
  "Accountants",
]

const featuredProjects = [
  {
    image: "/adl-mechanic-1.webp",
    trade: "Mobile Mechanic",
    businessName: "ADL Mechanic",
    description: "A live website built to convert urgent callouts, servicing work, and local mechanic enquiries.",
    url: "https://adlmechanic.uk",
  },
  {
    image: "/daw-mobile-mechanic-1.webp",
    trade: "Mobile Mechanic",
    businessName: "DAW Mobile Mechanic",
    description: "A real trade website focused on fast trust, clear services, and direct booking intent.",
    url: "https://dawmobilemechanic.co.uk",
  },
]

const tradeCards = [
  {
    image: "/mobile-mech.png",
    title: "Mobile Mechanic",
    description: "Get found by local drivers who need you now.",
    badge: "Fast Response",
    className: "bg-transparent border-0 shadow-none hover:shadow-none hover:border-transparent",
    imageClassName: "object-contain p-3 scale-[1.12] rotate-[-6deg] group-hover:scale-[1.16] group-hover:rotate-[-4deg]",
    imageContainerClassName: "overflow-hidden md:overflow-visible border border-stone-300/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(56,44,34,0.08)]",
    imageBackdropClassName: "bg-[radial-gradient(circle_at_22%_18%,rgba(146,98,57,0.20),transparent_24%),radial-gradient(circle_at_78%_82%,rgba(15,23,42,0.10),transparent_22%),linear-gradient(135deg,rgba(252,248,242,0.96),rgba(245,239,231,0.92))]",
    contentClassName: "border border-stone-800/80 border-t-0 rounded-b-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0.96)_0%,rgba(8,15,33,0.98)_58%,rgba(2,6,23,1)_100%)] shadow-[0_24px_45px_rgba(15,23,42,0.20)]",
    badgeClassName: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    titleClassName: "text-white",
    descriptionClassName: "text-slate-300",
  },
  {
    image: "/pluming.png",
    title: "Emergency Plumber",
    description: "Be the first call when pipes burst at midnight.",
    badge: "24/7 Callouts",
    className: "bg-transparent border-0 shadow-none hover:shadow-none hover:border-transparent lg:translate-y-6",
    imageClassName: "object-contain p-3 scale-[1.12] rotate-[4deg] group-hover:scale-[1.16] group-hover:rotate-[2deg]",
    imageContainerClassName: "overflow-hidden md:overflow-visible border border-sky-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(14,116,144,0.10)]",
    imageBackdropClassName: "bg-[radial-gradient(circle_at_18%_20%,rgba(125,211,252,0.30),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.18),transparent_24%),linear-gradient(135deg,rgba(241,249,255,0.98),rgba(231,244,255,0.92))]",
    contentClassName: "border border-sky-950/70 border-t-0 rounded-b-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_24%),linear-gradient(180deg,rgba(10,24,47,0.96)_0%,rgba(4,18,38,0.98)_58%,rgba(2,6,23,1)_100%)] shadow-[0_24px_45px_rgba(14,116,144,0.20)]",
    badgeClassName: "border-sky-400/30 bg-sky-400/10 text-sky-200",
    titleClassName: "text-white",
    descriptionClassName: "text-sky-100/78",
  },
  {
    image: "/electrician.png",
    title: "Electrician",
    description: "Light up your online presence and get more bookings.",
    badge: "More Bookings",
    className: "bg-transparent border-0 shadow-none hover:shadow-none hover:border-transparent",
    imageClassName: "object-contain p-3 scale-[1.12] rotate-[-3deg] group-hover:scale-[1.16] group-hover:rotate-[-1deg]",
    imageContainerClassName: "overflow-hidden md:overflow-visible border border-amber-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(217,119,6,0.10)]",
    imageBackdropClassName: "bg-[radial-gradient(circle_at_18%_22%,rgba(253,224,71,0.30),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(251,191,36,0.22),transparent_20%),linear-gradient(135deg,rgba(255,250,235,0.98),rgba(255,243,214,0.92))]",
    contentClassName: "border border-amber-950/70 border-t-0 rounded-b-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_24%),linear-gradient(180deg,rgba(28,24,8,0.94)_0%,rgba(18,18,20,0.97)_58%,rgba(10,10,12,1)_100%)] shadow-[0_24px_45px_rgba(217,119,6,0.20)]",
    badgeClassName: "border-amber-400/30 bg-amber-400/10 text-amber-200",
    titleClassName: "text-white",
    descriptionClassName: "text-amber-50/78",
  },
  {
    image: "/builder.png",
    title: "Builder",
    description: "Showcase your projects and win bigger contracts.",
    badge: "Project Showcase",
    className: "bg-transparent border-0 shadow-none hover:shadow-none hover:border-transparent lg:-translate-y-2",
    imageClassName: "object-contain p-3 scale-[1.12] rotate-[3deg] group-hover:scale-[1.16] group-hover:rotate-[1deg]",
    imageContainerClassName: "overflow-hidden md:overflow-visible border border-orange-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(234,88,12,0.10)]",
    imageBackdropClassName: "bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.24),transparent_22%),radial-gradient(circle_at_78%_82%,rgba(100,116,139,0.16),transparent_24%),linear-gradient(135deg,rgba(251,247,241,0.98),rgba(242,238,230,0.92))]",
    contentClassName: "border border-orange-950/70 border-t-0 rounded-b-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_24%),linear-gradient(180deg,rgba(36,20,10,0.95)_0%,rgba(24,16,18,0.98)_58%,rgba(10,10,12,1)_100%)] shadow-[0_24px_45px_rgba(234,88,12,0.20)]",
    badgeClassName: "border-orange-400/30 bg-orange-400/10 text-orange-200",
    titleClassName: "text-white",
    descriptionClassName: "text-orange-50/78",
  },
  {
    image: "/roofing.png",
    title: "Roofer",
    description: "Rise above the competition with a professional site.",
    badge: "Premium Finish",
    className: "bg-transparent border-0 shadow-none hover:shadow-none hover:border-transparent lg:translate-y-8",
    imageClassName: "object-contain p-3 scale-[1.12] rotate-[-4deg] group-hover:scale-[1.16] group-hover:rotate-[-2deg]",
    imageContainerClassName: "overflow-hidden md:overflow-visible border border-slate-300/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(71,85,105,0.12)]",
    imageBackdropClassName: "bg-[radial-gradient(circle_at_22%_22%,rgba(148,163,184,0.24),transparent_20%),radial-gradient(circle_at_82%_78%,rgba(249,115,22,0.16),transparent_22%),linear-gradient(135deg,rgba(246,248,250,0.98),rgba(236,241,245,0.92))]",
    contentClassName: "border border-slate-800/80 border-t-0 rounded-b-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_24%),linear-gradient(180deg,rgba(17,24,39,0.96)_0%,rgba(8,15,29,0.98)_58%,rgba(2,6,23,1)_100%)] shadow-[0_24px_45px_rgba(71,85,105,0.22)]",
    badgeClassName: "border-slate-400/30 bg-slate-400/10 text-slate-200",
    titleClassName: "text-white",
    descriptionClassName: "text-slate-300",
  },
  {
    image: "/accountant.png",
    title: "Accountant",
    description: "Build trust with clients before they even call.",
    badge: "Trust Signals",
    className: "bg-transparent border-0 shadow-none hover:shadow-none hover:border-transparent lg:translate-y-2",
    imageClassName: "object-contain p-3 scale-[1.12] rotate-[2deg] group-hover:scale-[1.16] group-hover:rotate-0",
    imageContainerClassName: "overflow-hidden md:overflow-visible border border-teal-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(13,148,136,0.10)]",
    imageBackdropClassName: "bg-[radial-gradient(circle_at_18%_22%,rgba(94,234,212,0.18),transparent_22%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.12),transparent_20%),linear-gradient(135deg,rgba(244,252,251,0.98),rgba(234,246,244,0.92))]",
    contentClassName: "border border-teal-950/70 border-t-0 rounded-b-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_24%),linear-gradient(180deg,rgba(7,30,31,0.96)_0%,rgba(5,20,27,0.98)_58%,rgba(2,6,23,1)_100%)] shadow-[0_24px_45px_rgba(13,148,136,0.20)]",
    badgeClassName: "border-teal-400/30 bg-teal-400/10 text-teal-200",
    titleClassName: "text-white",
    descriptionClassName: "text-teal-50/78",
  },
]

const outcomes = [
  {
    title: "Get found before the next trade",
    description: "When someone searches in a hurry, the business they can find first often gets the call.",
    icon: Search,
  },
  {
    title: "Look trustworthy in seconds",
    description: "A proper site helps people feel safe contacting you before they have even spoken to you.",
    icon: ShieldCheck,
  },
  {
    title: "Take enquiries when you cannot answer",
    description: "Your site keeps collecting calls, form leads, and WhatsApp clicks while you are on the tools.",
    icon: Clock3,
  },
  {
    title: "Start from a clear monthly price",
    description: `Simple pricing from GBP ${siteConfig.pricingFrom} with hosting included and no contract tying you in.`,
    icon: PoundSterling,
  },
]

const urgencySignals = [
  "If people cannot check you online, they usually contact the next trade they can.",
  "Even word-of-mouth leads still search your name before they call.",
  "A website keeps working after hours, while you are on a job, and when you miss the phone.",
]

const features = [
  {
    title: "Custom Website Design",
    description: "A website that looks professional and matches your trade. No templates — everything is built for you.",
    icon: Monitor,
    tag: "Built for your trade",
    accent: "from-orange-500/20 via-amber-400/10 to-transparent",
    iconColor: "text-orange-600",
    positionClass: "left-[-2.5%] top-[13%] max-w-[220px] xl:-left-[3.5%]",
    lineClass: "right-[-44px] top-1/2 h-px w-11 -translate-y-1/2 bg-gradient-to-r from-orange-300 to-transparent",
  },
  {
    title: "Mobile-Optimised",
    description: "Most of your customers search on their phones. Your site will look great on every screen size.",
    icon: Smartphone,
    tag: "Mobile-first",
    accent: "from-sky-500/20 via-cyan-400/10 to-transparent",
    iconColor: "text-sky-600",
    positionClass: "left-[3%] bottom-[16%] max-w-[220px]",
    lineClass: "right-[-44px] top-1/2 h-px w-11 -translate-y-1/2 bg-gradient-to-r from-sky-300 to-transparent",
  },
  {
    title: "Shows Up on Google",
    description: "We set up your site so local customers can find you when they search for your trade in their area.",
    icon: Search,
    tag: "Local visibility",
    accent: "from-emerald-500/20 via-lime-400/10 to-transparent",
    iconColor: "text-emerald-600",
    positionClass: "right-[-3%] top-[9%] max-w-[240px] xl:-right-[4%]",
    lineClass: "left-[-44px] top-1/2 h-px w-11 -translate-y-1/2 bg-gradient-to-l from-emerald-300 to-transparent",
  },
  {
    icon: PhoneCall,
    tag: "Easy contact",
    title: "Contact Forms & Click-to-Call",
    description: "Make it easy for customers to reach you instantly — by phone, email, or WhatsApp.",
    accent: "from-violet-500/20 via-fuchsia-400/10 to-transparent",
    iconColor: "text-violet-600",
    positionClass: "right-[-5.5%] top-[41%] max-w-[250px] xl:-right-[6.5%]",
    lineClass: "left-[-44px] top-1/2 h-px w-11 -translate-y-1/2 bg-gradient-to-l from-violet-300 to-transparent",
  },
  {
    title: "Monthly Hosting Included",
    description: "No hidden costs. Your hosting, security, and backups are all included in your monthly price.",
    icon: Server,
    tag: "Handled for you",
    accent: "from-slate-500/20 via-slate-400/10 to-transparent",
    iconColor: "text-slate-600",
    positionClass: "right-[11%] bottom-[-4%] max-w-[250px]",
    lineClass: "left-[-44px] top-1/2 h-px w-11 -translate-y-1/2 bg-gradient-to-l from-slate-300 to-transparent",
  },
  {
    title: "UK-Based Support",
    description: "Real support from a real person in the UK. No call centres. No ticket queues.",
    icon: Headphones,
    tag: "Real human help",
    accent: "from-teal-500/20 via-cyan-400/10 to-transparent",
    iconColor: "text-teal-600",
    positionClass: "left-[16%] bottom-[-8%] max-w-[230px]",
    lineClass: "right-[-44px] top-1/2 h-px w-11 -translate-y-1/2 bg-gradient-to-r from-teal-300 to-transparent",
  },
]

const howItWorks = [
  {
    step: "01",
    title: "Send Your Enquiry",
    description: "Tell us your trade, service area, and what you need. We keep it simple and come back with the right next step.",
    accentClassName: "from-orange-100 via-amber-50 to-white",
    badgeClassName: "border-orange-200 bg-orange-50 text-orange-700",
    tiltClassName: "md:-rotate-[3deg] md:-translate-y-2",
  },
  {
    step: "02",
    title: "Approve the Plan",
    description: "We send you a clear quote, timeline, and scope. No hidden fees, no vague pricing, and no contract tying you in.",
    accentClassName: "from-sky-100 via-cyan-50 to-white",
    badgeClassName: "border-sky-200 bg-sky-50 text-sky-700",
    tiltClassName: "md:rotate-[1.5deg] md:translate-y-3",
  },
  {
    step: "03",
    title: "We Build and Launch",
    description: "We design, refine, and launch your site properly. Most projects are live within 5 to 7 days once approved.",
    accentClassName: "from-emerald-100 via-lime-50 to-white",
    badgeClassName: "border-emerald-200 bg-emerald-50 text-emerald-700",
    tiltClassName: "md:-rotate-[2deg] md:translate-y-1",
  },
]

const negatives = [
  "Customers can't find you on Google",
  "You look less professional than competitors",
  "No way for customers to contact you at 11pm",
  "You rely entirely on word of mouth",
  "Jobs go to whoever shows up first in search",
]

const positives = [
  "Appear in local Google searches",
  "Instantly look more professional and trustworthy",
  "Customers can call, email or WhatsApp from your site 24/7",
  "Real projects and clear service pages build trust quickly",
  "New enquiries while you're on the job",
]

const reasons = [
  "Built specifically for UK trades, not generic businesses",
  "Free demo first, so people can see the quality before committing",
  "No contracts and clear monthly pricing from day one",
  "Direct support from a real person in Coventry",
]

const faqs = [
  {
    question: "How long does it take?",
    answer: "Most websites are ready to launch within 5 to 7 days once the plan is approved and we have what we need from you.",
  },
  {
    question: "Do I need to pay before I see anything?",
    answer: "No. You can start with a free demo so you can see the direction before deciding to move forward.",
  },
  {
    question: "Can customers call or WhatsApp me from the site?",
    answer: "Yes. We can build in click-to-call, contact forms, and WhatsApp buttons so people can reach you fast.",
  },
  {
    question: "Do I own the website?",
    answer: "Yes. Your business, branding, and website content are yours. There is no lock-in platform and no contract trapping you in.",
  },
]

const cities = [
  "London",
  "Manchester",
  "Birmingham",
  "Glasgow",
  "Bristol",
  "Leeds",
  "Cardiff",
  "Edinburgh",
  "Liverpool",
  "Sheffield",
  "Newcastle",
  "Coventry",
]

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,247,238,0.98),rgba(247,242,235,0.94))] pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_24%)]" />
        <div className="container relative mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center lg:gap-10 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-sm sm:mb-5 sm:px-4 sm:py-2 sm:text-sm">
              <Clock3 className="h-4 w-4 text-primary" />
              Free demo first. Most sites live in 5 to 7 days.
            </div>
            <h1 className="font-display text-[2.5rem] font-bold text-foreground text-balance leading-[0.98] sm:text-5xl lg:text-6xl xl:text-7xl">
              Your Trade Deserves a Website That Works as Hard as You Do
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              We build fast, professional websites for UK tradespeople. No jargon. No contracts. Just a proper site that helps you look trusted and win more work.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              {proofPoints.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-stone-200 bg-white/75 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm sm:px-4 sm:py-2 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4 sm:flex-row">
              <Button asChild size="lg" className="px-6 py-5 text-base sm:px-8 sm:py-6 sm:text-lg">
                <Link href="/contact">Get a Free Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/70 px-6 py-5 text-base sm:px-8 sm:py-6 sm:text-lg"
              >
                <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Or call <a className="font-medium text-foreground underline decoration-primary/40 underline-offset-4" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.12),transparent_32%)] blur-2xl sm:block" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-stone-200/80 bg-white/90 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.10)] sm:shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:backdrop-blur-sm sm:rounded-[2rem] sm:p-5">
              <div className="mb-3 flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-stone-50/80 px-3 py-2.5 sm:mb-4 sm:gap-4 sm:px-4 sm:py-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Live Client Site</p>
                  <p className="mt-1 font-display text-lg font-bold text-foreground sm:text-xl">ADL Mechanic</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700 sm:px-3 sm:text-xs">
                  Real Project
                </span>
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-[1.25rem] border border-stone-200 bg-stone-100 sm:h-auto sm:aspect-[4/3] sm:rounded-[1.5rem]">
                <Image
                  src="/adl-mechanic-1.webp"
                  alt="ADL Mechanic website preview"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3 sm:p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Built For</p>
                  <p className="mt-1.5 text-sm font-medium text-foreground sm:mt-2 sm:text-base">Urgent callout leads</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3 sm:p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Contact Path</p>
                  <p className="mt-1.5 text-sm font-medium text-foreground sm:mt-2 sm:text-base">Phone and fast enquiries</p>
                </div>
                <div className="col-span-2 rounded-2xl border border-stone-200 bg-stone-50/80 p-3 sm:col-span-1 sm:p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">Turnaround</p>
                  <p className="mt-1.5 text-sm font-medium text-foreground sm:mt-2 sm:text-base">Fast, clear, trade-first</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200/80 bg-secondary py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
            <span className="text-sm font-medium text-secondary-foreground/70">Built for trades across the UK</span>
            {trades.map((trade) => (
              <span
                key={trade}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-secondary-foreground"
              >
                {trade}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper className="py-12 lg:py-24">
        <SectionHeader
          title="Real Websites, Not Just Mockups"
          className="mb-8 lg:mb-14"
          subtitle="These are live projects already built for real businesses. That matters more than polished concepts."
        />
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.businessName}
              className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:rounded-[2rem]"
            >
              <div className="relative h-[210px] overflow-hidden border-b border-border sm:h-auto sm:aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={`${project.businessName} website preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{project.trade}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">{project.businessName}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{project.description}</p>
                <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:gap-3 sm:flex-row">
                  <Button asChild>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      View Live Site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/portfolio">See More Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="secondary" className="py-12 lg:py-24">
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <h2 className="mb-3 font-display text-3xl font-bold text-balance lg:text-4xl xl:text-5xl">
            Every Day Without a Proper Website Makes Winning Work Harder
          </h2>
          <p className="mx-auto max-w-3xl text-base text-secondary-foreground/80 sm:text-lg">
            Tradespeople do not need buzzwords. They need to be found quickly, look trustworthy fast, and give customers an easy way to get in touch before the next trade gets the job.
          </p>
        </div>
        <div className="-mx-4 mb-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 lg:mx-0 lg:mb-8 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0">
          {urgencySignals.map((signal) => (
            <div
              key={signal}
              className="min-w-[85%] snap-start rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-3.5 text-left text-sm leading-relaxed text-secondary-foreground/82 lg:min-w-0 lg:rounded-[1.5rem] lg:px-5 lg:py-4"
            >
              {signal}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
          {outcomes.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5 lg:rounded-[1.75rem] lg:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 sm:h-12 sm:w-12">
                  <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-tight text-white sm:mt-4 sm:text-xl lg:mt-5 lg:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/75 sm:mt-3 sm:text-base">{item.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-7 text-center sm:mt-8 lg:mt-10">
          <Button asChild size="lg">
            <Link href="/contact">Get a Free Demo</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-12 lg:py-24">
        <SectionHeader
          title="Do Not See Your Trade Above?"
          className="mb-8 lg:mb-14"
          subtitle="The live projects above are real client sites. These designs below show the kind of tailored look we can build for other trades too."
        />
        <p className="mx-auto mb-6 max-w-3xl text-center text-xs font-medium uppercase tracking-[0.18em] text-stone-500 sm:mb-10 sm:text-sm">
          Custom directions for any trade, not off-the-shelf templates
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10">
          {tradeCards.map((card, index) => (
            <TradeCard
              key={card.title}
              className={`${card.className ?? ""} ${index > 2 ? "hidden md:block" : ""}`}
              image={card.image}
              title={card.title}
              description={card.description}
              badge={card.badge}
              imageClassName={card.imageClassName}
              imageContainerClassName={card.imageContainerClassName}
              imageBackdropClassName={card.imageBackdropClassName}
              contentClassName={card.contentClassName}
              badgeClassName={card.badgeClassName}
              titleClassName={card.titleClassName}
              descriptionClassName={card.descriptionClassName}
            />
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground md:hidden">
          Showing a shorter mobile set here. More trade examples are available on larger screens and in your demo.
        </p>
      </SectionWrapper>

      <SectionWrapper className="py-12 lg:py-24">
        <SectionHeader
          title="Everything Your Business Needs Online"
          className="mb-8 lg:mb-14"
          subtitle="No technical jargon. No hidden costs. Just everything you need to get found and get hired."
        />
        <div className="space-y-6 lg:space-y-8">
          <div className="relative px-0 py-2 sm:px-4 sm:py-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.82),transparent_34%),radial-gradient(circle_at_bottom,rgba(247,242,235,0.78),transparent_24%)]" />
            <div className="relative mx-auto max-w-[1280px]">
              <div className="pointer-events-none absolute inset-x-[8%] top-10 bottom-12 hidden lg:block">
                <div className="absolute left-[9%] top-[11%] h-32 w-32 rounded-full border border-orange-200/55" />
                <div className="absolute right-[10%] top-[7%] h-28 w-28 rounded-full border border-emerald-200/55" />
                <div className="absolute bottom-[8%] left-[18%] h-20 w-20 rounded-full border border-cyan-200/60" />
                <div className="absolute bottom-[10%] right-[16%] h-24 w-24 rounded-full border border-slate-200/70" />
                <div className="absolute left-[15%] top-[18%] h-px w-[28%] bg-gradient-to-r from-orange-200/0 via-orange-200/80 to-orange-200/0" />
                <div className="absolute right-[14%] top-[23%] h-px w-[22%] bg-gradient-to-r from-emerald-200/0 via-emerald-200/80 to-emerald-200/0" />
                <div className="absolute bottom-[21%] left-[20%] h-px w-[24%] bg-gradient-to-r from-cyan-200/0 via-cyan-200/75 to-cyan-200/0" />
                <div className="absolute bottom-[18%] right-[19%] h-px w-[20%] bg-gradient-to-r from-slate-200/0 via-slate-200/85 to-slate-200/0" />
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-transparent">
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]" />
                <div className="pointer-events-none absolute inset-[4%] hidden rounded-[2.4rem] border border-stone-200/28 lg:block" />
                <div className="pointer-events-none absolute left-[17%] top-[14%] hidden h-[72%] w-[66%] rounded-[2.8rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0)_68%)] blur-2xl lg:block" />
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                  viewBox="0 0 1280 860"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="flow-orange" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(251,146,60,0)" />
                      <stop offset="45%" stopColor="rgba(251,146,60,0.55)" />
                      <stop offset="100%" stopColor="rgba(251,146,60,0)" />
                    </linearGradient>
                    <linearGradient id="flow-emerald" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(52,211,153,0)" />
                      <stop offset="50%" stopColor="rgba(52,211,153,0.5)" />
                      <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                    </linearGradient>
                    <linearGradient id="flow-sky" x1="0%" x2="100%" y1="0%" y2="0%">
                      <stop offset="0%" stopColor="rgba(56,189,248,0)" />
                      <stop offset="48%" stopColor="rgba(56,189,248,0.48)" />
                      <stop offset="100%" stopColor="rgba(56,189,248,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M120 165 C 270 165, 310 265, 505 300" fill="none" stroke="url(#flow-orange)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M1160 188 C 1015 188, 970 280, 790 326" fill="none" stroke="url(#flow-emerald)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M210 695 C 370 695, 450 622, 560 556" fill="none" stroke="url(#flow-sky)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M1065 650 C 930 650, 840 602, 734 535" fill="none" stroke="rgba(148,163,184,0.34)" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="120" cy="165" r="6" fill="rgba(251,146,60,0.18)" stroke="rgba(251,146,60,0.65)" strokeWidth="2" />
                  <circle cx="1160" cy="188" r="6" fill="rgba(52,211,153,0.18)" stroke="rgba(52,211,153,0.65)" strokeWidth="2" />
                  <circle cx="210" cy="695" r="6" fill="rgba(56,189,248,0.18)" stroke="rgba(56,189,248,0.65)" strokeWidth="2" />
                  <circle cx="1065" cy="650" r="6" fill="rgba(148,163,184,0.2)" stroke="rgba(148,163,184,0.72)" strokeWidth="2" />
                </svg>
                <div className="pointer-events-none absolute inset-0 hidden scale-[1.06] blur-3xl opacity-55 lg:block">
                  <Image
                    src="/image-desktop-v2.png"
                    alt=""
                    fill
                    className="object-cover"
                    quality={60}
                    sizes="(max-width: 1200px) 90vw, 1280px"
                  />
                </div>
                <div className="relative aspect-[3/2] hidden lg:block [mask-image:radial-gradient(circle_at_center,black_55%,transparent_88%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_55%,transparent_88%)]">
                  <Image
                    src="/image-desktop-v2.png"
                    alt="Trades website visual showing Google visibility, contact forms, mobile design, and support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1200px) 90vw, 1280px"
                    quality={80}
                  />
                </div>
                <div className="relative aspect-[5/6] sm:aspect-[3/4] lg:hidden">
                  <Image
                    src="/image-mobile-v2.png"
                    alt="Trades website mobile visual showing local visibility and customer contact options"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    quality={80}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_26%),linear-gradient(180deg,rgba(248,243,236,0.08),transparent_20%,transparent_82%,rgba(248,243,236,0.12)_100%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0),rgba(247,242,235,0.12)_58%,rgba(247,242,235,0.55)_100%)]" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[16%] bg-gradient-to-r from-[#f7f2eb]/78 via-[#f7f2eb]/26 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[16%] bg-gradient-to-l from-[#f7f2eb]/78 via-[#f7f2eb]/26 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[12%] bg-gradient-to-b from-[#f7f2eb]/48 via-[#f7f2eb]/12 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-[#f7f2eb]/52 via-[#f7f2eb]/16 to-transparent" />
              </div>

              <div className="absolute inset-0 hidden lg:block">
                {features.map((feature) => {
                  const Icon = feature.icon

                  return (
                    <div
                      key={feature.title}
                      className={`absolute ${feature.positionClass}`}
                    >
                      <div className="relative">
                        <div className={`absolute ${feature.lineClass}`}>
                          <div className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-white/55 bg-white/75 shadow-[0_0_0_4px_rgba(255,255,255,0.14)]" />
                        </div>
                        <div className="relative rounded-[1.4rem] border border-white/50 bg-white/58 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                          <div className={`absolute inset-0 rounded-[1.4rem] bg-gradient-to-br ${feature.accent}`} />
                          <div className="relative">
                            <div className="mb-3 flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
                                <Icon className={`h-4 w-4 ${feature.iconColor}`} />
                              </div>
                              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                                {feature.tag}
                              </span>
                            </div>
                            <h3 className="mb-1 font-display text-base font-semibold text-slate-900">
                              {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-700">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:hidden">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-stone-200/70 bg-white/70 p-3.5"
                >
                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ${feature.iconColor}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                      {feature.tag}
                    </p>
                    <h3 className="mt-1 font-display text-base font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" className="py-12 lg:py-24">
        <SectionHeader
          title="How It Works"
          className="mb-8 lg:mb-14"
          subtitle="From zero to live website in days — with a simple process and no tech headaches."
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-11 hidden h-px bg-gradient-to-r from-orange-200 via-stone-300 to-emerald-200 lg:block" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={step.step}
                className={`relative h-full transform-gpu transition-transform duration-300 ${step.tiltClassName}`}
              >
                <div className={`absolute inset-x-5 top-5 hidden h-24 rounded-[2rem] bg-gradient-to-br ${step.accentClassName} opacity-80 blur-2xl sm:block sm:h-32`} />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-stone-200/80 bg-white p-4 shadow-[0_14px_32px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:bg-white/90 sm:p-5 sm:shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:backdrop-blur-sm lg:p-7">
                  <div className="mb-4 flex items-center justify-between gap-4 sm:mb-6">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-[11px] ${step.badgeClassName}`}>
                      Step {step.step}
                    </span>
                    <span className="font-display text-4xl font-bold leading-none text-stone-200 sm:text-5xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="max-w-[16rem] font-display text-xl font-bold leading-tight text-slate-900 sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
                    {step.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400 sm:mt-6">
                    <span className="h-px flex-1 bg-stone-200" />
                    {index === howItWorks.length - 1 ? "Go Live" : "Next Step"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-12 lg:py-24">
        <SectionHeader
          title="Why Trades Choose Built4Trades"
          className="mb-8 lg:mb-14"
          subtitle="If you do not have loads of reviews yet, trust has to come from a clear offer, real work, and a real person behind it."
        />
        <div className="grid gap-8 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-10">
          <div className="relative">
            <div className="absolute -inset-5 hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_34%)] blur-2xl sm:block" />
            <div className="relative h-[360px] overflow-hidden rounded-[1.75rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,248,240,0.96),rgba(241,235,226,0.96))] shadow-[0_28px_70px_rgba(15,23,42,0.10)] sm:h-auto sm:aspect-[4/4.7] sm:rounded-[2rem]">
              <Image
                src="/me.png"
                alt="Stef - Built4Trades.co.uk founder"
                fill
                className="object-cover object-top scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_20%,transparent_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,transparent,rgba(241,235,226,0.88))]" />
            </div>
            <div className="absolute -bottom-4 left-4 rounded-xl bg-primary p-4 text-primary-foreground shadow-lg sm:-bottom-6 sm:left-5 sm:p-5">
              <p className="font-display text-xl font-bold sm:text-2xl">{siteConfig.founderName}</p>
              <p className="text-primary-foreground/80">Based in {siteConfig.baseLocation}</p>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              You are not dealing with a faceless agency. Built4Trades is run by a real person, focused on one niche, with live trade websites already in the portfolio.
            </p>
            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[1.25rem] border border-border bg-card p-4 shadow-sm sm:rounded-[1.5rem] sm:p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <p className="mt-2.5 text-sm font-medium text-foreground sm:mt-3 sm:text-base">{reason}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button asChild>
                <Link href="/about">Meet Stef</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Request Your Free Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-12 lg:py-24">
        <SectionHeader title="What a Proper Website Does for Your Business" />
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute left-12 top-10 hidden h-40 w-40 rounded-full bg-stone-200/60 blur-3xl lg:block" />
          <div className="pointer-events-none absolute bottom-8 right-10 hidden h-48 w-48 rounded-full bg-primary/15 blur-3xl lg:block" />

          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.05fr)] lg:items-center lg:gap-8">
            <div className="relative lg:mt-10">
              <div className="absolute inset-4 rounded-[2rem] bg-stone-300/45 blur-2xl" />
              <div className="absolute -bottom-5 left-5 right-10 h-full rounded-[2rem] border border-stone-300/70 bg-stone-100/70" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-stone-300/80 bg-[linear-gradient(180deg,rgba(247,243,236,0.98),rgba(238,232,223,0.96))] p-4 shadow-[0_28px_70px_rgba(56,44,34,0.10)] sm:rounded-[2rem] sm:p-6 lg:p-8">
                <div className="mb-4 flex items-start justify-between gap-4 sm:mb-6">
                  <div>
                    <span className="mb-3 inline-flex rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500 sm:mb-4 sm:text-[11px]">
                      Old Way
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground/70 sm:text-xl lg:text-2xl">
                      Without a Website
                    </h3>
                  </div>
                  <span className="inline-flex rounded-full border border-destructive/20 bg-destructive/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-destructive sm:text-[11px]">
                    Missed Jobs
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {negatives.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-stone-300/60 bg-white/50 px-3.5 py-3 sm:px-4"
                    >
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                      <span className="text-sm text-foreground/75 sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 mx-auto hidden lg:flex">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/25 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-sm font-display font-bold uppercase tracking-[0.2em] text-primary-foreground">
                  vs
                </div>
              </div>
            </div>

            <div className="relative lg:-mt-8">
              <div className="absolute inset-4 rounded-[2rem] bg-primary/20 blur-2xl" />
              <div className="absolute left-0 top-0 h-20 w-20 rounded-[1.5rem] border border-primary/20 bg-white/60 sm:-left-6 sm:-top-6 sm:h-24 sm:w-24 sm:rounded-[1.75rem]" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/25 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_28%),linear-gradient(180deg,rgba(255,245,236,0.98),rgba(255,237,222,0.96))] p-4 shadow-[0_28px_70px_rgba(234,88,12,0.16)] sm:rounded-[2rem] sm:p-6 lg:p-8">
                <div className="mb-4 flex items-start justify-between gap-4 sm:mb-6">
                  <div>
                    <span className="mb-3 inline-flex rounded-full border border-primary/20 bg-white/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary sm:mb-4 sm:text-[11px]">
                      Better Way
                    </span>
                    <h3 className="font-display text-lg font-bold text-primary sm:text-xl lg:text-2xl">
                      With a Built4Trades Website
                    </h3>
                  </div>
                  <span className="inline-flex rounded-full border border-primary/20 bg-primary/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
                    More Enquiries
                  </span>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  {positives.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-white/65 px-3.5 py-3 sm:px-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="muted" className="py-12 lg:py-24">
        <SectionHeader
          title="Homepage FAQs"
          className="mb-8 lg:mb-14"
          subtitle="A few straight answers to the objections people usually have before getting started."
        />
        <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 lg:grid-cols-3">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[1.5rem] border border-border bg-card p-4 shadow-sm sm:p-6"
            >
              <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{item.answer}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-12 lg:py-24">
        <SectionHeader
          title="Based in Coventry. Building for the Whole of the UK."
          className="mb-8 lg:mb-14"
          subtitle="Whether you're a plumber in Manchester, an electrician in Bristol, or a mechanic in Glasgow — everything is handled remotely. You never need to leave your van."
        />
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground sm:px-4 sm:py-2 sm:text-sm"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {city}
            </span>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="secondary" className="py-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold lg:mb-6 lg:text-4xl xl:text-5xl">
            See Your Business as a Real Website Before You Pay a Penny
          </h2>
          <p className="mb-6 text-base text-secondary-foreground/80 lg:mb-8 lg:text-xl">
            We will build a free demo site around your trade, your area, and your service style. No payment. No obligation. Just a proper look at what your business could look like online.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button asChild size="lg" className="px-6 py-5 text-base sm:px-8 sm:py-6 sm:text-lg">
              <Link href="/contact">Request Your Free Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 px-6 py-5 text-base text-white hover:bg-white hover:text-foreground sm:px-8 sm:py-6 sm:text-lg">
              <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>

    </div>
  )
}
