interface IFile {
  _id: string;
  name: string;
  url: string;
  type: string;
}

export type SiliconIP = {
  _id: string;
  name: string;
  details: string;
  files: IFile[];
  isFeatured: boolean;
  createdAt?: Date;
};
