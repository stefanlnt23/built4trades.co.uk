import Link from "next/link"
import type { Metadata } from "next"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Cookie Policy | Built4Trades.co.uk",
  description: "How Built4Trades.co.uk uses cookies, analytics, and consent choices.",
}

const lastUpdated = "23 March 2026"

const cookieRows = [
  {
    category: "Strictly necessary",
    purpose: "Supports core website functions and remembers your cookie choice so the banner does not keep reappearing after you make a selection.",
    duration: "Usually until cleared or replaced",
    optional: "No",
  },
  {
    category: "Analytics",
    purpose: "Helps us understand overall site performance, popular pages, and broad visitor journeys so we can improve the website.",
    duration: "Set by the analytics provider",
    optional: "Yes",
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-muted pb-16 pt-28 lg:pb-24 lg:pt-36">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
          <h1 className="font-display text-4xl font-bold text-foreground lg:text-5xl">Cookie Policy</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            This page explains what cookies and similar technologies are used on Built4Trades.co.uk, what they do, and
            how you can control them.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-4xl space-y-10">
          <section className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">What are cookies?</h2>
            <p className="leading-8 text-muted-foreground">
              Cookies are small text files stored on your device when you visit a website. Similar technologies can also
              store or read information from your device. Some are essential for the website to work, while others are
              optional and used for measurement or enhanced functionality.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">How we use them</h2>
            <p className="leading-8 text-muted-foreground">
              Built4Trades.co.uk uses strictly necessary storage to remember your consent preference and keep the site
              functioning. Optional analytics only load if you actively accept them through the cookie banner.
            </p>
            <div className="overflow-hidden rounded-2xl border border-stone-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-stone-50 text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">Purpose</th>
                    <th className="px-4 py-3 font-semibold">Typical duration</th>
                    <th className="px-4 py-3 font-semibold">Optional?</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map((row) => (
                    <tr key={row.category} className="border-t border-stone-200 align-top">
                      <td className="px-4 py-3 font-medium text-foreground">{row.category}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.duration}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.optional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">Analytics provider</h2>
            <p className="leading-8 text-muted-foreground">
              If you accept analytics cookies, this website may use Vercel Analytics to collect aggregate usage
              information such as page views, browser type, device category, referring source, and approximate location.
              That data helps us understand how the site performs and where we can improve it.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-bold text-foreground">How to manage your choice</h2>
            <p className="leading-8 text-muted-foreground">
              When you first visit the site, you can choose whether to allow optional analytics cookies. If you reject
              them, only strictly necessary storage remains active. You can also reopen the cookie banner from the footer using the Cookie Settings link, or clear cookies in your browser settings and revisit the site to make a new choice.
            </p>
            <p className="leading-8 text-muted-foreground">
              For broader privacy information, please read the <Link href="/privacy-policy" className="font-medium text-foreground underline underline-offset-4">Privacy Policy</Link>. For terms applying to the use of the website and services, see the <Link href="/terms-and-conditions" className="font-medium text-foreground underline underline-offset-4">Terms and Conditions</Link>.
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  )
}
