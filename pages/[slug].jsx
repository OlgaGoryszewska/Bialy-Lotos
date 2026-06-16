import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../src/components/Nav'
import { priceGroups } from '../src/data/cennik'
import { getEffectGalleryByServiceSlug } from '../src/data/effects'
import { getServiceImagesBySlug } from '../src/data/effectImages'
import { getServiceBySlug, servicePages } from '../src/data/services'
import faceImage from '../src/assets/img/faceNoiceHorisontal.jpg'
import portraitImage from '../src/assets/img/faceTwo.png'
import salonImage from '../src/assets/img/sylwia.jpg'
import beautyImage from '../src/assets/img/faceNoice.jpg'
import co2Image from '../src/assets/img/co2_01.png'
import hifuImage from '../src/assets/img/hifu_01.png'
import laserDepilationImage from '../src/assets/img/laser_dep_01.png'
import microImage from '../src/assets/img/micro_01.png'
import peelingImage from '../src/assets/img/peeling_01.png'

const bookingUrl =
  'https://booksy.com/pl-pl/142271_salon-pieknosci-bialy-lotos_salon-kosmetyczny_4495_ciechanow#ba_s=seo'
const instagramUrl = 'https://www.instagram.com/_bialylotos_/'

const galleryImages = [faceImage, portraitImage, salonImage, beautyImage]

const heroImagesBySlug = {
  'depilacja-laserowa-ciechanow': laserDepilationImage,
  'hifu-ciechanow': hifuImage,
  'laser-frakcyjny-co2-ciechanow': co2Image,
  'mezoterapia-mikroiglowa-ciechanow': microImage,
  'peeling-weglowy-ciechanow': peelingImage,
}

const sectionClass =
  'rounded-lg border border-stone-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]'

const effectsIntro =
  'Zobacz przykładowe efekty i charakter pracy, aby łatwiej wybrać zabieg dopasowany do Twoich oczekiwań.'

const serviceSlugsWithoutEffects = []

const defaultProblems = [
  'chcesz poprawić wygląd bez codziennego pośpiechu przy lustrze',
  'zależy Ci na estetycznym, zadbanym i naturalnym efekcie',
  'masz nierówny koloryt, asymetrię lub obszar wymagający dopracowania',
  'szukasz zabiegu wykonywanego spokojnie i z indywidualnym podejściem',
  'potrzebujesz planu dopasowanego do skóry, urody i oczekiwanego rezultatu',
]

const steps = [
  'Krótka konsultacja i omówienie celu zabiegu.',
  'Ocena skóry, przeciwwskazań oraz dobór odpowiedniej metody.',
  'Przygotowanie obszaru zabiegowego i omówienie odczuć podczas procedury.',
  'Wykonanie zabiegu etapami, z kontrolą komfortu i reakcji skóry.',
  'Przekazanie zaleceń pozabiegowych oraz informacji o dalszej pielęgnacji.',
]

const contraindications = [
  { icon: '!', text: 'ciąża i okres karmienia piersią' },
  {
    icon: 'INF',
    text: 'aktywne infekcje, stany zapalne lub świeże uszkodzenia skóry',
  },
  { icon: 'MED', text: 'nieuregulowane choroby przewlekłe' },
  { icon: 'SKIN', text: 'skłonność do bliznowców lub zaburzeń gojenia' },
  { icon: 'UV', text: 'świeża opalenizna w obszarze zabiegowym' },
  {
    icon: 'Rx',
    text: 'przyjmowanie leków lub ziół światłouczulających przy zabiegach laserowych',
  },
  { icon: 'HSV', text: 'aktywna opryszczka przy zabiegach w okolicy ust' },
  { icon: 'AL', text: 'alergia na preparaty używane podczas zabiegu' },
]

const preparation = [
  { icon: 'SPF', text: 'nie opalaj skóry bezpośrednio przed wizytą' },
  {
    icon: 'PEEL',
    text: 'nie wykonuj mocnych peelingów w obszarze zabiegowym kilka dni wcześniej',
  },
  {
    icon: 'INFO',
    text: 'poinformuj salon o lekach, chorobach i wcześniejszych zabiegach',
  },
  {
    icon: 'MAKE',
    text: 'przyjdź bez intensywnego makijażu w obszarze zabiegowym',
  },
  {
    icon: 'TIME',
    text: 'zarezerwuj czas tak, aby po wizycie nie spieszyć się na ważne wydarzenie',
  },
]

