import { create } from 'zustand';
import { db } from '@/db/firebase';
import { User } from 'firebase/auth';

type UserType = {
  userAuth: User | null;
  setUserAuth: (user: User) => void;
};

export const useUserAuthStore = create<UserType>((set) => ({
  userAuth: null,
  setUserAuth: (userAuth) => set({ userAuth }),
}));
