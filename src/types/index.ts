export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'client';
  tag: 'Live' | 'Case study';
  role?: string;
  description: string;
  detailedDescription?: string;
  outcomes?: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumbnail?: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  brand?: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  cgpa: string;
  period: string;
}

export interface SiteConfig {
  baseUrl: string;
  name: string;
  title: string;
  brand: string;
  brandSince: string;
  location: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  availability: string;
  targetRoles: string;
  workMode: string;
  cvPath: string;
  cvFileName: string;
  heroImage: string;
  summary: string;
  aboutExtended: string;
  stats: {
    liveWebsites: number;
    aiProducts: number;
    countriesServed: number;
  };
  education: EducationItem;
}
