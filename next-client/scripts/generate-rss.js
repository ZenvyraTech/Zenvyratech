import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SITE_URL = 'https://www.zenvyratech.in';

import { blogPosts } from '../src/content/blogs.js';

function formatDateRFC822(d) {
  return new Date(d).toUTCString();
}

const items = blogPosts.map(post => `  <item>
    <title><![CDATA[${post.title}]]></title>
    <link>${SITE_URL}/blog/${post.slug}</link>
    <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
    <description><![CDATA[${post.excerpt}]]></description>
    <pubDate>${formatDateRFC822(post.createdAt)}</pubDate>
  </item>`).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Zenvyra Tech Blog</title>
  <link>${SITE_URL}/blog</link>
  <description>Latest articles about web development, SEO, and digital growth from Zenvyra Tech.</description>
  <language>en-US</language>
  <lastBuildDate>${formatDateRFC822(new Date())}</lastBuildDate>
${items}
</channel>
</rss>`;

if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), rss, 'utf8');
console.log('rss.xml generated with', blogPosts.length, 'items');
