import { User } from 'firebase/auth';

export type UserAuthType = {
  userAuth: User | undefined;
  setUserAuth: (user: User) => void;
};
