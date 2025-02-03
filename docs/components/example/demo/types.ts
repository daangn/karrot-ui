export type Article = {
  id: number;
  title: string;
  content: string;
  author: string;
  categoryId: string;
  createdAt: string;
  isPopular?: boolean;
};

export type Category = {
  id: string;
  name: string;
};
