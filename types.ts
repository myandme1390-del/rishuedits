export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  size: 'large' | 'medium' | 'small';
}

export interface VideoProject {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl?: string;
  externalUrl?: string;
  duration: string;
  category: string;
  tags: string[];
  aspectRatio?: string;
}

// Exhibition interface for the exhibitions list
export interface Exhibition {
  id: string;
  index: string;
  title: string;
  location: string;
  date: string;
}