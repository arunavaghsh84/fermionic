type Author = {
  name: string;
};

export type Blog = {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  createdBy: Author;
  createdAt: string;
};
