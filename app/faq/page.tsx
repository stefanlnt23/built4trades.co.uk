"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionWrapper } from "@/components/section-wrapper"

const faqs = [
  {
    question: "Do I need to be technical to use my website?",
    answer: "Not at all. Your website is fully managed — I handle all the technical stuff. You just tell me what you want changed, and I'll do it. No logins, no dashboards to learn, no software to update. You can focus on your trade while I take care of your online presence.",
  },
  {
    question: "Can I update the website myself?",
    answer: "You can if you want to — I can set you up with a simple system to make basic changes. But most of my clients prefer to just send me a message when they need something updated. It's included in your monthly price, so there's no extra cost.",
  },
  {
    question: "What happens if I want to cancel?",
    answer: "You can cancel anytime with 30 days' notice. No penalties, no hassle. If you want to keep your website, I can help you move it to your own hosting. I'm not interested in locking anyone into something that isn't working for them.",
  },
  {
    question: "Is hosting included in the price?",
    answer: "Yes. Your monthly price covers everything: hosting, security certificates, backups, and any minor updates you need. There are no hidden costs or surprise bills.",
  },
  {
    question: "Will my website show up on Google?",
    answer: "Yes. Every website I build is set up with proper SEO basics so Google can find and index it. For the Pro plan, I also help with local SEO to get you showing up when people search for your trade in your area. It takes a few weeks for Google to start ranking a new site, but you'll be set up the right way from day one.",
  },
  {
    question: "How long does it take to go live?",
    answer: "Once you've approved your demo, we can typically go live within 2-3 days. The whole process from first contact to live website is usually about a week. If you need it faster, just let me know and I'll see what I can do.",
  },
  {
    question: "Do you work with tradespeople outside of Coventry?",
    answer: "Absolutely. I work with tradespeople all over the UK. Everything is done remotely — we chat by phone, email, or WhatsApp. You never need to leave your van or take time off work.",
  },
  {
    question: "What if I already have a website but it's not working for me?",
    answer: "I can help with that too. Sometimes a website just needs a refresh, better content, or proper SEO setup. Get in touch and I'll take a look at what you've got. I'll give you an honest assessment of whether it's worth fixing or starting fresh.",
  },
  {
    question: "What do I need to provide to get started?",
    answer: "Not much! Just your business name, contact details, and a rough idea of what services you offer. I'll guide you through the rest. If you have photos of your work, great — but I can source professional stock images if not.",
  },
  {
    question: "Do you offer any guarantees?",
    answer: "I offer a simple guarantee: if you're not happy with your demo, you don't pay anything. I won't take a penny until you've seen your website and approved it. And if you sign up and it's not working out, you can cancel anytime with no penalties.",
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Common Questions
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              Everything you need to know about getting your trade business online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-base lg:text-lg font-semibold hover:no-underline hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="muted">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Still Have a Question?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Just ask. I'm always happy to have a chat and answer any questions you might have. No pressure, no sales pitch.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  )
}
