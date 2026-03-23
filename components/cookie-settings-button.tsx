"use client"

import { openCookieBanner } from "@/components/cookie-banner"

interface CookieSettingsButtonProps {
  className?: string
}

export function CookieSettingsButton({ className }: CookieSettingsButtonProps) {
  return (
    <button type="button" onClick={openCookieBanner} className={className}>
      Cookie Settings
    </button>
  )
}
