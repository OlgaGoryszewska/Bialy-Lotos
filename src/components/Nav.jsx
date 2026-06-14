import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, navLinks } from './Menu'
import logoText from '../assets/img/logoText.png'

export const Nav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-100 bg-white/90 px-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-md sm:px-6">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6">
        <Link href="/" aria-label="Biały Lotos - strona główna">
          <Image
            src={logoText}
            alt="Logo Text"
            width={112}
            height={50}
            className="h-auto w-28"
            priority
          />
        </Link>

        <nav
          aria-label="Główna nawigacja"
          className="hidden items-center gap-4 lg:flex xl:gap-6"
        >
          {navLinks
            .filter((link) => link.href !== '/rodo')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-neutral-700 transition-colors hover:text-gold xl:text-xs"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <Menu />
      </div>
    </header>
  )
}
