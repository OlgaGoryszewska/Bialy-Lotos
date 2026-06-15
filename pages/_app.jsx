import '../src/index.css'
import Head from 'next/head'
import { CookieConsentBanner } from '../src/components/PrivacyConsent'
import { SiteFooter } from '../src/components/SiteFooter'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
      <SiteFooter />
      <CookieConsentBanner />
    </>
  )
}
