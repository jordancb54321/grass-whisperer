# Grass Whisperer

A fast, accessible and search-engine-friendly UK lawn-care website for [grasswhisperer.uk](https://grasswhisperer.uk), built with Astro and designed for Cloudflare Pages.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The static production output is written to `dist/`.

## Cloudflare Pages

Connect this GitHub repository in **Workers & Pages → Create → Pages → Connect to Git**.

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `24` (or any version matching `package.json`)

Add `grasswhisperer.uk` as the custom domain in the Pages project. Because DNS is already on Cloudflare, Cloudflare can create the required records and certificate automatically.

## SEO included

- Unique titles and descriptions
- Canonical URLs
- Open Graph and Twitter cards
- Article, breadcrumb, website and organisation structured data
- Generated XML sitemap
- `robots.txt`
- Semantic HTML and UK English locale
- Fast static output with cache/security headers
