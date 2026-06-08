import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { BLOG_POSTS } from '@/lib/data/blog';

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Insights on branding, growth strategy, and market positioning from the HasBrando team.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="section-label">Journal</p>
            <h1 className="page-hero__title">Insights on brand & growth</h1>
            <p className="page-hero__desc">Strategy, positioning, and growth thinking for ambitious leaders.</p>
          </Reveal>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <SectionHeading title="Latest articles" subtitle="Perspectives from our strategists." />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--text-subtle)]">{post.category}</p>
                  <h2 className="font-display text-xl leading-snug">{post.title}</h2>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-3 text-xs text-[var(--text-subtle)]">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
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
