import Head from 'next/head'
import React, { useState } from 'react'
import { Nav } from '../src/components/Nav'
import { priceGroups } from '../src/data/cennik'

const sectionClass =
  'rounded-lg border border-stone-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]'
const headerGridClass =
  'hidden grid-cols-[minmax(0,2fr)_minmax(74px,1fr)_minmax(64px,1fr)] gap-4 sm:grid'
const rowGridClass =
  'grid grid-cols-1 gap-1 bg-white px-4 py-4 sm:grid-cols-[minmax(0,2fr)_minmax(74px,1fr)_minmax(64px,1fr)] sm:gap-4'
const headerClass =
  'rounded-lg border border-stone-200 bg-white px-4 py-3 text-xs font-medium uppercase tracking-[0.14em] text-neutral-500'
const rowsClass =
  'mt-3 divide-y divide-stone-100 text-sm leading-6 text-neutral-600'
const mobileLabelClass =
  'mr-2 text-[0.68rem] font-medium uppercase tracking-[0.14em] text-neutral-400 sm:hidden'

const getSectionId = (groupTitle, sectionTitle) =>
  `${groupTitle}-${sectionTitle}`

const PriceSection = ({ title, items, notes, isOpen, onToggle }) => (
  <section className={sectionClass}>
    <button
      type="button"
      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <span>
        <span className="block font-dmserif text-2xl font-normal text-neutral-900">
          {title}
        </span>
        <span className="mt-1 block text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
          {items.length} {items.length === 1 ? 'usługa' : 'usług'}
        </span>
      </span>
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-stone-200 text-lg leading-none text-gold"
        aria-hidden="true"
      >
        {isOpen ? '-' : '+'}
      </span>
    </button>

    {isOpen && (
      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <div className={`${headerGridClass} ${headerClass}`}>
          <span>Usługa</span>
          <span>Cena</span>
          <span>Czas</span>
        </div>
        <div className={rowsClass}>
          {items.map(([service, price, time]) => (
            <div key={`${service}-${price}-${time}`} className={rowGridClass}>
              <span className="min-w-0 text-neutral-700">{service}</span>
              <span className="text-neutral-500">
                <span className={mobileLabelClass}>Cena</span>
                {price}
              </span>
              <span className="text-neutral-500">
                <span className={mobileLabelClass}>Czas</span>
                {time}
              </span>
            </div>
          ))}
        </div>
        {notes?.length > 0 && (
          <div className="mt-4 space-y-1 border-t border-stone-100 pt-4 text-sm leading-6 text-neutral-500">
            {notes.map((note) => (
              <p key={note} className="text-neutral-500">
                {note}
              </p>
            ))}
          </div>
        )}
      </div>
    )}
  </section>
)

const PriceGroup = ({ title, sections, openSections, onToggleSection }) => (
  <section className="space-y-5">
    <div className="border-b border-stone-200 pb-3 pt-4">
      <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
        {title}
      </h2>
    </div>
    <div className="space-y-6">
      {sections.map((section) => {
        const sectionId = getSectionId(title, section.title)

        return (
          <PriceSection
            key={section.title}
            {...section}
            isOpen={openSections.includes(sectionId)}
            onToggle={() => onToggleSection(sectionId)}
          />
        )
      })}
    </div>
  </section>
)

const PriceListPage = () => {
  const [openSections, setOpenSections] = useState([
    getSectionId('PMU', 'Makijaż permanentny'),
  ])

  const toggleSection = (sectionId) => {
    setOpenSections((currentSections) =>
      currentSections.includes(sectionId)
        ? currentSections.filter(
          (currentSection) => currentSection !== sectionId
        )
        : [...currentSections, sectionId]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Cennik | Biały Lotos</title>
        <meta
          name="description"
          content="Cennik usług salonu Biały Lotos: kosmetyka, brwi i rzęsy, laser, przekłuwanie oraz makijaż permanentny."
        />
      </Head>
      <Nav />
      <main className="font-poppins text-neutral-700 px-5 py-10 max-w-6xl mx-auto space-y-10 sm:px-6">
        <h1 className="font-dmserif text-4xl font-normal text-center uppercase tracking-[0.12em] text-gold">
          Cennik Biały Lotos
        </h1>

        {priceGroups.map((group) => (
          <PriceGroup
            key={group.title}
            {...group}
            openSections={openSections}
            onToggleSection={toggleSection}
          />
        ))}
      </main>
    </div>
  )
}

export default PriceListPage
