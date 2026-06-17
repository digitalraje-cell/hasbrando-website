import Link from 'next/link';
import { createMetadata } from '@/lib/seo';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import PageHero from '@/components/sections/PageHero';
import { BLOG_POSTS } from '@/lib/data/blog';

export const metadata = createMetadata({
  title: 'Insights',
  description: 'Insights on branding, growth strategy, and market positioning from the HasBrando team.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Journal"
        title="Insights on Branding, Authority & Growth"
        description="Strategy, positioning, and market thinking for ambitious leaders."
        image={null}
      />
      <section className="section section--light">
        <div className="container">
          <SectionHeading title="Latest articles" subtitle="Perspectives from our strategists." />
          <div className="content-grid-3">
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
