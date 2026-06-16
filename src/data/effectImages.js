import co2Image from '../assets/img/co2_01.png'
import hifuImage from '../assets/img/hifu_01.png'
import kolczykNos01 from '../assets/img/effects/kolczyk_nos_01.jpg'
import kolczykUcho01 from '../assets/img/effects/kolczyk_ucho_01.jpg'
import laminacjaRzes01 from '../assets/img/effects/laminacja_rzes_01.jpg'
import laminacjaRzes02 from '../assets/img/effects/laminacja_rzes_02.jpg'
import laminacjaRzes03 from '../assets/img/effects/laminacja_rzes_03.jpg'
import laserDepilationImage from '../assets/img/laser_dep_01.png'
import laserUsuwaniePmu01 from '../assets/img/effects/laser_picosekundowy_usuwanie_pmu_01.jpg'
import laserUsuwaniePmu02 from '../assets/img/effects/laser_picosekundowy_usuwanie_pmu_02.png'
import laserUsuwaniePmu03 from '../assets/img/effects/laser_picosekundowy_usuwanie_pmu_03.jpg'
import laserUsuwaniePmu04 from '../assets/img/effects/laser_picosekundowy_usuwanie_pmu_04.png'
import microImage from '../assets/img/micro_01.png'
import peelingImage from '../assets/img/peeling_01.png'
import pmuBrwiPrzedpo01 from '../assets/img/effects/pmu_brwi_przedpo_01.jpg'
import pmuBrwiPrzedpo03 from '../assets/img/effects/pmu_brwi_przedpo_03.jpg'
import pmuBrwiPrzedpo04 from '../assets/img/effects/pmu_brwi_przedpo_04.jpg'
import pmuGlowa01 from '../assets/img/effects/pmu_glowa_01.jpg'
import pmuKreska01 from '../assets/img/effects/pmu_kreska_01.jpg'
import pmuKreskaPrzedpo02 from '../assets/img/effects/pmu_kreska_przedpo_02.jpg'
import pmuKreski03 from '../assets/img/effects/pmu_kreski_03.jpg'
import pmuUsta01 from '../assets/img/effects/pmu_usta_01.jpg'
import pmuUsta02 from '../assets/img/effects/pmu_usta_02.jpg'
import pmuUsta04 from '../assets/img/effects/pmu_usta_04.jpg'
import pmuUstaPrzedpo01 from '../assets/img/effects/pmu_usta_przedpo_01.jpg'
import rzesyUv01 from '../assets/img/effects/rzesy_uv_01.jpg'
import rzesyUv02 from '../assets/img/effects/rzesy_uv_02.jpg'
import rzesyUv03 from '../assets/img/effects/rzesy_uv_03.jpg'
import rzesyUv04 from '../assets/img/effects/rzesy_uv_04.jpg'
import rzesyUv05 from '../assets/img/effects/rzesy_uv_05.jpg'
import rzesyUv05A from '../assets/img/effects/rzesy_uv_ascii_05.jpg'
import rzesyUv06 from '../assets/img/effects/rzesy_uv_06.jpg'
import rzesyUv07 from '../assets/img/effects/rzesy_uv_07.jpg'
import rzesyUv08 from '../assets/img/effects/rzesy_uv_08.jpg'
import earPiercingImage from '../assets/img/uszy_01.jpg'

const byName = (images) =>
  [...images].sort((first, second) =>
    first.name.localeCompare(second.name, 'pl-PL', {
      numeric: true,
      sensitivity: 'base',
    })
  )

