import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { effectGalleries } from '../data/effects'
import { getGalleryImagesBySlug } from '../data/effectImages'
import { shopProducts } from '../data/products'
import { Nav } from '../components/Nav'
import { GoogleMapEmbed } from '../components/PrivacyConsent'
import Face from '../assets/img/faceTwo.png'
import OwnerImage from '../assets/img/SylwiaJola.jpg'
import co2Image from '../assets/img/co2_01.png'
import hifuImage from '../assets/img/hifu_01.png'
import laserDepilationImage from '../assets/img/laser_dep_01.png'
import pmuBrowsImage from '../assets/img/pmu_brwi_01.jpg'
import pmuRemovalImage from '../assets/img/pmu_rem_01.png'
import productImage from '../assets/img/product_01.png'
import voucherImage200 from '../assets/img/voucher_200zl.png'
import voucherImage500 from '../assets/img/voucher_500zl.png'

const bookingUrl =
  'https://booksy.com/pl-pl/142271_salon-pieknosci-bialy-lotos_salon-kosmetyczny_4495_ciechanow#ba_s=seo'

const heroPoints = [
  'Naturalne efekty.',
  'Indywidualne podejście.',
  'Bezpieczne zabiegi.',
]

const reasons = [
  'Naturalne efekty',
  'Indywidualny dobór zabiegów',
  'Nowoczesne technologie',
  'Setki zadowolonych klientek',
  'Bezpieczeństwo i higiena',
  'Profesjonalne doradztwo',
]

const specializations = [
  {
    title: 'Makijaż Permanentny',
    description: 'Brwi, usta oraz kreski podkreślające naturalne piękno.',
    href: '/brwi-permanentne-ciechanow',
    image: pmuBrowsImage,
  },
  {
    title: 'HIFU',
    description: 'Niechirurgiczny lifting twarzy i poprawa owalu.',
    href: '/hifu-ciechanow',
    image: hifuImage,
  },
  {
    title: 'Laser Frakcyjny CO2',
    description: 'Redukcja zmarszczek, blizn i przebarwień.',
    href: '/laser-frakcyjny-co2-ciechanow',
    image: co2Image,
  },
  {
    title: 'Depilacja Laserowa',
    description: 'Gładka skóra bez codziennego golenia.',
    href: '/depilacja-laserowa-ciechanow',
    image: laserDepilationImage,
  },
  {
    title: 'Usuwanie Makijażu Permanentnego',
    description: 'Bezpieczne usuwanie niechcianego pigmentu.',
    href: '/usuwanie-makijazu-permanentnego-ciechanow',
    image: pmuRemovalImage,
  },
]

const problemBlocks = [
  {
    title: 'Nie masz czasu na codzienny makijaż?',
    href: '/problemy/nieudany-pmu-ciechanow',
    recommendations: [
      'Brwi permanentne',
      'Usta permanentne',
      'Kreski permanentne',
    ],
  },
  {
    title: 'Chcesz wyglądać młodziej?',
    href: '/problemy/zmarszczki-ciechanow',
    recommendations: ['HIFU', 'Laser CO2', 'Mezoterapia mikroigłowa'],
  },
  {
    title: 'Masz przebarwienia lub blizny?',
    href: '/problemy/przebarwienia-ciechanow',
    recommendations: ['Laser CO2', 'Peeling węglowy', 'Resurfacing'],
  },
  {
    title: 'Chcesz pozbyć się owłosienia?',
    href: '/problemy/nadmierne-owlosienie-ciechanow',
    recommendations: ['Depilacja laserowa'],
  },
  {
    title: 'Nie podoba Ci się stary makijaż permanentny?',
    href: '/usuwanie-makijazu-permanentnego-ciechanow',
    recommendations: ['Laserowe usuwanie pigmentacji'],
  },
]

const effectPreviewCategories = [
  'Brwi Permanentne',
  'Usta Permanentne',
  'Kreski',
  'Usuwanie PMU',
  'Rzęsy',
]

const effectPreviewSlugs = [
  'brwi-permanentne',
  'usta-permanentne',
  'kreski',
  'usuwanie-pmu',
  'przedluzanie-rzes',
]

