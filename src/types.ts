export type PageId = 
  | 'home'
  | 'resume'
  | 'logofolio'
  | 'commercial'
  | 'editorial'
  | 'interior3d'
  | 'uiux'
  | 'decor'
  | 'contacts';

export interface PageMeta {
  id: PageId;
  title: string;
  shortLabel: string;
  tagline: string;
}

export interface ExperienceRecord {
  period: string;
  role: string;
  company: string;
  type: string;
  achievements: string[];
}

export interface EducationRecord {
  period: string;
  institution: string;
  faculty: string;
  degree?: string;
}

export interface TrainingRecord {
  title: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  tools: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  tagline: string;
  description: string;
  highlights: string[];
  tools: string[];
}
