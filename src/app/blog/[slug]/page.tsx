import type { Metadata } from 'next';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { SITE_TITLE, SITE_URL } from '@/constants';
import { blogPosts } from '@/data/blog';
import { formatDate } from '@/utils';

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = blogPosts.find((item) => item.slug === slug);
    if (!post) return {};
    return {
      title: `${post.title} | ${SITE_TITLE}`,
      description: post.description,
      alternates: { canonical: `${SITE_URL}/blog/${post.slug}/` },
    };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const renderedContent = await marked(post.content);
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 mt-[60px]">
        <article>
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-vs-bg-hover text-vs-accent px-2 py-1 rounded font-mono">#{tag}</span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-mono text-white mb-4">{post.title}</h1>
            <p className="text-vs-text mb-4">{post.description}</p>
            <div className="flex items-center gap-4 text-vs-text text-sm font-mono border-t border-vs-border pt-4">
              <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
              <span>&bull;</span>
              <span>5 min read</span>
            </div>
          </header>
          <div className="prose-vs" dangerouslySetInnerHTML={{ __html: renderedContent }} />
        </article>
        <footer className="mt-12 pt-6 border-t border-vs-border">
          <a href="/blog/" className="text-vs-accent hover:underline font-mono text-sm">&larr; view all blogs</a>
        </footer>
      </main>
      <Footer />
    </>
  );
}
