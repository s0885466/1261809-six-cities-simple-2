import { User } from '../modules/user/user.type';

export type Comment = {
  content: string;
  publishedDate: Date;
  rating: number;
  author: User;
};
