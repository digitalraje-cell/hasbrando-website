import { createMetadata } from '@/lib/seo';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import ContactTrustInfo from '@/components/sections/ContactTrustInfo';
import ContactForm from '@/components/ContactForm';

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with Hashbrando. Tell us about your brand and market ambitions.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's Build Something People Remember"
        description="Tell us about your brand, your market, and where you want to go. We respond within 24 hours."
        image={null}
      />

      <section className="section section--light">
        <div className="container contact-layout">
          <Reveal className="contact-layout__info">
            <h2 className="contact-layout__title">Let&apos;s explore what&apos;s possible</h2>
            <p className="contact-layout__desc">
              Share your ambitions and challenges. Our strategists will review your inquiry and respond with thoughtful recommendations — no hard sell, no automated sequences.
            </p>
            <ContactTrustInfo />
          </Reveal>

          <Reveal delay={0.1} className="contact-layout__form">
            <div className="contact-form-shell">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
