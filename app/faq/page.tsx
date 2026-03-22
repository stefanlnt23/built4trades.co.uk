import Link from "next/link"
import { Clock3, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site"

const faqs = [
  {
    question: "I’m not good with tech. Will this be complicated?",
    answer:
      "No. The whole point is to keep this simple for you. I handle the setup, hosting, updates, and technical bits in the background, so you do not need to learn dashboards or mess around with settings. If you need something changed, just send me a message and I will sort it.",
  },
  {
    question: "What if I need to change something later?",
    answer:
      "That is included. If you need to update your phone number, change a service, add a new area, or swap some photos, just send it over. Most clients prefer that because it saves them time, and it means the site stays accurate without you having to do the work yourself.",
  },
  {
    question: "Will people actually find me on Google?",
    answer:
      "Yes, that is one of the main jobs of the site. Every website is set up with the SEO basics done properly so Google can crawl it, understand it, and show it for the right local searches. On higher plans, there is more local SEO work too. Rankings are never instant, but you will be set up the right way from day one instead of guessing.",
  },
  {
    question: "What if I do not get any enquiries?",
    answer:
      "No honest person can promise a specific number of leads, because that depends on your area, competition, and the jobs you offer. What I can do is make sure your site is built to give you the best chance: clear service pages, strong calls to action, mobile-friendly design, and proper local setup. The aim is not just to look good. It is to help turn visitors into calls and messages.",
  },
  {
    question: "Is hosting, security, backups, and all that included?",
    answer:
      "Yes. Hosting, SSL, backups, updates, and small ongoing changes are all included in the monthly price. You are not going to get a surprise bill for the basics. The whole offer is designed to remove the technical hassle and keep your costs predictable.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long contract. You can cancel anytime with 30 days' notice. No penalties, no awkward lock-in, and no hidden exit fees. If something is not working for you, I would rather be straightforward about it than trap you in a service you do not want.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Usually very quickly. Once I have your business details, I can put together a demo fast, and once you approve it, going live is normally only a matter of days. If you need to move quickly because your current site is poor or nonexistent, I can usually work around that.",
  },
  {
    question: "Do you write the content for me?",
    answer:
      "Yes, I can handle that. Most tradespeople do not want to sit down and write web copy after a full day's work, so I help shape the wording around your services, your area, and the type of jobs you want more of. If you already have wording you like, I can work with that too.",
  },
  {
    question: "Can I use my existing domain and business details?",
    answer:
      "Yes. If you already have a domain, phone number, email address, or branding you want to keep, that is no problem. I can build around what you already use so the switch feels straightforward and your customers still recognise your business.",
  },
  {
    question: "What makes this different from a normal web agency?",
    answer:
      "It is simpler, more personal, and built around trades. You are not paying for layers of meetings, bloated proposals, or a pile of extras. You get a straightforward monthly service, direct support, and a website that is focused on helping local customers find you and get in touch.",
  },
  {
    question: "What do I need to send to get started?",
    answer:
      "Usually just the basics: your business name, contact details, services, and the areas you cover. Photos are helpful if you have them, but they are not essential. I keep the process light because the goal is to get you moving quickly, not bury you in forms.",
  },
  {
    question: "Do you offer any kind of guarantee?",
    answer:
      "Yes. If you are not happy with your demo, you do not pay. That means you can see what your site could look like before committing to anything. It removes a lot of the usual risk and gives you a much clearer idea of what you are actually getting.",
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Questions Tradespeople Usually Ask Before Getting Started
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              Straight answers about how it works, what&apos;s included, and whether it&apos;s the right fit for your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <div key={index}>
                <AccordionItem value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base lg:text-lg font-semibold hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="muted">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Still Not Sure? Let&apos;s Have a Quick Chat
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Ask whatever you need. No pressure, no hard sell, and no tech jargon. Just clear answers about what would work best for your business.
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-foreground">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2">
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              Real support from Stef
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2">
              <Clock3 className="h-4 w-4 text-primary" />
              Fast replies on WhatsApp
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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
