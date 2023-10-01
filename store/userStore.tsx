import { create } from "zustand";

type UserType = {
  user: {
    id: string;
  } | null;
  initUser: (uid: string) => void;
};

export const useUser = create<UserType>((set) => ({
  user: null,
  initUser: (uid) => {
    set((state) => ({
      ...state,
      user: {
        id: uid,
      },
    }));
  },
}));
