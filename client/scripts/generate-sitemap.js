import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SITE_URL = 'https://www.zenvyratech.in';

import { blogPosts } from '../src/content/blogs.js';

const staticPages = [
  { url: '/', priority: 1.0 },
  { url: '/services', priority: 0.9 },
  { url: '/blog', priority: 0.8 },
  { url: '/about', priority: 0.7 },
  { url: '/contact', priority: 0.7 },
  { url: '/projects', priority: 0.6 },
  { url: '/privacy-policy', priority: 0.4 },
  { url: '/terms-conditions', priority: 0.4 }
];

function formatDate(d) {
  if (!d) return new Date().toISOString();
  return new Date(d).toISOString();
}

let urls = [];
for (const p of staticPages) {
  urls.push({ loc: SITE_URL + p.url, priority: p.priority, lastmod: formatDate() });
}

for (const post of blogPosts) {
  urls.push({ loc: `${SITE_URL}/blog/${post.slug}`, priority: 0.8, lastmod: formatDate(post.updatedAt || post.createdAt) });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`)
  .join('\n')}
</urlset>`;

if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml generated with', urls.length, 'entries');
