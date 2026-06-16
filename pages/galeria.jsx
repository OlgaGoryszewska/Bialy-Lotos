import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../src/components/Nav'
import { effectGalleries } from '../src/data/effects'
import { getGalleryImagesBySlug } from '../src/data/effectImages'

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

      {effectGalleries.map((gallery) => {
        const images = getGalleryImagesBySlug(gallery.slug)
        const serviceSlug = gallery.serviceSlugs[0]

        return (
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
              {serviceSlug ? (
                <Link
                  href={`/${serviceSlug}`}
                  className="inline-flex w-fit border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold"
                >
                  Zobacz zabieg
                </Link>
              ) : null}
            </div>

            <div
              className={`mt-6 grid gap-5 ${
                images.length > 0 ? 'md:grid-cols-3' : 'md:grid-cols-2'
              }`}
            >
              {images.length > 0
                ? images.map((image, index) => (
                    <article
                      key={`${gallery.slug}-${image.name}`}
                      className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                    >
                      <Image
                        src={image.src}
                        alt={`${gallery.title}: ${image.name}`}
                        className="aspect-[4/5] w-full object-cover"
                      />
                      <div className="min-h-[128px] px-5 py-4">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                          {image.name}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-neutral-500">
                          {gallery.effects[index % gallery.effects.length]}
                        </p>
                      </div>
                    </article>
                  ))
                : gallery.effects.map((effect, index) => (
                    <article
                      key={`${gallery.slug}-${effect}`}
                      className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                    >
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                        Efekt {index + 1}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-neutral-500">
                        {effect}
                      </p>
                    </article>
                  ))}
            </div>
          </section>
        )
      })}
    </main>
  </div>
)

export default GalleryPage
