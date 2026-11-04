import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import BlogCard from '@/components/sections/BlogCard';
import { blogPosts } from '@/data/blog';
import { SITE_TITLE } from '@/constants';

export const metadata: Metadata = {
  title: `Blog | ${SITE_TITLE}`,
  description: "Thoughts on software engineering, web development, and the things I'm learning.",
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => b.date.valueOf() - a.date.valueOf());

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 mt-[60px]">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-mono text-white mb-3">_blog</h1>
          <p className="text-vs-text">Thoughts on software engineering, web development, and the things I&apos;m learning.</p>
        </header>
        {sortedPosts.length === 0 ? (
          <p className="text-vs-text font-mono text-center py-16">// no posts yet — check back soon</p>
        ) : (
          <div className="space-y-4">
            {sortedPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                readingTime={5}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
