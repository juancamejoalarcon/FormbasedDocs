import { Profile } from './profile.model';

export class Comment {
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  liked: boolean;
  likesCount: number;
  author: Profile;
  isAresponse: boolean;
  responses: Array<any>;
}