const effectPreview = effectPreviewSlugs.flatMap((slug) => {
  const gallery = effectGalleries.find((item) => item.slug === slug)
  const images = getGalleryImagesBySlug(slug).slice(0, 2)

  if (!gallery) {
    return []
  }

  return images.map((image, index) => ({
    category: gallery.title,
    effect: gallery.effects[index % gallery.effects.length],
    href: gallery.serviceSlugs[0] ? `/${gallery.serviceSlugs[0]}` : '/galeria',
    image,
  }))
})

const fallbackEffectPreview = effectGalleries
  .filter((gallery) =>
    ['brwi-permanentne', 'usta-permanentne', 'hifu', 'laser-co2'].includes(
      gallery.slug
    )
  )
  .flatMap((gallery) =>
    gallery.effects.slice(0, 2).map((effect) => ({
      category: gallery.title,
      effect,
      href: `/${gallery.serviceSlugs[0]}`,
      image: null,
    }))
  )

const visibleEffectPreview =
  effectPreview.length > 0 ? effectPreview : fallbackEffectPreview

const reviews = [
  'Najpiękniejsze brwi jakie miałam.',
  'Efekt HIFU przeszedł moje oczekiwania.',
  'Profesjonalna obsługa i świetna atmosfera.',
]

const faqItems = [
  [
    'Czy zabiegi są bolesne?',
    'Odczucia zależą od rodzaju zabiegu i indywidualnej wrażliwości. Przed wizytą omawiamy komfort oraz możliwe reakcje skóry.',
  ],
  [
    'Jak przygotować się do wizyty?',
    'Najczęściej warto unikać opalania, mocnych peelingów i poinformować salon o lekach, chorobach oraz wcześniejszych zabiegach.',
  ],
  [
    'Czy potrzebna jest konsultacja?',
    'Tak, konsultacja pomaga dobrać metodę, sprawdzić przeciwwskazania i ustalić realny efekt.',
  ],
  [
    'Jak długo utrzymują się efekty?',
    'To zależy od zabiegu, skóry, pielęgnacji i stylu życia. Przy PMU oraz zabiegach technologicznych omawiamy to indywidualnie.',
  ],
  [
    'Jakie są przeciwwskazania?',
    'Do najważniejszych należą aktywne infekcje, ciąża, świeża opalenizna przy laserach i nieuregulowane choroby przewlekłe.',
  ],
]

const blogPosts = [
  {
    title: 'Ile kosztują brwi permanentne?',
    excerpt:
      'Od czego zależy cena pigmentacji i kiedy potrzebna jest korekta po wygojeniu.',
  },
  {
    title: 'HIFU czy laser CO2?',
    excerpt:
      'Kiedy lepiej wybrać lifting ultradźwiękowy, a kiedy przebudowę skóry laserem.',
  },
  {
    title: 'Jak wygląda gojenie ust permanentnych?',
    excerpt:
      'Najważniejsze etapy po pigmentacji ust i zasady spokojnej pielęgnacji.',
  },
]

const shopPreview = shopProducts
  .filter((product) => product.featured)
  .slice(0, 3)

const voucherImagesByName = {
  'Voucher podarunkowy': voucherImage200,
  'Voucher premium': voucherImage500,
}

const getShopPreviewImage = (product) =>
  product.category === 'Vouchery'
    ? (voucherImagesByName[product.name] ?? voucherImage200)
    : productImage

const SectionHeader = ({ eyebrow, title, description, align = 'center' }) => (
  <header
    className={`space-y-3 ${align === 'left' ? 'text-left' : 'mx-auto max-w-3xl text-center'}`}
  >
    {eyebrow ? (
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="font-dmserif text-3xl font-normal leading-tight text-neutral-900 sm:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="text-sm leading-7 text-neutral-500">{description}</p>
    ) : null}
  </header>
)

