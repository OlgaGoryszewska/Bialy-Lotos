import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../src/components/Nav'
import { problems } from '../src/data/problems'
import faceImage from '../src/assets/img/faceNoiceHorisontal.jpg'

const ProblemsPage = () => (
  <div className="min-h-screen bg-white">
    <Head>
      <title>Problemy skóry i urody | Biały Lotos</title>
      <meta
        name="description"
        content="Rozwiązania dla zmarszczek, utraty jędrności, przebarwień, blizn potrądzikowych, nieudanego PMU i nadmiernego owłosienia w Ciechanowie."
      />
    </Head>
    <Nav />
    <main className="font-poppins max-w-6xl mx-auto px-5 py-10 space-y-10 sm:px-6">
      <section className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Problemy
          </p>
          <h1 className="font-dmserif text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl">
            Dobierz zabieg do problemu
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-neutral-500">
            Jeśli nie wiesz, od którego zabiegu zacząć, wybierz problem, który
            najbardziej Cię dotyczy. Każda strona prowadzi do zabiegów, które
            mogą pomóc w danym obszarze.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <Image
            src={faceImage}
            alt="Problemy skóry i urody Biały Lotos Ciechanów"
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {problems.map((problem) => (
          <Link
            key={problem.slug}
            href={`/problemy/${problem.slug}`}
            className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-colors hover:border-gold"
          >
            <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
              {problem.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-500">
              {problem.description}
            </p>
            <span className="mt-5 inline-flex border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold">
              Zobacz rozwiązania
            </span>
          </Link>
        ))}
      </section>
    </main>
  </div>
)

export default ProblemsPage
