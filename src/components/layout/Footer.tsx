import Link from 'next/link';
import Wordmark from '@/components/ui/Wordmark';
import { FOOTER_LINKS, SITE } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="container py-20 md:py-24">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Wordmark size="lg" variant="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--text-on-dark-muted)]">
              Premium branding and growth agency for ambitious founders, coaches, and brands ready to scale internationally.
            </p>
            <div className="mt-8 flex gap-3">
              {Object.entries(SITE.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-dark)] text-[var(--text-on-dark-muted)] transition hover:border-[var(--border-dark-hover)] hover:text-white"
                  aria-label={platform}
                >
                  <span className="text-[10px] font-semibold uppercase">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-on-dark-subtle)]">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-on-dark-muted)] no-underline transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-on-dark-subtle)]">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-on-dark-muted)] no-underline transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-on-dark-subtle)]">Resources</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-on-dark-muted)] no-underline transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-dark)] pt-8 md:flex-row">
          <p className="text-sm text-[var(--text-on-dark-subtle)]">
            © 2026 HasBrando · Lifetop Academy ·{' '}
            <a href={`mailto:${SITE.email}`} className="text-[var(--text-on-dark-muted)] transition hover:text-white">
              {SITE.email}
            </a>
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-sm text-[var(--text-on-dark-subtle)] no-underline transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[var(--text-on-dark-subtle)] no-underline transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
