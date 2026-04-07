export interface Project {
  title: string;
  slug: string;
  number: number;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
  image: string;
}

export interface Skill {
  name: string;
  active: boolean;
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export interface Social {
  label: string;
  url: string;
  trackingName: string;
}

export interface NavItem {
  label: string;
  href: string;
  section: string;
}
