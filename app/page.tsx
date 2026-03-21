import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle2, XCircle, MapPin, Monitor, Smartphone, Search, PhoneCall, Server, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TradeCard } from "@/components/trade-card"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"

const trades = [
  "Mechanics",
  "Plumbers",
  "Electricians",
  "Builders",
  "Roofers",
  "Accountants",
]

const tradeCards = [
  {
    image: "/mobile-mech.png",
    title: "Mobile Mechanic",
    description: "Get found by local drivers who need you now.",
    badge: "Fast Response",
    className: "bg-transparent border-0 shadow-none hover:shadow-none hover:border-transparent",
    imageClassName: "object-contain p-3 scale-[1.12] rotate-[-6deg] group-hover:scale-[1.16] group-hover:rotate-[-4deg]",
    imageContainerClassName: "overflow-visible border border-stone-300/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(56,44,34,0.08)]",
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
    imageContainerClassName: "overflow-visible border border-sky-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(14,116,144,0.10)]",
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
    imageContainerClassName: "overflow-visible border border-amber-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(217,119,6,0.10)]",
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
    imageContainerClassName: "overflow-visible border border-orange-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(234,88,12,0.10)]",
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
    imageContainerClassName: "overflow-visible border border-slate-300/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(71,85,105,0.12)]",
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
    imageContainerClassName: "overflow-visible border border-teal-200/80 rounded-t-[1.75rem] bg-transparent shadow-[0_24px_60px_rgba(13,148,136,0.10)]",
    imageBackdropClassName: "bg-[radial-gradient(circle_at_18%_22%,rgba(94,234,212,0.18),transparent_22%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.12),transparent_20%),linear-gradient(135deg,rgba(244,252,251,0.98),rgba(234,246,244,0.92))]",
    contentClassName: "border border-teal-950/70 border-t-0 rounded-b-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.18),transparent_24%),linear-gradient(180deg,rgba(7,30,31,0.96)_0%,rgba(5,20,27,0.98)_58%,rgba(2,6,23,1)_100%)] shadow-[0_24px_45px_rgba(13,148,136,0.20)]",
    badgeClassName: "border-teal-400/30 bg-teal-400/10 text-teal-200",
    titleClassName: "text-white",
    descriptionClassName: "text-teal-50/78",
  },
]

const stats = [
  {
    stat: "87%",
    text: "of people search online before hiring a local tradesperson",
  },
  {
    stat: "39%",
    text: "more earnings for businesses with a professional website",
  },
  {
    stat: "0.05s",
    text: "First impressions happen fast — a bad site loses the job instantly",
  },
  {
    stat: "24/7",
    text: "Your website works around the clock, even when you're off",
  },
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
    description: "Fill in a quick form with your trade, area, and what you need. We review it and get back to you with the right next step.",
    accentClassName: "from-orange-100 via-amber-50 to-white",
    badgeClassName: "border-orange-200 bg-orange-50 text-orange-700",
    tiltClassName: "md:-rotate-[3deg] md:-translate-y-2",
  },
  {
    step: "02",
    title: "Approve the Plan",
    description: "We send you a clear quote, timeline, and upfront starting fee. Once that's paid, your project is booked in and ready to start.",
    accentClassName: "from-sky-100 via-cyan-50 to-white",
    badgeClassName: "border-sky-200 bg-sky-50 text-sky-700",
    tiltClassName: "md:rotate-[1.5deg] md:translate-y-3",
  },
  {
    step: "03",
    title: "We Build and Launch",
    description: "We design, build, and refine your website, then launch it properly so your business can start getting found online.",
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
  "Reviews and testimonials build trust automatically",
  "New enquiries while you're on the job",
]

