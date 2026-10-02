export type Language = 'tr' | 'en';

export type PageRoute = 'home' | 'works' | 'services' | 'marketing';

export type ProjectCategory = 
  | 'all'
  | 'commercials'
  | 'social'
  | 'brand'
  | 'product'
  | 'photography'
  | 'reels'
  | 'events';

export interface Project {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  client: string;
  category: ProjectCategory;
  categoryLabel: {
    tr: string;
    en: string;
  };
  productionType: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  year: string;
  thumbnail: string;
  videoUrl?: string;
  aspectRatio: '16:9' | '9:16' | '4:5' | '1:1';
  deliverables: {
    tr: string[];
    en: string[];
  };
  specs?: {
    camera: string;
    grading: string;
    audio: string;
    aspect: string;
  };
  featured?: boolean;
}

export interface ServiceDetail {
  id: string;
  title: {
    tr: string;
    en: string;
  };
  tagline: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  items: {
    tr: string[];
    en: string[];
  };
  deliverables: {
    tr: string[];
    en: string[];
  };
  highlight: {
    tr: string;
    en: string;
  };
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  projectTypes: string[];
  budget: string;
  message: string;
}
