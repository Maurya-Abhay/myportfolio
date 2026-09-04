export interface Profile {
  name: string;
  initials: string;
  role: string;
  headline: string;
  summary: string;
  about: string;
  email: string;
  location: string;
  availability: string;
  image: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image?: string;
  year: string;
  status: string;
  stack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  description: string;
}

export interface AchievementItem {
  title: string;
  detail: string;
}

export interface SiteMeta {
  title: string;
  description: string;
}
