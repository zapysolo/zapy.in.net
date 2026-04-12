import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    label: '// backend',
    skills: [
      { name: 'Node.js', active: true },
      { name: 'Express.js', active: true },
      { name: 'Koa.js', active: true },
      { name: 'REST APIs', active: true },
      { name: 'WebSockets / Socket.io', active: true },
      { name: 'Microservices', active: true },
      { name: 'RPA (Puppeteer)', active: true },
      { name: 'SQS / Message Queues', active: true },
    ],
  },
  {
    label: '// frontend & mobile',
    skills: [
      { name: 'React', active: true },
      { name: 'Next.js', active: true },
      { name: 'React Native (Expo)', active: true },
      { name: 'Vue.js', active: true },
      { name: 'Flutter', active: true },
      { name: 'Tailwind CSS', active: true },
      { name: 'Ant Design', active: true },
      { name: 'TypeScript', active: true },
    ],
  },
  {
    label: '// databases',
    skills: [
      { name: 'PostgreSQL', active: true },
      { name: 'MongoDB', active: true },
      { name: 'ArangoDB', active: true },
      { name: 'Redis', active: true },
      { name: 'PouchDB / CouchDB', active: true },
      { name: 'Knex.js', active: true },
    ],
  },
  {
    label: '// devops & cloud',
    skills: [
      { name: 'AWS (EC2, S3, Route 53)', active: true },
      { name: 'PM2', active: true },
      { name: 'Nginx', active: true },
      { name: 'Docker', active: true },
      { name: 'GitHub Actions', active: false },
      { name: 'Linux', active: true },
    ],
  },
  {
    label: '// tools',
    skills: [
      { name: 'Git', active: true },
      { name: 'Postman', active: true },
      { name: 'New Relic', active: true },
      { name: 'Prometheus', active: true },
      { name: 'Expo OTA', active: true },
      { name: 'Figma', active: false },
    ],
  },
];