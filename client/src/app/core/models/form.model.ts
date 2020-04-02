import { Profile } from './profile.model';

export class Form {
  slug: string;
  originalSlug: string;
  title: string = '';
  description: string = '';
  id: string = '';
  text: string = '';
  fields: Array<Object> = [];
  tags: Array<string> = [];
  createdAt: string;
  updatedAt: string;
  liked: boolean;
  likesCount: number;
  viewsCount: number;
  author: Profile;
  filledBy: Profile;
  comments: Array<Object> = [];
  enabled: boolean;
  public: boolean;
  commentsEnabled: boolean;
  type: string;
  ofPayment: boolean;
  indications: string;
  currentStep: number;
  documentType: string;
  uri: string;
  image: string;
  amount: number;
  alreadyPaid: boolean;
  topLabelTitle: string;
  steps: any;
  information: string;
  updated: string;
}
