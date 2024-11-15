interface IFile {
  _id: number;
  name: string;
  url: string;
  type: string;
}

export type SiliconIP = {
  _id: number;
  name: string;
  details: string;
  files: IFile[];
  isFeatured: boolean;
  createdAt?: Date;
};
