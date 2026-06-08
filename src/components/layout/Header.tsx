'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Wordmark from '@/components/ui/Wordmark';
import { NAV_LINKS, RESOURCE_LINKS } from '@/lib/site-config';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      setOverHero(isHome && y < window.innerHeight * 0.7);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setResourcesOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isTransparent = isHome && overHero && !menuOpen && !scrolled;
  const headerState = menuOpen
    ? 'header--solid'
    : isTransparent
      ? 'header--transparent'
      : 'header--solid';

  return (
    <header className={`site-header ${headerState}`}>
      <div className="header-inner">
        <div className="header-brand">
          <Wordmark variant={isTransparent ? 'light' : 'dark'} />
        </div>

        <nav className="header-nav hidden lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(pathname, link.href) ? 'nav-link--active' : ''} ${isTransparent ? 'nav-link--on-dark' : ''}`}
              onClick={closeMenus}
            >
              {link.label}
            </Link>
          ))}

          <div className="relative" ref={resourcesRef}>
            <button
              type="button"
              className={`nav-link nav-link--trigger ${resourcesOpen ? 'nav-link--active' : ''} ${isTransparent ? 'nav-link--on-dark' : ''}`}
              onClick={() => setResourcesOpen(!resourcesOpen)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
                className={`nav-link__chevron ${resourcesOpen ? 'nav-link__chevron--open' : ''}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {resourcesOpen && (
              <div className="nav-dropdown" role="menu">
                {RESOURCE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="nav-dropdown__link"
                    role="menuitem"
                    onClick={closeMenus}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="header-actions hidden lg:flex">
          <Link
            href="/book-strategy"
            className={`header-cta ${isTransparent ? 'header-cta--on-dark' : ''}`}
            onClick={closeMenus}
          >
            Book Strategy Call
          </Link>
        </div>

        <button
          type="button"
          className={`header-menu-btn lg:hidden ${isTransparent ? 'header-menu-btn--on-dark' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="header-mobile-panel lg:hidden">
          <nav className="header-mobile-nav" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header-mobile-link ${isActive(pathname, link.href) ? 'header-mobile-link--active' : ''}`}
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            ))}

            <div className="header-mobile-divider" />
            <p className="header-mobile-label">Resources</p>
            {RESOURCE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="header-mobile-sublink"
                onClick={closeMenus}
              >
                {link.label}
              </Link>
            ))}

            <div className="header-mobile-cta">
              <Link href="/book-strategy" className="btn btn-primary w-full" onClick={closeMenus}>
                Book Strategy Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
