import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import TechBadge from '@/components/common/TechBadge';
import { SITE_TITLE, SITE_URL } from '@/constants';
import { projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projects.find((item) => item.slug === slug);
    if (!project) return {};
    return {
      title: `${project.title} | ${SITE_TITLE}`,
      description: project.description,
      alternates: { canonical: `${SITE_URL}/projects/${project.slug}/` },
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-12 mt-[60px]">
        <article>
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-mono text-white mb-3">{project.title}</h1>
            <p className="text-vs-text mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => <TechBadge key={tech} name={tech} />)}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-vs-accent text-vs-bg px-4 py-2 rounded-md hover:opacity-90 transition-opacity font-mono text-sm focus:outline-none focus:ring-2 focus:ring-vs-accent">
                  live-demo
                </a>
              )}
            </div>
          </header>
          <div className="prose-vs">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <h3>Technologies</h3>
            <ul>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
            {project.github && (
              <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
            )}
          </div>
        </article>
        <footer className="mt-12 pt-6 border-t border-vs-border">
          <a href="/#projects" className="text-vs-accent hover:underline font-mono text-sm">&larr; view all projects</a>
        </footer>
      </main>
      <Footer />
    </>
  );
}
