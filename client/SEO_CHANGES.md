Summary of SEO & Indexing Changes

What's added

- Prerendered blog posts: `scripts/prerender-blogs.js` creates static HTML at `public/blog/<slug>/index.html` containing full article HTML, meta tags (title, description, canonical, OG), and JSON-LD Article schema. This ensures blog content is present in page source without JS.
- Sitemap: `scripts/generate-sitemap.js` writes `public/sitemap.xml` including pages and blog posts.
- robots.txt updated to reference sitemap (already present at `public/robots.txt`).
- Internal linking: Services pages now show "Related articles" pulled from blog data (minor, non-breaking change).
- Lazy-loading: Code-splitting for pages via `React.lazy` in `App.jsx`; images and logo use `loading="lazy"` where applicable.
- Build integration: `package.json` `build` script runs prerender + sitemap generation before `vite build` (no additional tooling required).

Files added or modified

- Added: `scripts/prerender-blogs.js`, `scripts/generate-sitemap.js`, `SEO_CHECKLIST.md`, `SEO_CHANGES.md`
- Modified: `package.json` `build` script, `App.jsx` (lazy loading), `Services.jsx` (related articles), `BlogPost.jsx` (featured image + loading), `Navbar.jsx` (logo lazy loading)

How to run locally

1. Install deps: `npm install`
2. Generate prerendered pages & sitemap: `npm run prerender` and `npm run sitemap` (or use `npm run build` which runs them automatically)
3. Start a static server that serves `public` (Vite dev server will also serve `public` files)

Validation steps

- Open `public/blog/<slug>/index.html` and confirm it contains `<h1>` and article paragraphs.
- Visit `https://<your-site>/blog/<slug>` (deployed) and view page source — content should be present.
- Check `/sitemap.xml` and `/robots.txt`.
- Run Google Rich Results test for any blog URL to verify JSON-LD and meta tags.
- RSS feed generated at `/rss.xml` and linked in `index.html` (use RSS validator or subscribe in an RSS reader to test).
- `site.webmanifest` added to support consistent PWA metadata and icon availability.
- Blog listing and individual posts include microdata attributes (`itemScope`, `itemType`, `itemProp`) to improve machine readability.

Notes: run `npm run rss` and `npm run sitemap` locally to regenerate files; `npm run build` runs all generation steps automatically.
