export interface ExperienceContent {
  id: string;
  title: string;
  details?: string;
  more?: string;
  technologies?: string;
  class?: string;
}

export interface Experience {
  date: string;
  contents: ExperienceContent[];
}
