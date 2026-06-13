export interface PersonalInfo {
  firstName: string;
  lastName: string;
  headline: string;
  summary: string;
}

export interface Contact {
  address: string;
  email: string;
  phone: string;
  website: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Language {
  id: string;
  name: string;
  level: "basic" | "intermediate" | "advanced" | "fluent" | "native";
}

export interface Award {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface CVTheme {
  id: string;
  name: string;
  primaryColor: string;
  accentColor: string;
  sidebarBg: string;
  sidebarText: string;
}

export interface CVData {
  id: string;
  name: string;
  templateId: string;
  themeId: string;
  updatedAt: string;
  photo: string;
  personalInfo: PersonalInfo;
  contact: Contact;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  languages: Language[];
  awards: Award[];
}

export interface TemplateDefinition {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

export function createId(): string {
  return crypto.randomUUID();
}
