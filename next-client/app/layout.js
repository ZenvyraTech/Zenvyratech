import "./globals.css";

export const metadata = {
  title: "Zenvyra Tech - Web Development & SEO Agency | Digital Solutions",
  description: "Zenvyra Tech is a premier web development and SEO agency specializing in creating high-performance digital solutions for businesses of all sizes.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  // Open Graph tags
  openGraph: {
    title: "Zenvyra Tech - Web Development & SEO Agency | Digital Solutions",
    description: "Zenvyra Tech is a premier web development and SEO agency specializing in creating high-performance digital solutions for businesses of all sizes.",
    url: "https://www.zenvyratech.in",
    siteName: "Zenvyra Tech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Zenvyra Tech",
      },
    ],
  },
  // Twitter tags
  twitter: {
    card: "summary_large_image",
    title: "Zenvyra Tech - Web Development & SEO Agency | Digital Solutions",
    description: "Zenvyra Tech is a premier web development and SEO agency specializing in creating high-performance digital solutions for businesses of all sizes.",
    images: ["/cover.png"],
  },
  // Additional metadata
  alternates: {
    canonical: "https://www.zenvyratech.in",
  },
  generator: "Next.js",
  applicationName: "Zenvyra Tech",
  referrer: "origin-when-cross-origin",
  keywords: ["web development", "SEO", "digital agency", "website design", "performance optimization", "digital solutions"],
  authors: [{ name: "Zenvyra Tech", url: "https://www.zenvyratech.in" }],
  creator: "Zenvyra Tech",
  publisher: "Zenvyra Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
