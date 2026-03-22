import { ArrowRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,211,102,0.32)] transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}