const aftercare = [
  {
    icon: 'i',
    text: 'stosuj się do indywidualnych zaleceń przekazanych po zabiegu',
  },
  {
    icon: 'HOT',
    text: 'unikaj sauny, basenu i intensywnego wysiłku przez wskazany czas',
  },
  { icon: 'NO', text: 'nie drażnij ani nie pocieraj obszaru zabiegowego' },
  {
    icon: 'SPF',
    text: 'chroń skórę przed słońcem i używaj wysokiej ochrony SPF',
  },
  {
    icon: 'SKIN',
    text: 'nie przyspieszaj złuszczania ani gojenia skóry domowymi metodami',
  },
]

const faqQuestions = [
  [
    'Czy zabieg boli?',
    'Odczucia zależą od progu bólu i rodzaju zabiegu. Podczas wizyty omawiamy komfort oraz możliwe reakcje skóry.',
  ],
  [
    'Ile trwa zabieg?',
    'Czas zależy od wybranej usługi. Orientacyjne czasy znajdziesz w cenniku na tej stronie.',
  ],
  [
    'Czy potrzebna jest konsultacja?',
    'Tak, konsultacja pomaga dobrać metodę, wykluczyć przeciwwskazania i ustalić realny efekt.',
  ],
  [
    'Kiedy widać efekt?',
    'Część efektów jest widoczna szybko, ale przy wielu zabiegach skóra potrzebuje czasu na regenerację.',
  ],
  [
    'Czy można wrócić od razu do pracy?',
    'W wielu przypadkach tak, jednak przy zabiegach intensywniejszych może wystąpić zaczerwienienie lub tkliwość.',
  ],
  [
    'Jak przygotować się do wizyty?',
    'Najważniejsze jest unikanie opalania, mocnych peelingów i poinformowanie salonu o lekach oraz chorobach.',
  ],
  [
    'Czy zabieg można wykonać latem?',
    'To zależy od zabiegu. Przy procedurach laserowych i złuszczających ochrona przed słońcem jest szczególnie ważna.',
  ],
  [
    'Ile zabiegów potrzeba?',
    'Liczba wizyt zależy od skóry, celu oraz reakcji organizmu. Plan ustalamy indywidualnie.',
  ],
  [
    'Czy są przeciwwskazania?',
    'Tak. Najważniejsze przeciwwskazania opisujemy na stronie, a szczegóły zawsze omawiamy przed zabiegiem.',
  ],
  [
    'Gdzie sprawdzę cenę?',
    'Aktualne ceny znajdują się w sekcji Cennik na tej podstronie oraz na głównej stronie cennika.',
  ],
]

const getPriceSections = (service) =>
  priceGroups
    .flatMap((group) => group.sections)
    .filter((section) => service.priceSectionTitles?.includes(section.title))

