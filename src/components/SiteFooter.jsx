import Link from 'next/link'

export const SiteFooter = () => (
  <footer className="border-t border-stone-200 bg-white px-5 py-8 sm:px-6">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
      <p>Biały Lotos, Ciechanów</p>
      <div className="flex flex-wrap gap-5">
        <Link href="/rodo" className="text-gold">
          RODO i polityka prywatności
        </Link>
        <Link href="/kontakt" className="text-gold">
          Kontakt
        </Link>
      </div>
    </div>
  </footer>
)
