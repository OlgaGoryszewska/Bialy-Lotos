import { useState } from 'react'
import Link from 'next/link'

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu((current) => !current)
  }

  return (
    <div className="flex flex-col max-w-full">
      <button
        className="flex w-full justify-end bg-transparent p-3"
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
        <div className="z-40 flex flex-col rounded-bl-lg border border-white/60 bg-white/70 px-14 pt-4 font-dmserif shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-md">
          <Link
            className="w-full pb-4 text-center text-xl text-gold"
            href="/"
            onClick={() => setShowMenu(false)}
          >
            Strona główna
          </Link>
          <Link
            className="w-full pb-4 text-center text-xl text-gold"
            href="/zabiegi"
            onClick={() => setShowMenu(false)}
          >
            Zabiegi
          </Link>
          <Link
            className="w-full pb-4 text-center text-xl text-gold"
            href="/problemy"
            onClick={() => setShowMenu(false)}
          >
            Problemy
          </Link>
          <Link
            className="w-full pb-4 text-center text-xl text-gold"
            href="/o-nas"
            onClick={() => setShowMenu(false)}
          >
            O Nas
          </Link>
          <Link
            className="w-full pb-4 text-center text-xl text-gold"
            href="/galeria"
            onClick={() => setShowMenu(false)}
          >
            Galeria
          </Link>
          <Link
            className="w-full pb-4 text-center text-xl text-gold"
            href="/blog"
            onClick={() => setShowMenu(false)}
          >
            Blog
          </Link>
          <Link
            className="w-full pb-4 text-center text-xl text-gold"
            href="/kontakt"
            onClick={() => setShowMenu(false)}
          >
            Kontakt
          </Link>
        </div>
      )}
    </div>
  )
}
