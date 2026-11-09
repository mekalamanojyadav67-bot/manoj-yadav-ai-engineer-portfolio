export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Basic' | 'Learning' | 'Exploring';
  percentage: number;
  category: 'Languages' | 'Web' | 'AI & Emerging';
  description: string;
  topics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Completed' | 'Upcoming / In Development';
  status: 'Completed' | 'In Research' | 'Upcoming';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  hasInteractiveDemo?: boolean;
  image?: string;
}

export interface RoadmapStep {
  step: number;
  phase: string;
  title: string;
  status: 'In Progress' | 'Upcoming' | 'Goal';
  description: string;
  skills: string[];
}

export interface CourseworkTopic {
  code: string;
  title: string;
  focus: string;
  status: 'Completed' | 'Current';
}
