import { ArrowRight, MessageCircle } from "lucide-react"
import { siteConfig } from "@/lib/site"

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.24)] transition-transform hover:-translate-y-0.5 sm:bottom-5 sm:right-5 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm sm:shadow-[0_18px_45px_rgba(37,211,102,0.32)]"
    >
      <MessageCircle className="h-4 w-4" />
      WhatsApp
      <ArrowRight className="h-4 w-4" />
    </a>
  )
}
