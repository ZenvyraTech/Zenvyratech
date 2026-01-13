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
 */
const Seo = ({ title, description, pathname, image = '/founder.png', type = 'website', keywords }) => {
  const location = useLocation && useLocation();
  const path = pathname || (location && location.pathname) || '/';
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${BASE_URL}${normalizedPath}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
