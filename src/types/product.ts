interface IFile {
  _id: number;
  name: string;
  url: string;
  type: string;
}

export type Product = {
  _id: number;
  name: string;
  shortDescription: string;
  details: string;
  files: IFile[];
  isFeatured: boolean;
  createdAt?: Date;
};
