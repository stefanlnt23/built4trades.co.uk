import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="max-w-4xl"
          >
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
              Built by a Real Person, for Real Trades
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl">
              No big agency. No outsourcing. Just honest, affordable websites built specifically for UK tradespeople.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
          >
            <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
              {"I'm Stef, a Coventry-based web developer who noticed that too many skilled tradespeople were losing work simply because they had no online presence — or a website that looked like it was built in 2005."}
            </p>
            <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
              Built4Trades.co.uk exists to fix that. I build honest, affordable, no-nonsense websites specifically for trades. No jargon, no complicated contracts, no waiting months for updates.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
              <p className="text-xl lg:text-2xl font-display font-medium text-foreground italic">
                {"\"Not a big agency. No outsourcing. Just me — making sure your business looks the part online.\""}
              </p>
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Every website I build is designed to do one thing: get you more work. I handle everything — the design, the hosting, the tech stuff — so you can focus on what you do best.
            </p>
          </div>
          <div
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.14),transparent_34%)] blur-2xl" />
            <div className="aspect-[4/4.7] relative overflow-hidden rounded-[2rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,248,240,0.92),rgba(243,238,230,0.84))] shadow-[0_28px_70px_rgba(15,23,42,0.10)]">
              <Image
                src="/me.png"
                alt="Stef - Built4Trades.co.uk founder"
                fill
                className="object-cover object-top scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_18%,transparent_62%,rgba(247,242,235,0.38)_82%,rgba(247,242,235,0.92)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-[#f7f2eb] via-[#f7f2eb]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-white/28 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[14%] bg-gradient-to-l from-white/22 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg">
              <p className="font-display font-bold text-2xl">Based in Coventry</p>
              <p className="text-primary-foreground/80">Serving all of the UK</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Bella Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative order-1 lg:order-1"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.14),transparent_30%)] blur-2xl" />
            <div className="aspect-[4/4.85] relative overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(180deg,rgba(251,249,245,0.92),rgba(241,236,229,0.84))] shadow-[0_28px_70px_rgba(15,23,42,0.08)]">
              <Image
                src="/bella.png"
                alt="Bella - graphic designer for Built4Trades.co.uk"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_18%,transparent_60%,rgba(247,242,235,0.34)_82%,rgba(247,242,235,0.90)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-[#f7f2eb] via-[#f7f2eb]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-white/24 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-white/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg">
              <p className="font-display text-2xl font-bold">Graphic Designer</p>
              <p className="text-primary-foreground/80">Branding and visual direction</p>
            </div>
          </div>

          <div
            className="order-2 lg:order-2"
          >
            <SectionHeader
              title="Meet Bella"
              centered={false}
            />
            <div
              className="max-w-3xl"
            >
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                Bella is the graphic designer behind the visual side of Built4Trades.co.uk. She helps shape the branding, layout direction, and design details so the website feels polished, clear, and built with intent.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                While I handle the development and technical side, Bella brings the creative eye that helps the site look professional and properly put together from first impression to final finish.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Together, that means you get a website that not only works properly, but also looks sharp and represents your business the right way online.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Why I Started */}
      <SectionWrapper background="muted">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 lg:order-1">
            <SectionHeader
              title="Why I Started Built4Trades.co.uk"
              centered={false}
            />
            <div
              className="max-w-3xl"
            >
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                I used to freelance for agencies, building websites for all sorts of businesses. But I kept seeing the same problem: talented tradespeople were being overcharged for mediocre websites, or they were putting off getting one because the whole process seemed too complicated and expensive.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                Meanwhile, their competitors with half the skills but a decent website were getting all the calls.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                That didnt sit right with me. So I started Built4Trades.co.uk — a simple, transparent service where I build you a professional website, you pay a flat monthly fee, and I handle everything else. No surprises, no tech headaches, no contracts tying you down.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                If youre a tradesperson who wants a website that actually works for your business, without the hassle — Im here to help.
              </p>
            </div>
          </div>

          <div
            className="relative order-2 lg:order-2"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom,rgba(251,146,60,0.14),transparent_30%)] blur-2xl" />
            <div className="relative aspect-[4/4.85] overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(180deg,rgba(251,249,245,0.92),rgba(241,236,229,0.84))] shadow-[0_28px_70px_rgba(15,23,42,0.08)]">
              <Image
                src="/me2.png"
                alt="Stef working on Built4Trades.co.uk"
                fill
                className="object-cover object-top scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent_18%,transparent_60%,rgba(247,242,235,0.34)_82%,rgba(247,242,235,0.90)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-t from-[#f7f2eb] via-[#f7f2eb]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-white/24 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Want to See What I Can Do for Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get in touch and Ill build you a free demo site — no payment, no obligation. Just a proper look at what your new website could be.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
