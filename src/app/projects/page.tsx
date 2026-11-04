import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';
import { SITE_TITLE } from '@/constants';

export const metadata: Metadata = {
  title: `Projects | ${SITE_TITLE}`,
  description: 'Explore my portfolio of projects and technical work.',
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row flex-1 pt-[60px] pb-[80px] min-h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-4 md:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-mono text-white mb-3">_projects</h1>
              <p className="text-vs-text">A collection of my work and projects built with modern technologies.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