const getLongDescription = (service) => [
  `${service.title} w Ciechanowie to zabieg dla osób, które chcą zadbać o wygląd w sposób przemyślany, estetyczny i dopasowany do własnych potrzeb. W Białym Lotosie najważniejszy jest naturalny efekt, spokojna atmosfera oraz indywidualne omówienie oczekiwań przed rozpoczęciem pracy. Dzięki temu zabieg nie jest przypadkowy, ale wynika z rozmowy, analizy skóry lub obszaru zabiegowego oraz dobrania odpowiedniej techniki.`,
  `Podczas konsultacji omawiane są możliwości, przeciwwskazania, pielęgnacja oraz realny rezultat. To szczególnie ważne, ponieważ każda skóra reaguje inaczej, a efekt końcowy zależy od wielu czynników: kondycji skóry, stylu życia, pielęgnacji domowej, wcześniejszych zabiegów i naturalnych predyspozycji. Dobrze zaplanowany zabieg pozwala uniknąć przesady i uzyskać rezultat, który pasuje do urody, wieku oraz codziennych potrzeb klientki.`,
  `${service.description} Zabieg może być częścią większego planu pielęgnacyjnego lub pojedynczą wizytą przed ważnym wydarzeniem. W przypadku procedur wymagających serii lub korekty szczególnie ważne jest zachowanie odpowiednich odstępów oraz stosowanie się do zaleceń po wizycie. To właśnie pielęgnacja pozabiegowa często decyduje o tym, jak długo efekt będzie wyglądał świeżo i harmonijnie.`,
  `Na tej stronie znajdziesz najważniejsze informacje: dla kogo jest zabieg, jak wygląda krok po kroku, jakie są przeciwwskazania, jak przygotować się do wizyty, czego unikać po zabiegu oraz odpowiedzi na najczęstsze pytania. Jeśli nie masz pewności, czy ${service.title.toLocaleLowerCase('pl-PL')} jest odpowiednim wyborem, najlepszym rozwiązaniem będzie konsultacja i dobranie metody bezpośrednio do Twojej skóry oraz oczekiwań.`,
]

const getFallbackEffects = (service) =>
  Array.from(
    { length: 10 },
    (_, index) =>
      `${service.title}: przykładowy opis efektu przed i po ${index + 1}, gotowy do zastąpienia zdjęciem realizacji salonu.`
  )

const GoldIconListItem = ({ icon, children }) => (
  <li className="flex gap-3 border-b border-stone-100 pb-3">
    <span
      className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/10 text-[0.58rem] font-medium uppercase leading-none tracking-[0.04em] text-gold"
      aria-hidden="true"
    >
      {icon}
    </span>
    <span>{children}</span>
  </li>
)

