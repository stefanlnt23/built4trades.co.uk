"use client"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"
import { COOKIE_CONSENT_KEY } from "@/components/cookie-banner"

export function AnalyticsConsent() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      const value = window.localStorage.getItem(COOKIE_CONSENT_KEY)
      setHasConsent(value === "accepted")
    }

    syncConsent()
    window.addEventListener("cookie-consent-changed", syncConsent)

    return () => window.removeEventListener("cookie-consent-changed", syncConsent)
  }, [])

  return hasConsent ? <Analytics /> : null
}
