# BrightPath Academy

Production Next.js 15 site for BrightPath Academy, a children's educational and activity center in Yerevan. Built with the App Router, Styled Components, next-intl (en, ru, hy), and a custom Express server for production.

## Tech stack

- Next.js 15 (App Router) on JavaScript only (no TypeScript)
- React 18.3
- Styled Components 6 (with built-in SSR registry)
- next-intl for routing and translations across `en`, `ru`, `hy` (default `hy`)
- GSAP + @gsap/react for animation
- Lucide React icons
- Express custom server with compression and security headers
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
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata and `alternates`.         | `https://brightpath.am`       |
| `PORT`            | Port the Express server listens on. Defaults to `3000`.            | `3000`                        |
| `SMTP_HOST`       | SMTP host for the contact form (when nodemailer is wired).         | `smtp.eu.example.com`         |
| `SMTP_PORT`       | SMTP port.                                                         | `587`                         |
| `SMTP_USER`       | SMTP user.                                                         | `notifications@brightpath.am` |
| `SMTP_PASS`       | SMTP password.                                                     | `change-me`                   |
| `CONTACT_TO`      | Recipient address for contact form submissions.                    | `hello@brightpath.am`         |

The contact API currently logs submissions and returns `{ success: true }`. Wire the SMTP variables into a nodemailer transporter inside `src/app/api/contact/route.js` to enable real email delivery.

## Folder structure

```
brightpath-center/
  middleware.js              # next-intl locale routing only
  next.config.js
  server.js                  # Express custom server for production
  public/
    fonts/font.css           # Fontshare imports (Cabinet Grotesk + Satoshi)
    images/                  # Hero, gallery, blog cover images
    favicon.svg
  src/
    app/
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

Every component lives in its own folder with `index.jsx` (and `'use client'` when needed) plus a `style.js` exporting named styled components. There are no CSS modules and no plain CSS files outside `public/fonts/font.css`.

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
5. The blog index lists posts sorted by date descending. The `[slug]` route uses `generateStaticParams` across locales and slugs.

## Adding a program

1. Add the program entry in `src/data/programs.js` with a kebab-case URL slug. If the slug contains a hyphen (e.g. `school-prep`), add a mapping in `programKeys` to its camelCase translation namespace.
2. Add a matching translation namespace in all three message files.
3. Create a route folder under `src/app/[locale]/{slug}/page.jsx` that renders `PageHero`, the program-specific section, and `CtaBand`.

## Theming

Light is the default theme. Dark theme is opt-in by setting `data-theme="dark"` on `<html>` or `<body>`. The `ThemeToggle` component reads the user's `prefers-color-scheme` on first render and toggles the attribute. CSS custom properties live in `src/helpers/variables.js`; dark overrides live in the `[data-theme='dark']` block.

Brand tokens live in `src/helpers/theme.js`:

- `primaryColor` `#1f2a55` deep indigo
- `accentColor` `#e0834c` warm coral
- `surface` `#f7f2e7` warm cream
- `surfaceDark` `#14151c`

## Deployment

### VPS with the Express server

```bash
npm ci
npm run build
NODE_ENV=production PORT=3000 npm start
```

Front the Express server with nginx or Caddy and terminate TLS at the proxy. The server applies HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy headers.

### Vercel

Vercel ignores `server.js`. Deploy the repo as-is; Vercel detects Next.js automatically. Set `NEXT_PUBLIC_SITE_URL` in the project settings.

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

Proprietary. All rights reserved by BrightPath Academy.
