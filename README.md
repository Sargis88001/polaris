# Polaris Center

Production Next.js 15 site for Polaris Center, a children's educational and activity center in Yerevan. Built with the App Router, Styled Components, and next-intl (en, ru, hy). Designed to run on a self-hosted Linux server (Lumadock) with `next start`.

## Tech stack

- Next.js 15 (App Router) on JavaScript only (no TypeScript)
- React 18.3
- Styled Components 6 (with built-in SSR registry)
- next-intl for routing and translations across `en`, `ru`, `hy` (default `hy`)
- GSAP + @gsap/react for animation
- Lucide React icons
- Native Next.js production server (`next start`) with security headers configured in `next.config.js`
- ESLint with `next/core-web-vitals`
- Node 20+, npm

## Getting started

```bash
# Install
npm install

# Develop on http://localhost:3000
npm run dev

# Lint
npm run lint

# Production build and run
npm run build
npm start
```

The default locale is Armenian (`hy`), so the root `/` redirects to `/hy`.

## Environment variables

Copy `.env.example` to `.env.local` and adjust as needed.

| Variable          | Purpose                                                            | Example                       |
| ----------------- | ------------------------------------------------------------------ | ----------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata and `alternates`.         | `https://polaris.am`          |
| `PORT`            | Port the Next server listens on. Defaults to `3000`.               | `3000`                        |
| `SMTP_HOST`       | SMTP host for the contact form (when nodemailer is wired).         | `smtp.eu.example.com`         |
| `SMTP_PORT`       | SMTP port.                                                         | `587`                         |
| `SMTP_USER`       | SMTP user.                                                         | `notifications@polaris.am`    |
| `SMTP_PASS`       | SMTP password.                                                     | `change-me`                   |
| `CONTACT_TO`      | Recipient address for contact form submissions.                    | `hello@polaris.am`            |

The contact API currently logs submissions and returns `{ success: true }`. Wire the SMTP variables into a nodemailer transporter inside `src/app/api/contact/route.js` to enable real email delivery.

## Folder structure

```
polaris-center/
  middleware.js              # next-intl locale routing only
  next.config.js             # Next config + security headers
  public/
    fonts/font.css           # Fontshare imports (Cabinet Grotesk + Satoshi)
    images/                  # Hero, gallery, blog cover images
    favicon.svg
  src/
    app/
      globals.css            # Brand tokens, base reset, theme variables
      layout.jsx             # Root layout, metadata template
      page.jsx               # Redirects / to /{defaultLocale}
      api/contact/route.js   # POST handler for the contact form
      [locale]/
        layout.jsx           # Providers, html lang, alternates.languages
        page.jsx             # Home
        about/
        blog/
          page.jsx
          [slug]/page.jsx
        contact/
        faq/
        gymnastics/
        development/
        english/
        theatre/
        school-prep/
        robotics/
    components/
      layout/                # Header, Footer, MobileNav
      ui/                    # Button, Card, Accordion, Carousel, AnimatedCounter, ThemeToggle, LanguageSwitcher, ContactForm
      sections/              # Hero, ProgramGrid, Testimonials, CtaBand, PageHero, ProgramSchedule
    data/                    # programs, blogPosts, faq, team
    helpers/                 # theme, variables, typography, helperClass
    i18n/                    # config, request, navigation
    lib/                     # registry (SC SSR), ThemeProviderClient, pageMetadata
    messages/                # en.json, ru.json, hy.json (identical key trees)
  .github/workflows/ci.yml
```

Every component lives in its own folder with `index.jsx` (and `'use client'` when needed) plus a `style.js` exporting named styled components.

## Pages

All pages exist for the three locales `en`, `ru`, and `hy`. URL pattern: `/{locale}/{path}`.

