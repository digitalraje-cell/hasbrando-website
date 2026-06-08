'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Wordmark from '@/components/ui/Wordmark';
import { NAV_LINKS } from '@/lib/site-config';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]' : 'bg-transparent'
      }`}
      style={{ height: 'var(--header-h)' }}
    >
      <div className="container flex h-full items-center justify-between">
        <Wordmark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] no-underline transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="btn btn-ghost text-sm">
            Contact
          </Link>
          <Link href="/book-strategy" className="btn btn-primary text-sm">
            Book Strategy Call
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent lg:hidden"
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
        <div className="fixed inset-0 top-[var(--header-h)] z-40 bg-[var(--bg)]/98 backdrop-blur-xl lg:hidden">
          <nav className="container flex flex-col gap-2 py-8" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-lg font-medium text-[var(--text-muted)] no-underline transition hover:bg-white/[0.04] hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border)] pt-6">
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
