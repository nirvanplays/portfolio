export interface KeyModule {
  name: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  visualType: 'campus' | 'physiosis' | 'planner' | 'pneumonia';
  overview: string;
  whatItDoes: string[];
  technology: string[];
  architecture: string;
  keyModules: KeyModule[];
  implementation: string[];
  status: string;
  timeline?: string;
  analyticsNote?: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: ProjectMetric[];
  googleTech?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer?: string;
  category?: string;
}

export interface EducationMilestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  tag?: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  summary: string;
  detail: string;
}
