import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    label: '// Programming languages & frameworks',
    skills: [
      { name: 'NEXT.JS', active: true },
      { name: 'REACT JS', active: true },
      { name: 'React Native', active: true },
      { name: 'JavaScript / TypeScript', active: true },
      { name: 'Flutter', active: false },
      { name: 'Express', active: false },
      { name: 'Tailwind / Bootstrap / Antd', active: true },
      { name: 'AWS', active: true },
      { name: 'Git', active: true },
      { name: 'Digital Ocean', active: true },
      { name: 'SQL', active: true },
      { name: 'NoSQL', active: true },
      { name: 'Offline First Architecture', active: true },
      { name: 'Scaling / Testing', active: true },
    ],
  },
  {
    label: '// Tools & Operating Systems',
    skills: [
      { name: 'Windows', active: true },
      { name: 'Mac OS', active: true },
      { name: 'Linux', active: true },
      { name: 'Postman', active: true },
      { name: 'Figma', active: true },
    ],
  },
];