| Path                               | Purpose                                                  |
| ---------------------------------- | -------------------------------------------------------- |
| `/{locale}`                        | Home                                                     |
| `/{locale}/about`                  | About: mission, vision, team, milestones                 |
| `/{locale}/gymnastics`             | Gymnastics program                                       |
| `/{locale}/development`            | Early development program                                |
| `/{locale}/english`                | English program                                          |
| `/{locale}/theatre`                | Theatre and stage program                                |
| `/{locale}/school-prep`            | School prep program                                      |
| `/{locale}/robotics`               | Robotics program                                         |
| `/{locale}/blog`                   | Blog index                                               |
| `/{locale}/blog/{slug}`            | Blog post detail                                         |
| `/{locale}/faq`                    | Searchable FAQ                                           |
| `/{locale}/contact`                | Contact form and contact details                         |

## Adding translations

1. Open the three files in `src/messages/`: `en.json`, `ru.json`, `hy.json`.
2. Add the new key under the same namespace in all three files. Keep the key tree identical across locales.
3. Use `getTranslations({ locale, namespace })` in server components, or `useTranslations(namespace)` in client components.
4. Reference the key as `t('key')` or `t('group.key')`.

The locale list, default locale, and locale labels live in `src/i18n/config.js`. The middleware in `middleware.js` is the only place that handles locale routing.

## Adding a blog post

1. Open `src/data/blogPosts.js`.
2. Append an entry with a unique kebab-case `slug`, a cover image path under `/images/`, an ISO date, a category key, and `body` arrays per locale.
3. Add a translated `title` and `excerpt` per locale on the same entry.
4. Drop the cover image into `public/images/`.

## Adding a program

1. Add the program entry in `src/data/programs.js` with a kebab-case URL slug. If the slug contains a hyphen (e.g. `school-prep`), add a mapping in `programKeys` to its camelCase translation namespace.
2. Add a matching translation namespace in all three message files.
3. Create a route folder under `src/app/[locale]/{slug}/page.jsx` that renders `PageHero`, the program-specific section, and `CtaBand`.

## Theming

Light is the default theme. Dark theme is opt-in by setting `data-theme="dark"` on `<html>` or `<body>`. The `ThemeToggle` component reads the user's `prefers-color-scheme` on first render and toggles the attribute. CSS custom properties live in `src/app/globals.css` and are mirrored as styled-components tokens in `src/helpers/variables.js`; dark overrides live in the `[data-theme='dark']` block.

Brand tokens live in `src/helpers/theme.js`:

- `primaryColor` `#342d8b` deep indigo / violet (Polaris primary)
- `primaryColorHover` `#2a2470`
- `primaryColorActive` `#1f1a55`
- `bg` `#f7f7f9` warm off-white surface
- `surface` `#ffffff`
- White (`#ffffff`) is used as text on every primary-colored surface.
- Primary color is reserved for CTA buttons, active nav links, badges, focus rings, and key highlights only. All other surfaces and text are neutral.

## Deployment

### Self-hosted Linux (Lumadock)

```bash
npm ci
npm run build
NODE_ENV=production PORT=3000 npm start
```

`npm start` runs `next start`, the standard Next.js production server. Front it with nginx or Caddy and terminate TLS at the proxy. Security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection) are applied via `next.config.js` `headers()` and so travel with every response.

## Conventions

- JavaScript only. `.js` and `.jsx` files. No TypeScript.
- No `style="..."` inline attributes. Use styled components.
- No `localStorage` or `sessionStorage`.
- No em-dashes anywhere in copy or code comments.
- Use the `Link`, `useRouter`, `usePathname` exports from `@/i18n/navigation`, not from `next/link` or `next/navigation`.
- `params` is async in Next 15. Always `await params`.
- Call `setRequestLocale(locale)` at the top of every locale-scoped server component.

## Continuous integration

`.github/workflows/ci.yml` runs on push and pull requests to `main`. It installs dependencies with `npm ci`, runs `npm run lint`, and runs `npm run build` on Node 20.

## License

Proprietary. All rights reserved by Polaris Center.
