export interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}
