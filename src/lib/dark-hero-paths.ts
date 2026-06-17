/** Routes that open with the dark premium hero — used by Header for transparent nav */
export const DARK_HERO_PATHS = [
  '/',
  '/solutions',
  '/work',
  '/pricing',
  '/about',
  '/contact',
  '/blog',
  '/faq',
  '/privacy',
  '/terms',
  '/book-strategy',
] as const;

export function hasDarkHero(pathname: string): boolean {
  if (pathname === '/') return true;
  if (pathname.startsWith('/blog/')) return true;
  return DARK_HERO_PATHS.some((path) => path !== '/' && pathname === path);
}
