import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/section-wrapper"

const plans = [
  {
    name: "Basic",
    price: "15.90",
    audience: "Getting online for the first time",
    description: "Get online fast with a clean, professional one-page site built around your trade, your number, and your area.",
    features: [
      "1-page website",
      "Mobile-friendly design",
      "Hosting included",
      "Contact form",
      "WhatsApp or call button",
      "Set up to show on Google",
      "Secure site (padlock in browser)",
    ],
  },
  {
    name: "Starter",
    price: "25",
    audience: "Best for most trades looking for steady enquiries",
    description: "Best for trades who want a stronger website that helps turn more visitors into enquiries.",
    features: [
      "Everything in Basic",
      "Multi-page site (up to 3 pages)",
      "Google Maps section",
      "Text and image updates on request",
    ],
  },
  {
    name: "Pro",
    price: "49",
    audience: "For established businesses wanting more leads",
    description: "A more complete setup for trades that need a larger site, stronger local visibility, and faster follow-up.",
    features: [
      "Everything in Starter",
      "Multi-page site (up to 15 pages)",
      "Optimised to rank in your area",
      "Google Maps listing setup",
      "Google review link setup",
      "Instant lead notification setup",
      "Priority support",
    ],
  },
]

const reassurancePoints = [
  "No contracts",
  "Cancel anytime",
  "No upfront payment",
]

const comparisonRows = [
  {
    label: "Pages",
    values: ["1 page", "Up to 3 pages", "Up to 15 pages"],
  },
  {
    label: "Mobile-friendly design",
    included: [true, true, true],
  },
  {
    label: "Hosting included",
    included: [true, true, true],
  },
  {
    label: "Contact form",
    included: [true, true, true],
  },
  {
    label: "Set up to show on Google",
    included: [true, true, true],
  },
  {
    label: "Secure site (padlock in browser)",
    included: [true, true, true],
  },
  {
    label: "Google Maps section",
    included: [false, true, true],
  },
  {
    label: "WhatsApp or call button",
    included: [true, true, true],
  },
  {
    label: "Text and image updates on request",
    included: [false, true, true],
  },
  {
    label: "Optimised to rank in your area",
    included: [false, false, true],
  },
  {
    label: "Google Maps listing setup",
    included: [false, false, true],
  },
  {
    label: "Google review link setup",
    included: [false, false, true],
  },
  {
    label: "Instant lead notification setup",
    included: [false, false, true],
  },
  {
    label: "Priority support",
    included: [false, false, true],
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Simple Pricing. No Surprises.
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              No setup fees. No contracts. No hidden costs. Just a flat monthly price that includes everything.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <SectionWrapper>
        <div
          className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
        >
          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] border-b border-border bg-muted/30">
                <div className="p-3 lg:p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-primary lg:text-xs">What&apos;s Included</p>
                  <h2 className="mt-1 font-display text-lg font-bold text-foreground lg:text-xl">
                    Compare All 3 Plans
                  </h2>
                  <p className="mt-1 max-w-sm text-[11px] leading-relaxed text-muted-foreground lg:text-xs">
                    One clear table so people can see exactly what they get in each package.
                  </p>
                </div>
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`p-3 text-center lg:p-4 ${plan.name === "Starter" ? "bg-primary/8" : ""}`}
                  >
                    {plan.name === "Starter" && (
                      <span className="mb-1.5 inline-flex rounded-full bg-primary px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                        Popular
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-foreground lg:text-xl">{plan.name}</h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary lg:text-[11px]">
                      {plan.audience}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground lg:text-xs">{plan.description}</p>
                    <div className="mt-2 flex items-baseline justify-center gap-1">
                      <span className="font-display text-2xl font-bold text-foreground lg:text-3xl">£{plan.price}</span>
                      <span className="text-[11px] text-muted-foreground lg:text-xs">/month</span>
                    </div>
                  </div>
                ))}
              </div>

              {comparisonRows.map((row, rowIndex) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] border-b border-border/80 ${
                    rowIndex % 2 === 0 ? "bg-background" : "bg-muted/20"
                  }`}
                >
                  <div className="flex items-center p-2.5 text-[12px] font-medium text-foreground lg:p-3">
                    {row.label}
                  </div>
                  {plans.map((plan, planIndex) => (
                    <div
                      key={`${row.label}-${plan.name}`}
                      className={`flex items-center justify-center p-2.5 lg:p-3 ${plan.name === "Starter" ? "bg-primary/5" : ""}`}
                    >
                      {row.values ? (
                        <span className="text-[12px] font-medium text-foreground">{row.values[planIndex]}</span>
                      ) : row.included?.[planIndex] ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <X className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div className="grid grid-cols-1 gap-2 p-3 lg:grid-cols-[1.45fr_repeat(3,minmax(0,1fr))] lg:p-4">
                <div className="text-[11px] leading-relaxed text-muted-foreground lg:text-xs">
                  No setup fees. No long contracts. Hosting and support are included across all plans. Basic includes on-site Google setup, while Starter and Pro add the stronger local visibility features.
                </div>
                {plans.map((plan) => (
                  <Button
                    key={plan.name}
                    asChild
                    size="default"
                    variant={plan.name === "Starter" ? "default" : "outline"}
                    className="h-9 w-full text-sm"
                  >
                    <Link href="/contact">Get {plan.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 grid max-w-5xl gap-3 rounded-2xl border border-border bg-muted/30 p-4 sm:grid-cols-3">
          {reassurancePoints.map((point) => (
            <div key={point} className="flex items-center justify-center gap-2 text-center text-sm font-medium text-foreground">
              <Check className="h-4 w-4 text-green-600" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-foreground font-medium mb-3">
            One booked job from your website can cover 6 months of hosting.
          </p>
          <p className="text-primary font-semibold mb-4">
            Setup fee waived if you go live within 7 days of seeing your demo
          </p>
          <p className="text-muted-foreground text-sm">
            No contracts. Cancel anytime. All prices include UK hosting and support.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-primary/15 bg-primary/5 p-6 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Real Client Proof
          </p>
          <p className="mt-3 font-display text-2xl font-bold text-foreground">
            Built for trades like ADL Mechanic
          </p>
          <p className="mt-3 text-muted-foreground">
            A live mobile mechanic website built to convert urgent callouts and local service enquiries with clear contact paths and fast decision-making.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">
            Real project. Trade-first messaging. Built to turn visitors into calls and enquiries.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ Teaser */}
      <SectionWrapper background="muted">
        <div
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Start With a Free Demo
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {"No payment needed until you're ready to go live. We'll build you a complete demo website for free — so you can see exactly what you're getting before you commit."}
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Request Your Free Demo</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