export const galleryImageGroupsBySlug = {
  'brwi-permanentne': byName([
    { name: 'PMU brwi przed/po 01', src: pmuBrwiPrzedpo01 },
    { name: 'PMU brwi przed/po 03', src: pmuBrwiPrzedpo03 },
    { name: 'PMU brwi przed/po 04', src: pmuBrwiPrzedpo04 },
  ]),
  depilacja: byName([
    { name: 'Depilacja laserowa 01', src: laserDepilationImage },
  ]),
  hifu: byName([{ name: 'HIFU 01', src: hifuImage }]),
  kreski: byName([
    { name: 'PMU kreska 01', src: pmuKreska01 },
    { name: 'PMU kreska przed/po 02', src: pmuKreskaPrzedpo02 },
    { name: 'PMU kreski 03', src: pmuKreski03 },
  ]),
  'laminacja-rzes': byName([
    { name: 'Laminacja rzęs 01', src: laminacjaRzes01 },
    { name: 'Laminacja rzęs 02', src: laminacjaRzes02 },
    { name: 'Laminacja rzęs 03', src: laminacjaRzes03 },
  ]),
  'laminacja-brwi': byName([
    { name: 'Laminacja brwi i rzęs 01', src: laminacjaRzes01 },
    { name: 'Laminacja brwi i rzęs 02', src: laminacjaRzes02 },
    { name: 'Laminacja brwi i rzęs 03', src: laminacjaRzes03 },
  ]),
  'laser-co2': byName([{ name: 'Laser frakcyjny CO2 01', src: co2Image }]),
  'mezoterapia-mikroiglowa': byName([
    { name: 'Mezoterapia mikroigłowa 01', src: microImage },
  ]),
  'peeling-weglowy': byName([
    { name: 'Peeling węglowy 01', src: peelingImage },
  ]),
  'pigmentacja-skory-glowy': byName([
    { name: 'PMU głowa 01', src: pmuGlowa01 },
  ]),
  'przedluzanie-rzes': byName([
    { name: 'Rzęsy UV 01', src: rzesyUv01 },
    { name: 'Rzęsy UV 02', src: rzesyUv02 },
    { name: 'Rzęsy UV 03', src: rzesyUv03 },
    { name: 'Rzęsy UV 04', src: rzesyUv04 },
    { name: 'Rzęsy UV 05', src: rzesyUv05 },
    { name: 'Rzęsy UV 05A', src: rzesyUv05A },
    { name: 'Rzęsy UV 06', src: rzesyUv06 },
    { name: 'Rzęsy UV 07', src: rzesyUv07 },
    { name: 'Rzęsy UV 08', src: rzesyUv08 },
  ]),
  'przekluwanie-nosa': byName([{ name: 'Kolczyk nos 01', src: kolczykNos01 }]),
  'przekluwanie-uszu': byName([
    { name: 'Kolczyk ucho 01', src: kolczykUcho01 },
    { name: 'Przekłuwanie uszu 02', src: earPiercingImage },
  ]),
  'usuwanie-pmu': byName([
    {
      name: 'Laser pikosekundowy usuwanie PMU 01',
      src: laserUsuwaniePmu01,
    },
    {
      name: 'Laser pikosekundowy usuwanie PMU 02',
      src: laserUsuwaniePmu02,
    },
    {
      name: 'Laser pikosekundowy usuwanie PMU 03',
      src: laserUsuwaniePmu03,
    },
    {
      name: 'Laser pikosekundowy usuwanie PMU 04',
      src: laserUsuwaniePmu04,
    },
  ]),
  'usta-permanentne': byName([
    { name: 'PMU usta 01', src: pmuUsta01 },
    { name: 'PMU usta 02', src: pmuUsta02 },
    { name: 'PMU usta 04', src: pmuUsta04 },
    { name: 'PMU usta przed/po 01', src: pmuUstaPrzedpo01 },
  ]),
}

export const serviceImageGroupsBySlug = {
  'brwi-permanentne-ciechanow': galleryImageGroupsBySlug['brwi-permanentne'],
  'depilacja-laserowa-ciechanow': galleryImageGroupsBySlug.depilacja,
  'hifu-ciechanow': galleryImageGroupsBySlug.hifu,
  'kreski-permanentne-ciechanow': galleryImageGroupsBySlug.kreski,
  'laminacja-brwi-ciechanow': galleryImageGroupsBySlug['laminacja-brwi'],
  'lifting-rzes-ciechanow': galleryImageGroupsBySlug['laminacja-rzes'],
  'laser-frakcyjny-co2-ciechanow': galleryImageGroupsBySlug['laser-co2'],
  'mezoterapia-mikroiglowa-ciechanow':
    galleryImageGroupsBySlug['mezoterapia-mikroiglowa'],
  'peeling-weglowy-ciechanow': galleryImageGroupsBySlug['peeling-weglowy'],
  'przedluzanie-rzes-ciechanow': galleryImageGroupsBySlug['przedluzanie-rzes'],
  'przekluwanie-nosa-ciechanow': galleryImageGroupsBySlug['przekluwanie-nosa'],
  'przekluwanie-uszu-ciechanow': galleryImageGroupsBySlug['przekluwanie-uszu'],
  'usuwanie-makijazu-permanentnego-ciechanow':
    galleryImageGroupsBySlug['usuwanie-pmu'],
  'usta-permanentne-ciechanow': galleryImageGroupsBySlug['usta-permanentne'],
  'wymiana-kolczykow-ciechanow': galleryImageGroupsBySlug['przekluwanie-uszu'],
}

export const getGalleryImagesBySlug = (slug) =>
  galleryImageGroupsBySlug[slug] ?? []

export const getServiceImagesBySlug = (slug) =>
  serviceImageGroupsBySlug[slug] ?? []
