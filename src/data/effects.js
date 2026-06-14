export const effectGalleries = [
  {
    title: 'Brwi Permanentne',
    slug: 'brwi-permanentne',
    serviceSlugs: ['brwi-permanentne-ciechanow'],
    description:
      'Efekty pigmentacji brwi: wyrównanie kształtu, delikatne zagęszczenie optyczne i bardziej uporządkowana oprawa twarzy.',
    effects: [
      'Naturalnie podkreślony łuk brwiowy i bardziej harmonijny kształt.',
      'Wyrównanie asymetrii oraz subtelne wypełnienie braków w brwiach.',
      'Miękki efekt po wygojeniu, dopasowany do urody klientki.',
      'Odświeżenie starego kształtu i przywrócenie eleganckiej oprawy oczu.',
      'Delikatne przyciemnienie brwi bez efektu ciężkiego makijażu.',
      'Lepsza proporcja brwi względem rysów twarzy.',
      'Efekt zadbanych brwi bez codziennego rysowania konturu.',
      'Naturalne wzmocnienie koloru i optyczne zagęszczenie włosków.',
      'Kształt dopasowany do mimiki i indywidualnej budowy twarzy.',
      'Subtelna metamorfoza zachowująca lekkość spojrzenia.',
    ],
  },
  {
    title: 'Usta Permanentne',
    slug: 'usta-permanentne',
    serviceSlugs: ['usta-permanentne-ciechanow'],
    description:
      'Efekty pigmentacji ust: świeższy kolor, wyraźniejszy kontur i optycznie bardziej zadbane usta.',
    effects: [
      'Odświeżenie naturalnego koloru czerwieni wargowej.',
      'Wyrównanie granicy ust i subtelne podkreślenie konturu.',
      'Delikatny efekt koloru bez wrażenia mocnej pomadki.',
      'Poprawa symetrii odcienia na górnej i dolnej wardze.',
      'Efekt wypoczętych, bardziej wyrazistych ust po wygojeniu.',
      'Naturalna pigmentacja dopasowana do karnacji klientki.',
      'Miękkie przejście koloru i estetyczne rozświetlenie ust.',
      'Podkreślenie kształtu bez przerysowanego efektu.',
      'Wyrównanie miejsc, w których kolor ust był mniej widoczny.',
      'Elegancki rezultat ułatwiający codzienny makijaż.',
    ],
  },
  {
    title: 'Kreski',
    slug: 'kreski',
    serviceSlugs: ['kreski-permanentne-ciechanow'],
    description:
      'Efekty kresek permanentnych: optyczne zagęszczenie linii rzęs i subtelne podkreślenie spojrzenia.',
    effects: [
      'Delikatne zagęszczenie linii rzęs przy zachowaniu naturalnego efektu.',
      'Wyraźniejsze spojrzenie bez codziennego malowania kreski.',
      'Subtelna pigmentacja górnej linii rzęs.',
      'Optyczne otwarcie oka i wzmocnienie oprawy rzęs.',
      'Elegancki efekt dopasowany do kształtu oka.',
      'Kreska dobrana do codziennego stylu klientki.',
      'Miękkie podkreślenie bez ciężkiego makijażu.',
      'Wzmocnienie konturu oka przy jasnej oprawie rzęs.',
      'Efekt świeższego, bardziej wypoczętego spojrzenia.',
      'Naturalny rezultat po wygojeniu pigmentacji.',
    ],
  },
  {
    title: 'HIFU',
    slug: 'hifu',
    serviceSlugs: ['hifu-ciechanow'],
    description:
      'Efekty HIFU: poprawa napięcia skóry, wsparcie owalu twarzy i subtelny efekt liftingujący.',
    effects: [
      'Poprawa napięcia skóry w dolnej części twarzy.',
      'Subtelne podkreślenie owalu i bardziej zwarty wygląd skóry.',
      'Efekt skóry wyglądającej na bardziej sprężystą.',
      'Wsparcie obszarów z widoczną utratą jędrności.',
      'Delikatne uniesienie i poprawa konturu twarzy.',
      'Skóra sprawiająca wrażenie bardziej napiętej po serii regeneracji.',
      'Lepszy wygląd linii żuchwy u klientek z wiotkością skóry.',
      'Naturalny efekt bez zmiany rysów twarzy.',
      'Poprawa kondycji skóry szyi i dolnej części twarzy.',
      'Rezultat budujący się stopniowo po zabiegu.',
    ],
  },
  {
    title: 'Laser CO₂',
    slug: 'laser-co2',
    serviceSlugs: ['laser-frakcyjny-co2-ciechanow'],
    description:
      'Efekty lasera frakcyjnego CO₂: gładsza tekstura skóry, wsparcie przebudowy i praca z nierównościami.',
    effects: [
      'Wygładzenie nierównej tekstury skóry.',
      'Poprawa wyglądu blizn potrądzikowych i rozszerzonych porów.',
      'Skóra wyglądająca na bardziej zwartą i odnowioną.',
      'Praca z obszarami wymagającymi mocniejszej regeneracji.',
      'Stopniowa przebudowa skóry po okresie gojenia.',
      'Odświeżenie skóry twarzy przy widocznych nierównościach.',
      'Poprawa wyglądu miejsc z utrwaloną strukturą pozapalną.',
      'Wyrównanie powierzchni skóry po odpowiedniej rekonwalescencji.',
      'Efekt bardziej gładkiej i napiętej cery.',
      'Regeneracja dobrana do kondycji skóry i obszaru zabiegowego.',
    ],
  },
  {
    title: 'Depilacja',
    slug: 'depilacja',
    serviceSlugs: ['depilacja-laserowa-ciechanow'],
    description:
      'Efekty depilacji laserowej: ograniczenie odrastania włosków i większy komfort wybranych partii ciała.',
    effects: [
      'Mniej widoczne owłosienie w wybranej partii ciała.',
      'Skóra wyglądająca na gładszą między zabiegami.',
      'Ograniczenie problemu częstego golenia.',
      'Zmniejszenie widoczności włosków na twarzy lub ciele.',
      'Większy komfort przy partiach takich jak pachy, bikini lub nogi.',
      'Plan zabiegowy dopasowany do koloru włosa i reakcji skóry.',
      'Stopniowe osłabienie odrastania po kolejnych wizytach.',
      'Mniej podrażnień związanych z tradycyjną depilacją.',
      'Wygodniejsza pielęgnacja skóry na co dzień.',
      'Efekt wymagający regularności i odpowiednich odstępów między wizytami.',
    ],
  },
]

export const getEffectGalleryByServiceSlug = (slug) =>
  effectGalleries.find((gallery) => gallery.serviceSlugs.includes(slug))
