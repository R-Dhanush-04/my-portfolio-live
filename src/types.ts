export interface SkillItem {
  name: string;
  category: 'backend' | 'frontend' | 'database';
  proficiency: number;
  iconName: string;
  description: string;
  level: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'java' | 'web';
  badge: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  architecture: string;
  status: string;
  githubUrl: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  institution: string;
  description: string;
  type: 'education' | 'employment' | 'learning';
  statusBadge?: string;
  score?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
