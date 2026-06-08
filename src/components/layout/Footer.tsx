import Link from 'next/link';
import Wordmark from '@/components/ui/Wordmark';
import { FOOTER_LINKS, SITE } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Wordmark size="lg" />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[var(--text-muted)]">
              Premium creative growth agency for ambitious founders, coaches, and brands ready to scale internationally.
            </p>
            <div className="mt-6 flex gap-4">
              {Object.entries(SITE.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition hover:border-[var(--border-hover)] hover:text-white"
                  aria-label={platform}
                >
                  <span className="text-xs font-semibold uppercase">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Services</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] no-underline transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Company</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] no-underline transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-subtle)]">Resources</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-muted)] no-underline transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-8 md:flex-row">
          <p className="text-sm text-[var(--text-subtle)]">
            © 2026 HasBrando · Lifetop Academy ·{' '}
            <a href={`mailto:${SITE.email}`} className="text-[var(--text-muted)] transition hover:text-white">
              {SITE.email}
            </a>
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-[var(--text-subtle)] no-underline transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-[var(--text-subtle)] no-underline transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
