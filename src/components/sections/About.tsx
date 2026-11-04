import { skillCategories } from '@/data/skills';

const aboutLines = [
  '/**',
  ' * Nikhil Patil — Software Engineer',
  ' *',
  ' * 4+ years building production-grade systems across',
  ' * fintech, agri-tech, logistics, and e-commerce.',
  ' *',
  ' * I specialize in backend development — designing',
  ' * scalable architectures, optimizing databases, and',
  ' * owning projects end-to-end. Comfortable across the',
  ' * full stack: Node.js APIs, React backoffices,',
  ' * and Flutter mobile apps.',
  ' *',
  ' * What I have shipped:',
  ' *   → Real-time systems with WebSockets + Redis Pub/Sub',
  ' *   → RPA automation pipelines using Puppeteer',
  ' *   → Offline-first mobile apps with PouchDB/CouchDB',
  ' *   → Live camera feeds via RTSP/HLS media server',
  ' *   → AWS infra setup from scratch (EC2, Route 53, Nginx)',
  ' *   → DB optimization at 75k+ transactions',
  ' *',
  ' * Led small teams, mentored interns, and delivered',
  ' * solo projects end-to-end.',
  ' *',
  ' * Currently open to remote opportunities globally.',
  ' */',
];

export default function About() {
  return (
    <section id="about" className="w-full h-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-4" aria-labelledby="about-heading">
      <div className="max-w-7xl w-full h-full flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 h-full">
          <div className="bg-vs-bg-card rounded-lg shadow-xl overflow-hidden flex flex-col h-full">
            <div className="bg-vs-bg-card-hover p-2 flex items-center" aria-hidden="true">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 text-gray-400 text-sm font-mono">about.ts</span>
            </div>
            <div className="flex-1 overflow-y-auto font-mono text-xs sm:text-sm p-4 sm:p-6" role="region" aria-label="About me">
              <h2 id="about-heading" className="sr-only">About Me</h2>
              {aboutLines.map((line, index) => (
                <div key={line + index} className="flex group hover:bg-vs-bg-card-hover transition-colors duration-150 py-0.5">
                  <span className="flex-shrink-0 w-8 text-gray-500 opacity-50 select-none">{index + 1}</span>
                  <span className={index === 1 ? 'text-vs-green' : index === 12 || index === 23 ? 'text-vs-teal' : 'text-gray-400'}>
                    {line}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3 overflow-y-auto pr-2">
            {skillCategories.map((category) => (
              <div key={category.label} className="bg-vs-bg-card p-3 rounded-lg shadow-xl">
                <p className="text-gray-400 mb-2 text-xs font-mono border-b border-gray-700 pb-2">{category.label}</p>
                <ul className="grid grid-cols-1 gap-1 text-xs" role="list">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center p-1.5 hover:bg-vs-bg-card-hover rounded transition-colors duration-200">
                      <span className={`min-w-[12px] mr-1.5 shrink-0 ${skill.active ? 'text-vs-teal' : 'text-gray-600'}`} aria-hidden="true">
                        {skill.active ? '☑' : '□'}
                      </span>
                      <span className="text-gray-200">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
