import { formatDate } from '@/utils';

interface BlogCardProps {
  title: string;
  description: string;
  date: Date;
  tags: string[];
  slug: string;
  readingTime: number;
}

export default function BlogCard({ title, description, date, tags, slug, readingTime }: BlogCardProps) {
  return (
    <article className="bg-vs-bg-card rounded-lg p-5 sm:p-6 hover:bg-vs-bg-card-hover transition-colors duration-200 border border-vs-border">
      <header className="mb-3">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-vs-bg-hover text-vs-accent px-2 py-0.5 rounded font-mono">#{tag}</span>
          ))}
        </div>
        <h2 className="text-white text-lg font-mono hover:text-vs-accent transition-colors">
          <a href={`/blog/${slug}/`}>{title}</a>
        </h2>
      </header>
      <p className="text-vs-text text-sm mb-4 line-clamp-2">{description}</p>
      <footer className="flex items-center justify-between text-xs text-vs-text font-mono">
        <time dateTime={date.toISOString()}>{formatDate(date)}</time>
        <span>{readingTime} min read</span>
      </footer>
    </article>
  );
}
