import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-config';
import { BLOG_POSTS } from '@/lib/data/blog';

const STATIC_ROUTES = [
  '',
  '/about',
  '/solutions',
  '/work',
  '/pricing',
  '/contact',
  '/book-strategy',
  '/faq',
  '/blog',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
