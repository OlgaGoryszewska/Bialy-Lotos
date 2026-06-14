import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../src/components/Nav'
import { serviceCategories } from '../src/data/services'

const BlogPage = () => (
  <div className="min-h-screen bg-white">
    <Head>
      <title>Blog | Biały Lotos</title>
      <meta
        name="description"
        content="Blog Biały Lotos Ciechanów: wiedza o PMU, kosmetologii, depilacji laserowej oraz stylizacji rzęs i brwi."
      />
    </Head>
    <Nav />
    <main className="font-poppins max-w-6xl mx-auto px-5 py-10 space-y-10 sm:px-6">
      <header className="space-y-4 text-center">
        <h1 className="font-dmserif text-4xl font-normal uppercase tracking-[0.12em] text-gold">
          Blog
        </h1>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-neutral-500">
          Przewodniki po zabiegach, przygotowaniu do wizyty i pielęgnacji po
          zabiegu.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {serviceCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Poradnik
            </p>
            <h2 className="mt-3 font-dmserif text-3xl font-normal text-neutral-900">
              {category.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-500">
              {category.description}
            </p>
            <Link
              href="/zabiegi"
              className="mt-5 inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
            >
              Zobacz zabiegi
            </Link>
          </article>
        ))}
      </div>
    </main>
  </div>
)

export default BlogPage
