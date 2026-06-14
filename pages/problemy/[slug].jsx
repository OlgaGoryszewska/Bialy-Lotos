import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../../src/components/Nav'
import { getProblemBySlug, problems } from '../../src/data/problems'
import { servicePages } from '../../src/data/services'
import portraitImage from '../../src/assets/img/faceTwo.png'

const getTreatmentsForProblem = (problem) =>
  problem.treatmentSlugs
    .map((slug) => servicePages.find((service) => service.slug === slug))
    .filter(Boolean)

const ProblemPage = ({ problem, treatments }) => (
  <div className="min-h-screen bg-white">
    <Head>
      <title>{problem.title} Ciechanów | Biały Lotos</title>
      <meta name="description" content={problem.description} />
    </Head>
    <Nav />
    <main className="font-poppins max-w-6xl mx-auto px-5 py-10 space-y-10 sm:px-6">
      <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Problem
          </p>
          <h1 className="font-dmserif text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl">
            {problem.title} Ciechanów
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-neutral-500">
            {problem.description}
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <Image
            src={portraitImage}
            alt={`${problem.title} - zabiegi Biały Lotos Ciechanów`}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
        <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
          Jak rozpoznać problem?
        </h2>
        <ul className="mt-5 grid gap-3 text-sm leading-7 text-neutral-500 md:grid-cols-2">
          {problem.symptoms.map((symptom) => (
            <li key={symptom} className="border-b border-stone-100 pb-3">
              {symptom}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
            Polecane zabiegi
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/${treatment.slug}`}
              className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition-colors hover:border-gold"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                {treatment.category}
              </p>
              <h3 className="mt-3 font-dmserif text-3xl font-normal text-neutral-900">
                {treatment.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">
                {treatment.description}
              </p>
              <span className="mt-5 inline-flex border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold">
                Przejdź do zabiegu
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  </div>
)

export const getStaticPaths = () => ({
  paths: problems.map((problem) => ({
    params: { slug: problem.slug },
  })),
  fallback: false,
})

export const getStaticProps = ({ params }) => {
  const problem = getProblemBySlug(params.slug)

  return {
    props: {
      problem,
      treatments: getTreatmentsForProblem(problem),
    },
  }
}

export default ProblemPage
