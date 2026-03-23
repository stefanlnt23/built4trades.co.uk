import Link from "next/link"
import type { Metadata } from "next"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy | Built4Trades.co.uk",
  description: "How Built4Trades.co.uk collects, uses, stores, and protects personal data.",
}

const lastUpdated = "23 March 2026"

const sections = [
  {
    title: "Who we are",
    body: [
      `Built4Trades.co.uk is a website design and support service for UK tradespeople. For the purposes of UK data protection law, Built4Trades.co.uk is the data controller for the personal information collected through this website and during sales or support conversations.`,
      `If you have questions about this notice or how your data is handled, you can contact ${siteConfig.founderName} by email at ${siteConfig.email}, by phone on ${siteConfig.phoneDisplay}, or by post in ${siteConfig.baseLocation}.`,
    ],
  },
  {
    title: "The information we collect",
    body: [
      "We may collect your name, business name, phone number, email address, service requirements, project notes, and any other details you choose to include when you contact us.",
      "We also collect limited technical and usage information needed to keep the site secure and understand overall website performance, such as pages viewed, browser type, device information, and approximate location derived from IP address when analytics is enabled.",
      "If you become a customer, we may also hold billing, service history, website content, and account management records needed to deliver the service.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use personal information to respond to enquiries, prepare demo websites or proposals, deliver paid services, manage customer relationships, take payment, maintain records, prevent misuse, and improve the website and service.",
      "We do not sell personal information. We do not use your enquiry details for unrelated mass marketing, and we only send direct marketing where we have a lawful basis to do so.",
    ],
  },
  {
    title: "Our lawful bases",
    body: [
      "We process enquiry and project information because it is necessary to take steps at your request before entering into a contract, and to perform our contract with you where you become a customer.",
      "We rely on legitimate interests for limited business administration, website security, service improvement, and carefully controlled analytics where consent has been given for optional cookies.",
      "Where the law requires consent, such as for non-essential analytics cookies, we ask for it first and you can withdraw that choice at any time.",
    ],
  },
  {
    title: "Who we share data with",
    body: [
      "We share information only where needed to run the business and website, such as website hosting providers, analytics providers, form handling services, payment processors, IT support providers, and professional advisers.",
      "Current website tools may include Vercel for hosting and analytics, and Formspree for contact form delivery. Those providers process information on our behalf under their own privacy and security commitments.",
      "We may also disclose information where required by law, to establish or defend legal claims, or to protect the rights, property, or safety of the business, clients, or others.",
    ],
  },
  {
    title: "International transfers",
    body: [
      "Some suppliers may process data outside the UK. Where that happens, we aim to use providers offering appropriate safeguards, such as adequacy regulations, recognised transfer mechanisms, or contractual protections.",
    ],
  },
  {
    title: "How long we keep information",
    body: [
      "We keep enquiry information only for as long as reasonably needed to respond, follow up, keep business records, and deal with legal, tax, or contractual issues.",
      "If you become a customer, we keep relevant records for as long as the service continues and afterwards for legitimate legal, accounting, and support reasons. Data that is no longer needed is deleted or anonymised when practical.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on the circumstances, you may have the right to ask for access to your personal data, correction of inaccurate data, deletion, restriction of processing, objection to processing, and data portability.",
      "You can also withdraw consent for optional cookies at any time. To exercise your rights, contact us using the details in this notice. We may need to verify your identity before acting on a request.",
      "If you are unhappy with how your information is handled, you can complain to the Information Commissioner’s Office (ICO) at ico.org.uk.",
    ],
  },
  {
    title: "Security",
    body: [
      "We take reasonable technical and organisational steps to protect personal information against unauthorised access, loss, misuse, or alteration. No online system is completely risk-free, but we work to keep the website and suppliers appropriately secured.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "This site may link to third-party websites such as WhatsApp or portfolio examples. Those websites have their own privacy practices and we are not responsible for their content or handling of personal data.",
    ],
  },
  {
    title: "Changes to this notice",
    body: [
      `We may update this Privacy Policy from time to time to reflect legal, technical, or business changes. The latest version will always be published on this page and shows the last updated date of ${lastUpdated}.`,
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-muted pb-16 pt-28 lg:pb-24 lg:pt-36">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
          <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            This notice explains what personal data Built4Trades.co.uk collects, why it is used, who it is shared with,
            and the choices available to you.
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
            <h2 className="font-display text-2xl font-bold text-foreground">Related policies</h2>
            <p className="mt-3 leading-8 text-muted-foreground">
              You should also read our <Link href="/cookie-policy" className="font-medium text-foreground underline underline-offset-4">Cookie Policy</Link> and <Link href="/terms-and-conditions" className="font-medium text-foreground underline underline-offset-4">Terms and Conditions</Link> for information about optional analytics, website use, and service terms.
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  )
}
