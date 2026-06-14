import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../src/components/Nav'
import { serviceCategories } from '../src/data/services'
import faceImage from '../src/assets/img/faceNoice.jpg'
import treatmentImage from '../src/assets/img/faceNoiceHorisontal.jpg'
import portraitImage from '../src/assets/img/faceTwo.png'

const featureImages = [
  {
    src: faceImage,
    alt: 'Zabiegi kosmetyczne Biały Lotos Ciechanów',
  },
  {
    src: treatmentImage,
    alt: 'Makijaż permanentny i kosmetologia Ciechanów',
  },
  {
    src: portraitImage,
    alt: 'Stylizacja brwi i rzęs Biały Lotos',
  },
]

const ZabiegiPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Zabiegi | Biały Lotos</title>
        <meta
          name="description"
          content="Centrum zabiegów Biały Lotos Ciechanów: PMU, kosmetologia premium, depilacja laserowa, laminacja brwi, lifting i przedłużanie rzęs."
        />
      </Head>
      <Nav />
      <main className="font-poppins px-5 py-10 max-w-6xl mx-auto space-y-12 sm:px-6">
        <header className="space-y-4 text-center">
          <h1 className="font-dmserif text-4xl font-normal uppercase tracking-[0.12em] text-gold">
            Zabiegi
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-500">
            Centrum usług Białego Lotosu. Wybierz kategorię i przejdź do
            podstrony zabiegu, aby poznać zakres, efekt i szczegóły oferty w
            Ciechanowie.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {featureImages.map((image) => (
            <div
              key={image.alt}
              className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid gap-6">
          {serviceCategories.map((category) => (
            <section
              key={category.title}
              className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-6"
            >
              <div className="border-b border-stone-100 pb-4">
                <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-500">
                  {category.description}
                </p>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="group rounded-lg border border-stone-100 bg-white p-4 transition-colors hover:border-gold"
                  >
                    <h3 className="font-dmserif text-2xl font-normal text-neutral-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold">
                      Czytaj więcej
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/cennik"
            className="inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
          >
            Zobacz pełny cennik
          </Link>
        </div>
      </main>
    </div>
  )
}

export default ZabiegiPage
