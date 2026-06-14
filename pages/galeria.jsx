import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../src/components/Nav'
import { effectGalleries } from '../src/data/effects'
import faceImage from '../src/assets/img/faceNoice.jpg'
import horizontalImage from '../src/assets/img/faceNoiceHorisontal.jpg'
import portraitImage from '../src/assets/img/faceTwo.png'
import salonImage from '../src/assets/img/sylwia.jpg'

const effectImages = [
  portraitImage,
  faceImage,
  horizontalImage,
  salonImage,
  faceImage,
  portraitImage,
]

const GalleryPage = () => (
  <div className="min-h-screen bg-white">
    <Head>
      <title>Galeria | Biały Lotos</title>
      <meta
        name="description"
        content="Galeria efektów Biały Lotos w Ciechanowie: brwi permanentne, usta permanentne, kreski, HIFU, laser CO2 i depilacja laserowa."
      />
    </Head>
    <Nav />
    <main className="font-poppins max-w-6xl mx-auto px-5 py-10 space-y-10 sm:px-6">
      <header className="space-y-4 text-center">
        <h1 className="font-dmserif text-4xl font-normal uppercase tracking-[0.12em] text-gold">
          Galeria efektów
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-500">
          Przegląd efektów przed i po w podziale na najważniejsze zabiegi.
          Aktualne zdjęcia realizacji można regularnie podmieniać, zachowując
          ten sam układ SEO.
        </p>
      </header>

      <nav className="flex flex-wrap justify-center gap-3 border-y border-stone-200 py-5">
        {effectGalleries.map((gallery) => (
          <a
            key={gallery.slug}
            href={`#${gallery.slug}`}
            className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-gold"
          >
            {gallery.title}
          </a>
        ))}
      </nav>

      {effectGalleries.map((gallery) => (
        <section
          key={gallery.slug}
          id={gallery.slug}
          className="scroll-mt-24 border-b border-stone-200 pb-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
                {gallery.title}
              </h2>
              <p className="text-sm leading-7 text-neutral-500">
                {gallery.description}
              </p>
            </div>
            <Link
              href={`/${gallery.serviceSlugs[0]}`}
              className="inline-flex w-fit border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold"
            >
              Zobacz zabieg
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {gallery.effects.map((effect, index) => {
              const beforeImage = effectImages[index % effectImages.length]
              const afterImage = effectImages[(index + 1) % effectImages.length]

              return (
                <article
                  key={`${gallery.slug}-${effect}`}
                  className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                >
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <Image
                        src={beforeImage}
                        alt={`${gallery.title} zdjęcie przed ${index + 1}`}
                        className="aspect-[4/5] h-full w-full object-cover"
                      />
                      <span className="absolute left-3 top-3 bg-white/85 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-neutral-500 backdrop-blur">
                        Przed
                      </span>
                    </div>
                    <div className="relative border-l border-white">
                      <Image
                        src={afterImage}
                        alt={`${gallery.title} zdjęcie po ${index + 1}`}
                        className="aspect-[4/5] h-full w-full object-cover"
                      />
                      <span className="absolute left-3 top-3 bg-white/85 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-gold backdrop-blur">
                        Po
                      </span>
                    </div>
                  </div>
                  <p className="min-h-[88px] px-5 py-4 text-sm leading-7 text-neutral-500">
                    {effect}
                  </p>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  </div>
)

export default GalleryPage
