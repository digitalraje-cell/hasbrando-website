import { createMetadata } from '@/lib/seo';
import PageHero from '@/components/sections/PageHero';
import LegalDocument from '@/components/sections/LegalDocument';
import { TERMS_OF_SERVICE } from '@/lib/data/terms';

export const metadata = createMetadata({
  title: 'Terms & Conditions',
  description:
    'HasBrando terms and conditions for branding, growth consultancy, and strategic partnership engagements.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        description={`Last updated: ${TERMS_OF_SERVICE.lastUpdated}`}
        image={null}
      />
      <LegalDocument document={TERMS_OF_SERVICE} />
    </>
  );
}
