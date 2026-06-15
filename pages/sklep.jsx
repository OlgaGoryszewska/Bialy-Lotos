import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { Nav } from '../src/components/Nav'
import { shopCategories, shopProducts } from '../src/data/products'
import horizontalImage from '../src/assets/img/faceNoiceHorisontal.jpg'
import productImage from '../src/assets/img/product_01.png'
import voucherImage200 from '../src/assets/img/voucher_200zl.png'
import voucherImage500 from '../src/assets/img/voucher_500zl.png'

const voucherImagesByName = {
  'Voucher podarunkowy': voucherImage200,
  'Voucher premium': voucherImage500,
}

const getProductImage = (product) =>
  product.category === 'Vouchery'
    ? (voucherImagesByName[product.name] ?? voucherImage200)
    : productImage

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('Wszystkie')

  const visibleProducts = useMemo(() => {
    if (activeCategory === 'Wszystkie') return shopProducts

    return shopProducts.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  const featuredProducts = shopProducts.filter((product) => product.featured)

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Sklep online | Biały Lotos</title>
        <meta
          name="description"
          content="Sklep online Biały Lotos: vouchery prezentowe, pielęgnacja po PMU, produkty po laserze i pakiety zabiegowe w Ciechanowie."
        />
      </Head>
      <Nav />
      <main className="font-poppins mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <header className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Sklep online
            </p>
            <h1 className="font-dmserif text-5xl font-normal leading-tight text-neutral-900 sm:text-6xl">
              Sklep Biały Lotos
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-neutral-500">
              Vouchery prezentowe, pielęgnacja po zabiegach i pakiety dobierane
              do potrzeb skóry. To pierwsza wersja sklepu: zamówienie lub
              rezerwację produktu potwierdzamy indywidualnie przez kontakt z
              salonem.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                href="/kontakt"
                className="inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
              >
                Zamów przez kontakt
              </Link>
              <Link
                href="/cennik"
                className="inline-flex border-b border-stone-300 pb-1 text-sm font-medium uppercase tracking-[0.16em] text-neutral-500"
              >
                Zobacz cennik zabiegów
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_24px_60px_rgba(15,23,42,0.07)]">
            <Image
              src={horizontalImage}
              alt="Sklep online Biały Lotos"
              className="aspect-[4/3] h-full w-full object-cover"
              priority
            />
          </div>
        </header>

        <section className="mt-12 border-y border-stone-200 py-6">
          <div className="flex flex-wrap gap-3">
            {['Wszystkie', ...shopCategories].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border-b pb-1 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                  activeCategory === category
                    ? 'border-gold text-gold'
                    : 'border-stone-200 text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article
                key={product.name}
                className="flex flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
              >
                <div className="relative">
                  <Image
                    src={getProductImage(product)}
                    alt={product.name}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 bg-white/88 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-gold backdrop-blur">
                    {product.badge}
                  </span>
                  {product.comingSoon && (
                    <span className="absolute right-4 top-4 bg-neutral-900/85 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white backdrop-blur">
                      Wkrótce
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
                    {product.category}
                  </p>
                  <h2 className="mt-3 font-dmserif text-3xl font-normal leading-tight text-neutral-900">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-gold">
                    {product.price}
                  </p>
                  {product.comingSoon && (
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                      Produkt dostępny wkrótce
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-7 text-neutral-500">
                    {product.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-neutral-500">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  {product.comingSoon ? (
                    <span className="mt-6 inline-flex w-fit border-b border-stone-300 pb-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                      Wkrótce
                    </span>
                  ) : (
                    <Link
                      href={`/kontakt?produkt=${encodeURIComponent(product.name)}`}
                      className="mt-6 inline-flex w-fit border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold"
                    >
                      Zamów
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-lg border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                Polecane po zabiegach
              </p>
              <h2 className="mt-3 font-dmserif text-3xl font-normal text-neutral-900">
                Produkty dobierane do skóry i planu zabiegowego
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                Najlepszy wybór zależy od zabiegu, reakcji skóry i pielęgnacji
                domowej. Jeśli nie masz pewności, napisz do nas przed zakupem.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="inline-flex w-fit border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold"
            >
              Zapytaj o dobór
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredProducts.slice(0, 3).map((product) => (
              <div
                key={product.name}
                className="border-t border-stone-200 pt-4"
              >
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                  {product.category}
                </p>
                <h3 className="mt-2 font-dmserif text-2xl font-normal text-neutral-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            [
              'Jak zamówić produkt?',
              'Kliknij „Zamów” przy produkcie i napisz do salonu. Potwierdzimy dostępność, formę odbioru i szczegóły płatności.',
            ],
            [
              'Czy można odebrać w salonie?',
              'Tak, pierwsza wersja sklepu zakłada indywidualne potwierdzenie i odbiór lub ustalenie szczegółów bezpośrednio z salonem.',
            ],
            [
              'Czy vouchery są personalizowane?',
              'Tak, wartość i przeznaczenie vouchera można dobrać do okazji oraz wybranego zakresu zabiegów.',
            ],
            [
              'Czy produkty są dobrane do zabiegu?',
              'Tak, pielęgnację po PMU, laserze lub depilacji najlepiej dobrać po konsultacji i ocenie potrzeb skóry.',
            ],
          ].map(([question, answer]) => (
            <div
              key={question}
              className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
            >
              <h2 className="font-dmserif text-2xl font-normal text-neutral-900">
                {question}
              </h2>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {answer}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default ShopPage
