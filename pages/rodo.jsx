import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Nav } from '../src/components/Nav'

const sections = [
  {
    title: 'Administrator danych',
    content: [
      'Administratorem danych osobowych jest Biały Lotos w Ciechanowie, dalej jako Salon.',
      'Dane rejestrowe, adres salonu, telefon i adres e-mail powinny zostać uzupełnione po potwierdzeniu aktualnych danych firmowych.',
    ],
  },
  {
    title: 'Jakie dane możemy przetwarzać?',
    list: [
      'imię i nazwisko',
      'numer telefonu lub adres e-mail',
      'informacje przekazane podczas kontaktu lub rezerwacji wizyty',
      'informacje potrzebne do oceny przeciwwskazań i bezpiecznego wykonania zabiegu',
      'dane techniczne związane z korzystaniem ze strony, jeżeli są niezbędne do jej działania',
    ],
  },
  {
    title: 'Cele i podstawy przetwarzania',
    list: [
      'kontakt z klientką i obsługa zapytań: prawnie uzasadniony interes administratora',
      'rezerwacja i realizacja wizyty: podjęcie działań przed zawarciem umowy lub wykonanie umowy',
      'prowadzenie dokumentacji zabiegowej i bezpieczeństwo zabiegu: obowiązek prawny, uzasadniony interes lub zgoda, zależnie od rodzaju danych',
      'obsługa rozliczeń: obowiązki księgowe i podatkowe',
      'dochodzenie lub obrona roszczeń: prawnie uzasadniony interes administratora',
      'wyświetlenie mapy Google: zgoda użytkownika na załadowanie treści zewnętrznej',
    ],
  },
  {
    title: 'Jak długo przechowujemy dane?',
    content: [
      'Dane przechowujemy przez okres potrzebny do realizacji celu, w którym zostały zebrane, a następnie przez czas wymagany przepisami prawa lub okres przedawnienia roszczeń.',
      'Dane przetwarzane na podstawie zgody przetwarzamy do momentu jej wycofania, chyba że istnieje inna podstawa prawna dalszego przetwarzania.',
    ],
  },
  {
    title: 'Odbiorcy danych',
    content: [
      'Dane mogą być przekazywane podmiotom wspierającym Salon technicznie i organizacyjnie, takim jak dostawcy hostingu, poczty e-mail, systemów rezerwacji, księgowości, usług IT oraz narzędzi komunikacji.',
      'Rezerwacja online może prowadzić do zewnętrznego serwisu Booksy, który przetwarza dane zgodnie z własnymi zasadami prywatności.',
    ],
  },
  {
    title: 'Twoje prawa',
    list: [
      'prawo dostępu do danych',
      'prawo sprostowania danych',
      'prawo usunięcia danych',
      'prawo ograniczenia przetwarzania',
      'prawo przenoszenia danych',
      'prawo sprzeciwu wobec przetwarzania',
      'prawo wycofania zgody w dowolnym momencie',
      'prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych',
    ],
  },
  {
    title: 'Pliki cookies i treści zewnętrzne',
    content: [
      'Strona używa wyłącznie ustawień niezbędnych do działania serwisu oraz zapamiętania wyboru prywatności w przeglądarce użytkownika.',
      'Mapa Google nie ładuje się automatycznie. Zostanie wyświetlona dopiero po kliknięciu zgody na załadowanie mapy lub po akceptacji w banerze prywatności.',
      'Linki do Booksy i Google mogą prowadzić do zewnętrznych stron, które stosują własne zasady prywatności i cookies.',
    ],
  },
  {
    title: 'Dobrowolność podania danych',
    content: [
      'Podanie danych jest dobrowolne, ale może być potrzebne do kontaktu, rezerwacji wizyty, wykonania zabiegu lub spełnienia obowiązków prawnych.',
    ],
  },
]

const RodoPage = () => (
  <div className="min-h-screen bg-white">
    <Head>
      <title>RODO i polityka prywatności | Biały Lotos</title>
      <meta
        name="description"
        content="Informacje RODO i polityka prywatności salonu Biały Lotos w Ciechanowie: administrator, cele przetwarzania, prawa klientek, cookies i mapa Google."
      />
    </Head>
    <Nav />
    <main className="font-poppins mx-auto max-w-5xl px-5 py-10 sm:px-6">
      <header className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
          RODO
        </p>
        <h1 className="font-dmserif text-4xl font-normal leading-tight text-neutral-900 sm:text-5xl">
          Polityka prywatności i ochrona danych
        </h1>
        <p className="text-sm leading-7 text-neutral-500">
          Poniższe informacje wyjaśniają, jak Salon może przetwarzać dane
          osobowe klientek i użytkowników strony. To praktyczny szablon
          informacyjny, który warto uzupełnić o pełne dane rejestrowe
          administratora.
        </p>
      </header>

      <div className="mt-10 space-y-5">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-lg border border-stone-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
          >
            <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
              {section.title}
            </h2>
            {section.content ? (
              <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-500">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {section.list ? (
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-neutral-500 md:grid-cols-2">
                {section.list.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 border-b border-stone-100 pb-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <section className="mt-8 rounded-lg border border-stone-200 bg-white p-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
        <h2 className="font-dmserif text-3xl font-normal text-neutral-900">
          Kontakt w sprawach danych
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-500">
          Aby skorzystać z praw dotyczących danych osobowych, skontaktuj się z
          Salonem przez stronę kontaktową lub kanał, którym umawiana była
          wizyta.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex border-b border-gold pb-1 text-sm font-medium uppercase tracking-[0.16em] text-gold"
        >
          Kontakt
        </Link>
      </section>
    </main>
  </div>
)

export default RodoPage
