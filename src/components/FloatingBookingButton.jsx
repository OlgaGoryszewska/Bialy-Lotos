export const bookingUrl =
  'https://booksy.com/pl-pl/142271_salon-pieknosci-bialy-lotos_salon-kosmetyczny_4495_ciechanow#ba_s=seo'

export const FloatingBookingButton = () => (
  <a
    href={bookingUrl}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-poppins text-xs font-medium uppercase tracking-[0.16em] text-white shadow-[0_14px_35px_rgba(181,152,63,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:bottom-[calc(1.75rem+env(safe-area-inset-bottom,0px))] sm:right-7 sm:px-6 sm:py-4"
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
    Umów wizytę
  </a>
)
