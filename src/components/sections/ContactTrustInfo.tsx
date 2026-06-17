import { SITE } from '@/lib/site-config';

const TRUST_POINTS = [
  'Backed by Lifetop Academy',
  'Serving ambitious brands & founders',
  'Strategy-first branding consultancy',
] as const;

export default function ContactTrustInfo() {
  const { lifetopAcademy } = SITE;

  return (
    <div className="contact-trust">
      <ul className="contact-trust__signals">
        {TRUST_POINTS.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="contact-trust__divider" />

      <div className="contact-trust__visit">
        <p className="contact-trust__label">Visit or Contact</p>
        <p className="contact-trust__org">{lifetopAcademy.name}</p>
        <p className="contact-trust__brand">{SITE.name} — {SITE.tagline}</p>

        <dl className="contact-trust__details">
          <div className="contact-trust__row">
            <dt>Address</dt>
            <dd>
              <address className="contact-trust__address">
                {lifetopAcademy.address.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </dd>
          </div>
          <div className="contact-trust__row">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </dd>
          </div>
          <div className="contact-trust__row">
            <dt>Phone</dt>
            <dd>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                {SITE.phone}
              </a>
            </dd>
          </div>
          <div className="contact-trust__row">
            <dt>Business Hours</dt>
            <dd>
              {lifetopAcademy.hours.days}
              <br />
              {lifetopAcademy.hours.time}
            </dd>
          </div>
        </dl>

        <a
          href={lifetopAcademy.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-trust__maps"
        >
          View on Google Maps
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
