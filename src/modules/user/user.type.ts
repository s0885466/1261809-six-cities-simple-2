export enum USER_TYPE {
  DEFAULT = 'default',
  PRO = 'pro',
}

export type User = {
  name: string;
  email: string;
  avatar?: string;
  password: string;
  userType: USER_TYPE;
  avatarImg?: string;
};
