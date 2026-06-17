import { createMetadata } from '@/lib/seo';
import PageHero from '@/components/sections/PageHero';
import LegalDocument from '@/components/sections/LegalDocument';
import { PRIVACY_POLICY } from '@/lib/data/privacy-policy';

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'HasBrando privacy policy — how we collect, use, and protect your information across branding, marketing, and consulting engagements.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description={`Last updated: ${PRIVACY_POLICY.lastUpdated}`}
        image={null}
      />
      <LegalDocument document={PRIVACY_POLICY} />
    </>
  );
}
