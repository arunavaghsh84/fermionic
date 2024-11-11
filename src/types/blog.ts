type Author = {
  name: string;
};

export type Blog = {
  _id: number;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  createdBy: Author;
  createdAt: string;
};
