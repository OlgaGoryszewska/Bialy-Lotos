import { useState } from 'react'
import Link from 'next/link'

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

  return (
    <div className="relative flex max-w-full flex-col">
      <button
        className="flex w-full justify-end bg-transparent p-3 lg:hidden"
        onClick={handleToggleMenu}
        type="button"
        aria-label="Otwórz menu"
        aria-expanded={showMenu}
      >
        <span className="flex h-6 w-8 flex-col justify-center gap-1.5">
          <span className="block h-px w-full bg-gold" />
          <span className="block h-px w-full bg-gold" />
          <span className="block h-px w-full bg-gold" />
        </span>
      </button>
      {showMenu && (
        <div className="absolute right-0 top-full z-50 mt-3 w-[min(22rem,calc(100vw-2rem))] rounded-lg border border-white/70 bg-white/95 p-6 font-poppins shadow-[0_24px_70px_rgba(15,23,42,0.14)] backdrop-blur-md lg:hidden">
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
        </div>
      )}
    </div>
  )
}
