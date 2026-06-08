'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Wordmark from '@/components/ui/Wordmark';
import { NAV_LINKS } from '@/lib/site-config';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setOverHero(isHome && y < window.innerHeight * 0.75);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isDark = isHome && overHero && !menuOpen && !scrolled;
  const headerBg = menuOpen
    ? 'bg-white border-b border-[var(--border)]'
    : scrolled || !isDark
      ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--border)]'
      : 'bg-transparent';

  const linkClass = isDark && !scrolled && !menuOpen
    ? 'text-white/70 hover:text-white'
    : 'text-[var(--text-muted)] hover:text-[var(--text)]';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="container flex h-full items-center justify-between">
        <Wordmark variant={isDark && !scrolled && !menuOpen ? 'light' : 'dark'} />

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium no-underline transition ${linkClass}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={`text-sm font-medium no-underline transition ${linkClass}`}
          >
            Contact
          </Link>
          <Link
            href="/book-strategy"
            className={isDark && !scrolled ? 'btn btn-on-dark text-sm' : 'btn btn-primary text-sm'}
          >
            Book Strategy Call
          </Link>
        </div>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center rounded-full border lg:hidden ${
            isDark && !scrolled && !menuOpen
              ? 'border-white/20 text-white'
              : 'border-[var(--border)] text-[var(--text)]'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[var(--header-h)] z-40 bg-white lg:hidden">
          <nav className="container flex flex-col gap-1 py-8" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-4 text-lg font-medium text-[var(--text-muted)] no-underline transition hover:bg-[var(--bg-subtle)] hover:text-[var(--text)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border)] pt-8">
              <Link href="/contact" className="btn btn-secondary w-full" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/book-strategy" className="btn btn-primary w-full" onClick={() => setMenuOpen(false)}>
                Book Strategy Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