const GoldLink = ({ href, children, external = false }) => {
  const className =
    'inline-flex w-fit border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-colors hover:text-neutral-900'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Head>
        <title>Biały Lotos Ciechanów | PMU, HIFU, laser CO2</title>
        <meta
          name="description"
          content="Biały Lotos Ciechanów: makijaż permanentny, kosmetologia estetyczna, HIFU, laser CO2, depilacja laserowa i naturalne efekty przed i po."
        />
      </Head>
      <Nav />

      <main className="font-poppins">
        <section className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-14">
          <div className="space-y-7">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">
              Biały Lotos Ciechanów
            </p>
            <div className="space-y-5">
              <h1 className="font-dmserif text-5xl font-normal leading-[1.02] text-neutral-900 sm:text-6xl lg:text-7xl">
                Piękno, które podkreśla Ciebie
              </h1>
              <p className="max-w-2xl text-base leading-8 text-neutral-500">
                Makijaż permanentny, kosmetologia estetyczna i nowoczesne
                technologie laserowe w Ciechanowie.
              </p>
            </div>
            <ul className="grid gap-3 text-sm leading-7 text-neutral-500 sm:grid-cols-3">
              {heroPoints.map((point) => (
                <li key={point} className="border-t border-stone-200 pt-3">
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-5">
              <GoldLink href={bookingUrl} external>
                Umów wizytę
              </GoldLink>
              <GoldLink href="/galeria">Zobacz efekty</GoldLink>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.08)]">
            <Image
              src={Face}
              alt="Klientka po zabiegu brwi permanentnych w Białym Lotosie"
              className="absolute inset-0 h-full w-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <SectionHeader
              eyebrow="Dlaczego klientki wybierają Biały Lotos?"
              title="Ponad piękno. Prawdziwa pewność siebie."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-4 border-b border-stone-200 bg-white py-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 text-sm text-gold">
                    ✓
                  </span>
                  <span className="text-sm leading-7 text-neutral-500">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <SectionHeader eyebrow="Nasze specjalizacje" title="Zabiegi" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {specializations.map((specialization) => (
                <article
                  key={specialization.title}
                  className="flex min-h-[360px] flex-col overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                >
                  <Image
                    src={specialization.image}
                    alt={specialization.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div className="space-y-4">
                      <h3 className="font-dmserif text-2xl font-normal leading-tight text-neutral-900">
                        {specialization.title}
                      </h3>
                      <p className="text-sm leading-7 text-neutral-500">
                        {specialization.description}
                      </p>
                    </div>
                    <GoldLink href={specialization.href}>
                      Dowiedz się więcej
                    </GoldLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                align="left"
                eyebrow="Sklep online"
                title="Vouchery i pielęgnacja po zabiegach"
                description="Pierwsza wersja sklepu Biały Lotos: vouchery prezentowe, produkty po PMU i pielęgnacja po zabiegach laserowych zamawiane przez kontakt z salonem."
              />
              <GoldLink href="/sklep">Przejdź do sklepu</GoldLink>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {shopPreview.map((product) => (
                <Link
                  key={product.name}
                  href="/sklep"
                  className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <Image
                      src={getShopPreviewImage(product)}
                      alt={product.name}
                      className="aspect-[4/3] w-full object-cover"
                    />
                    {product.comingSoon && (
                      <span className="absolute right-4 top-4 bg-neutral-900/85 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white backdrop-blur">
                        Wkrótce
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                      {product.category}
                    </p>
                    <h3 className="mt-3 font-dmserif text-2xl font-normal leading-tight text-neutral-900">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-gold">
                      {product.price}
                    </p>
                    {product.comingSoon && (
                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                        Wkrótce
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-7 text-neutral-500">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <SectionHeader
              eyebrow="Rozwiązujemy Twoje problemy"
              title="Dobierz zabieg do tego, co naprawdę Ci przeszkadza"
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {problemBlocks.map((problem) => (
                <Link
                  key={problem.title}
                  href={problem.href}
                  className="rounded-lg border border-stone-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1"
                >
                  <h3 className="font-dmserif text-2xl font-normal leading-tight text-neutral-900">
                    {problem.title}
                  </h3>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    Polecamy
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-neutral-500">
                    {problem.recommendations.map((recommendation) => (
                      <li key={recommendation}>{recommendation}</li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                align="left"
                eyebrow="Efekty przed i po"
                title="Naturalna zmiana, widoczny efekt"
                description="Kategorie: brwi permanentne, usta permanentne, HIFU, laser CO2 i usuwanie PMU."
              />
              <GoldLink href="/galeria">Zobacz wszystkie efekty</GoldLink>
            </div>
            <div className="flex flex-wrap gap-3">
              {effectPreviewCategories.map((category) => (
                <span
                  key={category}
                  className="border-b border-stone-200 pb-1 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {visibleEffectPreview.map((item) => (
                <Link
                  key={`${item.category}-${item.effect}`}
                  href={item.href}
                  className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                >
                  {item.image ? (
                    <Image
                      src={item.image.src}
                      alt={`${item.category}: ${item.image.name}`}
                      className="aspect-[4/5] w-full object-cover"
                    />
                  ) : null}
                  <div className="min-h-[152px] p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">
                      {item.category}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-neutral-500">
                      {item.effect}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <SectionHeader
              eyebrow="Opinie klientek"
              title="Zaufanie widać w efektach"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review}
                  className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-sm tracking-[0.22em] text-gold">★★★★★</p>
                  <p className="mt-5 font-dmserif text-2xl font-normal leading-snug text-neutral-900">
                    „{review}”
                  </p>
                </article>
              ))}
            </div>
            <div className="text-center">
              <GoldLink href={bookingUrl} external>
                Zobacz więcej opinii
              </GoldLink>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_24px_60px_rgba(15,23,42,0.07)]">
              <Image
                src={OwnerImage}
                alt="Właścicielka salonu Biały Lotos"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <SectionHeader
                align="left"
                eyebrow="Poznaj Biały Lotos"
                title="Miejsce stworzone z myślą o spokojnym, świadomym pięknie"
              />
              <div className="space-y-4 text-sm leading-7 text-neutral-500">
                <p>
                  Biały Lotos powstał z potrzeby tworzenia efektów, które nie
                  zmieniają twarzy, ale wydobywają jej naturalną harmonię. To
                  salon dla klientek, które chcą czuć się zadbane, pewne siebie
                  i dobrze zaopiekowane od pierwszej konsultacji do zaleceń
                  pozabiegowych.
                </p>
                <p>
                  Łączymy makijaż permanentny, kosmetologię estetyczną i
                  nowoczesne technologie laserowe, ponieważ każda skóra i każda
                  historia wymaga innego planu. Ważne są dla nas bezpieczeństwo,
                  higiena, spokojna komunikacja oraz efekt dopasowany do urody,
                  wieku i codzienności klientki.
                </p>
              </div>
              <GoldLink href="/o-nas">Poznaj nas</GoldLink>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl space-y-10">
            <SectionHeader
              eyebrow="Najczęściej zadawane pytania"
              title="Przed wizytą"
            />
            <div className="divide-y divide-stone-200">
              {faqItems.map(([question, answer]) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-dmserif text-2xl font-normal text-neutral-900">
                    {question}
                    <span className="text-lg text-gold transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-neutral-500">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl space-y-10">
            <SectionHeader eyebrow="Blog i porady" title="Ostatnie artykuły" />
            <div className="grid gap-5 md:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.title}
                  href="/blog"
                  className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-transform hover:-translate-y-1"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    Poradnik
                  </p>
                  <h3 className="mt-3 font-dmserif text-2xl font-normal leading-tight text-neutral-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-500">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-200 bg-white px-5 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <SectionHeader
                align="left"
                eyebrow="Umów wizytę"
                title="Nie wiesz, który zabieg będzie najlepszy?"
                description="Umów konsultację, a pomożemy dobrać rozwiązanie dopasowane do Twoich potrzeb."
              />
              <div className="flex flex-wrap gap-5">
                <GoldLink href={bookingUrl} external>
                  Booksy
                </GoldLink>
                <GoldLink href="/kontakt">Zadzwoń</GoldLink>
                <GoldLink href="/kontakt">Napisz wiadomość</GoldLink>
              </div>
              <div className="grid gap-5 text-sm leading-7 text-neutral-500 sm:grid-cols-2">
                <div className="border-t border-stone-200 pt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    Dane kontaktowe
                  </p>
                  <p className="mt-3">Biały Lotos, Ciechanów</p>
                  <Link href="/kontakt" className="text-gold">
                    Formularz i rezerwacja
                  </Link>
                </div>
                <div className="border-t border-stone-200 pt-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    Godziny otwarcia
                  </p>
                  <p className="mt-3">
                    Aktualne terminy i dostępność sprawdzisz w rezerwacji
                    online.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-stone-200 shadow-[0_24px_60px_rgba(15,23,42,0.07)]">
              <GoogleMapEmbed />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage
