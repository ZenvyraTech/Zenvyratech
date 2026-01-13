import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.zenvyratech.in';

/**
 * Seo component
 * props:
 * - title: page title (required)
 * - description: meta description (required)
 * - pathname: path portion of the URL (optional, falls back to current location)
 * - image: absolute or root-relative image url for OG/Twitter
 * - type: 'website' or 'article'
 * - keywords: optional comma-separated keywords string
 * - robots: optional robots directive (default: 'index, follow')
 */
const Seo = ({ title, description, pathname, image = '/founder.png', type = 'website', keywords, robots = 'index, follow' }) => {
  const location = useLocation && useLocation();
  const path = pathname || (location && location.pathname) || '/';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${BASE_URL}${normalizedPath}`;
  const absImage = image && image.startsWith('http') ? image : `${BASE_URL}${image}`;

  // Organization JSON-LD (site-wide)
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zenvyra Tech',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/zenvyratech',
      'https://twitter.com/zenvyratech',
      'https://www.facebook.com/zenvyratech'
    ]
  };

  // Breadcrumb for articles
  const breadcrumbJsonLd = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: url }
    ]
  } : null;

  // Article JSON-LD (minimal) if article
  const articleJsonLd = type === 'article' ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: title,
    image: [absImage],
    description: description
  } : null;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}

      {/* Canonical */}
      <link rel="canonical" href={url} />
      <link rel="alternate" type="application/rss+xml" title="Zenvyra Tech Blog" href={`${BASE_URL}/rss.xml`} />

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      {absImage && <meta property="og:image" content={absImage} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zenvyra Tech" />

      {/* Twitter */}
      <meta name="twitter:card" content={absImage ? 'summary_large_image' : 'summary'} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {absImage && <meta name="twitter:image" content={absImage} />}

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      {type === 'article' && <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>}
      {breadcrumbJsonLd && <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>}
    </Helmet>
  );
};

export default Seo;
