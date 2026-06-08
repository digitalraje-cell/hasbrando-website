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
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="page-hero">
        <div className="container max-w-3xl">
          <Link href="/blog" className="text-sm text-[var(--text-muted)] no-underline hover:text-[var(--text)]">← Journal</Link>
          <p className="section-label mt-8">{post.category}</p>
          <h1 className="page-hero__title">{post.title}</h1>
          <div className="mt-6 flex items-center gap-3 text-sm text-[var(--text-subtle)]">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container max-w-3xl legal-content">
          <p className="text-lg">{post.excerpt}</p>
          <p className="mt-6">Full article coming soon. Explore our <Link href="/solutions" className="text-[var(--text)] underline-offset-4 hover:underline">solutions</Link> or <Link href="/book-strategy" className="text-[var(--text)] underline-offset-4 hover:underline">book a strategy call</Link>.</p>
        </div>
      </section>
    </article>
  );
}
