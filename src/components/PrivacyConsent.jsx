import Link from 'next/link'
import { useEffect, useState } from 'react'

const consentKey = 'bialy-lotos-privacy-consent'

export const getStoredPrivacyConsent = () => {
  if (typeof window === 'undefined') return null

  try {
    const storedConsent = window.localStorage.getItem(consentKey)
    return storedConsent ? JSON.parse(storedConsent) : null
  } catch {
    return null
  }
}

export const savePrivacyConsent = (consent) => {
  if (typeof window === 'undefined') return

  const nextConsent = {
    necessary: true,
    externalMaps: Boolean(consent.externalMaps),
    savedAt: new Date().toISOString(),
  }

  window.localStorage.setItem(consentKey, JSON.stringify(nextConsent))
  window.dispatchEvent(
    new CustomEvent('privacy-consent-change', { detail: nextConsent })
  )
}

export const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(!getStoredPrivacyConsent())
  }, [])

  const handleNecessary = () => {
    savePrivacyConsent({ externalMaps: false })
    setIsVisible(false)
  }

  const handleAccept = () => {
    savePrivacyConsent({ externalMaps: true })
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/92 px-5 py-5 shadow-[0_-18px_45px_rgba(15,23,42,0.08)] backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Prywatność i RODO
          </p>
          <p className="mt-2 text-sm leading-7 text-neutral-500">
            Używamy niezbędnych ustawień strony. Mapa Google ładuje zewnętrzne
            treści dopiero po Twojej zgodzie.
          </p>
          <Link
            href="/rodo"
            className="mt-2 inline-flex border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold"
          >
            Polityka prywatności
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleNecessary}
            className="border border-stone-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="border border-gold bg-gold px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white"
          >
            Akceptuję
          </button>
        </div>
      </div>
    </div>
  )
}

export const GoogleMapEmbed = () => {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      setHasConsent(Boolean(getStoredPrivacyConsent()?.externalMaps))
    }

    syncConsent()
    window.addEventListener('privacy-consent-change', syncConsent)

    return () => {
      window.removeEventListener('privacy-consent-change', syncConsent)
    }
  }, [])

  const handleAcceptMap = () => {
    savePrivacyConsent({ externalMaps: true })
  }

  if (hasConsent) {
    return (
      <iframe
        title="Mapa Google Biały Lotos Ciechanów"
        src="https://www.google.com/maps?q=Bia%C5%82y%20Lotos%20Ciechan%C3%B3w&output=embed"
        className="h-[420px] w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center bg-white p-8 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
        Mapa Google
      </p>
      <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">
        Mapa jest treścią zewnętrzną Google. Załadujemy ją dopiero po Twojej
        zgodzie.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={handleAcceptMap}
          className="border border-gold bg-gold px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white"
        >
          Pokaż mapę
        </button>
        <Link
          href="/rodo"
          className="border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold"
        >
          RODO
        </Link>
      </div>
    </div>
  )
}
