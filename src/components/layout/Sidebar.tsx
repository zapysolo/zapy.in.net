'use client';
import { blogPosts } from '@/data/blog';
import { projects } from '@/data/projects';
import { useState } from 'react';

const sortedBlogs = [...blogPosts]
  .sort((a, b) => b.date.valueOf() - a.date.valueOf())
  .slice(0, 10);

export default function Sidebar() {
  const [isOpenProjects, setIsOpen] = useState(true); // Default to open
  const [isOpenBlog, setIsOpenBlog] = useState(true); // Default to open

  return (
    <aside
      className="hidden md:flex flex-col w-64 lg:w-72 xl:w-80 bg-vs-bg border-r border-vs-border overflow-y-auto shrink-0"
      aria-label="Sidebar navigation"
    >
      <div className="p-4 border-b border-vs-border">
        <details open>
          <summary onClick={() => setIsOpen(!isOpenProjects)} className="flex items-center cursor-pointer hover:text-vs-accent transition-colors p-2 rounded font-mono text-sm select-none list-none">
            <span className="mr-2" aria-hidden="true">{isOpenProjects ? '⌃' : '⌄'}</span>
            <span>_projects</span>
          </summary>
          <ul className="ml-4 mt-2 space-y-1" role="list">
            {projects.map((project) => (
              <li key={project.slug}>
                <a
                  href={`/projects/${project.slug}/`}
                  className="flex items-center p-2 rounded transition-colors text-sm font-mono text-vs-text hover:text-vs-accent"
                  title={project.description}
                >
                  <span className="mr-2 text-vs-green" aria-hidden="true">📦</span>
                  <span className="truncate">{project.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>

      <div className="p-4">
        <details open>
          <summary onClick={() => setIsOpenBlog(!isOpenBlog)} className="flex items-center cursor-pointer hover:text-vs-accent transition-colors p-2 rounded font-mono text-sm select-none list-none">
            <span className="mr-2" aria-hidden="true">{isOpenBlog ? '⌃' : '⌄'}</span>
            <span>_blog</span>
          </summary>
          <ul className="ml-4 mt-2 space-y-1" role="list">
            {sortedBlogs.map((post) => (
              <li key={post.slug}>
                <a
                  href={`/blog/${post.slug}/`}
                  className="flex items-center p-2 rounded transition-colors text-sm font-mono text-vs-text hover:text-vs-accent"
                  title={post.description}
                >
                  <span className="mr-2 text-vs-blue" aria-hidden="true">📝</span>
                  <span className="truncate">{post.title}</span>
                </a>
              </li>
            ))}
            {sortedBlogs.length === 0 && (
              <li className="text-gray-500 text-xs italic p-2">No blog posts yet</li>
            )}
          </ul>
        </details>
      </div>
    </aside>
  );
}
