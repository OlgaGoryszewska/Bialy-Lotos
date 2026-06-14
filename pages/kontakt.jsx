import Head from 'next/head'
import React from 'react'
import { Nav } from '../src/components/Nav'

const bookingUrl =
  'https://booksy.com/pl-pl/142271_salon-pieknosci-bialy-lotos_salon-kosmetyczny_4495_ciechanow#ba_s=seo'

const ContactPage = () => (
  <div className="min-h-screen bg-white">
    <Head>
      <title>Kontakt | Biały Lotos</title>
      <meta
        name="description"
        content="Kontakt z salonem Biały Lotos w Ciechanowie. Umów wizytę na zabiegi PMU, kosmetologii, laserowe, rzęsy i brwi."
      />
    </Head>
    <Nav />
    <main className="font-poppins max-w-4xl mx-auto px-5 py-10 space-y-8 sm:px-6">
      <header className="space-y-4 text-center">
        <h1 className="font-dmserif text-4xl font-normal uppercase tracking-[0.12em] text-gold">
          Kontakt
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-500">
          Chcesz dobrać zabieg albo sprawdzić dostępne terminy? Skorzystaj z
          rezerwacji online.
        </p>
      </header>

      <section className="rounded-lg border border-stone-200 bg-white p-6 text-center shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
          Biały Lotos
        </p>
        <h2 className="mt-3 font-dmserif text-3xl font-normal text-neutral-900">
          Salon piękności w Ciechanowie
        </h2>
        <a
          className="mt-6 inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
        >
          Rezerwacja online
        </a>
      </section>
    </main>
  </div>
)

export default ContactPage
