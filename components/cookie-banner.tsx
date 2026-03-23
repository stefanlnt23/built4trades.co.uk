"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const COOKIE_CONSENT_KEY = "b4t-cookie-consent"
const OPEN_COOKIE_BANNER_EVENT = "open-cookie-banner"

type ConsentState = "accepted" | "rejected" | null

function readConsent(): ConsentState {
  if (typeof window === "undefined") return null

  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY)
  return value === "accepted" || value === "rejected" ? value : null
}

export function openCookieBanner() {
  if (typeof window === "undefined") return
  window.dispatchEvent(new Event(OPEN_COOKIE_BANNER_EVENT))
}

export function CookieBanner() {
  const [isMounted, setIsMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setIsVisible(readConsent() === null)

    const handleOpen = () => setIsVisible(true)
    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, handleOpen)

    return () => window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, handleOpen)
  }, [])

  function updateConsent(nextValue: Exclude<ConsentState, null>) {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, nextValue)
    window.dispatchEvent(new Event("cookie-consent-changed"))
    setIsVisible(false)
  }

  if (!isMounted || !isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 shadow-2xl backdrop-blur">
      <div className="container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-3xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Cookie choices</p>
          <h2 className="font-display text-xl font-bold text-foreground">Choose how Built4Trades.co.uk uses analytics cookies</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We only use strictly necessary technologies by default. Optional analytics run only if you accept them, so
            you stay in control of non-essential tracking. Read our <Link href="/cookie-policy" className="font-medium text-foreground underline underline-offset-4">Cookie Policy</Link> and <Link href="/privacy-policy" className="font-medium text-foreground underline underline-offset-4">Privacy Policy</Link> for the full details.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
          <Button type="button" variant="outline" onClick={() => updateConsent("rejected")}>
            Reject optional cookies
          </Button>
          <Button type="button" onClick={() => updateConsent("accepted")}>
            Accept analytics cookies
          </Button>
        </div>
      </div>
    </div>
  )
}

export { COOKIE_CONSENT_KEY }
