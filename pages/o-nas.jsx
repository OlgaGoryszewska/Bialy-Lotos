import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Nav } from '../src/components/Nav'
import teamImage from '../src/assets/img/SylwiaJola.jpg'

const AboutPage = () => (
  <div className="min-h-screen bg-white">
    <Head>
      <title>O nas | Biały Lotos</title>
      <meta
        name="description"
        content="Poznaj salon Biały Lotos w Ciechanowie: miejsce stworzone dla kosmetologii, PMU, stylizacji rzęs i brwi oraz zabiegów premium."
      />
    </Head>
    <Nav />
    <main className="font-poppins max-w-6xl mx-auto px-5 py-10 space-y-10 sm:px-6">
      <section className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <Image
            src={teamImage}
            alt="Biały Lotos Ciechanów"
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            O Nas
          </p>
          <h1 className="font-dmserif text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl">
            Biały Lotos Ciechanów
          </h1>
          <p className="text-sm leading-7 text-neutral-500">
            Biały Lotos to salon, w którym estetyka spotyka się ze spokojem,
            precyzją i indywidualnym podejściem. Tworzymy zabiegi dla osób,
            które chcą wyglądać świeżo, elegancko i naturalnie.
          </p>
          <p className="text-sm leading-7 text-neutral-500">
            W ofercie znajdziesz makijaż permanentny, kosmetologię premium,
            zabiegi laserowe, stylizację rzęs i brwi oraz przekłuwanie.
          </p>
        </div>
      </section>
    </main>
  </div>
)

export default AboutPage
