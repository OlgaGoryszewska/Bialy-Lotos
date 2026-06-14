import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/img/menuLogo.png'

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)

  const handleToggleMenu = () => {
    setIsSpinning(true)
    setShowMenu((current) => !current)
    window.setTimeout(() => {
      setIsSpinning(false)
    }, 300)
  }

  return (
    <div className="flex flex-col max-w-full">
      <button
        className="flex flex-row justify-end bg-primary w-full"
        onClick={handleToggleMenu}
        type="button"
      >
        <Image
          alt="menu"
          src={logo}
          width={44}
          height={44}
          className={`${isSpinning ? 'animate-spin' : ''} m-2`}
        />
      </button>
      {showMenu && (
        <div className="rounded-bl-md flex flex-col bg-primary z-40 px-16 pt-4 font-bochan">
          <Link
            className="w-full text-center text-gold pb-4"
            href="/cennik"
            onClick={() => setShowMenu(false)}
          >
            Cennik
          </Link>
          <a
            className="w-full text-center text-gold pb-4"
            href="https://booksy.com/pl-pl/142271_salon-pieknosci-bialy-lotos_salon-kosmetyczny_4495_ciechanow#ba_s=seo"
            target="_blank"
            rel="noreferrer"
          >
            Rezerwacja
          </a>

        </div>
      )}
    </div>
  )
}
