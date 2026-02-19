import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog posts from the source content
import { blogPosts } from '../src/content/blogs.js';

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SITE_URL = 'https://www.zenvyratech.in';

function formatContent(content) {
  // Split by blank lines into paragraphs and preserve inline newlines as <br/>
  return content
    .split(/\n\n+/)
    .map((p) => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
    .join('\n');
}

function articleToHtml(post) {
  const contentHtml = formatContent(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const lastmod = post.updatedAt || post.createdAt || new Date().toISOString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url
    },
    'headline': post.title,
    'image': [SITE_URL + (post.featuredImage || '/images/default-blog-og.jpg')],
    'datePublished': post.createdAt,
    'dateModified': post.updatedAt,
    'author': {
      '@type': 'Organization',
      'name': post.author || 'Zenvyra Tech'
    },
    'description': post.seoDescription || post.excerpt
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(post.title)} | Zenvyra Tech Blog</title>
  <meta name="description" content="${escapeHtml(post.seoDescription || post.excerpt)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${escapeHtml(post.title)}" />
  <meta property="og:description" content="${escapeHtml(post.seoDescription || post.excerpt)}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${SITE_URL + (post.featuredImage || '/images/default-blog-og.jpg')}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="robots" content="index, follow" />
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <style>
    /* Minimal, readable styles for prerendered pages */
    body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;line-height:1.6;background:#0b0f13;color:#e6eef6;padding:24px}
    a{color:#ff8a00}
    .container{max-width:820px;margin:0 auto}
    header{margin-bottom:32px}
    .meta{color:#9aa2ad;font-size:0.95rem;margin-bottom:8px}
    img{max-width:100%;height:auto;border-radius:8px;margin-bottom:20px}
    h1{font-size:2.2rem;margin:8px 0 12px}
    p{margin:12px 0;color:#cbd5e1}
    nav a{margin-right:12px;color:#9aa2ad;text-decoration:none}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <nav aria-label="Primary">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>

    <article>
      <div class="meta">${escapeHtml(post.category)} • ${new Date(post.createdAt).toLocaleDateString('en-US')} • ${post.readTime} min read</div>
      <h1>${escapeHtml(post.title)}</h1>
      ${post.featuredImage ? `<img src="${post.featuredImage}" alt="${escapeHtml(post.title)}" loading="lazy" />` : ''}

      ${contentHtml}

      <footer style="margin-top:28px;border-top:1px solid #1a202c;padding-top:20px">
        <p>Author: ${escapeHtml(post.author || 'Zenvyra Tech')}</p>
        <p><a href="/blog">← Back to Blog</a></p>
      </footer>
    </article>
  </div>
</body>
</html>`;
}

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Ensure public/blog exists
if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

// Create blog folder and files
for (const post of blogPosts) {
  const outDir = path.join(PUBLIC_DIR, 'blog', post.slug);
  fs.mkdirSync(outDir, { recursive: true });
  const html = articleToHtml(post);
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log('Prerendered:', post.slug);
}

console.log('All blog posts prerendered to public/blog/<slug>/index.html');
