SEO Readiness Checklist

✅ Blog posts prerendered to static HTML
✅ Each blog post includes: <title>, meta description, canonical, og tags, JSON-LD, H1, readable content in source
✅ sitemap.xml present at /sitemap.xml and referenced from /robots.txt
✅ robots.txt allows crawling
✅ RSS feed present at /rss.xml and linked in head
✅ site.webmanifest present and linked in head
✅ Services pages show related blog links to improve internal linking
✅ Lazy-loading added for non-critical pages/components
✅ Featured images use loading="lazy"
✅ Blog listing and articles include microdata (itemScope/itemType/itemProp)

Validation steps:
- View source of https://.../blog/<slug> and confirm H1 and paragraph text present without JS
- Check /sitemap.xml for blog entries
- Check /rss.xml (try subscribing in an RSS reader)
- Check /site.webmanifest is accessible
- Run Google Rich Results test for a blog URL (JSON-LD present)
- Verify robots.txt is accessible
- Confirm `<main id="main">` exists and "Skip to content" works (tab -> focus)