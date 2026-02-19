import Link from 'next/link';
import Seo from '../../components/Seo';
import AnimatedSection from '../../components/AnimatedSection';
import GlassCard from '../../components/GlassCard';

// Metadata for the terms and conditions page
export const metadata = {
  title: "Terms of Service | Digital Solutions Agreement",
  description: "Legal terms governing Zenvyra Tech's digital services, web development, and SEO offerings.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.zenvyratech.in/terms-conditions",
  },
};

const TermsConditions = () => {
  // Organization JSON-LD schema
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zenvyra Tech",
    "url": "https://www.zenvyratech.in",
    "logo": "https://www.zenvyratech.in/logo.svg",
    "sameAs": [
      "https://www.linkedin.com/company/zenvyratech",
      "https://twitter.com/zenvyratech",
      "https://www.facebook.com/zenvyratech"
    ]
  };

  return (
    <>
      <Seo
        title="Terms of Service | Digital Solutions Agreement"
        description="Legal terms governing Zenvyra Tech's digital services, web development, and SEO offerings."
        pathname="/terms-conditions"
        robots="noindex, follow"
      />

      {/* Organization Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <div className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-soft-white">
              Terms & Conditions
            </h1>
            
            <GlassCard>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-muted-grey mb-6">
                  Effective Date: January 1, 2026
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Acceptance of Terms</h2>
                <p className="text-muted-grey mb-4">
                  By accessing and using Zenvyra Tech services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Services Description</h2>
                <p className="text-muted-grey mb-4">
                  Zenvyra Tech provides web development, SEO, digital marketing, design and scalable digital solutions. Services are subject to availability and may be modified at any time.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Intellectual Property</h2>
                <p className="text-muted-grey mb-4">
                  All content, trademarks, and data on this website are the property of Zenvyra Tech and are protected by applicable intellectual property laws.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Limitation of Liability</h2>
                <p className="text-muted-grey mb-4">
                  Zenvyra Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Changes to Terms</h2>
                <p className="text-muted-grey mb-4">
                  We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the modified terms.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Governing Law</h2>
                <p className="text-muted-grey mb-4">
                  These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Contact Information</h2>
                <p className="text-muted-grey">
                  If you have questions about these terms, please contact us at <Link href="mailto:contact@zenvyratech.in" className="text-accent hover:underline">contact@zenvyratech.in</Link>
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;