import Link from 'next/link';
import Seo from '../../components/Seo';
import AnimatedSection from '../../components/AnimatedSection';
import GlassCard from '../../components/GlassCard';

// Metadata for the privacy policy page
export const metadata = {
  title: "Privacy Policy | Data Protection Commitment",
  description: "Zenvyra Tech's commitment to protecting user privacy and responsible data handling practices.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.zenvyratech.in/privacy-policy",
  },
};

const PrivacyPolicy = () => {
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
        title="Privacy Policy | Data Protection Commitment"
        description="Zenvyra Tech's commitment to protecting user privacy and responsible data handling practices."
        pathname="/privacy-policy"
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
              Privacy Policy
            </h1>
            
            <GlassCard>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-muted-grey mb-6">
                  Effective Date: January 1, 2026
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Information We Collect</h2>
                <p className="text-muted-grey mb-4">
                  We collect information you provide directly to us, such as when you contact us, sign up for our newsletter, or use our services.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">How We Use Information</h2>
                <p className="text-muted-grey mb-4">
                  We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Data Security</h2>
                <p className="text-muted-grey mb-4">
                  We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Third-Party Services</h2>
                <p className="text-muted-grey mb-4">
                  We may use third-party services for analytics and other purposes, which may have their own privacy policies governing the use of your information.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Changes to This Policy</h2>
                <p className="text-muted-grey mb-4">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                </p>

                <h2 className="text-2xl font-bold text-soft-white mb-4">Contact Us</h2>
                <p className="text-muted-grey">
                  If you have questions about this privacy policy, please contact us at <Link href="mailto:contact@zenvyratech.in" className="text-accent hover:underline">contact@zenvyratech.in</Link>
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;