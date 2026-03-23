import Link from "next/link"
import type { Metadata } from "next"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms and Conditions | Built4Trades.co.uk",
  description: "Website use and service terms for Built4Trades.co.uk.",
}

const lastUpdated = "23 March 2026"

const sections = [
  {
    title: "1. About these terms",
    body: [
      "These Terms and Conditions govern your use of Built4Trades.co.uk and any website design, hosting, support, or related services supplied by Built4Trades.co.uk.",
      `By using this website, requesting a demo, or purchasing services, you agree to these terms. If you do not agree, please do not use the site or the services.`,
    ],
  },
  {
    title: "2. Services",
    body: [
      "Built4Trades.co.uk provides website design and related digital services tailored for UK tradespeople. Services may include demo builds, live website builds, hosting coordination, updates, support, search visibility improvements, and related advice.",
      "Any service scope, pricing, deliverables, and timings can be confirmed separately in writing before work starts.",
    ],
  },
  {
    title: "3. Demo websites and proposals",
    body: [
      "Free demo websites, mock-ups, and proposals are provided for evaluation purposes. Unless agreed otherwise in writing after purchase, Built4Trades.co.uk retains ownership of demo concepts, layouts, and underlying code.",
      "We may withdraw, amend, or delete an unpublished demo at any time before a paid agreement is formed.",
    ],
  },
  {
    title: "4. Client responsibilities",
    body: [
      "You are responsible for providing accurate information, lawful content, and any approvals, branding, access credentials, or materials needed to deliver the work.",
      "You must ensure that content you provide does not infringe third-party rights, break the law, or contain misleading, defamatory, or prohibited material.",
    ],
  },
  {
    title: "5. Payments, renewals, and cancellation",
    body: [
      "Where services are paid, pricing and billing frequency will be agreed before launch. Ongoing services such as hosting, maintenance, or support may renew until cancelled.",
      "Unless a different written agreement says otherwise, fees already paid for completed work or time already committed are non-refundable. You may cancel future recurring services by giving reasonable notice before the next billing date.",
    ],
  },
  {
    title: "6. Turnaround times",
    body: [
      "Any estimated delivery date is a target, not a guarantee. Timescales may depend on prompt feedback, content supply, technical dependencies, third-party providers, and the complexity of the work.",
    ],
  },
  {
    title: "7. Intellectual property",
    body: [
      "Built4Trades.co.uk retains ownership of pre-existing tools, frameworks, processes, designs, and code libraries used to create the service.",
      "Once full payment has been received for bespoke work, you will have the right to use the finished website content and agreed deliverables for your business, subject to any third-party licences, platform restrictions, or separately agreed ownership terms.",
    ],
  },
  {
    title: "8. Acceptable use of the website",
    body: [
      "You must not misuse this website by attempting unauthorised access, introducing malware, interfering with performance, scraping content unlawfully, or using the site for fraudulent or unlawful purposes.",
    ],
  },
  {
    title: "9. Third-party platforms and links",
    body: [
      "Services may depend on third-party suppliers such as domain registrars, hosting providers, payment providers, analytics platforms, or communication tools. We are not responsible for outages, pricing changes, policy changes, or service interruptions caused by those third parties.",
      "This site may also include links to third-party websites for convenience. We do not control those sites and do not endorse or guarantee them.",
    ],
  },
  {
    title: "10. Liability",
    body: [
      "Nothing in these terms excludes or limits liability where it would be unlawful to do so, including liability for fraud, fraudulent misrepresentation, or death or personal injury caused by negligence.",
      "Subject to that, Built4Trades.co.uk will not be liable for indirect or consequential loss, loss of profit, loss of business, loss of data, or loss of opportunity arising from use of the website or services. Total liability for any claim relating to paid services will be limited to the amount paid for the relevant service giving rise to the claim, unless a separate written agreement states otherwise.",
    ],
  },
  {
    title: "11. Data protection and confidentiality",
    body: [
      "Each party will handle personal data in line with applicable data protection law. Details about how this website handles personal data are set out in the Privacy Policy.",
      "We will treat non-public business information you share with us as confidential, except where disclosure is needed to deliver the service, required by law, or already lawfully available to us without restriction.",
    ],
  },
  {
    title: "12. Changes to services or terms",
    body: [
      `We may update this website, our services, or these terms from time to time. The latest version will appear on this page and is dated ${lastUpdated}.`,
    ],
  },
  {
    title: "13. Governing law",
    body: [
      "These terms are governed by the laws of England and Wales. The courts of England and Wales will have jurisdiction, unless another part of the UK gives you a mandatory right to bring a claim in your home courts.",
    ],
  },
  {
    title: "14. Contact",
    body: [
      `For questions about these terms or the services, contact ${siteConfig.founderName} at ${siteConfig.email} or call ${siteConfig.phoneDisplay}.`,
    ],
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="bg-muted pb-16 pt-28 lg:pb-24 lg:pt-36">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
          <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">Terms and Conditions</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            These terms explain the rules for using the Built4Trades.co.uk website and the basis on which services are
            offered.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-4xl space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-bold text-foreground">{section.title}</h2>
              <div className="space-y-3 text-base leading-8 text-muted-foreground">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Read the related policies</h2>
            <p className="mt-3 leading-8 text-muted-foreground">
              You should also review the <Link href="/privacy-policy" className="font-medium text-foreground underline underline-offset-4">Privacy Policy</Link> and <Link href="/cookie-policy" className="font-medium text-foreground underline underline-offset-4">Cookie Policy</Link> for details on data handling and cookie consent.
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  )
}
