import { UserAuthType } from '@/types/userAuthType';
import { create } from 'zustand';

export const useUserAuthStore = create<UserAuthType>((set) => ({
  userAuth: undefined,
  setUserAuth: (userAuth) => set({ userAuth }),
}));
