export const problems = [
  {
    title: 'Zmarszczki',
    slug: 'zmarszczki-ciechanow',
    description:
      'Zmarszczki mogą wynikać z mimiki, utraty nawilżenia, fotostarzenia i spadku jakości skóry. W Białym Lotosie dobieramy zabiegi wspierające wygładzenie, regenerację i poprawę napięcia skóry.',
    symptoms: [
      'drobne linie wokół oczu i ust',
      'utrwalone zmarszczki mimiczne',
      'skóra wyglądająca na zmęczoną',
      'nierówna tekstura skóry',
    ],
    treatmentSlugs: [
      'hifu-ciechanow',
      'laser-frakcyjny-co2-ciechanow',
      'mezoterapia-mikroiglowa-ciechanow',
      'peeling-weglowy-ciechanow',
    ],
  },
  {
    title: 'Utrata jędrności',
    slug: 'utrata-jedrnosci-ciechanow',
    description:
      'Utrata jędrności pojawia się wraz ze spadkiem napięcia skóry, zmianą owalu twarzy i osłabieniem struktury tkanek. Odpowiednio dobrane zabiegi pomagają wspierać ujędrnienie i przebudowę skóry.',
    symptoms: [
      'mniej napięta skóra twarzy',
      'opadający owal',
      'wiotkość skóry szyi',
      'potrzeba mocniejszego efektu liftingu',
    ],
    treatmentSlugs: [
      'hifu-ciechanow',
      'laser-frakcyjny-co2-ciechanow',
      'mezoterapia-mikroiglowa-ciechanow',
    ],
  },
  {
    title: 'Przebarwienia',
    slug: 'przebarwienia-ciechanow',
    description:
      'Przebarwienia mogą być skutkiem słońca, zmian hormonalnych, stanów zapalnych lub wcześniejszych podrażnień. Zabiegi rozświetlające i przebudowujące pomagają wyrównać wygląd skóry.',
    symptoms: [
      'nierówny koloryt',
      'plamy posłoneczne',
      'ślady po stanach zapalnych',
      'matowa skóra bez świeżości',
    ],
    treatmentSlugs: [
      'peeling-weglowy-ciechanow',
      'laser-frakcyjny-co2-ciechanow',
      'mezoterapia-mikroiglowa-ciechanow',
    ],
  },
  {
    title: 'Blizny potrądzikowe',
    slug: 'blizny-potradzikowe-ciechanow',
    description:
      'Blizny potrądzikowe i nierówna struktura skóry wymagają pracy nad przebudową oraz regeneracją. Plan zabiegowy dobiera się do głębokości zmian i wrażliwości skóry.',
    symptoms: [
      'nierówna powierzchnia skóry',
      'zagłębienia po trądziku',
      'rozszerzone pory',
      'ślady pozapalne',
    ],
    treatmentSlugs: [
      'laser-frakcyjny-co2-ciechanow',
      'mezoterapia-mikroiglowa-ciechanow',
      'peeling-weglowy-ciechanow',
    ],
  },
  {
    title: 'Nieudany PMU',
    slug: 'nieudany-pmu-ciechanow',
    description:
      'Nieudany makijaż permanentny może oznaczać zbyt ciemny kolor, niekorzystny kształt, migrację pigmentu albo stary efekt wymagający rozjaśnienia. W takim przypadku ważna jest spokojna konsultacja i plan korekty.',
    symptoms: [
      'za ciemny lub chłodny pigment',
      'kształt niedopasowany do twarzy',
      'stary makijaż permanentny',
      'potrzeba rozjaśnienia przed nowym PMU',
    ],
    treatmentSlugs: [
      'usuwanie-makijazu-permanentnego-ciechanow',
      'brwi-permanentne-ciechanow',
      'usta-permanentne-ciechanow',
      'kreski-permanentne-ciechanow',
    ],
  },
  {
    title: 'Nadmierne owłosienie',
    slug: 'nadmierne-owlosienie-ciechanow',
    description:
      'Nadmierne lub niechciane owłosienie może utrudniać codzienną pielęgnację i powodować dyskomfort. Depilacja laserowa pozwala zaplanować pracę z wybranymi partiami twarzy i ciała.',
    symptoms: [
      'częste golenie lub podrażnienia po depilacji',
      'owłosienie na twarzy lub ciele',
      'wrastające włoski',
      'potrzeba długofalowego ograniczenia owłosienia',
    ],
    treatmentSlugs: ['depilacja-laserowa-ciechanow'],
  },
]

export const getProblemBySlug = (slug) =>
  problems.find((problem) => problem.slug === slug)
