import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/lib/seo';
import { BLOG_POSTS } from '@/lib/data/blog';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.category, 'HasBrando blog'],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="page-hero">
        <div className="container relative max-w-3xl">
          <Link href="/blog" className="text-sm text-[var(--accent)] no-underline hover:underline">
            ← Back to Blog
          </Link>
          <p className="section-label mt-6">{post.category}</p>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-[var(--text-subtle)]">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readTime} read</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="legal-content">
            <p>{post.excerpt}</p>
            <p>
              This article is part of the HasBrando blog — your source for branding, marketing, and growth insights.
              Full article content coming soon. In the meantime, explore our{' '}
              <Link href="/services" className="text-[var(--accent)]">services</Link> or{' '}
              <Link href="/book-strategy" className="text-[var(--accent)]">book a strategy call</Link>.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