const ServicePage = ({ service }) => {
  const priceSections = getPriceSections(service)
  const effectGallery = getEffectGalleryByServiceSlug(service.slug)
  const effectDescriptions =
    effectGallery?.effects ?? getFallbackEffects(service)
  const serviceGalleryImages = getServiceImagesBySlug(service.slug)
  const heroImage =
    serviceGalleryImages[0]?.src ?? heroImagesBySlug[service.slug] ?? faceImage
  const isSimpleGallery = serviceGalleryImages.length > 0
  const showEffectsSection = !serviceSlugsWithoutEffects.includes(service.slug)
  const visibleEffects = isSimpleGallery
    ? serviceGalleryImages
    : effectDescriptions

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{`${service.title} Ciechanów | Biały Lotos`}</title>
        <meta name="description" content={service.description} />
      </Head>
      <Nav />
      <main className="font-poppins max-w-6xl mx-auto px-5 py-10 space-y-10 sm:px-6">
        <section className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
              {service.category}
            </p>
            <h1 className="font-dmserif text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl">
              {service.title} Ciechanów
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-neutral-500">
              {service.description}
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
            >
              Umów wizytę
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <Image
              src={heroImage}
              alt={`${service.title} w salonie Biały Lotos`}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
            Co to jest?
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-neutral-500">
            {getLongDescription(service).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
            Dla kogo?
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-neutral-500 md:grid-cols-2">
            {[...service.highlights, ...defaultProblems].map((problem) => (
              <li key={problem} className="border-b border-stone-100 pb-3">
                {problem}
              </li>
            ))}
          </ul>
        </section>

        {showEffectsSection && (
          <section className={sectionClass}>
            <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
              Efekty
            </h2>
            <p className="mt-3 text-sm leading-7 text-neutral-500">
              {effectsIntro}
            </p>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold"
            >
              Zobacz więcej efektów na Instagramie
            </a>
            <div
              className={`mt-6 grid gap-5 ${
                isSimpleGallery ? 'md:grid-cols-3' : 'md:grid-cols-2'
              }`}
            >
              {visibleEffects.map((item, index) => {
                if (isSimpleGallery) {
                  const image = item
                  const effect =
                    effectDescriptions[index % effectDescriptions.length]

                  return (
                    <article
                      key={`${service.slug}-${image.name}`}
                      className="overflow-hidden rounded-lg border border-stone-200 bg-white"
                    >
                      <Image
                        src={image.src}
                        alt={`${service.title}: ${image.name}`}
                        className="aspect-[4/5] h-full w-full object-cover"
                      />
                      <div className="min-h-[128px] px-5 py-4">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                          {image.name}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-neutral-500">
                          {effect}
                        </p>
                      </div>
                    </article>
                  )
                }

                const effect = item
                const beforeImage = galleryImages[index % galleryImages.length]
                const afterImage =
                  galleryImages[(index + 1) % galleryImages.length]

                return (
                  <article
                    key={`${service.slug}-effect-${index + 1}`}
                    className="overflow-hidden rounded-lg border border-stone-200 bg-white"
                  >
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <Image
                          src={beforeImage}
                          alt={`${service.title} zdjęcie przed ${index + 1}`}
                          className="aspect-[4/5] h-full w-full object-cover"
                        />
                        <span className="absolute left-3 top-3 bg-white/85 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-neutral-500 backdrop-blur">
                          Przed
                        </span>
                      </div>
                      <div className="relative border-l border-white">
                        <Image
                          src={afterImage}
                          alt={`${service.title} zdjęcie po ${index + 1}`}
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
        )}

        <section className={sectionClass}>
          <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
            Jak wygląda zabieg?
          </h2>
          <ol className="mt-5 space-y-3 text-sm leading-7 text-neutral-500">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-3 border-b border-stone-100 pb-3"
              >
                <span className="text-gold">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={sectionClass}>
          <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
            Przeciwwskazania
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-neutral-500 md:grid-cols-2">
            {contraindications.map(({ icon, text }) => (
              <GoldIconListItem key={text} icon={icon}>
                {text}
              </GoldIconListItem>
            ))}
          </ul>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className={sectionClass}>
            <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
              Przygotowanie do zabiegu
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-500">
              {preparation.map(({ icon, text }) => (
                <GoldIconListItem key={text} icon={icon}>
                  {text}
                </GoldIconListItem>
              ))}
            </ul>
          </div>
          <div className={sectionClass}>
            <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
              Zalecenia pozabiegowe
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-neutral-500">
              {aftercare.map(({ icon, text }) => (
                <GoldIconListItem key={text} icon={icon}>
                  {text}
                </GoldIconListItem>
              ))}
            </ul>
          </div>
        </section>

        <section className={sectionClass}>
          <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
            Cennik
          </h2>
          <div className="mt-5 space-y-6">
            {priceSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  {section.title}
                </h3>
                <div className="mt-3 divide-y divide-stone-100 text-sm leading-6 text-neutral-600">
                  {section.items.map(([name, price, time]) => (
                    <div
                      key={`${section.title}-${name}-${price}-${time}`}
                      className="grid gap-1 py-3 sm:grid-cols-[minmax(0,2fr)_minmax(80px,1fr)_minmax(70px,1fr)] sm:gap-4"
                    >
                      <span>{name}</span>
                      <span className="text-neutral-500">{price}</span>
                      <span className="text-neutral-500">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/cennik"
            className="mt-6 inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
          >
            Pełny cennik
          </Link>
        </section>

        <section className={sectionClass}>
          <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
            FAQ
          </h2>
          <div className="mt-5 divide-y divide-stone-100">
            {faqQuestions.map(([question, answer]) => (
              <div key={question} className="py-4">
                <h3 className="font-dmserif text-xl font-normal text-neutral-900">
                  {question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-neutral-500">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-stone-200 bg-white p-8 text-center shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
            Umów konsultację
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-500">
            Nie wiesz, czy {service.title.toLocaleLowerCase('pl-PL')} będzie
            najlepszym wyborem? Umów konsultację i dobierz zabieg spokojnie, z
            uwzględnieniem potrzeb skóry.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
          >
            Umów wizytę
          </a>
        </section>
      </main>
    </div>
  )
}

export const getStaticPaths = () => ({
  paths: servicePages.map((service) => ({
    params: { slug: service.slug },
  })),
  fallback: false,
})

export const getStaticProps = ({ params }) => ({
  props: {
    service: getServiceBySlug(params.slug),
  },
})

export default ServicePage
