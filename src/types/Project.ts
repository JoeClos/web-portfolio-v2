export const ProjectCategory = {
  All: "All",
  Frontend: "Frontend",
  FullStack: "Full Stack",
  CMS: "CMS",
  UIUX: "UI/UX",
} as const;

export type ProjectCategory =
  (typeof ProjectCategory)[keyof typeof ProjectCategory];
  
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveLink?: string;
  codeLink?: string;
  category: ProjectCategory;
}

