import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { BLOG_POSTS } from '@/lib/data/blog';

export const metadata = createMetadata({
  title: 'Blog',
  description:
    'Insights on branding, performance marketing, personal branding, and growth strategy from the HasBrando team.',
  path: '/blog',
  keywords: ['marketing blog', 'branding tips', 'growth strategy'],
});

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container relative">
          <Reveal>
            <p className="section-label">Blog</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight">
              Growth <span className="text-gradient">insights</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[var(--text-muted)]">
              Strategy, branding, and marketing insights for ambitious businesses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Latest articles"
            subtitle="Practical advice from our growth strategists."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {post.category}
                  </span>
                  <h2 className="font-display text-xl font-semibold leading-snug">{post.title}</h2>
                  <p className="text-sm text-[var(--text-muted)]">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-3 text-xs text-[var(--text-subtle)]">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime} read</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
