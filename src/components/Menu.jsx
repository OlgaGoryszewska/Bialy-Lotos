import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { bookingUrl } from './FloatingBookingButton'

export const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/zabiegi', label: 'Zabiegi' },
  { href: '/problemy', label: 'Problemy' },
  { href: '/cennik', label: 'Cennik' },
  { href: '/sklep', label: 'Sklep' },
  { href: '/o-nas', label: 'O Nas' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/blog', label: 'Blog' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/rodo', label: 'RODO' },
]

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu((current) => !current)
  }

  // Blokada przewijania strony pod otwartym menu; zamknięcie po przejściu na desktop
  useEffect(() => {
    if (!showMenu) return undefined

    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setShowMenu(false)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setShowMenu(false)
    }
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    desktopQuery.addEventListener('change', closeOnDesktop)
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      desktopQuery.removeEventListener('change', closeOnDesktop)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [showMenu])

  return (
    <div className="relative flex max-w-full flex-col">
      <button
        className="flex w-full justify-end bg-transparent p-3 lg:hidden"
        onClick={handleToggleMenu}
        type="button"
        aria-label={showMenu ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={showMenu}
      >
        <span className="flex h-6 w-8 flex-col justify-center gap-1.5">
          <span className="block h-px w-full bg-gold" />
          <span className="block h-px w-full bg-gold" />
          <span className="block h-px w-full bg-gold" />
        </span>
      </button>
      {showMenu &&
        createPortal(
          <div className="fixed inset-x-0 bottom-0 top-16 z-[60] overflow-y-auto border-t border-stone-100 bg-white px-6 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-4 font-poppins lg:hidden">
            <div className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="w-full border-b border-stone-100 py-3 text-left text-sm font-medium uppercase tracking-[0.14em] text-neutral-700 transition-colors last:border-b-0 hover:text-gold"
                  href={link.href}
                  onClick={() => setShowMenu(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-neutral-900"
              onClick={() => setShowMenu(false)}
            >
              Umów wizytę
            </a>
          </div>,
          document.body
        )}
    </div>
  )
}