const reviews = [
  {
    name: "Dave Hartley",
    trade: "Plumber, Birmingham",
    rating: 5,
    text: "Stef built me a proper website in less than a week. I've already had three new customers find me through Google. Absolutely worth every penny.",
  },
  {
    name: "Karen Mills",
    trade: "Electrician, Manchester",
    rating: 5,
    text: "I put off getting a website for years because I thought it would be complicated. Built4Trades.co.uk made it dead easy. My site looks brilliant and I didn't have to do anything.",
  },
  {
    name: "Tony Richardson",
    trade: "Builder, Leeds",
    rating: 5,
    text: "Finally a web designer who speaks plain English! No jargon, no messing about. Just a solid website that makes my business look professional.",
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
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Professional tradesperson at work"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 text-balance">
              Your Trade Deserves a Website That Works as Hard as You Do
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
              We build fast, professional websites for UK tradespeople. No jargon. No contracts. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">Get a Free Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center"
          >
            <p className="text-secondary-foreground/80 text-sm mb-4">
              Trusted by tradespeople across the UK
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
              {trades.map((trade) => (
                <span
                  key={trade}
                  className="text-secondary-foreground font-medium text-sm lg:text-base"
                >
                  {trade}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built for Your Trade */}
      <SectionWrapper>
        <SectionHeader
          title="Built for Your Trade"
          subtitle="Whatever your trade, we build websites that get you found and get you hired."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8 lg:gap-y-10">
          {tradeCards.map((card) => (
            <TradeCard
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
              badge={card.badge}
              className={card.className}
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
      </SectionWrapper>

      {/* Why No Website Is Costing You Work */}
      <SectionWrapper background="secondary">
        <div
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-balance mb-4">
            Every Day Without a Website Is a Day Your Competition Gets the Call
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-secondary-foreground/5"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-primary mb-3">
                {item.stat}
              </div>
              <p className="text-secondary-foreground/80 text-sm lg:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div
          className="text-center"
        >
          <p className="text-xl lg:text-2xl font-medium text-secondary-foreground mb-6">
            {"Don't lose another job to a competitor with a website."}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Yours Today</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper>
        <SectionHeader
          title="Everything Your Business Needs Online"
          subtitle="No technical jargon. No hidden costs. Just everything you need to get found and get hired."
        />
        <div className="space-y-8">
          <div
            className="relative px-2 py-4 sm:px-4"
          >
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
                <div className="pointer-events-none absolute inset-0 scale-[1.08] blur-3xl opacity-55 lg:hidden">
                  <Image
                    src="/image-mobile-v2.png"
                    alt=""
                    fill
                    className="object-cover"
                    quality={60}
                    sizes="(max-width: 768px) 100vw, 90vw"
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
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:hidden [mask-image:radial-gradient(circle_at_center,black_58%,transparent_92%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_58%,transparent_92%)]">
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
                {features.map((feature, index) => {
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

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:hidden">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3"
                >
                  <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ${feature.iconColor}`}>
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

      {/* How It Works */}
      <SectionWrapper background="muted">
        <SectionHeader
          title="How It Works"
          subtitle="From zero to live website in days — here's the process"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-11 hidden h-px bg-gradient-to-r from-orange-200 via-stone-300 to-emerald-200 lg:block" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={step.step}
                className={`relative h-full transform-gpu transition-transform duration-300 ${step.tiltClassName}`}
              >
                <div className={`absolute inset-x-5 top-5 h-32 rounded-[2rem] bg-gradient-to-br ${step.accentClassName} blur-2xl opacity-80`} />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200/80 bg-white/90 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:p-7">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${step.badgeClassName}`}>
                      Step {step.step}
                    </span>
                    <span className="font-display text-5xl font-bold leading-none text-stone-200">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="max-w-[16rem] font-display text-2xl font-bold leading-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    {step.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                    <span className="h-px flex-1 bg-stone-200" />
                    {index === howItWorks.length - 1 ? "Go Live" : "Next Step"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Before/After Comparison */}
      <SectionWrapper>
        <SectionHeader
          title="What a Proper Website Does for Your Business"
        />
        <div className="relative mx-auto max-w-6xl">
          <div className="pointer-events-none absolute left-12 top-10 hidden h-40 w-40 rounded-full bg-stone-200/60 blur-3xl lg:block" />
          <div className="pointer-events-none absolute bottom-8 right-10 hidden h-48 w-48 rounded-full bg-primary/15 blur-3xl lg:block" />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.95fr)_auto_minmax(0,1.05fr)] lg:items-center">
            {/* Without */}
            <div
              className="relative lg:mt-10"
            >
              <div className="absolute inset-4 rounded-[2rem] bg-stone-300/45 blur-2xl" />
              <div className="absolute -bottom-5 left-5 right-10 h-full rounded-[2rem] border border-stone-300/70 bg-stone-100/70" />
              <div className="relative overflow-hidden rounded-[2rem] border border-stone-300/80 bg-[linear-gradient(180deg,rgba(247,243,236,0.98),rgba(238,232,223,0.96))] p-6 shadow-[0_28px_70px_rgba(56,44,34,0.10)] lg:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-4 inline-flex rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                      Old Way
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground/70 lg:text-2xl">
                      Without a Website
                    </h3>
                  </div>
                  <span className="inline-flex rounded-full border border-destructive/20 bg-destructive/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-destructive">
                    Missed Jobs
                  </span>
                </div>
                <ul className="space-y-4">
                  {negatives.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-stone-300/60 bg-white/50 px-4 py-3"
                    >
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                      <span className="text-foreground/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="relative z-10 mx-auto hidden lg:flex"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/25 bg-white/90 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-sm font-display font-bold uppercase tracking-[0.2em] text-primary-foreground">
                  vs
                </div>
              </div>
            </div>

            {/* With */}
            <div
              className="relative lg:-mt-8"
            >
              <div className="absolute inset-4 rounded-[2rem] bg-primary/20 blur-2xl" />
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-[1.75rem] border border-primary/20 bg-white/60" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_28%),linear-gradient(180deg,rgba(255,245,236,0.98),rgba(255,237,222,0.96))] p-6 shadow-[0_28px_70px_rgba(234,88,12,0.16)] lg:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-4 inline-flex rounded-full border border-primary/20 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      Better Way
                    </span>
                    <h3 className="font-display text-xl font-bold text-primary lg:text-2xl">
                      With a Built4Trades.co.uk Website
                    </h3>
                  </div>
                  <span className="inline-flex rounded-full border border-primary/20 bg-primary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    More Enquiries
                  </span>
                </div>
                <ul className="space-y-4">
                  {positives.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-white/65 px-4 py-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Google Reviews */}
      <SectionWrapper background="muted">
        <SectionHeader
          title="What Tradespeople Are Saying"
          subtitle="Real businesses, real results"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-auto">
                  Google Review
                </span>
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                {`"${review.text}"`}
              </p>
              <div>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.trade}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* UK Coverage */}
      <SectionWrapper>
        <SectionHeader
          title="Based in Coventry. Building for the Whole of the UK."
          subtitle="Whether you're a plumber in Manchester, an electrician in Bristol, or a mechanic in Glasgow — we build websites for tradespeople all over the UK. Everything is handled remotely. You never need to leave your van."
        />
        <div
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-muted rounded-full text-sm font-medium text-foreground"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {city}
            </span>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper background="secondary">
        <div
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Ready to Get Your Business Online?
          </h2>
          <p className="text-secondary-foreground/80 text-lg lg:text-xl mb-8">
            Get a free demo website built for your trade — no payment, no obligation. See exactly what your new site could look like.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/contact">Request Your Free Demo</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
