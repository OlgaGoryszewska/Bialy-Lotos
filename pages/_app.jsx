import '../src/index.css'
import { CookieConsentBanner } from '../src/components/PrivacyConsent'
import { SiteFooter } from '../src/components/SiteFooter'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SiteFooter />
      <CookieConsentBanner />
    </>
  )
}
