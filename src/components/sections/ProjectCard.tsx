import type { Project } from '@/types';
import TechBadge from '@/components/common/TechBadge';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-vs-bg rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 flex flex-col">
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <header className="mb-4 flex items-center gap-2">
          <span className="text-vs-orange text-sm font-semibold font-mono">Project {project.number}</span>
          <span className="text-gray-500 text-sm font-mono">// {project.title}</span>
        </header>
        <p className="text-gray-300 mb-4 text-sm sm:text-base min-h-[3rem] flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((tech) => <TechBadge key={tech} name={tech} />)}
        </div>
        <footer className="flex gap-2 mt-auto">
          <a href={`/projects/${project.slug}/`} className="flex-1 text-center bg-vs-bg-hover text-vs-accent px-4 py-2 text-sm rounded-md hover:bg-[#233141] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-vs-accent font-mono">
            view-details
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-vs-bg-hover text-vs-text px-4 py-2 text-sm rounded-md hover:bg-[#233141] hover:text-vs-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-vs-accent font-mono" aria-label={`View ${project.title} on GitHub`}>
            github
          </a>
        </footer>
      </div>
    </article>
  );
}
