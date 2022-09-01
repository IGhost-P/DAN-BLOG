export interface IPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  isFeatured: boolean;
  image: string;
}

export interface IPosts {
  posts: IPost[];
}
