# Biały Lotos - Portfolio Project Summary

## Project Overview

Biały Lotos is a responsive website for a beauty and cosmetology salon in Ciechanów. The project presents the salon offer, treatment details, price list, gallery, shop/vouchers, problem-based recommendations, contact flow, and privacy information in one cohesive digital experience.

The site is designed as a practical business website rather than a simple landing page. It helps potential clients discover treatments, understand what each service is for, compare prices, view example effects, and move toward booking through Booksy.

## What The Project Contains

- A polished homepage with a visual hero section, salon positioning, featured treatments, before/after previews, reviews, FAQ content, shop preview, and booking calls to action.
- A full treatment catalog grouped by category, including permanent makeup, premium cosmetology, laser hair removal, brow and lash styling, and piercing.
- Dynamic service detail pages generated from structured data, with descriptions, benefits, preparation guidance, contraindications, aftercare, FAQ sections, pricing, gallery content, and booking links.
- Problem-based pages that connect client concerns such as wrinkles, loss of firmness, discoloration, acne scars, unsuccessful PMU, and unwanted hair with recommended treatments.
- A searchable and expandable price list covering PMU, cosmetics, brows and lashes, makeup, laser treatments, cosmetology, and piercing.
- A gallery of salon effects organized by treatment category, using local image assets and reusable gallery data.
- A shop section for vouchers, post-treatment care, SPF, regeneration products, consultation offers, and treatment packages.
- Contact and booking pages connected to Booksy, with clear user paths for appointments and product/voucher inquiries.
- RODO/privacy content and a privacy-aware Google Maps embed that only loads external map content after user consent.
- Reusable navigation, mobile menu, footer, cookie/privacy consent, and data modules.
- Local brand assets, treatment photos, effect images, logo files, custom fonts, and favicon assets.
- Automated test coverage for the homepage hero using Jest and React Testing Library.

## Main Features

### Business And Content Features

- SEO-oriented pages for local treatment searches in Ciechanów.
- Structured service data used to generate consistent treatment pages.
- Treatment-to-price mapping so service pages can show relevant price sections.
- Before/after style gallery content connected to treatment pages.
- Problem-led navigation for users who know their concern but not the right treatment.
- Booking-focused calls to action linking to the salon's Booksy profile.
- Product and voucher catalog prepared for a small salon shop experience.

### User Experience Features

- Responsive layout for desktop and mobile users.
- Sticky navigation with a compact mobile menu.
- Searchable price list for faster service discovery.
- Expandable price sections to keep long pricing data readable.
- Consent-controlled Google Maps embed for better privacy handling.
- Visual-first treatment presentation using real salon/service imagery.
- Consistent typography and brand styling with custom fonts.

### Technical Features

- Next.js page-based routing.
- React components for reusable UI structure.
- Tailwind CSS for responsive styling and brand system utilities.
- Static data modules for services, pricing, products, effects, and problem pages.
- Dynamic routes for treatment pages and problem pages.
- Next.js image handling through `next/image`.
- Jest and React Testing Library setup for component testing.
- Vercel configuration for deployment.

## Technology Stack

- Next.js
- React
- Tailwind CSS
- JavaScript / JSX
- Jest
- React Testing Library
- ESLint
- Prettier
- Vercel

## Key Files And Structure

- `pages/index.jsx` - homepage entry point.
- `src/pages/HomePage.jsx` - main homepage experience.
- `pages/[slug].jsx` - dynamic treatment detail pages.
- `pages/problemy/[slug].jsx` - dynamic problem detail pages.
- `pages/zabiegi.jsx` - treatment catalog.
- `pages/cennik.jsx` - searchable price list.
- `pages/galeria.jsx` - gallery of treatment effects.
- `pages/sklep.jsx` - shop and voucher section.
- `pages/kontakt.jsx` - contact and booking page.
- `src/data/services.js` - treatment categories and service page data.
- `src/data/cennik.js` - pricing data.
- `src/data/effects.js` and `src/data/effectImages.js` - gallery and effect content.
- `src/data/problems.js` - client concern pages and treatment recommendations.
- `src/data/products.js` - shop and voucher content.
- `src/components/Nav.jsx` and `src/components/Menu.jsx` - navigation.
- `src/components/PrivacyConsent.jsx` - cookie consent and privacy-safe map loading.
- `src/assets/img/` - local image library for branding, services, vouchers, and gallery effects.
- `__tests__/HomePage.test.jsx` - homepage rendering test.

## Portfolio Highlights

This project demonstrates the ability to build a complete small-business website with real content architecture, not just static page design. The strongest parts of the implementation are:

- Turning a broad salon offer into structured, reusable data.
- Creating scalable dynamic pages for treatments and client problems.
- Designing user flows around discovery, trust, pricing, and booking.
- Combining local SEO content with a clean visual presentation.
- Handling privacy-sensitive external embeds through explicit consent.
- Keeping the site maintainable by separating content data from UI components.

## Suggested Portfolio Description

Biały Lotos is a Next.js website for a beauty and cosmetology salon. I built a full content-driven experience with dynamic treatment pages, problem-based recommendations, searchable pricing, gallery sections, a shop/voucher area, booking links, and privacy-aware map consent. The project focuses on local SEO, responsive design, reusable data structures, and a polished client journey from service discovery to appointment booking.

