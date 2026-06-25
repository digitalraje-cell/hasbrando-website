import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { FOUNDER } from '@/lib/data/founder';

export default function FounderProfile() {
  return (
    <section className="founder-profile section section--subtle">
      <div className="container founder-profile__grid">
        <Reveal className="founder-profile__card">
          <div className="founder-profile__portrait">
            <Image
              src={FOUNDER.image}
              alt={FOUNDER.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="founder-profile__img"
            />
          </div>

          <div className="founder-profile__meta">
            <h3 className="founder-profile__name">{FOUNDER.name}</h3>
            <p className="founder-profile__title">{FOUNDER.title}</p>
            <p className="founder-profile__roles">{FOUNDER.roles}</p>

            <ul className="founder-profile__credentials">
              {FOUNDER.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="founder-profile__story">
          <p className="section-label">Founder</p>
          <h2 className="founder-profile__headline">
            The Thinking Behind
            <br />
            Hashbrando
          </h2>

          <div className="founder-profile__copy">
            {FOUNDER.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="founder-profile__cta">
            <p className="founder-profile__cta-prompt">{FOUNDER.ctaPrompt}</p>
            <Link href={FOUNDER.ctaHref} className="btn btn-primary">
              {FOUNDER.ctaLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
