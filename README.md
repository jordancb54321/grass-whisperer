# Grass Whisperer

A fast, accessible and search-engine-friendly UK lawn-care website for [grasswhisperer.uk](https://grasswhisperer.uk), built with Astro and deployed as static assets on Cloudflare Workers.

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

## Brand and design system

The visual identity, design tokens, voice, photography rules and component guidance are documented in [`DESIGN.md`](./DESIGN.md). Treat it as the source of truth for future interface changes.

## Cloudflare Worker deployment

The Worker configuration in `wrangler.jsonc` serves the generated `dist/` directory through Cloudflare's static-assets binding. It also owns the custom domains and redirects `www` to the apex domain.

```sh
npx wrangler login
npm run deploy
```

Production domains:

- `https://grasswhisperer.uk`
- `https://www.grasswhisperer.uk` → apex redirect

The separate `grass-whisperer.pages.dev` deployment remains available as a preview, but production traffic is handled by the `grass-whisperer-site` Worker.

## SEO included

- Unique titles and descriptions
- Canonical URLs
- Open Graph and Twitter cards
- Article, breadcrumb, website and organisation structured data
- Generated XML sitemap
- `robots.txt`
- Semantic HTML and UK English locale
- Fast static output with cache/security headers
