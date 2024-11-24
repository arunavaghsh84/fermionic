type Author = {
  name: string;
};

export type Blog = {
  _id: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  createdBy: Author;
  createdAt: string;
};
