export type ProjectCategory = 
  | 'Full Stack Web Application'
  | 'AI-Based Physiotherapy Gait Analysis'
  | 'TechSprint Hackathon 2025'
  | 'Academic Project';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  period?: string;
  techStack: string[];
  description: string;
  bulletPoints: string[];
  analyticsNote?: string;
  visualMetaphor: string;
  visualType: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
  problem: string;
  solution: string;
  implementation: string[];
  status: string;
}

export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  color: string;
  skills: string[];
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  category: string;
  verificationBadge: string;
  date?: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  category: 'education' | 'hackathon' | 'project' | 'certification' | 'milestone';
  description: string;
  highlights: string[];
  tag: string;
}

export interface CurrentFocusItem {
  id: string;
  title: string;
  code: string;
  status: string;
  description: string;
  technologies: string[];
  matrixScore: string;
}
