"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const BASE_URL = 'https://www.zenvyratech.in';

/**
 * Seo component for Next.js pages
 * props:
 * - title: page title (required)
 * - description: meta description (required)
 * - pathname: path portion of the URL (optional, falls back to current path)
 * - image: absolute or root-relative image url for OG/Twitter
 * - type: 'website' or 'article'
 * - keywords: optional comma-separated keywords string
 * - robots: optional robots directive (default: 'index, follow')
 */
const Seo = ({ title, description, pathname, image = '/founder.png', type = 'website', keywords, robots = 'index, follow' }) => {
  const currentPath = usePathname();
  const path = pathname || currentPath || '/';
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
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      {type === 'article' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
    </>
  );
};

const MetadataProvider = ({ children }) => {
  return <>{children}</>;
};

export { Seo, MetadataProvider };

